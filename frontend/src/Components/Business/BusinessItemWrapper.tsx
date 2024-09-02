import { useState, useEffect } from "react";
import { Booking } from "../Booking/Booking";
import { Business } from "./Business";
import { BusinessItem } from "./BusinessItem";
import { fetchBusinessById } from "./BusinessApi";

interface BusinessItemWrapperProps {
  booking: Booking;
}

export const BusinessItemWrapper = ({ booking }: BusinessItemWrapperProps) => {
  const [businessItem, setBusinessItem] = useState<Business | null>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchBusinessDetails = async () => {
      try {
        const business = await fetchBusinessById(booking.businessId);
        setBusinessItem(business);
      } catch (error) {
        console.error("Failed to fetch business details", error);
        setError("Error loading business details");
      }
    };

    fetchBusinessDetails();
  }, [booking.businessId]);

  if (error) {
    return <div>{error}</div>;
  }

  if (!businessItem) {
    return <div>Loading...</div>;
  }

  return <BusinessItem business={businessItem} />;
};
