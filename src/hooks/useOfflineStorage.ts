import { CONTENT_CATEGORIES, ITEM_TYPE, DEFAULT_OFFLINE_DATA } from '../constants/common';
import { Anime, OfflineData } from '../declaration/types.td';
import { getTypedKey, setKey, StorageKeys } from '../modules/Storage';
import { timeStampIsOneWeekOld } from '../modules/Util';
import { useContext } from 'react';
import { ConnectionContext } from '../context/ConnectionContext';

function useOfflineStorage(section: CONTENT_CATEGORIES, contentType: ITEM_TYPE) {
  const { isOnline } = useContext(ConnectionContext);

  async function processDataAsNeeded(data: Anime[]) {
    if (!isOnline) {
      return;
    }

    const offlineDataFromStorage = await getTypedKey<OfflineData>(StorageKeys.OFFLINE_DATA, DEFAULT_OFFLINE_DATA);
    const offlineData = { ...offlineDataFromStorage };

    if (contentType === ITEM_TYPE.ANIME) {
      if (offlineData.animes[section]) {
        const isOneWeekOld = timeStampIsOneWeekOld(offlineData.animes[section].timestamp);
        if (isOneWeekOld) {
          offlineData.animes[section].timestamp = Date.now();
          offlineData.animes[section].data = data.slice(0, 6);
        }
      } else {
        offlineData.animes[section].timestamp = Date.now();
        offlineData.animes[section].data = data.slice(0, 6);
      }
    } else if (contentType === ITEM_TYPE.MANGA) {
      if (offlineData.mangas[section]) {
        const isOneWeekOld = timeStampIsOneWeekOld(offlineData.mangas[section].timestamp);
        if (isOneWeekOld) {
          offlineData.mangas[section].timestamp = Date.now();
          offlineData.mangas[section].data = data.slice(0, 6);
        }
      } else {
        offlineData.mangas[section].timestamp = Date.now();
        offlineData.mangas[section].data = data.slice(0, 6);
      }
    }

    await setKey(StorageKeys.OFFLINE_DATA, JSON.stringify(offlineData));
  }

  return {
    processDataAsNeeded,
  };
}

export default useOfflineStorage;
