import axios from 'axios';
import { KitsuRequest } from '../../../declaration/types.td';
import { stringFormat } from '../../../modules/Util';
import API_ROUTE_MAP from '../../../constants/apiRouteMap';
import { BASE_API_PREFIX } from '../../../constants/common';
import { parseResponse, createErrorResponse, COMMON_ERROR_STRING } from '../../../modules/ApiHelper';

async function getActionItems<T>() {
  try {
    const request = await axios.get<KitsuRequest<T>>(stringFormat(API_ROUTE_MAP.ACTION_ANIME, BASE_API_PREFIX));

    return parseResponse(request);
  } catch (error) {
    return createErrorResponse(COMMON_ERROR_STRING);
  }
}

async function getThrillerItems<T>() {
  try {
    const request = await axios.get<KitsuRequest<T>>(stringFormat(API_ROUTE_MAP.THRILLER_ANIME, BASE_API_PREFIX));

    return parseResponse(request);
  } catch (error) {
    return createErrorResponse(COMMON_ERROR_STRING);
  }
}

async function getDramaItems<T>() {
  try {
    const request = await axios.get<KitsuRequest<T>>(stringFormat(API_ROUTE_MAP.DRAMA_ANIME, BASE_API_PREFIX));

    return parseResponse(request);
  } catch (error) {
    return createErrorResponse(COMMON_ERROR_STRING);
  }
}

async function getScienceFictionItems<T>() {
  try {
    const request = await axios.get<KitsuRequest<T>>(stringFormat(API_ROUTE_MAP.SCIENCEFICTION_ANIME, BASE_API_PREFIX));

    return parseResponse(request);
  } catch (error) {
    return createErrorResponse(COMMON_ERROR_STRING);
  }
}

async function getRomanceItems<T>() {
  try {
    const request = await axios.get<KitsuRequest<T>>(stringFormat(API_ROUTE_MAP.ROMANCE_ANIME, BASE_API_PREFIX));

    return parseResponse(request);
  } catch (error) {
    return createErrorResponse(COMMON_ERROR_STRING);
  }
}

async function getFantasyItems<T>() {
  try {
    const request = await axios.get<KitsuRequest<T>>(stringFormat(API_ROUTE_MAP.FANTASY_ANIME, BASE_API_PREFIX));

    return parseResponse(request);
  } catch (error) {
    return createErrorResponse(COMMON_ERROR_STRING);
  }
}

export { getActionItems, getThrillerItems, getDramaItems, getScienceFictionItems, getRomanceItems, getFantasyItems };
