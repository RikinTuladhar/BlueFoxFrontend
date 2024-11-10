"use client";
import React, { useState } from "react";
import { Minus } from "lucide-react";
import { Plus } from 'lucide-react';
const MobileFooter = () => {
  const [click, setclick] = useState(false);
  return (
    <div className="w-full ">
      <div className="flex justify-between w-full px-2 py-5">
        <h2 className="text-[16px] text-[#666] font-semibold">
          Inia's last minute app -blinkit
        </h2>
        <div onClick={(e) => setclick(!click)}>
          {" "}
          {click ? <Minus size={20}/> :  <Plus size={20} />}
        </div>
      </div>
      {click && (
        <div className="w-full px-5 mt-6 space-y-10">
          <div>
            <h3 className="text-[18px] font-semibold my-3 mb-5">
              Useful Links
            </h3>
            <div className="flex text-[14px]  px-8 text-[#666] justify-between w-full">
              <div>
                <ul className="space-y-2">
                  <li>About</li>
                  <li>Careers</li>
                  <li>Blog</li>
                  <li>Press</li>
                  <li>Lead</li>
                  <li>Value</li>
                  <li>Recipes</li>
                </ul>
              </div>
              <div>
                <ul className="space-y-2">
                  <li>Privacy</li>
                  <li>Terms</li>
                  <li>FAQs</li>
                  <li>Security</li>
                  <li>Mobile</li>
                  <li>Contact</li>
                </ul>
              </div>
              <div>
                <ul className="space-y-2">
                  <li>Partner</li>
                  <li>Franchise</li>
                  <li>Seller</li>
                  <li>Warehose</li>
                  <li>Deliver</li>
                  <li>Resources</li>
                </ul>
              </div>
            </div>
          </div>
          <div className="pb-10">
            <h3 className="text-[18px] font-semibold my-3 mb-5">Categorie</h3>
            <div className="flex justify-between w-full text-sm md:text-base">
              <div>
                <ul className="space-y-2 ">
                  <li>Vegetables & Fruits</li>
                  <li>Munchies</li>
                  <li>Instant & Frozen Food</li>
                  <li>Bakery & Biscuits</li>
                  <li>Atta, Rice & Dal</li>
                  <li>Sauces & Spreads</li>
                  <li>Paan Corner</li>
                  <li>Baby Care</li>
                  <li>Clearning Essentials</li>
                  <li>Ice Creams & Frozen Desserts</li>
                  <li>Pet Care</li>
                  <li>Books</li>
                  <li>Magazines</li>
                  <li>Navratri Specials</li>
                </ul>
              </div>
              <div>
                <ul className="space-y-2">
                  <li>Vegetables & Fruits</li>
                  <li>Munchies</li>
                  <li>Instant & Frozen Food</li>
                  <li>Bakery & Biscuits</li>
                  <li>Atta, Rice & Dal</li>
                  <li>Sauces & Spreads</li>
                  <li>Paan Corner</li>
                  <li>Baby Care</li>
                  <li>Clearning Essentials</li>
                  <li>Ice Creams & Frozen Desserts</li>
                  <li>Pet Care</li>
                  <li>Books</li>
                  <li>Magazines</li>
                  <li>Navratri Specials</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default MobileFooter;
