import React from "react";
import Image from "next/image";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata = {
  title: "Mechatron Services - Solusi Drone Profesional",
  description:
    "Jelajahi seluruh layanan drone profesional Mechatron: Fotografi sinematik, Pemetaan LiDAR, Agrikultur presisi, Sewa Drone, Pelatihan Pilot Berlisensi, dan Perawatan Drone.",
};

export default function ServicesPage() {
  const whatsappUrl = `https://wa.me/6281112143111?text=${encodeURIComponent(
    "Halo Mechatron, saya tertarik untuk konsultasi mengenai Layanan Drone Mechatron.",
  )}`;

  return (
    <div className="min-h-screen flex flex-col bg-[#FFFFFF] text-[#111111] antialiased selection:bg-[#0070D5] selection:text-white">
      {/* 1. Global Navigation Bar */}
      <Navbar />

      <main className="flex-grow">
        {/* 2. Hero Section (Full Viewport Screen, Gambar 1 Desktop & Gambar 2 Mobile, Tanpa Bagian Putih) */}
        <section className="relative w-full h-screen min-h-[100dvh] flex items-center justify-center overflow-hidden bg-neutral-950">
          {/* Desktop Background (Gambar 1: Drone Sunset Sawah Sesuai Referensi) */}
          <div className="hidden md:block absolute inset-0 z-0">
            <Image
              src="/images/agrikultur-drone-sunset.jpg"
              alt="Mechatron Aerial Services"
              fill
              priority
              quality={95}
              sizes="100vw"
              className="object-cover object-center"
            />
            {/* Soft gradient overlay agar teks terbaca jelas */}
            <div className="absolute inset-0 bg-gradient-to-b from-black/55 via-black/20 to-black/65" />
          </div>

          {/* Mobile Background (Gambar 2: Drone Spraying Hills Sesuai Referensi) */}
          <div className="block md:hidden absolute inset-0 z-0">
            <Image
              src="/images/agrikultur-drone-spraying.jpg"
              alt="Mechatron Aerial Services"
              fill
              priority
              quality={95}
              sizes="100vw"
              className="object-cover object-center"
            />
            {/* Soft gradient overlay agar teks terbaca jelas */}
            <div className="absolute inset-0 bg-gradient-to-b from-black/55 via-black/20 to-black/65" />
          </div>

          {/* Teks di Langit Tengah (Center-Aligned persis Gambar 1) */}
          <div className="relative z-10 max-w-4xl mx-auto px-4 text-center flex flex-col items-center pt-16 sm:pt-20">
            {/* Subtitle Atas */}
            <p className="text-[13px] sm:text-[16px] md:text-[18px] font-normal text-white/90 tracking-wide mb-2 sm:mb-3">
              Solusi Drone Profesional & Rekayasa Presisi
            </p>

            {/* Huge Headline Title */}
            <h1 className="text-[38px] sm:text-[58px] md:text-[72px] lg:text-[80px] font-extrabold text-white tracking-tight leading-none uppercase mb-2 sm:mb-3">
              MECHATRON SERVICES
            </h1>

            {/* Subtitle / Tagline */}
            <p className="text-[17px] sm:text-[22px] md:text-[26px] font-medium text-white/95 tracking-tight mb-8 sm:mb-10">
              Wonders in Every Flight
            </p>

            {/* Dual Pill Buttons (Sesuai Gambar 1: Putih & Kaca Transparan) */}
            <div className="flex items-center justify-center gap-3 sm:gap-4 flex-wrap">
              {/* Tombol Putih 'Buy Now' */}
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white hover:bg-gray-100 text-[#111111] font-medium text-[13px] sm:text-[15px] px-7 sm:px-9 py-2.5 sm:py-3 rounded-full transition-all shadow-md"
              >
                Konsultasi Sekarang
              </a>

              {/* Tombol Kaca Transparan 'Watch Video' */}
              <a
                href="#katalog-bento"
                className="bg-white/25 hover:bg-white/35 backdrop-blur-md text-white font-medium text-[13px] sm:text-[15px] px-6 sm:px-8 py-2.5 sm:py-3 rounded-full transition-all inline-flex items-center gap-2"
              >
                <span>Jelajahi Layanan</span>
                <span className="text-[10px]">▶</span>
              </a>
            </div>
          </div>
        </section>

        {/* 4. Editorial Narrative Text Block (Sesuai Gambar 2 Bagian Atas) */}
        <section className="py-16 sm:py-20 md:py-24 bg-white">
          <div className="max-w-[860px] mx-auto px-6 text-center">
            <p className="text-[15px] sm:text-[17px] md:text-[18px] text-[#222222] font-normal leading-[1.7] tracking-[-0.01em]">
              Hadirkan keunggulan operasional dan nilai tambah bisnis Anda
              dengan rangkaian solusi drone enterprise terintegrasi dari
              Mechatron. Dari dokumentasi visual sinematik beresolusi 50MP dan
              4K HDR, pemetaan LiDAR dengan akurasi sentimeter, drone pertanian
              presisi berkapasitas besar, hingga armada rental siap pakai,
              pelatihan pilot resmi FASI, dan perawatan terakreditasi pabrikan.
              Kami menghadirkan teknologi mutakhir dengan presisi terbaik untuk
              setiap kebutuhan kerja Anda.
            </p>
          </div>
        </section>

        {/* 5. Asymmetric Bento Grid (Sesuai Gambar 2: GAMBAR FULLCARD, TEKS MENIMPA GAMBAR) */}
        <section id="katalog-bento" className="pb-24 sm:pb-32 bg-white">
          <div className="max-w-[1360px] mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
            {/* GRUP 1: TEKNOLOGI BARU UNTUK BISNIS ANDA */}
            <div>
              <div className="mb-8">
                <span className="text-[12px] font-semibold uppercase tracking-wider text-[#0070D5] block mb-1">
                  Solusi Bisnis & Pemetaan
                </span>
                <h2 className="text-[26px] sm:text-[32px] font-bold text-[#111111] tracking-tight">
                  Teknologi Baru Untuk Bisnis Anda
                </h2>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 sm:gap-6">
                {/* KARTU 1 (Kiri Besar / Tall Card): FOTOGRAFI */}
                <Link
                  href="/services/fotografi"
                  className="group lg:col-span-7 rounded-[24px] sm:rounded-[32px] overflow-hidden relative min-h-[480px] sm:min-h-[560px] lg:min-h-[620px] flex flex-col justify-start transition-all duration-500 hover:shadow-2xl block border border-gray-100/80 bg-neutral-900"
                >
                  <div className="absolute inset-0 z-0">
                    <Image
                      src="https://images.unsplash.com/photo-1533063319369-0de118afe00a?q=80&w=1221&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D"
                      alt="Layanan Fotografi Drone"
                      fill
                      quality={90}
                      className="object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out"
                    />
                    <div className="absolute inset-0 bg-gradient-to-b from-black/75 via-black/25 to-black/45 group-hover:from-black/85 transition-opacity duration-500" />
                  </div>

                  <div className="relative z-10 p-7 sm:p-10 text-white">
                    <span className="text-[11px] font-semibold uppercase tracking-wider text-[#60A5FA] mb-2 block">
                      Creative Aerial & Media
                    </span>
                    <h3 className="text-[24px] sm:text-[30px] lg:text-[36px] font-bold text-white tracking-tight leading-tight max-w-md">
                      Fotografi Sinematik, Sudut Pandang Presisi
                    </h3>
                    <p className="text-[14px] sm:text-[15px] text-white/90 mt-2.5 max-w-sm leading-relaxed">
                      Dokumentasi udara kualitas sinematik 50MP RAW dan video 4K
                      HDR untuk profil proyek & event komersial.
                    </p>
                    <div className="inline-flex items-center gap-1.5 text-[13px] sm:text-[14px] font-medium text-white mt-4 group-hover:text-blue-300 transition-colors">
                      <span>Pelajari Lebih Lanjut</span>
                      <span className="group-hover:translate-x-1.5 transition-transform">
                        ›
                      </span>
                    </div>
                  </div>
                </Link>

                {/* KOLOM KANAN: DUA KARTU BERTUMPUK (LIDAR & AGRIKULTUR) */}
                <div className="lg:col-span-5 flex flex-col gap-5 sm:gap-6">
                  {/* KARTU 2 (Kanan Atas): LIDAR */}
                  <Link
                    href="/services/lidar"
                    className="group rounded-[24px] sm:rounded-[32px] overflow-hidden relative min-h-[260px] sm:min-h-[295px] flex flex-col justify-start transition-all duration-500 hover:shadow-2xl block border border-gray-100/80 bg-neutral-900"
                  >
                    <div className="absolute inset-0 z-0">
                      <Image
                        src="https://images.unsplash.com/photo-1506947411487-a56738267384?auto=format&fit=crop&w=1400&q=85"
                        alt="Pemetaan LiDAR Drone"
                        fill
                        quality={90}
                        className="object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out"
                      />
                      <div className="absolute inset-0 bg-gradient-to-r from-black/75 via-black/40 to-black/25 group-hover:from-black/85 transition-opacity duration-500" />
                    </div>

                    <div className="relative z-10 p-6 sm:p-8 text-white">
                      <span className="text-[11px] font-semibold uppercase tracking-wider text-[#60A5FA] mb-1.5 block">
                        Geospatial & Surveying
                      </span>
                      <h3 className="text-[20px] sm:text-[24px] font-bold text-white tracking-tight leading-snug max-w-xs">
                        Pemetaan LiDAR & Point Cloud 3D
                      </h3>
                      <p className="text-[13px] text-white/90 mt-2 max-w-xs leading-relaxed">
                        Akurasi topografi tingkat sentimeter dengan penetrasi
                        kanopi vegetasi lebat.
                      </p>
                      <div className="inline-flex items-center gap-1 text-[13px] font-medium text-white mt-3 group-hover:text-blue-300 transition-colors">
                        <span>Pelajari Lebih Lanjut</span>
                        <span className="group-hover:translate-x-1.5 transition-transform">
                          ›
                        </span>
                      </div>
                    </div>
                  </Link>

                  {/* KARTU 3 (Kanan Bawah): AGRIKULTUR */}
                  <Link
                    href="/services/agrikultur"
                    className="group rounded-[24px] sm:rounded-[32px] overflow-hidden relative min-h-[260px] sm:min-h-[295px] flex flex-col justify-start transition-all duration-500 hover:shadow-2xl block border border-gray-100/80 bg-neutral-900"
                  >
                    <div className="absolute inset-0 z-0">
                      <Image
                        src="/images/agrikultur-drone-sunset.jpg"
                        alt="Agrikultur Drone Pintar"
                        fill
                        quality={90}
                        className="object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out"
                      />
                      <div className="absolute inset-0 bg-gradient-to-r from-black/75 via-black/40 to-black/25 group-hover:from-black/85 transition-opacity duration-500" />
                    </div>

                    <div className="relative z-10 p-6 sm:p-8 text-white">
                      <span className="text-[11px] font-semibold uppercase tracking-wider text-[#60A5FA] mb-1.5 block">
                        Smart Agriculture & Farming
                      </span>
                      <h3 className="text-[20px] sm:text-[24px] font-bold text-white tracking-tight leading-snug max-w-xs">
                        Agrikultur & Pertanian Pintar
                      </h3>
                      <p className="text-[13px] text-white/90 mt-2 max-w-xs leading-relaxed">
                        Penyemprotan otonom kapasitas 30L & pemetaan
                        multispektral NDVI presisi.
                      </p>
                      <div className="inline-flex items-center gap-1 text-[13px] font-medium text-white mt-3 group-hover:text-blue-300 transition-colors">
                        <span>Pelajari Lebih Lanjut</span>
                        <span className="group-hover:translate-x-1.5 transition-transform">
                          ›
                        </span>
                      </div>
                    </div>
                  </Link>
                </div>
              </div>
            </div>

            {/* GRUP 2: TEKNOLOGI TERKINI DI LAYANAN KAMI. */}
            <div>
              <div className="mb-8">
                <span className="text-[12px] font-semibold uppercase tracking-wider text-[#0070D5] block mb-1">
                  Ekosistem Armada & Keahlian
                </span>
                <h2 className="text-[26px] sm:text-[32px] font-bold text-[#111111] tracking-tight">
                  Teknologi Terkini Di Layanan Kami.
                </h2>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-5 sm:gap-6">
                {/* KARTU 4: SEWA DRONE */}
                <Link
                  href="/services/sewadrone"
                  className="group rounded-[24px] sm:rounded-[32px] overflow-hidden relative min-h-[360px] sm:min-h-[420px] flex flex-col justify-start transition-all duration-500 hover:shadow-2xl block border border-gray-100/80 bg-neutral-900"
                >
                  <div className="absolute inset-0 z-0">
                    <Image
                      src="https://images.unsplash.com/photo-1473968512647-3e447244af8f?auto=format&fit=crop&w=1400&q=85"
                      alt="Sewa Drone Mechatron"
                      fill
                      quality={90}
                      className="object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out"
                    />
                    <div className="absolute inset-0 bg-gradient-to-b from-black/75 via-black/30 to-black/55 group-hover:from-black/85 transition-opacity duration-500" />
                  </div>

                  <div className="p-7 sm:p-9 z-10 relative text-white">
                    <span className="text-[11px] font-semibold uppercase tracking-wider text-[#60A5FA] mb-1.5 block">
                      Fleet Rental & Equipment
                    </span>
                    <h3 className="text-[22px] sm:text-[24px] font-bold text-white tracking-tight leading-snug">
                      Sewa Drone Profesional
                    </h3>
                    <p className="text-[13px] sm:text-[14px] text-white/90 mt-2 leading-relaxed">
                      Pilihan armada pertanian (Agri H-30/H-15) & enterprise
                      lengkap dengan baterai melimpah serta teknisi siaga.
                    </p>
                    <div className="inline-flex items-center gap-1.5 text-[13px] font-medium text-white mt-4 group-hover:text-blue-300 transition-colors">
                      <span>Pelajari Opsi Sewa</span>
                      <span className="group-hover:translate-x-1.5 transition-transform">
                        ›
                      </span>
                    </div>
                  </div>
                </Link>

                {/* KARTU 5: PELATIHAN PILOT DRONE */}
                <Link
                  href="/services/pelatihanpilot"
                  className="group rounded-[24px] sm:rounded-[32px] overflow-hidden relative min-h-[360px] sm:min-h-[420px] flex flex-col justify-start transition-all duration-500 hover:shadow-2xl block border border-gray-100/80 bg-neutral-900"
                >
                  <div className="absolute inset-0 z-0">
                    <Image
                      src="https://images.unsplash.com/photo-1527977966376-1c8408f9f108?auto=format&fit=crop&w=1200&q=85"
                      alt="Pelatihan Pilot Drone"
                      fill
                      quality={90}
                      className="object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out"
                    />
                    <div className="absolute inset-0 bg-gradient-to-b from-black/75 via-black/30 to-black/55 group-hover:from-black/85 transition-opacity duration-500" />
                  </div>

                  <div className="p-7 sm:p-9 z-10 relative text-white">
                    <span className="text-[11px] font-semibold uppercase tracking-wider text-[#60A5FA] mb-1.5 block">
                      Professional Academy
                    </span>
                    <h3 className="text-[22px] sm:text-[24px] font-bold text-white tracking-tight leading-snug">
                      Pelatihan Pilot Drone
                    </h3>
                    <p className="text-[13px] sm:text-[14px] text-white/90 mt-2 leading-relaxed">
                      Kurikulum berstandar resmi FASI, simulasi cuaca ekstrem,
                      dan praktik lapangan langsung hingga bersertifikat.
                    </p>
                    <div className="inline-flex items-center gap-1.5 text-[13px] font-medium text-white mt-4 group-hover:text-blue-300 transition-colors">
                      <span>Pelajari Kurikulum</span>
                      <span className="group-hover:translate-x-1.5 transition-transform">
                        ›
                      </span>
                    </div>
                  </div>
                </Link>

                {/* KARTU 6: PERAWATAN DRONE */}
                <Link
                  href="/services/perawatandrone"
                  className="group rounded-[24px] sm:rounded-[32px] overflow-hidden relative min-h-[360px] sm:min-h-[420px] flex flex-col justify-start transition-all duration-500 hover:shadow-2xl block border border-gray-100/80 bg-neutral-900"
                >
                  <div className="absolute inset-0 z-0">
                    <Image
                      src="https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=1200&q=85"
                      alt="Perawatan Drone"
                      fill
                      quality={90}
                      className="object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out"
                    />
                    <div className="absolute inset-0 bg-gradient-to-b from-black/75 via-black/30 to-black/55 group-hover:from-black/85 transition-opacity duration-500" />
                  </div>

                  <div className="p-7 sm:p-9 z-10 relative text-white">
                    <span className="text-[11px] font-semibold uppercase tracking-wider text-[#60A5FA] mb-1.5 block">
                      Engineering & Maintenance
                    </span>
                    <h3 className="text-[22px] sm:text-[24px] font-bold text-white tracking-tight leading-snug">
                      Perawatan & Servis Drone
                    </h3>
                    <p className="text-[13px] sm:text-[14px] text-white/90 mt-2 leading-relaxed">
                      Layanan perbaikan, kalibrasi gimbal IMU, penggantian suku
                      cadang orisinil, & uji terbang berstandar pabrikan.
                    </p>
                    <div className="inline-flex items-center gap-1.5 text-[13px] font-medium text-white mt-4 group-hover:text-blue-300 transition-colors">
                      <span>Pelajari Servis</span>
                      <span className="group-hover:translate-x-1.5 transition-transform">
                        ›
                      </span>
                    </div>
                  </div>
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* 6. Bottom Banner Penutup Khas DJI */}
        <section className="py-20 sm:py-24 bg-[#141416] text-white text-center">
          <div className="max-w-3xl mx-auto px-6">
            <h2 className="text-[28px] sm:text-[40px] font-bold tracking-tight mb-4">
              Mulai Proyek Drone Anda Bersama Mechatron
            </h2>
            <p className="text-[15px] sm:text-[17px] text-white/70 max-w-xl mx-auto mb-8">
              Konsultasikan spesifikasi teknis dan kebutuhan armada bersama tim
              ahli kami.
            </p>
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-[#0070D5] hover:bg-[#005bb5] text-white text-[14px] sm:text-[15px] font-medium px-8 py-3.5 rounded-full shadow-lg transition-all"
            >
              <span>Hubungi Kami via WhatsApp: +62 811 1214 3111</span>
              <span>›</span>
            </a>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
