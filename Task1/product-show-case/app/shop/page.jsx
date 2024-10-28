"use client";
import MovileNavbar from "@/components/MovileNavbar";
import Navbar from "@/components/Navbar";
import ProductCard from "@/components/ProductCard";
import { AArrowDown } from "lucide-react";
import Link from "next/link";
import React, { useEffect, useState } from "react";

const page = () => {
  const [mobileView, setMobileView] = useState(false);
  const [productNotFoun, setProductNotFound] = useState(false);
  const [categories, setCategories] = useState([]);
  const [products, setProducts] = useState([]);
  const [filtering, setFiltering] = useState([]);
  console.log(products);
  useEffect(() => {
    const handleResize = () => {
      setMobileView(window.innerWidth < 500);
    };
    handleResize(); // Check on mount
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);
  useEffect(() => {
    async function fetchCategories() {
      const res = await fetch("/api/categories");
      const data = await res.json();
      setCategories(data);
    }

    async function fetchProducts() {
      const res = await fetch("/api/product");
      const data = await res.json();
      setProducts(data);
    }

    fetchCategories();
    fetchProducts();
  }, []);

  function handleCategoryFilter(categoryname) {
    const array = [];
    for (var i = 0; i < products.length; i++) {
      if (categoryname == products[i].category) {
        array.push(products[i]);
      }
    }
    if (array.length == 0) {
      setProductNotFound(true);
    }
    setFiltering(array);
  }
  return (
    <>
      {mobileView ? <MovileNavbar /> : <Navbar />}
      <section className="flex flex-wrap justify-between w-full min-h-screen px-10 ">
        <div className="w-full md:w-[30%] h-full md:min-h-[80vh] py-10 px-2 ">
          <h2 className="pb-5 text-3xl">Categories</h2>
          <div className="w-full h-full px-2 py-2 space-y-2 text-xl">
            <div
              onClick={(e) => {
                setProductNotFound(false);
                setFiltering([]);
              }}
              className="px-5 cursor-pointer py-3 border transition-all delay-75 ease-in hover:bg-[#f2f2f2f2] rounded-2xl"
            >
              Show All
            </div>
            {categories?.map((category, i) => (
              <div
                key={i}
                onClick={(e) => handleCategoryFilter(category.name)}
                className="px-5 cursor-pointer py-3 border transition-all delay-75 ease-in hover:bg-[#f2f2f2f2] rounded-2xl"
              >
                {category?.name}
              </div>
            ))}
          </div>
        </div>
        <div className="w-full md:w-[70%] px-5 py-5 min-h-[80vh] h-full ">
          <h2 className="text-3xl text-center ">Shop : Regular HeadPhones</h2>
          <div className="grid grid-cols-1 gap-10 px-5 py-5 mt-10 md:grid-cols-2 place-items-center ">
            {filtering.length > 0 ? (
              filtering?.map((product, i) => (
                <Link key={i} href={`product/${product?._id}`}>
                  <ProductCard product={product} />
                </Link>
              ))
            ) : productNotFoun == true ? (
              <div className="text-2xl text-red-600">Product not found</div>
            ) : (
              products?.map((product, i) => (
                <Link key={i} href={`product/${product?._id}`}>
                  <ProductCard product={product} />
                </Link>
              ))
            )}
          </div>
        </div>
      </section>
    </>
  );
};

export default page;
