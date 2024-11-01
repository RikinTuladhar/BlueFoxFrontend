"use client";
import React, { useState } from "react";
import { IoMdArrowDropdown } from "react-icons/io";
import { Search, ShoppingCart } from "lucide-react";

const Navbar = () => {
  const [isClicked, setIsClicked] = useState(false);
  const [location, setLocation] = useState("No Location Set");
  const [errorMessage, setErrorMessage] = useState("");

  function showLocationPopUpChild() {
    setIsClicked(!isClicked);
  }

  // Function to detect user location and get readable address
  function detectLocation() {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const { latitude, longitude } = position.coords;
          getReadableAddress(latitude, longitude);
        },
        (error) => {
          console.error("Error detecting location:", error);
          setErrorMessage("Unable to retrieve your location.");
        }
      );
    } else {
      console.log("Geolocation is not supported by this browser.");
      setErrorMessage("Geolocation is not supported by this browser.");
    }
  }

  // Function to get readable address from latitude and longitude
  async function getReadableAddress(latitude, longitude) {
    try {
      const response = await fetch(`https://nominatim.openstreetmap.org/reverse?lat=${latitude}&lon=${longitude}&format=json`);
      const data = await response.json();
      if (data && data.display_name) {
        const address = data.display_name; // Get the full address
        // alert(`Your location is: ${address}`);
        const array =  address.split(",")
        const location = array[1] + ","+ array[2]
        setLocation(location); // Set location to formatted address
        setErrorMessage(""); // Clear any previous error messages
        isClicked && setIsClicked(false)
      } else {
        alert("Unable to find address for this location.");
        setErrorMessage("Unable to find address for this location.");
      }
    } catch (error) {
      console.error("Error fetching address:", error);
      alert("Could not retrieve location details.");
      setErrorMessage("Could not retrieve location details.");
    }
  }

  return (
    <div className="fixed flex items-center z-50 bg-[#f4f6fc] w-full h-24 gap-10 border-b">
      <div className="flex h-full">
        <div className="w-[12rem] border-r flex justify-center h-[100%] items-center">
          <img src="/logo.svg" alt="Logo" />
        </div>
        <div className="relative flex justify-center items-center w-[20rem] h-full">
          <div>
            <h3 className="text-[18px] font-extrabold">Delivery in 13 minutes</h3>
            <h5 className="font-normal text-[13px]">{location}</h5>
            <div className="absolute right-10 bottom-5">
              <IoMdArrowDropdown onClick={showLocationPopUpChild} size={25} />
            </div>
          </div>
        </div>
      </div>
      <div className="w-[28rem] relative">
        <div className="absolute left-[2%] top-[28%]">
          <Search size={21} />
        </div>
        <input
          type="text"
          className="rounded-xl bg-[#f8f8f8] border text-[#828282] w-full pl-12 py-3"
          placeholder="Search"
        />
      </div>
      <div className="flex w-[20%] items-center justify-between px-5 h-full">
        <div className="text-[18px] font-normal">Login</div>
        <div className="flex gap-2 bg-[#0c831f] px-3 py-4 text-[14px] text-white rounded-[8px]">
          <ShoppingCart />
          <div>My Cart</div>
        </div>
      </div>

      {/* Overlay with blur effect */}
      {isClicked && (
        <div className="fixed inset-0 z-40 bg-black bg-opacity-30 backdrop-blur-none">
          <div className="w-[32rem] absolute border space-y-3 px-1 py-10 flex-col justify-center items-center flex h-[8rem] top-[6rem] left-24 bg-[#f4f6fc] rounded-md z-50">
            <div
              className="absolute right-4 top-2 cursor-pointer text-[12px]"
              onClick={showLocationPopUpChild}
            >
              X
            </div>
            <div className="w-full px-5">
              <h5 className="text-[14px] text-[#333] font-medium">Change Location</h5>
            </div>
            <div className="flex items-center w-full gap-3 px-5">
              <button
                onClick={detectLocation}
                className="px-4 py-2 text-[12px] text-white rounded bg-primary"
              >
                Detect my location
              </button>
              <button className="px-4 py-2 text-[12px] text-[#333] bg-gray-200 rounded-full">
                OR
              </button>
              <input
                type="text"
                className="p-[12px] bg-white w-[200px] text-black h-[40px] border rounded-xl"
                placeholder="search delivery"
              />
            </div>
            {errorMessage && (
              <div className="text-red-500 text-[12px] mt-2 px-5">{errorMessage}</div>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default Navbar;
