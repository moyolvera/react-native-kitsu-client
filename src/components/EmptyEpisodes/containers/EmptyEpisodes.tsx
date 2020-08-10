import React, { useContext } from 'react';
import { TextStyle } from 'react-native';
import { View, Icon, Text } from 'native-base';

import { createDynamicStyles } from '../../../styles/CommonStyles';
import { ColorContext } from '../../../context/ColorContext';
import styles from './EmptyEpisodes.styles';

const EmptyEpisodes = () => {
  const { colors } = useContext(ColorContext);

  return (
    <View style={styles.wrapper}>
      <Icon
        name="film"
        type="Feather"
        style={createDynamicStyles<TextStyle>({ color: colors.DETAILS_LIGHT, fontSize: 70 })}
      />
      <Text style={createDynamicStyles<TextStyle>({ color: colors.DETAILS_LIGHT, fontSize: 18, marginVertical: 20 })}>
        Getting episodes...
      </Text>
    </View>
  );
};

export default EmptyEpisodes;
