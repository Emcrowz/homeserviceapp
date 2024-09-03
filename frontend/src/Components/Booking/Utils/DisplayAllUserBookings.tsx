import { BusinessItemWrapper } from "../../Business/BusinessItemWrapper";
import { Booking } from "../Booking";

interface DisplayAllUserBookingsProps {
  bookings: Booking[];
  userId: string;
}

export const DisplayAllUserBookings = ({ bookings, userId }: DisplayAllUserBookingsProps) => {
  return bookings
    .filter((booking) => booking.userId === userId)
    .map((booking) => <BusinessItemWrapper booking={booking} />);
};
