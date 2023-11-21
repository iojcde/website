import { ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { Stack } from "./stack";
import Hero from "../hero";

export default function Home() {
  return (
    <main className="pb-24">
      <Hero />
      <div className="container mt-8 ">
        <div className="tracking-wide text-xl text-center pb-24">
          DEVELOPER <span className="text-gray-11">+</span> DESIGNER BASED IN
          SEOUL
        </div>

        <h1 className="text-4xl appear">About</h1>
        <p className="text-gray-11 appear text-lg mt-8 animate-fade-in">
          I&apos;m a designer and developer based in Seoul. With a keen eye for
          design and a passion for coding, I work to create digital solutions
          that are both visually compelling and technically robust.
        </p>

        <Image
          priority
          src="/designs.png"
          alt=""
          width={931}
          height={585}
          className="mt-8 appear rounded-xl "
          quality={100}
        />

        <p className="text-gray-11 text-lg mt-16">
          With my multidisciplinary skills, I work closely with clients to bring
          their digital vision to life. Whether you&apos;re a startup or an
          established brand, I can create a web experience that connects with
          your audience and helps your business grow.
        </p>
        <div className="py-16">
          <h1 className="text-4xl appear">Experience</h1>
          <ul className="space-y-3 mt-6 text-gray-11">
            <li className="appear">
              <a href="https://dankook.sen.hs.kr">
                Dankook University Affiliated Software Highschool
              </a>{" "}
              - Student
            </li>

            <li className="appear">
              <a href="https://devbench.kr">DevBench</a> - Web Designer &
              Moderator
            </li>
            <li className="appear">
              <a href="https://vignetteapp.org">Vignette</a> - Maintainer &
              Community Moderator
            </li>
            <li className="appear">
              <a href="http://gifted.snu.ac.kr/">
                SNU Science Education Institute for Gifted
              </a>
              {` `}- Graduate
            </li>
            <li className="appear">
              <a href="https://talented.snue.ac.kr/">
                SNUE Software Gifted Education Center
              </a>{" "}
              - Graduate
            </li>
            <li className="appear">
              2019 Samsung Junior Software Cup - Finalist
            </li>
            <li className="appear">
              2022 ICRES Student Discussion Competition - Bronze Medalist
            </li>
          </ul>
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
