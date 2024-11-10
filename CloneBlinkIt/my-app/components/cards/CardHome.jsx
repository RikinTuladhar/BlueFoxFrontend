import React from "react";

const Card = ({ item }) => {
  return (
    <div className="w-[150px] md:w-[178px] rounded-lg pb-3 border ">
      <div className="w-full h-[50%] overflow-hidden bg-[#FEFFFE]">
        <img src={item?.img} className="object-contain w-full h-full" alt="" />
      </div>
      <div className="px-2 text-[12px] font-semibold">
        <h3 className="text-[13px] font-semibold py-5">{item.name}</h3>
        <h5>{item.gram} g</h5>
        <div className="flex justify-between w-full">
          <p className="font-bold">Rs {item.price}</p>
          <button className="px-5 py-1 border rounded-md text-primary border-primary">
            Add
          </button>
        </div>
      </div>
    </div>
  );
};

export default Card;
