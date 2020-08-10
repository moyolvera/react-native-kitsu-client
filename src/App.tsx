import React from 'react';
import { Root } from 'native-base';
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
              <Root>
                <Navigator />
              </Root>
            </FavoritesMangasContext>
          </FavoritesAnimesContext>
        </ColorProvider>
      </ConnectionProvider>
    </>
  );
};

export default App;
