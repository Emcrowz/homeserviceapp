import React from "react";
import { Business } from "../Business/Business";
import styles from "./UserBookingItem.module.css";
import defaultPicture from "../../Assets/defaultService.svg";
import { Link } from "react-router-dom";
import { CiLocationOn } from "react-icons/ci";
import { GoPerson } from "react-icons/go";
import { GoClock } from "react-icons/go";
import { CiCalendar } from "react-icons/ci";

interface UserBookingItemProps {
  business: Business;
  booking: any;
}

export const UserBookingItem: React.FC<UserBookingItemProps> = ({ business, booking }) => {
  const imageUrl =
    Array.isArray(business.imageUrls) && business.imageUrls.length > 0 ? business.imageUrls[0] : defaultPicture;

  const bookingDate = booking?.createdAt
    ? new Date(booking.createdAt).toString() !== "Invalid Date"
      ? new Date(booking.createdAt).toLocaleDateString("en-GB", {
          day: "2-digit",
          month: "short",
          year: "numeric",
        })
      : "Invalid Date"
    : "Invalid Date";

  const bookingTime =
    booking?.reservationTime && booking.reservationTime.length === 2
      ? `${booking.reservationTime[0].toString().padStart(2, "0")}:${booking.reservationTime[1]
          .toString()
          .padStart(2, "0")}`
      : "Invalid Time";

  return (
    <Link to={`/details/${business._id}`} className={styles.businessLink}>
      <img src={imageUrl} alt={business.name} className={styles.businessImage} />
      <div className={styles.detailsContainer}>
        <h3 className={styles.businessName}>{business.name}</h3>
        <p className={styles.contactPerson}>
          <GoPerson className={styles.icon} /> {business.contactPerson}
        </p>
        <p className={styles.address}>
          <CiLocationOn className={styles.icon} /> {business.address}
        </p>
        <p className={styles.bookingDate}>
          <CiCalendar className={styles.icon} /> Service on: <span>{bookingDate}</span>
        </p>
        <p className={styles.bookingTime}>
          <GoClock className={styles.icon} /> Service on: {bookingTime}
        </p>
      </div>
    </Link>
  );
};
