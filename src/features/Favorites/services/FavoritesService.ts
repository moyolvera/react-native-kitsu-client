import axios from 'axios';
import { KitsuRequest } from '../../../declaration/types.td';
import { FavoritesParam } from '../../../declaration/global.td';

async function getFavoritesItems<T>(favorites: FavoritesParam): Promise<{ animes: T[]; series: T[] }> {
  const { favoritesAnimes, favoritesSeries } = favorites;
  const animesRequests = favoritesAnimes.map((anime) =>
    axios.get<KitsuRequest<T>>(`https://kitsu.io/api/edge/anime?filter[id]=${anime}`)
  );

  // const seriesRequests = favoritesSeries.map((anime) =>
  //   axios.get<KitsuRequest<T>>(`https://kitsu.io/api/edge/anime?filter[id]=${anime}`)
  // );

  const animes: T[] = [];
  await Promise.all(animesRequests).then((responses) =>
    responses.forEach((response) => {
      if (response.data.data && Array.isArray(response.data.data)) {
        animes.push(response.data.data[0]);
      }
    })
  );

  // const series = T[] = [];
  // Promise.all(seriesRequests).then((responses) =>
  //   responses.forEach((response) => {
  //     console.log(response.data.data);
  //     animes.push(response.data.data);
  //   })
  // );

  return {
    animes,
    series: [],
  };
}

export { getFavoritesItems };
