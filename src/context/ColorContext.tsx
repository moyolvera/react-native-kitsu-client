import React, { useState, useMemo, createContext } from 'react';
import darkmode from '../styles/darkmode';
import { ColorScheme } from '../declaration/global.td';

type ColorContextType = {
  colors: ColorScheme;
  setColors?: React.Dispatch<React.SetStateAction<ColorScheme>>;
};

export const ColorContext = createContext<ColorContextType>({
  colors: darkmode,
});

function ColorProvider({ children }: { children: React.ReactNode }) {
  const [colors, setColors] = useState<ColorScheme>(darkmode);
  const value = useMemo(() => ({ colors, setColors }), [colors, setColors]);

  return <ColorContext.Provider value={value}>{children}</ColorContext.Provider>;
}

export default ColorProvider;
