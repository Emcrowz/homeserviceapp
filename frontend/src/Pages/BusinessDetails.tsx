// import { useQuery } from "@tanstack/react-query";
// import { fetchBusinessById } from "../Components/Business/BusinessApi";
import { useParams } from "react-router-dom";
import { useContext, useEffect, useState } from "react";
import { Business } from "../Components/Business/Business";
import { API } from "../Router/RouterConsts";
import axios from "axios";
import styles from "./BusinessDetails.module.css";
import { Button } from "../Components/Common/Button";
import { BusinessList } from "../Components/Business/BusinessList";
import { BookingPannel } from "../Components/Booking/BookingPannel";
import { UserContext } from "../Components/Context/UserContext";

export const BusinessDetails = () => {
  const [business, setBusiness] = useState<Business | null>();
  const [isBookingOpen, setIsBookingOpen] = useState(false);
  const { id: businessId } = useParams();
  const { user } = useContext(UserContext);

  const handleBooking = () => {
    setIsBookingOpen(!isBookingOpen);
  };

  useEffect(() => {
    axios
      .get(`${API + "businesses/" + businessId}`)
      .then((res) => {
        setBusiness(res.data);
      })
      .catch((err) => {
        throw new Error(err);
      });
  }, [businessId]);

  return (
    <div className={styles.businessDetails}>
      <div className={styles.businessHero}>
        <img className={styles.businessHeroImg} src="" />
        <div className={styles.businessHeroLeft}>
          <p>{business?.category}</p>
          <p>{business?.name}</p>
          <p>{business?.address}</p>
          <p>{business?.email}</p>
        </div>
        <div className={styles.businessHeroRight}>
          <Button>?</Button>
          <p>{business?.contactPerson}</p>
          <p>
            Available {business?.officialWorkingTime[0]}:00 to {business?.officialWorkingTime[1]}:00
          </p>
        </div>
      </div>
      <div>
        {isBookingOpen && (
          <BookingPannel
            bookingBusiness={business?._id}
            bookingUser={user}
            workTimes={business?.workTimes}
            handleBooking={handleBooking}
          />
        )}
      </div>

      <div className={styles.details}>
        <div className={styles.businessDetails}>
          <div className={styles.description}>
            <p>
              <strong>Description</strong>
            </p>
            <p>{business?.about}</p>
          </div>
          <div className={styles.gallery}>
            <p>
              <strong>Gallery</strong>
            </p>
          </div>
        </div>
        <div>
          {user && !isBookingOpen && <Button onClick={handleBooking}>Book Appointment</Button>}
          <p>
            <strong>Similar Businesses</strong>
          </p>
          <BusinessList categoryName={business?.category} listStyle="suggestions" />
        </div>
      </div>
    </div>
  );
};
