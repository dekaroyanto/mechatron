"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";

export default function FeaturedHeroGrid({ onSelectProduct }) {
  const [showScrollTop, setShowScrollTop] = useState(false);
  const [activeCardId, setActiveCardId] = useState(null);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 400);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Tutup hover kartu saat tap di luar kartu pada mobile
  useEffect(() => {
    const handleOutsideClick = (e) => {
      if (!e.target.closest(".featured-grid-card")) {
        setActiveCardId(null);
      }
    };
    window.addEventListener("click", handleOutsideClick);
    return () => window.removeEventListener("click", handleOutsideClick);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleCardClick = (cardId) => {
    setActiveCardId((prev) => (prev === cardId ? null : cardId));
  };

  const topCards = [
    {
      id: "agri-h30",
      category: "30-Litre Hexacopter Agriculture Drone (BMT-1525)",
      titlePrefix: "MECHATRON ",
      titleSuffix: "AGRI H-30",
      tagline: "Smart Solutions for Every Mission — Heavy Payload 30L.",
      links: [
        { label: "Lihat Spesifikasi", isBuy: false },
        { label: "Pesan via WhatsApp", isBuy: true },
      ],
      image: "/images/featured_drone_h30.jpg",
      productInfo: {
        id: "agri-h30",
        modelCode: "BMT-1525",
        title: "MECHATRON AGRI H-30 (BMT-1525)",
        tagline:
          "Sistem Penyemprotan & Pemupukan Presisi Pertanian Kapasitas 30 Liter",
        image: "/images/featured_drone_h30.jpg",
      },
    },
    {
      id: "agri-h15",
      category: "15-Litre Hexacopter Agriculture Drone (BMT-1323)",
      titlePrefix: "MECHATRON ",
      titleSuffix: "AGRI H-15",
      tagline: "6-Rotor Stability & Precision Spraying — Compact Foldable 15L.",
      links: [
        { label: "Lihat Spesifikasi", isBuy: false },
        { label: "Pesan via WhatsApp", isBuy: true },
      ],
      image: "/images/featured_drone_h15.jpg",
      productInfo: {
        id: "agri-h15",
        modelCode: "BMT-1323",
        title: "MECHATRON AGRI H-15 (BMT-1323)",
        tagline:
          "Drone Lipat Efisiensi Tinggi dengan Kapasitas Muatan 15 Liter",
        image: "/images/featured_drone_h15.jpg",
      },
    },
  ];

  const bottomCards = [
    {
      id: "mechatron-ground-station",
      category: "Sistem Kontrol & RTK Agri Series",
      titlePrefix: "MECHATRON ",
      titleSuffix: "GCS CONTROLLER",
      tagline: "Precision Control in Your Hands.",
      links: [
        { label: "Pelajari Lebih Lanjut", isBuy: false },
        { label: "Hubungi Kami", isBuy: true },
      ],
      image: "/images/featured_remote_kit.jpg",
      productInfo: {
        title: "Mechatron Smart Ground Control Station",
        tagline:
          "Remote Kontrol Presisi Tinggi dengan Modul Dual-Antena & Tas Khusus",
        image: "/images/featured_remote_kit.jpg",
      },
    },
    {
      id: "mechatron-power-kit",
      category: "Ekosistem Baterai & Fast Charging Agri Series",
      titlePrefix: "MECHATRON ",
      titleSuffix: "POWER KIT",
      tagline: "Non-Stop Field Operations.",
      links: [
        { label: "Pelajari Lebih Lanjut", isBuy: false },
        { label: "Hubungi Kami", isBuy: true },
      ],
      image: "/images/featured_combo_kit.jpg",
      productInfo: {
        title: "Mechatron Enterprise Power & Flight Combo Kit",
        tagline:
          "Paket Lengkap Hardcase, Baterai Cerdas, Smart Charger & Remote Kontrol",
        image: "/images/featured_combo_kit.jpg",
      },
    },
  ];

  const renderCard = (card, priority = false) => {
    const isActive = activeCardId === card.id;

    return (
      <div
        key={card.id}
        onClick={() => handleCardClick(card.id)}
        className={`featured-grid-card group relative bg-white rounded-none overflow-hidden flex flex-col justify-between transition-all duration-500 min-h-[520px] sm:min-h-[600px] lg:min-h-[660px] cursor-pointer select-none ${
          isActive
            ? "shadow-[0_12px_40px_rgba(0,0,0,0.18)]"
            : "hover:shadow-[0_12px_40px_rgba(0,0,0,0.18)]"
        }`}
      >
        {/* Full Image Fill Background dengan transisi ke background putih & sedikit opacity gambar saat hover/tap */}
        <div className="absolute inset-0 z-0 bg-white">
          <Image
            src={card.image}
            alt={`${card.titlePrefix}${card.titleSuffix}`}
            fill
            priority={priority}
            quality={95}
            sizes="(max-width: 768px) 100vw, 50vw"
            className={`object-cover object-center transition-all duration-500 ease-out ${
              isActive
                ? "scale-[1.03] opacity-90"
                : "group-hover:scale-[1.03] group-hover:opacity-90"
            }`}
          />
          {/* Lapisan background putih halus & bersih saat hover di desktop / tap di mobile */}
          <div
            className={`absolute inset-0 bg-white/50 backdrop-blur-[2px] transition-opacity duration-500 pointer-events-none ${
              isActive ? "opacity-100" : "opacity-0 group-hover:opacity-100"
            }`}
          />
        </div>

        {/* Card Header Content - Muncul saat hover di desktop / tap di mobile */}
        <div
          className={`relative pt-12 sm:pt-20 px-6 sm:px-12 text-center z-10 transition-all duration-500 ease-out ${
            isActive
              ? "opacity-100 translate-y-0 pointer-events-auto"
              : "opacity-0 -translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 pointer-events-none group-hover:pointer-events-auto"
          }`}
        >
          {/* Category Subtitle */}
          <p className="text-[12px] sm:text-[14px] font-semibold text-[#0070D5] uppercase tracking-wider mb-2">
            {card.category}
          </p>

          {/* Big Title */}
          <h2 className="text-[32px] sm:text-[40px] lg:text-[46px] text-[#111111] font-bold tracking-[-0.5px] leading-tight mb-2">
            <span>{card.titlePrefix}</span>
            <span className="font-light">{card.titleSuffix}</span>
          </h2>

          {/* Tagline */}
          <p className="text-[15px] sm:text-[18px] font-medium text-[#444444] mb-6 max-w-md mx-auto leading-relaxed">
            {card.tagline}
          </p>

          {/* Buttons: Pelajari Lebih Lanjut & Hubungi Kami (WhatsApp) */}
          <div className="flex items-center justify-center gap-3 sm:gap-4 flex-wrap">
            {/* Tombol Lihat Spesifikasi */}
            <button
              onClick={(e) => {
                e.stopPropagation();
                onSelectProduct && onSelectProduct(card.productInfo);
              }}
              className="inline-flex items-center gap-1.5 text-[13px] sm:text-[14px] font-semibold px-5 py-2.5 rounded-full shadow-sm hover:shadow-md transition-all duration-300 cursor-pointer bg-white text-[#111111] border border-gray-300 hover:border-[#0070D5] hover:text-[#0070D5]"
            >
              <span>Lihat Spesifikasi</span>
              <svg
                className="w-3.5 h-3.5 transition-transform duration-200 group-hover/btn:translate-x-0.5"
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
            </button>

            {/* Tombol Pesan via WhatsApp (+62 811 1214 3111) */}
            <a
              href={`https://wa.me/6281112143111?text=${encodeURIComponent(
                `Halo Mechatron, saya tertarik untuk konsultasi dan pemesanan ${card.productInfo.title}. Mohon informasi ketersediaan unit dan jadwal demo lapangan.`
              )}`}
              target="_blank"
              rel="noopener noreferrer"
              onClick={(e) => {
                e.stopPropagation();
              }}
              className="inline-flex items-center gap-1.5 text-[13px] sm:text-[14px] font-semibold px-5 py-2.5 rounded-full shadow-sm hover:shadow-md transition-all duration-300 cursor-pointer bg-[#0070D5] text-white hover:bg-[#005bb5]"
            >
              <span>Pesan via WhatsApp</span>
              <svg
                className="w-3.5 h-3.5 transition-transform duration-200 group-hover/btn:translate-x-0.5"
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
            </a>
          </div>
        </div>
      </div>
    );
  };

  return (
    <section className="relative w-full bg-[#FFFFFF] py-6 sm:py-8 px-4 sm:px-6 md:px-8">
      {/* 2-Column Product Showcase Grid */}
      <div className="max-w-[1440px] mx-auto space-y-4 sm:space-y-6">
        {/* Top Pair: Mechatron H30 & Mechatron Power Kit */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
          {topCards.map((card) => renderCard(card, true))}
        </div>

        {/* Bottom Pair: Mechatron GCS & Mechatron H15 */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
          {bottomCards.map((card) => renderCard(card))}
        </div>
      </div>

      {/* Floating Action Buttons (Sticky on Bottom Right) */}
      {showScrollTop && (
        <div className="fixed bottom-6 right-6 z-40">
          <button
            onClick={scrollToTop}
            title="Kembali ke atas"
            aria-label="Back to Top"
            className="w-11 h-11 rounded-full bg-white text-[#444444] shadow-[0_4px_16px_rgba(0,0,0,0.12)] border border-gray-100 flex items-center justify-center hover:text-[#0070D5] hover:scale-105 active:scale-95 transition-all duration-200 cursor-pointer"
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
                strokeWidth="2.2"
                d="M5 15l7-7 7 7"
              />
            </svg>
          </button>
        </div>
      )}
    </section>
  );
}
