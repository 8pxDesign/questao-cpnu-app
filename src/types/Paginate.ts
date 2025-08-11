export interface PaginateResponse<T> {
    data: T[];
    total: number;
    page?: number;
    perPage?: number
}

export interface PaginateParams {
    page?: number;
    perPage?: number;
    sort?: string;
    filter?: string;
    isPaginated?: boolean
}