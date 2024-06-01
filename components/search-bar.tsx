"use client";
import React, { useState } from "react";
import { PhotoDatePicker } from "./photo-date-picker";
import { MdImageSearch } from "react-icons/md";
import { Button } from "./ui/button";
import { IoSearchOutline } from "react-icons/io5";

interface SearchBarProps {
  onSearch: (date: string) => void;
}

const SearchBar: React.FC<SearchBarProps> = ({ onSearch }) => {
  const [date, setDate] = useState<Date | null>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (date) {
      // Ajuste a data para meia-noite UTC para evitar problemas de fuso horário
      const adjustedDate = new Date(
        Date.UTC(date.getFullYear(), date.getMonth(), date.getDate())
      );
      onSearch(adjustedDate.toISOString().split("T")[0]);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="flex justify-center mt-8">
      <PhotoDatePicker date={date} setDate={setDate} />
      <Button variant="outline" type="submit">
        <IoSearchOutline className="h-5 w-5 rounded-full" />
      </Button>
    </form>
  );
};

export default SearchBar;
