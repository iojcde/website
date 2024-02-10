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
      <div className="container">
        <div className="text-light mt-16   relative">
          <div className="absolute w-14 sm:w-8 h-8 -top-8 sm:-top-6  -left-8 border-t-4 sm:border-l-4 border-red-500" />
          <h1 className="text-3xl font-medium sm:text-5xl text-balance  font-display  leading-[1.1] ">
            Helping founders and creators build products that matter.
          </h1>
        </div>

        <div className="py-48 mt-24">
          <h2 className="text-4xl font-semibold font-display">Past Work</h2>
          <h3 className="mt-4 text-lg font-medium font-display text-gray-11">
            Projects
          </h3>
          <div className="flex items-center gap-16 mt-3">
            <img
              src="https://vignetteapp.org/cdn-cgi/image/width=128,format=auto/images/logo-dark.png"
              className="w-[128px] h-[29px]"
            />
            <DevbenchLogo />
          </div>
          <h2 className="mt-12 text-lg font-medium font-display text-gray-11">
            Open Source Contributions
          </h2>
          <div className="mt-3 space-y-3 flex flex-col">
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

        <div>
          <h1 className="text-4xl font-display font-semibold">About Me</h1>
          <p className="mt-6 text-gray-11 prose prose-invert">
            I&apos;m a developer and designer based in Seoul, South Korea. I
            enjoy crafting digital experiences and solving problems with
            technology.
            <br />
            <br /> I have a variety of interests, including web development,
            design, and open-source software.
          </p>
        </div>

        <div className=" mt-12 flex flex-col space-y-6 border rounded-lg p-6 py-8 bg-gray-2">
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
        <div></div>
      </div>
    </main>
  );
}
