import axios, { AxiosInstance } from "axios";

export const baseURL = process.env.NEXT_PUBLIC_API_URL;
export const BaseImageURL = process.env.NEXT_PUBLIC_BASEIMAGEURL;
export const BaseViewImageURL = process.env.NEXT_PUBLIC_VIEW_IMAGE_URL;


export const createNonAuthAxiosInstance = (
  baseURLParam, 
  contentType = "application/json"
) => {
  return axios.create({
    baseURL: baseURLParam,
    headers: {
      "Content-Type": contentType,
    },
  });
};

// Use the exported baseURL for the axios instance
export const nonAuthData = createNonAuthAxiosInstance(baseURL);
