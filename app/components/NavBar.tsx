import Link from "next/link";
import React from "react";

import logo from "../../public/images/speed-logo.png";
import { FaAngleDown } from "react-icons/fa";
import { RxHamburgerMenu } from "react-icons/rx";
import Image from "next/image";

const NavBar = () => {
  return (
    <div className="fixed bg-white px-5 md:py-3 py-4.5 xl:px-15 2xl:px-85 w-full  ">
      <div className="flex items-center justify-between">
        <Image
          src={logo}
          alt="Logo"
          className="xl:w-36 xl:h-[59.83px] w-35 h-14.5"
        />

        <div className="text-[#707070] text-[15px] font-normal xl:flex gap-8 hidden ">
          <Link href="/">About</Link>

          <div className="flex items-center gap-1">
            <Link href="/">Products</Link>
            <FaAngleDown />
          </div>

          <div className="flex items-center gap-1">
            <Link href="/">Services</Link>
            <FaAngleDown />
          </div>

          <Link href="/">Case Studies</Link>
          <Link href="/">Insights</Link>
        </div>
        <div className="xl:hidden block text-[#47489b] text-[20px] font-extrabold">
          <RxHamburgerMenu />
        </div>
        <button className="bg-linear-to-r from-[#46489e] to-[#6870d0] text-white rounded-full md:px-8 px-5 py-3.75 text-[14.4px] md:text-[16px] ">
          Book a Call
        </button>
      </div>
    </div>
  );
};

export default NavBar;
