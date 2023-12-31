import React from "react";
import Image from "next/image";

export default function OurPurpose() {
  return (
    <section className="pt-8 lg:pt-12">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="relative h-full hidden sm:block">
            <span className="w-60 h-96 absolute bottom-0 left-0 bg-slate-600 rounded-sm" />
            <div className="absolute top-0 right-0 h-[90%] w-[90%]">
              <div className="relative h-full overflow-hidden">
                <Image
                  src="/assets/images/image_purpose.webp"
                  fill
                  alt="Indigenous Health Conference"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  className="object-cover rounded-sm hover:scale-110 transition-all duration-500"
                />
              </div>
            </div>
          </div>
          <div className="xl:py-20">
            <h3
              style={{ fontFamily: "Abril Fatface" }}
              className="w-fit text-3xl lg:text-4xl mb-4 uppercase font-bold tracking-tight text-orange-500/90 text-right"
            >
              Our Purpose
            </h3>
            <p className="mb-2 text-justify text-slate-800/80">
              At ICS, we are unwavering in our belief that education serves as a
              powerful catalyst for driving positive change. Our dedicated
              mission revolves around advancing Indigenous health and
              independence while actively contributing to closing the gap
              through private enterprise and strategic partnerships. We
              specialize in funding conferences in close collaboration with
              community organizations, liberating them from the need for
              government funding and enabling them to address the specific
              issues critical to their mission. Every conference organized by
              ICS places a paramount emphasis on public interest and steadfastly
              upholds grassroots principles, furthering the cause of Indigenous
              health.
            </p>
            <p className="text-justify text-slate-800/80">
              At the heart of our company lies our profound commitment to our
              people and Indigenous culture. The ICS team is deeply immersed in
              First Nations affairs, both professionally and personally,
              embodying our passion for this cause. Over the years, we have
              cultivated a seasoned Indigenous Conference Management team with a
              rich history of organizing numerous events, spanning from intimate
              conferences to expansive festivals, both in Australia and
              internationally. Our comprehensive event services encompass every
              facet, including marketing and complimentary venue sourcing, all
              aimed at providing robust support to our valued community
              organizations in their pursuit of advancing Indigenous health and
              independence.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
