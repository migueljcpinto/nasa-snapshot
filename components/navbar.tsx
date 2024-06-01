import Image from "next/image";
import Link from "next/link";
import React from "react";
import { Button } from "./ui/button";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

const Navbar = () => {
  return (
    <nav className="flex z-30 m-5 px-5 space-x-5 justify-between items-center flex-row relative">
      <Link href="/">
        <Image src="/NasaPhoto.png" alt="logo" width={95} height={50} />
      </Link>

      <Sheet>
        <SheetTrigger>
          <Image
            src="menu.svg"
            alt="menu"
            width={32}
            height={32}
            className="inline-block cursor-pointer lg:hidden"
          />
        </SheetTrigger>
        <SheetContent className="flex items-center justify-between flex-col">
          <SheetHeader className="p-9 items-center">
            <Image src="/NasaPhoto.png" alt="logo" width={105} height={60} />
          </SheetHeader>

          <div className=" flex flex-col space-y-10 justify-center items-center mb-8">
            <h2 className="text-3xl font-bold text-center text-slate-900 dark:text-slate-400">
              Welcome, Cosmos Explorers!
            </h2>
            <p className="mt-2 text-lg text-center text-slate-500 dark:text-slate-300">
              Discover the photo that was taken today!
            </p>
          </div>

          <Button type="button" title="Contact me" variant="default">
            <Link href="https://mikebitedev.vercel.app">Contact me</Link>
          </Button>
        </SheetContent>
      </Sheet>
    </nav>
  );
};

export default Navbar;
