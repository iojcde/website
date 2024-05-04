import React from "react";
import { cn } from "@/lib/utils";

interface Props {
  data: {
    src: string;
    type: string;
    name: string;
    url?: string;
    dark?: boolean;
    date: string;
    height: number;
    width: number;
  };
}

const CraftCard: React.FC<Props> = ({ data }) => (
  <a
    href={data.url}
    className="border border-gray-5 w-full rounded-xl overflow-hidden block relative"
    style={{ aspectRatio: `${data.width}/${data.height}` }}
  >
    {data.type === "video" ? (
      <video
        playsInline
        src={data.src}
        loop
        autoPlay
        muted
        className="object-cover"
      />
    ) : (
      <img
        src={data.src}
        alt={data.name}
        className="w-full h-full object-cover"
      />
    )}
    <div
      className={cn(
        "px-4 pb-3 absolute flex justify-between inset-x-0 bottom-0 text-sm",
        data.dark ? "text-neutral-200" : "text-neutral-800"
      )}
    >
      <div>{data.name}</div>
      <div>{data.date}</div>
    </div>
  </a>
);

export default CraftCard;
