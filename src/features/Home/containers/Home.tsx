import React from 'react';
import { Container, Content } from 'native-base';

import { Loader, SectionSlider } from '../../../components';
import CommonStyles from '../../../styles/CommonStyles';

function Home() {
  return (
    <Container>
      <Loader isLoading={false} />
      <Content contentContainerStyle={CommonStyles.paddingHorizontal10}>
        <SectionSlider />
      </Content>
    </Container>
  );
}

export default Home;
