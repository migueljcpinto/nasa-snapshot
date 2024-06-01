"use client";
import React from "react";
import DailyPhoto from "@/components/daily-photo";
import SearchBar from "@/components/search-bar";
import useApodData from "@/app/hooks/useApodData";
import { ParallaxGallery } from "@/components/parallax-gallery";
import SectionDivider from "@/components/section-divider";

export default function Home() {
  const { apod, recentApods, error, handleSearch, fetchMoreData, loading } =
    useApodData();

  return (
    <div className="flex flex-col items-center px-4">
      <SearchBar onSearch={handleSearch} />
      {error && <div className="text-center mt-5 text-red-500">{error}</div>}
      {apod ? (
        <div className="flex items-center justify-center mt-10">
          <DailyPhoto
            title={apod.title}
            url={apod.url}
            explanation={apod.explanation}
            date={apod.date}
            type={apod.media_type}
            author={apod.copyright}
          />
        </div>
      ) : (
        <div className="mt-10 text-center text-gray-600">
          {loading ? "Loading..." : "No APOD available"}
        </div>
      )}
      <SectionDivider />
      <ParallaxGallery
        images={recentApods}
        fetchMoreData={fetchMoreData}
        loading={loading}
      />
    </div>
  );
}
