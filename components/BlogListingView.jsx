"use client";

import React, { useState, useMemo } from "react";
import Image from "next/image";
import Link from "next/link";

export default function BlogListingView({ articles = [] }) {
  const [selectedCategory, setSelectedCategory] = useState("Semua");
  const [searchQuery, setSearchQuery] = useState("");

  const categories = useMemo(() => {
    const cats = ["Semua"];
    articles.forEach((a) => {
      if (a.category && !cats.includes(a.category)) {
        cats.push(a.category);
      }
    });
    return cats;
  }, [articles]);

  const filteredArticles = useMemo(() => {
    return articles.filter((article) => {
      const matchCat =
        selectedCategory === "Semua" || article.category === selectedCategory;
      const matchSearch =
        searchQuery.trim() === "" ||
        article.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        article.excerpt.toLowerCase().includes(searchQuery.toLowerCase()) ||
        article.tags?.some((t) =>
          t.toLowerCase().includes(searchQuery.toLowerCase())
        );
      return matchCat && matchSearch;
    });
  }, [articles, selectedCategory, searchQuery]);

  const featuredArticle = articles[0];

  return (
    <div className="w-full">
      {/* Category Pills & Search Bar */}
      <div className="mb-10 sm:mb-12 flex flex-col md:flex-row md:items-center justify-between gap-5 pb-6 border-b border-slate-200">
        {/* Category Filter Pills */}
        <div className="flex items-center gap-2 overflow-x-auto pb-2 md:pb-0 scrollbar-none">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-4 py-2 rounded-full text-[13px] sm:text-[14px] font-semibold whitespace-nowrap transition-all duration-200 ${
                selectedCategory === cat
                  ? "bg-[#0070D5] text-white shadow-md shadow-blue-500/20"
                  : "bg-slate-100 hover:bg-slate-200 text-slate-600"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Search Input Box */}
        <div className="relative min-w-[260px] sm:min-w-[320px]">
          <input
            type="text"
            placeholder="Cari topik atau berita..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-10 pr-4 py-2.5 rounded-full bg-slate-50 border border-slate-200 text-[13px] sm:text-[14px] focus:outline-none focus:ring-2 focus:ring-[#0070D5] focus:bg-white transition-all placeholder:text-slate-400"
          />
          <svg
            className="w-4 h-4 text-slate-400 absolute left-3.5 top-3.5"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2.2"
              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
            />
          </svg>
        </div>
      </div>

      {/* Featured Article Hero (Shown only when in "Semua" with no search) */}
      {selectedCategory === "Semua" && searchQuery === "" && featuredArticle && (
        <div className="mb-12 sm:mb-16">
          <Link
            href={`/blog/${featuredArticle.slug}`}
            className="group block relative rounded-[28px] sm:rounded-[36px] overflow-hidden bg-slate-900 border border-slate-200/80 shadow-md hover:shadow-2xl transition-all duration-500"
          >
            <div className="grid grid-cols-1 lg:grid-cols-12 min-h-[420px] lg:min-h-[480px]">
              {/* Image Half */}
              <div className="lg:col-span-7 relative h-[280px] sm:h-[360px] lg:h-auto overflow-hidden">
                <Image
                  src={featuredArticle.image}
                  alt={featuredArticle.title}
                  fill
                  priority
                  className="object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent lg:bg-gradient-to-r lg:from-transparent lg:to-slate-950/80" />
              </div>

              {/* Text Half */}
              <div className="lg:col-span-5 p-7 sm:p-10 lg:p-12 flex flex-col justify-between bg-slate-950 text-white">
                <div>
                  <div className="flex items-center gap-2 mb-3 sm:mb-4">
                    <span className="text-[11px] font-bold uppercase tracking-wider px-3 py-1 rounded-full bg-[#0070D5] text-white">
                      Berita Utama
                    </span>
                    <span className="text-[12px] text-slate-400 font-medium">
                      {featuredArticle.date}
                    </span>
                  </div>

                  <h2 className="text-[22px] sm:text-[28px] lg:text-[32px] font-extrabold text-white tracking-tight leading-tight group-hover:text-blue-300 transition-colors mb-3">
                    {featuredArticle.title}
                  </h2>

                  <p className="text-[14px] sm:text-[15px] text-slate-300 leading-relaxed line-clamp-3 mb-6">
                    {featuredArticle.excerpt}
                  </p>
                </div>

                <div className="pt-4 border-t border-slate-800 flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="relative w-9 h-9 rounded-full overflow-hidden bg-slate-800">
                      <Image
                        src={featuredArticle.author.avatar}
                        alt={featuredArticle.author.name}
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div>
                      <p className="text-[13px] font-semibold text-white">
                        {featuredArticle.author.name}
                      </p>
                      <p className="text-[11px] text-slate-400">
                        {featuredArticle.author.role}
                      </p>
                    </div>
                  </div>

                  <span className="text-[13px] font-semibold text-[#0070D5] group-hover:translate-x-1 transition-transform inline-flex items-center gap-1">
                    <span>Baca Berita</span>
                    <span>→</span>
                  </span>
                </div>
              </div>
            </div>
          </Link>
        </div>
      )}

      {/* Grid of Articles */}
      {filteredArticles.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {filteredArticles.map((article) => (
            <article
              key={article.id}
              className="group flex flex-col bg-white rounded-[24px] overflow-hidden border border-slate-200/90 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
            >
              {/* Image */}
              <Link
                href={`/blog/${article.slug}`}
                className="relative block w-full h-[220px] sm:h-[240px] overflow-hidden bg-slate-900"
              >
                <Image
                  src={article.image}
                  alt={article.title}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  className="object-cover object-center transition-transform duration-700 ease-out group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-50 group-hover:opacity-30 transition-opacity" />

                <div className="absolute top-4 left-4 z-10">
                  <span className="inline-block text-[11px] font-bold px-3 py-1 rounded-full backdrop-blur-md bg-white/90 text-slate-900 shadow-sm border border-white/40">
                    {article.category}
                  </span>
                </div>
              </Link>

              {/* Body */}
              <div className="p-6 sm:p-7 flex flex-col flex-grow justify-between">
                <div>
                  <div className="flex items-center gap-3 text-[12px] text-slate-500 font-medium mb-3">
                    <time dateTime={article.date}>{article.date}</time>
                    <span className="w-1 h-1 rounded-full bg-slate-300" />
                    <span>{article.readTime}</span>
                  </div>

                  <h3 className="text-[18px] sm:text-[20px] font-bold text-slate-900 leading-snug group-hover:text-[#0070D5] transition-colors line-clamp-2 mb-2.5">
                    <Link href={`/blog/${article.slug}`}>
                      {article.title}
                    </Link>
                  </h3>

                  <p className="text-[13px] sm:text-[14px] text-slate-600 leading-relaxed line-clamp-3 mb-6">
                    {article.excerpt}
                  </p>
                </div>

                <div className="pt-4 border-t border-slate-100 flex items-center justify-between mt-auto">
                  <div className="flex items-center gap-2.5">
                    <div className="relative w-8 h-8 rounded-full overflow-hidden bg-slate-200 border border-slate-200">
                      <Image
                        src={article.author.avatar}
                        alt={article.author.name}
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div>
                      <p className="text-[12px] font-semibold text-slate-900 leading-tight">
                        {article.author.name}
                      </p>
                      <p className="text-[10px] text-slate-500 leading-tight line-clamp-1">
                        {article.author.role}
                      </p>
                    </div>
                  </div>

                  <Link
                    href={`/blog/${article.slug}`}
                    className="inline-flex items-center gap-1 text-[13px] font-semibold text-[#0070D5] group-hover:translate-x-1 transition-transform"
                    aria-label={`Baca: ${article.title}`}
                  >
                    <span>Baca</span>
                    <span>→</span>
                  </Link>
                </div>
              </div>
            </article>
          ))}
        </div>
      ) : (
        <div className="text-center py-16 bg-white rounded-[24px] border border-slate-200">
          <p className="text-[16px] text-slate-600 font-medium">
            Tidak ada berita yang cocok dengan pencarian &ldquo;{searchQuery}&rdquo;.
          </p>
          <button
            onClick={() => {
              setSearchQuery("");
              setSelectedCategory("Semua");
            }}
            className="mt-4 px-5 py-2 rounded-full bg-[#0070D5] text-white text-[13px] font-semibold hover:bg-[#005bb5]"
          >
            Reset Pencarian
          </button>
        </div>
      )}
    </div>
  );
}
