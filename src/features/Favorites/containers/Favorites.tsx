import React, { useMemo } from 'react';
import { ViewStyle } from 'react-native';
import { Content, View } from 'native-base';

import { Loader, Label, FastImageWrapper, EmptyFavorites, FeatureContainer } from '../../../components';
import CommonStyles, { createDynamicStyles } from '../../../styles/CommonStyles';

import { useRoute, RouteProp } from '@react-navigation/native';
import { TabStackParamList } from '../../../navigator/TabBarNavigator';
import useFavorites from '../hooks/useFavorites';
import styles from './Favorites.styles';

function Favorites() {
  const { params } = useRoute<RouteProp<TabStackParamList, 'Favorites'>>();
  const paddingBottom = useMemo(() => params?.paddingBottom || 0, [params]);
  const { animes, colors, isLoading, mangas } = useFavorites();

  return (
    <FeatureContainer styles={createDynamicStyles<ViewStyle>({ backgroundColor: colors.BACKGROUND, paddingBottom })}>
      <Loader isLoading={isLoading} />
      <Content contentContainerStyle={[CommonStyles.paddingLeft10, CommonStyles.paddingTop20]}>
        <Label label="Favorite Animes" style={styles.title} />
        {animes.length > 0 ? (
          <View style={styles.itemsWrapper}>
            {animes.map((item) => (
              <FastImageWrapper key={item.id} item={item} width={110} height={160} styleWrapper={styles.itemStyle} />
            ))}
          </View>
        ) : (
          <EmptyFavorites />
        )}
        <Label label="Favorite Mangas" style={styles.title} />
        {mangas.length > 0 ? (
          <View style={styles.itemsWrapper}>
            {mangas.map((item) => (
              <FastImageWrapper key={item.id} item={item} width={110} height={160} styleWrapper={styles.itemStyle} />
            ))}
          </View>
        ) : (
          <EmptyFavorites />
        )}
      </Content>
    </FeatureContainer>
  );
}

export default Favorites;
