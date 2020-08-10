export interface KitsuRequest<T> {
  data: T;
  meta: KitsuRequestMeta;
  links: KitsuRequestLinks;
}

export interface KitsuRequestMeta {
  count: number;
}

export interface KitsuRequestLinks {
  first: string;
  next: string;
  last: string;
}

export type RelationshipItem = 'animeCharacters' | 'episodes';

export interface Anime {
  id: string;
  type: string;
  links: AnimeLinks;
  attributes: Attributes;
  relationships: { [key in RelationshipItem]: Relationship };
}

export interface Attributes {
  createdAt: Date;
  updatedAt: Date;
  slug: string;
  synopsis: string;
  coverImageTopOffset: number;
  titles: Titles;
  canonicalTitle: string;
  abbreviatedTitles: string[];
  averageRating: string;
  ratingFrequencies: { [key: string]: string };
  userCount: number;
  favoritesCount: number;
  startDate: Date;
  endDate: Date;
  nextRelease: null;
  popularityRank: number;
  ratingRank: number;
  ageRating: string;
  ageRatingGuide: string;
  subtype: string;
  status: string;
  tba: null;
  posterImage: PosterImage;
  coverImage: CoverImage;
  episodeCount: number;
  episodeLength: number;
  totalLength: number;
  youtubeVideoId: string;
  showType: string;
  nsfw: boolean;
}

export interface CoverImage {
  tiny: string;
  small: string;
  large: string;
  original: string;
  meta: CoverImageMeta;
}

export interface CoverImageMeta {
  dimensions: PurpleDimensions;
}

export interface PurpleDimensions {
  tiny: Large;
  small: Large;
  large: Large;
}

export interface Large {
  width: number | null;
  height: number | null;
}

export interface PosterImage {
  tiny: string;
  small: string;
  medium: string;
  large: string;
  original: string;
  meta: PosterImageMeta;
}

export interface PosterImageMeta {
  dimensions: FluffyDimensions;
}

export interface FluffyDimensions {
  tiny: Large;
  small: Large;
  medium: Large;
  large: Large;
}

export interface Titles {
  en: string;
  en_jp: string;
  ja_jp: string;
}

export interface AnimeLinks {
  self: string;
}

export interface Relationship {
  links: RelationshipLinks;
}

export interface RelationshipLinks {
  self: string;
  related: string;
}

export interface OfflineAnime {
  timestamp: number;
  data: Anime[];
}

export interface AnimeOfflineData {
  action: OfflineAnime;
  drama: OfflineAnime;
  fantasy: OfflineAnime;
  romance: OfflineAnime;
  scienceFiction: OfflineAnime;
  thriller: OfflineAnime;
}

export interface MangaOfflineData {
  action: OfflineAnime;
  drama: OfflineAnime;
  fantasy: OfflineAnime;
  romance: OfflineAnime;
  scienceFiction: OfflineAnime;
  thriller: OfflineAnime;
}

export interface OfflineData {
  animes: AnimeOfflineData;
  mangas: MangaOfflineData;
}

export interface Episode {
  id: string;
  type: string;
  links: EpisodeLinks;
  attributes: EpisodeAttributes;
  relationships: EpisodeRelationships;
}
export interface EpisodeLinks {
  self: string;
}
export interface EpisodeAttributes {
  createdAt: string;
  updatedAt: string;
  titles: EpisodeTitles;
  canonicalTitle: string;
  seasonNumber: number;
  number: number;
  relativeNumber: number;
  synopsis: string;
  airdate: string;
  length: number;
  thumbnail: EpisodeThumbnail;
}
export interface EpisodeTitles {
  en_jp: string;
  en_us: string;
  ja_jp: string;
}
export interface EpisodeThumbnail {
  original: string;
}
export interface EpisodeRelationships {
  media: EpisodeMediaOrVideos;
  videos: EpisodeMediaOrVideos;
}
export interface EpisodeMediaOrVideos {
  links: EpisodeLinks1;
}
export interface EpisodeLinks1 {
  self: string;
  related: string;
}
