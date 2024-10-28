import Link from "next/link";
import React from "react";
import { ShoppingCart } from "lucide-react";

const Navbar = () => {
  return (
    <div className="w-full flex-wrap text-xl px-10 items-center justify-between py-5 flex h-[5rem] ">
      <div className=" w-[50px] h-[50px]">
        <Link className="cursor-pointer" href={"/dashboard"}>
          {" "}
          <h1 className="flex font-mono text-2xl font-bold">
            <span>H-</span>
            <span className="text-[#003D29]">Phones</span>
          </h1>
        </Link>
      </div>
      <div className="flex gap-10">
        <Link className="cursor-pointer" href={"/dashboard"}>
          <div>Home</div>
        </Link>
        <Link className="cursor-pointer" href={"/shop"}>
          {" "}
          <div>Shop</div>
        </Link>
        <Link className="cursor-pointer" href={"/dashboard"}>
          {" "}
          <div>About</div>
        </Link>
      </div>
      <div className="flex gap-10">
        <Link className="cursor-pointer" href={"/dashboard"}>
          <div>
            <ShoppingCart />
          </div>
        </Link>
        <Link className="cursor-pointer" href={"/dashboard"}>
          {" "}
          <div>Sign In</div>
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
