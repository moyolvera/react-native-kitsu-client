import { useContext } from 'react';
import { ColorContext } from '../../../context/ColorContext';

function useHome() {
  const { colors } = useContext(ColorContext);

  return {
    colors,
    isLoading: false,
  };
}

export default useHome;
