import { axiosInstance } from "../../Config/Axios";
import { Category } from "./Category";

export const fetchCategories = async (): Promise<Category[]> => (await axiosInstance.get("/categories")).data;
