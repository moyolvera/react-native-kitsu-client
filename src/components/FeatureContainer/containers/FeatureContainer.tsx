import React, { useContext } from 'react';
import { Container } from 'native-base';
import { ViewStyle, StyleProp } from 'react-native';

import Loader from '../../Loader/containers/Loader';
import { ConnectionContext } from '../../../context/ConnectionContext';
import OfflineBarIndicator from '../../OfflineBarIndicator/containers/OfflineBarIndicator';

const FeatureContainer = ({
  styles,
  isLoading,
  children,
}: {
  styles: StyleProp<ViewStyle>;
  isLoading?: boolean;
  children: React.ReactNode;
}) => {
  const { isOnline } = useContext(ConnectionContext);

  return (
    <Container style={styles}>
      <Loader isLoading={isLoading} />
      {!isOnline && <OfflineBarIndicator />}
      {children}
    </Container>
  );
};

export default FeatureContainer;
