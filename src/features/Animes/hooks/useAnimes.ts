import { useContext } from 'react';
import { ColorContext } from '../../../context/ColorContext';

function useAnimes() {
  const { colors } = useContext(ColorContext);

  return {
    colors,
    isLoading: false,
  };
}

export default useAnimes;
