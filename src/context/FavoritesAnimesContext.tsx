import React, { useState, useMemo, createContext, useEffect } from 'react';
import { getTypedKey, StorageKeys } from '../modules/Storage';

type FavoritesAnimesContextType = {
  favoritesAnimes: string[];
  setFavoritesAnimes?: React.Dispatch<React.SetStateAction<string[]>>;
};

export const FavoritesAnimesContext = createContext<FavoritesAnimesContextType>({
  favoritesAnimes: [],
});

function FavoritesAnimesProvider({ children }: { children: React.ReactNode }) {
  const [favoritesAnimes, setFavoritesAnimes] = useState<string[]>([]);
  const value = useMemo(() => ({ favoritesAnimes, setFavoritesAnimes }), [favoritesAnimes, setFavoritesAnimes]);

  async function getFavoritesAnimesFromStorage() {
    const favoritesAnimesFromStorage = await getTypedKey<string[]>(StorageKeys.FAVORITES, []);

    if (favoritesAnimesFromStorage && favoritesAnimesFromStorage.length > 0) {
      setFavoritesAnimes(favoritesAnimesFromStorage);
    }
  }

  useEffect(() => {
    getFavoritesAnimesFromStorage();
  }, []);

  return <FavoritesAnimesContext.Provider value={value}>{children}</FavoritesAnimesContext.Provider>;
}

export default FavoritesAnimesProvider;
