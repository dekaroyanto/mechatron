"use client";

import React, { useState } from "react";
import Image from "next/image";

export default function SearchModal({ isOpen, onClose, onSelectProduct }) {
  const [query, setQuery] = useState("");

  if (!isOpen) return null;

  const allItems = [
    {
      title: "MECHATRON AGRI H-30",
      category: "Drone Pertanian Kapasitas 30L",
      price: "Hubungi Sales Mechatron",
      image: "/images/featured_drone_h30.jpg",
    },
    {
      title: "MECHATRON AGRI H-15",
      category: "Drone Pertanian Lipat Kapasitas 15L",
      price: "Hubungi Sales Mechatron",
      image: "/images/featured_drone_h15.jpg",
    },
    {
      title: "Mechatron Smart Ground Control Station (GCS)",
      category: "Sistem Kendali & RTK",
      price: "Hubungi Sales Mechatron",
      image: "/images/featured_remote_kit.jpg",
    },
    {
      title: "Layanan Fotografi Drone",
      category: "Jasa Dokumentasi Udara",
      price: "Konsultasi Penawaran",
      image: "https://images.unsplash.com/photo-1533063319369-0de118afe00a?auto=format&fit=crop&w=400&q=80",
      link: "/services/fotografi",
    },
    {
      title: "Layanan Pemetaan LiDAR",
      category: "Survei & Pemetaan 3D",
      price: "Konsultasi Penawaran",
      image: "https://images.unsplash.com/photo-1506947411487-a56738267384?auto=format&fit=crop&w=400&q=80",
      link: "/services/lidar",
    },
    {
      title: "Layanan Agrikultur & Pertanian",
      category: "Penyemprotan & Analisis Presisi",
      price: "Konsultasi Penawaran",
      image: "https://images.unsplash.com/photo-1527977966376-1c8408f9f108?auto=format&fit=crop&w=400&q=80",
      link: "/services/agrikultur",
    },
    {
      title: "Layanan Sewa Drone Profesional",
      category: "Rental Armada Drone",
      price: "Sewa Harian / Bulanan",
      image: "https://images.unsplash.com/photo-1473968512647-3e447244af8f?auto=format&fit=crop&w=400&q=80",
      link: "/services/sewadrone",
    },
    {
      title: "Pelatihan Pilot Drone",
      category: "Akademi & Sertifikasi Pilot",
      price: "Paket Pelatihan Resmi",
      image: "https://images.unsplash.com/photo-1753781466620-d2bc4d703b2e?auto=format&fit=crop&w=400&q=80",
      link: "/services/pelatihanpilot",
    },
    {
      title: "Layanan Perawatan Drone",
      category: "Servis & Kalibrasi Resmi",
      price: "Mulai dari Rp 500.000",
      image: "https://images.unsplash.com/photo-1775978150810-7f7410a550a3?auto=format&fit=crop&w=400&q=80",
      link: "/services/perawatandrone",
    },
  ];

  const filtered = query.trim() === ""
    ? allItems
    : allItems.filter(item => 
        item.title.toLowerCase().includes(query.toLowerCase()) || 
        item.category.toLowerCase().includes(query.toLowerCase())
      );

  return (
    <div className="fixed inset-0 z-50 flex items-start justify-center pt-20 px-4 bg-black/60 backdrop-blur-sm">
      <div
        className="bg-[#F7F9FA] border border-[#D1D1D1] w-full max-w-2xl overflow-hidden dji-dropdown-shadow"
        style={{ borderRadius: "0px" }}
      >
        {/* Search Input Bar */}
        <div className="p-4 border-b border-[#D1D1D1] flex items-center gap-3 bg-white">
          <svg className="w-5 h-5 text-[#6C7073]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
          </svg>
          <input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Cari produk Mechatron, misal: AGRI H-30, AGRI H-15, GCS, Baterai..."
            autoFocus
            className="flex-1 text-[16px] text-[#000000] focus:outline-none bg-transparent"
          />
          {query && (
            <button
              onClick={() => setQuery("")}
              className="text-[#9FA3A6] hover:text-[#000000] text-sm"
            >
              Hapus
            </button>
          )}
          <button
            onClick={onClose}
            className="text-[13px] text-[#535353] hover:text-[#0070D5] px-2 py-1 border border-[#D1D1D1] bg-[#EDEDED]"
            style={{ borderRadius: "9999px" }}
          >
            Tutup (ESC)
          </button>
        </div>

        {/* Quick Suggestions / Results */}
        <div className="p-4 max-h-[60vh] overflow-y-auto">
          <div className="text-[11px] font-semibold uppercase text-[#6C7073] tracking-wider mb-3">
            {query.trim() === "" ? "Rekomendasi Pencarian Populer:" : `Hasil Pencarian (${filtered.length}):`}
          </div>

          {filtered.length === 0 ? (
            <div className="py-8 text-center text-[#535353] text-[14px]">
              Tidak ada produk yang cocok dengan &quot;{query}&quot;. Coba cari seri Mavic, Mini, atau Osmo.
            </div>
          ) : (
            <div className="space-y-2">
              {filtered.map((item, idx) => (
                <div
                  key={idx}
                  onClick={() => {
                    if (item.link) {
                      window.location.href = item.link;
                    } else if (onSelectProduct) {
                      onSelectProduct(item);
                    }
                    onClose();
                  }}
                  className="flex items-center justify-between p-3 hover:bg-[#EDEDED] cursor-pointer transition-colors border border-transparent hover:border-[#D1D1D1]"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 relative bg-[#EDEDED] shrink-0 overflow-hidden">
                      <Image
                        src={item.image}
                        alt={item.title}
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div>
                      <div className="text-[14px] font-semibold text-[#000000]">
                        {item.title}
                      </div>
                      <div className="text-[12px] text-[#6C7073]">
                        {item.category}
                      </div>
                    </div>
                  </div>
                  <div className="text-[13px] font-medium text-[#0070D5]">
                    {item.price}
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
