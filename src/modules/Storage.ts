import AsyncStorage from '@react-native-community/async-storage';
import { AnyType } from '../declaration/global.td';

export enum StorageKeys {
  RECENT_SEARCH = 'RECENT_SEARCH',
  FAVORITES = 'FAVORITES',
}

async function clearKey(key: StorageKeys) {
  try {
    return await AsyncStorage.removeItem(key);
  } catch {
    return Promise.resolve();
  }
}

async function clearStorage() {
  try {
    return await AsyncStorage.clear();
  } catch {
    return Promise.resolve();
  }
}

async function getKey(key: StorageKeys): Promise<string> {
  try {
    return (await AsyncStorage.getItem(key)) || '';
  } catch (e) {
    return '';
  }
}

async function getTypedKey<T>(key: StorageKeys, defaultValue: T): Promise<T> {
  try {
    const json = (await AsyncStorage.getItem(key)) || '';
    console.log({ json });
    return JSON.parse(json) as T;
  } catch (ex) {
    return defaultValue;
  }
}

async function setKey(key: StorageKeys, value: AnyType): Promise<void> {
  let keyValue = value;

  if (!key) {
    return Promise.resolve();
  }

  if (keyValue === undefined || keyValue === null) {
    return Promise.resolve();
  }

  try {
    if (typeof keyValue !== 'string') {
      keyValue = JSON.stringify(keyValue);
    }

    console.log({ key, keyValue });

    return await AsyncStorage.setItem(key, keyValue);
  } catch (e) {
    return Promise.resolve();
  }
}

async function storeMulti(data: string[][]) {
  try {
    return await AsyncStorage.multiSet(data);
  } catch (e) {
    return Promise.resolve();
  }
}

async function retrieveMulti(keys: StorageKeys[]): Promise<[string, string | null][]> {
  try {
    return await AsyncStorage.multiGet(keys);
  } catch (e) {
    return Promise.resolve([]);
  }
}

export { clearKey, clearStorage, getKey, getTypedKey, setKey, storeMulti, retrieveMulti };
