"use client";

import { useState, useEffect } from 'react';
import Navbar from "@/components/Navbar";
import { supabase } from "@/lib/supabase";
import Link from 'next/link';

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
  <div className="bg-white rounded-lg shadow-md overflow-hidden animate-pulse">
    <div className="w-full h-48 bg-gray-300"></div>
    <div className="p-4">
      <div className="h-6 bg-gray-300 rounded w-3/4 mb-2"></div>
      <div className="h-4 bg-gray-300 rounded w-full mb-1"></div>
      <div className="h-4 bg-gray-300 rounded w-5/6"></div>
      <div className="h-5 bg-gray-300 rounded w-1/3 mt-4"></div>
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
      setArticles(data);
      if (data.length < ARTICLES_PER_PAGE) {
        setHasMore(false);
      } else {
        setHasMore(true);
      }
    } else if (error) {
      console.error("Gagal memuat artikel:", error);
    }
    setLoading(false);
  };

  return (
    <main className="min-h-screen bg-gray-50">
      <Navbar />
      <div className="container mx-auto p-4 py-12">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-emerald-600 to-blue-600 bg-clip-text text-transparent">
            Semua Berita
          </h1>
          <p className="text-gray-600 mt-2">
            Ikuti informasi dan kegiatan terbaru dari Pondok Pesantren YATI.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {loading ? (
            Array.from({ length: ARTICLES_PER_PAGE }).map((_, index) => (
              <ArticleSkeleton key={index} />
            ))
          ) : (
            articles.map((article) => (
              <Link key={article.id} href={`/berita/${article.slug}`}>
                <div className="bg-white rounded-lg shadow-md overflow-hidden h-full transform hover:-translate-y-2 transition-transform duration-300 cursor-pointer">
                  <img
                    src={article.image_url || '/placeholder-image.jpg'}
                    alt={article.title}
                    className="w-full h-48 object-cover"
                  />
                  <div className="p-4">
                    <h2 className="text-xl font-bold mb-2 h-14 overflow-hidden">{article.title}</h2>
                    <p className="text-gray-700 text-sm h-20 overflow-hidden">
                      {article.content.substring(0, 100)}...
                    </p>
                    <span className="text-blue-500 mt-4 inline-block font-semibold">
                      Baca Selengkapnya
                    </span>
                  </div>
                </div>
              </Link>
            ))
          )}
        </div>

        {/* Tombol Paginasi */}
        <div className="flex justify-center items-center mt-12 space-x-4">
          <button
            onClick={() => setPage(page - 1)}
            disabled={page === 0 || loading}
            className="bg-blue-600 text-white py-2 px-6 rounded-lg hover:bg-blue-700 transition-colors disabled:bg-gray-400 disabled:cursor-not-allowed"
          >
            Sebelumnya
          </button>
          <span className="text-gray-700 font-medium">Halaman {page + 1}</span>
          <button
            onClick={() => setPage(page + 1)}
            disabled={!hasMore || loading}
            className="bg-blue-600 text-white py-2 px-6 rounded-lg hover:bg-blue-700 transition-colors disabled:bg-gray-400 disabled:cursor-not-allowed"
          >
            Berikutnya
          </button>
        </div>
      </div>
    </main>
  );
}