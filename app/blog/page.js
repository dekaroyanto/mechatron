import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import BlogListingView from "@/components/BlogListingView";
import { getAllPosts } from "@/lib/blogData";

export const metadata = {
  title: "Berita Terkini | Mechatron Indonesia",
  description:
    "Kabar terbaru, perkembangan regulasi, inovasi teknologi drone, dan transformasi modernisasi pertanian Indonesia bersama Mechatron.",
};

export default function BlogPage() {
  const articles = getAllPosts();

  return (
    <div className="min-h-screen flex flex-col bg-[#F8FAFC] text-[#0F172A] antialiased selection:bg-[#0070D5] selection:text-white">
      {/* 1. Global Navigation Bar */}
      <Navbar />

      <main className="flex-grow pt-24 sm:pt-28 pb-20 sm:pb-28">
        {/* Header Hero Section */}
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 mb-10 sm:mb-14">
          <div className="max-w-3xl">
            <h1 className="text-[32px] sm:text-[44px] md:text-[52px] font-extrabold text-[#0F172A] tracking-tight leading-[1.1] mb-4">
              Berita Terkini
            </h1>
            <p className="text-[15px] sm:text-[18px] text-[#64748B] leading-relaxed">
              Kabar terbaru, uji coba lapangan, inovasi teknologi drone
              pertanian, dan transformasi modernisasi agribisnis di seluruh
              Indonesia.
            </p>
          </div>
        </div>

        {/* Blog Listing Content */}
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
          <BlogListingView articles={articles} />
        </div>

        {/* Bottom Consultation Banner */}
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 mt-20 sm:mt-24">
          <div className="relative rounded-[28px] sm:rounded-[36px] overflow-hidden bg-gradient-to-br from-[#0B1528] via-[#0F172A] to-[#1E293B] text-white p-8 sm:p-12 md:p-16 text-center border border-slate-700/50 shadow-xl">
            <div className="max-w-2xl mx-auto">
              <span className="text-[12px] font-bold uppercase tracking-widest text-[#60A5FA] mb-2 block">
                Solusi Enterprise Terintegrasi
              </span>
              <h2 className="text-[26px] sm:text-[34px] md:text-[40px] font-extrabold tracking-tight mb-4">
                Punya Pertanyaan Seputar Kebutuhan Drone Anda?
              </h2>
              <p className="text-[14px] sm:text-[16px] text-slate-300 leading-relaxed mb-8">
                Diskusikan tantangan pemetaan, pertanian, sewa armada, atau
                pelatihan tim perusahaan Anda bersama spesialis teknis
                Mechatron.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <a
                  href={`https://wa.me/6281112143111?text=${encodeURIComponent(
                    "Halo Mechatron, saya ingin konsultasi setelah membaca artikel blog Mechatron.",
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-[#0070D5] hover:bg-[#005bb5] text-white font-semibold text-[14px] sm:text-[15px] px-8 py-3.5 rounded-full shadow-lg transition-all"
                >
                  <span>Konsultasi WhatsApp Gratis</span>
                  <span>›</span>
                </a>
                <a
                  href="/services"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-white/10 hover:bg-white/20 text-white font-semibold text-[14px] sm:text-[15px] px-7 py-3.5 rounded-full transition-all"
                >
                  <span>Lihat Layanan Mechatron</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* Global Footer */}
      <Footer />
    </div>
  );
}
