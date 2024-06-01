import { useState, useEffect, useCallback } from "react";
import { fetchApod } from "../api/planetary/route";

interface ApodData {
  title: string;
  url: string;
  explanation: string;
  date: string;
  media_type: string;
  copyright: string;
}

const useApodData = (initialDate?: string) => {
  const [apod, setApod] = useState<ApodData | null>(null);
  const [recentApods, setRecentApods] = useState<ApodData[]>([]);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const [page, setPage] = useState(1);

  useEffect(() => {
    const fetchInitialData = async () => {
      setLoading(true);
      try {
        const actualApod = await fetchApod(initialDate);
        if (actualApod) {
          setApod(actualApod);
        } else {
          setError("Failed to fetch APOD data.");
        }

        const recentDates = Array.from({ length: 20 }, (_, i) => {
          const date = new Date();
          date.setDate(date.getDate() - i);
          return date.toISOString().split("T")[0];
        });

        const recentDataPromises = recentDates.map(fetchApod);
        const recentApods = (await Promise.all(recentDataPromises)).filter(
          (data): data is ApodData => data !== null
        );

        setRecentApods(recentApods);
      } catch (error) {
        setError("Failed to fetch APOD data.");
      } finally {
        setLoading(false);
      }
    };

    fetchInitialData();
  }, [initialDate]);

  const fetchMoreData = useCallback(async () => {
    setLoading(true);
    const additionalDates = Array.from({ length: 20 }, (_, i) => {
      const date = new Date();
      date.setDate(date.getDate() - (page * 20 + i));
      return date.toISOString().split("T")[0];
    });

    const additionalDataPromises = additionalDates.map(fetchApod);
    const additionalApods = (await Promise.all(additionalDataPromises)).filter(
      (data): data is ApodData => data !== null
    );

    setRecentApods((prevApods) => [...prevApods, ...additionalApods]);
    setPage((prevPage) => prevPage + 1);
    setLoading(false);
  }, [page]);

  const handleSearch = async (date: string) => {
    setLoading(true);
    try {
      const data = await fetchApod(date);
      if (data) {
        setApod(data);
        setError(null);
      } else {
        setError("No APOD data found for the selected date.");
        setApod(null);
      }
    } catch (error) {
      setError("Failed to fetch data for the selected date.");
      setApod(null);
    } finally {
      setLoading(false);
    }
  };

  return { apod, recentApods, error, handleSearch, fetchMoreData, loading };
};

export default useApodData;
