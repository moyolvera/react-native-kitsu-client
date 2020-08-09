import React from 'react';
import Navigator from './navigator/Navigator';
import ColorProvider from './context/ColorContext';
import FavoritesAnimesContext from './context/FavoritesAnimesContext';
import FavoritesMangasContext from './context/FavoritesMangasContext';

const App = () => {
  return (
    <>
      <ColorProvider>
        <FavoritesAnimesContext>
          <FavoritesMangasContext>
            <Navigator />
          </FavoritesMangasContext>
        </FavoritesAnimesContext>
      </ColorProvider>
    </>
  );
};

export default App;
