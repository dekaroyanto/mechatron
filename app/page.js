"use client";

import React, { useState } from "react";
import Navbar from "@/components/Navbar";
import HeroBanner from "@/components/HeroBanner";
import FeaturedHeroGrid from "@/components/FeaturedHeroGrid";
import ServicesSection from "@/components/ServicesSection";
import LatestArticlesSection from "@/components/LatestArticlesSection";
import ProductShowcase from "@/components/ProductShowcase";
import FeaturedStories from "@/components/FeaturedStories";
import ServiceEcosystem from "@/components/ServiceEcosystem";
import Footer from "@/components/Footer";
import ProductModal from "@/components/ProductModal";
import SearchModal from "@/components/SearchModal";
import Image from "next/image";

export default function Home() {
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [searchOpen, setSearchOpen] = useState(false);
  const [activeCategory, setActiveCategory] = useState("all");

  const handleSelectProduct = (product) => {
    setSelectedProduct(product);
  };

  const handleSelectCategory = (catId) => {
    setActiveCategory(catId);
    const element = document.getElementById("products-section");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#EDEDED] text-[#000000] selection:bg-[#0070D5] selection:text-white">
      {/* 1. Global Navigation Bar */}
      <Navbar
        onSearchClick={() => setSearchOpen(true)}
        onSelectCategory={handleSelectCategory}
      />

      <main className="flex-grow">
        {/* 2. Flagship Cinematic Hero Banner */}
        <HeroBanner onSelectProduct={handleSelectProduct} />

        {/* 3. Featured 2-Column Minimalist Studio Showcase (As in reference image) */}
        <FeaturedHeroGrid onSelectProduct={handleSelectProduct} />

        {/* 4. Layanan & Solusi Bisnis Mechatron (Services Section) */}
        <ServicesSection />

        {/* 5. Artikel & Wawasan Terbaru (3 Artikel Terkini) */}
        <LatestArticlesSection />

        {/* 4. Product Lineup Catalog & Tabs */}
        {/* <ProductShowcase
          onSelectProduct={handleSelectProduct}
          activeCategoryFilter={activeCategory}
        /> */}

        {/* 5. Highlight Dual Product Teaser (Neo vs Pocket 3) */}
        {/* <section className="py-20 bg-[#F7F9FA] border-t border-[#D1D1D1]">
          <div className="dji-container">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div
                className="relative bg-[#EDEDED] border border-[#D1D1D1] p-8 md:p-12 flex flex-col justify-between overflow-hidden min-h-[420px]"
                style={{ borderRadius: "0px" }}
              >
                <div className="relative z-10 max-w-sm">
                  <span className="text-[11px] font-semibold uppercase tracking-wider text-[#0070D5] bg-white px-2.5 py-1">
                    Era Baru Drone Vlog
                  </span>
                  <h3 className="heading-md-strong text-[#000000] mt-3 mb-2">
                    DJI Neo
                  </h3>
                  <p className="text-[14px] text-[#535353] mb-6">
                    Hanya 135 gram. Lepas landas langsung dari telapak tangan
                    tanpa remote. Rekam momen liburan Anda seketika.
                  </p>
                  <div className="flex items-center gap-3">
                    <button
                      onClick={() =>
                        handleSelectProduct({
                          title: "DJI Neo",
                          tagline: "Palm Takeoff & Landing Otonom",
                          price: "Rp 3.140.000",
                          image:
                            "https://images.unsplash.com/photo-1508614589041-895b88991e3e?auto=format&fit=crop&w=800&q=80",
                          specs: [
                            "Bobot 135g",
                            "Palm Takeoff",
                            "AI Subject Tracking",
                            "4K Video",
                          ],
                        })
                      }
                      className="btn-primary !h-[36px] px-5 text-[13px]"
                    >
                      Beli Sekarang
                    </button>
                    <a
                      href="#products-section"
                      className="dji-link text-[13px]"
                    >
                      Spesifikasi Detail &rarr;
                    </a>
                  </div>
                </div>
                <div className="absolute right-0 bottom-0 top-0 w-1/2 opacity-30 md:opacity-90 pointer-events-none">
                  <Image
                    src="https://images.unsplash.com/photo-1508614589041-895b88991e3e?auto=format&fit=crop&w=600&q=80"
                    alt="DJI Neo"
                    fill
                    className="object-cover object-center"
                  />
                </div>
              </div>

              <div
                className="relative bg-[#EDEDED] border border-[#D1D1D1] p-8 md:p-12 flex flex-col justify-between overflow-hidden min-h-[420px]"
                style={{ borderRadius: "0px" }}
              >
                <div className="relative z-10 max-w-sm">
                  <span className="text-[11px] font-semibold uppercase tracking-wider text-[#0070D5] bg-white px-2.5 py-1">
                    Gimbal Kamera Terbaik
                  </span>
                  <h3 className="heading-md-strong text-[#000000] mt-3 mb-2">
                    DJI Osmo Pocket 3
                  </h3>
                  <p className="text-[14px] text-[#535353] mb-6">
                    Sensor 1-inci CMOS andalan para creator, layar sentuh putar
                    2-inci, dan stabilisasi mekanis 3-sumbu ultra-halus.
                  </p>
                  <div className="flex items-center gap-3">
                    <button
                      onClick={() =>
                        handleSelectProduct({
                          title: "DJI Osmo Pocket 3",
                          tagline: "Sensor 1-Inci CMOS Bertenaga",
                          price: "Rp 8.200.000",
                          image:
                            "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?auto=format&fit=crop&w=800&q=80",
                          specs: [
                            "1-Inci CMOS",
                            "Layar Sentuh OLED 2-Inci",
                            "Video 4K/120fps",
                            "ActiveTrack 6.0",
                          ],
                        })
                      }
                      className="btn-primary !h-[36px] px-5 text-[13px]"
                    >
                      Beli Sekarang
                    </button>
                    <a
                      href="#products-section"
                      className="dji-link text-[13px]"
                    >
                      Spesifikasi Detail &rarr;
                    </a>
                  </div>
                </div>
                <div className="absolute right-0 bottom-0 top-0 w-1/2 opacity-30 md:opacity-90 pointer-events-none">
                  <Image
                    src="https://images.unsplash.com/photo-1516035069371-29a1b244cc32?auto=format&fit=crop&w=600&q=80"
                    alt="DJI Osmo Pocket 3"
                    fill
                    className="object-cover object-center"
                  />
                </div>
              </div>
            </div>
          </div>
        </section> */}
      </main>

      {/* Official Mechatron Footer */}
      <Footer />

      {/* Interactive Modals */}
      <ProductModal
        product={selectedProduct}
        onClose={() => setSelectedProduct(null)}
      />

      <SearchModal
        isOpen={searchOpen}
        onClose={() => setSearchOpen(false)}
        onSelectProduct={handleSelectProduct}
      />
    </div>
  );
}
