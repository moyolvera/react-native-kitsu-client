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
import styles from './Animes.styles';
import { useRoute, RouteProp } from '@react-navigation/native';
import { TabStackParamList } from '../../../navigator/TabBarNavigator';

function Animes() {
  const { colors, isLoading } = useAnimes();
  const { params } = useRoute<RouteProp<TabStackParamList, 'Animes'>>();
  const paddingBottom = useMemo(() => params?.paddingBottom || 0, [params]);

  return (
    <FeatureContainer
      isLoading={isLoading}
      styles={createDynamicStyles<ViewStyle>({ backgroundColor: colors.BACKGROUND, paddingBottom })}>
      <Content contentContainerStyle={[CommonStyles.paddingLeft10, CommonStyles.paddingTop20]}>
        <Label label="List of Animes" style={styles.title} />
        <SectionSlider title="Action" service={getActionItems} />
        <SectionSlider title="Drama" service={getDramaItems} />
        <SectionSlider title="Fantasy" service={getFantasyItems} />
        <SectionSlider title="Romance" service={getRomanceItems} />
        <SectionSlider title="Science Fiction" service={getScienceFictionItems} />
        <SectionSlider title="Thriller" service={getThrillerItems} />
      </Content>
    </FeatureContainer>
  );
}

export default Animes;
