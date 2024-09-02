import { useQuery } from "@tanstack/react-query";
import { fetchBookings } from "../BookingApi";

export const useBookings = () => {
  return useQuery({
    queryKey: ["BOOKINGS"],
    queryFn: fetchBookings,
  });
};
