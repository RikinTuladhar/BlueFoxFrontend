"use client";
import Navbar from "@/components/Navbar";
import React, { useEffect, useReducer, useState } from "react";
import { Plus, Minus, Star } from "lucide-react";
import MovileNavbar from "@/components/MovileNavbar";

const Page = ({ params }) => {
  const [mobileView, setMobileView] = useState(false);
  const [product, setProduct] = useState({});

  // Handle mobile view detection
  useEffect(() => {
    const handleResize = () => {
      setMobileView(window.innerWidth < 500);
    };
    handleResize(); // Check on mount
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const id = React.use(params)?.id;
  useEffect(() => {
    async function fetchProduct() {
      if (id) {
        try {
          const response = await fetch(`/api/product/${id}`);
          const data = await response.json();
          setProduct(data);
        } catch (error) {
          console.error("Failed to fetch product:", error);
        }
      }
    }

    fetchProduct();
  }, [id]);

  // Reducer for quantity counter
  const initialState = { count: 0 };
  function reducer(state, action) {
    switch (action.type) {
      case "Increment":
        return { ...state, count: state.count + 1 };
      case "Decrement":
        return state.count > 0 ? { ...state, count: state.count - 1 } : state;
      default:
        return state;
    }
  }
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <>
      {mobileView ? <MovileNavbar /> : <Navbar />}
      <div className="flex flex-wrap w-full min-h-screen gap-5 px-2 py-5 md:flex-nowrap md:py-10 md:px-10">
        {/* Product Image */}
        <div className="w-full md:w-[50%] h-[70vh]">
          <img
            src={product?.images || "/home.png"}
            className="object-contain w-full h-full rounded-2xl"
            alt="Image Of Products"
          />
        </div>

        {/* Product Details */}
        <div className="w-full md:w-[50%] h-full px-5 md:px-10 py-0 md:py-10">
          <div className="w-full py-5">
            <h3 className="text-4xl font-bold text-green-900">{product?.name || "Product"}</h3>
            <h4 className="py-2 font-semibold">Category: {product?.category}</h4>
            <p className="font-semibold">{product?.description}</p>
            <div className="flex items-center gap-2 py-5">
              {product?.rating &&
                Array.from({ length: product.rating }).map((_, i) => (
                  <Star key={i} size={15} />
                ))}
            </div>
          </div>

          <h2 className="text-2xl">Rs {product?.price || "2000"}</h2>

          <div className="flex py-5 text-xl rounded">
            <div className="flex gap-5 px-5 py-1 bg-[#F5F6F6] rounded-3xl">
              <button onClick={() => dispatch({ type: "Decrement" })}>
                <Minus size={15} />
              </button>
              <div>{state.count}</div>
              <button onClick={() => dispatch({ type: "Increment" })}>
                <Plus size={15} />
              </button>
            </div>
          </div>

          <div className="space-x-2 md:space-x-10">
            <button className="px-5 md:px-10 py-2 bg-[#003D29] text-white rounded-2xl">
              Buy Now
            </button>
            <button className="px-4 md:px-5 py-2 border-[#003D29] bg-white text-[#003D29] border rounded-2xl">
              Add To Cart
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Page;
