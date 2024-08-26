import { axiosInstance } from "../../Config/Axios";
import { Business } from "./Business";

export const fetchBusinesses = async (): Promise<Business[]> => (await axiosInstance.get("/businesses")).data;
