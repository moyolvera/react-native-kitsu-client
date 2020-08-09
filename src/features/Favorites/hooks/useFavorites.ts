import { useEffect, useState, useContext, useCallback } from 'react';
import { getFavoritesItems } from '../services/FavoritesService';
import { getTypedKey, StorageKeys } from '../../../modules/Storage';
import { AxiosRequestResult, FavoriteData } from '../../../declaration/global.td';
import { Anime } from '../../../declaration/types.td';
import useAxiosRequest from '../../../hooks/useAxiosRequest';
import { ColorContext } from '../../../context/ColorContext';
import { useFocusEffect } from '@react-navigation/native';

function useFavorites() {
  const { colors } = useContext(ColorContext);
  const [animes, setAnimes] = useState<Anime[]>([]);
  const getFavoritesItemsRequest: AxiosRequestResult<FavoriteData<Anime>> = useAxiosRequest<FavoriteData<Anime>>(
    getFavoritesItems
  );

  async function getFavoritesFromStorage() {
    const favoritesFromStorage = await getTypedKey<string[]>(StorageKeys.FAVORITES, []);
    getFavoritesItemsRequest.triggerRequest({ favoritesAnimes: favoritesFromStorage, favoritesSeries: [] });
  }

  function handleSearchItemsRequest(getFavoritesItemsResult: AxiosRequestResult<FavoriteData<Anime>>) {
    if (getFavoritesItemsResult.state.data) {
      setAnimes(getFavoritesItemsResult.state.data.animes);
    }
  }

  useEffect(() => {
    handleSearchItemsRequest(getFavoritesItemsRequest);
  }, [getFavoritesItemsRequest.state.isLoading]);

  useFocusEffect(
    useCallback(() => {
      getFavoritesFromStorage();
    }, [])
  );

  useEffect(() => {
    getFavoritesFromStorage();
  }, []);

  return {
    animes,
    colors,
    isLoading: getFavoritesItemsRequest.state.isLoading,
  };
}

export default useFavorites;
