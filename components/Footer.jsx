"use client";

import React from "react";
import Image from "next/image";

export default function Footer() {
  const footerLinks = {
    "Produk Mechatron": [
      { name: "MECHATRON AGRI H-30", href: "#products" },
      { name: "MECHATRON AGRI H-15", href: "#products" },
    ],
    "Solusi Pertanian": [
      { name: "Penyemprotan Tanaman Presisi", href: "#" },
      { name: "Penyebaran Pupuk & Benih", href: "#" },
      { name: "Pemetaan Kontur & RTK Sentimeter", href: "#" },
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
    ],
  };

  return (
    <footer
      className="bg-[#272727] text-[#EDEDED] pt-16 pb-12 border-t border-[#303233]"
      style={{ borderRadius: "0px" }}
    >
      <div className="dji-container">
        {/* Top Newsletter & Region Strip */}

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
            <span>
              &copy; 2026 Mechatron. Semua Hak Dilindungi Undang-Undang.
            </span>
            <a href="#" className="hover:text-white transition-colors">
              Kebijakan Privasi
            </a>
            <a href="#" className="hover:text-white transition-colors">
              Syarat Penggunaan
            </a>
            <a href="#" className="hover:text-white transition-colors">
              Keamanan Data & Cookie
            </a>
            <a href="#" className="hover:text-white transition-colors">
              Peta Situs
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
