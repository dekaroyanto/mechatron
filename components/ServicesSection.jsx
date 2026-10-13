"use client";

import React, { useState } from "react";
import Image from "next/image";

export default function ServicesSection() {
  const [selectedService, setSelectedService] = useState(null);

  // Grup 1: Teknologi Baru Untuk Bisnis Anda (3 Layanan)
  const businessServices = [
    {
      id: "fotografi",
      category: "Creative Aerial & Media",
      title: "Fotografi",
      headline: "Dokumentasi Udara Kualitas Sinematik",
      description:
        "Layanan fotografi drone profesional untuk mendokumentasikan acara, properti, dan proyek kreatif dengan kualitas terbaik.",
      image:
        "https://images.unsplash.com/photo-1533063319369-0de118afe00a?q=80&w=1221&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D",
      details: [
        "Resolusi foto hingga 48MP/50MP RAW dengan dynamic range tinggi",
        "Perekaman video sinematik 4K/60fps dan 10-bit D-Log M",
        "Pilot drone tersertifikasi resmi FASI & berpengalaman",
        "Dokumentasi proyek konstruksi, real estate, event, & pariwisata",
      ],
    },
    {
      id: "lidar",
      category: "Geospatial & Surveying",
      title: "LiDAR",
      headline: "Pemetaan Presisi Tinggi Point Cloud 3D",
      description:
        "Layanan pemetaan dan survei LiDAR berpresisi tinggi untuk topografi, infrastruktur, dan aplikasi lingkungan",
      image:
        "https://images.unsplash.com/photo-1506947411487-a56738267384?auto=format&fit=crop&w=1400&q=85",
      details: [
        "Akurasi sentimeter dengan integrasi RTK & POS mutakhir",
        "Penetrasi vegetasi lebat untuk pemodelan Digital Terrain Model (DTM)",
        "Pengukuran kontur lahan pertanian, perkebunan, & pertambangan",
        "Hasil olah data format LAS, Point Cloud, & Orthomosaic",
      ],
    },
    {
      id: "perawatan-drone",
      category: "Engineering & Maintenance",
      title: "Perawatan Drone",
      headline: "Servis Resmi & Kalibrasi Komponen",
      description:
        "Layanan perbaikan dan perawatan drone untuk menjaga kinerja optimal melalui penggantian komponen, kalibrasi, dan pembaruan perangkat lunak",
      image:
        "https://images.unsplash.com/photo-1775978150810-7f7410a550a3?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D",
      details: [
        "Inspeksi total motor, ESC, flight controller, & sensor obstacle",
        "Kalibrasi gimbal, IMU, compass, & sistem navigasi RTK",
        "Penyediaan suku cadang orisinil & penggantian propeller resmi",
        "Update firmware berstandar pabrikan & uji coba terbang (flight test)",
      ],
    },
  ];

  // Grup 2: Teknologi Terkini Di Layanan Kami. (2 Layanan)
  const fleetServices = [
    {
      id: "sewa-drone",
      category: "Fleet Rental & Equipment",
      title: "Sewa Drone",
      headline: "Armada Profesional Siap Pakai",
      description:
        "Sewa drone untuk pengguna profesional dengan pilihan spesifikasi yang sesuai kebutuhan kerja Anda",
      image:
        "https://images.unsplash.com/photo-1473968512647-3e447244af8f?auto=format&fit=crop&w=1400&q=85",
      details: [
        "Pilihan unit drone pertanian (Agri H-30, H-15) & drone enterprise",
        "Termasuk baterai cadangan, smart fast charger, & remote controller",
        "Opsi sewa harian, mingguan, maupun kontrak proyek bulanan",
        "Dukungan teknisi standby & backup unit operasional",
      ],
    },
    {
      id: "pelatihan-pilot",
      category: "Professional Academy",
      title: "Pelatihan Pilot Drone",
      headline: "Sertifikasi & Keterampilan Lapangan",
      description:
        "Pelatihan pilot drone untuk meningkatkan keterampilan terbang dan pengoperasian secara profesional",
      image:
        "https://images.unsplash.com/photo-1753781466620-d2bc4d703b2e?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D",
      details: [
        "Kurikulum standar keselamatan terbang & regulasi drone Indonesia",
        "Praktik manuver lapangan, navigasi waypoint, & misi otonom",
        "Pelatihan khusus operasional drone penyemprotan & pemetaan",
        "Sertifikat kelulusan pilot drone profesional Mechatron",
      ],
    },
  ];

  const renderServiceCard = (service) => {
    return (
      <div
        key={service.id}
        onClick={() => setSelectedService(service)}
        className="group relative w-full overflow-hidden cursor-pointer select-none
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
      </div>
    );
  };

  return (
    <section
      id="services"
      className="relative w-full bg-[#FFFFFF] py-12 sm:py-16 md:py-20"
    >
      <div className="max-w-[1440px] mx-auto px-0 sm:px-4 md:px-6 lg:px-8 space-y-14 sm:space-y-16 md:space-y-20">
        {/* BAGIAN 1: Teknologi Baru Untuk Bisnis Anda */}
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

        {/* BAGIAN 2: Teknologi Terkini Di Layanan Kami. */}
        <div>
          {/* Headline Bagian 2 */}
          <div className="text-center px-4 mb-6 sm:mb-8 md:mb-12">
            <h2 className="text-[26px] sm:text-[32px] md:text-[38px] lg:text-[42px] font-bold text-[#111111] tracking-tight leading-tight">
              Teknologi Terkini Di Layanan Kami.
            </h2>
          </div>

          {/* 
            Grid Bagian 2:
            - Mobile (Gambar 2): 1 kolom bertumpuk vertikal
            - Desktop (Gambar 1): 2 kolom berjajar rapi ke samping (md:grid-cols-2)
          */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-1 sm:gap-2 md:gap-4 lg:gap-6">
            {fleetServices.map((service) => renderServiceCard(service))}
          </div>
        </div>
      </div>

      {/* Modal Detail Layanan (Pelajari Lebih Lanjut) */}
      {selectedService && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm animate-fade-in">
          <div
            className="bg-white border border-gray-200 w-full max-w-2xl max-h-[90vh] overflow-y-auto relative shadow-2xl p-6 sm:p-8"
            style={{ borderRadius: "0px" }}
          >
            {/* Close Button */}
            <button
              onClick={() => setSelectedService(null)}
              className="absolute top-4 right-4 z-20 w-8 h-8 rounded-full bg-gray-100 text-gray-700 hover:bg-gray-200 flex items-center justify-center transition-colors cursor-pointer"
              aria-label="Tutup Modal"
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
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>

            {/* Header Modal */}
            <div className="mb-6">
              <span className="text-[12px] font-semibold uppercase tracking-wider text-[#0070D5] bg-blue-50 px-2.5 py-1">
                {selectedService.category}
              </span>
              <h3 className="text-[24px] sm:text-[30px] font-bold text-[#111111] mt-3 mb-1">
                Layanan {selectedService.title}
              </h3>
              <p className="text-[14px] sm:text-[15px] text-[#555555]">
                {selectedService.headline}
              </p>
            </div>

            {/* Gambar Banner Modal */}
            <div className="relative w-full h-48 sm:h-56 mb-6 overflow-hidden bg-neutral-900">
              <Image
                src={selectedService.image}
                alt={selectedService.title}
                fill
                className="object-cover object-center"
              />
            </div>

            {/* Deskripsi Lengkap */}
            <div className="mb-6">
              <h4 className="text-[14px] font-bold text-[#111111] uppercase tracking-wider mb-2">
                Deskripsi Layanan:
              </h4>
              <p className="text-[14px] sm:text-[15px] text-[#444444] leading-relaxed">
                {selectedService.description}
              </p>
            </div>

            {/* Keunggulan & Spesifikasi */}
            <div className="mb-8 bg-[#F7F9FA] p-5 border border-gray-200">
              <h4 className="text-[13px] font-bold text-[#111111] uppercase tracking-wider mb-3">
                Keunggulan & Ruang Lingkup:
              </h4>
              <div className="space-y-2">
                {selectedService.details.map((item, idx) => (
                  <div
                    key={idx}
                    className="text-[13px] sm:text-[14px] text-[#333333] flex items-start gap-2.5"
                  >
                    <span className="text-[#0070D5] font-bold mt-0.5">✓</span>
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Actions: Hubungi via WhatsApp */}
            <div className="flex flex-col sm:flex-row items-center justify-end gap-3 pt-4 border-t border-gray-200">
              <button
                onClick={() => setSelectedService(null)}
                className="w-full sm:w-auto px-5 py-2.5 border border-gray-300 text-gray-700 hover:bg-gray-50 text-[14px] font-medium transition-colors cursor-pointer"
              >
                Tutup
              </button>
              <a
                href={`https://wa.me/6281112143111?text=${encodeURIComponent(
                  `Halo Mechatron, saya tertarik untuk konsultasi mengenai Layanan ${selectedService.title}.`,
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-[#0070D5] hover:bg-[#005bb5] text-white px-6 py-2.5 text-[14px] font-medium shadow-sm transition-colors"
              >
                <span>Konsultasi WhatsApp Sekarang</span>
                <svg
                  className="w-4 h-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M14 5l7 7m0 0l-7 7m7-7H3"
                  />
                </svg>
              </a>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
