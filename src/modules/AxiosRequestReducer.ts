type AxiosRequestActions<T> = { type: 'request' } | { type: 'success'; result: T } | { type: 'failure'; error: string };

export type AxiosRequestState<T> = {
  isLoading: boolean;
  error?: string;
  data?: T;
};

export const axiosRequestInitialState = {
  isLoading: false,
  error: undefined,
  data: undefined,
};

const createAxiosRequestReducer = <T>() => (
  state: AxiosRequestState<T>,
  action: AxiosRequestActions<T>
): AxiosRequestState<T> => {
  switch (action.type) {
    case 'request':
      return { ...state, isLoading: true };
    case 'success':
      return { ...state, isLoading: false, data: action.result, error: undefined };
    case 'failure':
      return { ...state, isLoading: false, error: action.error };
  }
};

export default createAxiosRequestReducer;
