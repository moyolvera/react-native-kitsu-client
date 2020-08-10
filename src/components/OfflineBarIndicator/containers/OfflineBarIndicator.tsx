import React, { useContext } from 'react';
import { View, Icon } from 'native-base';
import { TextStyle, ViewStyle } from 'react-native';

import Label from '../../Label/containers/Label';
import { ColorContext } from '../../../context/ColorContext';
import { createDynamicStyles } from '../../../styles/CommonStyles';

const OfflineBarIndicator = () => {
  const { colors } = useContext(ColorContext);

  return (
    <View
      style={createDynamicStyles<ViewStyle>({
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: 20,
        paddingVertical: 4,
        backgroundColor: '#8B0000',
      })}>
      <Icon
        name="alert-circle"
        type="Feather"
        style={createDynamicStyles<TextStyle>({ color: colors.TEXT, fontSize: 18 })}
      />
      <Label label="You are offline" style={createDynamicStyles<TextStyle>({ marginLeft: 10, fontSize: 14 })} />
    </View>
  );
};

export default OfflineBarIndicator;
