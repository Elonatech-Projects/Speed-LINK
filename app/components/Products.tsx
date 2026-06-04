import Image from "next/image";
import React from "react";
import speed from "../../public/images/Sales-Review-Meeting.png";
import blazing from "../../public/images/BlazzingShare.png";
import software from "../../public/images/ERP-Software-Presentation.png";
import speedkonect from "../../public/images/Internet-Services.png";
import digi from "../../public/images/Digital-Marketing-Thumbnail-1.png";
import speedlearn from "../../public/images/SpeedLearn.png";

const Products = () => {
  const products = [
    {
      id: 1,
      name: "SpeedTalentHQ",
      description: "Online Recruitment Platform",
      image: speed,
    },
    {
      id: 2,
      name: "SpeedTalentHQ",
      description: "Online Recruitment Platform",
      image: blazing,
    },
    {
      id: 3,
      name: "SpeedTalentHQ",
      description: "Online Recruitment Platform",
      image: software,
    },
    {
      id: 4,
      name: "SpeedTalentHQ",
      description: "Online Recruitment Platform",
      image: speedkonect,
    },
    {
      id: 5,
      name: "SpeedTalentHQ",
      description: "Online Recruitment Platform",
      image: digi,
    },
    {
      id: 6,
      name: "SpeedTalentHQ",
      description: "Online Recruitment Platform",
      image: speedlearn,
    },
  ];
  return (
    <div className="bg-[#e6e8ef]">
      <div className="py-25 xl:mx-85 px-5 ">
        <h4 className="font-semibold text-[32px] text-[#404297]">
          Our Products
        </h4>
        <hr className="border text-[#aeb8fe]  " />

        <div className="grid grid-col-1 md:grid-cols-3 gap-8">
          {products.map((product) => (
            <div key={product.id} className="p-3.75 bg-white">
              <Image src={product.image} alt={`Product ${product.id}`} />
              <h5 className="font-medium text-[20px] text-[#404297]">
                {product.name}
              </h5>
              <p className="text-[#606060]">{product.description}</p>
              <button>Learn More</button>
            </div>
          ))}


        </div>
      </div>
    </div>
  );
};

export default Products;
