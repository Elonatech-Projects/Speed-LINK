import React from "react";
import { FaLongArrowAltRight } from "react-icons/fa";

const Robust = () => {
  return (
    <div className="bg-[#e6e8ef]   ">
      <div className="py-25 xl:mx-85 flex items-end justify-between">
        <div className="bg-linear-to-b from-[#ed3539] to-[#b42225] px-7.5 pt-7.5 pb-5 rounded-tr-[40px] rounded-bl-[40px] space-y-5">
          <p className="text-[14px] text-white ">SPEEDLINK HI-TECH SOLUTIONS</p>

          <h4 className="text-[32px] w-55 font-semibold leading-8" >Who We Are & What We Do.</h4>

          <div className="text-[#ffffff] text-[18px] font-bold justify-end flex items-end">
            <FaLongArrowAltRight />
          </div>
        </div>

        <div className="w-180 space-y-5">
          <div className="flex items-start justify-between">
            <h1 className="text-[50px] leading-12.5 font-semibold text-[#404297] w-81">
              Robust IT Solutions Provider
            </h1>
            <p className="border rounded-full text-[#4d4d4d] px-2.5 py-1.25 font-semibold text-[16px] ">
              ESTD 2014
            </p>
          </div>
          <div className="text-[#4d4d4d] space-y-5 text-[16px] font-normal leading-6">
            <p>
              Speedlink Hi-Tech Solutions Limited is a Nigerian leading IT
              systems provider, known for providing clients with
              enterprise-class solutions addressing their local business needs.
              We deliver positive, rapid and the best return on investment (ROI)
              solutions for our customers.
            </p>
            <p>
              As Nigeria’s trusted IT systems provider, we deliver
              enterprise-grade solutions tailored to your local business
              realities. From Enterprise Content Management and Document
              Workflow Automation to Hospital Information Systems, ERP, and
              high-speed connectivity solutions—we provide the infrastructure
              that keeps Nigerian businesses competitive and compliant.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Robust;
