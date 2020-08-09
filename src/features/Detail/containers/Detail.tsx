import React, { useState, useEffect, useContext } from 'react';
import { Container, Content, View, Icon } from 'native-base';
import { useRoute, RouteProp } from '@react-navigation/native';
import YoutubePlayer from 'react-native-youtube-iframe';

import { AuthStackParamList } from '../../../navigator/Navigator';
import { Anime } from '../../../declaration/types.td';
import CommonStyles, { createDynamicStyles } from '../../../styles/CommonStyles';
import styles from './Detail.styles';
import { FastImageWrapper, Label } from '../../../components';
import LOCAL_DIMENSIONS from '../../../constants/dimensions';
import { ColorContext } from '../../../context/ColorContext';
import { FavoritesContext } from '../../../context/FavoritesContext';
import { ViewStyle, TextStyle } from 'react-native';
import { setKey, StorageKeys } from '../../../modules/Storage';

function Detail() {
  const { params } = useRoute<RouteProp<AuthStackParamList, 'Detail'>>();
  const { colors } = useContext(ColorContext);
  const { favorites, setFavorites } = useContext(FavoritesContext);

  const [itemSelected, setItemSelected] = useState<Anime>();
  const [videoHeight, setVideoHeigght] = useState(0);
  const [isFavorite, setIsFavorite] = useState(false);

  async function verifyIsFavorite() {
    if (!itemSelected || !itemSelected.id) {
      console.log(isFavorite);
      return;
    }

    const itemIsFavorite = favorites.some((item) => String(item) === String(itemSelected.id));
    setIsFavorite(itemIsFavorite);
  }
  async function setItemAsFavorite() {
    if (!itemSelected || !itemSelected.id || !setFavorites) {
      return;
    }

    const updatedFavorites = [...favorites];
    updatedFavorites.push(itemSelected.id);

    await setKey(StorageKeys.FAVORITES, JSON.stringify(updatedFavorites));
    setFavorites(updatedFavorites);
  }

  async function removeItemAsFavorite() {
    if (!itemSelected || !itemSelected.id || !setFavorites) {
      return;
    }

    const updatedFavorites = favorites.filter((item) => item !== itemSelected.id);

    await setKey(StorageKeys.FAVORITES, JSON.stringify(updatedFavorites));
    setFavorites(updatedFavorites);
  }

  async function toggleAsFavorite() {
    if (!isFavorite) {
      await setItemAsFavorite();
    } else {
      await removeItemAsFavorite();
    }
  }

  useEffect(() => {
    if (params?.item) {
      console.log(params.item);
      setItemSelected(params.item);
    }
  }, [params?.item]);

  useEffect(() => {
    verifyIsFavorite();
  }, [favorites, itemSelected]);

  return (
    <Container style={createDynamicStyles<ViewStyle>({ backgroundColor: colors.CONTAINER })}>
      <Content>
        {itemSelected && (
          <>
            <View style={CommonStyles.padding20}>
              <View style={[CommonStyles.marginBottom20, CommonStyles.flexRow]}>
                <View style={styles.titleWrapper}>
                  <Label style={styles.title} label={itemSelected.attributes.canonicalTitle} />
                </View>
                <View style={styles.starWrapper}>
                  <Icon
                    name={!isFavorite ? 'star-border' : 'star'}
                    type="MaterialIcons"
                    style={createDynamicStyles<TextStyle>({ color: !isFavorite ? '#ffffff' : '#ffff00' })}
                    onPress={toggleAsFavorite}
                  />
                </View>
              </View>
              <View style={CommonStyles.flexRow}>
                {itemSelected.attributes.posterImage && itemSelected.attributes.posterImage.small && (
                  <FastImageWrapper item={itemSelected} height={240} width={160} />
                )}
                <View style={[CommonStyles.flexOne]}>
                  {itemSelected.attributes.abbreviatedTitles &&
                    itemSelected.attributes.abbreviatedTitles.map((abbreviatedTitle, index) => (
                      <Label key={`${abbreviatedTitle}-${index}`} label={abbreviatedTitle} />
                    ))}
                  {itemSelected.attributes.titles &&
                    Object.values(itemSelected.attributes.titles).map((title, index) => (
                      <Label key={`${title}-${index}`} label={title} />
                    ))}
                  <Label style={[CommonStyles.marginTop5, CommonStyles.bigFont]} label="Type" />
                  <Label
                    style={CommonStyles.marginBottom5}
                    label={`${String(itemSelected.type).toUpperCase()}, ${String(
                      itemSelected.attributes.episodeCount
                    )}`}
                  />
                  <Label style={CommonStyles.bigFont} label="Year" />
                  <Label label={`${itemSelected.attributes.startDate} - ${itemSelected.attributes.endDate}`} />
                </View>
              </View>
            </View>
            {itemSelected.attributes.youtubeVideoId && (
              <View style={{ width: LOCAL_DIMENSIONS.WIDTH, height: videoHeight }}>
                <YoutubePlayer
                  onReady={() => setVideoHeigght(200)}
                  height={videoHeight * 3}
                  width={LOCAL_DIMENSIONS.WIDTH}
                  videoId={itemSelected.attributes.youtubeVideoId}
                  play={false}
                  volume={50}
                  playbackRate={1}
                  initialPlayerParams={{
                    showClosedCaptions: true,
                  }}
                />
              </View>
            )}
            <View style={CommonStyles.padding20}>
              <View style={CommonStyles.marginTop40}>
                <Label style={CommonStyles.bigFont} label="Genres" />
                <Label label="Genres list" />
              </View>
              <View style={[CommonStyles.flexRow, CommonStyles.marginTop20]}>
                <View style={CommonStyles.flexOne}>
                  <Label label="Average Rating" style={CommonStyles.bigFont} />
                  <Label label={itemSelected.attributes.averageRating} />
                </View>
                <View style={CommonStyles.flexOne}>
                  <Label label="Age Rating" style={CommonStyles.bigFont} />
                  <Label label={`${itemSelected.attributes.ageRating}. ${itemSelected.attributes.ageRatingGuide}`} />
                </View>
              </View>
              <View style={[CommonStyles.flexRow, CommonStyles.marginTop20]}>
                <View style={CommonStyles.flexOne}>
                  <Label label="Episode Duration" style={CommonStyles.bigFont} />
                  <Label label={String(itemSelected.attributes.episodeLength)} />
                </View>
                <View style={CommonStyles.flexOne}>
                  <Label label="Airing Status" style={CommonStyles.bigFont} />
                  <Label label={String(itemSelected.attributes.status).toUpperCase()} />
                </View>
              </View>
              <View style={styles.synopsisWrapper}>
                <Label label="Synopsis" style={[CommonStyles.marginBottom20, CommonStyles.bigFont]} />
                <Label label={itemSelected.attributes.synopsis} />
              </View>
            </View>
          </>
        )}
      </Content>
    </Container>
  );
}

export default Detail;
