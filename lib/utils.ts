import { ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}
export const lerp = (a: number, b: number, n: number) => {
  return a * (1 - n) + b * n;
};

export const bounds = (el: HTMLElement) => {
  const bounds = el.getBoundingClientRect();

  return {
    bottom: bounds.bottom,
    left: bounds.left,
    height: bounds.height,
    right: bounds.right,
    top: bounds.top,
    width: bounds.width,
    x: bounds.x,
    y: bounds.y,
  };
};