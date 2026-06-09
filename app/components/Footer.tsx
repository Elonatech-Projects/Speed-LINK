import Image from "next/image";
import React from "react";
import footer from "../../public/images/Speedlink-Logo-Secondary.png";
import { BiLogoFacebookCircle } from "react-icons/bi";
import { PiInstagramLogoLight } from "react-icons/pi";
import { BsLinkedin } from "react-icons/bs";
import { FaYoutube } from "react-icons/fa6";

const Footer = () => {
  return (
    <div className="bg-[#404297]">
      <div className="2xl:py-25 md:py-12.5 2xl:mx-71 py-12.5 xl:px-15 px-5">
        <div className="container grid grid-cols-2 md:grid-cols-4 xl:grid-cols-[2fr_1fr_1fr_1fr] gap-8 md:gap-6 xl:gap-12">

          <div className="md:w-58.5 xl:w-115 2xl:w-130 col-span-2 md:col-span-1 space-y-6">
            <div className="md:w-41 xl:w-46.25 w-50.25">
              <Image src={footer} alt="Footer Image" />
            </div>
            <p className="xl:pe-37.5 pe-20 md:pe-0 text-[15px] text-[#ffffffa0]">
              A team of IT experts, providing comprehensive information
              technology solutions that make businesses stand out.
            </p>
            <div className="w-35 flex items-center justify-between">
              <div className="bg-[#ee3539] w-7.5 h-7.5 rounded-md flex items-center justify-center">
                <BiLogoFacebookCircle className="text-white" />
              </div>
              <div className="bg-[#ee3539] w-7.5 h-7.5 rounded-md flex items-center justify-center">
                <PiInstagramLogoLight className="text-white" />
              </div>
              <div className="bg-[#ee3539] w-7.5 h-7.5 rounded-md flex items-center justify-center">
                <BsLinkedin className="text-white" />
              </div>
              <div className="bg-[#ee3539] w-7.5 h-7.5 rounded-md flex items-center justify-center">
                <FaYoutube className="text-white" />
              </div>
            </div>
          </div>

          <div className="col-span-2  md:pl-10 md:col-span-1 space-y-5">
            <h5 className="text-[14px] font-bold text-white">SERVICES</h5>
            <div className="space-y-3 text-[15px] text-[#ffffffa0] font-normal">
              <p className="hover:text-[#ee3539] cursor-pointer">IT Services</p>
              <p className="hover:text-[#ee3539] cursor-pointer">Training & Certification</p>
              <p className="hover:text-[#ee3539] cursor-pointer">Space Rental</p>
              <p className="hover:text-[#ee3539] cursor-pointer">Test Centre Solutions</p>
              <p className="hover:text-[#ee3539] cursor-pointer">Digital Marketing</p>
              <p className="hover:text-[#ee3539] cursor-pointer">Consultancy & Procurement</p>
            </div>
          </div>

          <div className="col-span-1 space-y-5">
            <h5 className="text-[14px] font-bold text-white">PRODUCTS</h5>
            <div className="space-y-3 text-[15px] text-[#ffffffa0] font-normal">
              <p className="hover:text-[#ee3539] cursor-pointer">E-Learning</p>
              <p className="hover:text-[#ee3539] cursor-pointer">DigiSchool</p>
              <p className="hover:text-[#ee3539] cursor-pointer">SpeedKonnect</p>
              <p className="hover:text-[#ee3539] cursor-pointer">BlazzingShare</p>
              <p className="hover:text-[#ee3539] cursor-pointer">SpeedTalentHQ</p>
              <p className="hover:text-[#ee3539] cursor-pointer">ERP Softwares</p>
            </div>
          </div>

          <div className="col-span-1 space-y-5">
            <h5 className="text-[14px] font-bold text-white">COMPANY</h5>
            <div className="space-y-3 text-[15px] text-[#ffffffa0] font-normal">
              <p className="hover:text-[#ee3539] cursor-pointer">About Us</p>
              <p className="hover:text-[#ee3539] cursor-pointer">Our Team</p>
              <p className="hover:text-[#ee3539] cursor-pointer">Privacy Policy</p>
              <p className="hover:text-[#ee3539] cursor-pointer">Terms of Service</p>
            </div>
          </div>

        </div>
      </div>

      <div className="xl:mx-15 2xl:mx-71 mx-5 my-6">
        <hr className="container border text-[#6466ab] opacity-50" />
      </div>

      <div className="px-5 xl:px-15 2xl:mx-85 py-5">
        <div className="container flex items-center text-[#ffffffa0] justify-between text-[15px] font-normal">
          <p>© 2026 Speedlink Hi-Tech Solutions</p>
          <p>Developers</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;