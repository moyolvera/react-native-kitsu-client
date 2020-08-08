import { useReducer } from 'react';
import createAxiosRequestReducer, { axiosRequestInitialState } from '../modules/AxiosRequestReducer';
import { AnyType } from '../declaration/global.td';

function useAxiosRequest<T>(request: (params?: AnyType) => Promise<T | undefined>) {
  const axiosRequestReducer = createAxiosRequestReducer<T>();
  const [state, dispatch] = useReducer(axiosRequestReducer, axiosRequestInitialState);

  async function triggerRequest(params?: AnyType) {
    dispatch({ type: 'request' });
    try {
      const data = await request(params);
      if (data) {
        dispatch({ type: 'success', result: data });
      } else {
        dispatch({ type: 'failure', error: 'Error' });
      }
    } catch (error) {
      dispatch({ type: 'failure', error: 'Error en catch' });
    }
  }

  return {
    state,
    triggerRequest,
  };
}

export default useAxiosRequest;
