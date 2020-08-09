import { AxiosRequestState } from '../modules/AxiosRequestReducer';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export type AnyType = any;

export type AxiosRequestResult<T> = {
  state: AxiosRequestState<T>;
  triggerRequest: (params?: AnyType) => Promise<void>;
};

export type ColorScheme = {
  CONTAINER: string;
  BACKGROUND: string;
  DETAILS: string;
  DETAILS_LIGHT: string;
  TEXT: string;
  STATUS_BAR: string;
};

export type FavoriteData<T> = {
  animes: T[];
  mangas: T[];
};

export type FavoritesParam = {
  favoritesAnimes: string[];
  favoritesMangas: string[];
};
