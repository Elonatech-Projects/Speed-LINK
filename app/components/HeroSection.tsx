import React from "react";
import { FaLongArrowAltRight } from "react-icons/fa";

const HeroSection = () => {
  return (
    <div className="hero  ">
      <div className=" pt-70 justify-center flex flex-col mx-auto text-center">
        <div className="flex items-center justify-center gap-3.5 mb-6 border rounded-full p-1.75 mx-auto w-91 text-[16px] ">
          <div className="text-[#eb4d51] text-[14px] font-bold">
            <FaLongArrowAltRight />
          </div>
          <p className="text-[16px] pr-1">100+ advanced tech projects</p>
          <button className="bg-[#aeb8fe] py-1 px-3 text-[14px] rounded-full text-[#404297] hover:bg-[#ec4145]">
            Learn More
          </button>
        </div>
        <div className="w-157.5 space-y-5">
          <h1 className=" text-[54px] font-semibold leading-13.5 ">
            Let's give your business the edge it needs!
          </h1>
          <p className="text-[18px] font-normal leading-6.75">Through our cutting-edge information technology solutions.</p>
          <button className="bg-[#ec4145] text-white hover:bg-[#5759a9] py-5 px-15 text-[16px] font-medium rounded-full ">Our Solutions</button>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
