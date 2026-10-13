"use client";

import React, { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";

export default function Services3DCarousel({ services = [] }) {
  const [currentIndex, setCurrentIndex] = useState(1); // Set middle card (index 1) active by default
  const [isPaused, setIsPaused] = useState(false);
  const total = services.length;

  const nextSlide = useCallback(() => {
    setCurrentIndex((prev) => (prev + 1) % total);
  }, [total]);

  const prevSlide = useCallback(() => {
    setCurrentIndex((prev) => (prev - 1 + total) % total);
  }, [total]);

  // Auto-rotate every 5.5 seconds unless user hovers
  useEffect(() => {
    if (isPaused || total <= 1) return;
    const timer = setInterval(() => {
      nextSlide();
    }, 5500);
    return () => clearInterval(timer);
  }, [isPaused, nextSlide, total]);

  if (!services || services.length === 0) return null;

  return (
    <div
      className="relative w-full py-6 md:py-10 select-none overflow-hidden"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      {/* 3D Perspective Stage Container */}
      <div
        className="relative mx-auto flex items-center justify-center h-[520px] sm:h-[580px] md:h-[640px] max-w-[1300px]"
        style={{ perspective: 1200 }}
      >
        {services.map((service, index) => {
          // Calculate relative position (-1: left, 0: center, 1: right)
          let diff = (index - currentIndex) % total;
          if (diff < -1) diff += total;
          if (diff > 1) diff -= total;

          const isCenter = diff === 0;
          const isLeft = diff === -1 || (total === 2 && diff === 1 && index === 0);
          const isRight = diff === 1;

          // Compute 3D transforms based on position
          let x = "0%";
          let scale = 1;
          let rotateY = 0;
          let zIndex = 30;
          let opacity = 1;
          let brightness = "brightness(100%)";

          if (isLeft) {
            x = "-62%";
            scale = 0.82;
            rotateY = 24;
            zIndex = 15;
            opacity = 0.65;
            brightness = "brightness(75%)";
          } else if (isRight) {
            x = "62%";
            scale = 0.82;
            rotateY = -24;
            zIndex = 15;
            opacity = 0.65;
            brightness = "brightness(75%)";
          } else if (!isCenter) {
            // Hidden card if there are more than 3
            opacity = 0;
            scale = 0.6;
            zIndex = 5;
          }

          return (
            <motion.div
              key={service.id || index}
              className="absolute w-[290px] sm:w-[380px] md:w-[440px] lg:w-[480px] h-[460px] sm:h-[520px] md:h-[580px]
                         rounded-[26px] sm:rounded-[34px] overflow-hidden shadow-2xl origin-center"
              style={{
                transformStyle: "preserve-3d",
              }}
              animate={{
                x,
                scale,
                rotateY,
                zIndex,
                opacity,
                filter: brightness,
              }}
              transition={{
                type: "spring",
                stiffness: 280,
                damping: 28,
                mass: 0.85,
              }}
              onClick={() => {
                if (!isCenter) {
                  setCurrentIndex(index);
                }
              }}
            >
              {/* Card Container */}
              <div
                className={`relative w-full h-full bg-neutral-900 overflow-hidden rounded-[26px] sm:rounded-[34px]
                           border border-white/20 transition-all duration-300 ${
                             isCenter ? "cursor-default" : "cursor-pointer"
                           }`}
              >
                {/* Background Image Full Bleed */}
                <div className="absolute inset-0 z-0">
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    sizes="(max-width: 768px) 320px, 480px"
                    priority={isCenter}
                    className="object-cover object-center transition-transform duration-700 ease-out"
                  />
                  {/* Cinematic Dark Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/35 to-black/85" />
                </div>

                {/* Content Overlay */}
                <div className="relative z-10 h-full p-6 sm:p-9 md:p-10 flex flex-col justify-between text-white">
                  {/* Top: Category Tag & Headline */}
                  <div>
                    <span className="inline-block text-[11px] sm:text-[12px] font-semibold uppercase tracking-wider text-[#60A5FA] bg-black/40 backdrop-blur-md px-3 py-1 rounded-full border border-white/10 mb-3 sm:mb-4">
                      {service.category || "Layanan Terkini"}
                    </span>
                    <h3 className="text-[24px] sm:text-[30px] md:text-[34px] font-bold tracking-tight leading-tight text-white">
                      {service.title}
                    </h3>
                    <p className="text-[13px] sm:text-[15px] text-white/90 font-normal leading-relaxed mt-2.5 sm:mt-3 line-clamp-3">
                      {service.description}
                    </p>
                  </div>

                  {/* Bottom: Action CTA & Status */}
                  <div className="pt-4 border-t border-white/15 flex items-center justify-between">
                    <Link
                      href={service.path || `/services/${service.slug}`}
                      className={`inline-flex items-center gap-2 text-[13px] sm:text-[14px] font-medium px-5 sm:px-6 py-2.5 sm:py-3 rounded-full transition-all duration-300 ${
                        isCenter
                          ? "bg-white text-neutral-900 hover:bg-neutral-100 shadow-lg scale-100"
                          : "bg-white/20 text-white hover:bg-white/30 backdrop-blur-md"
                      }`}
                      onClick={(e) => {
                        // If not centered, prevent navigating away and just bring to center first
                        if (!isCenter) {
                          e.preventDefault();
                          setCurrentIndex(index);
                        }
                      }}
                    >
                      <span>Pelajari Lebih Lanjut</span>
                      <svg
                        className="w-3.5 h-3.5 transition-transform duration-300 group-hover:translate-x-1"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2.2"
                          d="M9 5l7 7-7 7"
                        />
                      </svg>
                    </Link>

                    {/* Active Badge indicator */}
                    {isCenter && (
                      <span className="text-[11px] sm:text-[12px] font-semibold text-white/70 uppercase tracking-widest hidden sm:inline">
                        Aktif
                      </span>
                    )}
                  </div>
                </div>

                {/* Glass reflection highlight on top border */}
                <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-white/40 to-transparent pointer-events-none" />
              </div>
            </motion.div>
          );
        })}
      </div>

      {/* Floating Navigation Controls (Previous & Next Arrow Buttons) */}
      <div className="flex items-center justify-center gap-4 mt-4 sm:mt-6">
        {/* Left Arrow Button */}
        <button
          onClick={prevSlide}
          aria-label="Layanan Sebelumnya"
          className="w-11 h-11 sm:w-12 sm:h-12 rounded-full bg-white/90 hover:bg-white text-neutral-900 shadow-md hover:shadow-xl
                     flex items-center justify-center transition-all duration-300 hover:scale-105 active:scale-95 border border-gray-200"
        >
          <svg
            className="w-5 h-5"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2.4"
              d="M15 19l-7-7 7-7"
            />
          </svg>
        </button>

        {/* Carousel Pagination Dots */}
        <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-neutral-100 border border-gray-200">
          {services.map((service, idx) => (
            <button
              key={service.id || idx}
              onClick={() => setCurrentIndex(idx)}
              aria-label={`Pilih ${service.title}`}
              className={`transition-all duration-300 rounded-full ${
                currentIndex === idx
                  ? "w-7 h-2 bg-[#0070D5]"
                  : "w-2 h-2 bg-gray-300 hover:bg-gray-400"
              }`}
            />
          ))}
        </div>

        {/* Right Arrow Button */}
        <button
          onClick={nextSlide}
          aria-label="Layanan Selanjutnya"
          className="w-11 h-11 sm:w-12 sm:h-12 rounded-full bg-white/90 hover:bg-white text-neutral-900 shadow-md hover:shadow-xl
                     flex items-center justify-center transition-all duration-300 hover:scale-105 active:scale-95 border border-gray-200"
        >
          <svg
            className="w-5 h-5"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2.4"
              d="M9 5l7 7-7 7"
            />
          </svg>
        </button>
      </div>
    </div>
  );
}
