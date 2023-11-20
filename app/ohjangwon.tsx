"use client";

import Image from "next/image";
import { useEffect } from "react";
import { gsap } from "@/lib/gsap";
const Ohjangwon = () => {
  const tl = gsap.timeline();
  useEffect(() => {
    var pattern = [
      "ArrowUp",
      "ArrowUp",
      "ArrowDown",
      "ArrowDown",
      "ArrowLeft",
      "ArrowRight",
      "ArrowLeft",
      "ArrowRight",
      "b",
      "a",
    ];
    var current = 0;

    var keyHandler = async function (event: any) {
      // If the key isn't in the pattern, or isn't the current key in the pattern, reset
      if (pattern.indexOf(event.key) < 0 || event.key !== pattern[current]) {
        current = 0;
        return;
      }

      // Update how much of the pattern is complete
      current++;

      // If complete, alert and reset
      if (pattern.length === current) {
        current = 0;

        await tl.to(".ohjangwon", {
          autoAlpha: 1,
        });

        await tl.to(".ohjangwon", {
          scale: 3,
          duration: 1,
          rotate: 0,
          right: "15%",
        });
      }
    };

    // Listen for keydown events
    document.addEventListener("keydown", keyHandler, false);

    () => {
      document.removeEventListener("keydown", keyHandler, false);
      tl.kill();
    };
  }, []);

  return (
    <>
      <img
        src="/oh.png"
        alt=""
        className="invisible ohjangwon object-scale-down scale-x-[300] h-40 absolute bottom-0 right-0 rotate-180 -z-10"
      />
    </>
  );
};
export default Ohjangwon;
