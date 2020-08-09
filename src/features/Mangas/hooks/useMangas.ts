import { useContext } from 'react';
import { ColorContext } from '../../../context/ColorContext';

function useMangas() {
  const { colors } = useContext(ColorContext);

  return {
    colors,
    isLoading: false,
  };
}

export default useMangas;
