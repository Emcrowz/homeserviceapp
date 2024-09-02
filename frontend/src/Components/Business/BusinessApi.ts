import { axiosInstance } from "../../Config/Axios";
import { Business } from "./Business";

export const fetchBusinesses = async (): Promise<Business[]> => (await axiosInstance.get("/businesses")).data;

export const fetchFeaturedBusinesses = async (): Promise<Business[]> => {
  return (await axiosInstance.get("/businesses/featured")).data;
};

export const fetchBusinessById = async (id: string): Promise<Business> =>
  (await axiosInstance.get(`/businesses/${id}`)).data;
