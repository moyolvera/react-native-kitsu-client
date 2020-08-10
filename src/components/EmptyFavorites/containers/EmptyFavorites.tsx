import React, { useContext } from 'react';
import { TextStyle } from 'react-native';
import { View, Icon, Text } from 'native-base';

import { createDynamicStyles } from '../../../styles/CommonStyles';
import { ColorContext } from '../../../context/ColorContext';
import styles from './EmptyFavorites.styles';

const EmptyFavorites = () => {
  const { colors } = useContext(ColorContext);

  return (
    <View style={styles.wrapper}>
      <Icon
        name="star"
        type="Feather"
        style={createDynamicStyles<TextStyle>({ color: colors.DETAILS_LIGHT, fontSize: 70 })}
      />
      <Text style={createDynamicStyles<TextStyle>({ color: colors.DETAILS_LIGHT, fontSize: 18, marginVertical: 20 })}>
        You don't have favorites selected
      </Text>
    </View>
  );
};

export default EmptyFavorites;
