export interface ProductsResponse {
    data: Datum[];
    meta: Meta;
}

export interface Datum {
    id:         number;
    attributes: Attributes;
}

export interface Attributes {
    name:       string;
    description: string;
    price: string;
    dimensjoner: string; 
    info: string;
    createdAt:   Date;
    updatedAt:   Date;
    publishedAt: Date;
}

export interface Meta {
    pagination: Pagination;
}

export interface Pagination {
    page:      number;
    pageSize:  number;
    pageCount: number;
    total:     number;
}