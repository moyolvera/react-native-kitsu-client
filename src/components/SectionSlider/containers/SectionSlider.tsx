import React, { useState, useEffect } from 'react';
import { Alert, Image } from 'react-native';
import { View, Text } from 'native-base';
import { FlatList, TouchableOpacity } from 'react-native-gesture-handler';
import LinearGradient from 'react-native-linear-gradient';

import styles from './SectionSlider.styles';
import { AxiosRequestResult } from '../../../declaration/global.td';
import useAxiosRequest from '../../../hooks/useAxiosRequest';
import { Anime } from '../../../declaration/types.td';
import { appendElipsisIfRequired } from '../../../modules/Util';

function SectionSlider({ title, service }: { title: string; service: () => Promise<Anime[]> }) {
  const [sectionItems, setSectionItems] = useState<Anime[]>([]);
  const sectionItemsRequest: AxiosRequestResult<Anime[]> = useAxiosRequest<Anime[]>(service);

  function handleSectionItemsRequest(allMoviesAxiosResult: AxiosRequestResult<Anime[]>) {
    if (allMoviesAxiosResult.state.data) {
      setSectionItems(allMoviesAxiosResult.state.data);
    }
  }

  useEffect(() => {
    sectionItemsRequest.triggerRequest();
  }, []);

  useEffect(() => {
    handleSectionItemsRequest(sectionItemsRequest);
  }, [sectionItemsRequest.state.isLoading]);

  return (
    <View style={styles.sectionWrapper}>
      <View style={styles.sectionTitleWrapper}>
        <Text>{title}</Text>
      </View>
      <View>
        <FlatList
          horizontal
          data={sectionItems}
          showsHorizontalScrollIndicator={false}
          renderItem={function ({ item }) {
            return (
              <TouchableOpacity
                style={styles.item}
                onPress={function () {
                  Alert.alert(JSON.stringify(item.attributes.titles));
                }}>
                {item.attributes.posterImage && item.attributes.posterImage.tiny && (
                  <Image source={{ uri: item.attributes.posterImage.tiny, width: 110, height: 160 }} />
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
          }}
        />
      </View>
    </View>
  );
}

export default SectionSlider;
