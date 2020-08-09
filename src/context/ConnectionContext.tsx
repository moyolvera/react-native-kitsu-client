import React, { useState, useMemo, createContext, useEffect } from 'react';
import { useNetInfo } from '@react-native-community/netinfo';

type ConnectionContextType = {
  isOnline: boolean;
  setIsOnline?: React.Dispatch<React.SetStateAction<boolean>>;
};

export const ConnectionContext = createContext<ConnectionContextType>({
  isOnline: true,
});

function ConnectionProvider({ children }: { children: React.ReactNode }) {
  const [isOnline, setIsOnline] = useState<boolean>(true);
  const value = useMemo(() => ({ isOnline, setIsOnline }), [isOnline, setIsOnline]);
  const netInfo = useNetInfo();

  async function setIsConnected(isConnected: boolean) {
    setIsOnline(isConnected);
  }

  useEffect(() => {
    setIsConnected(netInfo.isConnected);
  }, [netInfo.isConnected]);

  return <ConnectionContext.Provider value={value}>{children}</ConnectionContext.Provider>;
}

export default ConnectionProvider;
