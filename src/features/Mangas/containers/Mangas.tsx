import React, { useMemo } from 'react';
import { ViewStyle } from 'react-native';
import { Container, Content } from 'native-base';
import { useRoute, RouteProp } from '@react-navigation/native';

import { Loader, SectionSlider, Label } from '../../../components';
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
import styles from './Mangas.styles';
import { TabStackParamList } from '../../../navigator/TabBarNavigator';

function Mangas() {
  const { colors, isLoading } = useMangas();
  const { params } = useRoute<RouteProp<TabStackParamList, 'Mangas'>>();
  const paddingBottom = useMemo(() => params?.paddingBottom || 0, [params]);

  return (
    <Container style={createDynamicStyles<ViewStyle>({ backgroundColor: colors.BACKGROUND, paddingBottom })}>
      <Loader isLoading={isLoading} />
      <Content contentContainerStyle={[CommonStyles.paddingLeft10, CommonStyles.paddingTop20]}>
        <Label label="List of Mangas" style={styles.title} />
        <SectionSlider title="Action" service={getActionItems} />
        <SectionSlider title="Drama" service={getDramaItems} />
        <SectionSlider title="Fantasy" service={getFantasyItems} />
        <SectionSlider title="Romance" service={getRomanceItems} />
        <SectionSlider title="Science Fiction" service={getScienceFictionItems} />
        <SectionSlider title="Thriller" service={getThrillerItems} />
      </Content>
    </Container>
  );
}

export default Mangas;
