import axios from 'axios';

async function getAllMovies<T>() {
  const request = await axios.get<T>('https://kitsu.io/api/edge/anime?categories=action&page[limit]=1&page[offset]=0');
  return request.data;
}

export { getAllMovies };
