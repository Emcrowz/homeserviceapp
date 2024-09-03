import { BusinessItemWrapper } from "../../Business/BusinessItemWrapper";
import { Booking } from "../Booking";

interface DisplayFilteredUserBookingsProps {
  bookings: Booking[];
  userId: string;
  status: string;
}

export const DisplayFilteredUserBookings = ({ bookings, userId, status }: DisplayFilteredUserBookingsProps) => {
  return bookings
    .filter((booking) => booking.userId === userId && booking.status === status)
    .map((booking) => <BusinessItemWrapper booking={booking} />);
};
