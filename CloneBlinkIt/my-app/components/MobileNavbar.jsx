"use client";
import React, { useEffect, useState } from "react";
import { IoMdArrowDropdown } from "react-icons/io";
import { FaRegCircleUser } from "react-icons/fa6";
import { Search } from "lucide-react";
import { useSelector, useDispatch } from "react-redux";
import { handleUsersLocation } from "@/slices/UserSlice";
const MobileNavbar = () => {
  const dispatch = useDispatch();

  const [errorMessage, setErrorMessage] = useState("");
  const user = useSelector((s) => s?.user || "");
  console.log(user);
  const [isClicked, setIsClicked] = useState(false);
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
      const response = await fetch(
        `https://nominatim.openstreetmap.org/reverse?lat=${latitude}&lon=${longitude}&format=json`
      );
      const data = await response.json();
      if (data && data.display_name) {
        const address = data.display_name; // Get the full address
        // alert(`Your location is: ${address}`);
        const array = address.split(",");
        const location = array[1] + "," + array[2];
        dispatch(handleUsersLocation(location));
        // setLocation(location); // Set location to formatted address
        setErrorMessage(""); // Clear any previous error messages
        isClicked && setIsClicked(false);
      } else {
        // alert("Unable to find address for this location.");
        setErrorMessage("Unable to find address for this location.");
      }
    } catch (error) {
      console.error("Error fetching address:", error);
      // alert("Could not retrieve location details.");
      setErrorMessage("Could not retrieve location details.");
    }
  }

  useEffect(() => {
    detectLocation();
  }, [user.location]);
  return (
    <div className="w-full   h-[5rem] ">
      <div className="flex w-full h-full">
        <div className="w-[80%] flex justify-center items-start flex-col  pl-3 h-full ">
          <div className="text-[18px] font-extrabold">
            Delivery in 13 minutes
          </div>
          <div className="flex items-center w-full ">
            <p className="text-[13px]">{user?.location || ""}</p>
            <IoMdArrowDropdown onClick={showLocationPopUpChild} size={22} />
          </div>
        </div>
        <div className="w-[20%] grid place-items-center h-full ">
          <FaRegCircleUser size={28} />
        </div>
      </div>
      <div className="relative mx-3 ">
        <div className="absolute left-[2%] top-[28%]">
          <Search size={21} />
        </div>
        <input
          type="text"
          className="rounded-xl bg-[#f8f8f8] border text-[#828282] w-full  pl-12 py-3"
          placeholder="Search"
        />
      </div>
      {isClicked && (
        <div className="fixed inset-0 z-40 bg-black bg-opacity-30 backdrop-blur-none">
          <div className="w-[90%]  absolute border left-4  space-y-3 px-1 py-10 flex-col justify-center items-center flex  top-[6rem]  bg-[#f4f6fc] rounded-md z-50">
            <div
              className="absolute right-4 top-2 cursor-pointer text-[12px]"
              onClick={showLocationPopUpChild}
            >
              X
            </div>
            <div className="w-full px-5">
              <h5 className="text-[14px] text-[#333] font-medium">
                Change Location
              </h5>
            </div>
            <div className="flex flex-wrap items-center w-full gap-3 px-5">
              <button
                onClick={detectLocation}
                className="px-4 py-2 text-[12px] w-full text-white rounded bg-primary"
              >
                Detect my location
              </button>
             <div className="flex items-center justify-center w-full">
             <button className="px-4 py-2 text-[12px] text-[#333] bg-gray-200 rounded-full">
                OR
              </button>
             </div>
              <input
                type="text"
                className="p-[12px] bg-white w-full text-black h-[40px] border rounded-xl"
                placeholder="search delivery"
              />
            </div>
            {errorMessage && (
              <div className="text-red-500 text-[12px] mt-2 px-5">
                {errorMessage}
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default MobileNavbar;
