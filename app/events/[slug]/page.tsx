import { draftMode } from "next/headers";
import { notFound } from "next/navigation";
import { EventHeader, RichText } from "@/components";
import { fetchEvent, fetchEvents } from "@/contentful";

type EventPageParams = {
  slug: string;
};
export async function generateStaticParams(): Promise<EventPageParams[]> {
  const eventPages = await fetchEvents({ preview: false });

  return eventPages.map((page) => ({ slug: page.slug }));
}

type EventPageProps = {
  params: EventPageParams;
};
export default async function page({ params }: EventPageProps) {
  const eventPage = await fetchEvent({
    slug: params.slug,
    preview: draftMode().isEnabled,
  });

  if (!eventPage) {
    return notFound();
  }

  return (
    <>
      <EventHeader event={eventPage} />
      <section>
        <div className="container">
          <RichText document={eventPage.content} />
        </div>
      </section>
    </>
  );
}