import axios from 'axios';
import { KitsuRequest } from '../../../declaration/types.td';

async function getActionItems<T>() {
  const request = await axios.get<KitsuRequest<T>>(
    'https://kitsu.io/api/edge/trending/manga?limit=15&in_category=true&category=157'
  );

  return request.data.data;
}

async function getThrillerItems<T>() {
  const request = await axios.get<KitsuRequest<T>>(
    'https://kitsu.io/api/edge/trending/manga?limit=15&in_category=true&category=159'
  );

  return request.data.data;
}

async function getDramaItems<T>() {
  const request = await axios.get<KitsuRequest<T>>(
    'https://kitsu.io/api/edge/trending/manga?limit=15&in_category=true&category=184'
  );

  return request.data.data;
}

async function getScienceFictionItems<T>() {
  const request = await axios.get<KitsuRequest<T>>(
    'https://kitsu.io/api/edge/trending/manga?limit=15&in_category=true&category=155'
  );

  return request.data.data;
}

async function getRomanceItems<T>() {
  const request = await axios.get<KitsuRequest<T>>(
    'https://kitsu.io/api/edge/trending/manga?limit=15&in_category=true&category=164'
  );

  return request.data.data;
}

async function getFantasyItems<T>() {
  const request = await axios.get<KitsuRequest<T>>(
    'https://kitsu.io/api/edge/trending/manga?limit=15&in_category=true&category=156'
  );

  return request.data.data;
}

export { getActionItems, getThrillerItems, getDramaItems, getScienceFictionItems, getRomanceItems, getFantasyItems };
