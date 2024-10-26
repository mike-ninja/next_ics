import {
  Announcement,
  CallToAction,
  HomeCarousel,
  HomeConference,
  HomeHighlight,
  InstagramBanner,
  HomeAcknowledgement,
  HomeHeader,
  SubscribeEmailList,
  HomeTestimonial,
  HomeConferences,
  SharedNavbar,
} from "@/components";
import { draftMode } from "next/headers";
import { parserConferenceEntry } from "@/contentful/utils";
import { Conference } from "@/contentful/services/conferences";

export async function generateStaticParams() {
  const conferenceInstance = new Conference({
    preview: false,
    parser: parserConferenceEntry,
  });

  return await conferenceInstance.getConferences();
}

export default async function Home() {
  const conferenceInstance = new Conference({
    preview: draftMode().isEnabled,
    parser: parserConferenceEntry,
  });

  const conferences = await conferenceInstance.getConferences();

  return (
    <>
      <HomeAcknowledgement />
      <SharedNavbar />
      <HomeHeader />
      <Announcement />
      {/* <HomeConference conferences={conferences} /> */}
      <HomeConferences conferences={conferences} />
      <InstagramBanner />
      <HomeCarousel />
      <HomeHighlight />
      <HomeTestimonial />
      <CallToAction />
      <SubscribeEmailList />
    </>
  );
}
