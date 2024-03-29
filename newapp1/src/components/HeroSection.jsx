'use client';
import React, { useEffect } from 'react';
import { TypeAnimation } from 'react-type-animation';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';
import { slider1, slider2, slider3 } from '@/utils';
import Image from 'next/image';
import { gsap } from 'gsap';
import { useGSAP } from '@gsap/react';

function HeroSection() {
  const slidderImg = [slider1, slider2, slider3];
  useGSAP(() => {});
  return (
    <>
      <div
        className=" relative top-24 md:p-14 p-12  h-[100vh] shadow-2xl"
        id=""
      >
        <Carousel>
          <CarouselContent>
            {slidderImg.map((img, i) => (
              <CarouselItem className="text-3xl" key={i}>
                <Image
                  src={img}
                  alt="image"
                  width={500}
                  height={400}
                  className="md:w-full md:h-[500px] h-[200px] object-cover rounded-lg"
                />
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </div>
    </>
  );
}

export default HeroSection;
