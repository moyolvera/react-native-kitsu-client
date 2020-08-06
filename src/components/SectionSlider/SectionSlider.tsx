import React from 'react';
import { View, Text } from 'native-base';
import { FlatList } from 'react-native-gesture-handler';
import styles from './SectionSlider.styles';
import CommonStyles from '../../styles/CommonStyles';

function SectionSlider() {
  return (
    <View>
      <View style={CommonStyles.paddingLeft10}>
        <Text>ACTION</Text>
      </View>
      <View>
        <FlatList
          horizontal
          style={CommonStyles.padding10}
          data={[1, 2, 3, 4, 5, 6, 7, 8, 9, 10]}
          renderItem={function ({ item }) {
            return (
              <View style={styles.item}>
                <Text>{String(item)}</Text>
              </View>
            );
          }}
        />
      </View>
    </View>
  );
}

export default SectionSlider;
