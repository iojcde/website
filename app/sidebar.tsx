"use client";
import Image from "next/image";
import Link from "next/link";
import SidebarLink from "./sidebar-link";
import { BadgeInfo, Home } from "lucide-react";

const Sidebar = () => {
  return (
    <div className="bg-gray-2 text-gray-12 h-screen w-[18rem] border-r px-4 py-6">
      <div className="flex items-center gap-3 px-2">
        <Image
          alt=""
          src="https://avatars.githubusercontent.com/u/31413538?v=4"
          width={40}
          height={40}
          className="rounded-full"
        />
        <div>
          <Link className="font-semibold mt-2 text-lg" href="/">
            Jeeho Ahn
          </Link>
          <div className="text-gray-11 text-xs">Developer • Designer</div>
        </div>
      </div>
      <div className="mt-8 space-y-2">
        <SidebarLink icon={<Home strokeWidth={2.5} size={16} />} href="/">
          Home
        </SidebarLink>
        <SidebarLink
          icon={<BadgeInfo strokeWidth={2.5} size={16} />}
          href="/about"
        >
          About
        </SidebarLink>
      </div>
    </div>
  );
};

export default Sidebar;
