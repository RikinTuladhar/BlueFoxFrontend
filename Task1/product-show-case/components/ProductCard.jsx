import React from "react";
import { Star } from "lucide-react";
import { Heart } from "lucide-react";
import Image from "next/image";

const ProductCard = ({ product }) => {
  return (
    <div className="w-[300px] relative h-[400px] ">
      <div className="absolute z-50 px-1 py-1 rounded-full right-2 top-2">
        <Heart color="green" size={20} />
      </div>
      <div className="w-full overflow-hidden h-[60%]">
        <img
          src={product?.images}
          alt="Product Image"
          className="inset-0 object-cover w-full rounded-2xl opacity-90 bg-black/50 "
          style={{ objectPosition: "bottom center" }}
        />
      </div>
      <div className="w-full h-[40%] py-2 backdrop-blur-md ">
        <div className="flex justify-between w-full px-2 py-1 min-h-20">
          <h2 className="text-2xl">Name: {product?.name}</h2>
          <h5 className="text-xl">
            Rs{product?.price ? product?.price : " Unknown"}
          </h5>
        </div>
        <div className="px-2 py-2">Category :{product?.category}</div>
        <div className="flex w-full gap-1 px-2 py-2">
          {" "}
          {product?.rating &&
            Array.from({ length: product?.rating }).map((_, i) => (
              <Star fill="true" size={15} color="green" key={i} />
            ))}
        </div>
        <div className="px-2">
          <button className="px-5 py-2 border hover:bg-black hover:text-white hover:scale-105 bottom-1 rounded-3xl">
            {" "}
            Add To Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
