import React from 'react';
import { Spinner } from 'native-base';
import { View } from 'react-native';
import styles from './Loader.styles';

function LoaderComponent({ isLoading }: { isLoading: boolean }) {
  return isLoading ? (
    <View style={styles.spinnerWrapper}>
      <Spinner />
    </View>
  ) : (
    <View />
  );
}

export default LoaderComponent;
