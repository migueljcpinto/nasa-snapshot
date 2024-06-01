"use client";

import { MdOpenInNew } from "react-icons/md";
import { DirectionAwareHover } from "./ui/direction-aware-hover";
import Link from "next/link";

interface PhotoCardProps {
  imageUrl: string;
  date: string;
  title: string;
  author: string;
}

export function PhotoCard({ imageUrl, date, title, author }: PhotoCardProps) {
  return (
    <div className="relative object-cover shadow-xl border-[0.35rem] rounded-xl flex items-center justify-center">
      <DirectionAwareHover imageUrl={imageUrl}>
        <h2 className="text-xl font-bold">{title}</h2>
        <p className="font-normal text-sm">{author}</p>
      </DirectionAwareHover>
      <Link
        className="pointer z-40 absolute right-4 top-4 flex items-center justify-center rounded-sm bg-background p-1.5 text-xs"
        href={imageUrl}
        target="_blank"
        aria-label="View original image"
      >
        <MdOpenInNew />
      </Link>
    </div>
  );
}
