import Image from "next/image";
import NavBar from "./components/NavBar";
import HeroSection from "./components/HeroSection";
import Robust from "./components/Robust";
import Services from "./components/Services";

export default function Home() {
  return (
    <div className=" ">
      <NavBar />
      <HeroSection />
      <Robust />
      <Services/>
    </div>
  );
}``
