export interface ProductResponse {
  data: ProductResponseData;
  meta: Meta;
}

export interface ProductResponseData {
  id:         number;
  attributes: PurpleAttributes;
}

export interface PurpleAttributes {
  createdAt:   Date;
  updatedAt:   Date;
  publishedAt: Date;
  name:        string;
  description: string;
  info:        string;
  price:       string;
  dimensjoner: string;
  detials:     string;
  image:       Image;
}

export interface Image {
  data: ImageData;
}

export interface ImageData {
  id:         number;
  attributes: FluffyAttributes;
}

export interface FluffyAttributes {
  name:              string;
  alternativeText:   string;
  caption:           string;
  width:             number;
  height:            number;
  formats:           Formats;
  hash:              string;
  ext:               string;
  mime:              string;
  size:              number;
  url:               string;
  previewUrl:        null;
  provider:          string;
  provider_metadata: null;
  createdAt:         Date;
  updatedAt:         Date;
}

export interface Formats {
  thumbnail: Thumbnail;
}

export interface Thumbnail {
  name:   string;
  hash:   string;
  ext:    string;
  mime:   string;
  path:   null;
  width:  number;
  height: number;
  size:   number;
  url:    string;
}

export interface Meta {
}
