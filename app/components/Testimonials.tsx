"use client";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
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

const slideVariants = {
  enter: { x: 100, opacity: 0 },
  center: { x: 0, opacity: 1, transition: { duration: 0.5, ease: "easeOut" } },
  exit: { x: -100, opacity: 0, transition: { duration: 0.4, ease: "easeIn" } },
};

const Testimonials = () => {
  const [current, setCurrent] = useState(0);

  const prev = () =>
    setCurrent((i) => (i === 0 ? testimonials.length - 1 : i - 1));
  const next = () =>
    setCurrent((i) => (i === testimonials.length - 1 ? 0 : i + 1));

  useEffect(() => {
    const timer = setInterval(next, 8000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="bg-[#404297]">
      <div className="container py-16 xl:py-20 px-5 xl:px-15 2xl:mx-71">
        <h5 className="font-semibold text-[32px] text-white text-center mb-25">
          Testimonials
        </h5>

        <div className="relative hidden md:flex items-center justify-center gap-4">
          <button
            onClick={prev}
            className="bg-[#ee3539] absolute  2xl:left-135 left-29 lg:left-75 bottom-20 z-10 hover:bg-[#c0392b] w-7 h-7 flex items-center justify-center shrink-0 transition-colors"
          >
            <MdOutlineArrowBackIos className="text-white text-[16px]" />
          </button>

          <div className="relative bg-white rounded-md py-7.5 pr-7.5 pl-17.5 max-w-173.5 w-full overflow-hidden">
            <AnimatePresence mode="wait">
              <motion.div
                key={current}
                variants={slideVariants}
                initial="enter"
                animate="center"
                exit="exit"
                className="flex gap-5 items-center"
              >
                <div className="absolute xl:left-75 2xl:-left-10  bottom-40 left-30 shrink-0 w-32 h-24 rounded overflow-hidden bg-red-200 z-999">
                  {/* <Image
                    src={profile}
                    alt="profile"
                    className="w-full h-full object-cover"
                  /> */}
                </div>
                <div className="space-y-2">
                  <h6 className="font-semibold text-[#404297] text-[18px]">
                    {testimonials[current].name}
                  </h6>
                  <p className="text-[16px] text-[#707070] leading-6">
                    {testimonials[current].text}
                  </p>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          <button
            onClick={next}
            className="bg-[#ee3539] absolute 2xl:right-135 lg:right-75 right-29 bottom-20 hover:bg-[#c0392b] w-7 h-7 flex items-center justify-center shrink-0 transition-colors"
          >
            <MdOutlineArrowForwardIos className="text-white text-[20px]" />
          </button>
        </div>

        {/* Mobile */}
        <div className="relative md:hidden flex flex-col gap-4 px-5">
          <div className="absolute right-5 top-[-15px] flex gap-2 z-10">
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

          <div className="bg-white rounded-xl px-6 pt-6 pb-6 w-full overflow-hidden">
            <AnimatePresence mode="wait">
              <motion.div
                key={current}
                variants={slideVariants}
                initial="enter"
                animate="center"
                exit="exit"
                className="space-y-4"
              >
                <div className="absolute top-[-60px] w-20 h-20 rounded overflow-hidden bg-gray-200">
                  <Image
                    src={profile}
                    alt="profile"
                    className="w-full h-full object-cover"
                  />
                </div>
                <h6 className="font-bold text-[#404297] text-[16px]">
                  {testimonials[current].name}
                </h6>
                <p className="text-[14px] text-gray-700 leading-6">
                  {testimonials[current].text}
                </p>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
