import React, { useMemo } from 'react';
import { ViewStyle } from 'react-native';
import { Content } from 'native-base';
import { useRoute, RouteProp } from '@react-navigation/native';

import { SectionSlider, Label, FeatureContainer } from '../../../components';
import useMangas from '../hooks/useMangas';
import CommonStyles, { createDynamicStyles } from '../../../styles/CommonStyles';
import {
  getActionItems,
  getDramaItems,
  getFantasyItems,
  getRomanceItems,
  getScienceFictionItems,
  getThrillerItems,
} from '../services/MangasServices';
import {
  getOfflineActionItems,
  getOfflineDramaItems,
  getOfflineFantasyItems,
  getOfflineRomanceItems,
  getOfflineScienceFictionItems,
  getOfflineThrillerItems,
} from '../services/OfflineMangasServices';
import styles from './Mangas.styles';
import { TabStackParamList } from '../../../navigator/TabBarNavigator';
import { CONTENT_CATEGORIES, ITEM_TYPE } from '../../../constants/common';

function Mangas() {
  const { colors, isLoading, isOnline } = useMangas();
  const { params } = useRoute<RouteProp<TabStackParamList, 'Mangas'>>();
  const paddingBottom = useMemo(() => params?.paddingBottom || 0, [params]);

  return (
    <FeatureContainer
      isLoading={isLoading}
      styles={createDynamicStyles<ViewStyle>({ backgroundColor: colors.BACKGROUND, paddingBottom })}>
      <Content contentContainerStyle={[CommonStyles.paddingLeft10, CommonStyles.paddingTop20]}>
        <Label label="List of Mangas" style={styles.title} />
        <SectionSlider
          title="Action"
          service={isOnline ? getActionItems : getOfflineActionItems}
          section={CONTENT_CATEGORIES.ACTION}
          type={ITEM_TYPE.MANGA}
        />
        <SectionSlider
          title="Drama"
          service={isOnline ? getDramaItems : getOfflineDramaItems}
          section={CONTENT_CATEGORIES.DRAMA}
          type={ITEM_TYPE.MANGA}
        />
        <SectionSlider
          title="Fantasy"
          service={isOnline ? getFantasyItems : getOfflineFantasyItems}
          section={CONTENT_CATEGORIES.FANTASY}
          type={ITEM_TYPE.MANGA}
        />
        <SectionSlider
          title="Romance"
          service={isOnline ? getRomanceItems : getOfflineRomanceItems}
          section={CONTENT_CATEGORIES.ROMANCE}
          type={ITEM_TYPE.MANGA}
        />
        <SectionSlider
          title="Science Fiction"
          service={isOnline ? getScienceFictionItems : getOfflineScienceFictionItems}
          section={CONTENT_CATEGORIES.SCIENCE_FICTION}
          type={ITEM_TYPE.MANGA}
        />
        <SectionSlider
          title="Thriller"
          service={isOnline ? getThrillerItems : getOfflineThrillerItems}
          section={CONTENT_CATEGORIES.THRILLER}
          type={ITEM_TYPE.MANGA}
        />
      </Content>
    </FeatureContainer>
  );
}

export default Mangas;
