import axios from 'axios';
import { KitsuRequest } from '../../../declaration/types.td';
import { FavoritesParam } from '../../../declaration/global.td';
import { stringFormat } from '../../../modules/Util';
import { BASE_API_PREFIX } from '../../../constants/common';
import API_ROUTE_MAP from '../../../constants/apiRouteMap';
import { parseResponse, createErrorResponse, COMMON_ERROR_STRING } from '../../../modules/ApiHelper';

async function getFavoritesItems<T>(
  favorites: FavoritesParam
): Promise<{ status: boolean; data: { animes: T[]; mangas: T[] } | undefined }> {
  const { favoritesAnimes, favoritesMangas } = favorites;
  const animesRequests = favoritesAnimes.map((anime) =>
    axios.get<KitsuRequest<T>>(stringFormat(API_ROUTE_MAP.FAVORITES_ANIME, BASE_API_PREFIX, anime))
  );

  const mangasRequests = favoritesMangas.map((manga) =>
    axios.get<KitsuRequest<T>>(stringFormat(API_ROUTE_MAP.FAVORITES_MANGA, BASE_API_PREFIX, manga))
  );

  try {
    const animes: T[] = [];
    await Promise.all(animesRequests).then((responses) =>
      responses.forEach((response) => {
        const { data } = parseResponse(response);
        if (data && Array.isArray(data)) {
          animes.push(data[0]);
        }
      })
    );

    const mangas: T[] = [];
    await Promise.all(mangasRequests).then((responses) =>
      responses.forEach((response) => {
        const { data } = parseResponse(response);
        if (data && Array.isArray(data)) {
          mangas.push(data[0]);
        }
      })
    );

    return {
      status: true,
      data: {
        animes,
        mangas,
      },
    };
  } catch (error) {
    return createErrorResponse(COMMON_ERROR_STRING);
  }
}

export { getFavoritesItems };
