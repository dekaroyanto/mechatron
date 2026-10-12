"use client";

import React, { useState } from "react";
import Image from "next/image";

export default function ProductShowcase({ onSelectProduct, activeCategoryFilter }) {
  const [selectedTab, setSelectedTab] = useState("all");

  const categories = [
    { id: "all", label: "Semua Lini Produk" },
    { id: "consumer-drone", label: "Dron Konsumen" },
    { id: "handheld", label: "Kamera & Gimbal" },
    { id: "pro", label: "Sinema Profesional" },
    { id: "enterprise", label: "Solusi Enterprise" },
  ];

  const products = [
    {
      id: "mavic-3-pro",
      category: "consumer-drone",
      title: "DJI Mavic 3 Pro",
      subtitle: "Triple-Camera Flagship dengan Hasselblad 4/3 CMOS",
      description: "Tiga panjang fokus berbeda dalam satu drone: 24mm, 70mm, dan 166mm untuk fleksibilitas sinematik tak tertandingi.",
      price: "Rp 33.750.000",
      tag: "Flagship",
      specs: ["4/3 CMOS Hasselblad", "43 Menit Terbang", "15km O4 Video", "Omnidirectional Obstacle"],
      image: "https://images.unsplash.com/photo-1508614589041-895b88991e3e?auto=format&fit=crop&w=800&q=80",
      badgeColor: "bg-[#0070D5]",
    },
    {
      id: "mini-4-pro",
      category: "consumer-drone",
      title: "DJI Mini 4 Pro",
      subtitle: "Kecil, Ringkas di Bawah 249g, Daya Rekam Maksimal",
      description: "Drone kamera mini paling bertenaga. Pemotretan vertikal asli untuk media sosial dan penghindaran rintangan segala arah.",
      price: "Rp 12.170.000",
      tag: "Populer",
      specs: ["Di bawah 249g", "4K/60fps HDR", "True Vertical Shooting", "Waktu Terbang 34 Menit"],
      image: "https://images.unsplash.com/photo-1527977966376-1c8408f9f108?auto=format&fit=crop&w=800&q=80",
      badgeColor: "bg-[#272727]",
    },
    {
      id: "air-3s",
      category: "consumer-drone",
      title: "DJI Air 3S",
      subtitle: "Dual Camera Malam Hari dengan LiDAR Terdepan",
      description: "Kamera utama 1-inci dan tele medium 70mm. Sistem penginderaan rintangan waktu malam pertama di kelasnya.",
      price: "Rp 17.500.000",
      tag: "Baru",
      specs: ["1-Inci 50MP Kamera Utama", "70mm Telephoto Medium", "LiDAR Malam Hari", "Transmisi O4 20km"],
      image: "https://images.unsplash.com/photo-1506947411487-a56738267384?auto=format&fit=crop&w=800&q=80",
      badgeColor: "bg-[#0070D5]",
    },
    {
      id: "avata-2",
      category: "consumer-drone",
      title: "DJI Avata 2",
      subtitle: "Terbang FPV Imersif dengan Manuver Akrobatik Acro",
      description: "Rasakan sensasi terbang langsung dari kacamata Goggles 3 dengan Motion Controller yang mudah dikendalikan siapa saja.",
      price: "Rp 14.800.000",
      tag: "FPV Sensasional",
      specs: ["Sensor 1/1.3-Inci Ultrawide", "One-Push Flip & Roll", "Pelindung Baling-Baling", "Laten Rendah O4"],
      image: "https://images.unsplash.com/photo-1473968512647-3e447244af8f?auto=format&fit=crop&w=800&q=80",
      badgeColor: "bg-[#303233]",
    },
    {
      id: "osmo-pocket-3",
      category: "handheld",
      title: "DJI Osmo Pocket 3",
      subtitle: "Sensor 1-Inci CMOS & Layar Putar Cepat 2-Inci",
      description: "Kamera saku stabilisasi gimbal paling dicari kreator konten dunia. Warna D-Log M 10-bit dan perekaman audio stereo.",
      price: "Rp 8.200.000",
      tag: "Best Seller",
      specs: ["1-Inci CMOS 4K/120fps", "Layar Putar Sentuh OLED", "Stabilisasi Gimbal 3-Axis", "ActiveTrack 6.0"],
      image: "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?auto=format&fit=crop&w=800&q=80",
      badgeColor: "bg-[#0070D5]",
    },
    {
      id: "action-5-pro",
      category: "handheld",
      title: "Osmo Action 5 Pro",
      subtitle: "Revolusi Kamera Aksi Sensor Generasi Terbaru",
      description: "Dinamika rentang 13.5 stop, baterai tahan hingga 4 jam, dan kedap air hingga kedalaman 20 meter tanpa casing pelindung.",
      price: "Rp 6.099.000",
      tag: "Tahan Air 20m",
      specs: ["Rentang Dinamis 13.5 Stop", "Baterai Hingga 4 Jam", "Waterproof 20 Meter", "Layar Ganda OLED"],
      image: "https://images.unsplash.com/photo-1563861826100-9cb868fdbe1c?auto=format&fit=crop&w=800&q=80",
      badgeColor: "bg-[#3B3E40]",
    },
    {
      id: "dji-mic-2",
      category: "handheld",
      title: "DJI Mic 2",
      subtitle: "Audio Kejernihan Studio dengan 32-Bit Float Internal",
      description: "Peredam bising cerdas bertenaga AI, jangkauan nirkabel 250m, serta perekaman internal tanpa risiko audio clipping.",
      price: "Rp 5.200.000",
      tag: "Studio Audio",
      specs: ["32-Bit Float Internal", "Noise Cancelling AI", "Jarak Transmisi 250m", "Baterai 18 Jam Total"],
      image: "https://images.unsplash.com/photo-1590602847861-f357a9332bbc?auto=format&fit=crop&w=800&q=80",
      badgeColor: "bg-[#272727]",
    },
    {
      id: "rs-4-pro",
      category: "pro",
      title: "DJI RS 4 Pro",
      subtitle: "Penstabil Gimbal Komersial untuk Kamera Bioskop",
      description: "Kapasitas muatan hingga 4.5kg dari serat karbon, motor generasi kedua dengan peningkatan torsi 20%, dan fokus LiDAR canggih.",
      price: "Rp 13.790.000",
      tag: "Pro Cinema",
      specs: ["Muatan Uji 4.5kg", "Lengan Karbon Fiber", "Fokus LiDAR Terpadu", "Dukungan Transmisi O3 Pro"],
      image: "https://images.unsplash.com/photo-1512790182412-b19e6d62bc39?auto=format&fit=crop&w=800&q=80",
      badgeColor: "bg-[#303233]",
    },
    {
      id: "inspire-3",
      category: "pro",
      title: "DJI Inspire 3",
      subtitle: "Kamera Sinematografi Udara 8K Full-Frame",
      description: "Dirancang untuk industri perfilman Hollywood. Perekaman ProRes RAW 8K/75fps dan sistem pelacakan antena RTK presisi milimeter.",
      price: "Rp 215.000.000",
      tag: "Cinema Hollywood",
      specs: ["8K/75fps Full-Frame RAW", "Dual Native ISO 800/4000", "Posisi Sentimeter RTK", "Dual-Control Pilot & DP"],
      image: "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&w=800&q=80",
      badgeColor: "bg-[#0070D5]",
    },
    {
      id: "matrice-350",
      category: "enterprise",
      title: "Matrice 350 RTK",
      subtitle: "Platform Drone Industri Tangguh Tahan Cuaca IP55",
      description: "Solusi untuk inspeksi gardu listrik, penegakan hukum, pemetaan wilayah, dan operasi SAR dalam kondisi cuaca ekstrem.",
      price: "Hubungi Sales",
      tag: "Solusi Industri",
      specs: ["Sertifikasi IP55 Ekstrem", "Waktu Terbang 55 Menit", "Muatan Hingga 2.7kg", "Kamera Termal & Laser"],
      image: "https://images.unsplash.com/photo-1521405924368-64c5b84bec60?auto=format&fit=crop&w=800&q=80",
      badgeColor: "bg-[#272727]",
    },
    {
      id: "agras-t50",
      category: "enterprise",
      title: "DJI Agras T50",
      subtitle: "Revolusi Drone Pertanian Semprot 50kg Presisi",
      description: "Mengoptimalkan hasil panen kelapa sawit, padi, dan perkebunan di Indonesia dengan pompa atomisasi ganda efisiensi tinggi.",
      price: "Hubungi Sales",
      tag: "Pertanian Modern",
      specs: ["Muatan Semprot 40kg / Tabur 50kg", "Pompa Atomisasi Ganda", "Radar Phased Array 360°", "Efisiensi 21 Hektar/Jam"],
      image: "https://images.unsplash.com/photo-1586771107445-d3ca888129ff?auto=format&fit=crop&w=800&q=80",
      badgeColor: "bg-[#0070D5]",
    },
    {
      id: "dji-dock-2",
      category: "enterprise",
      title: "DJI Dock 2",
      subtitle: "Stasiun Pengisian Daya & Lepas Landas Otonom",
      description: "Pengoperasian drone otomatis 24 jam tanpa awak di lokasi terpencil. Pengisian cepat baterai dari 20% ke 90% hanya dalam 32 menit.",
      price: "Hubungi Sales",
      tag: "Otonom 24/7",
      specs: ["Bobot Ringkas 34kg", "Proteksi Cuaca IP55", "Operasi Otomatis Cloud", "Radius Operasi 10km"],
      image: "https://images.unsplash.com/photo-1498084393753-b411b2d26b34?auto=format&fit=crop&w=800&q=80",
      badgeColor: "bg-[#303233]",
    },
  ];

  // Active filter override if passed from parent navbar
  const currentCategory = activeCategoryFilter && activeCategoryFilter !== "all" 
    ? activeCategoryFilter 
    : selectedTab;

  const filteredProducts = currentCategory === "all"
    ? products
    : products.filter((p) => p.category === currentCategory);

  return (
    <section id="products-section" className="py-20 lg:py-28 bg-[#EDEDED] border-t border-[#D1D1D1]">
      <div className="dji-container">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-6">
          <div>
            <div className="text-[12px] font-semibold uppercase tracking-wider text-[#0070D5] mb-2">
              Jajaran Produk Resmi DJI Indonesia
            </div>
            <h2 className="heading-md-strong text-[#000000]">
              Inovasi Terbaik untuk Setiap Kreator
            </h2>
            <p className="body-md text-[#535353] mt-2 max-w-xl">
              Dari pemula hingga sineas pemenang penghargaan, temukan perangkat kamera udara dan genggam yang dirancang dengan presisi mutakhir.
            </p>
          </div>

          {/* Guarantee Badges */}
          <div className="flex items-center gap-4 text-[13px] text-[#3B3E40] bg-[#F7F9FA] p-3 border border-[#D1D1D1]">
            <div className="flex items-center gap-1.5 font-medium">
              <svg className="w-4 h-4 text-[#0070D5]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <span>100% Produk Original</span>
            </div>
            <span className="text-[#9FA3A6]">|</span>
            <div className="flex items-center gap-1.5 font-medium">
              <svg className="w-4 h-4 text-[#0070D5]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <span>Garansi Resmi 1 Tahun</span>
            </div>
          </div>
        </div>

        {/* Category Tabs */}
        <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-8 border-b border-[#D1D1D1] scrollbar-none">
          {categories.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setSelectedTab(tab.id)}
              className={`px-5 py-2.5 rounded-full text-[14px] font-medium transition-all whitespace-nowrap cursor-pointer border-0 ${
                selectedTab === tab.id
                  ? "bg-[#0070D5] text-white shadow-sm"
                  : "bg-[#F7F9FA] text-[#3B3E40] hover:bg-[#D1D1D1] hover:text-[#000000]"
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Product Cards Grid: Strict adherence to DJI design system */}
        {/* - Sharp corners (rounded-none / 0px) */}
        {/* - Color blocking with Surface Alt #F7F9FA */}
        {/* - No heavy drop shadows */}
        {/* - Title hover underline in #0070D5 */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredProducts.map((item) => (
            <div
              key={item.id}
              className="dji-card bg-[#F7F9FA] border border-[#D1D1D1] flex flex-col justify-between group overflow-hidden"
              style={{ borderRadius: "0px" }}
            >
              {/* Product Image Area with Tag */}
              <div className="relative w-full h-[240px] bg-[#EDEDED] overflow-hidden">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                  className="object-cover object-center group-hover:scale-105 transition-transform duration-500 ease-out"
                />
                {/* Floating Tag */}
                <div className="absolute top-3 left-3 z-10">
                  <span className={`text-[11px] font-semibold tracking-wider text-white px-2.5 py-1 ${item.badgeColor}`}>
                    {item.tag}
                  </span>
                </div>
              </div>

              {/* Product Info */}
              <div className="p-5 flex flex-col flex-grow justify-between bg-[#F7F9FA]">
                <div>
                  <h3 className="dji-card-title text-[20px] font-semibold text-[#000000] mb-1">
                    {item.title}
                  </h3>
                  <p className="text-[13px] text-[#535353] leading-snug mb-3">
                    {item.subtitle}
                  </p>
                  
                  {/* Key Feature List */}
                  <div className="space-y-1.5 mb-4 pt-2 border-t border-[#EDEDED]">
                    {item.specs.slice(0, 3).map((sp, sIdx) => (
                      <div key={sIdx} className="text-[12px] text-[#3B3E40] flex items-center gap-2">
                        <span className="w-1 h-1 rounded-full bg-[#0070D5]"></span>
                        <span className="truncate">{sp}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Price and Action Buttons */}
                <div className="pt-4 border-t border-[#D1D1D1] mt-auto">
                  <div className="text-[11px] uppercase tracking-wider text-[#9FA3A6] font-medium">
                    Harga Resmi Indonesia
                  </div>
                  <div className="text-[18px] font-bold text-[#000000] mb-4">
                    {item.price}
                  </div>

                  <div className="flex items-center gap-2">
                    <button
                      onClick={() => onSelectProduct && onSelectProduct(item)}
                      className="btn-primary flex-1 text-[13px] !h-[34px]"
                    >
                      Beli
                    </button>
                    <button
                      onClick={() => onSelectProduct && onSelectProduct(item)}
                      className="btn-outline-dark flex-1 text-[13px] !h-[34px] !border-[#D1D1D1]"
                    >
                      Detail
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View All / Category Banner */}
        <div className="mt-14 bg-[#F7F9FA] border border-[#D1D1D1] p-8 flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <div className="text-[12px] font-semibold uppercase tracking-wider text-[#0070D5] mb-1">
              Konsultasi Pembelian & Demo Produk
            </div>
            <h3 className="heading-sm text-[#000000] font-semibold">
              Butuh Rekomendasi Drone atau Solusi Industri Sesuai Kebutuhan?
            </h3>
            <p className="text-[14px] text-[#535353] mt-1">
              Tim spesialis DJI Indonesia siap membantu demo terbang, pemilihan aksesoris, dan penawaran korporat B2B.
            </p>
          </div>
          <div className="flex items-center gap-3">
            <a href="https://wa.me/628111999999" target="_blank" rel="noopener noreferrer" className="btn-primary !h-[40px] px-6 text-[14px]">
              Chat Spesialis DJI
            </a>
            <a href="#service-centers" className="btn-outline-dark !h-[40px] px-6 text-[14px]">
              Kunjungi Toko Retail
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
