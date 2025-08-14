import React from 'react'
import { Carousel } from '../ui/carousel';

const slideData = [
    {
      title: "Ordinateur pour la projection",
      button: "",
      src: "/projection-4.jpg"
    },
    {
      title: "Cable RCA/Mini-jack",
      button: "",
      src: "/projection-3.jpg"
    },
    {
      title: "Cable HDMI",
      button: "",
      src: "/projection-2.jpg"
    },
    {
      title: "Ecran & Vidéo-projecteur",
      button: "",
      src: "/projection-1.jpg"
    },
    {
      title: "Table de DJ",
      button: "",
      src: "/dj-table.jpg"
    },
    {
      title: "Enceinte QSC",
      button: "",
      src: "/speaker.jpg",
    },
    {
      title: "Microphone",
      button: "",
      src: "/micro.jpg",
    },
    {
      title: "Récepteur numérique",
      button: "",
      src: "/digital-receiver.jpg",
    },
    {
      title: "Émetteur sans fil",
      button: "",
      src: "/wireless-transmitter.jpg"
    },
    {
      title: "Stick Pack d'éclairage LED",
      button: "",
      src: "/lighting-7.jpg"
    },
    {
      title: "Console DMX",
      button: "",
      src: "/lighting-6.jpg"
    },
    {
      title: "Machine à neige carbonique",
      button: "",
      src: "/lighting-5.jpg"
    },
    {
      title: "Lumière de scène",
      button: "",
      src: "/lighting-4.jpg"
    },
    {
      title: "Spot lyre",
      button: "",
      src: "/lighting-3.jpg"
    },
    {
      title: "Projecteur de scène",
      button: "",
      src: "/lighting-2.jpg"
    },
    {
      title: "Barre de LED RGB",
      button: "",
      src:"/lighting-1.jpg"
    },
  ];
function Materials() {
    return (
        <section className="relative overflow-hidden w-full h-full py-20 px-4" id='materials'>
            <Carousel slides={slideData} />
        </section>
    )
}

export default Materials