"use client";
import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";
import speed from "../../public/images/Sales-Review-Meeting.png";
import blazing from "../../public/images/BlazzingShare.png";
import software from "../../public/images/ERP-Software-Presentation.png";
import speedkonect from "../../public/images/Internet-Services.png";
import digi from "../../public/images/Digital-Marketing-Thumbnail-1.png";
import speedlearn from "../../public/images/SpeedLearn.png";

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" as const } },
};

const staggerGrid = {
  hidden: {},
};

const products = [
  { src: speed, alt: "SpeedTalentHQ", title: "SpeedTalentHQ", desc: "Online Recruitment Platform" },
  { src: blazing, alt: "Blazzing Share", title: "Blazzing Share", desc: "Large File Transfer & Online Survey Solution" },
  { src: software, alt: "ERP Software", title: "ERP Software", desc: "Enterprise Resource Planning (ERP) Software" },
  { src: speedkonect, alt: "SpeedKonnect", title: "SpeedKonnect", desc: "Network and Internet Management Software" },
  { src: digi, alt: "Digischool", title: "Digischool", desc: "All-in-One School Management Platform" },
  { src: speedlearn, alt: "Speedlearn", title: "Speedlearn", desc: "E-learning Platform & Digital Learning Solutions" },
];

const Products = () => {
  return (
    <div className="bg-[#e6e8ef]">
      <div className="py-25 2xl:mx-71 xl:px-15 px-5">
        <div className="container">
          <h4 className="font-semibold text-[32px] text-[#404297]">Our Products</h4>
          <hr className="border text-[#aeb8fe] mb-6 opacity-50" />

          <motion.div
            variants={staggerGrid}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
            className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8"
          >
            {products.map((product) => (
              <motion.div
                key={product.title}
                variants={fadeUp}
                className="bg-white rounded-lg overflow-hidden shadow-sm flex flex-col"
              >
                <div className="p-3.75 w-full">
                  <div className="relative h-52 w-full">
                    <Image src={product.src} alt={product.alt} fill className="object-cover" />
                  </div>
                </div>
                <div className="p-3.75 flex flex-col gap-1 flex-1">
                  <h5 className="font-medium text-[20px] text-[#404297]">{product.title}</h5>
                  <p className="text-[#606060] text-[15px]">{product.desc}</p>
                  <hr className="border text-[#6466ab] my-2.5 opacity-10" />
                  <button className="bg-[#404297] text-white py-3 px-6 rounded-md text-[14px] w-full">
                    Learn More
                  </button>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Products;