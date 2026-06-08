"use client";
import Image from "next/image";
import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import client1 from "../../public/images/CGRP-Uniport.png";
import client2 from "../../public/images/Laser-Engineering.png";
import client3 from "../../public/images/School-of-Basic.png";
import client4 from "../../public/images/Redeemers-High-School.png";
import client5 from "../../public/images/Primerose-High-School.png";
import client6 from "../../public/images/Laser-Engineering.png";
import client7 from "../../public/images/Foundation-for-Agric-and-social-Transformation.png";

const clients = [client1, client2, client3, client4, client5, client6, client7];

const slideVariants = {
  enter: { x: 100},
  center: { x: 0,  transition: { duration: 0.5, ease: "easeOut" } },
  exit: { x: -300,  transition: { duration: 0.4, ease: "easeIn" } },
};

const Client = () => {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((i) => (i + 1) % clients.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="bg-[#e6e8ef]">
      <div className="py-25 2xl:mx-71 xl:px-15 px-5">
        <div className="container">
          <h4 className="font-semibold text-[32px] text-[#404297]">Our Clients</h4>
          <hr className="border text-[#aeb8fe] mb-5 mt-3" />

          <div className="overflow-hidden">
            <AnimatePresence mode="wait">
              <motion.div
                key={current}
                variants={slideVariants}
                initial="enter"
                animate="center"
                exit="exit"
                className="flex gap-5 items-center justify-center"
              >
                {[0, 1, 2, 3, 4].map((offset) => {
                  const index = (current + offset) % clients.length;
                  return (
                    <div
                      key={offset}
                      className="bg-white rounded-lg p-4 flex items-center justify-center"
                    >
                      <Image
                        src={clients[index]}
                        alt={`Client ${index + 1}`}
                        className="w-55"
                      />
                    </div>
                  );
                })}
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Client;