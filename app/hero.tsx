"use client";
import Link from "next/link";
import Image from "next/image";
import { useEffect } from "react";
import { gsap } from "@/lib/gsap";
import dynamic from "next/dynamic";
const Ohjangwon = dynamic(() => import("./ohjangwon"), { ssr: false });
const Hero = () => {
  useEffect(() => {
    const ease = gsap.fromTo(
      "#hero",
      { scale: 1 },
      {
        scale: 0.9,
        borderBottomLeftRadius: "4rem",
        borderBottomRightRadius: "4rem",
        scrollTrigger: {
          trigger: "#hero",
          start: "top top",
          end: "bottom top",
          scrub: true,
          // markers: true,
        },
      }
    );

    const bg = gsap.fromTo(
      "#hero .bg",
      { scale: 1 },
      {
        scale: 1.1,
        // filter: "blur(4px)",
        scrollTrigger: {
          trigger: "#hero",
          start: "top top",
          end: "bottom top",
          scrub: true,
          // markers: true,
        },
      }
    );

    const show = gsap.to(".scroll-indicator-container", {
      autoAlpha: 1,
      delay: 1,
      onComplete: () => {
        // animation play state
        (
          document.querySelector(".scroll-indicator") as HTMLElement
        ).style.animationPlayState = "running";
      },
    });

    const indicator = gsap.from(".scroll-indicator-container", {
      scrollTrigger: {
        trigger: "#hero",
        start: "top top",
        end: "10% top",
        onEnter: () =>
          gsap.to(".scroll-indicator-container", { opacity: 1, duration: 0.5 }),
        onLeave: () =>
          gsap.to(".scroll-indicator-container", { opacity: 0, duration: 0.5 }),
        onEnterBack: () =>
          gsap.to(".scroll-indicator-container", { opacity: 1, duration: 0.5 }),
      },
    });

    document.querySelector("#hero")?.addEventListener("mousemove", (event) => {
      const { clientX, clientY } = event as MouseEvent;
      const xPercent = (clientX / window.innerWidth) * 2 - 1;
      const yPercent = (clientY / window.innerHeight) * 2 - 1;

      console.log({ xPercent, yPercent });
      gsap.to("#hero .bg", {
        duration: 0.5,
        x: xPercent * 30,
        y: yPercent * 30,
        ease: "power2.out",
      });
    });

    return () => {
      ease.kill();
      indicator.kill();
      show.kill();
    };
  });
  return (
    <div
      id="hero"
      className="relative border origin-top shadow-2xl shadow-gray-2  min-h-[100lvh] h-full   overflow-hidden flex"
    >
      <div className="absolute   -z-10 -inset-8  select-none object-cover ">
        <div className="bg-gradient-to-b from-transparent to-black/70 absolute h-64 inset-x-0 bottom-5 z-10"></div>
        <Image
          alt=""
          width={6000}
          height={4000}
          quality={100}
          priority
          src="https://images.unsplash.com/photo-1533134486753-c833f0ed4866"
          // src="https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          className="relative bg object-cover w-full h-full"
        />
      </div>
      <div className="relative max-w-6xl flex flex-col pb-[7rem] justify-end flex-1  mx-auto px-6 w-full">
        <Ohjangwon />
        <div className="flex items-center gap-3 px-2">
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
        </div>
      </div>
      <div className="invisible scroll-indicator-container absolute bottom-16 flex text-gray-10 items-center right-6 sm:right-8 gap-2">
        Scroll to explore
        <div className="scroll-indicator"></div>
      </div>
    </div>
  );
};
export default Hero;
