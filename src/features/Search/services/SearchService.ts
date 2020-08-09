import axios from 'axios';
import { KitsuRequest } from '../../../declaration/types.td';

async function getSearchAnimes<T>(searchString: string) {
  const request = await axios.get<KitsuRequest<T>>(
    `https://kitsu.io/api/edge/anime?filter[text]=${encodeURIComponent(searchString)}&limit=15`
  );

  return request.data.data;
}

async function getSearchMangas<T>(searchString: string) {
  const request = await axios.get<KitsuRequest<T>>(
    `https://kitsu.io/api/edge/manga?filter[text]=${encodeURIComponent(searchString)}&limit=15`
  );

  return request.data.data;
}

export { getSearchAnimes, getSearchMangas };
