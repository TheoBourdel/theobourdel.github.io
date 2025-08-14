"use client";

import { cn } from "@/lib/utils";
import React, { useEffect, useState, useRef } from "react";

export const InfiniteMovingCards = ({
  items,
  direction = "left",
  speed = "fast",
  pauseOnHover = true,
  className
}) => {
  const containerRef = useRef(null);
  const scrollerRef = useRef(null);

  const [scrollPos, setScrollPos] = useState(0);
  const [manualControl, setManualControl] = useState(false);
  const [contentWidth, setContentWidth] = useState(0);

  const scrollSpeedMap = { fast: 1.5, normal: 0.75, slow: 0.3 }; // en pixels/frame
  const scrollSpeed = scrollSpeedMap[speed] || 0.75;

  useEffect(() => {
    addAnimation();

    // Mesure la largeur réelle du contenu pour boucler
    if (scrollerRef.current) {
      const firstHalfWidth = Array.from(scrollerRef.current.children)
        .slice(0, items.length) // première copie uniquement
        .reduce((total, el) => total + el.offsetWidth + 16, 0); // +16px pour gap-4
      setContentWidth(firstHalfWidth);
    }
  }, []);

  useEffect(() => {
    let rafId;
    if (!manualControl && contentWidth > 0) {
      const step = () => {
        setScrollPos((prev) => {
          let next =
            prev + scrollSpeed * (direction === "left" ? 1 : -1);

          // Boucle infinie
          if (next >= contentWidth) next = 0;
          if (next <= 0) next = contentWidth;

          return next;
        });
        rafId = requestAnimationFrame(step);
      };
      rafId = requestAnimationFrame(step);
    }
    return () => cancelAnimationFrame(rafId);
  }, [manualControl, direction, scrollSpeed, contentWidth]);

  useEffect(() => {
    if (scrollerRef.current) {
      scrollerRef.current.style.transform = `translateX(-${scrollPos}px)`;
    }
  }, [scrollPos]);

  function addAnimation() {
    if (containerRef.current && scrollerRef.current) {
      const scrollerContent = Array.from(scrollerRef.current.children);
      scrollerContent.forEach((item) => {
        const duplicatedItem = item.cloneNode(true);
        scrollerRef.current.appendChild(duplicatedItem);
      });
    }
  }

  const handleSliderChange = (e) => {
    const value = parseFloat(e.target.value);
    setScrollPos(value);
  };

  const handleSliderStart = () => {
    setManualControl(true);
  };

  const handleSliderEnd = () => {
    setManualControl(false);
  };

  return (
    <div className="flex flex-col items-center">
      {/* Cartes */}
      <div
        ref={containerRef}
        className={cn(
          "scroller relative z-20 max-w-7xl overflow-hidden [mask-image:linear-gradient(to_right,transparent,white_20%,white_80%,transparent)]",
          className
        )}
      >
        <ul
          ref={scrollerRef}
          className={cn(
            "flex w-max min-w-full shrink-0 flex-nowrap gap-4 py-4 transition-transform duration-100 ease-linear",
            pauseOnHover && "hover:[animation-play-state:paused]"
          )}
        >
          {items.map((item) => (
            <li
              className="relative w-[350px] max-w-full shrink-0 rounded-2xl border border-b-0 border-zinc-200 bg-[linear-gradient(180deg,#fafafa,#f5f5f5)] px-8 py-6 md:w-[450px] dark:border-zinc-700 dark:bg-[linear-gradient(180deg,#27272a,#18181b)]"
              key={item.name}
            >
              <blockquote>
                <span className="relative z-20 text-sm leading-[1.6] font-normal text-neutral-800 dark:text-gray-100">
                  {item.quote}
                </span>
                <div className="relative z-20 mt-6 flex flex-row items-center">
                  <span className="flex flex-col gap-1">
                    <span className="text-sm leading-[1.6] font-normal text-neutral-500 dark:text-gray-400">
                      {item.name}
                    </span>
                    <span className="text-sm leading-[1.6] font-normal text-neutral-500 dark:text-gray-400">
                      {item.title}
                    </span>
                  </span>
                </div>
              </blockquote>
            </li>
          ))}
        </ul>
      </div>

      {contentWidth > 0 && (
        <input
          type="range"
          min="0"
          max={contentWidth}
          step="1"
          value={scrollPos}
          onChange={handleSliderChange}
          onMouseDown={handleSliderStart}
          onMouseUp={handleSliderEnd}
          onTouchStart={handleSliderStart}
          onTouchEnd={handleSliderEnd}
          className="mt-4 w-full max-w-md custom-slider"
        />
      )}
    </div>
  );
};
