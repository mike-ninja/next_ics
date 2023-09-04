import Link from "next/link";
import React from "react";
import IcsFounders from "@/public/assets/images/ics-founders.webp";
import ImageFrame from "../common/ImageFrame";

export default function About() {
  return (
    <section>
      <div className="container">
        <div className="grid grid-cols-1 sm:grid-cols-2">
          <div className="flex flex-col justify-center order-1 sm:order-none relative">
            <h2 className="section_header text-blue-400/80 text-center sm:text-left">
              About ICS
            </h2>
            <h3 className="-mt-2 sm:-mt-4 text-[0.7rem] sm:text-xl uppercase text-stone-400 text-center sm:text-left mb-2">
              Indigenous Conference Services
            </h3>
            <p className="mb-12 sm:mb-16">
              ICS is an Indigenous-owned company operating independently and
              without government funding. They prioritize First Nations culture
              and self-determination. With a skilled team, they manage various
              events for community organizations, focusing on promoting
              Indigenous identity, education, and partnerships. By funding
              conferences through partnerships, they avoid government funding
              and support agenda customization.

              CEO Tom Callaghan specializes in working with NGOs and
              governments. Their conferences facilitate positive information
              sharing, cooperation, and discussions, emphasizing face-to-face
              networking for empowerment and community enhancement.
            </p>
            <Link
              href="/"
              className="btn effects bg-stone-600 text-white/90 absolute bottom-0 sm:bottom-4 left-1/2 -translate-x-1/2 sm:left-0 sm:translate-x-0"
            >
              Read More
            </Link>
          </div>
          <ImageFrame
            img={IcsFounders}
            alt="random-alt"
            position="50% 20%"
            bg="rgba(255, 222, 61, 1)"
          />
        </div>
      </div>
    </section>
  );
}
