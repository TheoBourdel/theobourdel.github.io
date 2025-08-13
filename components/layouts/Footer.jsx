import Image from "next/image";
import Logo from "@/public/logo.png"
import { Heart } from 'lucide-react';

function Footer() {
  return (
    <footer className="w-full py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto">
                <div className="flex items-center justify-center gap-2">
                    <Image src={Logo} height={24} width={24} alt='spotify-logo' />
                    <h1 className="text-base font-bold md:text-2xl">Dimezi Events</h1>
                </div>
                    <ul className="text-lg flex items-center justify-center flex-col gap-7 md:flex-row md:gap-12 transition-all duration-500 py-16 mb-10 border-b border-gray-200">
                        <li><a href="#header" className="text-gray-800 hover:text-gray-900">Accueil</a></li>
                        <li><a href="#timeline" className=" text-gray-800 hover:text-gray-900">Déroulement</a></li>
                        <li><a href="#music" className=" text-gray-800 hover:text-gray-900">Musique</a></li>
                        <li><a href="#photobooth" className=" text-gray-800 hover:text-gray-900">Photobooth</a></li>
                        <li><a href="#material" className=" text-gray-800 hover:text-gray-900">Matériels</a></li>
                        <li><a href="#booking" className=" text-gray-800 hover:text-gray-900">Réservation</a></li>
                        <li><a href="#testimonial" className=" text-gray-800 hover:text-gray-900">Testimonial</a></li>

                    </ul>
                    <div className="flex space-x-10 justify-center items-center mb-14">
                        <a href="https://www.mariages.net/musique-mariage/dimezi-events--e149116" target="_blank" title="mariages.net" className="block  text-gray-900 transition-all duration-500 hover:text-[#8339a5] ">
                            <Heart />
                        </a>
                        <a href="https://www.facebook.com/dimezievents/?locale=fr_FR" target="_blank" title="facebook" className="block  text-gray-900 transition-all duration-500 hover:text-[#8339a5] ">
                            <svg className="w-[0.938rem] h-[1.625rem]" viewBox="0 0 15 26" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M13.7926 14.4697L14.5174 9.86889H10.0528V6.87836C10.0528 5.62033 10.6761 4.39105 12.6692 4.39105H14.7275V0.473179C13.5289 0.282204 12.3177 0.178886 11.1037 0.164062C7.42917 0.164062 5.0302 2.37101 5.0302 6.36077V9.86889H0.957031V14.4697H5.0302V25.5979H10.0528V14.4697H13.7926Z" fill="currentColor"/>
                            </svg> 
                        </a>
                    </div>
                    <span className="text-lg text-gray-500 text-center block">©<a href="https://pagedone.io/">dimezi-events</a> 2025, All rights reserved.</span>
            </div>
        </div>
    </footer>
                                            
  )
}

export default Footer