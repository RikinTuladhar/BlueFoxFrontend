"use client";
import Card from "@/components/cards/CardHome";
import Footer from "@/components/footer/Footer";
import MobileFooter from "@/components/footer/MobileFooter";
import MobileNavbar from "@/components/MobileNavbar";
import Navbar from "@/components/Navbar";
import Link from "next/link";
import { useEffect, useState } from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
export default function Home() {
  const [movieView, setMobileView] = useState(true);
  const[showLogin,setShowLogin] = useState(false)
  const [movieViewItems, setMovieViewItems] = useState([
    {
      title: "Vegitables & Fruits",
      url: "/sm_mb_item1.png",
    },
    {
      title: "Dairy & Breakfast",
      url: "/sm_mb_item2.png",
    },
    {
      title: "Munchies",
      url: "/sm_mb_item3.png",
    },
    {
      title: "Cold Drinks",
      url: "/sm_mb_item4.png",
    },
    {
      title: "Instant and Frozen",
      url: "/sm_mb_item5.png",
    },
    {
      title: "Tea & Coffee",
      url: "/sm_mb_item6.avif",
    },
    {
      title: "Bakery & Biscuits",
      url: "/sm_mb_item7.avif",
    },
    {
      title: "Sweet Tooth",
      url: "/sm_mb_item8.avif",
    },
    {
      title: "Atta, Rice & Dal",
      url: "/sm_mb_item9.avif",
    },
    {
      title: "Dry Fruits",
      url: "/sm_mb_item10.png",
    },
    {
      title: "Sauce & Spreads",
      url: "/sm_mb_item11.avif",
    },
    {
      title: "Chicken Meat",
      url: "/sm_mb_item12.png",
    },
    {
      title: "Pean Cornor",
      url: "/sm_mb_item13.avif",
    },
    {
      title: "Organic & Premium",
      url: "/sm_mb_item14.avif",
    },
    {
      title: "Baby Care",
      url: "/sm_mb_item15.avif",
    },
    {
      title: "Pharma & Wellness",
      url: "/sm_mb_item16.avif",
    },
    {
      title: "Cleaning Essentials",
      url: "/sm_mb_item17.avif",
    },
    {
      title: "Home & Office",
      url: "/sm_mb_item18.avif",
    },
    {
      title: "Personal Care",
      url: "/sm_mb_item19.avif",
    },
    {
      title: "Pet Care",
      url: "/sm_mb_item20.avif",
    },
  ]);

  const [thirdSectionCards, setThridSectionCards] = useState([
    {
      id: 1,
      img: "/thridsectioncard1.avif",
      name: "Amul Masti Curd",
      gram: 400,
      price: 35,
    },
    {
      id: 1,
      img: "/thridsectioncard1.avif",
      name: "Amul Masti Curd",
      gram: 400,
      price: 35,
    },
    {
      id: 1,
      img: "/thridsectioncard1.avif",
      name: "Amul Masti Curd",
      gram: 400,
      price: 35,
    },
    {
      id: 1,
      img: "/thridsectioncard1.avif",
      name: "Amul Masti Curd",
      gram: 400,
      price: 35,
    },
    {
      id: 1,
      img: "/thridsectioncard1.avif",
      name: "Amul Masti Curd",
      gram: 400,
      price: 35,
    },
    {
      id: 1,
      img: "/thridsectioncard1.avif",
      name: "Amul Masti Curd",
      gram: 400,
      price: 35,
    },
    {
      id: 1,
      img: "/thridsectioncard1.avif",
      name: "Amul Masti Curd",
      gram: 400,
      price: 35,
    },
    {
      id: 1,
      img: "/thridsectioncard1.avif",
      name: "Amul Masti Curd",
      gram: 400,
      price: 35,
    },
  ]);

  const [forthSectionCards, setforthSectionCards] = useState([
    {
      id: 1,
      img: "/forthSectionImage.avif",
      name: "Perfect Rolled Cones",
      gram: 400,
      price: 35,
    },
    {
      id: 1,
      img: "/forthSectionImage.avif",
      name: "Amul Masti Curd",
      gram: 400,
      price: 35,
    },
    {
      id: 1,
      img: "/forthSectionImage.avif",
      name: "Amul Masti Curd",
      gram: 400,
      price: 35,
    },
    {
      id: 1,
      img: "/forthSectionImage.avif",
      name: "Amul Masti Curd",
      gram: 400,
      price: 35,
    },
    {
      id: 1,
      img: "/forthSectionImage.avif",
      name: "Amul Masti Curd",
      gram: 400,
      price: 35,
    },
    {
      id: 1,
      img: "/forthSectionImage.avif",
      name: "Amul Masti Curd",
      gram: 400,
      price: 35,
    },
    {
      id: 1,
      img: "/forthSectionImage.avif",
      name: "Amul Masti Curd",
      gram: 400,
      price: 35,
    },
    {
      id: 1,
      img: "/forthSectionImage.avif",
      name: "Amul Masti Curd",
      gram: 400,
      price: 35,
    },
  ]);
  const [fifthSectionCards, setfifthSectionCards] = useState([
    {
      id: 1,
      img: "/fifthImageCard1.avif",
      name: "Perfect Rolled Cones",
      gram: 400,
      price: 35,
    },
    {
      id: 1,
      img: "/fifthImageCard1.avif",
      name: "Amul Masti Curd",
      gram: 400,
      price: 35,
    },
    {
      id: 1,
      img: "/fifthImageCard1.avif",
      name: "Amul Masti Curd",
      gram: 400,
      price: 35,
    },
    {
      id: 1,
      img: "/fifthImageCard1.avif",
      name: "Amul Masti Curd",
      gram: 400,
      price: 35,
    },
    {
      id: 1,
      img: "/fifthImageCard1.avif",
      name: "Amul Masti Curd",
      gram: 400,
      price: 35,
    },
    {
      id: 1,
      img: "/fifthImageCard1.avif",
      name: "Amul Masti Curd",
      gram: 400,
      price: 35,
    },
    {
      id: 1,
      img: "/fifthImageCard1.avif",
      name: "Amul Masti Curd",
      gram: 400,
      price: 35,
    },
    {
      id: 1,
      img: "/fifthImageCard1.avif",
      name: "Amul Masti Curd",
      gram: 400,
      price: 35,
    },
  ]);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 500) {
        setMobileView(true);
      } else {
        setMobileView(false);
      }
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    console.log(movieView, "Inner width", window.innerWidth);

    return () => window.removeEventListener("resize", handleResize);
  }, [movieView]); // Added movieView as a dependency
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 8,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 6,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 2,
    },
  };

  function handleLoginPage(state){
    setShowLogin(state)
  }


  if(showLogin){
    return(
      <div className="w-full h-[100vh] bg-green-200">
        <div><button>-</button></div>
        <div>
          <img src="" alt="Blink It" />
        </div>
        <div>
          <h1>India's last minite app</h1>
        </div>
        <p>Log in or Sign up</p>
        <div>
          <input type="text" placeholder="Enter Mobile Number" />
        </div>
        <div>
          Continue
        </div>
      </div>
    )
  }

  return (
    <>
      {movieView ? <MobileNavbar handleLoginPage={handleLoginPage} /> : <Navbar />}

      <div className="w-full pt-20">
        {movieView && (
          <div className="px-2">
            <img
              src="https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=540/layout-engine/2024-02/android_feed_mweb-1.png"
              alt=""
            />
          </div>
        )}

        {movieView && (
          <section className="w-full py-10 pl-5 space-y-2 md:px-10">
            <h1 className="text-xl font-bold">Best Seller</h1>
            <div className="flex w-full md:gap-5">
              <div className="w-full space-x-10 overflow-hidden">
                <Carousel responsive={responsive}>
                  {thirdSectionCards.map((item, i) => (
                    <Card item={item} key={i} />
                  ))}
                </Carousel>
              </div>
            </div>
          </section>
        )}

        {/* Section one */}
        <section className="hidden w-full px-5 py-2 md:py-5 md:block">
          <div className="w-full h-[14rem] ">
            <img src="/homeimg1.webp" className="w-full h-full" alt="image" />
          </div>
          <div className="flex w-full gap-5 px-5 py-4 ">
            <div className="w-[22rem] h-[12rem] bg-red-400">
              <img
                src="/homeimgSmall1.avif"
                className="w-full h-full"
                alt="Image of small card"
              />
            </div>
            <div className="w-[22rem] h-[12rem] bg-red-400">
              <img
                src="/homeimgSmall2.avif"
                className="w-full h-full"
                alt="Image of small card"
              />
            </div>
            <div className="w-[22rem] h-[12rem] bg-red-400">
              <img
                src="/homeimgSmall3.avif"
                className="w-full h-full"
                alt="Image of small card"
              />
            </div>
          </div>
        </section>
        {/* section second  */}
       {movieView &&  <h1 className="pl-3 text-xl font-bold">Shop by category</h1>}
        {movieView ? (
          <section className="grid w-full grid-cols-4 gap-2 px-3 py-2 md:mt-0 md:px-5 md:grid-cols-10 ">
            {movieViewItems.map((m, i) => (
              <div key={i}>
                <div className="w-[5rem] bg-[#E5F3F3]  rounded-xl  md:w-[8rem]  md:h-[12rem]">
                  <img
                    src={m.url}
                    className="w-full h-full"
                    alt="Image of card "
                  />
                </div>
                <p className="text-[13px] font-semibold">{m.title}</p>
              </div>
            ))}
          </section>
        ) : (
          <section className="grid w-full grid-cols-4 gap-2 px-3 py-2 mt-16 md:mt-0 md:px-8 md:grid-cols-10 place-items-center ">
            {Array.from({ length: 20 }).map((_, i) => (
              <Link
              href={`/category/${i}`}
                key={i}
                className="w-[7rem] h-[8rem] md:w-[8rem]  md:h-[12rem]"
              >
                <img
                  src={`/smItem${i + 1}.avif`}
                  className="w-full h-full"
                  alt="Image of card "
                />
              </Link>
            ))}
          </section>
        )}
        {/* section third */}
        <section className="w-full py-10 pl-5 space-y-2 md:px-10">
          <h1 className="text-xl font-bold">Best Seller</h1>
          <div className="flex w-full md:gap-5">
            <div className="w-full space-x-10 overflow-hidden">
              <Carousel responsive={responsive}>
                {thirdSectionCards.map((item, i) => (
                  <Card item={item} key={i} />
                ))}
              </Carousel>
            </div>
          </div>
        </section>
        {/* section forth */}
        <section className="w-full py-10 pl-5 space-y-2 md:px-10">
          <h1 className="text-xl font-bold">Best Seller</h1>
          <div className="flex w-full md:gap-5">
            <div className="w-full space-x-10 overflow-hidden">
              <Carousel responsive={responsive}>
                {forthSectionCards.map((item, i) => (
                  <Card item={item} key={i} />
                ))}
              </Carousel>
            </div>
          </div>
        </section>
        {/* section fifth */}
        <section className="w-full py-10 pl-5 space-y-2 md:px-10">
          <h1 className="text-xl font-bold">Best Seller</h1>
          <div className="flex w-full md:gap-5">
            <div className="w-full space-x-10 overflow-hidden">
              <Carousel responsive={responsive}>
                {fifthSectionCards.map((item, i) => (
                  <Card item={item} key={i} />
                ))}
              </Carousel>
            </div>
          </div>
        </section>
        {movieView ? <MobileFooter /> : <Footer />}
      </div>
    </>
  );
}
