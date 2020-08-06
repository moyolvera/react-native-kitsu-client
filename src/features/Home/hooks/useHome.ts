import useAxiosRequest from '../../../hooks/useAxiosRequest';
import { getAllMovies } from '../services/HomeServices';
import { useEffect, useState } from 'react';
import { AxiosRequestResult } from '../../../declaration/global.td';

function useHome() {
  const allMoviesAxiosRequest: AxiosRequestResult<string> = useAxiosRequest<string>(getAllMovies);
  const [allMovies, setAllMovies] = useState<string>('');

  function handleAllMoviesRequest(allMoviesAxiosResult: AxiosRequestResult<string>) {
    if (allMoviesAxiosResult.state.data) {
      setAllMovies(allMoviesAxiosResult.state.data);
    }
  }

  useEffect(() => {
    allMoviesAxiosRequest.triggerRequest();
  }, []);

  useEffect(() => {
    handleAllMoviesRequest(allMoviesAxiosRequest);
  }, [allMoviesAxiosRequest.state.isLoading]);

  return {
    allMovies,
    isLoading: allMoviesAxiosRequest.state.isLoading,
  };
}

export default useHome;
