import React from "react";
import { IoMdArrowDropdown } from "react-icons/io";
import { FaRegCircleUser } from "react-icons/fa6";
import { Search } from "lucide-react";
const MobileNavbar = () => {
  return (
    <div className="w-full   h-[5rem] ">
      <div className="flex w-full h-full">
        <div className="w-[80%] flex justify-center items-start flex-col  pl-3 h-full ">
          <div className="text-[18px] font-extrabold">
            Delivery in 13 minutes
          </div>
          <div className="w-full flex items-center ">
            <p className="text-[13px]">Kaki Kholi, Rajasthan 30101..</p>
            <IoMdArrowDropdown size={22} />
          </div>
        </div>
        <div className="w-[20%] grid place-items-center h-full ">
          <FaRegCircleUser size={28} />
        </div>
      </div>
      <div className=" relative  mx-3">
        <div className="absolute left-[2%] top-[28%]">
          <Search size={21} />
        </div>
        <input
          type="text"
          className="rounded-xl bg-[#f8f8f8] border text-[#828282] w-full  pl-12 py-3"
          placeholder="Search"
        />
      </div>
    </div>
  );
};

export default MobileNavbar;
