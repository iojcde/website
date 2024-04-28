import Image from "next/image";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Link from "next/link";
import DevbenchLogo from "@/components/ui/DevbenchLogo";

export default function Home() {
  return (
    <main>
      <div className="flex flex-wrap  items-center mt-4 justify-between">
        <div>
          <h1 className="text-4xl  font-bold mt-12   ">Jeeho Ahn</h1>
          <span className="inline-block ml-1 text-gray-11">
            Designer  Developer
          </span>
        </div>

        <div className="flex md:flex-col pt-4 md:items-end font-display text-xl gap-3 font-medium">
          <Link href="/">Home</Link>
          <Link className="text-gray-10" href="/projects">
            Projects
          </Link>
          <Link className="text-gray-10" href="/blog">
            Blog
          </Link>
        </div>
      </div>
      <p className="mt-16 text-lg text-balance max-w-prose leading-relaxed w-2/3 ">
        I&apos;m a developer and designer based in Seoul, South Korea. I enjoy
        crafting digital experiences and solving problems with technology.
        I&apos;m currently a student at Dankook University Software Highschool.
        <br />
        <br />
        Check out my works below:
      </p>
      <Link
        href="/projects/vignette"
        className="mt-24 hover:opacity-80 transition gap-4 lg:gap-12 grid lg:grid-cols-3"
      >
        <div className="flex flex-col gap-3">
          <div className="w-12 h-0.5 mb-1 border-b border-gray-11" />
          <div className="text-gray-10">Featured Project</div>
          <h3 className="text-3xl md:text-4xl  font-semibold">Vignette</h3>
          <div className="mt-2 text-base font-normal text-gray-11 ">
            Design, Web, Infrastructure, i18n
          </div>
        </div>
        <img
          src="https://io.jcde.xyz/images/screenshot/vignette.png"
          className="   transition object-cover h-96 rounded-md col-span-2"
        />
      </Link>
      <div className="py-24">
        {" "}
        <h2 className="text-2xl font-medium mt-8">Kitar Iguyo</h2>
        <p className="text-xl  ">omg it kitar</p>
        <Carousel className="w-full max-w-2xl mt-4 ">
          <div className="rounded-xl border overflow-hidden relative">
            <CarouselContent className="p-2 select-none ">
              <CarouselItem>
                <img
                  src="https://pbs.twimg.com/media/GLoHo5PXAAAz6mu.png"
                  className="w-full"
                />
              </CarouselItem>
              <CarouselItem>
                <img
                  src="https://pbs.twimg.com/media/GLciaT5XoAAido7.png"
                  className="w-full"
                />
              </CarouselItem>
              <CarouselItem>
                <img
                  src="https://pbs.twimg.com/media/GG4SJClWYAAk3ok.png"
                  className="w-full"
                />
              </CarouselItem>
              <CarouselItem>
                <img
                  src="https://pbs.twimg.com/media/GMARGpzWMAAwXkI.png"
                  className="w-full"
                />
              </CarouselItem>
            </CarouselContent>{" "}
          </div>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </div>{" "}
    </main>
  );
}
