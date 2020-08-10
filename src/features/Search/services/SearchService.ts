import axios from 'axios';
import { KitsuRequest } from '../../../declaration/types.td';
import { stringFormat } from '../../../modules/Util';
import { BASE_API_PREFIX } from '../../../constants/common';
import API_ROUTE_MAP from '../../../constants/apiRouteMap';
import { COMMON_ERROR_STRING, parseResponse, createErrorResponse } from '../../../modules/ApiHelper';

async function getSearchAnimes<T>(searchString: string) {
  try {
    const request = await axios.get<KitsuRequest<T>>(
      stringFormat(API_ROUTE_MAP.SEARCH_ANIME, BASE_API_PREFIX, encodeURIComponent(searchString))
    );

    return parseResponse(request);
  } catch (error) {
    return createErrorResponse(COMMON_ERROR_STRING);
  }
}

async function getSearchMangas<T>(searchString: string) {
  try {
    const request = await axios.get<KitsuRequest<T>>(
      stringFormat(API_ROUTE_MAP.SEARCH_MANGA, BASE_API_PREFIX, encodeURIComponent(searchString))
    );

    return parseResponse(request);
  } catch (error) {
    return createErrorResponse(COMMON_ERROR_STRING);
  }
}

export { getSearchAnimes, getSearchMangas };
