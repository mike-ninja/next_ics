import React from "react";
import RichText from "../rich-text-elements/rich-text";
import { EventType } from "@/lib/types";
import {
  BenefitsForEmployer,
  CallingForPapers,
  ContactUs,
  EventAcknowledgement,
  GuestSpeakers,
  Registration,
  SponsoringTheConference,
  WhyAttend,
} from "./event-static-text";

export default function EventContent({ event }: { event: EventType }) {
  return (
    <>
      <EventAcknowledgement />
      <RichText document={event.content} />
      <WhyAttend />
      <BenefitsForEmployer />
      <CallingForPapers />
      <GuestSpeakers />
      <Registration />
      <SponsoringTheConference />
      <ContactUs />
    </>
  );
}
