"use client";
import React from "react";
import { FaLongArrowAltRight } from "react-icons/fa";
import { motion } from "framer-motion";

const fromLeft = {
  hidden: { opacity: 0, x: -60 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.7, ease: "easeOut" as const } },
};

const fromRight = {
  hidden: { opacity: 0, x: 60 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.7, ease: "easeOut" as const } },
};

const fromBottomRight = {
  hidden: { opacity: 0, x: 40, y: 40 },
  visible: { opacity: 1, x: 0, y: 0, transition: { duration: 0.7, ease: "easeOut" as const} },
};

const Robust = () => {
  return (
    <div className="bg-[#e6e8ef]">
      <div className="py-25 2xl:mx-71 xl:px-15 px-5">
        <div className="container flex md:flex-row flex-col items-end 2xl:justify-between lg:gap-40 gap-13">

          <motion.div
            variants={fromLeft}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="hidden md:block bg-linear-to-b from-[#ed3539] to-[#b42225] px-7.5 pt-9 pb-6 rounded-tr-[40px] rounded-bl-[40px] space-y-5"
          >
            <p className="text-[14px] text-white">SPEEDLINK HI-TECH SOLUTIONS</p>
            <h4 className="text-[32px] w-55 font-semibold leading-8">
              Who We Are & What We Do.
            </h4>
            <div className="text-[#ffffff] text-[18px] font-bold justify-end flex items-end">
              <FaLongArrowAltRight />
            </div>
          </motion.div>

          <motion.div
            variants={fromRight}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="2xl:w-180 w-full space-y-5"
          >
            <div className="flex items-start md:justify-between">
              <h1 className="md:text-[50px] text-[35px] leading-9 md:leading-12.5 font-semibold text-[#404297] md:w-81">
                Robust IT Solutions Provider
              </h1>
              <motion.p
                variants={fromBottomRight}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="border rounded-full text-[#4d4d4d] px-2.5 py-1.25 font-semibold text-[12px] md:text-[16px] whitespace-nowrap"
              >
                ESTD 2014
              </motion.p>
            </div>
            <div className="text-[#4d4d4d] lg:w-173 space-y-6 text-[16px] font-normal leading-6">
              <p>
                Speedlink Hi-Tech Solutions Limited is a Nigerian leading IT
                systems provider, known for providing clients with
                enterprise-class solutions addressing their local business
                needs. We deliver positive, rapid and the best return on
                investment (ROI) solutions for our customers.
              </p>
              <p>
                As Nigeria's trusted IT systems provider, we deliver
                enterprise-grade solutions tailored to your local business
                realities. From Enterprise Content Management and Document
                Workflow Automation to Hospital Information Systems, ERP, and
                high-speed connectivity solutions—we provide the infrastructure
                that keeps Nigerian businesses competitive and compliant.
              </p>
            </div>
          </motion.div>

          <motion.div
            variants={fromLeft}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="md:hidden block bg-linear-to-b from-[#ed3539] to-[#b42225] px-8 pt-8 pb-6 rounded-tr-[40px] rounded-bl-[40px] space-y-5 w-full"
          >
            <p className="text-[14px] text-white">SPEEDLINK HI-TECH SOLUTIONS</p>
            <h4 className="text-[32px] w-55 font-semibold leading-8">
              Who We Are & What We Do.
            </h4>
            <div className="text-[#ffffff] text-[18px] font-bold justify-end flex items-end">
              <FaLongArrowAltRight />
            </div>
          </motion.div>

        </div>
      </div>
    </div>
  );
};

export default Robust;