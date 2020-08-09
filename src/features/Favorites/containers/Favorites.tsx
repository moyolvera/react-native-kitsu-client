import React, { useMemo } from 'react';
import { ViewStyle } from 'react-native';
import { Container, Content, View } from 'native-base';

import { Loader, Label, FastImageWrapper } from '../../../components';
import CommonStyles, { createDynamicStyles } from '../../../styles/CommonStyles';

import { useRoute, RouteProp } from '@react-navigation/native';
import { TabStackParamList } from '../../../navigator/TabBarNavigator';
import useFavorites from '../hooks/useFavorites';
import styles from './Favorites.styles';

function Favorites() {
  const { params } = useRoute<RouteProp<TabStackParamList, 'Favorites'>>();
  const paddingBottom = useMemo(() => params?.paddingBottom || 0, [params]);
  const { animes, colors, isLoading } = useFavorites();

  return (
    <Container style={createDynamicStyles<ViewStyle>({ backgroundColor: colors.BACKGROUND, paddingBottom })}>
      <Loader isLoading={isLoading} />
      <Content contentContainerStyle={[CommonStyles.paddingLeft10, CommonStyles.paddingTop20]}>
        <Label label="Favorite Animes" style={styles.title} />
        {animes.length > 0 && (
          <View style={styles.itemsWrapper}>
            {animes.map((item) => (
              <FastImageWrapper key={item.id} item={item} width={110} height={160} styleWrapper={styles.itemStyle} />
            ))}
          </View>
        )}
      </Content>
    </Container>
  );
}

export default Favorites;
