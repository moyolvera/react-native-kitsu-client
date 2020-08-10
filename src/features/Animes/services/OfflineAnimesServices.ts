import { getTypedKey, StorageKeys } from '../../../modules/Storage';
import { DEFAULT_OFFLINE_DATA } from '../../../constants/common';
import { OfflineData } from '../../../declaration/types.td';

async function getOfflineActionItems<T>() {
  const offlineData = await getTypedKey<OfflineData>(StorageKeys.OFFLINE_DATA, DEFAULT_OFFLINE_DATA);
  return {
    status: true,
    data: offlineData.animes.action.data,
  };
}

async function getOfflineThrillerItems<T>() {
  const offlineData = await getTypedKey<OfflineData>(StorageKeys.OFFLINE_DATA, DEFAULT_OFFLINE_DATA);
  return {
    status: true,
    data: offlineData.animes.thriller.data,
  };
}

async function getOfflineDramaItems<T>() {
  const offlineData = await getTypedKey<OfflineData>(StorageKeys.OFFLINE_DATA, DEFAULT_OFFLINE_DATA);
  return {
    status: true,
    data: offlineData.animes.drama.data,
  };
}

async function getOfflineScienceFictionItems<T>() {
  const offlineData = await getTypedKey<OfflineData>(StorageKeys.OFFLINE_DATA, DEFAULT_OFFLINE_DATA);
  return {
    status: true,
    data: offlineData.animes.scienceFiction.data,
  };
}

async function getOfflineRomanceItems<T>() {
  const offlineData = await getTypedKey<OfflineData>(StorageKeys.OFFLINE_DATA, DEFAULT_OFFLINE_DATA);
  return {
    status: true,
    data: offlineData.animes.romance.data,
  };
}

async function getOfflineFantasyItems<T>() {
  const offlineData = await getTypedKey<OfflineData>(StorageKeys.OFFLINE_DATA, DEFAULT_OFFLINE_DATA);
  return {
    status: true,
    data: offlineData.animes.fantasy.data,
  };
}

export {
  getOfflineActionItems,
  getOfflineThrillerItems,
  getOfflineDramaItems,
  getOfflineScienceFictionItems,
  getOfflineRomanceItems,
  getOfflineFantasyItems,
};
