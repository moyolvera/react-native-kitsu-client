import React, { useState, useEffect, useContext } from 'react';
import { View, Text } from 'native-base';
import { FlatList } from 'react-native-gesture-handler';

import { Anime } from '../../../declaration/types.td';
import { AxiosRequestResult } from '../../../declaration/global.td';
import FastImageWrapper from '../../FastImageWrapper/containers/FastImageWrapper';
import useAxiosRequest from '../../../hooks/useAxiosRequest';
import styles from './SectionSlider.styles';
import SliderPlaceholder from '../../SliderPlaceholder/containers/SliderPlaceholder';
import { ColorContext } from '../../../context/ColorContext';
import { createDynamicStyles } from '../../../styles/CommonStyles';
import { TextStyle } from 'react-native';
import Label from '../../Label/containers/Label';

function SectionSlider({ title, service }: { title: string; service: () => Promise<Anime[]> }) {
  const { colors } = useContext(ColorContext);
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
        <Label label={title} />
      </View>
      <View>
        {sectionItems.length === 0 ? (
          <SliderPlaceholder />
        ) : (
          <FlatList
            horizontal
            data={sectionItems}
            showsHorizontalScrollIndicator={false}
            renderItem={function ({ item }) {
              return <FastImageWrapper item={item} width={110} height={160} />;
            }}
          />
        )}
      </View>
    </View>
  );
}

export default SectionSlider;
