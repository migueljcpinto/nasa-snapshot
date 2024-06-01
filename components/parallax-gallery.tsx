"use client";
import { ParallaxGalleryProps } from "@/lib/types";
import { ParallaxScroll } from "./ui/parallax-scroll";
import useInfiniteScroll from "@/app/hooks/useInfiniteScroll";

export function ParallaxGallery({
  images,
  fetchMoreData,
  loading,
}: ParallaxGalleryProps) {
  useInfiniteScroll(fetchMoreData);

  return (
    <>
      <h2 className="text-3xl font-bold text-slate-800 text-center mb-12 dark:text-slate-400">
        Discover the Cosmos
      </h2>
      <div className="border-4 border-gray-300 rounded-lg p-4 shadow-lg bg-transparent">
        <ParallaxScroll images={images} />
        {loading && <div className="text-center mt-20">Loading...</div>}
      </div>
    </>
  );
}
