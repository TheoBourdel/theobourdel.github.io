"use client";
import Image from "next/image";
import { useState, useEffect } from "react";

export function Header() {
  const [activeMenu, setActiveMenu] = useState(false);

  // Bloquer le scroll quand le menu est ouvert
  useEffect(() => {
    if (activeMenu) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
  }, [activeMenu]);

  return (
    <nav className="relative flex w-full items-center justify-between px-4 py-10 bg-transparent dark:bg-gray-900 z-50">
      {/* Logo */}
      <div className="flex items-center gap-2">
        <Image src="/logo.png" height={24} width={24} alt="spotify-logo" />
        <h1 className="text-base font-bold md:text-2xl">Dimezi Events</h1>
      </div>

      {/* Menu desktop */}
      <div className="hidden md:flex gap-6 items-center">
        <a href="#timeline" className="font-medium hover:text-gray-700 dark:hover:text-gray-300">Déroulement</a>
        <a href="#music" className="font-medium hover:text-gray-700 dark:hover:text-gray-300">Musique</a>
        <a href="#photobooth" className="font-medium hover:text-gray-700 dark:hover:text-gray-300">Photobooth</a>
        <a href="#materials" className="font-medium hover:text-gray-700 dark:hover:text-gray-300">Matériels</a>
        <a href="#booking" className="font-medium hover:text-gray-700 dark:hover:text-gray-300">Réservation</a>

        {/* <a
          href="mailto:ludovic@dimezi-events.com"
          className="transform rounded-lg bg-black px-6 py-2 font-medium text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-gray-800 dark:bg-white dark:text-black dark:hover:bg-gray-200"
        >
          Prendre un rendez-vous
        </a> */}
      </div>

      {/* Burger menu mobile */}
      <div className="md:hidden z-50">
        <button
          onClick={() => setActiveMenu(!activeMenu)}
          className="flex flex-col gap-1.5 p-2 focus:outline-none"
        >
          <span className={`block h-0.5 w-6 bg-black dark:bg-white transition-all ${activeMenu ? "rotate-45 translate-y-2" : ""}`}></span>
          <span className={`block h-0.5 w-6 bg-black dark:bg-white transition-all ${activeMenu ? "opacity-0" : ""}`}></span>
          <span className={`block h-0.5 w-6 bg-black dark:bg-white transition-all ${activeMenu ? "-rotate-45 -translate-y-2" : ""}`}></span>
        </button>
      </div>

      {/* Fullscreen menu mobile */}
      <div
        className={`fixed inset-0 bg-white dark:bg-gray-900 flex flex-col items-center justify-center gap-8 text-2xl transition-transform duration-300 ease-in-out transform ${
          activeMenu ? "translate-x-0" : "translate-x-full"
        } z-40`}
      >
        <a onClick={() => setActiveMenu(false)} href="#timeline" className="hover:text-gray-700 dark:hover:text-gray-300">Déroulement</a>
        <a onClick={() => setActiveMenu(false)} href="#music" className="hover:text-gray-700 dark:hover:text-gray-300">Musique</a>
        <a onClick={() => setActiveMenu(false)} href="#photobooth" className="hover:text-gray-700 dark:hover:text-gray-300">Photobooth</a>
        <a onClick={() => setActiveMenu(false)} href="#materials" className="hover:text-gray-700 dark:hover:text-gray-300">Matériels</a>
        <a onClick={() => setActiveMenu(false)} href="#booking" className="hover:text-gray-700 dark:hover:text-gray-300">Réservation</a>

        <a
          onClick={() => setActiveMenu(false)}
          href="mailto:ludovic@dimezi-events.com"
          className="transform rounded-lg bg-black px-6 py-2 font-medium text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-gray-800 dark:bg-white dark:text-black dark:hover:bg-gray-200 text-lg"
        >
          Prendre un rendez-vous
        </a>
      </div>
    </nav>
  );
}
