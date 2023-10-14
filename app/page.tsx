import {
  About,
  CallToAction,
  Header,
  SubscribeEmailList,
  UpcomingEvents,
} from "@/components";

import {
  fetchConferences,
  //   fetchConferencesEvents,
} from "@/contentful";

export default async function Home() {
  const conferences = await fetchConferences({ preview: false });

  console.log(conferences);

  return (
    <>
      <Header conferences={conferences} />
      <About />
      <UpcomingEvents conferences={conferences} />
      <CallToAction />
      <SubscribeEmailList />
    </>
  );
}
