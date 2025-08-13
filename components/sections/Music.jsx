import React from 'react'
import Image from 'next/image'
import MusicSvg from '@/public/music.svg'
import SpotifyLogo from '@/public/spotify.png'
import DeezerLogo from '@/public/deezer.png'
import YoutubeLogo from '@/public/youtube.png'

function Music() {
  return (
      <section className="grid lg:grid-cols-2 gap-12 mx-auto px-4 py-4 w-full" id='music'>
        <div className="text-left flex flex-col justify-center items-start">
          <h2 className="text-3xl text-center font-bold text-gray-900 py-5">Musique</h2>
          <p className="mb-4 text-[15px] text-neutral-600 dark:text-neutral-400 leading-relaxed">Merci de nous transmettre les liens vers vos musiques YouTube. Vous avez également la possibilité de créer votre propre playlist d’ambiance pour le cocktail et le repas.</p>
          <p className="mb-4 text-[15px] text-neutral-600 dark:text-neutral-400 leading-relaxed">Nous assurons la diffusion musicale lors des moments clés : entrée des mariés, arrivée du gâteau, cascade de champagne, ouverture de bal, lancer du bouquet, et cérémonie laïque.</p>
          <p className="mb-4 text-[15px] text-neutral-600 dark:text-neutral-400 leading-relaxed">Liste des applications pour la diffusion des musiques :</p>
          <div className='flex items-center gap-6'>
            <Image src={SpotifyLogo} height={24} width={24} alt='spotify-logo' title='Spotify' />
            <Image src={YoutubeLogo} height={24} width={24} alt='youtube-logo' title='Youtube' />
            <Image src={DeezerLogo} height={24} width={24} alt='deezer-logo' title='Deezer' />
          </div>
        </div>
          <Image src={MusicSvg} className='rounded-lg object-contain h-full w-full' alt='music-image' />
      </section>
  )
}

export default Music