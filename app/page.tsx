import {
  Announcement,
  CallToAction,
  HomeCarousel,
  HomeConference,
  InstagramBanner,
  IntroModal,
  LandingHeader,
  NavBar,
  SubscribeEmailList,
  Testimonials,
  UpcomingConferences,
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
      <IntroModal />
      <NavBar conferences={conferences} />
      <LandingHeader />
      <Announcement />
      <HomeConference conferences={conferences} />
      <UpcomingConferences conferences={conferences.slice(1)} />
      <InstagramBanner />
      <HomeCarousel />
      <Testimonials />
      <CallToAction />
      <SubscribeEmailList />
    </>
  );
}
