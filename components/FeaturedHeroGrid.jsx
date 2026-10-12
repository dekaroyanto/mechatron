"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";

export default function FeaturedHeroGrid({ onSelectProduct }) {
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 400);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const topCards = [
    {
      id: "bmt-1525-h30",
      category: "Smart Agricultural Heavy Payload Drone",
      titlePrefix: "MECHATRON ",
      titleSuffix: "BMT-1525 H-30",
      tagline: "Heavy Payload 30L, Maximum Yield.",
      links: [
        { label: "Pelajari Lebih Lanjut", isBuy: false },
        { label: "Hubungi Sales", isBuy: true },
      ],
      image: "/images/featured_drone_h30.jpg",
      productInfo: {
        title: "Mechatron BMT-1525 H-30 Agricultural Drone",
        tagline:
          "Sistem Penyemprotan & Pemupukan Presisi Pertanian Kapasitas 30 Liter",
        price: "Hubungi Distributor Resmi Mechatron",
        image: "/images/featured_drone_h30.jpg",
        specs: [
          "Kapasitas Tangki Muatan 30 Liter",
          "Sistem Atomisasi Nozzle Presisi Ganda",
          "Navigasi RTK Akurasi Sentimeter Terpadu",
          "Radar Penghindar Rintangan Lapangan 360°",
        ],
      },
    },
    {
      id: "bmt-1323-h25",
      category: "Foldable Compact Agricultural Drone",
      titlePrefix: "MECHATRON ",
      titleSuffix: "BMT-1323 H-25",
      tagline: "Compact, Foldable, High Efficiency 25L.",
      links: [
        { label: "Detail BMT-1323 H-25", isBuy: false },
        { label: "Hubungi Sales", isBuy: true },
      ],
      image: "/images/featured_drone_h15.jpg",
      productInfo: {
        title: "Mechatron BMT-1323 H-25 Compact Drone",
        tagline: "Drone Lipat Efisiensi Tinggi dengan Kapasitas Muatan 25 Liter",
        price: "Hubungi Distributor Resmi Mechatron",
        image: "/images/featured_drone_h15.jpg",
        specs: [
          "Kapasitas Tangki Muatan 25 Liter",
          "Desain Lengan Lipat Cepat & Mudah Dibawa",
          "Peti Logam Khusus Pengiriman & Penyimpanan Aman",
          "Sensor Kontur Medan Real-Time Otomatis",
        ],
      },
    },
  ];

  const bottomCards = [
    {
      id: "mechatron-ground-station",
      category: "Sistem Kontrol & RTK BMT Series",
      titlePrefix: "MECHATRON ",
      titleSuffix: "GCS CONTROLLER",
      tagline: "Precision Control in Your Hands.",
      links: [
        { label: "Fitur Remote", isBuy: false },
        { label: "Konsultasi Teknis", isBuy: true },
      ],
      image: "/images/featured_remote_kit.jpg",
      productInfo: {
        title: "Mechatron Smart Ground Control Station",
        tagline:
          "Remote Kontrol Presisi Tinggi dengan Modul Dual-Antena & Tas Khusus",
        price: "Hubungi Distributor Resmi Mechatron",
        image: "/images/featured_remote_kit.jpg",
        specs: [
          "Layar Sentuh HD Ultra-Bright Tahan Terik Matahari",
          "Sistem Transmisi Video HD Jarak Jauh hingga 15km",
          "Dua Modul Antena Pelacak Lapangan Stabil",
          "Kompartemen Pelindung Eva Case Khusus",
        ],
      },
    },
    {
      id: "mechatron-power-kit",
      category: "Ekosistem Baterai & Fast Charging BMT Series",
      titlePrefix: "MECHATRON ",
      titleSuffix: "POWER KIT",
      tagline: "Non-Stop Field Operations.",
      links: [
        { label: "Spesifikasi Paket", isBuy: false },
        { label: "Pesan Sekarang", isBuy: true },
      ],
      image: "/images/featured_combo_kit.jpg",
      productInfo: {
        title: "Mechatron Enterprise Power & Flight Combo Kit",
        tagline:
          "Paket Lengkap Hardcase, Baterai Cerdas, Smart Charger & Remote Kontrol",
        price: "Hubungi Distributor Resmi Mechatron",
        image: "/images/featured_combo_kit.jpg",
        specs: [
          "2x Baterai Cerdas Mechatron Daya Tahan Tinggi",
          "Smart Fast Charger Generator Kompatibel",
          "Remote Kontrol Layar Terang Terintegrasi",
          "Aluminium Heavy-Duty Flight Transport Case",
        ],
      },
    },
  ];

  return (
    <section className="relative w-full bg-[#FFFFFF] py-6 sm:py-8 px-4 sm:px-6 md:px-8">
      {/* 2-Column Product Showcase Grid */}
      <div className="max-w-[1440px] mx-auto space-y-4 sm:space-y-6">
        {/* Top Pair: Mechatron H30 & Mechatron Power Kit */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
          {topCards.map((card) => (
            <div
              key={card.id}
              className="group relative bg-white rounded-none overflow-hidden flex flex-col justify-between transition-all duration-500 hover:shadow-[0_12px_40px_rgba(0,0,0,0.18)] min-h-[520px] sm:min-h-[600px] lg:min-h-[660px] cursor-pointer"
            >
              {/* Full Image Fill Background dengan transisi ke background putih & sedikit opacity gambar saat hover */}
              <div className="absolute inset-0 z-0 bg-white">
                <Image
                  src={card.image}
                  alt={`${card.titlePrefix}${card.titleSuffix}`}
                  fill
                  priority
                  quality={95}
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover object-center transition-all duration-500 ease-out group-hover:scale-[1.03] group-hover:opacity-90"
                />
                {/* Lapisan background putih halus & bersih saat hover agar teks sangat jelas */}
                <div className="absolute inset-0 bg-white/80 backdrop-blur-[2px] opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
              </div>

              {/* Card Header Content - Muncul jelas di atas background putih saat hover */}
              <div className="relative pt-12 sm:pt-20 px-6 sm:px-12 text-center z-10 opacity-0 group-hover:opacity-100 -translate-y-2 group-hover:translate-y-0 transition-all duration-500 ease-out pointer-events-none group-hover:pointer-events-auto">
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

                {/* Buttons / Links */}
                <div className="flex items-center justify-center gap-3 sm:gap-4 flex-wrap">
                  {card.links.map((link, idx) => (
                    <button
                      key={idx}
                      onClick={() =>
                        onSelectProduct && onSelectProduct(card.productInfo)
                      }
                      className={`inline-flex items-center gap-1.5 text-[13px] sm:text-[14px] font-semibold px-5 py-2.5 rounded-full shadow-sm hover:shadow-md transition-all duration-300 cursor-pointer ${
                        link.isBuy
                          ? "bg-[#0070D5] text-white hover:bg-[#005bb5]"
                          : "bg-white text-[#111111] border border-gray-300 hover:border-[#0070D5] hover:text-[#0070D5]"
                      }`}
                    >
                      <span>{link.label}</span>
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
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Pair: Mechatron GCS & Mechatron H15 */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
          {bottomCards.map((card) => (
            <div
              key={card.id}
              className="group relative bg-white rounded-none overflow-hidden flex flex-col justify-between transition-all duration-500 hover:shadow-[0_12px_40px_rgba(0,0,0,0.18)] min-h-[520px] sm:min-h-[600px] lg:min-h-[660px] cursor-pointer"
            >
              {/* Full Image Fill Background dengan transisi ke background putih & sedikit opacity gambar saat hover */}
              <div className="absolute inset-0 z-0 bg-white">
                <Image
                  src={card.image}
                  alt={`${card.titlePrefix}${card.titleSuffix}`}
                  fill
                  quality={95}
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover object-center transition-all duration-500 ease-out group-hover:scale-[1.03] group-hover:opacity-25"
                />
                {/* Lapisan background putih halus & bersih saat hover agar teks sangat jelas */}
                <div className="absolute inset-0 bg-white/80 backdrop-blur-[2px] opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
              </div>

              {/* Card Header Content - Muncul jelas di atas background putih saat hover */}
              <div className="relative pt-12 sm:pt-20 px-6 sm:px-12 text-center z-10 opacity-0 group-hover:opacity-100 -translate-y-2 group-hover:translate-y-0 transition-all duration-500 ease-out pointer-events-none group-hover:pointer-events-auto">
                <p className="text-[12px] sm:text-[14px] font-semibold text-[#0070D5] uppercase tracking-wider mb-2">
                  {card.category}
                </p>

                <h2 className="text-[32px] sm:text-[40px] lg:text-[46px] text-[#111111] font-bold tracking-[-0.5px] leading-tight mb-2">
                  <span>{card.titlePrefix}</span>
                  <span className="font-light">{card.titleSuffix}</span>
                </h2>

                <p className="text-[15px] sm:text-[18px] font-medium text-[#444444] mb-6 max-w-md mx-auto leading-relaxed">
                  {card.tagline}
                </p>

                {/* Buttons / Links */}
                <div className="flex items-center justify-center gap-3 sm:gap-4 flex-wrap">
                  {card.links.map((link, idx) => (
                    <button
                      key={idx}
                      onClick={() =>
                        onSelectProduct && onSelectProduct(card.productInfo)
                      }
                      className={`inline-flex items-center gap-1.5 text-[13px] sm:text-[14px] font-semibold px-5 py-2.5 rounded-full shadow-sm hover:shadow-md transition-all duration-300 cursor-pointer ${
                        link.isBuy
                          ? "bg-[#0070D5] text-white hover:bg-[#005bb5]"
                          : "bg-white text-[#111111] border border-gray-300 hover:border-[#0070D5] hover:text-[#0070D5]"
                      }`}
                    >
                      <span>{link.label}</span>
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
                  ))}
                </div>
              </div>
            </div>
          ))}
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
