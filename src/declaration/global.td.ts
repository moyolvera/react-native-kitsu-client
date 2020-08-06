import { AxiosRequestState } from '../modules/AxiosRequestReducer';

export type AxiosRequestResult<T> = {
  state: AxiosRequestState<T>;
  triggerRequest: () => Promise<void>;
};
