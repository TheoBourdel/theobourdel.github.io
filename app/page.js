import Footer from "@/components/layouts/Footer";
import { Header } from "@/components/layouts/Header";
import { Hero } from "@/components/layouts/Hero";
import Booking from "@/components/sections/Booking";
import Materials from "@/components/sections/Materials";
import Music from "@/components/sections/Music";
import Photobooth from "@/components/sections/Photobooth";
import Testimonial from "@/components/sections/Testimonial";
import TimeLine from "@/components/sections/TimeLine";

export default function Home() {
  return (
    <>
      <Header />
      <Hero />
      <TimeLine />
      <Music />
      <Photobooth />
      <Materials />
      <Booking />
      <Testimonial />
      <Footer />
    </>
  );
}
