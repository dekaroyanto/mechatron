"use client";

import React, { useState } from "react";
import Image from "next/image";

export default function FeaturedStories() {
  const [activeStory, setActiveStory] = useState(0);

  const stories = [
    {
      title: "Menatap Lautan Pasir Kaldera Bromo dari Udara",
      location: "Gunung Bromo, Jawa Timur",
      creator: "Bramantyo Wardhana - National Geographic Contributor",
      gear: "DJI Mavic 3 Pro (Lensa Hasselblad 24mm f/2.8)",
      exif: "ISO 100 • 1/500s • f/4.0 • D-Log M 10-bit",
      quote: "Warna natural dari Hasselblad Natural Colour Solution (HNCS) menangkap gradasi kabut pagi dan kehangatan fajar Bromo tanpa kehilangan detail di area bayangan.",
      image: "https://images.unsplash.com/photo-1544644181-1484b3fdfc62?auto=format&fit=crop&w=1600&q=80",
    },
    {
      title: "Pesona Gugusan Karst Zamrud Raja Ampat",
      location: "Wayag, Kepulauan Raja Ampat",
      creator: "Citra Lestari - Pembuat Film Konservasi Laut",
      gear: "DJI Inspire 3 (Kamera Zenmuse X9-8K Air)",
      exif: "8K Full-Frame RAW • 24fps • f/5.6 • Dual Native ISO 800",
      quote: "Kejernihan air toska Raja Ampat dan tebing karst menjulang membutuhkan drone berkecepatan tinggi dengan stabilitas angin laut yang kokoh.",
      image: "https://images.unsplash.com/photo-1516690561799-46d8f74f9abf?auto=format&fit=crop&w=1600&q=80",
    },
    {
      title: "Garis Lekuk Savana Pulau Padar Labuan Bajo",
      location: "Taman Nasional Komodo, NTT",
      creator: "Dimas Anggara - Fotografer Lanskap Profesional",
      gear: "DJI Air 3S (Medium Telephoto 70mm)",
      exif: "ISO 200 • 1/1000s • f/2.8 • HDR Panorama 50MP",
      quote: "Lensa tele medium 70mm memberikan kompresi ruang dramatis yang menonjolkan tiga teluk berwarna berbeda di Padar secara berdampingan.",
      image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1600&q=80",
    },
    {
      title: "Aksi Selancar Ombak Ombak Liar Uluwatu",
      location: "Pantai Suluban, Uluwatu, Bali",
      creator: "Kresna Aditya - Sinematografer Olahraga Ekstrem",
      gear: "DJI Osmo Action 5 Pro + DJI Neo",
      exif: "4K/120fps • HorizonSteady 360° • 10-bit D-Log M",
      quote: "Dengan ketahanan air hingga 20 meter dan baterai tahan 4 jam, kami tidak pernah melewatkan momen pecahan ombak terbaik di senja hari.",
      image: "https://images.unsplash.com/photo-1502680390469-be75c86b636f?auto=format&fit=crop&w=1600&q=80",
    },
  ];

  const current = stories[activeStory];

  return (
    <section className="py-24 bg-[#090F16] text-white overflow-hidden relative border-t border-[#30353B]">
      <div className="dji-container">
        {/* Section Heading */}
        <div className="max-w-2xl mb-12">
          <div className="text-[12px] font-semibold uppercase tracking-widest text-[#0070D5] mb-2">
            Karya & Kisah Visual Terkurasi
          </div>
          <h2 className="display-lg-strong text-white text-[32px] sm:text-[40px]">
            Keindahan Nusantara Lewat Mata DJI
          </h2>
          <p className="body-md text-[#9BA0A5] mt-3">
            Saksikan bagaimana fotografer, pembuat film, dan petualang memanfaatkan teknologi penerbangan otonom dan gimbal DJI untuk mengabadikan sudut pandang magis Indonesia.
          </p>
        </div>

        {/* Featured Showcase Card */}
        <div className="relative bg-[#181D24] border border-[#30353B] overflow-hidden" style={{ borderRadius: "0px" }}>
          <div className="grid grid-cols-1 lg:grid-cols-12">
            {/* Visual Hero Area */}
            <div className="lg:col-span-8 relative h-[380px] sm:h-[480px] lg:h-[560px] overflow-hidden">
              <Image
                src={current.image}
                alt={current.title}
                fill
                sizes="(max-width: 1024px) 100vw, 65vw"
                className="object-cover object-center transition-all duration-700 ease-in-out"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#181D24] via-transparent to-black/30 lg:bg-gradient-to-r lg:from-transparent lg:to-[#181D24]/80" />
              
              {/* Location Tag */}
              <div className="absolute top-4 left-4 z-10 flex items-center gap-2 bg-black/60 backdrop-blur-md px-3 py-1.5 border border-white/10">
                <svg className="w-3.5 h-3.5 text-[#0070D5]" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                </svg>
                <span className="text-[12px] text-white font-medium">{current.location}</span>
              </div>
            </div>

            {/* Metadata & Creator Note */}
            <div className="lg:col-span-4 p-8 flex flex-col justify-between bg-[#181D24]">
              <div>
                <div className="text-[11px] uppercase tracking-wider text-[#0070D5] font-semibold mb-2">
                  Cerita Kreator
                </div>
                <h3 className="text-[24px] font-semibold text-white leading-tight mb-4">
                  {current.title}
                </h3>
                
                <blockquote className="text-[14px] text-[#D1D1D1] italic leading-relaxed pl-3 border-l-2 border-[#0070D5] mb-6">
                  &ldquo;{current.quote}&rdquo;
                </blockquote>

                {/* Creator Details */}
                <div className="space-y-3 pt-4 border-t border-[#30353B]">
                  <div>
                    <span className="text-[11px] text-[#9BA0A5] uppercase tracking-wider block">Kreator:</span>
                    <span className="text-[14px] text-white font-medium">{current.creator}</span>
                  </div>
                  <div>
                    <span className="text-[11px] text-[#9BA0A5] uppercase tracking-wider block">Perangkat Digunakan:</span>
                    <span className="text-[14px] text-[#0070D5] font-medium">{current.gear}</span>
                  </div>
                  <div>
                    <span className="text-[11px] text-[#9BA0A5] uppercase tracking-wider block">Data EXIF / Telemetri:</span>
                    <span className="text-[12px] text-[#9FA3A6] font-mono">{current.exif}</span>
                  </div>
                </div>
              </div>

              {/* Story selector dots/tabs */}
              <div className="pt-8">
                <div className="text-[12px] text-[#9BA0A5] mb-3">Pilih Lokasi Karya:</div>
                <div className="grid grid-cols-2 gap-2">
                  {stories.map((st, sIdx) => (
                    <button
                      key={sIdx}
                      onClick={() => setActiveStory(sIdx)}
                      className={`text-left p-2.5 text-[12px] transition-all border ${
                        activeStory === sIdx
                          ? "bg-[#0070D5] text-white border-[#0070D5] font-medium"
                          : "bg-[#242930] text-[#9BA0A5] border-[#30353B] hover:text-white hover:border-[#9BA0A5]"
                      }`}
                      style={{ borderRadius: "0px" }}
                    >
                      <div className="truncate font-medium">{st.location.split(",")[0]}</div>
                      <div className="text-[10px] opacity-80 truncate">{st.gear.split("(")[0]}</div>
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* SkyPixel Global Callout */}
        <div className="mt-8 bg-[#181D24] border border-[#30353B] p-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 bg-[#0070D5]/10 border border-[#0070D5]/30 flex items-center justify-center shrink-0">
              <svg className="w-6 h-6 text-[#0070D5]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.8" d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.8" d="M15 13a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
            </div>
            <div>
              <div className="text-[15px] font-medium text-white">Bergabung dengan Komunitas SkyPixel Indonesia</div>
              <div className="text-[13px] text-[#9BA0A5]">Unggah foto dan video drone karya Anda, ikuti kompetisi internasional tahunan, dan menangkan total hadiah senilai ribuan USD.</div>
            </div>
          </div>
          <a
            href="https://www.skypixel.com"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-outline-white shrink-0 !h-[36px] px-5 text-[13px]"
          >
            Kunjungi SkyPixel &rarr;
          </a>
        </div>
      </div>
    </section>
  );
}
