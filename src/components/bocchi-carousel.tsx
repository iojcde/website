import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
const BocchiCarousel = () => (
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
      </CarouselContent>
    </div>
    <CarouselPrevious />
    <CarouselNext />
  </Carousel>
);

export default BocchiCarousel;
