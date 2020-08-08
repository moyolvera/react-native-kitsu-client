import { AxiosRequestState } from '../modules/AxiosRequestReducer';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export type AnyType = any;

export type AxiosRequestResult<T> = {
  state: AxiosRequestState<T>;
  triggerRequest: (params?: string) => Promise<void>;
};
