import React from "react";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { getAllPosts, getPostBySlug, getRelatedPosts } from "@/lib/blogData";

export const instant = false;

export async function generateStaticParams() {
  const posts = getAllPosts();
  return posts.map((post) => ({
    slug: post.slug,
  }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const post = getPostBySlug(slug);

  if (!post) {
    return {
      title: "Artikel Tidak Ditemukan | Mechatron",
    };
  }

  return {
    title: `${post.title} | Berita Mechatron`,
    description: post.excerpt,
    openGraph: {
      title: post.title,
      description: post.excerpt,
      images: [
        {
          url: post.image,
          width: 1200,
          height: 630,
          alt: post.title,
        },
      ],
    },
  };
}

export default async function BlogPostPage({ params }) {
  const { slug } = await params;
  const post = getPostBySlug(slug);

  if (!post) {
    notFound();
  }

  const relatedPosts = getRelatedPosts(post.slug, 3);
  const whatsappUrl = `https://wa.me/6281112143111?text=${encodeURIComponent(
    `Halo Mechatron, saya tertarik berdiskusi mengenai topik artikel: "${post.title}".`,
  )}`;

  return (
    <div className="min-h-screen flex flex-col bg-[#FFFFFF] text-[#0F172A] antialiased selection:bg-[#0070D5] selection:text-white">
      {/* 1. Global Navigation Bar */}
      <Navbar />

      <main className="flex-grow pt-24 sm:pt-28 pb-20 sm:pb-28">
        <article className="max-w-[1000px] mx-auto px-4 sm:px-6 lg:px-8">
          {/* Breadcrumbs */}
          <nav
            aria-label="Breadcrumb"
            className="flex items-center gap-2 text-[12px] sm:text-[13px] text-slate-500 font-medium mb-6 sm:mb-8 overflow-x-auto whitespace-nowrap scrollbar-none"
          >
            <Link href="/" className="hover:text-[#0070D5] transition-colors">
              Beranda
            </Link>
            <span>/</span>
            <Link
              href="/blog"
              className="hover:text-[#0070D5] transition-colors"
            >
              Berita
            </Link>
            <span>/</span>
            <span className="text-slate-400">{post.category}</span>
          </nav>

          {/* Article Header */}
          <header className="mb-8 sm:mb-10">
            {/* Main Headline Title */}
            <h1 className="text-[28px] sm:text-[40px] md:text-[48px] font-extrabold text-[#0F172A] tracking-tight leading-[1.18] mb-6">
              {post.title}
            </h1>

            {/* Author Profile Bar */}
            <div className="flex items-center gap-3.5 pt-4 border-t border-slate-100">
              <div className="relative w-11 h-11 rounded-full overflow-hidden bg-slate-200 border border-slate-200">
                <Image
                  src={post.author.avatar}
                  alt={post.author.name}
                  fill
                  className="object-cover"
                />
              </div>
              <div>
                <p className="text-[14px] font-bold text-slate-900 leading-tight">
                  {post.author.name}
                </p>
                <p className="text-[12px] text-slate-500 leading-tight">
                  {post.author.role} • Mechatron Indonesia Official
                </p>
              </div>
            </div>
          </header>

          {/* Featured Hero Image */}
          <div className="relative w-full h-[320px] sm:h-[460px] md:h-[540px] rounded-[24px] sm:rounded-[32px] overflow-hidden bg-slate-900 shadow-lg mb-10 sm:mb-14 border border-slate-200/80">
            <Image
              src={post.image}
              alt={post.title}
              fill
              priority
              quality={95}
              sizes="(max-width: 1024px) 100vw, 1000px"
              className="object-cover object-center"
            />
          </div>

          {/* Article Body Content */}
          <div className="max-w-[820px] mx-auto">
            {/* Excerpt Lead Paragraph */}
            <p className="text-[17px] sm:text-[20px] font-medium text-slate-800 leading-relaxed mb-8 sm:mb-10 pb-6 border-b border-slate-100">
              {post.excerpt}
            </p>

            {/* Content Blocks */}
            <div className="space-y-6 sm:space-y-8 text-[16px] sm:text-[17px] text-slate-700 leading-[1.8]">
              {post.content.map((block, idx) => {
                if (block.type === "paragraph") {
                  return <p key={idx}>{block.text}</p>;
                }

                if (block.type === "heading") {
                  return (
                    <h2
                      key={idx}
                      className="text-[22px] sm:text-[28px] font-bold text-[#0F172A] tracking-tight leading-snug pt-6 sm:pt-8"
                    >
                      {block.text}
                    </h2>
                  );
                }

                if (block.type === "quote") {
                  return (
                    <blockquote
                      key={idx}
                      className="my-8 p-6 sm:p-8 rounded-[20px] bg-slate-50 border-l-4 border-[#0070D5] text-slate-900 italic font-medium text-[16px] sm:text-[18px] leading-relaxed shadow-sm"
                    >
                      &ldquo;{block.text}&rdquo;
                    </blockquote>
                  );
                }

                if (block.type === "list") {
                  return (
                    <ul key={idx} className="my-6 space-y-3">
                      {block.items.map((item, itemIdx) => (
                        <li key={itemIdx} className="flex items-start gap-3">
                          <span className="w-5 h-5 rounded-full bg-blue-100 text-[#0070D5] flex items-center justify-center shrink-0 mt-1 text-[11px] font-bold">
                            ✓
                          </span>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  );
                }

                if (block.type === "takeaway") {
                  return (
                    <div
                      key={idx}
                      className="my-8 p-6 sm:p-8 rounded-[24px] bg-gradient-to-br from-blue-50/80 to-indigo-50/60 border border-blue-200/70 text-slate-900 shadow-sm"
                    >
                      <div className="flex items-center gap-2 mb-2 text-[#0070D5] font-bold text-[14px] uppercase tracking-wider">
                        <span>💡</span>
                        <span>{block.title || "Intisari Utama"}</span>
                      </div>
                      <p className="text-[15px] sm:text-[16px] text-slate-800 leading-relaxed">
                        {block.text}
                      </p>
                    </div>
                  );
                }

                return null;
              })}
            </div>

            {/* Tags Pill List */}
            {post.tags && post.tags.length > 0 && (
              <div className="mt-10 sm:mt-12 pt-6 border-t border-slate-200 flex items-center gap-2 flex-wrap">
                <span className="text-[13px] font-semibold text-slate-500 mr-2">
                  Topik Terkait:
                </span>
                {post.tags.map((tag, tagIdx) => (
                  <span
                    key={tagIdx}
                    className="text-[12px] font-medium px-3 py-1 rounded-full bg-slate-100 text-slate-700 hover:bg-slate-200 transition-colors"
                  >
                    #{tag}
                  </span>
                ))}
              </div>
            )}

            {/* Author Bio Box */}
            <div className="mt-10 sm:mt-12 p-6 sm:p-8 rounded-[24px] bg-slate-50 border border-slate-200 flex flex-col sm:flex-row items-start sm:items-center gap-4 sm:gap-6">
              <div className="relative w-16 h-16 rounded-full overflow-hidden bg-slate-200 shrink-0 border-2 border-white shadow-sm">
                <Image
                  src={post.author.avatar}
                  alt={post.author.name}
                  fill
                  className="object-cover"
                />
              </div>
              <div>
                <span className="text-[11px] font-bold uppercase tracking-wider text-[#0070D5]">
                  Tentang Penulis
                </span>
                <h4 className="text-[17px] font-bold text-slate-900 mt-0.5">
                  {post.author.name}
                </h4>
                <p className="text-[13px] text-slate-600 mt-1 leading-relaxed">
                  Tim riset, jurnalisme agrikultur, dan spesialis drone
                  Mechatron Indonesia. Berdedikasi menghadirkan liputan terkini
                  seputar uji coba lapangan, inovasi alsintan, dan percepatan
                  mekanisasi pertanian modern di seluruh Nusantara.
                </p>
              </div>
            </div>

            {/* Action Bar (WhatsApp Consultation CTA) */}
            <div className="mt-10 sm:mt-12 p-8 rounded-[26px] bg-gradient-to-r from-[#002B7F] to-[#0070D5] text-white flex flex-col sm:flex-row items-center justify-between gap-6 shadow-xl">
              <div>
                <h3 className="text-[20px] sm:text-[22px] font-bold leading-snug">
                  Tertarik Mengimplementasikan Solusi Ini?
                </h3>
                <p className="text-[14px] text-blue-100 mt-1">
                  Konsultasikan jadwal demo unit, sewa armada, atau survei
                  bersama tim kami.
                </p>
              </div>
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="shrink-0 bg-white hover:bg-slate-100 text-[#002B7F] font-bold text-[14px] px-7 py-3.5 rounded-full shadow-md transition-all inline-flex items-center gap-2"
              >
                <span>Hubungi via WhatsApp</span>
                <span>›</span>
              </a>
            </div>

            {/* Back to Blog Navigation */}
            <div className="mt-8 text-center sm:text-left">
              <Link
                href="/blog"
                className="inline-flex items-center gap-2 text-[14px] font-semibold text-[#0070D5] hover:text-[#005bb5] transition-colors"
              >
                <span>← Kembali ke Semua Berita</span>
              </Link>
            </div>
          </div>
        </article>

        {/* Related Articles Section */}
        {relatedPosts.length > 0 && (
          <section className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 mt-20 sm:mt-24 pt-16 border-t border-slate-200">
            <div className="flex items-center justify-between mb-8">
              <h2 className="text-[22px] sm:text-[28px] font-bold text-[#0F172A] tracking-tight">
                Berita Terkait Lainnya
              </h2>
              <Link
                href="/blog"
                className="text-[14px] font-semibold text-[#0070D5] hover:underline hidden sm:inline"
              >
                Lihat Semua Berita ›
              </Link>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
              {relatedPosts.map((related) => (
                <article
                  key={related.id}
                  className="group flex flex-col bg-white rounded-[22px] overflow-hidden border border-slate-200/90 shadow-sm hover:shadow-lg transition-all duration-300"
                >
                  <Link
                    href={`/blog/${related.slug}`}
                    className="relative block w-full h-[190px] overflow-hidden bg-slate-900"
                  >
                    <Image
                      src={related.image}
                      alt={related.title}
                      fill
                      sizes="(max-width: 768px) 100vw, 33vw"
                      className="object-cover object-center group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute top-3.5 left-3.5">
                      <span className="text-[11px] font-bold px-2.5 py-0.5 rounded-full bg-white/95 text-slate-900 shadow-sm">
                        {related.category}
                      </span>
                    </div>
                  </Link>

                  <div className="p-5 flex flex-col flex-grow justify-between">
                    <div>
                      <span className="text-[11px] text-slate-400 font-medium">
                        {related.date} • {related.readTime}
                      </span>
                      <h3 className="text-[16px] font-bold text-slate-900 mt-1.5 leading-snug group-hover:text-[#0070D5] transition-colors line-clamp-2">
                        <Link href={`/blog/${related.slug}`}>
                          {related.title}
                        </Link>
                      </h3>
                      <p className="text-[13px] text-slate-600 mt-2 line-clamp-2 leading-relaxed">
                        {related.excerpt}
                      </p>
                    </div>

                    <div className="mt-4 pt-3 border-t border-slate-100">
                      <Link
                        href={`/blog/${related.slug}`}
                        className="text-[13px] font-semibold text-[#0070D5] inline-flex items-center gap-1 group-hover:translate-x-1 transition-transform"
                      >
                        <span>Baca Selengkapnya</span>
                        <span>→</span>
                      </Link>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </section>
        )}
      </main>

      {/* Global Footer */}
      <Footer />
    </div>
  );
}
