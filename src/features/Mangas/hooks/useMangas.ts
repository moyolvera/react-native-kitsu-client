import { useContext } from 'react';
import { ColorContext } from '../../../context/ColorContext';
import { ConnectionContext } from '../../../context/ConnectionContext';

function useMangas() {
  const { colors } = useContext(ColorContext);
  const { isOnline } = useContext(ConnectionContext);

  return {
    colors,
    isLoading: false,
    isOnline,
  };
}

export default useMangas;
