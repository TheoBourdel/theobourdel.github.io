import React from 'react'
import { MaterialCard } from '../ui/material-card'

function AudioMaterial() {
    const materials = [
  {
    quote:
      "Une table de mixage intuitive, idéale pour les DJ professionnels comme pour les débutants. La qualité sonore est exceptionnelle.",
    name: "Table de mixage DJ",
    designation: "Modèle Pioneer DJM-900NXS2",
    src: "/dj-table.jpg",
  },
  {
    quote:
      "Des enceintes puissantes avec une clarté audio impressionnante, parfaites pour les concerts et les événements en extérieur.",
    name: "Enceinte QSC",
    designation: "QSC K12.2 - 2000W",
    src: "/speaker.jpg",
  },
  {
    quote:
      "Un micro robuste avec une restitution vocale claire, idéal pour les performances live et les enregistrements studio.",
    name: "Microphone Shure",
    designation: "Shure SM58 - Micro dynamique cardioïde",
    src: "/micro.jpg",
  },
  {
    quote:
      "Une réception numérique sans faille. L'appareil capte parfaitement le signal, même à longue distance.",
    name: "Récepteur numérique",
    designation: "Sennheiser EM 100 G4",
    src: "/digital-receiver.jpg",
  },
  {
    quote:
      "Liberté totale sur scène ! L'émetteur sans fil offre une grande portée et une excellente stabilité de signal.",
    name: "Émetteur sans fil",
    designation: "Sennheiser SK 100 G4",
    src: "/wireless-transmitter.jpg",
  },
];


  return (
    <section className='w-full py-4 px-4' id='material'>
        <h2 className="text-3xl font-bold text-gray-900 py-5 text-left">Matériels audio</h2>
        <MaterialCard materials={materials} />
    </section>
  )
}

export default AudioMaterial