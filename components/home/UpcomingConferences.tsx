import React from "react";
import ConferenceCards from "./ConferenceCards";
import Link from "next/link";
import { draftMode } from "next/headers";
import { fetchConferencePages } from "@/contentful/services/conferences";

export default async function UpcomingConferences() {
  const conferencePages = await fetchConferencePages({
    preview: draftMode().isEnabled,
  });
  return (
    <section id="conferences">
      <div className="container">
        <h2 className="section_header text-stone-600/80 text-center">
          Upcoming Conferences
        </h2>
        <ConferenceCards conferences={conferencePages} />
      </div>
    </section>
  );
}
