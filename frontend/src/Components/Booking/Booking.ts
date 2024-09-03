export interface Booking {
  businessId: string;
  userId: string;
  userEmail: string;
  reservationTime: number[];
  status?: string;
}
