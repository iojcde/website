import { ArrowRight, ExternalLink } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { Stack } from "./stack";
import Hero from "../hero";
import DevbenchLogo from "@/components/devbench-logo";
import GitHubLogo from "@/components/github-logo";
import Experience from "@/components/experience";

export default function Home() {
  return (
    <main className="pb-24">
      <Hero />
      <div className="grid lg:grid-cols-5 items-stretch gap-6 lg:px-6 max-w-7xl mx-auto">
        <div className="p-10 col-span-2 bg-gray-2 dark:shadow-gray-3 shadow-lg rounded-2xl w-full ">
          <h2 className="text-2xl font-semibold font-display">Past Work</h2>
          <h3 className="mt-4 font-medium font-display text-gray-11">
            Projects
          </h3>
          <div className="flex items-center gap-8 mt-3">
            <img
              src="https://vignetteapp.org/cdn-cgi/image/width=512,format=auto/images/logo-dark.png"
              className=" h-8 dark:block hidden"
            />
            <img
              src="https://vignetteapp.org/cdn-cgi/image/width=512,format=auto/images/logo.png"
              className=" h-8 dark:hidden block"
            />
            <DevbenchLogo />
          </div>
          <h2 className="mt-10 font-medium font-display text-gray-11">
            Open Source Contributions
          </h2>
          <div className="mt-3 space-y-3 text-sm flex flex-col">
            <Link
              className="  no-underline repo"
              href="https://github.com/partykit/partykit"
            >
              <GitHubLogo /> partykit/partykit
              <ExternalLink size={12} />
            </Link>
            <Link
              className="no-underline repo"
              href="https://github.com/liveduo/destack"
            >
              <GitHubLogo /> liveduo/destack
              <ExternalLink size={12} />
            </Link>
            <Link
              className="no-underline repo"
              href="https://github.com/OpenAnnePro/qmk_firmware"
            >
              <GitHubLogo />
              openannepro/qmk_firmware <ExternalLink size={12} />
            </Link>
            <Link
              className="no-underline repo"
              href="https://github.com/blitz-js/blitz"
            >
              <GitHubLogo />
              blitz-js/blitz <ExternalLink size={12} />
            </Link>
            <Link
              className="no-underline repo"
              href="https://github.com/withastro/docs"
            >
              <GitHubLogo />
              withastro/docs <ExternalLink size={12} />
            </Link>
          </div>
          <div className="text-gray-11 mt-4"> + much more...</div>
        </div>
        <Link
          href=""
          className="block lg:col-span-3 w-full min-h-[28rem] shadow rounded-2xl relative overflow-clip group"
        >
          <Image
            fill
            alt=""
            className="object-cover w-full h-full group-hover:brightness-50 transition"
            src="/devbench.png"
          />

          <div className="group-hover:opacity-100 opacity-0 transition absolute bottom-0 left-0 flex items-center justify-center p-8  ">
            <div>
              <span className="text-gray-11">Featured Project</span>
              <h2 className="text-4xl font-display font-semibold">Devbench</h2>
            </div>
          </div>
        </Link>
      </div>
      <div className=" container  mt-24    rounded-2xl">
        <h1 className="text-3xl font-display font-semibold">About Me</h1>
        <p className="mt-6 text-gray-11 prose prose-invert text-balance">
          I&apos;m a developer and designer based in Seoul, South Korea. I enjoy
          crafting digital experiences and solving problems with technology.
          <br />
          <br />
          I&apos;m currently a student at Dankook University Affiliated Software
          Highschool.
        </p>
        <Link
          href="/about"
          className="px-5 font-semibold hover:bg-gray-12/90 transition rounded-full  bg-gray-12 inline-block mt-6 text-gray-1 py-2"
        >
          Learn more &rarr;
        </Link>
      </div>
      <div className="container mt-24 flex flex-col space-y-6  p-6 py-8  ">
        <div className="font-semibold text-2xl font-display">
          Let&apos;s work together and make something great.
        </div>
        <Link
          href="mailto:io@jcde.xyz"
          className="no-underline bg-gray-5 flex items-center gap-2 max-w-fit  text-gray-12 transition hover:bg-gray-6 rounded-full px-6 py-2 border"
        >
          Contact <ArrowRight />
        </Link>
      </div>
    </main>
  );
}
