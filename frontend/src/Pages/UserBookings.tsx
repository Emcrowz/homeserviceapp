import { useContext, useState } from "react";
import styles from "./UserBookings.module.css";
import { UserContext } from "../Components/Context/UserContext";
import { ErrorPage } from "./ErrorPage";
import { Button } from "../Components/Common/Button";
import { fetchBookings } from "../Components/Booking/BookingApi";
import { useQuery } from "@tanstack/react-query";
import { UserBookingsList } from "../Components/Booking/UserBookingsList";

enum BookingStatus {
  cancelled = "Cancelled",
  pending = "Pending",
  confirmed = "Confirmed",
  all = "",
}

const useBookings = () => {
  return useQuery({
    queryKey: ["USER_BOOKINGS"],
    queryFn: () => fetchBookings(),
  });
};

export const UserBookings = () => {
  const [filterBy, setFilterBy] = useState<BookingStatus>(BookingStatus.all);
  const { user } = useContext(UserContext);
  const { data: bookings } = useBookings();

  if (!user) {
    return <ErrorPage />;
  }

  const filteredBookings =
    filterBy === BookingStatus.all
      ? bookings?.filter((booking) => booking.userId === user._id)
      : bookings?.filter((booking) => booking.userId === user._id && booking.status === filterBy);

  return (
    <div className={styles.container}>
      <h2 style={{ padding: "0 15px" }}>My Bookings</h2>
      <div className={styles.bookingsByStatus}>
        <Button onClick={() => setFilterBy(BookingStatus.cancelled)}>{BookingStatus.cancelled}</Button>
        <Button onClick={() => setFilterBy(BookingStatus.pending)}>{BookingStatus.pending}</Button>
        <Button onClick={() => setFilterBy(BookingStatus.confirmed)}>{BookingStatus.confirmed}</Button>
        <Button onClick={() => setFilterBy(BookingStatus.all)}>Show all</Button>
      </div>
      <div className={styles.userBookingsContainer}>
        {filteredBookings && <UserBookingsList bookings={filteredBookings} />}
      </div>
    </div>
  );
};
