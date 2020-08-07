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

export interface Anime {
  id: string;
  type: string;
  links: AnimeLinks;
  attributes: Attributes;
  relationships: { [key: string]: Relationship };
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
