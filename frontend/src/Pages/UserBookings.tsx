import { useContext } from "react";
import styles from "./UserBookings.module.css";
import { UserContext } from "../Components/Context/UserContext";
import { ErrorPage } from "./ErrorPage";
import { Button } from "../Components/Common/Button";
import { fetchBookings } from "../Components/Booking/BookingApi";
import { useQuery } from "@tanstack/react-query";
import { BusinessItemWrapper } from "../Components/Business/BusinessItemWrapper";

// "Cancelled", "Pending", "Confirmed"
enum BookingStatus {
  cancelled = "Cancelled",
  pending = "Pending",
  confirmed = "Confirmed",
}

const useBookings = () => {
  return useQuery({
    queryKey: ["USER_BOOKINGS"],
    queryFn: () => fetchBookings(),
  });
};

export const UserBookings = () => {
  // const [businesses, setBusinesses] = useState();
  const { user } = useContext(UserContext);
  const { data } = useBookings();
  const bookings = data ?? [];

  return user === null ? (
    <ErrorPage />
  ) : (
    <div className={styles.container}>
      <h2>My Bookings</h2>
      <div className={styles.bookingsByStatus}>
        <Button>{BookingStatus.cancelled}</Button>
        <Button>{BookingStatus.pending}</Button>
        <Button>{BookingStatus.confirmed}</Button>
      </div>
      <div>
        {bookings
          .filter((booking) => booking.userId === user._id)
          .map((booking) => (
            <BusinessItemWrapper booking={booking} />
          ))}
      </div>
    </div>
  );
};
