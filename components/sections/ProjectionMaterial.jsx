import React from 'react'
import { MaterialCard } from '../ui/material-card'

export default function ProjectionMaterial() {
    const materials = [
  {
    quote:
      "Un écran avec vidéo-projecteur qui garantit une projection nette, lumineuse et immersive, même dans des environnements peu éclairés.",
    name: "Ecran & Vidéo-projecteur",
    designation: "...",
    src: "/projection-1.jpg",
  },
  {
    quote:
      "Un câble HDMI de haute qualité offrant une transmission rapide et sans perte. Idéal pour les connexions entre ordinateurs et projecteurs.",
    name: "Cable HDMI",
    designation: "...",
    src: "/projection-2.jpg",
  },
  {
    quote:
      "Ce câble RCA/mini-jack assure une excellente restitution du son entre vos appareils analogiques et numériques.",
    name: "Cable RCA/Mini-jack",
    designation: "...",
    src: "/projection-3.jpg",
  },
  {
    quote:
      "Un ordinateur fiable et performant, parfaitement adapté à la diffusion de vidéos ou de présentations lors d’événements.",
    name: "Ordinateur pour la projection",
    designation: "...",
    src: "/projection-4.jpg",
  },
];
  return (
        <section className='w-full py-4 px-4'>
            <h2 className="text-3xl font-bold text-gray-900 py-5 text-left">Matériel de projection</h2>
            <MaterialCard materials={materials} />
        </section>
      )
}
