import React, { useState, useMemo, createContext, useEffect } from 'react';
import { getTypedKey, StorageKeys } from '../modules/Storage';

type FavoritesMangasContextType = {
  favoritesMangas: string[];
  setFavoritesMangas?: React.Dispatch<React.SetStateAction<string[]>>;
};

export const FavoritesMangasContext = createContext<FavoritesMangasContextType>({
  favoritesMangas: [],
});

function FavoritesMangasProvider({ children }: { children: React.ReactNode }) {
  const [favoritesMangas, setFavoritesMangas] = useState<string[]>([]);
  const value = useMemo(() => ({ favoritesMangas, setFavoritesMangas }), [favoritesMangas, setFavoritesMangas]);

  async function getFavoritesMangasFromStorage() {
    const favoritesMangasFromStorage = await getTypedKey<string[]>(StorageKeys.MANGAS_FAVORITES, []);

    if (favoritesMangasFromStorage && favoritesMangasFromStorage.length > 0) {
      setFavoritesMangas(favoritesMangasFromStorage);
    }
  }

  useEffect(() => {
    getFavoritesMangasFromStorage();
  }, []);

  return <FavoritesMangasContext.Provider value={value}>{children}</FavoritesMangasContext.Provider>;
}

export default FavoritesMangasProvider;
