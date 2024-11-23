"use client";
import React, { useEffect, useRef, useState } from "react";
import { IoMdArrowDropdown } from "react-icons/io";
import { Search, ShoppingCart } from "lucide-react";
import { useSelector, useDispatch } from "react-redux";
import { handleUsersLocation } from "@/slices/UserSlice";
import { MoveLeft } from "lucide-react";
import { X } from "lucide-react";
import { ChevronRight } from "lucide-react";
import { ScrollText } from "lucide-react";
import { Bike } from "lucide-react";
import { ShoppingBag } from "lucide-react";
import Link from "next/link";
const Navbar = () => {
  const searchItem = [
    `Search "chips" `,
    `Search "curd"`,
    `Search "milk"`,
    `Search "sugar"`,
    `Search "rice"`,
    `Search "egg"`,
  ];

  const searchingRef = useRef(null); // Ref to the input element to directly set placeholder
  const currentIndexRef = useRef(0); // Ref to store current index for search text

  const dispatch = useDispatch();
  const user = useSelector((s) => s?.user || "");

  const [isClicked, setIsClicked] = useState(false);
  const [isLoginClicked, setIsLogInClicked] = useState(false);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  function showLocationPopUpChild() {
    setIsClicked(!isClicked);
  }

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

  async function getReadableAddress(latitude, longitude) {
    try {
      const response = await fetch(
        `https://nominatim.openstreetmap.org/reverse?lat=${latitude}&lon=${longitude}&format=json`
      );
      const data = await response.json();
      if (data && data.display_name) {
        const address = data.display_name;
        const array = address.split(",");
        const location = array[1] + "," + array[2];
        dispatch(handleUsersLocation(location));
        setErrorMessage("");
        isClicked && setIsClicked(false);
      } else {
        setErrorMessage("Unable to find address for this location.");
      }
    } catch (error) {
      console.error("Error fetching address:", error);
      setErrorMessage("Could not retrieve location details.");
    }
  }

  const [placeholderText, setPlaceholderText] = useState(searchItem[0]);
  


  const [animate, setAnimate] = useState(false);
  useEffect(() => {
    let index = 0;
    
    const interval = setInterval(() => {
      setAnimate(true); // Start the animation
      index = (index + 1) % searchItem.length; // Loop through items
      setPlaceholderText(searchItem[index]);

      // Reset animation
      setTimeout(() => setAnimate(false), 1400);
    }, 1500);

    return () => clearInterval(interval); // Cleanup on unmount
  }, []);

  
  useEffect(() => {
    detectLocation();
  }, [user.location]);

  const [mobileNumber, setMobileNumber] = useState("");
  console.log(mobileNumber);
  function handleMobileNumber(e) {
    const value = e.target.value;
    const reg = /^[0-9]*$/;
    if (reg.test(value) && value.length < 11) {
      setMobileNumber(value);
    }
  }

  function handleLogin(e) {
    if (mobileNumber.length == 10) {
      alert("Submited");
    }
    return;
  }

  return (
    <div className="fixed flex justify-between items-center z-[10000] bg-[#f4f6fc] w-full h-[5.5rem] gap-10 border-b">
      <div className="flex h-full">
        <Link href={"/"} className="w-[12rem] border-r flex justify-center h-[100%] items-center">
          <img src="/logo.svg" alt="Logo" />
        </Link>
        <div className="relative flex justify-center items-center w-[20rem] h-full">
          <div>
            <h3 className="text-[18px] font-extrabold">
              Delivery in 13 minutes
            </h3>
            <h5 className="font-normal text-[13px]">{user?.location}</h5>
            <div className="absolute right-10 bottom-5">
              <IoMdArrowDropdown onClick={showLocationPopUpChild} size={25} />
            </div>
          </div>
        </div>
      </div>
      <div className="w-[28rem] overflow-hidden relative">
        <div className="absolute left-[2%] top-[28%]">
          <Search size={21} />
          
        </div>
        <div className="absolute w-full left-[12%] top-[28%]">
        <span className="absolute text-gray-500 placeholder-move">{`${placeholderText}`}</span>
        </div>
        <input
          type="text"
          className={`rounded-xl bg-[#f8f8f8] border text-[#828282] w-full pl-12 py-3 `}
         
        />
       
      </div>
      <div className="flex w-[20%] items-center justify-between px-5 h-full">
        <div
          className="text-[18px] cursor-pointer font-normal"
          onClick={(e) => setIsLogInClicked(!isLoginClicked)}
        >
          Login
        </div>
        <div
          onClick={() => setIsCartOpen(!isCartOpen)}
          className="cursor-pointer flex gap-2 bg-[#0c831f] px-3 py-4 text-[14px] text-white rounded-[8px]"
        >
          <ShoppingCart />
          <div>My Cart</div>
        </div>
      </div>

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
              <h5 className="text-[14px] text-[#333] font-medium">
                Change Location
              </h5>
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
                // placeholder={searchingRef.current.placeholder}
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

      {isLoginClicked && (
        <div className="fixed inset-0 z-40 flex items-center justify-center bg-black bg-opacity-30 backdrop-blur-none">
          <div className="bg-[#ffffff] rounded-xl pt-8 relative space-y-3  flex flex-col justify-center items-center  w-[36rem] h-[20rem]">
            <div
              className="absolute top-5 left-5"
              onClick={() => setIsLogInClicked(!isLoginClicked)}
            >
              {" "}
              <MoveLeft size={20} />
            </div>
            <div className="w-full flex justify-center items-center flex-col h-[90%] px-5">
              <img src="/favicon.png" alt="Blink it" className="size-16" />
              <div className="py-2 space-y-2">
                <h2 className="text-2xl font-bold">India's Last minute app</h2>
                <h5 className="text-center ">Log in or Sign up</h5>
              </div>

              <div className="space-y-5">
                <div className="relative">
                  <span className="absolute top-[0.8rem] left-1 font-bold">
                    + 977
                  </span>
                  <input
                    type="text"
                    className="py-3 font-bold border rounded-lg px-14"
                    placeholder="Enter mobile number"
                    name="Mobile Number"
                    value={mobileNumber}
                    onChange={handleMobileNumber}
                  />
                </div>
                <div className="w-full">
                  <button
                    onClick={handleLogin}
                    className="w-full  py-3 text-white rounded-lg bg-[#9C9C9C]"
                  >
                    Continue
                  </button>
                </div>
              </div>
            </div>
            <div className="w-full h-auto py-4 rounded-b-xl bg-[#fbfbfb]">
              <p className="text-center text-[0.90rem]">
                By counting, you agree to our{" "}
                <span className="underline">Terms of service</span> &{" "}
                <span className="underline">Privacy policy</span>
              </p>
            </div>
          </div>
        </div>
      )}

      {isCartOpen && (
        <div className="fixed inset-0 z-40 flex items-center justify-center bg-black bg-opacity-30 backdrop-blur-none">
          <div className="w-[400px] overflow-y-auto absolute right-0 py-5  bg-white h-full">
            <div className="flex justify-between px-3 py-3">
              <div className="font-bold">My Cart</div>
              <div onClick={() => setIsCartOpen(!isCartOpen)}>
                {" "}
                <X size={20} />
              </div>
            </div>
            <hr />
            <div className="bg-[#f5f7fd]  py-5 px-2 space-y-10">
              <div className="w-full h-full py-5 bg-white rounded-2xl space-y-7 ">
                <div className="w-full flex h-[3rem] px-3 pt-3 pb-5 space-x-3">
                  <div className="h-[3rem]">
                    <img
                      src="/15-mins-filled.png"
                      className="w-full h-full"
                      alt="Timer icon"
                    />
                  </div>
                  <div className="space-y-1">
                    <h2 className="font-bold">Delivery in 11 minutes</h2>
                    <p className="text-sm">Ship of 2 items</p>
                  </div>
                </div>
                {/* item show case  */}
                <div className="flex items-center justify-between w-full px-5">
                  <div className="flex gap-3">
                    <div className="w-[30%] ">
                      <img
                        src="/images/notfound.jpg"
                        onError={(e) => (e.target.src = "/images/notfound.jpg")}
                        alt="image of the item"
                      />
                    </div>
                    <div className="w-auto text-xs ">
                      <p className="text-sm">Amul Taaza Toned</p>
                      <p className="text-sm">Fresh Milk</p>
                      <p className="text-gray-600">500ml</p>
                      <p className="text-sm font-bold">price</p>
                    </div>
                  </div>
                  <div className="w-[50%] bg-primary  py-1 px-1 justify-around rounded-md text-white items-center flex">
                    <button>-</button>
                    <div>1</div>
                    <button>+</button>
                  </div>
                </div>
              </div>

              <div className="rounded-2xl px-1 bg-white py-2 w-full min-h-[8rem]">
                <div>
                  <h3 className="font-bold">Bill details</h3>
                </div>
                <div className="px-1 py-2">
                  <div className="flex justify-between px-1 text-xs">
                    <div className="flex items-center gap-2">
                      <div>
                        <ScrollText />
                      </div>
                      <h5>Items total</h5>
                    </div>
                    <h5>Price</h5>
                  </div>
                </div>
                <div className="px-1 py-1 ">
                  <div className="flex justify-between px-1 text-xs">
                    <div className="flex items-center gap-2">
                      <div>
                        <Bike />
                      </div>
                      <h5>Delivery charge</h5>
                    </div>
                    <h5>Price</h5>
                  </div>
                </div>
                <div className="px-1 py-1 ">
                  <div className="flex justify-between px-1 text-xs">
                    <div className="flex items-center gap-2">
                      <div>
                        {" "}
                        <ShoppingBag />
                      </div>
                      <h5>Handling charge</h5>
                    </div>
                    <h5>Price</h5>
                  </div>
                </div>
                <div className="px-1 py-1 ">
                  <div className="flex justify-between px-1 font-bold ">
                    <h5>Grand Total</h5>
                    <h5>Price</h5>
                  </div>
                </div>
              </div>

              <div className="rounded-2xl px-3 py-5 bg-white w-full min-h-[5rem]">
                <h3 className="font-bold">Cancellation Policy</h3>
                <p className="text-xs">
                  Order cannot be cancelled once pacekd for deliver. In case of
                  unexpected delays, a refund will be provided, if applicable.
                </p>
              </div>
              <div className="w-full px-2 py-5">
                <div className="flex items-center justify-between px-3 py-2 text-white rounded-lg bg-primary ">
                  <div className="flex flex-col">
                    <span className="font-bold">$60</span>
                    <span>Total</span>
                  </div>
                  <div className="flex">
                    <span>Login to Proceed</span>
                    <ChevronRight />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Navbar;
