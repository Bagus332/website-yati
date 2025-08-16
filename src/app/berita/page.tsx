"use client";

import { useState, useEffect } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { supabase } from "@/lib/supabase";
import Link from "next/link";
import { motion } from "framer-motion";

// Definisikan tipe untuk artikel
interface Article {
  id: number;
  created_at: string;
  title: string;
  content: string;
  image_url: string | null;
  slug: string;
}

// Komponen Skeleton untuk efek loading
const ArticleSkeleton = () => (
  <div className="bg-white rounded-2xl shadow-lg overflow-hidden animate-pulse">
    <div className="w-full h-48 bg-gray-200"></div>
    <div className="p-6">
      <div className="h-6 bg-gray-200 rounded w-3/4 mb-4"></div>
      <div className="h-4 bg-gray-200 rounded w-full mb-2"></div>
      <div className="h-4 bg-gray-200 rounded w-5/6"></div>
      <div className="h-8 bg-gray-200 rounded-lg w-1/3 mt-6"></div>
    </div>
  </div>
);

const ARTICLES_PER_PAGE = 6;

export default function BeritaPage() {
  const [articles, setArticles] = useState<Article[]>([]);
  const [loading, setLoading] = useState(true);
  const [page, setPage] = useState(0);
  const [hasMore, setHasMore] = useState(true);

  useEffect(() => {
    fetchArticles(page);
  }, [page]);

  const fetchArticles = async (page: number) => {
    setLoading(true);
    const from = page * ARTICLES_PER_PAGE;
    const to = from + ARTICLES_PER_PAGE - 1;

    const { data, error } = await supabase
      .from("articles")
      .select("*")
      .order("created_at", { ascending: false })
      .range(from, to);

    if (data) {
      setArticles((prevArticles) =>
        page === 0 ? data : [...prevArticles, ...data]
      );
      if (data.length < ARTICLES_PER_PAGE) {
        setHasMore(false);
      }
    } else if (error) {
      console.error("Gagal memuat artikel:", error);
    }
    setLoading(false);
  };

  return (
    <>
      <main className="min-h-screen bg-gradient-to-b from-blue-50 to-white font-sans">
        <div className="fixed inset-0 opacity-[0.02] pointer-events-none">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_25%_25%,_theme(colors.blue.500)_0%,_transparent_50%)]" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_75%_75%,_theme(colors.cyan.500)_0%,_transparent_50%)]" />
        </div>
        <Navbar />
        <div className="container mx-auto p-4 py-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <span className="inline-block bg-gradient-to-r from-blue-100 to-cyan-100 text-blue-800 px-6 py-3 rounded-full text-sm font-bold uppercase tracking-wider mb-6">
              Informasi & Kegiatan
            </span>
            <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent mb-6">
              Berita & Artikel
            </h1>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-cyan-500 mx-auto rounded-full" />
            <p className="text-gray-600 mt-6 text-lg max-w-2xl mx-auto">
              Ikuti perkembangan dan kegiatan terbaru dari Pondok Pesantren YATI
              Kamang Mudik.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {loading && articles.length === 0
              ? Array.from({ length: ARTICLES_PER_PAGE }).map((_, index) => (
                  <ArticleSkeleton key={index} />
                ))
              : articles.map((article) => (
                  <Link key={article.id} href={`/berita/${article.slug}`}>
                    <motion.div
                      whileHover={{ y: -8, scale: 1.02 }}
                      className="group bg-white rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-500 overflow-hidden border border-gray-100 flex flex-col h-full"
                    >
                      <div className="relative h-56 overflow-hidden">
                        <img
                          src={article.image_url || "/placeholder-image.jpg"}
                          alt={article.title}
                          className="object-cover w-full h-full transform group-hover:scale-110 transition-transform duration-700"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                      </div>
                      <div className="p-6 flex flex-col flex-grow">
                        <div className="flex-grow">
                          <h2 className="text-xl font-bold text-gray-800 mb-2 line-clamp-2 group-hover:text-blue-600 transition-colors">
                            {article.title}
                          </h2>
                          <p className="text-gray-600 line-clamp-3">
                            {article.content.substring(0, 100)}...
                          </p>
                        </div>
                        <div className="mt-6 pt-4 border-t border-gray-100 flex justify-between items-center">
                          <span className="text-blue-600 font-medium group-hover:text-blue-700 transition-colors">
                            Baca Selengkapnya
                          </span>
                          <span className="text-sm text-gray-500">
                            {new Date(article.created_at).toLocaleDateString(
                              "id-ID",
                              {
                                day: "numeric",
                                month: "short",
                                year: "numeric",
                              }
                            )}
                          </span>
                        </div>
                      </div>
                    </motion.div>
                  </Link>
                ))}
          </div>

          {/* Tombol Paginasi */}
          <div className="flex justify-center items-center mt-16 space-x-4">
            <button
              onClick={() => setPage(page - 1)}
              disabled={page === 0 || loading}
              className="bg-white border border-gray-300 text-gray-700 py-2 px-6 rounded-lg hover:bg-gray-100 transition-colors disabled:bg-gray-200 disabled:cursor-not-allowed"
            >
              Sebelumnya
            </button>
            <span className="text-gray-700 font-medium">
              Halaman {page + 1}
            </span>
            <button
              onClick={() => setPage(page + 1)}
              disabled={!hasMore || loading}
              className="bg-gradient-to-r from-blue-500 to-cyan-500 text-white py-2 px-6 rounded-lg hover:opacity-90 transition-opacity disabled:opacity-50 disabled:cursor-not-allowed"
            >
              Berikutnya
            </button>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
