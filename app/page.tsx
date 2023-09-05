import Header from "@/components/home/Header";
import UpcomingConferences from "@/components/home/UpcomingConferences";
import About from "@/components/home/About";
import Advantages from "@/components/home/Advantages";
import CallToAction from "@/components/common/CallToAction";
import Contact from "@/components/home/Contact";
import Footer from "@/components/common/Footer";

export default async function Home() {

  return (
    <>
      <Header />
      <UpcomingConferences />
      <About />
      <Advantages />
      <CallToAction />
      <Contact />
    </>
  );
}
      // <UpcomingConferences />
      // <About />
      // <Advantages />
      // <CallToAction />
      // <Contact />
