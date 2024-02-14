import { Github } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
const Nav = () => {
  return (
    <nav className=" px-6 py-6 lg:px-20 w-full lg:pt-12 flex items-center justify-between">
      <Link href="/" className="font-semibold">
        Jeeho Ahn
      </Link>

      <div className="flex gap-6 items-center text-sm">
        <Link href="/about">About</Link>
        <Link href="/contact">Contact</Link>
      </div>
    </nav>
  );
};

export default Nav;
