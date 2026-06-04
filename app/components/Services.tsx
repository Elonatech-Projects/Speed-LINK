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
      <div className="py-25 xl:mx-85 px-5">
        <h4 className="font-semibold text-[32px] text-[#404297]">
          Our Services
        </h4>

        <hr className="border text-[#aeb8fe]  " />
        <div className="md:grid md:grid-cols-3 flex flex-col gap-8">
          <div
            className="md:col-span-2 md:h-198  rounded-tl-[30px]"
            style={{
              backgroundImage: `url(${digital.src})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
            }}
          >
            <div className="px-3 py-7 ">
              <h4>IT Services</h4>

              <div className="p-3  md:w-md bg-[#cdcdcd] rounded-lg mt-5 space-y-3">
                <div className="bg-white flex gap-3 px-4 py-2.5 rounded-lg items-center">
                  <div className="bg-[#404297] w-7 h-7 leading-0 rounded-full justify-center items-center flex mb-2">
                    <FaNetworkWired />
                  </div>

                  <p className="text-[14px]  text-[#707070]">
                    Software Development & Deployment
                  </p>
                </div>

                <div className="bg-white flex gap-3 px-2 py-1 rounded-lg items-center">
                  <div className="bg-[#404297] w-7 h-7 leading-0 rounded-full justify-center items-center flex mb-2">
                    <FaNetworkWired />
                  </div>

                  <p className="text-[14px] pe-6 text-[#707070]">
                    Smart Surveillance
                  </p>
                </div>

                <div className="bg-white flex gap-3 px-2 py-1 rounded-lg items-center">
                  <div className="bg-[#404297] w-7 h-7 leading-0 rounded-full justify-center items-center flex mb-2">
                    <FaNetworkWired />
                  </div>

                  <p className="text-[14px] pe-6 text-[#707070]">
                    Cybersecurity
                  </p>
                </div>

                <div className="bg-white flex gap-3 px-2 py-1 rounded-lg items-center">
                  <div className="bg-[#404297] w-7 h-7 leading-0 rounded-full justify-center items-center flex mb-2">
                    <FaNetworkWired />
                  </div>

                  <p className="text-[14px] pe-6 text-[#707070]">
                    Internet &S Networking{" "}
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="md:col-span-1 gap-8 flex flex-col">
            <div
              className="relative h-50"
              style={{
                backgroundImage: `url(${digital.src})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
              }}
            >
              <div>
                <h4 className="text-white text-[18px] w-19.75 px-3 py-2.5">
                  Digital Marketing
                </h4>

                <div className="text-end text-[18px]">
                  <FaLongArrowAltRight />
                </div>
              </div>
            </div>

            <div className=" h-50"
              style={{
                backgroundImage: `url(${space.src})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
              }}
            >
              <div>
                <h4 className="text-white text-[18px] w-19.75 px-3 py-2.5">
                  Coworking Space
                </h4>

                <div className="text-end text-[18px]">
                  <FaLongArrowAltRight />
                </div>
              </div>
            </div>
          </div>

          <div className="relative h-60">
            <Image
              src={test}
              alt="Service 2"
              fill
              className="object-cover rounded-lg"
            />
          </div>
          <div className="relative h-60">
            <Image
              src={test}
              alt="Service 2"
              fill
              className="object-cover rounded-lg"
            />
          </div>
          <div className="relative h-60">
            <Image
              src={consult}
              alt="Service 3"
              fill
              className="object-cover rounded-lg"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
