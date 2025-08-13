import React from 'react'
import PhotoSvg from '@/public/photo.svg'
import Image from 'next/image'

function Photobooth() {
  return (
    <section className="grid lg:grid-cols-2 gap-12 mx-auto px-4 py-4 w-full" id='photobooth'>
    <Image 
        src={PhotoSvg} 
        className="rounded-lg object-contain h-full w-full order-2 lg:order-1" 
        alt="photo-image" 
    />
    <div className="text-right flex flex-col justify-center items-end order-1 lg:order-2">
        <h2 className="text-3xl font-bold text-gray-900 py-5">
            Prestation Photobooth et Spinner 360
        </h2>
        <p className="mb-4 text-[15px] text-neutral-600 dark:text-neutral-400 leading-relaxed">
            Notre service inclut la possibilité de réaliser 1 ou 4 poses, en format portrait ou paysage, avec le choix parmi trois filtres avant impression : couleur, noir et blanc ou vintage.
            Les impressions 10x15 à sublimation sont illimitées (offre disponible uniquement avec la prestation DJ).
            Chaque photo peut être envoyée par e-mail et personnalisée grâce à un habillage graphique unique, pour un rendu sur mesure.
        </p>
        <p className="mb-4 text-[15px] text-neutral-600 dark:text-neutral-400 leading-relaxed">
            Nous mettons également à disposition des déguisements et accessoires (chapeaux, lunettes, boas, etc.) pour ajouter une touche ludique à vos clichés.
            En fin de prestation, vous recevrez toutes les photos via un lien sécurisé envoyé par e-mail.
            La location s’effectue du samedi au dimanche, et nos tarifs sont proposés sur devis.
        </p>
        <a 
            href="https://rissbox.com" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="w-fit cursor-pointer flex items-center gap-2 transform rounded-lg bg-black px-6 py-2 font-medium text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-gray-800 dark:bg-white dark:text-black dark:hover:bg-gray-200"
        >
            Voir la prestation sur rissbox.com
        </a>
    </div>
</section>

  )
}

export default Photobooth