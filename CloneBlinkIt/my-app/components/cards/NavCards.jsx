"use client";
import React, { useEffect, useState } from "react";

import useLocalstorage from "@/hooks/useLocalstorage";
import { useDispatch, useSelector } from "react-redux";
import { handleReload } from "@/slices/ReloadSlice";
const NavCards = ({ cart }) => {
    const dispatch = useDispatch();
  const [quantityFromCart, setQuantityFromCart] = useState(0);
  const reload = useSelector((s) => s.reload);
  console.log("reload:", reload);
  const [quantity, setQuantity] = useState(0);
  console.log("Quantity is ", quantity);
  const [click, setClick] = useState(false);
  const { getCartItems, setCartItems, getCartItem, getQuantity } =
    useLocalstorage();
  console.log("Quantoty", quantityFromCart);
  useEffect(() => {
    const cartitem = getCartItem(cart);
    console.log("Filtered Items", cartitem);
    setQuantityFromCart(cartitem.quantity);
  }, [click,reload]);

  function handleIncreaseQuanity() {
    const newItem = { ...cart, quantity: quantityFromCart + 1 };
    setCartItems(newItem);
    setClick(!click);
    dispatch(handleReload());
  }

  function handleDecreseQuanity() {
    const newItem = { ...cart, quantity: quantityFromCart - 1 };
    setCartItems(newItem);
    setClick(!click);
    dispatch(handleReload());
  }

  return (
    <div>
      {/* item show case  */}
      <div className="flex items-center justify-between w-full px-5">
        <div className="flex gap-3">
          <div className="w-[30%] ">
            <img
              src={cart?.img}
              onError={(e) => (e.target.src = "/images/notfound.jpg")}
              alt="image of the item"
            />
          </div>
          <div className="w-auto text-xs ">
            <p className="text-sm">{cart.name}</p>
            <p className="text-sm">Fresh Milk</p>
            <p className="text-gray-600">{cart?.gram}</p>
            <p className="text-sm font-bold">{cart?.price}</p>
          </div>
        </div>
        <div className="w-[50%] bg-primary  py-1 px-1 justify-around rounded-md text-white items-center flex">
          <button onClick={() => handleDecreseQuanity()}>-</button>
          <div>{quantityFromCart}</div>
          <button onClick={() => handleIncreaseQuanity()}>+</button>
        </div>
      </div>
    </div>
  );
};

export default NavCards;
