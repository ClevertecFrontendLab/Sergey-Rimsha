export interface BookingI {
  id: number;
  order: boolean | null;
  dateOrder: string;
  customerId: number;
  customerFirstName: string;
  customerLastName: string;
}

export interface DeliveryI {
  id: number;
  handed: boolean;
  dateHandedFrom: string;
  dateHandedTo: string;
  recipientId: number;
  recipientFirstName: string;
  recipientLastName: string;
}

export interface HistoryI {
  id: number;
  userId: number;
}

export interface BookI {
  issueYear: string;
  rating: number | null;
  title: string;
  authors: string[];
  image: {
    url: string;
  } | null;
  categories: string[];
  id: number;
  booking: BookingI | null;
  delivery: DeliveryI | null;
  histories: HistoryI[] | null;
}
