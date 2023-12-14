import Image from "next/image";
import React from "react";

export default function Announcement() {
  return (
    <section>
      <div className="container">
        <div className="relative h-8 md:h-10 xl:h-12 my-1 md:my-3 rounded-lg overflow-hidden">
          <Image
            src="/assets/images/art-bg.svg"
            alt="divider"
            fill
            className="object-cover opacity-40 grayscale"
          />
        </div>
      </div>
    </section>
  );
}
