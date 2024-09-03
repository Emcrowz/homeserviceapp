import { BusinessItemWrapper } from "../../Business/BusinessItemWrapper";
import { Booking } from "../Booking";

interface DisplayUserBookingsProps {
  bookings: Booking[];
  userId: string;
  status?: string;
}

export const DisplayUserBookings = ({ bookings, userId, status }: DisplayUserBookingsProps) => {
  return status !== ""
    ? bookings
        .filter((booking) => booking.userId === userId && booking.status === status)
        .map((booking) => <BusinessItemWrapper key={booking._id} booking={booking} />)
    : bookings
        .filter((booking) => booking.userId === userId)
        .map((booking) => <BusinessItemWrapper key={booking._id} booking={booking} />);
};
