import { useParams } from "react-router-dom";
import { useContext, useEffect, useState } from "react";
import { Business } from "../Components/Business/Business";
import { API } from "../Router/RouterConsts";
import axios from "axios";
import styles from "./BusinessDetails.module.css";
import { Button } from "../Components/Common/Button";
import { BusinessListForDetails } from "../Components/Business/BusinessListForDetails";
import { BookingPannel } from "../Components/Booking/BookingPannel";
import { UserContext } from "../Components/Context/UserContext";
import defaultImage from "../Assets/defaultService.svg";
import { CiLocationOn } from "react-icons/ci";
import { CiMail } from "react-icons/ci";
import { GoPerson } from "react-icons/go";
import { MdOutlineFileUpload } from "react-icons/md";
import { GoClock } from "react-icons/go";

export const BusinessDetails = () => {
  const [business, setBusiness] = useState<Business | null>(null);
  const [similarBusinesses, setSimilarBusinesses] = useState<Business[]>([]);
  const [isBookingOpen, setIsBookingOpen] = useState(false);
  const { id: businessId } = useParams<{ id: string }>();
  const { user } = useContext(UserContext);

  const handleBooking = () => {
    setIsBookingOpen(!isBookingOpen);
  };

  useEffect(() => {
    axios
      .get(`${API}businesses/${businessId}`)
      .then((res) => {
        setBusiness(res.data);

        axios
          .get(`${API}businesses`)
          .then((response) => {
            const filteredBusinesses = response.data.filter(
              (b: Business) => b.category === res.data.category && b._id !== businessId,
            );
            setSimilarBusinesses(filteredBusinesses);
          })
          .catch((err) => {
            console.error("Failed to fetch businesses", err);
          });
      })
      .catch((err) => {
        console.error("Failed to fetch business details", err);
      });
  }, [businessId]);

  const imageSrc = business?.imageUrls && business.imageUrls.length > 0 ? business.imageUrls[0] : defaultImage;

  return (
    <div className={styles.businessDetails}>
      <div className={styles.businessHero}>
        <div className={styles.imageAndDetailsContainer}>
          <img className={styles.businessHeroImg} src={imageSrc || "Default Image"} alt={business?.name} />
          <div className={styles.businessHeroLeft}>
            <span className={styles.category}>{business?.category}</span>
            <div className={styles.nameAdressEmailContainer}>
              <p className={styles.bussinessName}>{business?.name}</p>
              <p className={styles.grayText}>
                <CiLocationOn className={styles.iconAdressName} />
                {business?.address}
              </p>
              <p className={styles.grayText}>
                <CiMail className={styles.iconAdressName} />
                {business?.email}
              </p>
            </div>
          </div>
        </div>

        <div className={styles.businessHeroRight}>
          <Button className={styles.uploadButton}>
            <MdOutlineFileUpload className={styles.iconUpload} />
          </Button>
          <p className={styles.contactPerson}>
            <GoPerson className={styles.iconPerson} /> {business?.contactPerson}
          </p>
          <p className={styles.availableTime}>
            <GoClock className={styles.iconClock} /> Available {business?.officialWorkingTime[0]}:00 to{" "}
            {business?.officialWorkingTime[1]}:00
          </p>
        </div>
      </div>
      {isBookingOpen && (
        <BookingPannel
          bookingBusiness={business?._id}
          bookingUser={user}
          workTimes={business?.workTimes}
          handleBooking={handleBooking}
        />
      )}

      <div className={styles.details}>
        <div className={styles.businessDetails}>
          <div className={styles.description}>
            <p className={styles.descriptionTitle}>Description</p>
            <p className={styles.descriptionText}>{business?.about}</p>
          </div>
          <div className={styles.gallery}>
            <p className={styles.galleryTitle}>Gallery</p>
            <div>
              <img className={styles.galleryImage} src={imageSrc} alt="image" />
            </div>
          </div>
        </div>
        <div className={styles.similiarBussinessesContainer}>
          {user && !isBookingOpen && <Button onClick={handleBooking}>Book Appointment</Button>}
          <p>
            <strong>Similar Businesses</strong>
          </p>
          <BusinessListForDetails businesses={similarBusinesses} />
        </div>
      </div>
    </div>
  );
};
