import { axiosInstance } from "../../Config/Axios";
import { Booking } from "./Booking";

export const postBooking = async (newBooking: Booking): Promise<Booking> =>
  (await axiosInstance.post("/bookings", newBooking)).data;

export const fetchBookings = async (): Promise<Booking[]> => (await axiosInstance.get("/bookings")).data;
