"use client";

import React, { useState } from "react";
import Image from "next/image";

export default function ServiceEcosystem() {
  const [activePlan, setActivePlan] = useState("1year");

  const apps = [
    {
      name: "DJI Fly",
      desc: "Dirancang khusus untuk seri Mavic, Air, Mini, dan Neo. Antarmuka ringkas, tutorial terbang interaktif, dan editor video terintegrasi.",
      compatibility: "iOS 13.0+ / Android 7.0+",
      version: "v1.14.2",
      iconColor: "bg-[#0070D5]",
      products: "Mavic 3 Series, Air 3S, Mini 4 Pro, Neo, Avata 2",
    },
    {
      name: "DJI Mimo",
      desc: "Aplikasi kreasi konten komprehensif untuk lini produk Osmo. Dilengkapi fitur Story Templates, ActiveTrack, dan live stream HD.",
      compatibility: "iOS 12.0+ / Android 8.0+",
      version: "v2.0.1",
      iconColor: "bg-[#272727]",
      products: "Osmo Pocket 3, Osmo Action 5 Pro, Osmo Mobile 6",
    },
    {
      name: "DJI Ronin",
      desc: "Aplikasi profesional untuk kontrol parameter gimbal, kalibrasi motor cerdas, pengaturan Force Mobile, dan simulasi jalur kamera.",
      compatibility: "iOS 11.0+ / Android 7.0+",
      version: "v1.7.0",
      iconColor: "bg-[#303233]",
      products: "DJI RS 4 Pro, RS 4, Ronin 4D, RS 3 Series",
    },
    {
      name: "DJI Pilot 2",
      desc: "Dirancang untuk pilot profesional industri dan misi keselamatan publik. Pemetaan jalur terbang otonom, waypoint 3D, dan analitik data.",
      compatibility: "DJI RC Plus / Smart Controller Enterprise",
      version: "v8.2.0",
      iconColor: "bg-[#0070D5]",
      products: "Matrice 350 RTK, Mavic 3 Enterprise, Agras T50",
    },
  ];

  const serviceStores = [
    {
      city: "Jakarta Pusat",
      name: "DJI Experience Store Grand Indonesia",
      address: "East Mall Lantai 3 No. 12-14, Jl. M.H. Thamrin No.1, Jakarta Pusat",
      phone: "+62 21 2358 0888",
      hours: "Setiap Hari 10:00 - 22:00 WIB",
      type: "Store & Quick Service",
    },
    {
      city: "Jakarta Barat",
      name: "DJI Authorized Service Center Central Park",
      address: "Lantai 2, Letjen S. Parman No.28, Tanjung Duren, Jakarta Barat",
      phone: "+62 21 5698 5555",
      hours: "Senin - Sabtu 10:00 - 20:00 WIB",
      type: "Official Repair Center",
    },
    {
      city: "Surabaya",
      name: "DJI Experience Store Tunjungan Plaza 6",
      address: "Lantai 4 No. 08, Jl. Embong Malang No.21-31, Tegalsari, Surabaya",
      phone: "+62 31 9924 3322",
      hours: "Setiap Hari 10:00 - 22:00 WIB",
      type: "Store & Service Pickup",
    },
    {
      city: "Bali",
      name: "DJI Experience & Service Point Bali Galeria",
      address: "Mall Bali Galeria Lantai 1, Jl. By Pass Ngurah Rai, Kuta, Badung, Bali",
      phone: "+62 361 755 888",
      hours: "Setiap Hari 10:00 - 21:00 WITA",
      type: "Store & Drone Clinic",
    },
  ];

  return (
    <section id="dji-care" className="py-24 bg-[#F7F9FA] border-t border-[#D1D1D1]">
      <div className="dji-container">
        {/* DJI Care Refresh Banner */}
        <div className="bg-[#EDEDED] border border-[#D1D1D1] p-8 md:p-12 mb-20 relative overflow-hidden" style={{ borderRadius: "0px" }}>
          <div className="max-w-2xl relative z-10">
            <div className="flex items-center gap-2 mb-3">
              <span className="w-2.5 h-2.5 rounded-full bg-[#0070D5]"></span>
              <span className="text-[12px] font-semibold uppercase tracking-widest text-[#0070D5]">
                Layanan Garansi Unggulan
              </span>
            </div>
            
            <h2 className="heading-md-strong text-[#000000] mb-4">
              DJI Care Refresh: Terbang Tanpa Rasa Khawatir
            </h2>
            <p className="body-md text-[#535353] leading-relaxed mb-6">
              Rencana perlindungan komprehensif untuk produk DJI Anda. Menyediakan layanan penggantian unit berbiaya terjangkau untuk kerusakan akibat kecelakaan, benturan, kontak air, hingga risiko kehilangan terbang (flyaway).
            </p>

            {/* Plan Selector */}
            <div className="flex items-center gap-3 mb-6">
              <button
                onClick={() => setActivePlan("1year")}
                className={`px-4 py-2 text-[13px] font-medium transition-all ${
                  activePlan === "1year"
                    ? "bg-[#0070D5] text-white"
                    : "bg-[#F7F9FA] text-[#3B3E40] border border-[#D1D1D1]"
                }`}
                style={{ borderRadius: "9999px" }}
              >
                Paket 1 Tahun (Hingga 2x Penggantian)
              </button>
              <button
                onClick={() => setActivePlan("2year")}
                className={`px-4 py-2 text-[13px] font-medium transition-all ${
                  activePlan === "2year"
                    ? "bg-[#0070D5] text-white"
                    : "bg-[#F7F9FA] text-[#3B3E40] border border-[#D1D1D1]"
                }`}
                style={{ borderRadius: "9999px" }}
              >
                Paket 2 Tahun (Hingga 4x Penggantian + Garansi Resmi Diperpanjang)
              </button>
            </div>

            {/* Coverage Highlights */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8">
              <div className="bg-[#F7F9FA] p-4 border border-[#D1D1D1]">
                <div className="text-[14px] font-semibold text-[#000000] mb-1">Penggantian Cepat</div>
                <div className="text-[12px] text-[#535353]">
                  {activePlan === "1year" ? "2 kali penggantian unit baru/setara baru dalam 12 bulan." : "4 kali penggantian unit dalam 24 bulan masa berlaku."}
                </div>
              </div>
              <div className="bg-[#F7F9FA] p-4 border border-[#D1D1D1]">
                <div className="text-[14px] font-semibold text-[#000000] mb-1">Proteksi Kontak Air</div>
                <div className="text-[12px] text-[#535353]">Perlindungan penuh apabila drone terjatuh ke air tawar maupun air laut.</div>
              </div>
              <div className="bg-[#F7F9FA] p-4 border border-[#D1D1D1]">
                <div className="text-[14px] font-semibold text-[#000000] mb-1">Cakupan Flyaway</div>
                <div className="text-[12px] text-[#535353]">Klaim penggantian drone baru saat unit hilang terbang tak ditemukan.</div>
              </div>
            </div>

            {/* CTA */}
            <div className="flex items-center gap-4">
              <a
                href="https://service.dji.com/care/active"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary !h-[38px] px-6 text-[14px]"
              >
                Aktivasi DJI Care Refresh
              </a>
              <a href="#service-centers" className="dji-link text-[14px]">
                Cek Status Garansi Serial Number &rarr;
              </a>
            </div>
          </div>
        </div>

        {/* DJI Apps Ecosystem Section */}
        <div className="mb-20">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <div className="text-[12px] font-semibold uppercase tracking-wider text-[#0070D5] mb-2">
              Pusat Aplikasi & Software Resmi
            </div>
            <h2 className="heading-md-strong text-[#000000]">
              Kendali Penuh di Ujung Jari Anda
            </h2>
            <p className="body-md text-[#535353] mt-2">
              Unduh aplikasi pendamping DJI resmi untuk smartphone, tablet, dan remote pengendali. Dapatkan pembaruan firmware rutin dan fitur otomatisasi tercanggih.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {apps.map((app, idx) => (
              <div
                key={idx}
                className="bg-[#EDEDED] border border-[#D1D1D1] p-6 flex flex-col justify-between"
                style={{ borderRadius: "0px" }}
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-12 h-12 bg-[#0070D5] text-white flex items-center justify-center font-bold text-[18px]">
                      {app.name.slice(0, 2)}
                    </div>
                    <span className="text-[11px] font-mono text-[#535353] bg-[#F7F9FA] px-2 py-1 border border-[#D1D1D1]">
                      {app.version}
                    </span>
                  </div>
                  <h3 className="text-[18px] font-semibold text-[#000000] mb-2">
                    {app.name}
                  </h3>
                  <p className="text-[13px] text-[#535353] leading-relaxed mb-4">
                    {app.desc}
                  </p>
                  <div className="text-[11px] text-[#3B3E40] mb-2">
                    <span className="font-semibold">Produk:</span> {app.products}
                  </div>
                  <div className="text-[11px] text-[#6C7073] font-mono mb-4">
                    {app.compatibility}
                  </div>
                </div>

                <div className="pt-4 border-t border-[#D1D1D1]">
                  <a
                    href="https://www.dji.com/downloads"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-outline-dark w-full text-center text-[13px] !h-[34px]"
                  >
                    Unduh APK / iOS App
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Authorized Service Centers Indonesia */}
        <div id="service-centers" className="border-t border-[#D1D1D1] pt-16">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-4">
            <div>
              <div className="text-[12px] font-semibold uppercase tracking-wider text-[#0070D5] mb-2">
                Jaringan Layanan Purna Jual
              </div>
              <h2 className="heading-md-strong text-[#000000]">
                DJI Authorized Service Center di Indonesia
              </h2>
              <p className="body-md text-[#535353] mt-2">
                Dapatkan perbaikan resmi dengan teknisi tersertifikasi DJI, suku cadang 100% orisinil, dan garansi pasca-servis.
              </p>
            </div>
            <a
              href="https://service.dji.com"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary !h-[36px] px-5 text-[13px] shrink-0"
            >
              Ajukan Tiket Perbaikan Online
            </a>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {serviceStores.map((store, sIdx) => (
              <div
                key={sIdx}
                className="bg-[#EDEDED] border border-[#D1D1D1] p-5 flex flex-col justify-between"
                style={{ borderRadius: "0px" }}
              >
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-[11px] font-semibold uppercase text-[#0070D5] bg-[#F7F9FA] px-2 py-0.5 border border-[#D1D1D1]">
                      {store.city}
                    </span>
                    <span className="text-[11px] text-[#6C7073]">{store.type}</span>
                  </div>
                  <h3 className="text-[16px] font-semibold text-[#000000] mb-2">
                    {store.name}
                  </h3>
                  <p className="text-[12px] text-[#535353] leading-relaxed mb-3">
                    {store.address}
                  </p>
                </div>

                <div className="pt-3 border-t border-[#D1D1D1] space-y-1 text-[12px]">
                  <div className="text-[#3B3E40] font-medium flex items-center gap-1.5">
                    <svg className="w-3.5 h-3.5 text-[#0070D5]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                    <span>{store.phone}</span>
                  </div>
                  <div className="text-[#6C7073] text-[11px]">
                    Jam buka: {store.hours}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
