"use client";

import React from "react";
import Image from "next/image";
import { getDroneProduct, droneProducts } from "@/lib/droneProductsData";

export default function ProductModal({ product, onClose }) {
  if (!product) return null;

  // Resolve official brochure data for Mechatron Agri H-15 / H-30
  const droneData =
    getDroneProduct(product.id || product.title || "") ||
    (product.id && droneProducts[product.id]) ||
    null;

  const title = droneData ? droneData.name : product.title;
  const subtitle = droneData ? droneData.subtitle : product.tagline || product.subtitle;
  const modelCode = droneData ? droneData.modelCode : product.modelCode || null;
  const image = droneData ? droneData.image : product.image;

  const whatsappMessage = encodeURIComponent(
    `Halo Mechatron, saya tertarik untuk konsultasi dan pemesanan unit ${title}${
      modelCode ? ` (${modelCode})` : ""
    }. Mohon informasi ketersediaan unit dan jadwal demo lapangan.`
  );
  const whatsappUrl = `https://wa.me/6281112143111?text=${whatsappMessage}`;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-5 bg-black/80 backdrop-blur-md animate-fade-in overflow-y-auto"
      onClick={onClose}
    >
      <div
        className="bg-white border border-slate-200 w-full max-w-4xl max-h-[92vh] overflow-y-auto relative rounded-[24px] sm:rounded-[32px] shadow-2xl my-auto text-slate-900"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Sticky Header Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-30 w-9 h-9 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-700 hover:text-black flex items-center justify-center transition-colors cursor-pointer shadow-sm"
          aria-label="Tutup Modal"
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.2" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        <div className="p-6 sm:p-8 md:p-10">
          {/* Top Hero Showcase */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-8 items-center pb-8 border-b border-slate-200">
            {/* Drone Thumbnail */}
            <div className="md:col-span-5 relative w-full h-[240px] sm:h-[280px] md:h-[320px] rounded-[20px] overflow-hidden bg-slate-900 shadow-md">
              <Image
                src={image}
                alt={title}
                fill
                priority
                className="object-cover object-center"
              />
              {modelCode && (
                <div className="absolute top-3 left-3 bg-white/95 backdrop-blur-md px-3 py-1 rounded-full text-[11px] font-bold text-slate-900 shadow-sm border border-slate-200">
                  {modelCode}
                </div>
              )}
            </div>

            {/* Product Title & Brand Info */}
            <div className="md:col-span-7 flex flex-col justify-center">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#0070D5]/10 text-[#0070D5] text-[11px] font-bold uppercase tracking-wider mb-2 self-start">
                <span>Mechatron Agriculture Drone</span>
              </div>

              <h2 className="text-[26px] sm:text-[32px] md:text-[36px] font-extrabold text-slate-900 tracking-tight leading-tight mb-2">
                {title}
              </h2>

              <p className="text-[14px] sm:text-[15px] font-semibold text-[#0070D5] mb-3">
                {subtitle}
              </p>

              <p className="text-[13px] sm:text-[14px] text-slate-600 leading-relaxed mb-6">
                {droneData?.tagline ||
                  "Solusi teknologi udara adaptif presisi tinggi untuk menjawab kebutuhan mekanisasi pertanian dan ketahanan pangan modern."}
              </p>

              {/* Purchase Direct to WhatsApp */}
              <div className="p-4 rounded-[18px] bg-gradient-to-r from-emerald-50 to-blue-50 border border-emerald-200/60 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                <div>
                  <span className="text-[11px] font-bold uppercase tracking-wider text-emerald-700 block">
                    Pemesanan & Konsultasi Resmi
                  </span>
                  <p className="text-[13px] text-slate-700 font-medium">
                    Hubungi tim sales untuk penawaran resmi, paket sewa, atau demo unit.
                  </p>
                </div>

                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="shrink-0 w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-[#25D366] hover:bg-[#20bd5a] text-white font-bold text-[14px] px-6 py-2.5 rounded-full shadow-md transition-all hover:scale-105 active:scale-95"
                >
                  <span>Chat WhatsApp</span>
                  <span>›</span>
                </a>
              </div>
            </div>
          </div>

          {/* Official Brochure Specifications (If Available) */}
          {droneData && droneData.specifications && (
            <div className="mt-8">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-[18px] sm:text-[20px] font-extrabold text-slate-900 tracking-tight">
                  Spesifikasi Teknis Drone ({droneData.modelCode})
                </h3>
                <span className="text-[11px] font-semibold px-2.5 py-0.5 rounded-full bg-slate-100 text-slate-600">
                  Resmi Mechatron
                </span>
              </div>

              {/* Specs Grid Table */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 sm:gap-3 bg-slate-50 p-4 sm:p-5 rounded-[20px] border border-slate-200">
                {droneData.specifications.map((spec, sIdx) => (
                  <div
                    key={sIdx}
                    className="flex flex-col sm:flex-row sm:items-center justify-between p-2.5 rounded-xl bg-white border border-slate-100 text-[13px]"
                  >
                    <span className="text-slate-500 font-medium">{spec.label}</span>
                    <span className="text-slate-900 font-bold sm:text-right mt-0.5 sm:mt-0">
                      {spec.value}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* In-Field Application (Gambaran Penggunaan di Lapangan) */}
          {droneData && droneData.fieldApplications && (
            <div className="mt-8">
              <h3 className="text-[18px] sm:text-[20px] font-extrabold text-slate-900 tracking-tight mb-3">
                Aplikasi Lapangan (In-Field Application)
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {droneData.fieldApplications.map((app, aIdx) => (
                  <div
                    key={aIdx}
                    className="p-3.5 rounded-2xl bg-slate-50 border border-slate-200/80 hover:border-[#0070D5]/40 transition-colors"
                  >
                    <div className="text-[13px] font-bold text-slate-900 mb-1 flex items-center gap-1.5">
                      <span className="w-2 h-2 rounded-full bg-[#0070D5] shrink-0" />
                      <span>{app.title}</span>
                    </div>
                    <p className="text-[12px] text-slate-600 leading-relaxed">
                      {app.desc}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Package Includes Box */}
          {droneData && droneData.packageIncludes && (
            <div className="mt-8 p-5 sm:p-6 rounded-[20px] bg-slate-900 text-white">
              <div className="flex items-center gap-2 mb-3">
                <span className="text-[#0070D5] text-lg font-bold">📦</span>
                <h4 className="text-[15px] sm:text-[16px] font-bold text-white uppercase tracking-wider">
                  Kelengkapan Paket (Package Include)
                </h4>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 text-[13px]">
                {droneData.packageIncludes.map((item, pIdx) => (
                  <div key={pIdx} className="flex items-center gap-2.5 text-slate-200">
                    <span className="w-4 h-4 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center text-[11px] font-bold shrink-0">
                      ✓
                    </span>
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Bottom Action Footer */}
          <div className="mt-8 pt-6 border-t border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="text-[12px] text-slate-500 text-center sm:text-left">
              PT Mechatron Berkah Mandiri Teknologi • Call Center:{" "}
              <a href="tel:+6281112143111" className="font-semibold text-slate-700 hover:text-[#0070D5]">
                +62 811 1214 3111
              </a>
            </div>

            <div className="flex items-center gap-3 w-full sm:w-auto">
              <button
                onClick={onClose}
                className="w-1/2 sm:w-auto px-6 py-2.5 rounded-full border border-slate-300 text-slate-700 hover:bg-slate-100 text-[13px] font-semibold transition-colors"
              >
                Tutup
              </button>
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-1/2 sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-2.5 rounded-full bg-[#0070D5] hover:bg-[#005bb5] text-white text-[13px] font-semibold shadow-md transition-all hover:scale-105 active:scale-95"
              >
                <span>Pesan via WhatsApp</span>
                <span>›</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
