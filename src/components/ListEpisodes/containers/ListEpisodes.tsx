import React from 'react';
import { View, Icon } from 'native-base';
import { TouchableOpacity, FlatList } from 'react-native-gesture-handler';
import { TextStyle, ViewStyle } from 'react-native';
import Animated from 'react-native-reanimated';

import Label from '../../Label/containers/Label';
import CommonStyles, { createDynamicStyles } from '../../../styles/CommonStyles';

import styles from './ListEpisodes.styles';
import EmptyEpisodes from '../../EmptyEpisodes/containers/EmptyEpisodes';
import useListEpisodes from '../hooks/useListEpisodes';

const ListEpisodes = ({ source }: { source: string }) => {
  const { colors, episodes, height, toggleList } = useListEpisodes(source);

  return (
    <View>
      <TouchableOpacity
        onPress={toggleList}
        style={[styles.wrapper, createDynamicStyles<ViewStyle>({ backgroundColor: colors.BACKGROUND })]}>
        <View style={[CommonStyles.flexOne, styles.rowWrapper]}>
          <Label label="Episodes" style={styles.label} />
        </View>
        <View style={styles.iconWrapper}>
          <Icon name="chevron-down" type="Feather" style={createDynamicStyles<TextStyle>({ color: colors.TEXT })} />
        </View>
      </TouchableOpacity>
      <Animated.View style={{ maxHeight: height }}>
        {episodes.length !== 0 ? (
          <FlatList
            data={episodes}
            style={[styles.list, createDynamicStyles<ViewStyle>({ borderColor: colors.DETAILS })]}
            renderItem={function ({ item, index }) {
              return (
                <View
                  style={[
                    CommonStyles.flexRow,
                    CommonStyles.paddingVertical10,
                    createDynamicStyles<ViewStyle>({
                      backgroundColor: index % 2 === 0 ? colors.CONTAINER : colors.BACKGROUND,
                    }),
                  ]}>
                  <View style={styles.seasonEpisodeWrapper}>
                    <Label label={`S${item.attributes.seasonNumber}-E${item.attributes.number}.`} />
                  </View>
                  <View style={styles.titleWrapper}>
                    <Label label={item.attributes.canonicalTitle || item.attributes.titles.en_jp} />
                  </View>
                </View>
              );
            }}
            keyExtractor={(episode) => episode.id}
          />
        ) : (
          <EmptyEpisodes />
        )}
      </Animated.View>
    </View>
  );
};

export default ListEpisodes;
