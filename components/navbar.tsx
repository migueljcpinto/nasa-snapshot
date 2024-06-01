import Image from "next/image";
import Link from "next/link";
import React from "react";
import SheetMenu from "./sheet-menu";

const Navbar = () => {
  return (
    <nav className="flex flex-col lg:flex-row z-30 m-5 px-5 space-x-5 justify-between items-center relative">
      <Link href="/">
        <Image src="/NasaPhoto.png" alt="logo" width={95} height={50} />
      </Link>

      <div className="flex flex-col justify-center items-center lg:absolute lg:left-[37%] top-2">
        <h2 className="lg:text-3xl md:text-xl font-bold text-center text-slate-900 dark:text-slate-400">
          Welcome, Cosmos Explorers!
        </h2>
        <p className="mt-2 lg:text-lg text-base text-center text-slate-500 dark:text-slate-300">
          Discover the photo that was taken today!
        </p>
      </div>

      <SheetMenu />
    </nav>
  );
};

export default Navbar;
