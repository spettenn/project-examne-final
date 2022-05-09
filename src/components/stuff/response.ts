export interface ProductResponse {
    data: Data;
    meta: Meta;
  }
  
export interface Data {
  [x: string]: any;
    id:         number;
    attributes: Attributes;
  }
  
  export interface Attributes {
    name:          string;
    description:   string;
    info:          string;
    createdAt:      Date;
    updatedAt:      Date;
    publishedAt:    Date;
    price: string;
    dimensjoner: string; 
  }
  
  export interface Meta {
}