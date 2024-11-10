
import React from "react";

const Footer = () => {
  return (
  <div className="w-full space-y-10">
    <footer
      className="w-full grid gap-x-14 h-[20rem] "
      style={{
        gridTemplateColumns: "auto auto auto",
        gridTemplateRows: "auto auto",
      }}
    >
      <div
        className="px-2 py-10 space-y-5 "
        style={{ gridColumn: "1/2", gridRow: "1/6" }}
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
        className="flex gap-5 pt-10 pb-5 "
        style={{ gridColumn: "2/5", gridRow: "1/1" }}
      >
        <h2 className="text-[18px] font-semibold">Categories</h2>
        <p className="text-[#0C831F]">see all</p>
      </div>
      <div
        className="flex justify-between px-1 pb-10"
        style={{ gridColumn: "2/5", gridRow: "2/6" }}
      >
        <div>
          <ul className="text-[14px] space-y-2  text-[#666]">
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
          <ul className="text-[14px]  space-y-2  text-[#666]">
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
          <ul className="text-[14px]  space-y-2  text-[#666]">
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
   <div>
   <div className="flex justify-center w-full text-xs ">
      <div className="w-[90%] h-full flex justify-center items-center  py-5 bg-[#fcfcfc]">
        <div className="grid grid-cols-3 gap-16 place-items-center ">
        <div>Blink Commerce Private Limited, 2016-2024</div>
          <div className="flex items-center justify-center gap-5">
            <span>Download App</span>
            <div className="w-[5rem] h-[2rem]">
            <img src="/applestore.png" className="w-full h-full" alt="icon" />
            </div>
            <div className="w-[5rem] h-[2rem]">
            <img src="/googleplay.png" className="w-full h-full" alt="icon" />
            </div>
          
          </div>
          <div className="flex gap-5">
          <svg width="40" height="40" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg"><rect width="100" height="100" rx="50" fill="white"></rect><path fillRule="evenodd" clip-rule="evenodd" d="M42.9417 77.2H54.1817V49.9967H61.68L62.6733 40.6233H54.1817L54.1933 35.93C54.1933 33.4867 54.4267 32.175 57.9333 32.175H62.62V22.8H55.12C46.1117 22.8 42.9417 27.3483 42.9417 34.995V40.6233H37.3267V49.9983H42.9417V77.2V77.2ZM50 100C22.3867 100 0 77.6133 0 50C0 22.385 22.3867 0 50 0C77.6133 0 100 22.385 100 50C100 77.6133 77.6133 100 50 100Z" fill="#1F1F1F"></path></svg>
          <svg width="40" height="40" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg"><rect width="100" height="100" rx="50" fill="white"></rect><path fillRule="evenodd" clip-rule="evenodd" d="M42.9417 77.2H54.1817V49.9967H61.68L62.6733 40.6233H54.1817L54.1933 35.93C54.1933 33.4867 54.4267 32.175 57.9333 32.175H62.62V22.8H55.12C46.1117 22.8 42.9417 27.3483 42.9417 34.995V40.6233H37.3267V49.9983H42.9417V77.2V77.2ZM50 100C22.3867 100 0 77.6133 0 50C0 22.385 22.3867 0 50 0C77.6133 0 100 22.385 100 50C100 77.6133 77.6133 100 50 100Z" fill="#1F1F1F"></path></svg>
          <svg width="40" height="40" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg"><rect width="100" height="100" rx="50" fill="white"></rect><path fillRule="evenodd" clip-rule="evenodd" d="M42.9417 77.2H54.1817V49.9967H61.68L62.6733 40.6233H54.1817L54.1933 35.93C54.1933 33.4867 54.4267 32.175 57.9333 32.175H62.62V22.8H55.12C46.1117 22.8 42.9417 27.3483 42.9417 34.995V40.6233H37.3267V49.9983H42.9417V77.2V77.2ZM50 100C22.3867 100 0 77.6133 0 50C0 22.385 22.3867 0 50 0C77.6133 0 100 22.385 100 50C100 77.6133 77.6133 100 50 100Z" fill="#1F1F1F"></path></svg>
          <svg width="40" height="40" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg"><rect width="100" height="100" rx="50" fill="white"></rect><path fillRule="evenodd" clip-rule="evenodd" d="M42.9417 77.2H54.1817V49.9967H61.68L62.6733 40.6233H54.1817L54.1933 35.93C54.1933 33.4867 54.4267 32.175 57.9333 32.175H62.62V22.8H55.12C46.1117 22.8 42.9417 27.3483 42.9417 34.995V40.6233H37.3267V49.9983H42.9417V77.2V77.2ZM50 100C22.3867 100 0 77.6133 0 50C0 22.385 22.3867 0 50 0C77.6133 0 100 22.385 100 50C100 77.6133 77.6133 100 50 100Z" fill="#1F1F1F"></path></svg>
          <svg width="40" height="40" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg"><rect width="100" height="100" rx="50" fill="white"></rect><path fillRule="evenodd" clip-rule="evenodd" d="M42.9417 77.2H54.1817V49.9967H61.68L62.6733 40.6233H54.1817L54.1933 35.93C54.1933 33.4867 54.4267 32.175 57.9333 32.175H62.62V22.8H55.12C46.1117 22.8 42.9417 27.3483 42.9417 34.995V40.6233H37.3267V49.9983H42.9417V77.2V77.2ZM50 100C22.3867 100 0 77.6133 0 50C0 22.385 22.3867 0 50 0C77.6133 0 100 22.385 100 50C100 77.6133 77.6133 100 50 100Z" fill="#1F1F1F"></path></svg>
          </div>
        </div>
      </div>
    </div>
    <div className="flex items-center justify-center w-full py-2 text-xs ">
      <span className="w-[88%] ">
      “Blinkit” is owned & managed by "Blink Commerce Private Limited" and is not related, linked or interconnected in whatsoever manner or nature, to “GROFFR.COM” which is a real estate services business operated by “Redstone Consultancy Services Private Limited”.
      </span>
    </div>
   </div>
  </div>
  );
};

export default Footer;
