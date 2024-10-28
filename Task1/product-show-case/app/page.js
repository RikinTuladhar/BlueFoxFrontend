import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div
      className="flex flex-col items-center justify-center w-full min-h-screen"
      style={{ backgroundImage: "url(/bg.svg)" }}
    >
      <h1 className="pb-10 font-serif text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-slate-50 to-slate-300 ">
        First Project Submission For Frontend
      </h1>
      <Link href={"/dashboard"}>
        <h2 className="px-5 py-2 text-3xl text-white transition-all border rounded-md cursor-pointer hover:scale-105 hover:text-black hover:bg-white">
          Show Project
        </h2>
      </Link>
    </div>
  );
}