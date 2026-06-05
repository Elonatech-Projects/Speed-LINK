import Image from "next/image";
import React from "react";
import digital from "../../public/images/CCTV-Security-Camera-e1762521184809.png";
import space from "../../public/images/Cowork-Space.png";
import test from "../../public/images/Test-Centre.png";
import consult from "../../public/images/Tech-Consulting.png";
import { FaNetworkWired } from "react-icons/fa";
import { FaLongArrowAltRight } from "react-icons/fa";

const Services = () => {
  return (
    <div className="bg-white">
      <div className=" py-25 xl:px-15 2xl:mx-71 px-5">
        <div className="container">
          <h4 className="font-semibold text-[32px] text-[#404297]">
            Our Services
          </h4>

          <hr className="border text-[#aeb8fe] mb-5 opacity-30 " />
          <div className="flex flex-col gap-5">
            <div className="flex flex-col md:flex-row gap-5">
              <div
                className="md:w-2/3 h-93 rounded-tl-[30px]"
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
              </div>

              <div className="md:w-1/3 flex flex-col gap-5">
                <div
                  className="md:h-44  h-55 md:rounded-tr-[30px] relative "
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
                </div>

                <div
                  className="md:h-44  h-55 relative"
                  style={{
                    backgroundImage: `url(${space.src})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                  }}
                >
                  <div className="p-4 flex flex-col justify-between h-full">
                    <h4 className="text-white text-[18px] font-medium">
                      Coworking Space
                    </h4>
                    <div className="flex justify-end text-white text-[18px]">
                      <FaLongArrowAltRight />
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex flex-col md:flex-row gap-5">
              <div
                className="md:w-1/3 h-55 md:h-80 md:rounded-bl-[30px] relative"
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
              </div>

              <div className="md:w-1/3 md:h-80 h-87 bg-[#404297] rounded-lg p-5 flex flex-col">
                <h4 className="text-white text-[18px] font-medium mb-4">
                  Training & Certifications
                </h4>
                <div className="space-y-3">
                  {[
                    "Corporate Training",
                    "Tutor-led Training",
                    "Self-paced Training",
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
              </div>

              <div
                className="md:w-1/3  md:h-80 h-90 rounded-br-[30px] relative"
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
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
