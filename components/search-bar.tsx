"use client";
import React, { useState } from "react";
import { PhotoDatePicker } from "./photo-date-picker";
import { Button } from "./ui/button";
import { IoSearchOutline } from "react-icons/io5";
import { SearchBarProps } from "@/lib/types";

const SearchBar: React.FC<SearchBarProps> = ({ onSearch }) => {
  const [date, setDate] = useState<Date | null>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (date) {
      const adjustedDate = new Date(
        Date.UTC(date.getFullYear(), date.getMonth(), date.getDate())
      );
      onSearch(adjustedDate.toISOString().split("T")[0]);
    }
  };

  return (
    <>
      <div className=" lg:flex flex-col hidden space-y-2  justify-center items-center">
        <h2 className="text-3xl font-bold text-center text-slate-900 dark:text-slate-400">
          Welcome, Cosmos Explorers!
        </h2>
        <p className="mt-2 text-lg text-center text-slate-500 dark:text-slate-300">
          Discover the photo that was taken today!
        </p>
      </div>
      <form onSubmit={handleSubmit} className="flex justify-center mt-8">
        <PhotoDatePicker date={date} setDate={setDate} />
        <Button variant="outline" type="submit">
          <IoSearchOutline className="h-5 w-5 rounded-full" />
        </Button>
      </form>
    </>
  );
};

export default SearchBar;
