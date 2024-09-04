import React from "react";
import { Booking } from "../Booking/Booking";
import styles from "./BookingItem.module.css";

interface BookingItemProps {
  booking: Booking;
}

export const BookingItem: React.FC<BookingItemProps> = ({ booking }) => {
  const { date, reservationTime } = booking;

  const business = {
    picture: "businessPictureUrl"
    name: "Business Name",
    provider: "Provider Name",
    address: "Business Address",
  };

  const formattedDate = new Date(date).toLocaleDateString("en-GB", {
    day: "2-digit",
    month: "short",
    year: "numeric",
  });

  const formattedTime = new Date(reservationTime).toLocaleTimeString("en-GB", {
    hour: "2-digit",
    minute: "2-digit",
  });

  return (
    <div className={styles.bookingItem}>
      <img className={styles.businessPicture} src={business.picture} alt={business.name} />
      <div className={styles.bookingDetails}>
        <h3 className={styles.businessName}>{business.name}</h3>
        <p className={styles.providerName}>{business.provider}</p>
        <p className={styles.businessAddress}>{business.address}</p>
        <p className={styles.bookingDate}>
          Service on: <span>{formattedDate}</span> at <span>{formattedTime}</span>
        </p>
      </div>
    </div>
  );
};
