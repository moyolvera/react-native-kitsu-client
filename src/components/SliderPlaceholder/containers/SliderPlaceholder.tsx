import React from 'react';
import { FlatList } from 'react-native';
import SliderPlaceholderItem from '../components/SliderPlaceholderItem';
import styles from './SliderPlaceholder.styles';

const SliderPlaceholder = () => {
  return (
    <FlatList
      horizontal
      showsHorizontalScrollIndicator={false}
      style={styles.list}
      data={[1, 2, 3, 4, 5, 6]}
      renderItem={function () {
        return <SliderPlaceholderItem />;
      }}
      keyExtractor={(item, index) => `skeleton-${item}-${index}`}
    />
  );
};

export default SliderPlaceholder;
