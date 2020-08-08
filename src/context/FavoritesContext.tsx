import React, { useState, useMemo, createContext, useEffect } from 'react';
import { getTypedKey, StorageKeys } from '../modules/Storage';

type FavoritesContextType = {
  favorites: string[];
  setFavorites?: React.Dispatch<React.SetStateAction<string[]>>;
};

export const FavoritesContext = createContext<FavoritesContextType>({
  favorites: [],
});

function FavoritesProvider({ children }: { children: React.ReactNode }) {
  const [favorites, setFavorites] = useState<string[]>([]);
  const value = useMemo(() => ({ favorites, setFavorites }), [favorites, setFavorites]);

  async function getFavoritesFromStorage() {
    const favoritesFromStorage = await getTypedKey<string[]>(StorageKeys.FAVORITES, []);

    if (favoritesFromStorage && favoritesFromStorage.length > 0) {
      setFavorites(favoritesFromStorage);
    }
  }

  useEffect(() => {
    getFavoritesFromStorage();
  }, []);

  return <FavoritesContext.Provider value={value}>{children}</FavoritesContext.Provider>;
}

export default FavoritesProvider;
