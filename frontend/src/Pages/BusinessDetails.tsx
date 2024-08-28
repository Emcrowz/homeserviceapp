// import { useQuery } from "@tanstack/react-query";
// import { fetchBusinessById } from "../Components/Business/BusinessApi";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { Business } from "../Components/Business/Business";
import { API } from "../Router/RouterConsts";
import axios from "axios";
import styles from "./BusinessDetails.module.css";
import { Button } from "../Components/Common/Button";
import { BusinessList } from "../Components/Business/BusinessList";

export const BusinessDetails = () => {
  const [business, setBusiness] = useState<Business | null>();
  const { id: businessId } = useParams();

  //   const useBusinessById = () => {
  //     return useQuery({
  //       queryKey: ["BUSINESS"],
  //       queryFn: fetchBusinessById(businessId),
  //     });
  //   };

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
          <p>Available [FROM] to [TO]</p>
        </div>
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
            {/* <div>
              {business.imageUrls.map((url) => (
                <img src={url} />
              ))}
            </div> */}
          </div>
        </div>
        <div>
          <Button>Book Appointment</Button>
          <p>
            <strong>Similar Businesses</strong>
          </p>
          <BusinessList categoryName={business?.category} listStyle="suggestions" />
        </div>
      </div>
    </div>
  );
};
