"use client";
import { gsap } from "@/lib/gsap";
import Image from "next/image";
import { useEffect } from "react";

import { SplitText } from "@/lib/splitText.js";
import { Loader2 } from "lucide-react";
const Loader = () => {
  useEffect(() => {
    const text = document.querySelector(".loader .name");
    const splittedText = new SplitText(text);

    const pageAccessedByReload =
      (window.performance.navigation &&
        window.performance.navigation.type === 1) ||
      window.performance
        .getEntriesByType("navigation")
        .map((nav) => nav.entryType)
        .includes("reload");

    const eases = gsap.context(async () => {
      if (pageAccessedByReload) {
        gsap.to(".loader", {
          autoAlpha: 0,
          delay: 0.5,
          duration: 0.5,
          ease: "power3.out",
        });
        return;
      }
      gsap.fromTo(
        splittedText.chars,
        { autoAlpha: 0 },
        { autoAlpha: 1, stagger: 0.04 }
      );
      gsap.to(".loader .progress", {
        scaleX: 1,
        duration: 2,
        ease: "power2.in",
        onComplete: () => {
          gsap.to(".loader", {
            autoAlpha: 0,
            delay: 0.5,
            duration: 0.5,
            ease: "power3.out",
          });
        },
      });
      await gsap.to(".loader .name", {
        autoAlpha: 1,
        duration: 1,
        scale: 1,
        ease: "power3.out",
      });
    });

    return () => eases.kill();
  }, []);
  return (
    <div
      id="loader"
      className=" bg-black  loader fixed inset-0 z-[100] flex items-center justify-center"
    >
      <div className="space-y-8 flex flex-col w-[30rem] text-white">
        <div className="text-white text-center text-3xl  sm:text-5xl font-extrabold name origin-center invisible scale-[0.8]">
          Jeeho Ahn.
        </div>
      </div>
      <div className="absolute bottom-16 text-lg left-8 flex gap-2 items-center text-gray-10">
        {" "}
        Loading <Loader2 className="animate-spin" size={20} />
      </div>

      <div className="progress absolute  inset-x-0 bottom-0 origin-left bg-white h-12 w-screen scale-x-0"></div>
    </div>
  );
};

export default Loader;
