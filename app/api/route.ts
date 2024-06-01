import axios from "axios";

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
  } catch (error) {
    console.error("Failed to fetch APOD:", error);
    return null;
  }
};
