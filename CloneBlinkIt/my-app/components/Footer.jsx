import React from "react";

const Footer = () => {
  return (
    <footer
      className="w-full grid gap-x-10 h-[20rem] "
      style={{
        gridTemplateColumns: "auto auto auto",
        gridTemplateRows: "auto auto",
      }}
    >
      <div
        className="px-2 py-10 space-y-5 "
        style={{ gridColumn: "1/2", gridRow: "1/5" }}
      >
        <h2 className="text-[18px] font-semibold">Useful Links</h2>
        <div className="flex justify-between w-full px-2">
          <div>
            <ul className="text-[14px]  text-[#666]">
              <li>About</li>
              <li>Careers</li>
              <li>Blog</li>
              <li>Press</li>
              <li>Lead</li>
              <li>Value</li>
            </ul>
          </div>
          <div>
            <ul className="text-[14px] text-[#666]">
              <li>Privacy</li>
              <li>Terms</li>
              <li>FAQs</li>
              <li>Security</li>
              <li>Mobile</li>
              <li>Contact</li>
            </ul>
          </div>
          <div>
            <ul className="text-[14px] text-[#666]">
              <li>Partner</li>
              <li>Franchise</li>
              <li>Seller</li>
              <li>Warehouse</li>
              <li>Deliver</li>
              <li>Resources</li>
            </ul>
          </div>
        </div>
      </div>
      <div
        className="flex gap-5 pt-10 "
        style={{ gridColumn: "2/5", gridRow: "1/1" }}
      >
        <h2 className="text-[18px] font-semibold">Categories</h2>
        <p className="text-[#0C831F]">see all</p>
      </div>
      <div
        className="flex justify-between "
        style={{ gridColumn: "2/5", gridRow: "2/5" }}
      >
        <div>
          <ul className="text-[14px]  text-[#666]">
            <li>Vegetables & Fruits</li>
            <li>Cold Drinks & Juices</li>
            <li>Bakery & Biscuits</li>
            <li>Dry Fruits, Masala & Oil</li>
            <li>Paan Corner</li>
            <li>Pharma & Wellness</li>
            <li>Ice Creams & Frozen Desserts</li>
            <li>Beauty & Cosmetics</li>
            <li>Magazines</li>
          </ul>
        </div>
        <div>
          <ul className="text-[14px]  text-[#666]">
            <li>Dairy & Breakfast</li>
            <li>Instant & Frozen Food</li>
            <li>Sweet Tooth</li>
            <li>Sauces & Spreads</li>
            <li>Organic & Premium</li>
            <li>Cleaning Essentials</li>
            <li>Personal Care</li>
            <li>Books</li>
            <li>Print Store</li>
          </ul>
        </div>
        <div>
          <ul className="text-[14px]  text-[#666]">
            <li>Munchies</li>
            <li>Tea, Coffee & Health Drinks</li>
            <li>Atta, Rice & Dal</li>
            <li>Chicken, Meat & Fish</li>
            <li>Baby Care</li>
            <li>Home & Office</li>
            <li>Pet Care</li>
            <li>Toys & Games</li>
            <li>Navratri Specials</li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
