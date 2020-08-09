import React from 'react';
import Navigator from './navigator/Navigator';
import ColorProvider from './context/ColorContext';
import FavoritesAnimesContext from './context/FavoritesAnimesContext';
import FavoritesMangasContext from './context/FavoritesMangasContext';
import ConnectionProvider from './context/ConnectionContext';

const App = () => {
  return (
    <>
      <ConnectionProvider>
        <ColorProvider>
          <FavoritesAnimesContext>
            <FavoritesMangasContext>
              <Navigator />
            </FavoritesMangasContext>
          </FavoritesAnimesContext>
        </ColorProvider>
      </ConnectionProvider>
    </>
  );
};

export default App;
