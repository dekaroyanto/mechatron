"use client";

import React from "react";
import Image from "next/image";

export default function Footer() {
  const footerLinks = {
    "Produk Mechatron": [
      { name: "MECHATRON BMT-1525 H-30", href: "#products" },
      { name: "MECHATRON BMT-1323 H-25", href: "#products" },
      { name: "Mechatron Smart GCS Controller", href: "#products" },
      { name: "Mechatron Power Combo Kit", href: "#products" },
      { name: "Suku Cadang & Nozzle Presisi", href: "#products" },
    ],
    "Solusi Pertanian": [
      { name: "Penyemprotan Tanaman Presisi", href: "#" },
      { name: "Penyebaran Pupuk & Benih", href: "#" },
      { name: "Pemetaan Kontur & RTK Sentimeter", href: "#" },
      { name: "Kalkulator Efisiensi Lahan", href: "#" },
      { name: "Studi Kasus Hasil Panen", href: "#" },
    ],
    "Bantuan & Layanan": [
      { name: "Garansi Resmi Mechatron", href: "#" },
      { name: "Pusat Servis & Kalibrasi Drone", href: "#" },
      { name: "Pelatihan & Sertifikasi Pilot Drone", href: "#" },
      { name: "Manual Operasional & Firmware", href: "#" },
      { name: "Konsultasi Teknis Lapangan", href: "#" },
    ],
    "Tentang Mechatron": [
      { name: "Tentang Kami", href: "#" },
      { name: "Kemitraan & Distributor Resmi", href: "#" },
      { name: "Jadwalkan Demo Unit Lapangan", href: "#" },
      { name: "Karir & Rekrutmen", href: "#" },
      { name: "Hubungi Sales Mechatron", href: "#" },
    ],
  };

  return (
    <footer className="bg-[#272727] text-[#EDEDED] pt-16 pb-12 border-t border-[#303233]" style={{ borderRadius: "0px" }}>
      <div className="dji-container">
        {/* Top Newsletter & Region Strip */}
        <div className="pb-12 mb-12 border-b border-[#3B3E40] flex flex-col lg:flex-row items-start lg:items-center justify-between gap-8">
          <div className="max-w-md">
            <h4 className="text-[18px] font-semibold text-white mb-2">
              Jadilah yang Pertama Mengetahui Produk Baru
            </h4>
            <p className="text-[13px] text-[#9FA3A6] leading-relaxed">
              Dapatkan berita rilis produk terbaru, penawaran eksklusif, dan tutorial langsung ke kotak masuk Anda.
            </p>
          </div>

          <div className="w-full lg:w-auto flex flex-col sm:flex-row gap-2 max-w-lg">
            <input
              type="email"
              placeholder="Masukkan alamat email Anda"
              className="bg-[#303233] text-white text-[14px] px-4 py-2.5 border border-[#3B3E40] focus:border-[#0070D5] focus:outline-none flex-grow"
              style={{ borderRadius: "0px" }}
            />
            <button
              className="btn-primary !h-[42px] px-6 text-[14px] font-medium shrink-0"
              style={{ borderRadius: "9999px" }}
            >
              Langganan
            </button>
          </div>
        </div>

        {/* Directory Links Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 pb-12 border-b border-[#3B3E40]">
          {Object.entries(footerLinks).map(([category, links], cIdx) => (
            <div key={cIdx}>
              <h5 className="text-[13px] font-semibold text-white uppercase tracking-wider mb-4">
                {category}
              </h5>
              <ul className="space-y-2.5 p-0 m-0 list-none">
                {links.map((link, lIdx) => (
                  <li key={lIdx}>
                    <a
                      href={link.href}
                      className="text-[13px] text-[#9FA3A6] hover:text-[#0070D5] transition-colors"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom Bar: Copyright & Region */}
        <div className="pt-8 flex flex-col md:flex-row items-start md:items-center justify-between gap-4 text-[12px] text-[#9FA3A6]">
          <div className="flex flex-wrap items-center gap-x-6 gap-y-2">
            <div className="flex items-center gap-2">
              <div className="relative w-5 h-5 rounded overflow-hidden">
                <Image
                  src="/images/mechatron_logo.png"
                  alt="Mechatron"
                  fill
                  className="object-cover"
                />
              </div>
              <span className="font-semibold text-white">MECHATRON</span>
            </div>
            <span>&copy; 2026 Mechatron. Semua Hak Dilindungi Undang-Undang.</span>
            <a href="#" className="hover:text-white transition-colors">Kebijakan Privasi</a>
            <a href="#" className="hover:text-white transition-colors">Syarat Penggunaan</a>
            <a href="#" className="hover:text-white transition-colors">Keamanan Data & Cookie</a>
            <a href="#" className="hover:text-white transition-colors">Peta Situs</a>
          </div>

          <div className="flex items-center gap-2 cursor-pointer hover:text-white transition-colors">
            <svg className="w-4 h-4 text-[#0070D5]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.8" d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <span className="font-medium">Indonesia (Bahasa Indonesia)</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
