"use client";
import React from "react";
import { FaLongArrowAltRight } from "react-icons/fa";
import { motion } from "framer-motion";

const container = {
  hidden: {},
  visible: {
    transition: {
    },
  },
};

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

const HeroSection = () => {
  return (
    <div className="hero">
      <div className="2xl:mx-auto w-full px-5">
        <motion.div
          variants={container}
          initial="hidden"
          animate="visible"
          className="container flex flex-col items-center xl:pt-40 md:pt-20 pt-10 justify-center text-center"
        >
          {/* Badge */}
          <motion.div
            variants={fadeUp}
            className="flex items-center justify-between md:justify-center md:gap-8 gap-4 xl:gap-3.5 mb-6 border rounded-full p-1.5 md:w-91 w-85"
          >
            <div className="text-[#eb4d51] text-[14px] font-bold">
              <FaLongArrowAltRight />
            </div>
            <p className="text-[14px] xl:text-[16px] pr-1 whitespace-nowrap">
              100+ advanced tech projects
            </p>
            <button className="bg-[#aeb8fe] py-1.75 px-3 text-[12px] xl:text-[14px] rounded-full text-[#404297] hover:text-white hover:bg-[#ec4145] whitespace-nowrap">
              Learn More
            </button>
          </motion.div>

          {/* Heading */}
          <motion.h1
            variants={fadeUp}
            className="xl:w-157.5 md:w-150 mx-auto text-[42px] sm:text-[36px] md:text-[50px] 2xl:text-[54px] font-semibold leading-10 md:leading-13.5"
          >
            Let's give your business the edge it needs!
          </motion.h1>

          {/* Subtext */}
          <motion.p
            variants={fadeUp}
            className="md:text-[18px] px-10 text-center text-[16px] font-normal leading-5 xl:leading-6.75 mt-5"
          >
            Through our cutting-edge information technology solutions.
          </motion.p>

          {/* Button */}
          <button
            variants={fadeUp}
            className="bg-[#ec4145] mt-6 text-white hover:bg-[#5759a9] py-5 px-15 text-[16px] font-medium rounded-full"
          >
            Our Solutions
          </button>

        </motion.div>
      </div>
    </div>
  );
};

export default HeroSection;