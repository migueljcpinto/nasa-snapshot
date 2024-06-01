import axios, { AxiosError } from "axios";

export const planetaryApi = axios.create({
  baseURL: "https://api.nasa.gov/planetary",
  params: {
    api_key: process.env.NEXT_PUBLIC_NASA_API_KEY,
  },
});

export const fetchApod = async (date?: string) => {
  try {
    const response = await planetaryApi.get("/apod", {
      params: { date },
    });
    return response.data;
  } catch (error: any) {
    const axiosError = error as AxiosError;
    if (axiosError.response && axiosError.response.status === 404) {
      // Handle 404 Not Found error
      console.error("APOD not found for the specified date.");
      return null;
    } else if (axiosError.response && axiosError.response.status === 400) {
      // Handle 400 Bad Request error
      console.error("Bad request. Please provide a valid date.");
      return null;
    } else {
      // Handle other errors
      console.error("Failed to fetch APOD:", axiosError.message);
      return null;
    }
  }
};
