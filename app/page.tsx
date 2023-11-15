import { ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { Stack } from "./stack";

export default function Home() {
  return (
    <main className="container py-24">
      <h2 className="text-white tracking-tight text-4xl font-semibold max-w-[34ch]">
        Interdisciplinary developer.
      </h2>
      <h2 className="mt-1 text-white tracking-tight text-4xl font-semibold max-w-[34ch]">
        Visionary designer.
      </h2>

      <div className="bg-gray-3  max-w-fit border rounded-full flex gap-3 text-sm items-center px-4 py-1 mt-8 text-gray-11">
        <div className="dot bg-green-500 w-2 h-2 rounded-full" /> Available for
        freelance work
      </div>

      <p className="text-gray-11 text-lg mt-16">
        I&apos;m a designer and developer based in Seoul. With a keen eye for
        design and a passion for coding, I work to create digital solutions that
        are both visually compelling and technically robust.
      </p>

      <Image priority
        src="/designs.png"
        alt=""
        width={931}
        height={585}
        className="mt-8 rounded-xl"
        quality={100}
      />

      <Stack />

      <p className="text-gray-11 text-lg mt-16">
        With my multidisciplinary skills, I work closely with clients to bring
        their digital vision to life. Whether you&apos;re a startup or an
        established brand, I can create a web experience that connects with your
        audience and helps your business grow.
      </p>

      <div className=" mt-12 flex flex-col space-y-6 border rounded-xl p-6 py-8 bg-gray-2">
        <div className="font-semibold text-3xl">
          Let&apos;s work together and make something great.
        </div>
        <Link
          href="/"
          className="bg-gray-5 flex items-center gap-2 max-w-fit  text-gray-12 transition hover:bg-gray-6 rounded-full px-6 py-2 border"
        >
          Contact <ArrowRight />
        </Link>
      </div>
      <div></div>
    </main>
  );
}
