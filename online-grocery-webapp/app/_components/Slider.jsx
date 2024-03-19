import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';
import Image from 'next/image';

function Slider({ sliderList }) {
  return (
    <>
      <Carousel>
        <CarouselContent>
          {sliderList.map((sl, i) => (
            <CarouselItem key={i}>
              <Image
                src={
                  process.env.NEXT_PUBLIC_BACKEND_URL +
                  sl?.attributes?.image?.data[0]?.attributes?.url
                }
                alt="slider"
                width={1000}
                height={400}
                className="w-full  h-[200px] md:h-[500px] object-cover rounded-2xl"
              />
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </>
  );
}

export default Slider;
