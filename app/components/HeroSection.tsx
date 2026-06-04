import React from "react";
import { FaLongArrowAltRight } from "react-icons/fa";

const HeroSection = () => {
  return (
    <div className="hero ">
      <div className=" xl:pt-40 md:pt-20 pt-10 2xl:mx-auto w-full px-5 flex flex-col items-center justify-center text-center ">
        {/* Badge */}
        <div className="flex items-center 2xl:justify-center md:gap-8 gap-6 xl:gap-3.5 mb-6 border rounded-full p-1.5 w-full md:w-91  text-[14px] xl:text-[16px]">
          <div className="text-[#eb4d51] text-[14px] font-bold">
            <FaLongArrowAltRight />
          </div>
          <p className="text-[14px] xl:text-[16px] pr-1">
            100+ advanced tech projects
          </p>
          <button className="bg-[#aeb8fe] py-1.75 px-3 text-[12px] xl:text-[14px] rounded-full text-[#404297] hover:text-[#ffffff] hover:bg-[#ec4145]">
            Learn More
          </button>
        </div>

        {/* Text content */}
        <div className=" xl:w-157.5 md:w-150 mx-auto space-y-5">
          <h1 className="text-[42px] sm:text-[36px] md:text-[50px] 2xl:text-[54px] font-semibold leading-10 md:leading-13.5">
            Let's give your business the edge it needs!
          </h1>
          <p className="md:text-[18px] px-10 text-center text-[16px] font-normal leading-5 xl:leading-6.75">
            Through our cutting-edge information technology solutions.
          </p>
          <button className="bg-[#ec4145] mt-6 text-white hover:bg-[#5759a9] py-5 px-15 xl:py-5 xl:px-15 text-[16px] font-medium rounded-full">
            Our Solutions
          </button>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
