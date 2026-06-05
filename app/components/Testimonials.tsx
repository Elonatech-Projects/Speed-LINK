"use client";
import Image from "next/image";
import React, { useState } from "react";
import {
  MdOutlineArrowBackIos,
  MdOutlineArrowForwardIos,
} from "react-icons/md";
import profile from "../../public/images/Dummy-Profile.png.webp";

const testimonials = [
  {
    name: "Juniper Dakoru C.",
    text: "This is hands down one of the best ICT hubs in Port Harcourt! The space is well-designed, super functional, and perfect for getting work done. Whether you're a techie, entrepreneur, or just need a solid workspace, this place has everything—great facilities, a cool vibe, and an environment that keeps you productive. Highly recommend it to anyone looking for an innovation hub that actually delivers here in the city of Port Harcourt. Definitely a game-changer for the tech scene in Port Harcourt and Rivers State entirely!",
  },

  {
    name: " Ekomobong Cletus ",
    text: "Speedlink Hi-Tech Solutions is a leading provider of networking, cybersecurity, and IT solutions. Their expertise in fiber optics, cloud networking, and advanced IT infrastructure is top-notch. The team is professional, knowledgeable, and committed to delivering high-quality services. In addition to their excellent IT services, they offer well-equipped co-working spaces with a productive and collaborative environment—perfect for freelancers, startups, and tech professionals. Their training programs are also hands-on and industry-relevant, making them a great choice for anyone looking to gain practical IT and networking skills. Highly recommended for businesses, individuals, and tech enthusiasts!",
  },
];

const Testimonials = () => {
  const [current, setCurrent] = useState(0);

  const prev = () =>
    setCurrent((i) => (i === 0 ? testimonials.length - 1 : i - 1));
  const next = () =>
    setCurrent((i) => (i === testimonials.length - 1 ? 0 : i + 1));

  return (
    <div className="bg-[#404297]">
      <div className="container py-16 xl:py-20 px-5 xl:px-15 2xl:mx-71">
        <h5 className="font-semibold text-[32px] text-white text-center mb-10">
          Testimonials
        </h5>

        <div className="hidden md:flex items-center justify-center gap-4">
          <button
            onClick={prev}
            className="bg-[#ee3539] hover:bg-[#c0392b] w-10 h-10 rounded flex items-center justify-center shrink-0 transition-colors"
          >
            <MdOutlineArrowBackIos className="text-white text-[16px]" />
          </button>

          <div className="relative bg-white rounded-xl p-6 md:py-7.5 md:pr-7.5 md:pl-17.5 max-w-173.5 w-full flex gap-5 items-start">
            <div className="space-y-2">
              <h6 className="font-bold text-[#404297] text-[18px]">
                {testimonials[current].name}
              </h6>
              <p className="text-[14px] md:text-[16px] text-[#707070] leading-6">
                {testimonials[current].text}
              </p>
            </div>
          </div>
          <div className="absolute left-0  shrink-0 w-32.5 h-25 rounded flex items-center justify-center overflow-hidden">
            <Image src={profile} alt="" />
          </div>
          <button
            onClick={next}
            className="bg-[#ee3539] hover:bg-[#c0392b] w-10 h-10 rounded flex items-center justify-center shrink-0 transition-colors"
          >
            <MdOutlineArrowForwardIos className="text-white text-[16px]" />
          </button>
        </div>

        <div className="md:hidden flex flex-col gap-4">
          <div className="flex items-center justify-between px-2">
            <div className="w-20 h-20 rounded bg-gray-200 flex items-center justify-center overflow-hidden"></div>

            <div className="flex gap-2">
              <button
                onClick={prev}
                className="bg-[#ee3539] hover:bg-[#c0392b] w-10 h-10 rounded flex items-center justify-center transition-colors"
              >
                <MdOutlineArrowBackIos className="text-white text-[16px]" />
              </button>
              <button
                onClick={next}
                className="bg-[#ee3539] hover:bg-[#c0392b] w-10 h-10 rounded flex items-center justify-center transition-colors"
              >
                <MdOutlineArrowForwardIos className="text-white text-[16px]" />
              </button>
            </div>
          </div>

          <div className="bg-white rounded-xl p-6 w-full space-y-2">
            <h6 className="font-bold text-[#404297] text-[16px]">
              {testimonials[current].name}
            </h6>
            <p className="text-[14px] text-gray-700 leading-6">
              {testimonials[current].text}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
