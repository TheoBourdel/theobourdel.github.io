import React from 'react'

function TimeLine() {
  return (
    <section className="py-24 flex-col justify-center items-center" id='timeline'>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-14 text-center">
          <h2 className="text-3xl text-center font-bold text-gray-900 py-5">
            Déroulement
          </h2>
          <p className="text-lg font-normal text-gray-500 max-w-md md:max-w-2xl mx-auto">
            Deux semaines avant votre événement, nous organisons un second rendez-vous afin de peaufiner les derniers détails :
          </p>
        </div>
      </div>

      <div className="container mx-auto w-full h-full">
        <div className="relative wrap overflow-hidden p-10 h-full">
          {/* Barres centrales visibles seulement sur desktop */}
          <div className="hidden md:block border border-yellow-555 absolute h-full right-1/2"></div>
          <div className="hidden md:block border border-yellow-555 absolute h-full left-1/2"></div>

          {[
            {
              time: "16h00 / 16h30",
              title: "Cérémonie Laïque",
              desc: "Le DJ met en place une enceinte avec micro pour assurer la sonorisation de la cérémonie laïque, garantissant une ambiance claire et chaleureuse.",
              reverse: true
            },
            {
              time: "17h30 / 18h00",
              title: "Cocktail",
              desc: "Accueil des mariés et de leurs invités avec une musique d’ambiance soigneusement choisie, pendant que le DJ échange avec vos proches pour coordonner interventions et surprises.",
              reverse: false
            },
            {
              time: "19h30 / 20h00",
              title: "Passage à Table",
              desc: "Les mariés font leur entrée et partagent un discours avant que les convives s’installent pour le dîner.",
              reverse: true
            },
            {
              time: "20h00 / 20h30",
              title: "Repas & Animation",
              desc: "Le repas débute avec une musique douce, accompagné de l’animation “Tour du Monde” qui permet d’animer la salle tout en facilitant le service.",
              reverse: false
            },
            {
              time: "22h00 / 22h30",
              title: "Plat Chaud",
              desc: "Service du plat principal suivi du fromage et de la salade, ponctué par des interventions possibles de vos invités.",
              reverse: true
            },
            {
              time: "23h00 / 23h30",
              title: "Soirée Dansante",
              desc: "Ouverture de la piste pour une soirée festive, rythmée par vos morceaux préférés, jusqu’au moment du gâteau.",
              reverse: false
            },
            {
              time: "00h00",
              title: "Gâteau & Champagne",
              desc: "Présentation du gâteau accompagnée de la cascade de champagne, pour un moment fort en émotions et en photos.",
              reverse: true
            },
            {
              time: "00h30",
              title: "Retour à la Danse",
              desc: "La fête reprend de plus belle sur la piste jusqu’au bout de la nuit.",
              reverse: false
            },
            {
              time: "04h00",
              title: "Fin de Soirée",
              desc: "Clôture de la musique et fin officielle des festivités, avec possibilité d’une heure supplémentaire si souhaité.",
              reverse: true
            }
          ].map((event, index) => (
            <div
              key={index}
              className={`mb-8 flex flex-col md:flex-row ${
                event.reverse ? "md:flex-row-reverse" : ""
              } md:justify-between items-center w-full`}
            >
              <div className="hidden md:block order-1 w-5/12"></div>

              <div
                className={`order-1 w-full md:w-5/12 px-1 py-4 text-center ${
                  event.reverse ? "md:text-right" : "md:text-left"
                }`}
              >
                <p className="mb-3 text-base text-[#8339a5]">{event.time}</p>
                <h4 className="mb-3 font-bold text-lg md:text-xl">{event.title}</h4>
                <p className="text-sm md:text-base font-normal text-gray-500">
                  {event.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default TimeLine
