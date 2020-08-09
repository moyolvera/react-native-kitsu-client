import React, { useMemo } from 'react';
import { ViewStyle } from 'react-native';
import { Content } from 'native-base';

import { SectionSlider, Label, FeatureContainer } from '../../../components';
import useAnimes from '../hooks/useAnimes';
import CommonStyles, { createDynamicStyles } from '../../../styles/CommonStyles';
import {
  getActionItems,
  getDramaItems,
  getFantasyItems,
  getRomanceItems,
  getScienceFictionItems,
  getThrillerItems,
} from '../services/AnimesServices';
import {
  getOfflineActionItems,
  getOfflineDramaItems,
  getOfflineFantasyItems,
  getOfflineRomanceItems,
  getOfflineScienceFictionItems,
  getOfflineThrillerItems,
} from '../services/OfflineAnimesServices';
import styles from './Animes.styles';
import { useRoute, RouteProp } from '@react-navigation/native';
import { TabStackParamList } from '../../../navigator/TabBarNavigator';
import { CONTENT_CATEGORIES, ITEM_TYPE } from '../../../constants/common';

function Animes() {
  const { colors, isLoading, isOnline } = useAnimes();
  const { params } = useRoute<RouteProp<TabStackParamList, 'Animes'>>();
  const paddingBottom = useMemo(() => params?.paddingBottom || 0, [params]);

  return (
    <FeatureContainer
      isLoading={isLoading}
      styles={createDynamicStyles<ViewStyle>({ backgroundColor: colors.BACKGROUND, paddingBottom })}>
      <Content contentContainerStyle={[CommonStyles.paddingLeft10, CommonStyles.paddingTop20]}>
        <Label label="List of Animes" style={styles.title} />
        <SectionSlider
          title="Action"
          service={isOnline ? getActionItems : getOfflineActionItems}
          section={CONTENT_CATEGORIES.ACTION}
          type={ITEM_TYPE.ANIME}
        />
        <SectionSlider
          title="Drama"
          service={isOnline ? getDramaItems : getOfflineDramaItems}
          section={CONTENT_CATEGORIES.DRAMA}
          type={ITEM_TYPE.ANIME}
        />
        <SectionSlider
          title="Fantasy"
          service={isOnline ? getFantasyItems : getOfflineFantasyItems}
          section={CONTENT_CATEGORIES.FANTASY}
          type={ITEM_TYPE.ANIME}
        />
        <SectionSlider
          title="Romance"
          service={isOnline ? getRomanceItems : getOfflineRomanceItems}
          section={CONTENT_CATEGORIES.ROMANCE}
          type={ITEM_TYPE.ANIME}
        />
        <SectionSlider
          title="Science Fiction"
          service={isOnline ? getScienceFictionItems : getOfflineScienceFictionItems}
          section={CONTENT_CATEGORIES.SCIENCE_FICTION}
          type={ITEM_TYPE.ANIME}
        />
        <SectionSlider
          title="Thriller"
          service={isOnline ? getThrillerItems : getOfflineThrillerItems}
          section={CONTENT_CATEGORIES.THRILLER}
          type={ITEM_TYPE.ANIME}
        />
      </Content>
    </FeatureContainer>
  );
}

export default Animes;
