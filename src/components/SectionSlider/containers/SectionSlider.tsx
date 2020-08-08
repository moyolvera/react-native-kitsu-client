import React, { useState, useEffect } from 'react';
import { View, Text } from 'native-base';
import { FlatList } from 'react-native-gesture-handler';

import { Anime } from '../../../declaration/types.td';
import { AxiosRequestResult } from '../../../declaration/global.td';
import FastImageWrapper from '../../FastImageWrapper/containers/FastImageWrapper';
import useAxiosRequest from '../../../hooks/useAxiosRequest';
import styles from './SectionSlider.styles';

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
            return <FastImageWrapper item={item} width={110} height={160} />;
          }}
        />
      </View>
    </View>
  );
}

export default SectionSlider;
