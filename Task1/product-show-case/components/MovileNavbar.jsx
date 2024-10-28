"use client";
import React, { useState } from "react";
import { Menu } from "lucide-react";
import { X } from "lucide-react";
import { ShoppingCart } from "lucide-react";
import Link from "next/link";
import { House } from "lucide-react";
import { ShoppingBag } from "lucide-react";
import { Info } from "lucide-react";
import { User } from "lucide-react";
const MovileNavbar = () => {
  const [clicked, setClicked] = useState(false);
  return (
    <>
      <div className="w-full flex justify-between px-5  h-[5rem]">
        <div className="w-[100px] grid place-items-center ">
          <Link href={"/dashboard"}>
          <h1 className="flex font-mono text-2xl font-bold">
            <span>H-</span>
            <span className="text-[#003D29]">Phones</span>
          </h1>
          </Link>
        </div>
        <div className="grid place-items-center">
          {clicked ? (
            <X onClick={(e) => setClicked(!clicked)} />
          ) : (
            <Menu onClick={(e) => setClicked(!clicked)} />
          )}
        </div>
      </div>
      {clicked && (
        <div
          className={`w-full px-5 py-5 space-y-2 font-serif  text-xl text-center`}
        >
          <div className="hover:border-b-2 hover:border-green-800">
            <Link
              className="flex items-center gap-3"
              href={"/dashboard"}
            >
              {" "}
              <p>
                <House />
              </p>{" "}
              <p>Home</p>
            </Link>
          </div>
          <div className="hover:border-b-2 hover:border-green-800">
            <Link
              className="flex items-center gap-3"
              href={"/shop"}
            >
              {" "}
              <p>
                {" "}
                <ShoppingBag />
              </p>
              <p>Shop</p>
            </Link>
          </div>
          <div className="hover:border-b-2 hover:border-green-800">
            {" "}
            <Link
              href={"/about"}
              className="flex items-center gap-3"
            >
              <p>
                {" "}
                <Info />
              </p>
              <p> About</p>
            </Link>
          </div>
          <div className="hover:border-b-2 hover:border-green-800">
            <Link
              href={"/dashboard"}
              className="flex gap-2 text-center"
            >
              {" "}
              <p>
                {" "}
                <ShoppingCart />
              </p>{" "}
              <p>Cart</p>
            </Link>
          </div>
          <div className="hover:border-b-2 hover:border-green-800">
            <Link
              href={"/signout"}
              className="flex items-center gap-3"
            >
              <p>
                {" "}
                <User />{" "}
              </p>
              <p>Sign Out</p>
            </Link>
          </div>
        </div>
      )}
    </>
  );
};

export default MovileNavbar;
