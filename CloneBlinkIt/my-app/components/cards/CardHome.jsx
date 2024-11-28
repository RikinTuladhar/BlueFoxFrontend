"use client";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import useLocalstorage from "@/hooks/useLocalstorage";
import {handleReload} from "@/slices/ReloadSlice"
import { useDispatch, useSelector } from "react-redux";
const Card = ({ item }) => {
  const reload = useSelector((s) => s.reload);
  const dispatch = useDispatch();
  const [quantityFromCart, setQuantityFromCart] = useState(0);
  const [quantity, setQuantity] = useState(0);
  // console.log("Quantity is ", quantity);
  const [click, setClick] = useState(false);
  const { getCartItems, setCartItems, getCartItem, getQuantity } =
    useLocalstorage();
  // console.log("Quantoty", quantityFromCart);
  useEffect(() => {
    const cartitem = getCartItem(item);
    // console.log("Filtered Items", cartitem);
    setQuantityFromCart(cartitem.quantity);
  }, [click,reload]);

  const handleAddToCart = () => {
    setCartItems({ ...item, quantity: quantityFromCart + 1 });
    setClick(!click);
    dispatch(handleReload())
  };

  // console.log("Quantity from cart", quantityFromCart);

  function handleIncreaseQuanity() {
    const newItem = { ...item, quantity: quantityFromCart + 1 };
    setCartItems(newItem);
    setClick(!click);
    dispatch(handleReload())
  }

  function handleDecreseQuanity() {
    const newItem = { ...item, quantity: quantityFromCart - 1 };
    setCartItems(newItem);
    setClick(!click);
  }

  return (
    <div className="w-[150px] md:w-[178px] rounded-lg pb-3 border ">
      <Link href={`/product/${item.id}`}>
        <div className="w-full h-[50%] overflow-hidden bg-[#FEFFFE]">
          <img
            src={item?.img}
            className="object-contain w-full h-full"
            alt=""
          />
        </div>
      </Link>
      <div className="px-2 text-[12px] font-semibold">
        <h3 className="text-[13px] font-semibold py-5">{item.name}</h3>
        <h5>{item.gram} g</h5>
        <div className="flex justify-between w-full">
          <p className="font-bold">Rs {item.price}</p>
          {quantityFromCart > 0 ? (
            <div className="flex  gap-x-4 items-center px-2 py-2 border bg-primary rounded-md text-white border-primary">
              <div className="cursor-pointer" onClick={handleDecreseQuanity}>
                -
              </div>
              <button>{quantityFromCart}</button>
              <div className="cursor-pointer" onClick={handleIncreaseQuanity}>
                +
              </div>
            </div>
          ) : (
            <button
              onClick={handleAddToCart}
              className="px-5 py-1 border rounded-md text-primary border-primary"
            >
              Add
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default Card;
