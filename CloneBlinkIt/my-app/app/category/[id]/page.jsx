"use client";
import Navbar from "@/components/Navbar";
import React, { useEffect, useState } from "react";

const Page = ({ params }) => {
  const [id, setId] = useState("");
  useEffect(
    () =>
      async function getId() {
        const id = await params.id;
        setId(id);
      },
    []
  );
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
            <div className="px-2 py-3 cursor-pointer hover:bg-slate-300 " key={i}>
              {" "}
              {/* Added a unique key to each mapped item */}
              {item.title !== "More" ? (
                <h3 className="text-gray-500 " >{item.title}</h3>
              ) : (
                <div className="relative w-full ">
                  <h3 className="cursor-pointer hover:bg-slate-400" onClick={(e) => setShowMoreItems(!showMoreItems)}>
                    {item.title}
                  </h3>
                  {showMoreItems && (
                    <div className="absolute right-[5%] top-9 flex flex-col bg-[#ffffff] h-[25rem] w-[10rem] overflow-y-auto">
                    {
                      subHeadings.map((item, i)=>(
                        <div key={i} className="px-3 py-2 border">
                          {item.title}
                        </div>
                      ))
                    }
                    </div>
                  )}
                </div>
              )}
            </div>
          ))}
      </div>
      <div className="flex w-full bg-yellow-200">
      <ShowCategories/>
      <ShowProducts/>
      </div>
    </>
  );
};

export default Page;


const ShowCategories = ()=>(
  <div className="w-[20%] bg-green-300">
    Helo
  </div>
)

const ShowProducts = ()=>(
  <div className="w-[80%] bg-red-300">
    Hello
  </div>

)