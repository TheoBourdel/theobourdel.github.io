"use client";

import { IconArrowLeft, IconArrowRight } from "@tabler/icons-react";
import { motion, AnimatePresence } from "motion/react";
import { useEffect, useState } from "react";

export const MaterialCard = ({
  materials,
  autoplay = false,
  reverse = false,
}) => {
  const [active, setActive] = useState(0);
  const [rotations, setRotations] = useState([]);

  const handleNext = () => {
    setActive((prev) => (prev + 1) % materials.length);
  };

  const handlePrev = () => {
    setActive((prev) => (prev - 1 + materials.length) % materials.length);
  };

  const isActive = (index) => index === active;

  useEffect(() => {
    const initialRotations = materials.map(
      () => Math.floor(Math.random() * 21) - 10
    );
    setRotations(initialRotations);
  }, [materials]);

  useEffect(() => {
    if (autoplay) {
      const interval = setInterval(handleNext, 5000);
      return () => clearInterval(interval);
    }
  }, [autoplay]);

  if (rotations.length !== materials.length) {
    return null;
  }

  return (
    <div className="mx-auto px-4 py-20 font-sans antialiased">
      <div
        className={`relative grid grid-cols-1 gap-20 md:grid-cols-2 ${
          reverse ? "md:[&>*:first-child]:order-2" : ""
        }`}
      >
        {/* Image */}
        <div className="relative h-80 w-full">
          <AnimatePresence>
            {materials.map((material, index) => (
              <motion.div
                key={material.src}
                initial={{
                  opacity: 0,
                  scale: 0.9,
                  z: -100,
                  rotate: rotations[index],
                }}
                animate={{
                  opacity: isActive(index) ? 1 : 0.7,
                  scale: isActive(index) ? 1 : 0.95,
                  z: isActive(index) ? 0 : -100,
                  rotate: isActive(index) ? 0 : rotations[index],
                  zIndex: isActive(index)
                    ? 40
                    : materials.length + 2 - index,
                  y: isActive(index) ? [0, -80, 0] : 0,
                }}
                exit={{
                  opacity: 0,
                  scale: 0.9,
                  z: 100,
                  rotate: rotations[index],
                }}
                transition={{
                  duration: 0.4,
                  ease: "easeInOut",
                }}
                className="absolute inset-0 origin-bottom"
              >
                <img
                  src={material.src}
                  alt={material.name}
                  width={500}
                  height={500}
                  draggable={false}
                  className="h-full w-full rounded-3xl object-cover object-center"
                />
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {/* Texte */}
        <div className="flex flex-col justify-between py-4">
          <motion.div
            key={active}
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -20, opacity: 0 }}
            transition={{ duration: 0.2, ease: "easeInOut" }}
          >
            <h3 className="text-lg font-medium text-gray-900 mb-3 capitalize">
              {materials[active].name}
            </h3>
            <p className="text-sm font-normal text-gray-500">
              {materials[active].designation}
            </p>
            <motion.p className="mt-8 text-lg font-normal text-gray-500 max-w-md md:max-w-2xl mx-auto">
              {materials[active].quote.split(" ").map((word, index) => (
                <motion.span
                  key={index}
                  initial={{
                    filter: "blur(10px)",
                    opacity: 0,
                    y: 5,
                  }}
                  animate={{
                    filter: "blur(0px)",
                    opacity: 1,
                    y: 0,
                  }}
                  transition={{
                    duration: 0.2,
                    ease: "easeInOut",
                    delay: 0.02 * index,
                  }}
                  className="inline-block"
                >
                  {word}&nbsp;
                </motion.span>
              ))}
            </motion.p>
          </motion.div>

          <div className="flex gap-4 pt-12 md:pt-0">
            <button
              onClick={handlePrev}
              className="group/button flex h-7 w-7 items-center justify-center rounded-full bg-gray-100 dark:bg-neutral-800"
            >
              <IconArrowLeft className="h-5 w-5 text-black transition-transform duration-300 group-hover/button:rotate-12 dark:text-neutral-400" />
            </button>
            <button
              onClick={handleNext}
              className="group/button flex h-7 w-7 items-center justify-center rounded-full bg-gray-100 dark:bg-neutral-800"
            >
              <IconArrowRight className="h-5 w-5 text-black transition-transform duration-300 group-hover/button:-rotate-12 dark:text-neutral-400" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
