import Image from "next/image";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import Link from 'next/link'
import DevbenchLogo from "@/components/ui/DevbenchLogo";

export default function Home() {
  return (
    <main >

      <div className="flex flex-wrap  items-center mt-4 justify-between">
        <h1 className="text-5xl lg:text-6xl  font-bold mt-12   ">
          Jeeho Ahn
        </h1>


        <div className="flex md:flex-col pt-4 md:items-end font-display text-xl gap-3 font-medium">
          <Link href="/">
            Home
          </Link>
          <Link className='text-gray-10' href='/projects'>
            Projects
          </Link>
          <Link className='text-gray-10' href='/blog'>Blog</Link>
        </div>
      </div>

      <p className="mt-16 text-xl text-balance max-w-prose leading-relaxed  ">
        I'm a developer and designer based in Seoul, South Korea. <br />I enjoy crafting digital experiences and solving problems with technology.<br />

        I'm currently a student at Dankook University Software Highschool.
        <br /><br />Check out my works below:
      </p>

      <div className="mt-20 gap-4 lg:gap-12 grid lg:grid-cols-2">
        <img src='https://io.jcde.xyz/images/screenshot/vignette.png' className=" object-cover h-80" />
        <div>
          <div className="w-12 h-0.5 border-b border-gray-11" />
          <div className="mt-4 text-gray-10">Featured Project</div>
          <h3 className="mt-4 text-3xl md:text-4xl  font-semibold">
            Vignette 
                    </h3><div className="mt-4 text-base font-normal text-gray-11 ">Design, Web, Infrastructure</div>


          <Link href="/projects/devbench" className="block mt-6 text-lg"> View Project  &rarr;
          </Link>


        </div>
      </div>
 


      <div className="py-24">   <h2 className="text-2xl font-medium mt-8">
        Kitar Iguyo
      </h2>
        <p className="text-xl  ">
          omg it kitar
        </p>
        <Carousel className="w-full max-w-2xl mt-4 ">
          <div className="rounded-xl border overflow-hidden relative">
            <CarouselContent className="p-2 select-none ">
              <CarouselItem>
                <img src="https://pbs.twimg.com/media/GLoHo5PXAAAz6mu.png" className="w-full" /></CarouselItem>
              <CarouselItem>
                <img src="https://pbs.twimg.com/media/GLciaT5XoAAido7.png" className="w-full" /></CarouselItem>
              <CarouselItem>
                <img src="https://pbs.twimg.com/media/GG4SJClWYAAk3ok.png" className="w-full" /></CarouselItem>
              <CarouselItem>

                <img src="https://pbs.twimg.com/media/GMARGpzWMAAwXkI.png" className="w-full" />
              </CarouselItem>
            </CarouselContent> </div>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>

      </div>    </main>
  );
}
