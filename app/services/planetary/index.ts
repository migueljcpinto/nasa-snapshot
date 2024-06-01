import axios from "axios";

export const planetaryApi = axios.create({
  baseURL: "https://api.nasa.gov/planetary",
  params: {
    api_key: process.env.NEXT_PUBLIC_NASA_API_KEY,
  },
});

export const fetchApod = async (date?: string) => {
  try {
    const response = await planetaryApi.get("/apod", { params: { date } });

    if (response.status !== 200)
      throw new Error("Invalid response from server");

    return response.data;
  } catch (error) {
    let errorMessage = "Failed to fetch APOD. Please try again later.";

    if (error) {
      errorMessage = `Failed to fetch APOD: ${error}`;
    } else if (error) {
      errorMessage = "Failed to fetch APOD: No response from server";
    }

    console.error(errorMessage);
    return null;
  }
};
