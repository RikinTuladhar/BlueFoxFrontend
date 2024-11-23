import Link from "next/link";
import React from "react";

const ProductsCard = ({i,data}) => {
  return (
    <div key={i} className="w-[180px] h-[300px] border bg-white  px-2 bg-red rounded-xl">
      <Link key={i} href={`/product/${i}`}>
      <div className="h-[50%]">
        <img src="/fifthImageCard1.avif" className="w-full h-full" alt="Image of product" />
      </div>
      <div className="py-4">
        <h2 className="font-semibold">Onion (Kanda)</h2>
      </div>
      <div className="w-full pb-2 text-sm ">
        <select className="w-full py-1 border rounded-md" name="" id="">
          <option value="">1kg</option>
        </select>
      </div>
      <div className="flex justify-between">
        <div className="text-xs font-bold">
          <p>Rs 88</p>
          <p className="line-through">Rs 88</p>
        </div>
        <button className="px-4 py-1 font-semibold text-green-500 bg-white border border-green-400 rounded-lg">
          ADD
        </button>
      </div>
  
      </Link>
    </div>
  );
};

export default ProductsCard;
