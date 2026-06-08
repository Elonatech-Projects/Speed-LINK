"use client";
import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";
import digital from "../../public/images/CCTV-Security-Camera-e1762521184809.png";
import space from "../../public/images/Cowork-Space.png";
import test from "../../public/images/Test-Centre.png";
import consult from "../../public/images/Tech-Consulting.png";
import { FaNetworkWired, FaLongArrowAltRight } from "react-icons/fa";

const fromLeft = {
  hidden: { opacity: 0, x: -60 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.7, ease: "easeOut" } },
};
const fromRight = {
  hidden: { opacity: 0, x: 60 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.7, ease: "easeOut" } },
};
const fromBottom = {
  hidden: { opacity: 0, y: 60 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: "easeOut" } },
};

const vp = { once: true, amount: 0.2 };

const Services = () => {
  return (
    <div className="bg-white">
      <div className="py-25 xl:px-15 2xl:mx-71 px-5">
        <div className="container">
          <h4 className="font-semibold text-[32px] text-[#404297]">
            Our Services
          </h4>
          <hr className="border text-[#aeb8fe] mb-5 opacity-30" />

          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5">
            {/* IT Services — left */}
            <motion.div
              variants={fromLeft}
              initial="hidden"
              whileInView="visible"
              viewport={vp}
              className="md:col-span-2 xl:col-span-2 xl:row-span-2 h-90 md:h-93 rounded-tl-[30px]"
              style={{
                backgroundImage: `url(${digital.src})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            >
              <div className="p-5">
                <h4 className="text-white text-[20px] font-medium mb-4">
                  IT Services
                </h4>
                <div className="bg-[#cdcdcd] rounded-lg p-4 space-y-3 max-w-sm">
                  {[
                    "Software Development & Deployment",
                    "Smart Surveillance",
                    "Cybersecurity",
                    "Internet & Networking",
                  ].map((item) => (
                    <div
                      key={item}
                      className="bg-white flex gap-3 px-3 py-2.5 rounded-lg items-center"
                    >
                      <div className="bg-[#404297] w-7 h-7 rounded-full flex justify-center items-center shrink-0">
                        <FaNetworkWired className="text-white text-xs" />
                      </div>
                      <p className="text-[14px] text-[#707070]">{item}</p>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>

            {/* Digital Marketing — right */}
            <motion.div
              variants={fromRight}
              initial="hidden"
              whileInView="visible"
              viewport={vp}
              className="md:col-start-1 md:row-start-2 xl:col-start-3 xl:row-start-1 h-44 xl:rounded-tr-[30px] relative"
              style={{
                backgroundImage: `url(${digital.src})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            >
              <div className="p-4 flex flex-col justify-between h-full">
                <h4 className="text-white text-[18px] font-medium">
                  Digital Marketing
                </h4>
                <div className="flex justify-end text-white text-[18px]">
                  <FaLongArrowAltRight />
                </div>
              </div>
            </motion.div>

            {/* Test Centre — left */}
            <motion.div
              variants={fromLeft}
              initial="hidden"
              whileInView="visible"
              viewport={vp}
              className="md:col-start-2 md:row-start-2 md:row-span-2 xl:col-start-1 xl:row-start-3 xl:row-span-1 h-55 md:h-auto xl:h-80 xl:rounded-bl-[30px] relative"
              style={{
                backgroundImage: `url(${test.src})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            >
              <div className="p-4 flex flex-col justify-between h-full">
                <h4 className="text-white text-[18px] font-medium">
                  Test Centre Solutions
                </h4>
                <div className="flex justify-end text-white text-[18px]">
                  <FaLongArrowAltRight />
                </div>
              </div>
            </motion.div>

            {/* Space Rental — right */}
            <motion.div
              variants={fromRight}
              initial="hidden"
              whileInView="visible"
              viewport={vp}
              className="md:col-start-1 md:row-start-3 xl:col-start-3 xl:row-start-2 h-44 relative"
              style={{
                backgroundImage: `url(${space.src})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            >
              <div className="p-4 flex flex-col justify-between h-full">
                <h4 className="text-white text-[18px] font-medium">
                  Space Rental
                </h4>
                <div className="flex justify-end text-white text-[18px]">
                  <FaLongArrowAltRight />
                </div>
              </div>
            </motion.div>

            {/* Training — bottom */}
            <motion.div
              variants={fromBottom}
              initial="hidden"
              whileInView="visible"
              viewport={vp}
              className="md:col-start-1 md:row-start-4 xl:col-start-2 xl:row-start-3 h-80 bg-[#404297] rounded-lg p-5 flex flex-col"
            >
              <h4 className="text-white text-[18px] font-medium mb-4">
                Training & Certifications
              </h4>
              <div className="space-y-3">
                {[
                  "Corporate Training",
                  "Tutor-led Training",
                  "Self-paced training",
                  "SIWES Placement",
                ].map((item) => (
                  <div
                    key={item}
                    className="bg-white flex gap-3 px-3 py-2.5 rounded-lg items-center"
                  >
                    <div className="bg-[#404297] w-7 h-7 rounded-full flex justify-center items-center shrink-0">
                      <FaNetworkWired className="text-white text-xs" />
                    </div>
                    <p className="text-[14px] text-[#707070]">{item}</p>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Consultancy — right */}
            <motion.div
              variants={fromRight}
              initial="hidden"
              whileInView="visible"
              viewport={vp}
              className="md:col-start-2 md:row-start-4 xl:col-start-3 xl:row-start-3 h-80 xl:rounded-br-[30px] relative"
              style={{
                backgroundImage: `url(${consult.src})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            >
              <div className="p-4 flex flex-col justify-between h-full">
                <h4 className="text-white text-[18px] font-medium">
                  Consultancy & Procurement
                </h4>
                <div className="flex justify-end text-white text-[18px]">
                  <FaLongArrowAltRight />
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
