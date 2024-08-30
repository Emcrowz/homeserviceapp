export interface Business {
  _id: string;
  name: string;
  about: string;
  address: string;
  category: string;
  contactPerson: string;
  email: string;
  imageUrls: string[];
  officialWorkingTime: Array<number>;
  workTimes: Array<Array<number>>;
}
