import { useReducer } from 'react';
import createAxiosRequestReducer, { axiosRequestInitialState } from '../modules/AxiosRequestReducer';

function useAxiosRequest<T>(request: () => Promise<T | undefined>) {
  const axiosRequestReducer = createAxiosRequestReducer<T>();
  const [state, dispatch] = useReducer(axiosRequestReducer, axiosRequestInitialState);

  async function triggerRequest() {
    dispatch({ type: 'request' });
    try {
      const data = await request();
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
