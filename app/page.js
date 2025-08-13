import Footer from "@/components/layouts/Footer";
import { Header } from "@/components/layouts/Header";
import { Hero } from "@/components/layouts/Hero";
import AudioMaterial from "@/components/sections/AudioMaterial";
import Booking from "@/components/sections/Booking";
import LightingMaterial from "@/components/sections/LightingMaterial";
import Music from "@/components/sections/Music";
import Photobooth from "@/components/sections/Photobooth";
import ProjectionMaterial from "@/components/sections/ProjectionMaterial";
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
      <AudioMaterial />
      <LightingMaterial />
      <ProjectionMaterial />
      <Booking />
      <Testimonial />
      <Footer />
    </>
  );
}
