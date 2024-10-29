import React from "react";
import { IoMdArrowDropdown } from "react-icons/io";
import { Search } from "lucide-react";
import { ShoppingCart } from "lucide-react";
const Navbar = () => {
  return (
    <div className="w-full items-center border-b h-24  gap-10  flex">
      <div className="flex h-full">
        <div className="w-[12rem] border-r flex justify-center h-[100%] items-center ">
          {" "}
          <img src="/logo.svg" alt="" />
        </div>
        <div className="relative flex justify-center items-center w-[20rem]  h-full">
          <div>
            <h3 className="text-[18px] font-extrabold ">
              Delivery in 13 minutes
            </h3>
            <h5 className="font-normal text-[13px]">
              Kali Kholi, Rajasthan 301019,In...
            </h5>
            <div className="absolute right-10 bottom-5">
              <IoMdArrowDropdown size={25} />
            </div>
          </div>
        </div>
      </div>
      <div className=" w-[28rem] relative">
        <div className="absolute left-[2%] top-[28%]">
          <Search size={21} />
        </div>
        <input
          type="text"
          className="rounded-xl bg-[#f8f8f8] border text-[#828282] w-full  pl-12 py-3"
          placeholder="Search"
        />
      </div>
      <div className="flex w-[20%] items-center justify-between px-5 h-full ">
        <div className="text-[18px] font-normal">Login</div>
        <div className="flex gap-2 bg-[#0c831f] px-3 py-4 text-[14px] text-white rounded-[8px]">
          <ShoppingCart />
          <div>My Cart</div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
