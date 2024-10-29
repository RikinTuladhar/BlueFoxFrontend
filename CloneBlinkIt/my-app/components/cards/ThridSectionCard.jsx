import React from "react";

const ThridSectionCard = ({ item }) => {
  return (
    <div className="w-[178px] rounded-lg h-[272px] border ">
      <div className="w-full h-[50%] overflow-hidden bg-[#FEFFFE]">
        <img src={item?.img} className="w-full object-contain h-full" alt="" />
      </div>
      <div className="px-2 text-[12px] font-semibold">
        <h3 className="text-[13px] font-semibold py-5">{item.name}</h3>
        <h5>{item.gram} g</h5>
        <div className="w-full flex justify-between">
          <p className="font-bold">Rs {item.price}</p>
          <button className="text-primary  border border-primary px-5 py-1 rounded-md">
            Add
          </button>
        </div>
      </div>
    </div>
  );
};

export default ThridSectionCard;
