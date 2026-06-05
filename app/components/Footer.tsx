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
      <div className=" 2xl:py-25 2xl:mx-71  xl:px-15 px-5 pt-7">
        <div className="container  flex  flex-col md:flex-row  md:items-start md:justify-between md:gap-6 xl:gap-8">
          <div className="w-120 space-y-6">
            <div className="md:w-48 xl:w-64 w-59.5 space-y-6">
              <Image src={footer} alt="Footer Image" />
            </div>
            <p className="pe-30 md:pe-20 ">
              A team of IT experts, providing comprehensive information
              technology solutions that make businesses stand out.
            </p>

            <div className="w-35 flex items-center justify-between">
              <div className=" bg-[#ee3539] w-7.5 h-7.5 rounded-md flex items-center justify-center">
                <BiLogoFacebookCircle className="text-white" />
              </div>
              <div className=" bg-[#ee3539] w-7.5 h-7.5 rounded-md flex items-center justify-center">
                <PiInstagramLogoLight className="text-white" />
              </div>
              <div className=" bg-[#ee3539] w-7.5 h-7.5 rounded-md flex items-center justify-center">
                <BsLinkedin className="text-white" />
              </div>

              <div className=" bg-[#ee3539] w-7.5 h-7.5 rounded-md flex items-center justify-center">
                <FaYoutube className="text-white" />
              </div>
            </div>
          </div>

          <hr className="border text-[#6466ab] xl:mx-15 2xl:hidden block my-6 opacity-50" />

          <div className="space-y-5">
            <h5 className="text-[14px] font-bold"> SERVICES</h5>
            <div className="xl:space-y-3 space-y-1 text-xs xl:text-[15px] font-normal">
              <p>IT Services</p>
              <p>Training & Certification</p>
              <p>Space Rental</p>
              <p>Test Centre Solutions</p>
              <p>Digital Marketing</p>
              <p>Consultancy & Procurement</p>
            </div>
          </div>

          <hr className="border text-[#6466ab] xl:mx-85 2xl:hidden block my-6 opacity-50" />

          <div className="flex  gap-8 xl:gap-16">
            <div className="space-y-5">
              <h5 className="text-[14px] font-bold"> PRODUCTS</h5>
              <div className="xl:space-y-3 space-y-1 text-xs xl:text-[15px] font-normal">
                <p>E-Learning</p>
                <p>DigiSchool</p>
                <p>SpeedKonnect</p>
                <p>BlazzingShare</p>
                <p>SpeedTalentHQ</p>
                <p>ERP Softwares</p>
              </div>
            </div>

            <div className="space-y-5">
              <h5 className="text-[14px] font-bold"> COMPANY</h5>
              <div className="xl:space-y-3 space-y-1 text-xs xl:text-[15px] font-normal">
                <p>About Us</p>
                <p>Our Team</p>
                <p>Privacy Policy</p>
                <p>Terms of Service</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className=" xl:mx-15 2xl:mx-71 mx-5 my-6">
        <hr className="container border text-[#6466ab] opacity-50" />
      </div>

      <div className="  px-5 xl:px-15 2xl:mx-85 py-5 ">
        <div className="container flex items-center justify-between text-[14px] font-normal text-[#FFFFFFAO] ">
          <p>© 2026 Speedlink Hi-Tech Solutions</p>
          <p>Developers</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
