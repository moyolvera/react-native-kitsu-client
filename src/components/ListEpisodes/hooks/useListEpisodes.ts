import { useContext, useState, useEffect } from 'react';
import Animated, { Easing } from 'react-native-reanimated';

import useAxiosRequest from '../../../hooks/useAxiosRequest';
import { getEpisodes } from '../services/ListEpisodesService';
import { Episode } from '../../../declaration/types.td';
import { AxiosRequestResult } from '../../../declaration/global.td';
import { ColorContext } from '../../../context/ColorContext';

function useListEpisodes(source: string) {
  const { colors } = useContext(ColorContext);
  const [height] = useState(new Animated.Value(0));
  const [isOpen, setIsOpen] = useState(false);
  const [episodes, setEpisodes] = useState<Episode[]>([]);

  const episodesRequest = useAxiosRequest<Episode[]>(getEpisodes);

  function openList() {
    if (episodes.length === 0) {
      episodesRequest.triggerRequest(source);
    }

    Animated.timing(height, { toValue: 250, duration: 100, easing: Easing.linear }).start();
    setIsOpen(true);
  }

  function closeList() {
    Animated.timing(height, { toValue: 0, duration: 100, easing: Easing.linear }).start();
    setIsOpen(false);
  }

  function toggleList() {
    if (isOpen) {
      closeList();
    } else {
      openList();
    }
  }

  function handleEpisodesRequest(episodesResult: AxiosRequestResult<Episode[]>) {
    if (episodesResult.state.data) {
      setEpisodes(episodesResult.state.data);
    }
  }

  useEffect(() => {
    handleEpisodesRequest(episodesRequest);
  }, [episodesRequest.state.isLoading]);

  return {
    toggleList,
    colors,
    height,
    episodes,
  };
}

export default useListEpisodes;
