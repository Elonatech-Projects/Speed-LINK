import Image from "next/image";
import React from "react";
import digital from "../../public/images/Digital-Marketing-Thumbnail-1.png";
import space from "../../public/images/Cowork-Space.png";
import test from "../../public/images/Test-Centre.png";
import consult from "../../public/images/Tech-Consulting.png";

const Services = () => {
  return (
    <div className="bg-white">
      <div className="py-25 xl:mx-85 ">
        <h4>Our Services</h4>

        <hr />
        <div className="gap-8">
          <div>
            <div className="flex justify-between ">
              <div className="h-106">
                <Image src={digital} alt="Service 1" />
              </div>
              <div className="space-y-8">
                <div className="w-[384px] ">
                  <Image src={digital} alt="Service 1" />
                </div>

                <div className="w-[384px] ">
                  <Image src={space} alt="Service 1" />
                </div>
              </div>
            </div>
          </div>
          <div className="grid grid-cols-3 gap-8">
            <div className=" ">
              <Image src={test} alt="Service 2" />
            </div>
            <div className="">
              <Image src={consult} alt="Service 3" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
