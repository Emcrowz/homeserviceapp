import React from "react";
import { BusinessItemWrapper } from "../Business/BusinessItemWrapper";
import { Booking } from "../Booking/Booking";
import styles from "./UserBookingsList.module.css";
interface UserBookingsListProps {
  bookings: Booking[];
}

export const UserBookingsList: React.FC<UserBookingsListProps> = ({ bookings }) => {
  return (
    <div className={styles.userBookingsContainerInside}>
      {bookings.map((booking) => (
        <BusinessItemWrapper key={booking._id} booking={booking} />
      ))}
    </div>
  );
};
