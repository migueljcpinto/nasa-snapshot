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

      <div className="lg:flex hidden mx-auto flex-col">
        <span className="text-3xl font-bold text-slate-800 dark:text-slate-500">
          Welcome, Cosmos Explorers!
        </span>
        <p className="mt-2 text-lg text-slate-600 dark:text-slate-300">
          Discover the photo that was taken today!
        </p>
      </div>
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

          <div className=" flex justify-center items-center">
            <Button type="button" title="Contact me" variant="default">
              <Link href="https://mikebitedev.vercel.app">Contact me</Link>
            </Button>
          </div>
        </SheetContent>
      </Sheet>

      <div className="lg:flex hidden">
        <Button type="button" title="Contact me" variant="default">
          <Link href="https://mikebitedev.vercel.app">Contact me</Link>
        </Button>
      </div>
    </nav>
  );
};

export default Navbar;
