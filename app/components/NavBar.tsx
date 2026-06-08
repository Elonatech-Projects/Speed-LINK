"use client";

import Link from "next/link";
import React, { useState } from "react";
import logo from "../../public/images/speed-logo.png";
import { FaAngleDown } from "react-icons/fa";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoClose } from "react-icons/io5";
import Image from "next/image";
import ProductHover from "./ProductHover";
import ServiceHover from "./ServiceHover";

const NavBar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      <div className="fixed bg-white px-5 md:py-3 py-4.5 sm:px-5 md:px-10 xl:px-15 2xl:px-85 w-full z-50">
        <div className="container flex items-center justify-between">
          <Image
            src={logo}
            alt="Logo"
            className="xl:w-36 xl:h-[59.83px] w-35 h-14.5"
          />

          <div className="text-[#707070] text-[15px] font-normal xl:flex gap-8 hidden">
            <Link href="/" className="hover:text-[#ee3539]">
              About
            </Link>
            <div className="group flex items-center gap-1 hover:text-[#ee3539]">
              <Link href="/">Products</Link>
              <FaAngleDown />
              <ProductHover />
            </div>
            <div className="flex items-center gap-1 group hover:text-[#ee3539]">
              <Link href="/">Services</Link>
              <FaAngleDown />
              <ServiceHover />
            </div>
            <Link href="/" className="hover:text-[#ee3539]">
              Case Studies
            </Link>
            <Link href="/" className="hover:text-[#ee3539]">
              Insights
            </Link>
          </div>

          <div
            className="xl:hidden block text-[#47489b] text-[24px] font-extrabold cursor-pointer"
            onClick={() => setMenuOpen(true)}
          >
            <GiHamburgerMenu />
          </div>

          <button className="bg-linear-to-r from-[#46489e] to-[#6870d0] text-white rounded-full md:px-8 px-5 py-3.75 text-[14.4px] md:text-[16px]">
            Book a Call
          </button>
        </div>
      </div>

      <div
        className={`fixed top-0 left-0 h-full md:w-[600px] w-[300px] bg-white shadow-2xl z-[60] transform transition-transform duration-300 ${
          menuOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="flex justify-between items-center p-5 border-b">
          <Image src={logo} alt="Logo" className="w-40 h-14" />
          <IoClose
            className="text-2xl text-[#47489b] cursor-pointer"
            onClick={() => setMenuOpen(false)}
          />
        </div>

        <div className="flex flex-col gap-2 p-4 text-[#707070] text-[15px]">
          <Link
            href="/"
            className="bg-[#f5f5f5] px-4 py-3 rounded hover:text-[#ee3539]"
            onClick={() => setMenuOpen(false)}
          >
            About
          </Link>

          <button className="bg-[#f5f5f5] px-4 py-3 rounded flex items-center justify-between w-full hover:text-[#ee3539]">
            Products <span className="text-[12px]">&#9654;</span>
          </button>

          <button className="bg-[#f5f5f5] px-4 py-3 rounded flex items-center justify-between w-full hover:text-[#ee3539]">
            Services <span className="text-[12px]">&#9654;</span>
          </button>

          <Link
            href="/"
            className="bg-[#f5f5f5] px-4 py-3 rounded hover:text-[#ee3539]"
            onClick={() => setMenuOpen(false)}
          >
            Case Studies
          </Link>

          <Link
            href="/"
            className="bg-[#f5f5f5] px-4 py-3 rounded hover:text-[#ee3539]"
            onClick={() => setMenuOpen(false)}
          >
            Insights
          </Link>

          <button className="bg-linear-to-r from-[#46489e] to-[#6870d0] text-white rounded-full px-5 py-3 text-[14px] mt-4">
            Book a Call
          </button>
        </div>
      </div>

      {menuOpen && (
        <div
          className="fixed inset-0 bg-black/40 z-[55]"
          onClick={() => setMenuOpen(false)}
        />
      )}
    </>
  );
};

export default NavBar;