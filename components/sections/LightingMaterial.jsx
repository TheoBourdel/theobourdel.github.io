import React from 'react'
import { MaterialCard } from '../ui/material-card'

export default function LightingMaterial() {
  const materials = [
  {
    quote:
      "Une barre LED RGB puissante et fluide. Parfait pour créer des ambiances dynamiques et colorées sur scène.",
    name: "Barre de LED RGB",
    designation: "COLORband Q3BT - Energyson",
    src: "/lighting-1.jpg",
  },
  {
    quote:
      "Un projecteur de scène qui offre un faisceau large et homogène. Idéal pour les shows lumineux et les effets immersifs.",
    name: "Projecteur de scène",
    designation: "RUSH WIZARD - Martin lighting",
    src: "/lighting-2.jpg",
  },
  {
    quote:
      "Le spot lyre est incroyablement précis et rapide. Parfait pour les effets de mouvement et les transitions dynamiques.",
    name: "Spot lyre",
    designation: "Intimidator Spot 355 IRC - Chauvet DJ",
    src: "/lighting-3.jpg",
  },
  {
    quote:
      "Une lumière de scène fiable et puissante, avec une excellente diffusion. Idéale pour couvrir de grandes zones.",
    name: "Lumière de scène",
    designation: "WUPYI2018",
    src: "/lighting-4.jpg",
  },
  {
    quote:
      "La machine à neige carbonique crée une brume épaisse et basse impressionnante. Effet spectaculaire garanti pour les entrées ou moments clés.",
    name: "Machine à neige carbonique",
    designation: "Nimbus",
    src: "/lighting-5.jpg",
  },
  {
    quote:
      "Console DMX intuitive avec de nombreuses possibilités de programmation. Elle permet un contrôle précis de l’éclairage.",
    name: "Console DMX",
    designation: "Console DMX 384 A/b",
    src: "/lighting-6.jpg",
  },
  {
    quote:
      "Un pack d’éclairage LED sans fil polyvalent, facile à transporter. Parfait pour les événements en mobilité.",
    name: "Stick Pack d'éclairage LED",
    designation: "Chauvet Freedom - Stick Pack d'éclairage LED",
    src: "/lighting-7.jpg",
  },
];
  
    return (
      <section className='w-full py-4 px-4'>
          <h2 className="text-3xl font-bold text-gray-900 py-5 text-right">Matériels d'éclairage & décoratif</h2>
          <MaterialCard materials={materials} reverse />
      </section>
    )
}
