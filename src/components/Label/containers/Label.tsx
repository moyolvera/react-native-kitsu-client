import React, { useContext } from 'react';
import { ColorContext } from '../../../context/ColorContext';
import { StyleProp, TextStyle } from 'react-native';
import { Text } from 'native-base';
import { createDynamicStyles } from '../../../styles/CommonStyles';

const Label = ({ label, style }: { label: string; style?: StyleProp<TextStyle> }) => {
  const { colors } = useContext(ColorContext);

  return (
    <Text style={[createDynamicStyles<TextStyle>({ color: colors.TEXT }), style]}>
      {label}
    </Text>
  );
};

export default Label;
