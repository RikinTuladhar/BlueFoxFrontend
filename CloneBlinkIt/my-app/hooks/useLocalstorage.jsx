"use client";
import React, { useEffect, useState } from "react";

const useLocalstorage = () => {
  // console.log(cart);

  function getCartItems() {
    if (typeof window !== "undefined") {
      const cartItems = JSON.parse(window.localStorage.getItem("cart"));
      return cartItems;
    }
  }

  function setCartItems(value) {
    const items = JSON.parse(window.localStorage.getItem("cart")) || [];
    const { name, quantity } = value;
    console.log(quantity);
    if (doesExist(name)) {
      console.log("Inside does exist");
      const newArray = setCartItemQuantity(name, quantity, value);
      window.localStorage.setItem("cart", JSON.stringify(newArray));
    } else {
      console.log("outside does exist");
      const newArray = [...items, value];
      window.localStorage.setItem("cart", JSON.stringify(newArray));
    }
  }

  function doesExist(name) {
    // console.log(cart);
    const localcart = JSON.parse(window.localStorage.getItem("cart")) || [];
    const isExist = localcart.find(
      (i) => JSON.stringify(i.name) === JSON.stringify(name)
    );
    console.log("Is exist", isExist);
    if (typeof isExist === "object" && isExist !== null) {
      return true;
    } else {
      return false;
    }
  }

  function setCartItemQuantity(name, quantity, item) {
    const cart = JSON.parse(window.localStorage.getItem("cart")) || [];
    const filtered =
      cart.filter((i) => JSON.stringify(i.name) !== JSON.stringify(name)) || [];
    const itemWithQuantityChanged = {
      ...item,
      quantity,
    };
    if (quantity > 0) {
      const newArray = [...filtered, itemWithQuantityChanged];
      return newArray;
    } else {
      const newArray = [...filtered];
      return newArray;
    }
  }

  function getCartItem(item) {
    const { name } = item;
    const localcart = JSON.parse(window.localStorage.getItem("cart")) || [];
    const filtered =
      localcart.find((i) => JSON.stringify(i.name) === JSON.stringify(name)) ||
      [];
    return filtered;
  }

  function getQuantity(item) {
    const filtered =
      cart.find((i) => JSON.stringify(i) === JSON.stringify(item)) || [];
    const quantity = filtered?.quantity;
    return quantity;
  }

  return {
    getCartItems,
    setCartItems,
    getCartItem,
    getQuantity,
    setCartItemQuantity,
  };
};

export default useLocalstorage;
