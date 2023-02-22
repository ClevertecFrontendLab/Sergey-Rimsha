import { StatusLoading } from '../../types';
import { CategoriesI, ErrorResponseI } from '../utils-i';

export interface AppStateI {
  statusLoading: StatusLoading;
  error: ErrorResponseI | null;
  isInitialized: boolean;
  categories: CategoriesI[];
}
