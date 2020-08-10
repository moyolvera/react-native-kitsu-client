import Share from 'react-native-share';
import { useRoute, RouteProp } from '@react-navigation/native';
import { AuthStackParamList } from '../../../navigator/Navigator';
import { useContext, useState, useEffect } from 'react';
import { ColorContext } from '../../../context/ColorContext';
import { FavoritesAnimesContext } from '../../../context/FavoritesAnimesContext';
import { FavoritesMangasContext } from '../../../context/FavoritesMangasContext';
import { Anime } from '../../../declaration/types.td';
import { setKey, StorageKeys } from '../../../modules/Storage';
import { ITEM_TYPE } from '../../../constants/common';

function useDetail() {
  const { params } = useRoute<RouteProp<AuthStackParamList, 'Detail'>>();
  const { colors } = useContext(ColorContext);
  const { favoritesAnimes, setFavoritesAnimes } = useContext(FavoritesAnimesContext);
  const { favoritesMangas, setFavoritesMangas } = useContext(FavoritesMangasContext);

  const [itemSelected, setItemSelected] = useState<Anime>();
  const [videoHeight, setVideoHeigght] = useState(0);
  const [isFavorite, setIsFavorite] = useState(false);

  function verifyAnimeIsFavorite() {
    if (!itemSelected || !itemSelected.id) {
      return;
    }

    const itemIsFavorite = favoritesAnimes.some((item) => String(item) === String(itemSelected.id));
    setIsFavorite(itemIsFavorite);
  }

  function verifyMangaIsFavorite() {
    if (!itemSelected || !itemSelected.id) {
      return;
    }

    const itemIsFavorite = favoritesMangas.some((item) => String(item) === String(itemSelected.id));
    setIsFavorite(itemIsFavorite);
  }

  function verifyIsFavorite() {
    if (!itemSelected || !itemSelected.type) {
      return;
    }

    if (itemSelected.type === ITEM_TYPE.ANIME) {
      verifyAnimeIsFavorite();
    } else if (itemSelected.type === ITEM_TYPE.MANGA) {
      verifyMangaIsFavorite();
    }
  }

  async function addAnimeToFavorites() {
    if (!itemSelected || !itemSelected.id || !setFavoritesAnimes) {
      return;
    }

    const updatedFavorites = [...favoritesAnimes];
    updatedFavorites.push(itemSelected.id);

    await setKey(StorageKeys.FAVORITES, JSON.stringify(updatedFavorites));
    setFavoritesAnimes(updatedFavorites);
  }

  async function addMangaToFavorites() {
    if (!itemSelected || !itemSelected.id || !setFavoritesMangas) {
      return;
    }

    const updatedFavorites = [...favoritesMangas];
    updatedFavorites.push(itemSelected.id);

    await setKey(StorageKeys.MANGAS_FAVORITES, JSON.stringify(updatedFavorites));
    setFavoritesMangas(updatedFavorites);
  }

  async function setItemAsFavorite() {
    if (!itemSelected || !itemSelected.type) {
      return;
    }

    if (itemSelected.type === ITEM_TYPE.ANIME) {
      await addAnimeToFavorites();
    } else if (itemSelected.type === ITEM_TYPE.MANGA) {
      await addMangaToFavorites();
    }
  }

  async function removeAnimeFromFavorites() {
    if (!itemSelected || !itemSelected.id || !setFavoritesAnimes) {
      return;
    }

    const updatedFavorites = favoritesAnimes.filter((item) => item !== itemSelected.id);

    await setKey(StorageKeys.FAVORITES, JSON.stringify(updatedFavorites));
    setFavoritesAnimes(updatedFavorites);
  }

  async function removeMangaFromFavorites() {
    if (!itemSelected || !itemSelected.id || !setFavoritesMangas) {
      return;
    }

    const updatedFavorites = favoritesMangas.filter((item) => item !== itemSelected.id);

    await setKey(StorageKeys.MANGAS_FAVORITES, JSON.stringify(updatedFavorites));
    setFavoritesMangas(updatedFavorites);
  }

  async function removeItemAsFavorite() {
    if (!itemSelected || !itemSelected.id) {
      return;
    }

    if (itemSelected.type === ITEM_TYPE.ANIME) {
      await removeAnimeFromFavorites();
    } else if (itemSelected.type === ITEM_TYPE.MANGA) {
      await removeMangaFromFavorites();
    }
  }

  async function toggleAsFavorite() {
    if (!isFavorite) {
      await setItemAsFavorite();
    } else {
      await removeItemAsFavorite();
    }
  }

  async function shareItem() {
    if (!itemSelected) {
      return;
    }

    try {
      const url = 'https://kitsu.io/' + itemSelected.type + '/' + itemSelected.attributes.slug;
      await Share.open({
        title: 'Share item',
        message: 'React Native Kistu client app.',
        url,
      });
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    if (params?.item) {
      setItemSelected(params.item);
    }
  }, [params?.item]);

  useEffect(() => {
    verifyIsFavorite();
  }, [favoritesAnimes, favoritesMangas, itemSelected]);

  return {
    colors,
    isFavorite,
    itemSelected,
    setVideoHeigght,
    shareItem,
    toggleAsFavorite,
    videoHeight,
  };
}

export default useDetail;
