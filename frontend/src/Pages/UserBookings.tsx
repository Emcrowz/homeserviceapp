import { useContext, useState } from "react";
import styles from "./UserBookings.module.css";
import { UserContext } from "../Components/Context/UserContext";
import { ErrorPage } from "./ErrorPage";
import { Button } from "../Components/Common/Button";
import { fetchBookings } from "../Components/Booking/BookingApi";
import { useQuery } from "@tanstack/react-query";
import { DisplayAllUserBookings } from "../Components/Booking/Utils/DisplayAllUserBookings";
import { DisplayFilteredUserBookings } from "../Components/Booking/Utils/DisplayFilteredUserBookings";

// "Cancelled", "Pending", "Confirmed"
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
  const [filterBy, setFilterBy] = useState("");
  const { user } = useContext(UserContext);
  const { data } = useBookings();
  const bookings = data ?? [];

  return user === null ? (
    <ErrorPage />
  ) : (
    <div className={styles.container}>
      <h2>My Bookings</h2>
      <div className={styles.bookingsByStatus}>
        <Button onClick={() => setFilterBy(BookingStatus.cancelled)}>{BookingStatus.cancelled}</Button>
        <Button onClick={() => setFilterBy(BookingStatus.pending)}>{BookingStatus.pending}</Button>
        <Button onClick={() => setFilterBy(BookingStatus.confirmed)}>{BookingStatus.confirmed}</Button>
        <Button onClick={() => setFilterBy(BookingStatus.all)}>Show all</Button>
      </div>
      <div>
        {filterBy !== "" ? (
          <DisplayFilteredUserBookings bookings={bookings} userId={user._id} status={filterBy} />
        ) : (
          <DisplayAllUserBookings bookings={bookings} userId={user._id} />
        )}
      </div>
    </div>
  );
};
