import Footer from "@/components/footer/Footer";
import Navbar from "@/components/Navbar";
import React from "react";

const page = async ({ params }) => {
  const id = (await params).id;
  return (
    <>
      <Navbar />
      <div className="w-full  pt-24 pl-20 flex  min-h-[100vh] relative ">
        {firstSection()}
        {secondSection()}
      </div>
      <Footer />
    </>
  );
};

export default page;
function firstSection() {
  return <div className="w-[55%] min-h-[100vh] border ">
    <div className="w-[80%]  flex justify-center items-center  h-[100vh]">
      <img
        src="/applestore.png"
        className="object-contain w-full h-full"
        alt="Image of product" />
    </div>
    <div className="py-10 pl-2 pr-32 space-y-2 text-sm ">
      <h1 className="text-2xl font-bold">Product Details</h1>
      <p className="font-bold text-[#666]">Unit</p>
      <p>1kg</p>
      <p className="font-bold">Storage Tips</p>
      <p className="text-[#666]">Store in wire-basket or mesh bags.</p>
      <p className="font-bold">Nutrient Value & Benefits</p>
      <p className="text-[#666]">
        Contains Folic acid, Vitamin C and Amino acid .Vitamin C acts as a
        powerful antioxidant and also helps formation of collagen that is
        responsible for skin and hair health.
      </p>
      <p className="font-bold">Storage Temperature (DegC)</p>
      <p className="text-[#666]">7-13</p>
      <p className="font-bold">Health Denefits</p>
      <p>Enhances Skin & Hair Health</p>
      <p className="font-bold">FSSAI License</p>
      <p className="text-[#666]">
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptas
        non dolor, id labore, est reprehenderit eligendi quos quaerat
        saepe quis perspiciatis nobis.
      </p>
      <p className="font-bold">Shelf Life</p>
      <p className="text-[#666]">4 days</p>
      <p className="font-bold">Return Policy</p>
      <p className="text-[#666]">
        The product is non-returnable. For a damaged, rotten or incorrect
        item, you can request a replacement within 48 hours of delivery.
        In case of an incorrect item, you may raise a replacement or
        return request only if the item is sealed/ unopened/ unused and in
        original condition.
      </p>
      <p className="font-bold">Country of Origin</p>
      <p className="text-[#666]">India</p>
      <p className="font-bold">Customer Care Details</p>
      <p className="text-[#666]">Email: info@blinkit.com</p>
      <p className="font-bold">Seller</p>
      <p className="text-[#666]">Moonstone Venture LLP</p>
      <p className="font-bold">Seller FSSAI</p>
      <p className="text-[#666]">133239990000000008</p>
      <p className="font-bold">Description</p>
      <p className="text-[#666]">
        Onion is a staple in India and are commonly chopped and used as an
        ingredient in various hearty warm dishes. They are versatile and
        can be baked, boiled, braised, grilled, fried, roasted, sautéed,
        or eaten raw in salads.
      </p>
      <p className="font-bold">Disclaimer</p>
      <p className="text-[#666]">
        Product image is for representation only and actual product might
        differ on the basis of crop available in Season.
      </p>
    </div>
  </div>;
}

function secondSection() {
  return <section className="w-[45%] sticky top-0 px-16 py-16 h-full ">
    <p className="text-xs">Home/Fresh Vegetables/Onion (kanda)</p>
    <h1 className="text-2xl font-bold">Onion(Kanda)</h1>
    <span className="px-2 text-xs bg-[#fbfbfb] py1 ">10 MINS</span>
    <div className="w-full my-3 h-[0.05rem] bg-slate-300"></div>
    <p className="text-xs font-bold">
      <span className="line-through">Select</span> Unit
    </p>
    <div className="flex w-full gap-x-2">
      <div className="w-[7rem] shadow-xl flex-col gap-y-1 flex justify-center items-center h-[4rem] border border-green-500 rounded-2xl">
        <p className="text-xs font-bold">1kg</p>
        <p className="text-xs">
          <span className="font-bold">Rs88 </span>{" "}
          <span className="text-[#aaabaa] ">
            {" "}
            <span>MRP</span> <span className="line-through">2332</span>
          </span>
        </p>
      </div>
      <div className="w-[7rem] flex-col gap-y-1 flex justify-center items-center h-[4rem] border border-green-500 rounded-2xl">
        <p className="text-xs font-bold">1kg</p>
        <p className="text-xs">
          <span className="font-bold">Rs88 </span>{" "}
          <span className="text-[#aaabaa] ">
            {" "}
            <span>MRP</span> <span className="line-through">2332</span>
          </span>
        </p>
      </div>
    </div>
    <div className="w-full py-3 space-y-1">
      <p className="text-xs">(Inclusive of all taxes)</p>
      <button className="px-4 py-1 font-semibold text-green-500 bg-white border border-green-400 rounded-lg">
        ADD
      </button>
    </div>
    <div className="w-full mt-2 ">
      <h2 className="font-bold text-[#333333]">Why shop from blinkit?</h2>
      <div className="w-full h-[200px] space-y-3 mt-2 ">
        <div className="flex w-full space-x-2">
          <img
            src="/10_minute_delivery.avif"
            className="w-[55px] h-[55px]"
            alt="image of icon" />
          <div>
            <p className="text-[0.80rem]">Superfast Delivery</p>
            <p className="text-[0.80rem] text-[#666666]">
              Get your order delivered to your doorstep at the earliest
              from dark stores near you.
            </p>
          </div>
        </div>
        <div className="flex w-full space-x-2">
          <img
            src="/Best_Prices_Offers.avif"
            className="w-[55px] h-[55px]"
            alt="image of icon" />
          <div>
            <p className="text-[0.80rem]">Best Prices & Offers</p>
            <p className="text-[0.80rem] text-[#666666]">
              Best price destination with offers directly from the
              manufacturers.
            </p>
          </div>
        </div>
        <div className="flex w-full space-x-2">
          <img
            src="/Wide_Assortment.avif"
            className="w-[55px] h-[55px]"
            alt="image of icon" />
          <div>
            <p className="text-[0.80rem]">Wide Assortment</p>
            <p className="text-[0.80rem] text-[#666666]">
              Choose from 5000+ products across food, personal care,
              household & other categories.
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>;
}

