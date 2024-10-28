"use client";
import MovileNavbar from "@/components/MovileNavbar";
import Navbar from "@/components/Navbar";
import ProductCard from "@/components/ProductCard";
import Link from "next/link";
import React, { useEffect, useState } from "react";

const page = () => {
  const [mobileView, setMobileView] = useState(false);
  const [products, setProducts] = useState([]);
  console.log(products)
  useEffect(() => {
    if (window.innerWidth < 500) {
      setMobileView(true);
    } else {
      setMobileView(false);
    }
  }, [window.innerWidth]);
  useEffect(() => {
    async function fetchAllProducts(params) {
      const products = await fetch("/api/product");
      const data = await products.json();
      setProducts(data);
    }
    fetchAllProducts();
  }, []);
  return (
    <>
      {mobileView ? <MovileNavbar /> : <Navbar />}
      <div className="w-full min-h-screen font-sans md:px-10">
        {/* first section  */}
        <section className="w-full  flex-wrap flex justify-around relative  bg-[#FBF0E4] md:h-[20rem]">
          <div className="w-full py-10 md:py-0 md:w-[50%] space-y-5  h-full flex-wrap flex flex-col justify-center items-center ">
            <h2 className="text-2xl md:text-5xl font-semibold text-[#003D29]">
              Grab Upto 50% Off On <br /> Selected Headphone
            </h2>
            <div className="flex justify-between w-full px-14">
              <button className="bg-[#003D29] px-5 py-2 rounded-3xl text-white">
                Buy Now
              </button>
              <div></div>
              <div></div>
            </div>
          </div>
          <div className="hidden h-full md:block w-full md:w-[50%] ">
            <img
              src="/girlwithheadphone.webp"
              className="w-full h-full"
              alt="photo"
            />
          </div>
        </section>

        {/* second section  */}
        <section className="w-full min-h-screen py-10">
          <div className="w-full ">
            <h1 className="pl-5 text-2xl font-semibold md:pl-0 md:text-3xl">
              Headphones For You!
            </h1>
            <div className="grid w-full grid-cols-1 gap-10 px-10 py-10 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 place-items-center">
              {products.map((product, i) => (
                <Link href={`product/${product?._id}`} key={i}>
                  <ProductCard product={product} />
                </Link>
              ))}
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default page;
