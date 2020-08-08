import React from 'react';
import { ViewStyle } from 'react-native';
import { Container, Content } from 'native-base';

import { Loader, SectionSlider } from '../../../components';
import useHome from '../hooks/useHome';
import CommonStyles, { createDynamicStyles } from '../../../styles/CommonStyles';
import {
  getActionItems,
  getDramaItems,
  getFantasyItems,
  getRomanceItems,
  getScienceFictionItems,
  getThrillerItems,
} from '../services/HomeServices';

function Home() {
  const { colors, isLoading } = useHome();

  return (
    <Container style={createDynamicStyles<ViewStyle>({ backgroundColor: colors.BACKGROUND })}>
      <Loader isLoading={isLoading} />
      <Content contentContainerStyle={[CommonStyles.paddingLeft10, CommonStyles.paddingTop20]}>
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

export default Home;
