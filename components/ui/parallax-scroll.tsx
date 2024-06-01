"use client";
import { useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { cn } from "@/utils/cn";
import Link from "next/link";
import { MdOpenInNew } from "react-icons/md";
import { PhotoData } from "@/lib/types";

export const ParallaxScroll = ({
  images,
  className,
}: {
  images: PhotoData[];
  className?: string;
}) => {
  const gridRef = useRef<any>(null);
  const { scrollYProgress } = useScroll({
    container: gridRef,
    offset: ["start start", "end start"],
  });

  const translateFirst = useTransform(scrollYProgress, [0, 1], [0, -200]);
  const translateSecond = useTransform(scrollYProgress, [0, 1], [0, 200]);
  const translateThird = useTransform(scrollYProgress, [0, 1], [0, -200]);

  const third = Math.ceil(images.length / 3);

  const firstPart = images.slice(0, third);
  const secondPart = images.slice(third, 2 * third);
  const thirdPart = images.slice(2 * third);

  const renderMedia = (el: PhotoData) => {
    if (el.media_type === "image") {
      return (
        <div className="relative">
          <Link
            className="pointer z-40 absolute right-4 top-4 flex items-center justify-center rounded-sm bg-background p-1.5 text-xs"
            href={el.url}
            target="_blank"
            aria-label="View original image"
          >
            <MdOpenInNew />
          </Link>
          <Image
            src={el.url}
            className="h-80 w-full object-cover object-left-top rounded-lg gap-10 !m-0 !p-0"
            height="400"
            width="400"
            alt="thumbnail"
          />
          <h2 className="absolute bottom-4 left-4 text-base font-bold text-white z-50">
            {el.title}
          </h2>
        </div>
      );
    } else if (el.media_type === "video") {
      return (
        <iframe
          className="h-80 w-full object-cover object-left-top rounded-lg gap-10 !m-0 !p-0"
          height="400"
          width="400"
          src={el.url}
          title={el.title}
          allowFullScreen
        ></iframe>
      );
    }
  };

  return (
    <div
      className={cn("h-[40rem] items-start overflow-y-auto w-full", className)}
      ref={gridRef}
    >
      <div
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 items-start max-w-5xl mx-auto gap-10 py-40 px-10"
        ref={gridRef}
      >
        <div className="grid gap-10">
          {firstPart.map((el, idx) => (
            <motion.div style={{ y: translateFirst }} key={"grid-1" + idx}>
              {renderMedia(el)}
            </motion.div>
          ))}
        </div>
        <div className="grid gap-10">
          {secondPart.map((el, idx) => (
            <motion.div style={{ y: translateSecond }} key={"grid-2" + idx}>
              {renderMedia(el)}
            </motion.div>
          ))}
        </div>
        <div className="grid gap-10">
          {thirdPart.map((el, idx) => (
            <motion.div style={{ y: translateThird }} key={"grid-3" + idx}>
              {renderMedia(el)}
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};
