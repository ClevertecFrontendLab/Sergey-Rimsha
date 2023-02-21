export interface ErrorResponseI {
  status: number;
  name: string;
  message: string;
  details: object;
}

export interface CategoriesI {
  id: number;
  name: string;
  path: string;
  value?: number;
}
