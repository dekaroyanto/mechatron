"use client";

import React, { useState } from "react";
import Image from "next/image";

export default function ProductModal({ product, onClose }) {
  const [selectedBundle, setSelectedBundle] = useState("flymore");
  const [orderSuccess, setOrderSuccess] = useState(false);

  if (!product) return null;

  const bundles = [
    {
      id: "standard",
      title: "Paket Standar",
      desc: "Unit drone/gimbal, 1x Intelligent Battery, remote controller, kabel & baling-baling cadangan.",
      priceModifier: 0,
    },
    {
      id: "flymore",
      title: "Fly More / Creator Combo",
      desc: "Termasuk 3x Baterai, Two-Way Charging Hub, Tas Bahu Eksklusif, Set Filter ND, dan baling-baling ekstra.",
      priceModifier: 4200000,
    },
  ];

  const handleCheckout = () => {
    setOrderSuccess(true);
    setTimeout(() => {
      setOrderSuccess(false);
      onClose();
    }, 2800);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/75 backdrop-blur-sm animate-fade-in">
      <div
        className="bg-[#F7F9FA] border border-[#D1D1D1] w-full max-w-3xl max-h-[92vh] overflow-y-auto relative dji-dropdown-shadow"
        style={{ borderRadius: "0px" }}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-20 w-8 h-8 rounded-full bg-[#EDEDED] text-[#000000] hover:bg-[#D1D1D1] flex items-center justify-center transition-colors"
          aria-label="Tutup Modal"
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        {orderSuccess ? (
          <div className="p-12 text-center space-y-4">
            <div className="w-16 h-16 bg-[#0070D5] text-white rounded-full flex items-center justify-center mx-auto text-2xl">
              ✓
            </div>
            <h3 className="heading-md-strong text-[#000000]">Pesanan Berhasil Disiapkan!</h3>
            <p className="text-[15px] text-[#535353] max-w-md mx-auto">
              Terima kasih telah memesan <strong>{product.title}</strong> via Mechatron Indonesia Store. Konfirmasi dan instruksi pemesanan telah dikirimkan ke email Anda.
            </p>
          </div>
        ) : (
          <div className="p-6 sm:p-8">
            {/* Header info */}
            <div className="flex flex-col sm:flex-row gap-6 items-start border-b border-[#D1D1D1] pb-6 mb-6">
              <div className="relative w-full sm:w-[260px] h-[220px] bg-[#EDEDED] shrink-0 overflow-hidden">
                <Image
                  src={product.image}
                  alt={product.title}
                  fill
                  className="object-cover object-center"
                />
              </div>

              <div className="flex-1">
                <span className="text-[11px] font-semibold uppercase tracking-wider text-[#0070D5] bg-[#EDEDED] px-2.5 py-1">
                  Resmi Erajaya / Urban Republic
                </span>
                <h3 className="heading-md-strong text-[#000000] mt-2 mb-1">
                  {product.title}
                </h3>
                <p className="text-[14px] text-[#535353] mb-3">
                  {product.subtitle || product.tagline}
                </p>
                <div className="text-[22px] font-bold text-[#0070D5]">
                  {product.price}
                </div>
                <div className="text-[12px] text-[#6C7073] mt-1">
                  Termasuk PPN 11% & Garansi Resmi DJI Indonesia 1 Tahun
                </div>
              </div>
            </div>

            {/* Choose Bundle Option */}
            <div className="mb-6">
              <h4 className="text-[14px] font-semibold text-[#000000] mb-3 uppercase tracking-wider">
                Pilih Paket Pembelian:
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {bundles.map((bundle) => (
                  <div
                    key={bundle.id}
                    onClick={() => setSelectedBundle(bundle.id)}
                    className={`p-4 cursor-pointer border transition-all ${
                      selectedBundle === bundle.id
                        ? "border-[#0070D5] bg-[#EDEDED]"
                        : "border-[#D1D1D1] bg-[#F7F9FA] hover:bg-[#EDEDED]"
                    }`}
                    style={{ borderRadius: "0px" }}
                  >
                    <div className="flex items-center justify-between mb-1">
                      <span className="font-semibold text-[14px] text-[#000000]">{bundle.title}</span>
                      <span className="w-3.5 h-3.5 rounded-full border flex items-center justify-center border-[#0070D5]">
                        {selectedBundle === bundle.id && (
                          <span className="w-2 h-2 rounded-full bg-[#0070D5]"></span>
                        )}
                      </span>
                    </div>
                    <p className="text-[12px] text-[#535353] leading-relaxed mb-2">
                      {bundle.desc}
                    </p>
                    <div className="text-[12px] font-semibold text-[#0070D5]">
                      {bundle.priceModifier === 0 ? "Harga Dasar" : `+ Rp ${bundle.priceModifier.toLocaleString("id-ID")}`}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Technical Highlights */}
            {product.specs && (
              <div className="mb-6 bg-[#EDEDED] p-4 border border-[#D1D1D1]">
                <h4 className="text-[13px] font-semibold text-[#000000] mb-2 uppercase tracking-wider">
                  Fitur Unggulan Utama:
                </h4>
                <div className="grid grid-cols-2 gap-2">
                  {product.specs.map((sp, idx) => (
                    <div key={idx} className="text-[13px] text-[#3B3E40] flex items-center gap-2">
                      <span className="text-[#0070D5] font-bold">✓</span>
                      <span>{sp}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Supported Payment Channels */}
            <div className="mb-8 pt-4 border-t border-[#D1D1D1]">
              <div className="text-[12px] text-[#6C7073] mb-2 font-medium">
                Metode Pembayaran Resmi di Indonesia:
              </div>
              <div className="flex flex-wrap items-center gap-2 text-[12px] text-[#3B3E40]">
                <span className="bg-[#EDEDED] px-2.5 py-1 border border-[#D1D1D1]">BCA Virtual Account</span>
                <span className="bg-[#EDEDED] px-2.5 py-1 border border-[#D1D1D1]">Mandiri Livin</span>
                <span className="bg-[#EDEDED] px-2.5 py-1 border border-[#D1D1D1]">Kartu Kredit Cicilan 0%</span>
                <span className="bg-[#EDEDED] px-2.5 py-1 border border-[#D1D1D1]">GoPay & OVO</span>
                <span className="bg-[#EDEDED] px-2.5 py-1 border border-[#D1D1D1]">QRIS Nasional</span>
              </div>
            </div>

            {/* Modal Actions */}
            <div className="flex flex-col sm:flex-row items-center justify-end gap-3 pt-4 border-t border-[#D1D1D1]">
              <button
                onClick={onClose}
                className="btn-outline-dark w-full sm:w-auto text-[14px]"
              >
                Kembali
              </button>
              <button
                onClick={handleCheckout}
                className="btn-primary w-full sm:w-auto !h-[40px] px-8 text-[14px] font-medium"
              >
                Lanjutkan ke Pembayaran &rarr;
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
