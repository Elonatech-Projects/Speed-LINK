import React from "react";
import {
  FaDesktop,
  FaSitemap,
  FaRobot,
  FaShieldAlt,
  FaBuilding,
  FaChalkboardTeacher,
  FaLaptop,
  FaHardHat,
  FaTv,
  FaGraduationCap,
  FaBullhorn,
  FaUserTie,
} from "react-icons/fa";

const ServiceHover = () => {
  return (
    <div className="absolute top-19 left-160 mt-2 w-200 bg-white shadow-xl rounded-lg p-6 opacity-0 invisible translate-y-2 group-hover:opacity-100 group-hover:visible group-hover:translate-y-0 transition-all duration-200 z-50 2xl:block hidden">
      <p className="text-[14px] font-bold text-[#404297] ">OUR SERVICES</p>
      <hr className="mb-2 text-gray-100" />

      <div className="grid grid-cols-2 gap-4">
        <div className="border border-gray-100 rounded-lg p-5 shadow-sm">
          <p className="text-[14px] font-bold text-[#404297] mb-3">
            IT SERVICES
          </p>
          <hr className="mb-3 text-gray-100" />
          <div className="flex flex-col gap-1">
            {[
              {
                icon: <FaDesktop />,
                label: "Software Development & Deployment",
              },
              { icon: <FaSitemap />, label: "Networking/Internet Services" },
              { icon: <FaRobot />, label: "Smart Surveillance" },
              { icon: <FaShieldAlt />, label: "Cybersecurity" },
            ].map((item) => (
              <a
                href="#"
                key={item.label}
                className="group/link flex items-center gap-3 text-[15px] text-[#707070]  hover:text-[#ee3539]"
              >
                <span className="text-indigo-400 group-hover/link:text-[#ee3539]">{item.icon}</span>
                {item.label}
              </a>
            ))}
          </div>
        </div>

        <div className="border border-gray-100 rounded-lg p-4">
          <p className="text-[14px] font-bold text-indigo-700 mb-3">
            TRAINING & CERTIFICATION
          </p>
          <hr className="mb-3 text-gray-100" />
          <div className="flex flex-col gap-1 group ">
            {[
              { icon: <FaBuilding />, label: "Corporate Training" },
              { icon: <FaChalkboardTeacher />, label: "Tutor-led Training" },
              { icon: <FaLaptop />, label: "Self-paced Training" },
              { icon: <FaHardHat />, label: "SIWES Placement" },
            ].map((item) => (
              <a
                href="#"
                key={item.label}
                className="group/link flex items-center gap-3 text-[14px] text-gray-600  hover:text-[#ee3539] "
              >
                <span className="text-indigo-400 group-hover/link:text-[#ee3539]">{item.icon}</span>
                {item.label}
              </a>
            ))}
          </div>
        </div>

        <a
          href="#"
          className="flex items-center gap-3 px-2 py-0 rounded-lg border border-gray-100 group/item"
        >
          <div className="w-14 h-14 rounded-full bg-indigo-100 flex items-center justify-center my-2  text-2xl text-[#aeb8fe] group-hover/item:text-[#ee3539]">
            <FaTv />
          </div>
          <div>
            <p className="text-[14px] font-bold text-indigo-700 group-hover/item:text-[#ee3539]">
              SPACE RENTAL
            </p>
            <p className="text-[15px] text-gray-500">Booking System Portal</p>
          </div>
        </a>

        <a
          href="#"
          className="flex items-center gap-3 px-2 rounded-lg border border-gray-100 group/item"
        >
          <div className="w-14 h-14 rounded-full bg-indigo-100 flex items-center justify-center my-2  text-2xl text-[#aeb8fe] group-hover/item:text-[#ee3539]">
            <FaGraduationCap />
          </div>
          <div>
            <p className="text-[14px] font-bold text-indigo-700 group-hover/item:text-[#ee3539]">
              TEST CENTRE SOLUTIONS
            </p>
            <p className="text-[15px] text-gray-500">
              Accredited Pearson Vue Test Centre
            </p>
          </div>
        </a>

        <a
          href="#"
          className="flex items-center gap-3 px-2 rounded-lg border border-gray-100 group/item"
        >
          <div className="w-14 h-14 rounded-full bg-indigo-100 flex items-center justify-center my-2  text-2xl text-[#aeb8fe] group-hover/item:text-[#ee3539]">
            <FaBullhorn />
          </div>
          <div>
            <p className="text-[14px] font-bold text-indigo-700 group-hover/item:text-[#ee3539]">
              DIGITAL MARKETING
            </p>
            <p className="text-[15px] text-gray-500">
              End-to-end marketing solutions
            </p>
          </div>
        </a>

        <a
          href="#"
          className="flex items-center gap-2 px-2 rounded-lg border border-gray-100 group/item"
        >
          <div className="w-14 h-14 rounded-full bg-indigo-100 flex items-center justify-center my-2  text-2xl text-[#aeb8fe] group-hover/item:text-[#ee3539]">
            <FaUserTie />
          </div>
          <div>
            <p className="text-[14px] font-bold text-indigo-700 group-hover/item:text-[#ee3539]">
              CONSULTANCY / PROCUREMENT
            </p>
            <p className="text-[15px] text-gray-500">
              Tech Consultancy & Procurement
            </p>
          </div>
        </a>
      </div>
    </div>
  );
};

export default ServiceHover;
