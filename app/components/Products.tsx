import Image from "next/image";
import React from "react";
import speed from "../../public/images/Sales-Review-Meeting.png";
import blazing from "../../public/images/BlazzingShare.png";
import software from "../../public/images/ERP-Software-Presentation.png";
import speedkonect from "../../public/images/Internet-Services.png";
import digi from "../../public/images/Digital-Marketing-Thumbnail-1.png";
import speedlearn from "../../public/images/SpeedLearn.png";

const Products = () => {
  return (
    <div className="bg-[#e6e8ef]">
      <div className="py-25 2xl:mx-71 xl:px-15 px-5">
        <div className="container">
          <h4 className="font-semibold text-[32px] text-[#404297]">
            Our Products
          </h4>
          <hr className="border text-[#aeb8fe] mb-6 opacity-30" />

          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
            <div className="bg-white rounded-lg overflow-hidden shadow-sm flex flex-col">
              <div className="p-3 w-full">
                <div className="relative h-52 w-full ">
                  <Image
                    src={speed}
                    alt="SpeedTalentHQ"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
              <div className="p-5 flex flex-col gap-1 flex-1">
                <h5 className="font-medium text-[20px] text-[#404297]">
                  SpeedTalentHQ
                </h5>
                <p className="text-[#606060] text-[15px]">
                  Online Recruitment Platform
                </p>

                <hr className="border text-[#6466ab] my-2.5 opacity-10" />

                <button className="mt-auto bg-[#404297] text-white py-3 px-6 rounded-md text-[15px] w-full">
                  Learn More
                </button>
              </div>
            </div>

            <div className="bg-white rounded-lg overflow-hidden shadow-sm flex flex-col">
              <div className="p-3 w-full">
                <div className="relative h-52 w-full">
                  <Image
                    src={blazing}
                    alt="Blazzing Share"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
              <div className="p-5 flex flex-col gap-2 flex-1">
                <h5 className="font-medium text-[20px] text-[#404297]">
                  Blazzing Share
                </h5>
                <p className="text-[#606060] text-[15px]">
                  Large File Transfer & Online Survey Solution
                </p>

                <hr className="border text-[#6466ab] my-2.5 opacity-10" />

                <button className="mt-auto bg-[#404297] text-white py-3 px-6 rounded-md text-[15px] w-full">
                  Learn More
                </button>
              </div>
            </div>

            <div className="bg-white rounded-lg overflow-hidden shadow-sm flex flex-col">
              <div className="p-3 w-full">
                <div className="relative h-52 w-full">
                  <Image
                    src={software}
                    alt="ERP Software"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
              <div className="p-5 flex flex-col gap-2 flex-1">
                <h5 className="font-medium text-[20px] text-[#404297]">
                  ERP Software
                </h5>
                <p className="text-[#606060] text-[15px]">
                  Enterprise Resource Planning (ERP) Software
                </p>

                <hr className="border text-[#6466ab] my-2.5 opacity-10" />

                <button className="mt-auto bg-[#404297] text-white py-3 px-6 rounded-md text-[15px] w-full">
                  Learn More
                </button>
              </div>
            </div>

            <div className="bg-white rounded-lg overflow-hidden shadow-sm flex flex-col">
              <div className="p-3 w-full">
                <div className="relative h-52 w-full">
                  <Image
                    src={speedkonect}
                    alt="SpeedKonnect"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
              <div className="p-5 flex flex-col gap-2 flex-1">
                <h5 className="font-medium text-[20px] text-[#404297]">
                  SpeedKonnect
                </h5>
                <p className="text-[#606060] text-[15px]">
                  Internet Services & Management
                </p>

                <hr className="border text-[#6466ab] my-2.5 opacity-10" />

                <button className="mt-auto bg-[#404297] text-white py-3 px-6 rounded-md text-[15px] w-full">
                  Learn More
                </button>
              </div>
            </div>

            <div className="bg-white rounded-lg overflow-hidden shadow-sm flex flex-col">
              <div className="p-3 w-full">
                <div className="relative h-52 w-full">
                  <Image
                    src={digi}
                    alt="Digischool"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
              <div className="p-5 flex flex-col gap-2 flex-1">
                <h5 className="font-medium text-[20px] text-[#404297]">
                  Digischool
                </h5>
                <p className="text-[#606060] text-[15px]">
                  School Management Solutions
                </p>

                <hr className="border text-[#6466ab] my-2.5 opacity-10" />

                <button className="mt-auto bg-[#404297] text-white py-3 px-6 rounded-md text-[15px] w-full">
                  Learn More
                </button>
              </div>
            </div>

            <div className="bg-white rounded-lg overflow-hidden shadow-sm flex flex-col">
              <div className="p-3 w-full">
                <div className="relative h-52 ">
                  <Image
                    src={speedlearn}
                    alt="Speedlearn"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
              <div className="p-5 flex flex-col gap-2 flex-1">
                <h5 className="font-medium text-[20px] text-[#404297]">
                  Speedlearn
                </h5>
                <p className="text-[#606060] text-[15px]">
                  Online Learning & Digital Solutions
                </p>

                <hr className="border text-[#6466ab] my-2.5 opacity-10" />

                <button className="mt-auto bg-[#404297] text-white py-3 px-6 rounded-md text-[15px] w-full">
                  Learn More
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Products;
