import React, { useState, useEffect } from 'react';
import { View } from 'native-base';
import { FlatList } from 'react-native-gesture-handler';

import { Anime } from '../../../declaration/types.td';
import { AxiosRequestResult, AxiosService } from '../../../declaration/global.td';
import FastImageWrapper from '../../FastImageWrapper/containers/FastImageWrapper';
import useAxiosRequest from '../../../hooks/useAxiosRequest';
import useOfflineStorage from '../../../hooks/useOfflineStorage';
import styles from './SectionSlider.styles';
import SliderPlaceholder from '../../SliderPlaceholder/containers/SliderPlaceholder';
import Label from '../../Label/containers/Label';
import { CONTENT_CATEGORIES, ITEM_TYPE } from '../../../constants/common';

function SectionSlider({
  title,
  service,
  type,
  section,
}: {
  title: string;
  service: AxiosService<Anime[]>;
  type: ITEM_TYPE;
  section: CONTENT_CATEGORIES;
}) {
  const [sectionItems, setSectionItems] = useState<Anime[]>([]);
  const sectionItemsRequest: AxiosRequestResult<Anime[]> = useAxiosRequest<Anime[]>(service);
  const { processDataAsNeeded } = useOfflineStorage(section, type);

  async function handleSectionItemsRequest(sectionItemsResult: AxiosRequestResult<Anime[]>) {
    if (sectionItemsResult.state.data) {
      setSectionItems(sectionItemsResult.state.data);
      await processDataAsNeeded(sectionItemsResult.state.data);
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
