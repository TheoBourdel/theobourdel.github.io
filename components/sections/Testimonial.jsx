import React from 'react'
import { InfiniteMovingCards } from '../ui/infinite-moving-cards'

const testimonials = [
  {
    quote:
    "Nous sommes ravis ! Ambiance, musique, lumières, fumée… tout était génial ! Ludovic a su s’adapter aux multiples animations organisées par nos témoins. Seul bémol, le volume de la musique : mais avec 150 personnes dans une salle, difficile de faire autrement ! Nous recommandons totalement. ",
    name: "Coralie",
    title: "Une soirée géniale !",
  },
  {
    quote: "Nous avons fait appel à Ludovic pour mettre en place un photobooth pour notre mariage. Le délai de réponse et de disponibilité sont très satisfaisants, Ludovic à même pris le temps de m'aider à faire l'habillage des photos pour nous et nos invités. Le rapport qualité/prix est excellent et la qualité du service et de la machine aussi. Excellent prestataire je recommande ! ",
    name: "Nicolas",
    title: "Photobooth au top !",
  },
  {
    quote:
      "Ludo a été à notre écoute avant le mariage, nos témoins ont pu communiquer avec lui avant le jour J. Il a mis l’ambiance, que des bons retour des invités. Je recommande vivement. ",
    name: "Mika",
    title: "Faites lui confiance",
  },
  {
    quote:
    "Ludo a été plus qu’un DJ’s pour notre mariage, il a su être rassurant, à l’écoute et de très bon conseil ! Il est passionné par son métier et cela se ressent ! Il a su animer notre mariage avec beaucoup de professionnalisme. Nous avons eu que des bons retours pour notre mariage. Je le recommande à 1000 % ! ",
    name: "Margaux",
    title: "Mariage magique",
  },
  {
    quote:
    "Disponible pour échanger, proposer des idées, répondre aux questions. Tous nos invités ont apprécié sa prestation sans être trop présent. Possibilité d’avoir une box photo très appréciée par tous. ",
    name: "Géraldine",
    title: "Très bien, sans aucun regret",
  },
];

function Testimonial() {
  return (
    <section id='testimonial' className='w-full'>
        <h2 className="text-3xl text-center font-bold text-gray-900 py-5">Ce que disent nos clients satisfaits</h2>
        <InfiniteMovingCards
            items={testimonials}
            direction="right"
            speed="slow"
      />
    </section>
  )
}

export default Testimonial