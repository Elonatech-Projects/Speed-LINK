import React from "react";
import {
  FaDesktop,
  FaSchool,
  FaWifi,
  FaFolderOpen,
  FaUserTie,
  FaSitemap,
} from "react-icons/fa";

const ProductHover = () => {
  const products = [
    {
      name: "E-LEARNING",
      desc: "Online Learning & Digital Solutions",
      icon: <FaDesktop />,
    },
    {
      name: "DIGISCHOOL",
      desc: "School Management Solutions",
      icon: <FaSchool />,
    },
    {
      name: "SPEEDKONNECT",
      desc: "Internet Services & Management",
      icon: <FaWifi />,
    },
    {
      name: "BLAZZINGSHARE",
      desc: "File Transfer / Survey Solutions",
      icon: <FaFolderOpen />,
    },
    {
      name: "SPEEDTALENTHQ",
      desc: "Recruitment Platform",
      icon: <FaUserTie />,
    },
    {
      name: "ERP SOFTWARE",
      desc: "Enterprise Resource Planning",
      icon: <FaSitemap />,
    },
  ];

  return (
    <div>
      <div
        className="
            absolute top-19  2xl:left-160 mt-2 w-200 bg-white shadow-xl rounded-lg p-5
            opacity-0 invisible translate-y-2
            group-hover:opacity-100 group-hover:visible group-hover:translate-y-0
            transition-all duration-200 z-50 2xl:block hidden
          "
      >
        <p className="text-[14px] font-bold text-[#404297] mb-4">
          OUR PRODUCTS
        </p>
        <div className="grid grid-cols-2 gap-5 ">
          {products.map((p) => (
            <div key={p.name} className="shadow-sm">
              <a
                href="#"
                className="flex items-center gap-3 p-3 rounded-lg border border-gray-100 hover:bg-gray-50"
              >
                <div className="group/item flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-indigo-100 flex items-center justify-center text-lg text-[#aeb8fe] group-hover/item:text-[#ee3539]">
                    {p.icon}
                  </div>
                  <div>
                    <p className="text-[14px] font-bold text-indigo-700 group-hover/item:text-[#ee3539]">
                      {p.name}
                    </p>
                    <p className="text-[15px] text-gray-500">{p.desc}</p>
                  </div>
                </div>
              </a>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProductHover;
