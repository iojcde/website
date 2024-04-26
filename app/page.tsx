import Image from "next/image";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import Link from 'next/link'

export default function Home() {
  return (
    <main className="max-w-4xl mx-auto mt-16">
  
<div className="flex justify-between">
<h1 className="text-5xl lg:text-6xl  font-bold  tracking-tight">
    i like bread 
  </h1>
  
  <div className="grid font-display text-xl gap-2">
  <Link href="/">
            home
        </Link>
        <Link href='/projects'>
        projects
        </Link>
        <Link href='/blog'>blog</Link>
  </div>
  </div>

  <p className="mt-16">
    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam nec
    purus ut dolor ultricies ultricies. Nunc nec ligula auctor, scelerisque
    nunc sit amet, ultrices justo. Nullam nec purus ut dolor ultricies
    ultricies. Nunc nec ligula auctor, scelerisque nunc sit amet, ultrices
    justo. Nullam nec purus ut dolor ultricies ultricies. Nunc nec ligula
    auctor, scelerisque nunc sit amet, ultrices justo.


    </p>





      <h2 className="text-3xl font-medium mt-8">
        Kitar Iguyo
      </h2>
      <p className="text-xl  ">
        omg it kitar
      </p>
      <Carousel className="w-full max-w-2xl mt-4 ">    
      <div className="rounded-xl border overflow-hidden relative">  
        <CarouselContent className="p-2 ">
            <CarouselItem>
              <img src="https://pbs.twimg.com/media/GLoHo5PXAAAz6mu.png" className="w-full" /></CarouselItem>
            <CarouselItem>
              <img src="https://pbs.twimg.com/media/GLciaT5XoAAido7.png"className="w-full" /></CarouselItem>
            <CarouselItem>
              <img src="https://pbs.twimg.com/media/GG4SJClWYAAk3ok.png"className="w-full" /></CarouselItem>
              <CarouselItem>
                
            <img src="https://pbs.twimg.com/media/GMARGpzWMAAwXkI.png" className="w-full"/>
              </CarouselItem>
          </CarouselContent> </div> 
          <CarouselPrevious />
          <CarouselNext />
        </Carousel> 
    </main>
  );
}
