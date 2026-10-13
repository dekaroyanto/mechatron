"use client";

import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";

export default function HeroBanner({ onSelectProduct }) {
  const [currentIndex, setCurrentIndex] = useState(0); // Starts on slide 1 (heromecha1)
  const [isAnimating, setIsAnimating] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const touchStartX = useRef(null);
  const timerRef = useRef(null);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  const slides = [
    {
      id: "agri-h30",
      tickerLabel: "AGRI H-30",
      title: "MECHATRON AGRI H-30",
      tagline: "Heavy Payload, Maximum Field Productivity.",
      buttons: [
        { label: "AGRI H-30", modelId: "agri-h30" },
        { label: "AGRI H-15", modelId: "agri-h15" },
      ],
      image: "/images/heromecha1.jpg",
      // 🎯 Atur krop/posisi horizontal gambar (X%):
      mobilePosition: "65% center",
      desktopPosition: "center center",
      // ↕️ GESER GAMBAR ATAS-BAWAH (Vertikal):
      mobileOffsetY: "0px",
      // 🔼 Atur posisi tulisan di HP:
      mobileTextTop: "10px",
      productInfo: {
        title: "MECHATRON AGRI H-30",
        tagline: "Smart Agricultural Heavy Payload Drone Kapasitas 30 Liter",
        price: "Hubungi Distributor Resmi Mechatron / Call for Quotation",
        image: "/images/heromecha1.jpg",
      },
    },
    {
      id: "agri-h15",
      tickerLabel: "AGRI H-15",
      title: "MECHATRON AGRI H-15",
      tagline: "Agile, Foldable & High Efficiency.",
      buttons: [
        { label: "AGRI H-15", modelId: "agri-h15" },
        { label: "AGRI H-30", modelId: "agri-h30" },
      ],
      image: "/images/heromecha2.jpg",
      mobilePosition: "55% center",
      desktopPosition: "center center",
      mobileOffsetY: "0px",
      mobileTextTop: "50px",
      productInfo: {
        title: "MECHATRON AGRI H-15",
        tagline:
          "High-Efficiency Compact Agricultural Drone Kapasitas 15 Liter",
        price: "Hubungi Distributor Resmi Mechatron / Call for Quotation",
        image: "/images/heromecha2.jpg",
      },
    },
    {
      id: "agri-series",
      tickerLabel: "MECHATRON AGRI",
      title: "MECHATRON AGRI SERIES",
      tagline: "AGRI H-30 & AGRI H-15: Inovasi Pertanian Modern",
      buttons: [
        { label: "AGRI H-30", modelId: "agri-h30" },
        { label: "AGRI H-15", modelId: "agri-h15" },
      ],
      image: "/images/heromecha3.jpg",
      mobilePosition: "70% center",
      desktopPosition: "center center",
      mobileOffsetY: "0px",
      mobileTextTop: "10px",
      productInfo: {
        title: "Mechatron AGRI Agricultural Series",
        tagline:
          "Solusi Drone Pertanian Presisi Menyeluruh Masa Depan Indonesia",
        price: "Hubungi Distributor Resmi Mechatron / Call for Quotation",
        image: "/images/heromecha3.jpg",
      },
    },
  ];

  const startTimer = () => {
    if (timerRef.current) clearInterval(timerRef.current);
    timerRef.current = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % slides.length);
    }, 5000);
  };

  const changeSlide = (newIndex) => {
    if (isAnimating) return;
    setIsAnimating(true);
    setCurrentIndex(newIndex);
    startTimer();
    setTimeout(() => {
      setIsAnimating(false);
    }, 700);
  };

  const nextSlide = () => {
    const next = (currentIndex + 1) % slides.length;
    changeSlide(next);
  };

  const prevSlide = () => {
    const prev = (currentIndex - 1 + slides.length) % slides.length;
    changeSlide(prev);
  };

  // Auto rotation set to 5 seconds as requested
  useEffect(() => {
    startTimer();
    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [slides.length]);

  // Gesture (Touch & Mouse Drag) handlers to slide left & right smoothly
  const [dragOffset, setDragOffset] = useState(0);
  const isDragging = useRef(false);

  const onPointerDown = (e) => {
    touchStartX.current = e.clientX || (e.touches && e.touches[0].clientX);
    isDragging.current = true;
  };

  const onPointerMove = (e) => {
    if (!isDragging.current || touchStartX.current === null) return;
    const currentX = e.clientX || (e.touches && e.touches[0].clientX);
    if (currentX) {
      setDragOffset(currentX - touchStartX.current);
    }
  };

  const onPointerUp = () => {
    if (!isDragging.current) return;
    if (dragOffset < -50) {
      nextSlide(); // Geser ke kiri -> slide berikutnya
    } else if (dragOffset > 50) {
      prevSlide(); // Geser ke kanan -> slide sebelumnya
    }
    touchStartX.current = null;
    isDragging.current = false;
    setDragOffset(0);
  };

  return (
    <section
      className="relative w-full h-[100vh] min-h-[640px] sm:min-h-[680px] max-h-[1080px] bg-[#0A0E14] text-white overflow-hidden select-none cursor-grab active:cursor-grabbing"
      onTouchStart={onPointerDown}
      onTouchMove={onPointerMove}
      onTouchEnd={onPointerUp}
      onMouseDown={onPointerDown}
      onMouseMove={onPointerMove}
      onMouseUp={onPointerUp}
      onMouseLeave={onPointerUp}
    >
      {/* Background Slides Track - Transisi halus tanpa zoom (scale-100 tetap stabil saat scroll) */}
      {slides.map((slide, idx) => {
        const isActive = idx === currentIndex;
        return (
          <div
            key={slide.id}
            className={`absolute inset-0 z-0 transition-opacity duration-700 ease-in-out ${
              isActive
                ? "opacity-100 pointer-events-auto"
                : "opacity-0 pointer-events-none"
            }`}
          >
            <div className="relative w-full h-full overflow-hidden">
              <Image
                src={slide.image}
                alt={slide.title}
                fill
                priority
                quality={100}
                unoptimized
                sizes="100vw"
                className="filter brightness-[0.88] contrast-[1.02] transition-transform duration-300"
                style={{
                  objectFit: "cover",
                  objectPosition: isMobile
                    ? slide.mobilePosition || "center center"
                    : slide.desktopPosition || "center center",
                  transform:
                    isMobile && slide.mobileOffsetY
                      ? `translateY(${slide.mobileOffsetY})`
                      : "none",
                }}
              />

              {/* Cinematic Vignette Gradients for Text Legibility */}
              <div className="absolute inset-0 bg-gradient-to-b from-black/75 via-black/25 to-black/85 pointer-events-none z-10" />
            </div>
          </div>
        );
      })}

      {/* Top spacing placeholder for navbar */}
      {/* Hero Content - Perfectly Centered in Dead Middle (Desktop & Mobile) */}
      <div className="absolute inset-0 z-20 flex flex-col items-center justify-center px-4 sm:px-6 md:px-8 text-center pointer-events-none">
        {slides.map((slide, idx) => {
          const isActive = idx === currentIndex;
          if (!isActive) return null;

          return (
            <div
              key={slide.id}
              className="w-full max-w-2xl mx-auto flex flex-col items-center justify-center text-center animate-fadeIn transition-all duration-700 ease-out pointer-events-auto"
            >
              {/* Big Bold Product Title */}
              <h1 className="text-[32px] xs:text-[38px] sm:text-[48px] md:text-[58px] lg:text-[64px] font-extrabold text-white tracking-[-0.02em] leading-[1.08] mb-2 sm:mb-2.5 drop-shadow-2xl text-center">
                {slide.title}
              </h1>

              {/* Tagline */}
              <p className="text-[14px] sm:text-[17px] md:text-[19px] font-medium text-[#EDEDED] tracking-normal mb-5 sm:mb-6 drop-shadow-md max-w-xl leading-relaxed text-center">
                {slide.tagline}
              </p>

              {/* Action Buttons */}
              <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-4">
                <button
                  onClick={() =>
                    onSelectProduct && onSelectProduct(slide.productInfo)
                  }
                  className="inline-flex items-center gap-2 px-6 sm:px-8 py-2.5 sm:py-3 rounded-full bg-white text-[#0F172A] hover:bg-slate-100 text-[13px] sm:text-[14px] font-bold transition-all duration-300 shadow-xl hover:scale-105 active:scale-95 cursor-pointer"
                >
                  <span>Spesifikasi Unit</span>
                  <svg
                    className="w-3.5 h-3.5 text-[#0070D5]"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2.5"
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </button>

                <a
                  href="https://wa.me/6281112143111?text=Halo%20Mechatron%2C%20saya%20tertarik%20konsultasi%20drone%20pertanian%20Mechatron."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 sm:px-8 py-2.5 sm:py-3 rounded-full bg-black/40 hover:bg-white/20 text-white border border-white/40 hover:border-white backdrop-blur-md text-[13px] sm:text-[14px] font-semibold transition-all duration-300 shadow-lg hover:scale-105 active:scale-95"
                >
                  <span>Konsultasi Produk</span>
                  <span>›</span>
                </a>
              </div>
            </div>
          );
        })}
      </div>

      {/* Slide Navigation Arrow Left - HIDDEN ON MOBILE (hidden md:flex) */}
      <button
        onClick={prevSlide}
        aria-label="Previous Slide"
        className="hidden md:flex absolute left-4 lg:left-8 top-1/2 -translate-y-1/2 z-30 w-12 h-14 sm:w-14 sm:h-16 items-center justify-center text-white/60 hover:text-white transition-all duration-300 focus:outline-none cursor-pointer group hover:scale-110 active:scale-90"
      >
        <svg
          className="w-8 h-8 sm:w-10 sm:h-10 transition-transform duration-300 group-hover:-translate-x-1"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M15 19l-7-7 7-7"
          />
        </svg>
      </button>

      {/* Slide Navigation Arrow Right - HIDDEN ON MOBILE (hidden md:flex) */}
      <button
        onClick={nextSlide}
        aria-label="Next Slide"
        className="hidden md:flex absolute right-4 lg:right-8 top-1/2 -translate-y-1/2 z-30 w-12 h-14 sm:w-14 sm:h-16 items-center justify-center text-white/60 hover:text-white transition-all duration-300 focus:outline-none cursor-pointer group hover:scale-110 active:scale-90"
      >
        <svg
          className="w-8 h-8 sm:w-10 sm:h-10 transition-transform duration-300 group-hover:translate-x-1"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M9 5l7 7-7 7"
          />
        </svg>
      </button>

      {/* Bottom Area */}
      <div className="absolute bottom-0 left-0 right-0 z-20 w-full pb-6 sm:pb-10 px-6 sm:px-12 md:px-16 flex items-end justify-between pointer-events-none">
        {/* Desktop Left Switcher Ticker (hidden on mobile, shown on md and above) */}
        <div className="hidden md:flex flex-col space-y-1.5 text-left pointer-events-auto">
          {slides.map((slide, idx) => {
            const isActive = idx === currentIndex;
            return (
              <button
                key={slide.id}
                onClick={() => changeSlide(idx)}
                className={`text-[13px] sm:text-[14px] text-left transition-all duration-300 cursor-pointer flex items-center gap-2 ${
                  isActive
                    ? "text-white font-semibold"
                    : "text-[#8B939B] hover:text-white/80 font-normal"
                }`}
              >
                {isActive && (
                  <span className="inline-block w-[2px] h-[14px] bg-white rounded-full animate-fadeIn" />
                )}
                <span>{slide.tickerLabel}</span>
              </button>
            );
          })}
        </div>

        {/* Mobile Slide Indicator Progress Bar (Loading bar: awal abu-abu tanpa putih, seiring 5 detik terisi putih) */}
        <div className="md:hidden w-full flex items-center justify-center gap-2 pb-2 pointer-events-auto">
          {slides.map((slide, idx) => {
            const isActive = idx === currentIndex;
            return (
              <button
                key={slide.id}
                onClick={() => changeSlide(idx)}
                aria-label={`Go to slide ${idx + 1}`}
                className="relative h-[3px] w-8 bg-[#555555]/60 hover:bg-[#777777] rounded-full overflow-hidden cursor-pointer focus:outline-none p-0 transition-colors"
              >
                {isActive && (
                  <span
                    key={`bar-${slide.id}-${currentIndex}`}
                    className="absolute inset-y-0 left-0 bg-white rounded-full hero-progress-fill"
                  />
                )}
              </button>
            );
          })}
        </div>
      </div>
    </section>
  );
}
