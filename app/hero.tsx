"use client";
import Link from "next/link";
import Image from "next/image";
import { useEffect } from "react";
import { gsap } from "@/lib/gsap";
import dynamic from "next/dynamic";
const Hero = () => {
  return (
    <div className="container max-w-7xl sm:px-12 pt-36 miin- pb-48 mb-24">
      <div className="text-light  relative">
        <div className="flex sm:text-base text-sm items-center gap-2 text-red-10">
          Aspiring developer / designer{" "}
          <span className="lg:w-48 border-b h-0.5 block border-red-10"></span>
        </div>
        <h1 className="text-4xl sm:text-4xl  font-medium lg:text-5xl xl:text-6xl mt-2 text-balance  font-display  leading-[1.1] ">
          I help founders and creators
          <br />
          build products that matter.
        </h1>
      </div>
    </div>
  );
};
export default Hero;
