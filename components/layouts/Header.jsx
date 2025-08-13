import Image from "next/image";
import Logo from "@/public/logo.png"

export function Header(){
  return (
    <nav className="flex w-full items-center justify-center md:justify-between px-4 py-4" id="header">
      <div className="flex items-center gap-2">
        <Image src={Logo} height={24} width={24} alt='spotify-logo' />
        <h1 className="text-base font-bold md:text-2xl">Dimezi Events</h1>
      </div>
      <a
        href="mailto:ludovic@dimezi-events.com"
        className="hidden md:block transform rounded-lg bg-black px-6 py-2 font-medium text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-gray-800 dark:bg-white dark:text-black dark:hover:bg-gray-200">
        Prendre un rendez-vous
      </a>
    </nav>
  );
};