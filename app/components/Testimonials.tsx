import React from "react";
import {
  MdOutlineArrowBackIos,
  MdOutlineArrowForwardIos,
} from "react-icons/md";

const Testimonials = () => {
  return (
    <div className="bg-[#404297]">
      <div className="py-25 xl:mx-85  ">
        <h5 className="font-semibold text-[32px] text-[#ffffff] text-center">
          Testimonials
        </h5>

        <div className="">
          <div className="w-7.5 h-7.5flex items-center justify-between bg-[#ee3539]">
            <MdOutlineArrowBackIos className="w-[9.67] h-[16.67] text-white" />
          </div>
          <div className="w-184.5"></div>
          <div>
            <MdOutlineArrowForwardIos className="w-[9.67] h-[16.67] text-white" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
