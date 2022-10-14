export interface DateProps {
  startDate: Date;
  endDate: Date;
  key: string;
}

export interface FormValues {
  destination: string;
  bookingDate: DateProps;
  guests: number;
}

export interface Hotel {
  title: string;
  price: number;
  hotelImage: string;
  rating: number;
  location: string;
}

// export interface Hotel {
//   price: number;
//   title: string;
//   coverPhoto: {
//     id: number;
//     url: string;
//     orderIndex: number;
//   };
//   rooms: number;
//   baths: number;
//   isVerified: boolean;
//   photoIDs: number[];
// }
