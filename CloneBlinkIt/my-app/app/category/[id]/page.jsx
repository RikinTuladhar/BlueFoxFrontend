"use client";
import ProductsCard from "@/components/cards/ProductsCard";
import Navbar from "@/components/Navbar";
import Link from "next/link";
import React, { useEffect, useState } from "react";

const Page = ({ params }) => {
  const [id, setId] = useState("");
  useEffect(() => {
    async function getId() {
      const id = await params.id;
      setId(id);
    }
  }, []);
  const subHeadings = [
    {
      id: 1,
      title: "Vegetables & Fruits",
    },
    {
      id: 2,
      title: "Dairy & Breakfast",
    },
    {
      id: 3,
      title: "Munchies",
    },
    {
      id: 4,
      title: "Cold Drinks & Juices",
    },
    {
      id: 5,
      title: "Instant & Frozen Food",
    },
    {
      id: 6,
      title: "Tea, Coffee & Health Drinks",
    },
    {
      id: 7,
      title: "Bakery & Biscuits",
    },
    {
      id: 8,
      title: "More",
    },
  ];

  const [showMoreItems, setShowMoreItems] = useState(false);

  return (
    <>
      <Navbar />
      <div className="w-full h-[5.5rem] bg-black "></div>
      <div className="w-full relative flex items-center justify-around h-[3rem] text-black px-16 bg-[#ffffff] border">
        {subHeadings &&
          subHeadings.map((item, i) => (
            <div
              className="px-2 py-3 cursor-pointer hover:bg-slate-300 "
              key={i}
            >
              {" "}
              {/* Added a unique key to each mapped item */}
              {item.title !== "More" ? (
                <h3 className="text-gray-500 ">{item.title}</h3>
              ) : (
                <div className="relative w-full ">
                  <h3
                    className="cursor-pointer hover:bg-slate-400"
                    onClick={(e) => setShowMoreItems(!showMoreItems)}
                  >
                    {item.title}
                  </h3>
                  {showMoreItems && (
                    <div className="absolute right-[5%] top-9 flex flex-col bg-[#ffffff] h-[25rem] w-[10rem] overflow-y-auto">
                      {subHeadings.map((item, i) => (
                        <div key={i} className="px-3 py-2 border">
                          {item.title}
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              )}
            </div>
          ))}
      </div>
      <div className="flex w-full px-10 bg-[#f4f6fb]">
        <ShowCategories />
        <ShowProducts />
      </div>
    </>
  );
};

export default Page;

const ShowCategories = () => (
  <div className="w-[20%] py-2 overflow-y-auto min-h-[100vh] ">
    {[
      "Fresh Vegetables",
      "Fresh Fruits",
      "Mangoes & Melons",
      "Seasonal",
      "Exotics",
      "Freshly Cut & Sprouts",
      "Fresh Vegetables",
      "Fresh Fruits",
      "Mangoes & Melons",
      "Seasonal",
      "Exotics",
      "Freshly Cut & Sprouts",
    ].map((_, i) => (
      <div
        key={i}
        className="flex items-center  w-full hover:bg-green-100 h-[5rem] text-sm border  bg-white"
      >
        <div>
          <img src={null} alt="iamge of item" />
        </div>
        <span className="font-semibold"> {_}</span>
      </div>
    ))}
  </div>
);

const ShowProducts = () => (
  <div className="w-[80%] py-2 min-h-[100vh] ">
    <div className="w-full justify-between items-center py-5 px-2 h-[2rem] border flex ">
      <h1 className="font-bold text-[#333333]">Buy Fresh Vegetables Online</h1>
      <div className="flex items-center pr-10 gap-x-5">
        <p className="text-sm text-[#8d8d8d]">Sort By</p>
        <select className="px-10 py-1 text-left">
          <option value="">Relevance</option>
        </select>
      </div>
    </div>
    <div className="min-h-[100vh] grid bg-[#F4F6FB] grid-cols-5 gap-10 px-2 py-2 border">
      {Array.from({ length: 15 }).map((_, i) => (
        <ProductsCard i={i} data={_} />
      ))}
    </div>
  </div>
);
