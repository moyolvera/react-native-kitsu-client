import React, { useState, useEffect } from 'react';
import { Container, Content, View, Text } from 'native-base';
import { useRoute, RouteProp } from '@react-navigation/native';
import { AuthStackParamList } from '../../../navigator/Navigator';
import { Anime } from '../../../declaration/types.td';
import CommonStyles from '../../../styles/CommonStyles';
import styles from './Detail.styles';
import { FastImageWrapper } from '../../../components';

function Detail() {
  const { params } = useRoute<RouteProp<AuthStackParamList, 'Detail'>>();
  const [itemSelected, setItemSelected] = useState<Anime>();

  useEffect(() => {
    if (params?.item) {
      setItemSelected(params.item);
    }
  }, [params?.item]);

  return (
    <Container>
      <Content style={CommonStyles.padding20}>
        {itemSelected && (
          <>
            <View style={CommonStyles.flexRow}>
              {itemSelected.attributes.posterImage && itemSelected.attributes.posterImage.small && (
                <FastImageWrapper item={itemSelected} height={240} width={160} />
              )}
              <View style={[CommonStyles.flexOne]}>
                <Text style={styles.title}>{itemSelected.attributes.canonicalTitle}</Text>
                {itemSelected.attributes.abbreviatedTitles &&
                  itemSelected.attributes.abbreviatedTitles.map((abbreviatedTitle) => <Text>{abbreviatedTitle}</Text>)}
                {itemSelected.attributes.titles &&
                  Object.values(itemSelected.attributes.titles).map((abbreviatedTitle: string) => (
                    <Text>{abbreviatedTitle}</Text>
                  ))}
                <Text style={[CommonStyles.marginTop5, CommonStyles.bigFont]}>Type</Text>
                <Text style={CommonStyles.marginBottom5}>{`${String(itemSelected.type).toUpperCase()}, ${String(
                  itemSelected.attributes.episodeCount
                )}`}</Text>
                <Text style={CommonStyles.bigFont}>Year</Text>
                <Text>{`${itemSelected.attributes.startDate} - ${itemSelected.attributes.endDate}`}</Text>
              </View>
            </View>
            <View style={CommonStyles.marginTop20}>
              <Text style={CommonStyles.bigFont}>Genres</Text>
              <Text>Genres list</Text>
            </View>
            <View style={[CommonStyles.flexRow, CommonStyles.marginTop20]}>
              <View style={CommonStyles.flexOne}>
                <Text style={CommonStyles.bigFont}>Average Rating</Text>
                <Text>{itemSelected.attributes.averageRating}</Text>
              </View>
              <View style={CommonStyles.flexOne}>
                <Text style={CommonStyles.bigFont}>Age Rating</Text>
                <Text>{`${itemSelected.attributes.ageRating}. ${itemSelected.attributes.ageRatingGuide}`}</Text>
              </View>
            </View>
            <View style={[CommonStyles.flexRow, CommonStyles.marginTop20]}>
              <View style={CommonStyles.flexOne}>
                <Text style={CommonStyles.bigFont}>Episode Duration</Text>
                <Text>{itemSelected.attributes.episodeLength}</Text>
              </View>
              <View style={CommonStyles.flexOne}>
                <Text style={CommonStyles.bigFont}>Airing Status</Text>
                <Text>{String(itemSelected.attributes.status).toUpperCase()}</Text>
              </View>
            </View>
            <View style={styles.synopsisWrapper}>
              <Text style={[CommonStyles.marginBottom20, CommonStyles.bigFont]}>Synopsis</Text>
              <Text>{itemSelected.attributes.synopsis}</Text>
            </View>
          </>
        )}
      </Content>
    </Container>
  );
}

export default Detail;
