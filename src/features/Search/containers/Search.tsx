import React from 'react';
import { TextInput, TouchableOpacity, FlatList, Platform, ViewStyle } from 'react-native';
import { Container, Content, Header, Left, Icon, Body, Right, Text, View } from 'native-base';

import useSearch from '../hooks/useSearch';
import styles from './Search.styles';
import CommonStyles, { createDynamicStyles } from '../../../styles/CommonStyles';
import { Loader } from '../../../components';
import { FastImageWrapper } from '../../../components';

const Search = () => {
  const {
    colors,
    goBack,
    handleClearSearch,
    handleSearch,
    handleSearchChange,
    inputRecoverFocus,
    inputRef,
    isLoading,
    processAndPerformSearch,
    recentItems,
    search,
    searchItems,
    shouldShowRecentList,
  } = useSearch();

  return (
    <Container style={createDynamicStyles<ViewStyle>({ backgroundColor: colors.CONTAINER })}>
      <Loader isLoading={isLoading} />
      <Header
        style={[
          styles.headerWrapper,
          createDynamicStyles<ViewStyle>({
            backgroundColor: colors.CONTAINER,
            borderBottomWidth: 1,
            borderBottomColor: '#2b2b2b',
            shadowColor: 'transparent',
          }),
        ]}>
        <Left style={[styles.leftWrapper, Platform.OS === 'android' && styles.leftWrapperForce]}>
          <TouchableOpacity style={styles.backWrapper} onPress={goBack}>
            <Icon
              name={Platform.OS === 'ios' ? 'chevron-left' : 'arrow-left'}
              type="Feather"
              style={styles.backArrow}
            />
            {Platform.OS === 'ios' && <Text style={styles.backText}>Kitsu</Text>}
          </TouchableOpacity>
        </Left>
        <Body style={styles.bodyWrapper}>
          <View style={[styles.inputWrapper, createDynamicStyles<ViewStyle>({ backgroundColor: colors.BACKGROUND })]}>
            <Icon name="search" type="Feather" style={styles.inputSearchIcon} />
            <TextInput
              ref={inputRef}
              placeholder="Search"
              style={styles.input}
              value={search}
              onChangeText={handleSearchChange}
              onFocus={inputRecoverFocus}
              onSubmitEditing={handleSearch}
            />
            {search !== '' && (
              <Icon name="x-circle" type="Feather" style={styles.inputClearIcon} onPress={handleClearSearch} />
            )}
          </View>
        </Body>
        <Right style={[styles.leftWrapper, Platform.OS === 'android' && styles.leftWrapperForce]}>
          <TouchableOpacity style={styles.searchWrapper} onPress={handleSearch}>
            {Platform.OS === 'android' && <Icon name="search" type="Feather" style={styles.searchIcon} />}
            {Platform.OS === 'ios' && <Text style={styles.rightText}>Search</Text>}
          </TouchableOpacity>
        </Right>
      </Header>
      <Content>
        {shouldShowRecentList && (
          <View
            style={[styles.recentListWrapper, createDynamicStyles<ViewStyle>({ backgroundColor: colors.CONTAINER })]}>
            <FlatList
              data={recentItems}
              style={[CommonStyles.paddingTop10]}
              renderItem={function ({ item }) {
                return (
                  <TouchableOpacity
                    onPress={function () {
                      processAndPerformSearch(item);
                    }}
                    style={styles.recentWrapper}>
                    <Icon name="clock" type="Feather" style={styles.recentIcon} />
                    <Text style={styles.recentText}>{item}</Text>
                  </TouchableOpacity>
                );
              }}
              keyExtractor={(item, index) => `${item}-${index}`}
            />
          </View>
        )}
        {searchItems.length > 0 && (
          <View style={styles.itemsWrapper}>
            {searchItems.map((item) => (
              <FastImageWrapper item={item} width={110} height={160} styleWrapper={styles.itemStyle} />
            ))}
          </View>
        )}
      </Content>
    </Container>
  );
};

export default Search;
