import React from 'react';
import Navigator from './navigator/Navigator';
import ColorProvider from './context/ColorContext';

const App = () => {
  return (
    <>
      <ColorProvider>
        <Navigator />
      </ColorProvider>
    </>
  );
};

export default App;
