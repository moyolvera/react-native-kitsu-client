import { OfflineData } from '../declaration/types.td';

enum ITEM_TYPE {
  ANIME = 'anime',
  MANGA = 'manga',
  ANIME_PLURAL = 'Animes',
  MANGA_PLURAL = 'Mangas',
}

enum CONTENT_CATEGORIES {
  ACTION = 'action',
  DRAMA = 'drama',
  FANTASY = 'fantasy',
  ROMANCE = 'romance',
  SCIENCE_FICTION = 'scienceFiction',
  THRILLER = 'thriller',
}

const DEFAULT_OFFLINE_DATA: OfflineData = {
  animes: {
    action: {
      timestamp: 0,
      data: [],
    },
    drama: {
      timestamp: 0,
      data: [],
    },
    fantasy: {
      timestamp: 0,
      data: [],
    },
    romance: {
      timestamp: 0,
      data: [],
    },
    scienceFiction: {
      timestamp: 0,
      data: [],
    },
    thriller: {
      timestamp: 0,
      data: [],
    },
  },
  mangas: {
    action: {
      timestamp: 0,
      data: [],
    },
    drama: {
      timestamp: 0,
      data: [],
    },
    fantasy: {
      timestamp: 0,
      data: [],
    },
    romance: {
      timestamp: 0,
      data: [],
    },
    scienceFiction: {
      timestamp: 0,
      data: [],
    },
    thriller: {
      timestamp: 0,
      data: [],
    },
  },
};

export { ITEM_TYPE, CONTENT_CATEGORIES, DEFAULT_OFFLINE_DATA };
