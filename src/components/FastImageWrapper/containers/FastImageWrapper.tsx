import React, { useState } from 'react';
import { View, Text, Icon } from 'native-base';
import FastImage from 'react-native-fast-image';
import { TouchableOpacity } from 'react-native-gesture-handler';
import LinearGradient from 'react-native-linear-gradient';
import { useNavigation } from '@react-navigation/native';

import SCREENS from '../../../constants/screens';
import { appendElipsisIfRequired } from '../../../modules/Util';
import { Anime } from '../../../declaration/types.td';
import styles from './FastImageWrapper.styles';
import { StyleProp, ViewStyle } from 'react-native';

function FastImageWrapper({
  item,
  width,
  height,
  styleWrapper,
}: {
  item: Anime;
  width: number;
  height: number;
  styleWrapper?: StyleProp<ViewStyle>;
}) {
  const { navigate } = useNavigation();
  const [isImageLoaded, setIsImageLoaded] = useState(false);

  function setIsLoaded() {
    setIsImageLoaded(true);
  }

  return (
    <TouchableOpacity
      style={[{ width, height }, styles.wrapper, styleWrapper]}
      onPress={function () {
        navigate(SCREENS.DETAIL, { item });
      }}>
      {!isImageLoaded && (
        <View style={styles.iconWrapper}>
          <Icon name="image" type="Feather" style={styles.icon} />
        </View>
      )}
      {item.attributes.posterImage && item.attributes.posterImage.small && (
        <FastImage
          source={{ uri: item.attributes.posterImage.small, priority: FastImage.priority.normal }}
          style={{ width, height }}
          onLoadEnd={setIsLoaded}
        />
      )}
      <View style={styles.titleItemWrapper}>
        <LinearGradient
          style={styles.gradient}
          start={{ x: 0.0, y: 1.0 }}
          end={{ x: 0.0, y: 0.0 }}
          locations={[0, 0.9]}
          colors={['#000', '#ffffff00']}>
          <Text style={styles.title}>
            {appendElipsisIfRequired(String(item.attributes.titles.en || item.attributes.titles.en_jp), 10)}
          </Text>
        </LinearGradient>
      </View>
    </TouchableOpacity>
  );
}

export default FastImageWrapper;
