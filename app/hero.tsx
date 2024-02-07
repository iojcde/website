"use client";
import Link from "next/link";
import Image from "next/image";
import { useEffect } from "react";
import { gsap } from "@/lib/gsap";
import dynamic from "next/dynamic";
const Ohjangwon = dynamic(() => import("./(pages)/ohjangwon"), { ssr: false });
const Hero = () => {
  return (
    <div
      id="hero"
      className="relative pt-8 h-full w-full  container max-w-7xl  "
    >
      <div className=" text-right w-full font-display">
        <h1 className="text-6xl 2xl:text-9xl font-bold">Jeeho</h1>
        <hr />
        <h1 className="text-6xl 2xl:text-9xl font-bold text-right">
          <span className="text-gray-10 transition-all duration-300   animate-rgb">
            &rarr;
          </span>
          Ahn.
        </h1>
        <hr className=" shadow-lg shadow-white" />
      </div>
      <div className="text-gray-11  font-light mt-4">
        Aspiring developer <span className="text-gray-11">/</span> designer
      </div>

      {/* <div className="tracking-wide   text-xl text-center pb-24">
        developer <span className="text-gray-11">/</span> designer based in
        seoul{" "}
        <img
          className="h-4 inline-block"
          src="https://images.emojiterra.com/twitter/v14.0/512px/1f1f0-1f1f7.png"
        />
      </div> */}
      <div className="relative max-w-6xl flex flex-col pb-[7rem] justify-end flex-1  mx-auto px-6 w-full">
        <Ohjangwon />
        {/* <div className="flex items-center gap-3 px-2">
          <Image
            alt=""
            src="https://avatars.githubusercontent.com/u/31413538?v=4"
            width={40}
            height={40}
            className="rounded-full select-none"
          />
          <div>
            <Link className="font-medium mt-2 text-gray-11 text-xl" href="/">
              Jeeho Ahn
            </Link>
          </div>
        </div>
        <h2 className="mt-4 text-white tracking-tight text-2xl sm:text-5xl font-semibold max-w-[34ch]">
          Interdisciplinary developer.
        </h2>
        <h2 className="mt-1 text-white tracking-tight text-2xl sm:text-5xl font-semibold max-w-[34ch]">
          Visionary designer.
        </h2>
        <div className="bg-gray-3  max-w-fit border rounded-full flex gap-3 text-sm items-center px-4 py-1 mt-8 text-gray-11">
          <div className="dot bg-green-500 w-2 h-2 rounded-full" /> Available
          for freelance work
        </div> */}
      </div>
    </div>
  );
};
export default Hero;
