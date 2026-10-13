"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { allServices } from "@/lib/servicesData";

export default function ServiceDetailView({ service }) {
  if (!service) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <div className="text-center p-8">
          <h1 className="text-2xl font-bold text-gray-900 mb-2">
            Layanan Tidak Ditemukan
          </h1>
          <p className="text-gray-600 mb-4">
            Layanan yang Anda cari tidak tersedia.
          </p>
          <Link
            href="/"
            className="inline-block bg-[#0070D5] text-white px-6 py-2.5 rounded-full font-medium"
          >
            Kembali ke Beranda
          </Link>
        </div>
      </div>
    );
  }

  const whatsappUrl = `https://wa.me/6281112143111?text=${encodeURIComponent(
    `Halo Mechatron, saya tertarik untuk konsultasi mengenai Layanan ${service.title}.`,
  )}`;

  const otherServices = allServices.filter((s) => s.id !== service.id);

  return (
    <div className="min-h-screen flex flex-col bg-[#FFFFFF] text-[#111111] antialiased selection:bg-[#0070D5] selection:text-white">
      {/* 1. Global Navbar Utama (Hanya navbar utama saja, tanpa sub-navbar kedua) */}
      <Navbar />

      <main className="flex-grow">
        {/* 2. Hero Section (Full Viewport Screen, Edge-to-Edge Gambar Tanpa Bagian Putih) */}
        <section
          id="ringkasan"
          className="relative w-full h-screen min-h-[100dvh] flex items-center justify-center overflow-hidden bg-neutral-950"
        >
          {/* Background Image Full Bleed */}
          <div className="absolute inset-0 z-0">
            <Image
              src={service.image}
              alt={service.title}
              fill
              priority
              quality={95}
              sizes="100vw"
              className="object-cover object-center"
            />
            {/* Soft dark vignette */}
            <div className="absolute inset-0 bg-gradient-to-b from-black/55 via-black/20 to-black/65" />
          </div>

          {/* Teks di Langit Tengah (Center-Aligned persis Gambar 1) */}
          <div className="relative z-10 max-w-4xl mx-auto px-4 text-center flex flex-col items-center pt-16 sm:pt-20">
            {/* Subtitle Atas */}
            <p className="text-[13px] sm:text-[16px] md:text-[18px] font-normal text-white/90 tracking-wide mb-2 sm:mb-3">
              {service.category}
            </p>

            {/* Huge Headline Title */}
            <h1 className="text-[36px] sm:text-[56px] md:text-[70px] lg:text-[78px] font-extrabold text-white tracking-tight leading-none uppercase mb-2 sm:mb-3">
              MECHATRON {service.title.toUpperCase()}
            </h1>

            {/* Subtitle / Headline */}
            <p className="text-[16px] sm:text-[22px] md:text-[25px] font-medium text-white/95 tracking-tight mb-3 sm:mb-4 max-w-2xl leading-snug">
              {service.headline}
            </p>

            {/* Tagline / Deskripsi Tambahan agar Hero tidak kosong */}
            {service.tagline && (
              <p className="text-[13px] sm:text-[15px] md:text-[17px] font-normal text-white/85 max-w-2xl leading-relaxed mb-7 sm:mb-9 drop-shadow">
                {service.tagline}
              </p>
            )}

            {/* Dual Pill Buttons (Sesuai Gambar 1: Putih & Kaca Transparan) */}
            <div className="flex items-center justify-center gap-3 sm:gap-4 flex-wrap">
              {/* Tombol Putih 'Buy Now' */}
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white hover:bg-gray-100 text-[#111111] font-medium text-[13px] sm:text-[15px] px-7 sm:px-9 py-2.5 sm:py-3 rounded-full transition-all shadow-md hover:scale-105 active:scale-95"
              >
                Konsultasi Sekarang
              </a>

              {/* Tombol Kaca Transparan 'Watch Video' */}
              <a
                href="#fitur"
                className="bg-white/25 hover:bg-white/35 backdrop-blur-md text-white font-medium text-[13px] sm:text-[15px] px-6 sm:px-8 py-2.5 sm:py-3 rounded-full transition-all inline-flex items-center gap-2 hover:scale-105 active:scale-95"
              >
                <span>Lihat Fitur Lengkap</span>
                <span className="text-[10px]">▶</span>
              </a>
            </div>

            {/* Key Highlights Chips di Dasar Hero Banner */}
            {service.highlights && service.highlights.length > 0 && (
              <div className="mt-8 sm:mt-10 flex flex-wrap items-center justify-center gap-2 sm:gap-3 max-w-3xl">
                {service.highlights.slice(0, 4).map((h, hIdx) => (
                  <div
                    key={hIdx}
                    className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-black/45 backdrop-blur-md border border-white/20 text-white/95 text-[11px] sm:text-[13px] font-medium shadow-sm hover:border-white/50 transition-colors"
                  >
                    <span className="text-[#60A5FA] font-bold">{h.stat}</span>
                    <span className="text-white/40">•</span>
                    <span>{h.title}</span>
                  </div>
                ))}
              </div>
            )}
          </div>
        </section>

        {/* 3. Editorial Narrative Text Block (Sesuai Gambar 2 Bagian Atas) */}
        <section className="py-16 sm:py-20 md:py-24 bg-white">
          <div className="max-w-[860px] mx-auto px-6 text-center">
            <p className="text-[15px] sm:text-[17px] md:text-[18px] text-[#222222] font-normal leading-[1.7] tracking-[-0.01em]">
              {service.longDescription}
            </p>
          </div>
        </section>

        {/* 4. Asymmetric Bento Grid (Sesuai Gambar 2: GAMBAR FULLCARD, TEKS MENIMPA GAMBAR) */}
        <section id="fitur" className="pb-20 sm:pb-28 bg-white">
          <div className="max-w-[1360px] mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 sm:gap-6">
              {/* KARTU 1 (Kiri Besar / Tall Card: GAMBAR FULLCARD, TEKS MENIMPA GAMBAR) */}
              <div className="lg:col-span-7 rounded-[24px] sm:rounded-[32px] overflow-hidden relative bg-neutral-900 min-h-[480px] sm:min-h-[560px] lg:min-h-[620px] flex flex-col justify-start border border-gray-100/80 shadow-sm">
                {/* 100% Full Card Background Image */}
                <div className="absolute inset-0 z-0">
                  <Image
                    src={service.deepFeatures?.[0]?.image || service.image}
                    alt={service.title}
                    fill
                    quality={90}
                    className="object-cover object-center"
                  />
                  {/* Subtle dark gradient scrim agar teks putih tajam terbaca di atas gambar */}
                  <div className="absolute inset-0 bg-gradient-to-b from-black/75 via-black/25 to-black/45" />
                </div>

                {/* Teks Menimpa Gambar di Kiri Atas */}
                <div className="p-7 sm:p-10 z-10 relative text-white">
                  <span className="text-[11px] font-semibold uppercase tracking-wider text-[#60A5FA] mb-2 block">
                    Fitur Unggulan
                  </span>
                  <h2 className="text-[24px] sm:text-[30px] lg:text-[36px] font-bold text-white tracking-tight leading-tight max-w-md">
                    {service.deepFeatures?.[0]?.title || service.headline}
                  </h2>
                  <p className="text-[14px] sm:text-[15px] text-white/90 mt-2.5 max-w-md leading-relaxed">
                    {service.deepFeatures?.[0]?.description ||
                      service.description}
                  </p>

                  {/* Bullet points */}
                  {service.deepFeatures?.[0]?.bullets && (
                    <div className="mt-4 space-y-2">
                      {service.deepFeatures[0].bullets.map((b, bIdx) => (
                        <div
                          key={bIdx}
                          className="flex items-center gap-2.5 text-[13px] text-white/95"
                        >
                          <span className="text-[#60A5FA] font-bold">✓</span>
                          <span>{b}</span>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              </div>

              {/* KOLOM KANAN: DUA KARTU BERTUMPUK (GAMBAR FULLCARD, TEKS MENIMPA GAMBAR) */}
              <div className="lg:col-span-5 flex flex-col gap-5 sm:gap-6">
                {/* KARTU 2 (Kanan Atas) */}
                <div className="rounded-[24px] sm:rounded-[32px] overflow-hidden relative bg-neutral-900 min-h-[260px] sm:min-h-[295px] flex flex-col justify-start border border-gray-100/80 shadow-sm">
                  {/* 100% Full Card Background Image */}
                  <div className="absolute inset-0 z-0">
                    <Image
                      src={service.deepFeatures?.[1]?.image || service.image}
                      alt={service.title}
                      fill
                      quality={90}
                      className="object-cover object-center"
                    />
                    <div className="absolute inset-0 bg-gradient-to-r from-black/75 via-black/40 to-black/25" />
                  </div>

                  {/* Teks Menimpa Gambar di Kiri */}
                  <div className="p-6 sm:p-8 z-10 relative text-white">
                    <span className="text-[11px] font-semibold uppercase tracking-wider text-[#60A5FA] mb-1.5 block">
                      Keandalan Sistem
                    </span>
                    <h2 className="text-[20px] sm:text-[24px] font-bold text-white tracking-tight leading-snug max-w-xs">
                      {service.deepFeatures?.[1]?.title ||
                        service.highlights?.[0]?.title ||
                        "Keandalan & Standar Mutu"}
                    </h2>
                    <p className="text-[13px] text-white/90 mt-2 max-w-xs leading-relaxed">
                      {service.deepFeatures?.[1]?.description ||
                        service.highlights?.[0]?.desc}
                    </p>
                  </div>
                </div>

                {/* KARTU 3 (Kanan Bawah) */}
                <div className="rounded-[24px] sm:rounded-[32px] overflow-hidden relative bg-neutral-900 min-h-[260px] sm:min-h-[295px] flex flex-col justify-start border border-gray-100/80 shadow-sm">
                  {/* 100% Full Card Background Image */}
                  <div className="absolute inset-0 z-0">
                    <Image
                      src={service.image}
                      alt={service.title}
                      fill
                      quality={90}
                      className="object-cover object-center"
                    />
                    <div className="absolute inset-0 bg-gradient-to-r from-black/75 via-black/40 to-black/25" />
                  </div>

                  {/* Teks Menimpa Gambar di Kiri */}
                  <div className="p-6 sm:p-8 z-10 relative text-white">
                    <span className="text-[11px] font-semibold uppercase tracking-wider text-[#60A5FA] mb-1.5 block">
                      Regulasi & Keselamatan
                    </span>
                    <h2 className="text-[20px] sm:text-[24px] font-bold text-white tracking-tight leading-snug max-w-xs">
                      {service.highlights?.[1]?.title ||
                        "Spesifikasi & Keamanan Regulasi"}
                    </h2>
                    <p className="text-[13px] text-white/90 mt-2 max-w-xs leading-relaxed">
                      {service.highlights?.[1]?.desc ||
                        "Didukung sertifikasi resmi pilot FASI dan jaminan prosedur keselamatan standar CASR."}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
