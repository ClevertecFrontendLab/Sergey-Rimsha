export interface BookingI {
  id: number;
  order: boolean;
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
  rating: number;
  title: string;
  authors: string[];
  image: {
    url: string;
  };
  categories: string[];
  id: number;
  booking: BookingI;
  delivery: DeliveryI;
  histories: HistoryI[];
}
