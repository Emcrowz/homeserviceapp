import { axiosInstance } from "../../Config/Axios";
import { Category } from "./Category";

export const fetchCategories = async (): Promise<Category[]> => {
  const response = await axiosInstance.get("/categories");
  return response.data;
};
