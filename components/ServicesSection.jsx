"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { allServices } from "@/lib/servicesData";
import Services3DCarousel from "./Services3DCarousel";

export default function ServicesSection() {
  // Grup 1: 3 Layanan (Fotografi, LiDAR, Agrikultur)
  const businessServices = allServices.filter(
    (s) => s.group === "Teknologi Baru Untuk Bisnis Anda"
  );

  // Grup 2: 3 Layanan (Sewa Drone, Pelatihan Pilot Drone, Perawatan Drone)
  const fleetServices = allServices.filter(
    (s) => s.group === "Teknologi Terkini Di Layanan Kami."
  );

  const renderServiceCard = (service) => {
    return (
      <Link
        key={service.id}
        href={service.path || `/services/${service.slug}`}
        className="group relative w-full overflow-hidden cursor-pointer select-none block
                   h-[230px] sm:h-[270px] md:h-auto md:min-h-[560px] lg:min-h-[620px]
                   transition-all duration-500 bg-neutral-900"
      >
        {/* Full Image Background dengan efek smooth zoom saat hover */}
        <div className="absolute inset-0 z-0">
          <Image
            src={service.image}
            alt={service.title}
            fill
            quality={90}
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            className="object-cover object-center transition-transform duration-700 ease-out group-hover:scale-105"
          />

          {/* 
            Overlay Penyesuaian Sesuai Referensi:
            - Mobile (Gambar 2): Dark overlay seragam agar teks putih di tengah sangat jelas terbaca.
            - Desktop (Gambar 1): Gradasi gelap di bagian atas agar teks putih kontras, sementara bagian bawah gambar drone tetap terang & natural.
          */}
          <div className="absolute inset-0 bg-black/45 md:bg-gradient-to-b md:from-black/75 md:via-black/35 md:to-transparent transition-opacity duration-500 group-hover:md:from-black/85" />
        </div>

        {/* 
          Text Layout:
          - Mobile (Gambar 2): Teks berada tepat di TENGAH (center vertically & horizontally).
          - Desktop (Gambar 1): Teks berada di BAGIAN ATAS (top-aligned, centered horizontally).
        */}
        <div
          className="relative z-10 h-full flex flex-col items-center 
                        justify-center px-5 py-6
                        md:justify-start md:pt-14 md:pb-8 md:px-6 lg:pt-16 lg:px-8 
                        text-center"
        >
          {/* Judul Layanan */}
          <h3 className="text-[24px] sm:text-[28px] md:text-[32px] lg:text-[36px] font-bold text-white tracking-tight leading-tight">
            {service.title}
          </h3>

          {/* Deskripsi Layanan */}
          <p
            className="text-[13px] sm:text-[14px] md:text-[15px] lg:text-[16px] text-white/90 font-normal leading-relaxed 
                        mt-1.5 sm:mt-2 md:mt-3 max-w-[280px] sm:max-w-[320px] md:max-w-[340px]"
          >
            {service.description}
          </p>

          {/* Link: Pelajari Lebih Lanjut › */}
          <div className="mt-2.5 sm:mt-3 md:mt-4 inline-flex items-center gap-1 text-[13px] sm:text-[14px] md:text-[15px] font-medium text-white group-hover:text-white/80 transition-colors">
            <span>Pelajari Lebih Lanjut</span>
            <svg
              className="w-3.5 h-3.5 sm:w-4 sm:h-4 transition-transform duration-300 group-hover:translate-x-1"
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
          </div>
        </div>
      </Link>
    );
  };

  return (
    <section
      id="services"
      className="relative w-full bg-[#FFFFFF] py-12 sm:py-16 md:py-20"
    >
      <div className="max-w-[1440px] mx-auto px-0 sm:px-4 md:px-6 lg:px-8 space-y-14 sm:space-y-16 md:space-y-20">
        {/* BAGIAN 1: Teknologi Baru Untuk Bisnis Anda (3 Layanan: Fotografi, LiDAR, Agrikultur) */}
        <div>
          {/* Headline Bagian 1 */}
          <div className="text-center px-4 mb-6 sm:mb-8 md:mb-12">
            <h2 className="text-[26px] sm:text-[32px] md:text-[38px] lg:text-[42px] font-bold text-[#111111] tracking-tight leading-tight">
              Teknologi Baru Untuk Bisnis Anda
            </h2>
          </div>

          {/* 
            Grid Bagian 1:
            - Mobile (Gambar 2): 1 kolom bertumpuk vertikal dengan celah minimal (gap-1)
            - Desktop (Gambar 1): 3 kolom berjajar rapi ke samping (md:grid-cols-3)
          */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-1 sm:gap-2 md:gap-4 lg:gap-6">
            {businessServices.map((service) => renderServiceCard(service))}
          </div>
        </div>

        {/* BAGIAN 2: Teknologi Terkini Di Layanan Kami. (3 Layanan: Sewa Drone, Pelatihan Pilot Drone, Perawatan Drone) */}
        <div>
          {/* Headline Bagian 2 */}
          <div className="text-center px-4 mb-6 sm:mb-8 md:mb-12">
            <h2 className="text-[26px] sm:text-[32px] md:text-[38px] lg:text-[42px] font-bold text-[#111111] tracking-tight leading-tight">
              Teknologi Terkini Di Layanan Kami.
            </h2>
          </div>

          {/* Tampilan 3D Carousel dengan Framer Motion (Sewa Drone, Pelatihan Pilot Drone, Perawatan Drone) */}
          <Services3DCarousel services={fleetServices} />
        </div>
      </div>
    </section>
  );
}
