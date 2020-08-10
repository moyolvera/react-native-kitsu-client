import React from 'react';
import Axios from 'axios';
import Navigator from './navigator/Navigator';
import ColorProvider from './context/ColorContext';
import FavoritesAnimesContext from './context/FavoritesAnimesContext';
import FavoritesMangasContext from './context/FavoritesMangasContext';
import ConnectionProvider from './context/ConnectionContext';

Axios.defaults.timeout = 2000;

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
