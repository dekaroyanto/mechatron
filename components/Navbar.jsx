"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";

export default function Navbar({ onSearchClick, onSelectCategory }) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    {
      name: "Produk Drone",
      id: "products",
      items: [
        {
          title: "MECHATRON AGRI H-30",
          desc: "Heavy Payload 30L Agricultural Drone",
        },
        {
          title: "MECHATRON AGRI H-15",
          desc: "High-Efficiency 15L Foldable Drone",
        },
      ],
    },
    {
      name: "Sistem & Ekosistem",
      id: "ecosystem",
      items: [
        {
          title: "Mechatron AGRI",
          desc: "Smart Agricultural Drone",
        },
        {
          title: "Mechatron Smart GCS Controller",
          desc: "Ground Control Station Layar Terang & Dual RTK",
        },
        {
          title: "Mechatron Power Combo Kit",
          desc: "Smart Battery & High-Speed Generator Fast Charger",
        },
        {
          title: "Suku Cadang & Propeller",
          desc: "Suku Cadang Orisinil Resmi Mechatron",
        },
      ],
    },
    {
      name: "Solusi Pertanian",
      id: "solutions",
      items: [
        {
          title: "Penyemprotan Pestisida & Herbisida",
          desc: "Akurasi Tinggi Tanpa Drift Berlebih",
        },
        {
          title: "Penyebaran Pupuk & Benih",
          desc: "Penyebaran Granul Rata Kapasitas Besar",
        },
        {
          title: "Pemetaan & RTK Sentimeter",
          desc: "Navigasi Otonom Kontur Medan Otomatis",
        },
      ],
    },
    {
      name: "Services & Layanan",
      id: "services",
      items: [
        {
          title: "Fotografi Drone",
          desc: "Dokumentasi Udara Kualitas Sinematik",
          link: "/services/fotografi",
        },
        {
          title: "Pemetaan LiDAR",
          desc: "Survei & Point Cloud 3D Presisi Tinggi",
          link: "/services/lidar",
        },
        {
          title: "Agrikultur & Pertanian",
          desc: "Penyemprotan Otonom & Analisis Lahan",
          link: "/services/agrikultur",
        },
        {
          title: "Sewa Drone Profesional",
          desc: "Rental Armada Drone Sesuai Kebutuhan",
          link: "/services/sewadrone",
        },
        {
          title: "Pelatihan Pilot Drone",
          desc: "Akademi Sertifikasi & Lisensi Terbang",
          link: "/services/pelatihanpilot",
        },
        {
          title: "Perawatan & Servis Drone",
          desc: "Kalibrasi, Komponen, & Servis Resmi",
          link: "/services/perawatandrone",
        },
      ],
    },
    {
      name: "Layanan & Dukungan",
      id: "support",
      items: [
        {
          title: "Garansi Resmi Mechatron",
          desc: "Perlindungan Garansi Unit & Komponen Utama",
        },
        {
          title: "Pusat Servis & Kalibrasi",
          desc: "Teknisi Tersertifikasi & Suku Cadang Ready",
        },
        {
          title: "Panduan & Firmware",
          desc: "Buku Manual Operasional & Software Update",
        },
      ],
    },
    {
      name: "Tentang Mechatron",
      id: "about",
      items: [
        {
          title: "Profil Mechatron Indonesia",
          desc: "Pelopor Teknologi Drone Pertanian Terdepan",
        },
        {
          title: "Kemitraan & Distributor Resmi",
          desc: "Jaringan Dealer di Seluruh Indonesia",
        },
        {
          title: "Hubungi Tim Sales",
          desc: "Konsultasi Pembelian & Jadwal Demo Unit",
        },
        {
          title: "Berita & Wawasan Drone",
          desc: "Kabar Terkini Drone Pertanian & Agrikultur",
          link: "/blog",
        },
      ],
    },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/95 backdrop-blur-md border-b border-[#E5E7EB] shadow-[0_2px_8px_rgba(0,0,0,0.06)] py-3 text-[#111827]"
          : "bg-gradient-to-b from-black/70 via-black/30 to-transparent py-4 text-white"
      }`}
    >
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Left: Official Mechatron Brand Logo */}
        <div className="flex items-center">
          <Link
            href="/"
            className="flex items-center gap-2.5 group focus:outline-none select-none"
            aria-label="Mechatron Official"
          >
            <div className="relative w-8 h-8 sm:w-9 sm:h-9 shrink-0 transition-transform duration-200 group-hover:scale-105 shadow-sm rounded-[7px] overflow-hidden">
              <Image
                src="/images/mechatron_logo.png"
                alt="Mechatron Official Logo"
                fill
                priority
                className="object-cover"
              />
            </div>
            <span
              className={`font-extrabold tracking-tight text-[17px] sm:text-[19px] transition-colors ${
                scrolled
                  ? "text-[#002B7F] group-hover:text-[#0070D5]"
                  : "text-white group-hover:text-blue-200"
              }`}
            >
              MECHATRON
            </span>
          </Link>
        </div>

        {/* Center: Desktop Navigation Links */}
        <nav
          className="hidden xl:flex items-center space-x-7"
          aria-label="Main Navigation"
        >
          {navLinks.map((link) => (
            <div
              key={link.name}
              className="relative py-2"
              onMouseEnter={() => setActiveDropdown(link.name)}
              onMouseLeave={() => setActiveDropdown(null)}
            >
              <button
                onClick={() => onSelectCategory && onSelectCategory(link.id)}
                className={`text-[14px] font-medium tracking-normal transition-colors flex items-center gap-1 bg-transparent border-0 cursor-pointer ${
                  activeDropdown === link.name
                    ? "text-[#0070D5]"
                    : scrolled
                      ? "text-[#222222] hover:text-[#0070D5]"
                      : "text-white/90 hover:text-white"
                }`}
              >
                {link.name}
              </button>

              {/* Dropdown Menu */}
              {activeDropdown === link.name && (
                <div
                  className={`absolute top-full left-1/2 -translate-x-1/2 w-[340px] rounded-md shadow-2xl py-3 px-2 z-50 animate-fadeIn ${
                    scrolled
                      ? "bg-white border border-gray-200"
                      : "bg-[#111720]/95 backdrop-blur-md border border-white/10"
                  }`}
                >
                  <div
                    className={`text-[11px] uppercase tracking-wider font-semibold px-3 pb-2 border-b ${
                      scrolled
                        ? "text-gray-500 border-gray-100"
                        : "text-[#8B939B] border-white/10"
                    }`}
                  >
                    {link.name}
                  </div>
                  <div className="mt-2 space-y-1">
                    {link.items.map((item, itemIdx) => (
                      <Link
                        key={itemIdx}
                        href={item.link || `/#${link.id}`}
                        onClick={() => {
                          setActiveDropdown(null);
                          if (onSelectCategory && !item.link) onSelectCategory(link.id);
                        }}
                        className={`flex flex-col px-3 py-2 rounded transition-colors group text-decoration-none ${
                          scrolled
                            ? "hover:bg-gray-100 text-[#222]"
                            : "hover:bg-white/10 text-white"
                        }`}
                      >
                        <span className="text-[13px] font-medium group-hover:text-[#0070D5] transition-colors">
                          {item.title}
                        </span>
                        <span
                          className={`text-[11px] ${
                            scrolled ? "text-gray-500" : "text-[#9FA3A6]"
                          }`}
                        >
                          {item.desc}
                        </span>
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>
          ))}
        </nav>

        {/* Right: Search, Profile, Region, and Blue Pill Buy Button */}
        <div className="flex items-center space-x-4 sm:space-x-5">
          {/* <button
            onClick={onSearchClick}
            className={`transition-colors p-1 ${
              scrolled
                ? "text-[#333333] hover:text-[#0070D5]"
                : "text-white/80 hover:text-white"
            }`}
            title="Search"
            aria-label="Cari Produk Mechatron"
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
                strokeWidth="1.8"
                d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
              />
            </svg>
          </button> */}

          {/* User / Profile Icon */}
          {/* <a
            href="#account"
            className={`transition-colors p-1 hidden sm:inline-flex ${
              scrolled
                ? "text-[#333333] hover:text-[#0070D5]"
                : "text-white/80 hover:text-white"
            }`}
            title="Account"
            aria-label="My Account"
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
                strokeWidth="1.8"
                d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z"
              />
            </svg>
          </a> */}

          {/* Buy CTA Pill Button: Blue #0070D5, rounded-full, with Bag/Cart icon */}
          {/* <a
            href="#products"
            className="flex items-center gap-1.5 bg-[#0070D5] hover:bg-[#005fb8] text-white text-[13px] font-medium px-4 py-1.5 rounded-full transition-all duration-200 shadow-sm"
          >
            <svg
              className="w-3.5 h-3.5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"
              />
            </svg>
            <span>Pesan</span>
          </a> */}

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className={`xl:hidden p-1.5 transition-colors ${
              scrolled
                ? "text-[#111] hover:text-[#0070D5]"
                : "text-white hover:text-[#0070D5]"
            }`}
            aria-label="Toggle Menu"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {mobileMenuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div
          className={`xl:hidden border-t px-5 py-4 space-y-4 max-h-[85vh] overflow-y-auto ${
            scrolled
              ? "bg-white border-gray-200 text-gray-900"
              : "bg-[#0F151F]/98 border-white/10 text-white"
          }`}
        >
          {navLinks.map((link) => (
            <div
              key={link.name}
              className={`border-b pb-3 ${
                scrolled ? "border-gray-100" : "border-white/10"
              }`}
            >
              <div
                className={`text-[14px] font-semibold mb-2 ${
                  scrolled ? "text-gray-900" : "text-white"
                }`}
              >
                {link.name}
              </div>
              <div className="space-y-1.5 pl-2">
                {link.items.map((item, idx) => (
                  <Link
                    key={idx}
                    href={item.link || `/#${link.id}`}
                    onClick={() => {
                      setMobileMenuOpen(false);
                      if (onSelectCategory && !item.link) onSelectCategory(link.id);
                    }}
                    className={`block text-[13px] py-1 ${
                      scrolled
                        ? "text-gray-700 hover:text-[#0070D5]"
                        : "text-white/80 hover:text-[#0070D5]"
                    }`}
                  >
                    {item.title}
                  </Link>
                ))}
              </div>
            </div>
          ))}
          <div className="pt-2 flex flex-col gap-2">
            <a
              href="#products-section"
              onClick={() => setMobileMenuOpen(false)}
              className="bg-[#0070D5] text-white text-center py-2.5 rounded-full text-[14px] font-medium"
            >
              Hubungi Mechatron
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
