"use client";
import React from "react";
import { advantages } from "@/lib/data";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";

export default function Advantages() {
  const [emblaRef] = useEmblaCarousel({ loop: true }, [Autoplay()]);

  return (
    <section>
      <div className="container bg-advantages_background bg-cover bg-center bg-fixed rounded-xl py-7 w-[95%] sm:px-12">
        <div className="bg-rain/40 rounded-xl p-2 sm:p-5 flex flex-col">
          <h2 className="section_header text-night text-center pb-3">
            Become&nbsp;part&nbsp;of&nbsp;ICS
          </h2>
          <div ref={emblaRef} className="overflow-hidden sm:-mt-1">
            <div className="flex">
              {advantages.map((advantage, index) => (
                <div key={index} className="flex-grow flex-shrink-0 w-full">
                  <h3 className="capitalize font-semibold text-hibiscus text-center text-[1rem] sm:text-2xl">
                    {advantage.header}
                  </h3>
                  <p className="text-center text-[0.7rem] sm:text-xl text-night/90">
                    {advantage.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
