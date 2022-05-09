export interface ProductResponse {
    data: Data;
    meta: Meta;
  }
  
  export interface Data {
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
    specifications: string;
    purchased:      string;
    price: string;
    dimensjoner: string; 
  }
  
  export interface Meta {
}