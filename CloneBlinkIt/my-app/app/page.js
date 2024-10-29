"use client";
import MobileNavbar from "@/components/MobileNavbar";
import Navbar from "@/components/Navbar";
import Image from "next/image";
import { useEffect, useState } from "react";

export default function Home() {
  const [movieView, setMobileView] = useState(true);
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 500) {
        setMobileView(true);
      } else {
        setMobileView(false);
      }
    };

    // Set initial value
    handleResize();
    window.addEventListener("resize", handleResize);

    // Cleanup on unmount
    return () => window.removeEventListener("resize", handleResize);
  }, []);
  console.log(movieView, "Inner width", window.innerWidth);
  return (
    <>
      {movieView ? <MobileNavbar /> : <Navbar />}

      {/* section one  */}
      <section className="hidden md:block w-full min-h-screen px-5">
        <div className="w-full h-[14rem] ">
          <img src="/homeimg1.webp" className="w-full h-full" alt="image" />
        </div>
        <div className="w-full py-4 gap-5 px-5 flex ">
          <div className="w-[22rem] h-[12rem] bg-red-400">
            <img
              src="/homeimgSmall1.avif"
              className="w-full h-full"
              alt="Image of small card"
            />
          </div>
          <div className="w-[22rem] h-[12rem] bg-red-400">
            <img
              src="/homeimgSmall2.avif"
              className="w-full h-full"
              alt="Image of small card"
            />
          </div>
          <div className="w-[22rem] h-[12rem] bg-red-400">
            <img
              src="/homeimgSmall3.avif"
              className="w-full h-full"
              alt="Image of small card"
            />
          </div>
        </div>
      </section>
    </>
  );
}
