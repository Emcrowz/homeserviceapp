import { BusinessItemWrapper } from "../../Business/BusinessItemWrapper";
import { Booking } from "../Booking";

interface DisplayUserBookingsProps {
  bookings: Booking[];
  userId: string;
}

export const DisplayUserBookings = ({ bookings, userId }: DisplayUserBookingsProps) => {
  return (
    <div>
      {bookings.map((booking) => (
        <BusinessItemWrapper key={booking._id} booking={booking} />
      ))}
    </div>
  );
};
