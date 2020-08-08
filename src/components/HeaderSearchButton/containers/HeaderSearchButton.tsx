import React, { useContext } from 'react';
import { TouchableOpacity, TextStyle } from 'react-native';
import { Icon } from 'native-base';
import { useNavigation } from '@react-navigation/native';

import SCREENS from '../../../constants/screens';
import styles from './HeaderSearchButton.styles';
import { createDynamicStyles } from '../../../styles/CommonStyles';
import { ColorContext } from '../../../context/ColorContext';

function HeaderSearchButton() {
  const { colors } = useContext(ColorContext);
  const { navigate } = useNavigation();

  return (
    <TouchableOpacity
      style={styles.wrapper}
      onPress={() => {
        navigate(SCREENS.SEARCH);
      }}>
      <Icon
        name="search"
        type="Feather"
        style={[styles.icon, createDynamicStyles<TextStyle>({ color: colors.TEXT })]}
      />
    </TouchableOpacity>
  );
}

export default HeaderSearchButton;
