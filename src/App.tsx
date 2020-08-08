import React from 'react';
import Navigator from './navigator/Navigator';
import ColorProvider from './context/ColorContext';
import FavoritesContext from './context/FavoritesContext';

const App = () => {
  return (
    <>
      <ColorProvider>
        <FavoritesContext>
          <Navigator />
        </FavoritesContext>
      </ColorProvider>
    </>
  );
};

export default App;
