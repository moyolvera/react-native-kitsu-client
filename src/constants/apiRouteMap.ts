const API_ROUTE_MAP = {
  SEARCH_ANIME: '{0}/anime?filter[text]={1}&limit=15',
  SEARCH_MANGA: '{0}/manga?filter[text]={1}&limit=15',

  ACTION_ANIME: '{0}/trending/anime?limit=15&in_category=true&category=157',
  THRILLER_ANIME: '{0}/trending/anime?limit=15&in_category=true&category=159',
  DRAMA_ANIME: '{0}/trending/anime?limit=15&in_category=true&category=184',
  SCIENCEFICTION_ANIME: '{0}/trending/anime?limit=15&in_category=true&category=155',
  ROMANCE_ANIME: '{0}/trending/anime?limit=15&in_category=true&category=164',
  FANTASY_ANIME: '{0}/trending/anime?limit=15&in_category=true&category=156',

  ACTION_MANGA: '{0}/trending/manga?limit=15&in_category=true&category=157',
  THRILLER_MANGA: '{0}/trending/manga?limit=15&in_category=true&category=159',
  DRAMA_MANGA: '{0}/trending/manga?limit=15&in_category=true&category=184',
  SCIENCEFICTION_MANGA: '{0}/trending/manga?limit=15&in_category=true&category=155',
  ROMANCE_MANGA: '{0}/trending/manga?limit=15&in_category=true&category=164',
  FANTASY_MANGA: '{0}/trending/manga?limit=15&in_category=true&category=156',

  FAVORITES_ANIME: '{0}/anime?filter[id]={1}',
  FAVORITES_MANGA: '{0}/manga?filter[id]={1}',
};

export default API_ROUTE_MAP;
