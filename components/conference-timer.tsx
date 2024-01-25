"use client";

import { ConferenceType } from "@/lib/types";
import React, { useEffect, useState } from "react";

export default function ConferenceTimer(
  { conferences }: { conferences: ConferenceType[] },
) {
  const conference = conferences.find((conference) =>
    conference.date && conference.date.startDate > new Date()
  );

  if (!conference || !conference.date) {
    return null;
  }

  return (
    <section>
      <div className="section_container">
        <div className="flex flex-col lg:flex-row items-center bg-gradient-to-r gradient py-4 lg:py-14 lg:pl-12 lg:pr-14 xl:pr-16 2xl:pr-36 rounded-md justify-between">
          <div className="uppercase text-center lg:text-left bg-gradient-to-r from-gray-900 to-gray-600 bg-clip-text text-transparent">
            <h2 className="text-base xl:text-xl">Next Conference</h2>
            <h2 className="text-2xl lg:text-3xl xl:text-4xl font-bold leading-none">
              {conference.title}
            </h2>
            <h3 className="text-base xl:text-xl">
              {conference.venue}
            </h3>
          </div>
          <Timer date={conference.date.startDate} />
        </div>
      </div>
    </section>
  );
}

function Timer({ date }: { date: Date }) {
  const [days, setDays] = useState(0);
  const [hours, setHours] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(0);

  useEffect(() => {
    const target = new Date(date);
    const interval = setInterval(() => {
      const now = new Date();
      const difference = target.getTime() - now.getTime();

      const d = Math.floor(difference / (1000 * 60 * 60 * 24));
      setDays(d);
      const h = Math.floor(
        (difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60),
      );
      setHours(h);
      const m = Math.floor(
        (difference % (1000 * 60 * 60)) / (1000 * 60),
      );
      setMinutes(m);
      const s = Math.floor(
        (difference % (1000 * 60)) / 1000,
      );
      setSeconds(s);
    }, 1000);
    return () => clearInterval(interval);
  }, [date]);

  return (
    <div className="flex gap-4 lg:gap-8 text-center mt-4 lg:mt-0 bg-gradient-to-l from-gray-900 to-gray-600 bg-clip-text text-transparent">
      <div>
        <h2 className="text-2xl lg:text-4xl xl:text-5xl font-bold">
          {days}
        </h2>
        <h3 className="-mt-2">Days</h3>
      </div>
      <div>
        <h2 className="text-2xl lg:text-4xl xl:text-5xl font-bold">
          {hours}
        </h2>
        <h3 className="-mt-2">Hours</h3>
      </div>
      <div>
        <h2 className="text-2xl lg:text-4xl xl:text-5xl font-bold">
          {minutes}
        </h2>
        <h3 className="-mt-2">Minutes</h3>
      </div>
      <div>
        <h2 className="text-2xl lg:text-4xl xl:text-5xl font-bold">
          {seconds}
        </h2>
        <h3 className="-mt-2">Seconds</h3>
      </div>
    </div>
  );
}