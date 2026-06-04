import Image from "next/image";
import NavBar from "./components/NavBar";
import HeroSection from "./components/HeroSection";
import Robust from "./components/Robust";
import Services from "./components/Services";
import Products from "./components/Products";
import Footer from "./components/Footer";
import Client from "./components/Client";
import Testimonials from "./components/Testimonials";

export default function Home() {
  return (
    <div>
      <NavBar />
      <div className="pt-20 ">
        <HeroSection />
        <Robust />
        <Services />
        <Products />
        <Testimonials />
        <Client />
        <Footer />
      </div>
    </div>
  );
}
