import React from 'react';
import { Container, Content } from 'native-base';

import { Loader, SectionSlider } from '../../../components';
import useHome from '../hooks/useHome';
import CommonStyles from '../../../styles/CommonStyles';

function Home() {
  const { isLoading } = useHome();

  return (
    <Container>
      <Loader isLoading={isLoading} />
      <Content contentContainerStyle={CommonStyles.paddingHorizontal10}>
        <SectionSlider />
      </Content>
    </Container>
  );
}

export default Home;
