import React from 'react';
import { TouchableOpacity } from 'react-native';
import { Icon } from 'native-base';
import { useNavigation } from '@react-navigation/native';

import SCREENS from '../../../constants/screens';
import styles from './HeaderSearchButton.styles';

function HeaderSearchButton() {
  const { navigate } = useNavigation();

  return (
    <TouchableOpacity
      style={styles.wrapper}
      onPress={() => {
        navigate(SCREENS.SEARCH);
      }}>
      <Icon name="search" type="Feather" style={styles.icon} />
    </TouchableOpacity>
  );
}

export default HeaderSearchButton;
