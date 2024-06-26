"use client";

import React from "react";
import { FaCircleInfo } from "react-icons/fa6";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { PhotoExplanation } from "./photo-explanation";
import { PhotoCard } from "./photo-card";
import { format } from "date-fns";
import { enUS } from "date-fns/locale";
import { DailyPhotoProps } from "@/lib/types";

const DailyPhoto: React.FC<DailyPhotoProps> = ({
  title,
  url,
  explanation,
  date,
  type,
  author,
}) => {
  const isVideo = url.includes("youtube.com");
  const formattedDate = format(new Date(date), "dd. MMMM yyyy", {
    locale: enUS,
  });

  return (
    <div className="flex flex-col items-center justify-center">
      <p className="m-2">Astronomy Picture of {formattedDate}</p>
      <div>
        {isVideo ? (
          <iframe
            className="aspect-square w-full h-full flex-1 shadow-xl border-[0.35rem] rounded-xl"
            src={url}
            title={title}
            allowFullScreen
          />
        ) : (
          <PhotoCard imageUrl={url} date={date} title={title} author={author} />
        )}
        <Popover>
          <PopoverTrigger>
            <FaCircleInfo />
          </PopoverTrigger>
          <PopoverContent>
            <PhotoExplanation explanation={explanation} />
          </PopoverContent>
        </Popover>
      </div>
    </div>
  );
};

export default DailyPhoto;
