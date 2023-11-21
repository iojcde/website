"use client";

import { ReactNode, useEffect, useRef } from "react";

import { LenisInstance, Lenis as ReactLenis, useLenis } from "@studio-freight/react-lenis";
// @ts-ignore
import { gsap } from "@/lib/gsap";

export const LenisProvider = ({ children }: { children: ReactNode }) => {
  const lenisRef = useRef<LenisInstance>(null);

  useEffect(() => {
    function update(time: number) {
      lenisRef.current?.raf(time * 1000);
    }

    gsap.ticker.add(update);

    gsap.utils.toArray(".appear").forEach((box) => {
      gsap.fromTo(
        box as Element,
        {
          autoAlpha: 0,
          y: 30,
        },
        {
          scrollTrigger: {
            trigger: box as Element,
            once: true,
          },
          duration: 1,
          autoAlpha: 1,
          y: 0,
        }
      );
    });

    return () => {
      gsap.ticker.remove(update);
    };
  }, []);

  return (
    <ReactLenis ref={lenisRef} autoRaf={false} root>
      {children}
    </ReactLenis>
  );
};
