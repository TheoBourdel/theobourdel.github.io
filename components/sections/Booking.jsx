import React from 'react'
import { Clock4 } from 'lucide-react';
import { Music } from 'lucide-react';
import { PartyPopper } from 'lucide-react';
import { Euro } from 'lucide-react';

function Booking() {
  return (
    <section className="py-24" id='booking'>
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="mb-14 text-center">
                {/* <span className="py-1 px-4 bg-indigo-100 rounded-full text-xs font-medium text-indigo-600 text-center">Informations</span> */}
                <h2 className="text-3xl text-center font-bold text-gray-900 py-5">
                    Préparation & Réservation
                </h2>
                <p className="text-lg font-normal text-gray-500 max-w-md md:max-w-2xl mx-auto">
                    Deux semaines avant votre événement, nous organisons un second rendez-vous afin de peaufiner les derniers détails :
                </p>
            </div>
            <div
                className="flex justify-center items-center gap-x-5 gap-y-8 lg:gap-y-0 flex-wrap md:flex-wrap lg:flex-nowrap lg:flex-row lg:justify-between lg:gap-x-8">
                <div className="relative w-full text-center max-md:max-w-sm max-md:mx-auto group md:w-2/5 lg:w-1/4">
                    <div className="bg-indigo-50 rounded-lg flex justify-center items-center mb-5 w-20 h-20 mx-auto cursor-pointer transition-all duration-500 group-hover:bg-indigo-600">
                        <Clock4 className="stroke-indigo-600 transition-all duration-500 group-hover:stroke-white" size={30} />
                    </div>
                    <h4 className="text-lg font-medium text-gray-900 mb-3 capitalize">
                        Définition des horaires
                    </h4>
                    <p className="text-sm font-normal text-gray-500">
                        Organisation des moments clés pour un déroulement fluide.
                    </p>
                </div>
                <div className="relative w-full text-center max-md:max-w-sm max-md:mx-auto group md:w-2/5 lg:w-1/4">
                    <div className="bg-pink-50 rounded-lg flex justify-center items-center mb-5 w-20 h-20 mx-auto cursor-pointer transition-all duration-500 group-hover:bg-pink-600">
                        <Music className="stroke-pink-600 transition-all duration-500 group-hover:stroke-white" size={30} />
                    </div>
                    <h4 className="text-lg font-medium text-gray-900 mb-3 capitalize">
                        Sélection des musiques
                    </h4>
                    <p className="text-sm font-normal text-gray-500">
                        Choix des musiques, avec possibilité d’ajouter vos liens YouTube favoris.
                    </p>
                </div>
                <div className="relative w-full text-center max-md:max-w-sm max-md:mx-auto group md:w-2/5 lg:w-1/4">
                    <div className="bg-teal-50 rounded-lg flex justify-center items-center mb-5 w-20 h-20 mx-auto cursor-pointer transition-all duration-500 group-hover:bg-teal-600">
                        <PartyPopper size={30} className='stroke-teal-600 transition-all duration-500 group-hover:stroke-white' />
                    </div>
                    <h4 className="text-lg font-medium text-gray-900 mb-3 capitalize">
                        Animations
                    </h4>
                    <p className="text-sm font-normal text-gray-500">
                        Animations pour vos invités, gratuites ou sur demande, pour une soirée unique.
                    </p>
                </div>
                <div className="relative w-full text-center max-md:max-w-sm max-md:mx-auto group md:w-2/5 lg:w-1/4">
                    <div className="bg-orange-50 rounded-lg flex justify-center items-center mb-5 w-20 h-20 mx-auto cursor-pointer transition-all duration-500 group-hover:bg-orange-600">
                        <Euro className="stroke-orange-600 transition-all duration-500 group-hover:stroke-white" size={30} />
                    </div>
                    <h4 className="text-lg font-medium text-gray-900 mb-3 capitalize">
                        Règlement
                    </h4>
                    <p className="text-sm font-normal text-gray-500">
                        Règlement du solde après signature, avec un acompte de 500€ pour valider.
                    </p>
                </div>
            </div>
            <div className="mt-14 text-center">
                <p className="text-lg font-normal text-gray-500 max-w-md md:max-w-2xl mx-auto">
                    Pour réserver, il vous suffit de <b>prendre un rendez-vous</b>. Nous établirons ensemble un contrat à nous retourner signé par e-mail, accompagné d'un acompte de 500€.
                </p>
            </div>
            <div className='flex justify-center mt-7'>
                <a href="mailto:ludovic@dimezi-events.com" className="w-60 transform rounded-lg bg-black px-6 py-2 font-medium text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-gray-800 dark:bg-white dark:text-black dark:hover:bg-gray-200">
                    Prendre un rendez-vous
                </a>   
            </div>
        </div>
    </section>
  )
}

export default Booking