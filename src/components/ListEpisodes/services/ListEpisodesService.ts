import axios from 'axios';
import { KitsuRequest } from '../../../declaration/types.td';
import { BASE_API_PREFIX } from '../../../constants/common';
import { parseResponse, createErrorResponse, COMMON_ERROR_STRING } from '../../../modules/ApiHelper';

async function getEpisodes<T>(route: string) {
  try {
    const request = await axios.get<KitsuRequest<T>>(BASE_API_PREFIX + route);

    return parseResponse(request);
  } catch (error) {
    return createErrorResponse(COMMON_ERROR_STRING);
  }
}

export { getEpisodes };
