import { BookingI, DeliveryI, HistoryI } from '../book-i';

export interface CommentI {
  id: number;
  rating: number;
  text: string;
  createdAt: string;
  user: {
    commentUserId: number;
    firstName: string;
    lastName: string;
    avatarUrl: string;
  };
}

export interface BookInfoI {
  id?: number;
  title?: string;
  rating?: number;
  issueYear?: string;
  description?: string;
  publish?: string;
  pages?: string;
  cover?: string;
  weight?: string;
  format?: string;
  ISBN?: string;
  producer?: string;
  authors?: string[];
  images?: [{ url: string }] | null;
  categories?: string[];
  comments?: CommentI[];
  booking?: BookingI;
  delivery?: DeliveryI;
  histories?: HistoryI[];
}
