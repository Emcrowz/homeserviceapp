export interface Booking {
  _id?: string;
  businessId: string;
  userId: string;
  userEmail: string;
  reservationTime: number[];
  status?: string;
}
