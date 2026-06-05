import Image from "next/image";
import React from "react";
import client1 from "../../public/images/CGRP-Uniport.png";
import client2 from "../../public/images/Laser-Engineering.png";
import client3 from "../../public/images/School-of-Basic.png";
import client4 from "../../public/images/Redeemers-High-School.png";
import client5 from "../../public/images/Primerose-High-School.png";
import client6 from "../../public/images/Laser-Engineering.png";
import client7 from "../../public/images/Foundation-for-Agric-and-social-Transformation.png";

const Client = () => {
  const clients = [
    client1,
    client2,
    client3,
    client4,
    client5,
    client6,
    client7,
  ];

  return (
    <div className="bg-[#e6e8ef]">
      <div className=" py-25 2xl:mx-71 xl:px-15 px-5  ">
        <div className="container">
          <h4 className="font-semibold text-[32px] text-[#404297]">
            Our Clients
          </h4>

          <hr className="border text-[#aeb8fe] mb-5 mt-3 " />

          <div className="overflow-hidden">
            <div className="flex  gap-5 items-center animate-marquee">
              {[...clients, ...clients].map((client, index) => (
                <div
                  key={index}
                  className=" bg-white rounded-lg p-4 flex items-center justify-center"
                >
                  <Image
                    src={client}
                    alt={`Client ${index + 1}`}
                    className="w-55"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Client;
