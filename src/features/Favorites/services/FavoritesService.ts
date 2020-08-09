import axios from 'axios';
import { KitsuRequest } from '../../../declaration/types.td';
import { FavoritesParam } from '../../../declaration/global.td';

async function getFavoritesItems<T>(favorites: FavoritesParam): Promise<{ animes: T[]; mangas: T[] }> {
  const { favoritesAnimes, favoritesMangas } = favorites;
  const animesRequests = favoritesAnimes.map((anime) =>
    axios.get<KitsuRequest<T>>(`https://kitsu.io/api/edge/anime?filter[id]=${anime}`)
  );

  const mangasRequests = favoritesMangas.map((manga) =>
    axios.get<KitsuRequest<T>>(`https://kitsu.io/api/edge/manga?filter[id]=${manga}`)
  );

  const animes: T[] = [];
  await Promise.all(animesRequests).then((responses) =>
    responses.forEach((response) => {
      if (response.data.data && Array.isArray(response.data.data)) {
        animes.push(response.data.data[0]);
      }
    })
  );

  const mangas: T[] = [];
  await Promise.all(mangasRequests).then((responses) =>
    responses.forEach((response) => {
      if (response.data.data && Array.isArray(response.data.data)) {
        mangas.push(response.data.data[0]);
      }
    })
  );

  return {
    animes,
    mangas,
  };
}

export { getFavoritesItems };
