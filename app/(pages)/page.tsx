import { ArrowRight, ExternalLink } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { Stack } from "./stack";
import Hero from "../hero";
import DevbenchLogo from "@/components/devbench-logo";
import GitHubLogo from "@/components/github-logo";

export default function Home() {
  return (
    <main className="pb-24">
      <Hero />
      <div className="container">
        <div className="text-light mt-12 ">
          <h1 className="text-5xl text-balance  leading-[1.1] font-display">
            Helping founders and creators build products that matter.
          </h1>
        </div>

        <div className="py-48">
          <h2 className="text-4xl font-semibold font-display">Past Works</h2>
          <h3 className="mt-4 text-lg font-medium font-display text-gray-11">
            Projects
          </h3>
          <div className="flex items-center gap-8 mt-3">
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
          <h1 className="text-4xl font-display font-medium">About Me</h1>
          <p className="mt-6 text-gray-11 text-balance">
            I&apos;m a developer and designer based in Seoul, South Korea. I
            specialize in designing and building digital products that are
            delightful to use and easy to maintain.
          </p>
        </div>

        <div className="py-16 mt-32">
          <h2 className="text-4xl font-display">Experience</h2>
          <table className="mt-6 text-sm text-gray-11 prose prose-xl prose-invert prose-neutral max-w-none w-full">
            <tbody>
              <tr>
                <td>2023 - Present</td>
                <td>
                  <a href="https://dankook.sen.hs.kr">
                    Dankook University Affiliated Software Highschool
                  </a>
                </td>
                <td> Student</td>
              </tr>
              <tr>
                <td>2020 - Present</td>
                <td>
                  <a href="https://devbench.kr">DevBench</a>
                </td>
                <td> Web Designer & Moderator</td>
              </tr>
              <tr>
                <td>2021 - Present</td>
                <td>
                  <a href="https://vignetteapp.org">Vignette</a>
                </td>
                <td> Maintainer & Community Moderator</td>
              </tr>
              <tr>
                <td>2021 - 2023</td>
                <td>
                  <a href="http://gifted.snu.ac.kr/">
                    SNU Science Education Institute for Gifted
                  </a>
                </td>
                <td> Graduate</td>
              </tr>
              <tr>
                <td>2019 - 2020</td>
                <td>
                  <a href="https://talented.snue.ac.kr/">
                    SNUE Software Gifted Education Center
                  </a>
                </td>
                <td> Graduate</td>
              </tr>
            </tbody>
          </table>

          <h2 className="mt-16 text-4xl font-display">Awards</h2>
          <table className="mt-6 text-sm text-gray-11 prose prose-xl prose-invert prose-neutral max-w-none w-full">
            <tbody>
              <tr>
                <td>2022</td>
                <td>
                  <a href="https://www.clawar.org/icres2022/">ICRES</a> Student
                  Discussion Competition - Bronze Medalist
                </td>
              </tr>
              <tr>
                <td>2019</td>
                <td>Samsung Junior Software Cup - Finalist</td>
              </tr>
            </tbody>
          </table>
        </div>
        <Stack />
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
      </div>
    </main>
  );
}

export const metadata = {
  title: "Jeeho Ahn - Developer + Designer",
  description: "Interdisciplinary developer. Visionary designer.",
};
