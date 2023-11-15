"use client";

import { useEffect, useRef } from "react";
import { useWindowSize } from "@/hooks/use-window-size";
import { gsap } from "gsap";
import { useMedia } from "react-use";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);
export function Parallax({
  className,
  children,
  speed = 1,
  id = "parallax",
  enabled = false,
  position,
  ifWide = true,
}: {
  className?: string;
  children?: any;
  speed?: number;
  enabled?: boolean;
  id?: string;
  ifWide?: boolean;
  position?: string;
}) {
  const isWide = useMedia("(min-width: 768px)", false);
  if (ifWide) {
    enabled = enabled || isWide;
  }
  const trigger = useRef(null);
  const target = useRef(null);

  const { width: windowWidth } = useWindowSize();

  useEffect(() => {
    let timeline: gsap.core.Timeline;
    if (enabled) {
      const y = windowWidth * speed * 0.1;

      const setY = gsap.quickSetter(target.current, "y", "px");
      const set3D = gsap.quickSetter(target.current, "force3D");

      timeline = gsap.timeline({
        scrollTrigger: {
          id: id,
          trigger: trigger.current,
          scrub: true,
          start: "top bottom",
          end: "bottom top",
          onUpdate: (e) => {
            if (position === "top") {
              setY(e.progress * y);
            } else {
              setY(-gsap.utils.mapRange(0, 1, -y, y, e.progress));
            }

            set3D(e.progress > 0 && e.progress < 1);
          },
        },
      });
    }

    return () => {
      timeline?.kill();
    };
  }, [id, speed, position, windowWidth]);

  return (
    <div ref={trigger}>
      <div ref={target} className={className}>
        {children}
      </div>
    </div>
  );
}
