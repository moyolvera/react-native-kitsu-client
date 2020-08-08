import React, { useEffect, useState } from 'react';
import { TextInput } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { AxiosRequestResult } from '../../../declaration/global.td';
import { Anime } from '../../../declaration/types.td';
import useAxiosRequest from '../../../hooks/useAxiosRequest';
import { getSearchItems } from '../services/SearchService';
import { getTypedKey, setKey, StorageKeys } from '../../../modules/Storage';

function useSearch() {
  const inputRef = React.createRef<TextInput>();
  const { goBack } = useNavigation();
  const searchItemsRequest: AxiosRequestResult<Anime[]> = useAxiosRequest<Anime[]>(getSearchItems);

  const [search, setSearch] = useState('');
  const [searchItems, setSearchItems] = useState<Anime[]>([]);
  const [recentItems, setRecentItems] = useState<string[]>([]);
  const [shouldShowRecentList, setShouldShowRecentList] = useState(true);

  function inputRecoverFocus() {
    if (!shouldShowRecentList) {
      setShouldShowRecentList(true);
    }
  }

  function handleClearSearch() {
    setSearch('');
    setShouldShowRecentList(true);
  }

  function handleSearchItemsRequest(handleSearchItemsResult: AxiosRequestResult<Anime[]>) {
    if (handleSearchItemsResult.state.data) {
      setSearchItems(handleSearchItemsResult.state.data);
    }
  }

  async function processAndPerformSearch(searchItem: string) {
    const updatedRecent = [...recentItems, searchItem];

    setRecentItems(updatedRecent);
    setShouldShowRecentList(false);

    await setKey(StorageKeys.RECENT_SEARCH, JSON.stringify(updatedRecent));
    searchItemsRequest.triggerRequest(searchItem);
  }

  async function handleSearch() {
    if (!search || search === '') {
      return;
    }

    await processAndPerformSearch(search);
  }

  async function handleSearchChange(text: string) {
    setSearch(text);
  }

  async function getRecentItems() {
    const recentItemsFromStorage = await getTypedKey<string[]>(StorageKeys.RECENT_SEARCH, []);
    if (recentItemsFromStorage) {
      setRecentItems(recentItemsFromStorage);
    }
  }

  async function initializeScreen() {
    await getRecentItems();

    if (inputRef.current) {
      inputRef.current.focus();
    }
  }

  useEffect(() => {
    handleSearchItemsRequest(searchItemsRequest);
  }, [searchItemsRequest.state.isLoading]);

  useEffect(() => {
    initializeScreen();
  }, []);

  return {
    goBack,
    handleClearSearch,
    handleSearch,
    handleSearchChange,
    inputRecoverFocus,
    inputRef,
    isLoading: searchItemsRequest.state.isLoading,
    processAndPerformSearch,
    recentItems,
    search,
    searchItems,
    shouldShowRecentList,
  };
}

export default useSearch;
