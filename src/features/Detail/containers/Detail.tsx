import React from 'react';
import { Content, View, Icon, Fab } from 'native-base';
import YoutubePlayer from 'react-native-youtube-iframe';
import { ViewStyle, TextStyle } from 'react-native';
import { useSafeArea } from 'react-native-safe-area-context';

import useDetail from '../hooks/useDetail';
import CommonStyles, { createDynamicStyles } from '../../../styles/CommonStyles';
import { FastImageWrapper, Label, FeatureContainer } from '../../../components';
import LOCAL_DIMENSIONS from '../../../constants/dimensions';
import styles from './Detail.styles';

function Detail() {
  const { bottom } = useSafeArea();
  const { colors, isFavorite, itemSelected, setVideoHeigght, shareItem, toggleAsFavorite, videoHeight } = useDetail();

  return (
    <FeatureContainer styles={createDynamicStyles<ViewStyle>({ backgroundColor: colors.CONTAINER })}>
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
      <Fab
        onPress={shareItem}
        active
        style={createDynamicStyles<ViewStyle>({ backgroundColor: '#5067FF', bottom })}
        position="bottomRight">
        <Icon name="share" type="Feather" />
      </Fab>
    </FeatureContainer>
  );
}

export default Detail;
