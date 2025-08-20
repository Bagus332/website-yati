"use client";

import { useState, useEffect } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { supabase } from "@/lib/supabase";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  Calendar,
  User,
  Eye,
  ChevronRight,
  Search,
  Filter,
  Tag,
  Clock,
  TrendingUp,
} from "lucide-react";

// Definisikan tipe untuk artikel
interface Article {
  id: number;
  created_at: string;
  title: string;
  content: string;
  image_url: string | null;
  slug: string;
  author?: string;
  category?: string;
  excerpt?: string;
  view_count?: number;
  is_featured?: boolean;
  status?: "draft" | "published";
}

// Kategori yang tersedia
const CATEGORIES = [
  { value: "", label: "Semua Kategori" },
  { value: "Kegiatan", label: "Kegiatan" },
  { value: "Prestasi", label: "Prestasi" },
  { value: "Pengumuman", label: "Pengumuman" },
  { value: "Pembelajaran", label: "Pembelajaran" },
  { value: "Beasiswa", label: "Beasiswa" },
  { value: "Pendaftaran", label: "Pendaftaran" },
  { value: "Wisuda", label: "Wisuda" },
  { value: "Olimpiade", label: "Olimpiade" },
  { value: "Ekstrakurikuler", label: "Ekstrakurikuler" },
];

// Komponen untuk kategori artikel
const CategoryBadge = ({ category }: { category?: string }) => {
  const getCategoryColor = (cat?: string) => {
    switch (cat?.toLowerCase()) {
      case "kegiatan":
        return "bg-green-100 text-green-800";
      case "prestasi":
        return "bg-yellow-100 text-yellow-800";
      case "pengumuman":
        return "bg-red-100 text-red-800";
      case "pembelajaran":
        return "bg-blue-100 text-blue-800";
      case "beasiswa":
        return "bg-purple-100 text-purple-800";
      case "pendaftaran":
        return "bg-indigo-100 text-indigo-800";
      case "wisuda":
        return "bg-pink-100 text-pink-800";
      case "olimpiade":
        return "bg-orange-100 text-orange-800";
      case "ekstrakurikuler":
        return "bg-teal-100 text-teal-800";
      default:
        return "bg-gray-100 text-gray-800";
    }
  };

  if (!category) return null;

  return (
    <span
      className={`inline-flex items-center px-2 py-1 rounded-full text-xs font-semibold ${getCategoryColor(
        category
      )}`}
    >
      <Tag className="w-3 h-3 mr-1" />
      {category}
    </span>
  );
};

// Komponen Skeleton untuk efek loading
const ArticleSkeleton = () => (
  <div className="bg-white rounded-2xl shadow-lg overflow-hidden animate-pulse">
    <div className="w-full h-48 bg-gray-200"></div>
    <div className="p-6">
      <div className="h-4 bg-gray-200 rounded w-20 mb-2"></div>
      <div className="h-6 bg-gray-200 rounded w-3/4 mb-3"></div>
      <div className="h-4 bg-gray-200 rounded w-full mb-2"></div>
      <div className="h-4 bg-gray-200 rounded w-5/6 mb-4"></div>
      <div className="flex justify-between items-center">
        <div className="h-4 bg-gray-200 rounded w-24"></div>
        <div className="h-4 bg-gray-200 rounded w-16"></div>
      </div>
    </div>
  </div>
);

const ARTICLES_PER_PAGE = 9;

export default function BeritaPage() {
  const [articles, setArticles] = useState<Article[]>([]);
  const [featuredArticles, setFeaturedArticles] = useState<Article[]>([]);
  const [loading, setLoading] = useState(true);
  const [page, setPage] = useState(0);
  const [hasMore, setHasMore] = useState(true);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("");
  const [totalArticles, setTotalArticles] = useState(0);
  const [showFilters, setShowFilters] = useState(false);

  useEffect(() => {
    fetchFeaturedArticles();
    fetchTotalArticles();
  }, []);

  useEffect(() => {
    fetchArticles(0); // Reset to first page when search/filter changes
    setPage(0);
  }, [searchTerm, selectedCategory]);

  useEffect(() => {
    if (page > 0) {
      // Only fetch more articles if not on first page
      fetchArticles(page);
    }
  }, [page]);

  const fetchFeaturedArticles = async () => {
    const { data } = await supabase
      .from("articles")
      .select("*")
      .eq("status", "published")
      .eq("is_featured", true)
      .order("created_at", { ascending: false })
      .limit(3);

    if (data) {
      setFeaturedArticles(data);
    }
  };

  const fetchTotalArticles = async () => {
    const { count } = await supabase
      .from("articles")
      .select("*", { count: "exact", head: true })
      .eq("status", "published");

    if (count) {
      setTotalArticles(count);
    }
  };

  const fetchArticles = async (currentPage: number) => {
    setLoading(true);
    const from = currentPage * ARTICLES_PER_PAGE;
    const to = from + ARTICLES_PER_PAGE - 1;

    let query = supabase
      .from("articles")
      .select("*")
      .eq("status", "published")
      .order("created_at", { ascending: false });

    // Apply search filter
    if (searchTerm) {
      query = query.or(
        `title.ilike.%${searchTerm}%,content.ilike.%${searchTerm}%`
      );
    }

    // Apply category filter
    if (selectedCategory) {
      query = query.eq("category", selectedCategory);
    }

    const { data, error } = await query.range(from, to);

    if (data) {
      setArticles((prevArticles) =>
        currentPage === 0 ? data : [...prevArticles, ...data]
      );
      setHasMore(data.length === ARTICLES_PER_PAGE);
    } else if (error) {
      console.error("Gagal memuat artikel:", error);
    }
    setLoading(false);
  };

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString("id-ID", {
      day: "numeric",
      month: "long",
      year: "numeric",
    });
  };

  const truncateContent = (content: string, maxLength: number = 120) => {
    if (content.length <= maxLength) return content;
    return content.substring(0, maxLength) + "...";
  };

  const handleLoadMore = () => {
    setPage((prev) => prev + 1);
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
          {/* Header Section */}
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
              Ikuti perkembangan terbaru, kegiatan, dan prestasi dari Pondok
              Pesantren YATI Kamang Mudik.
            </p>
            <div className="mt-4 text-sm text-gray-500">
              Total {totalArticles} artikel tersedia
            </div>
          </motion.div>

          {/* Search and Filter Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mb-12"
          >
            <div className="bg-white/80 backdrop-blur-lg rounded-2xl shadow-xl border border-gray-100 p-6">
              <div className="flex flex-col md:flex-row gap-4">
                {/* Search Bar */}
                <div className="flex-1 relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                  <input
                    type="text"
                    placeholder="Cari artikel, kegiatan, atau pengumuman..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-400 focus:border-transparent transition-all"
                  />
                </div>

                {/* Category Filter */}
                <div className="md:w-64">
                  <select
                    value={selectedCategory}
                    onChange={(e) => setSelectedCategory(e.target.value)}
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-400 focus:border-transparent transition-all"
                  >
                    {CATEGORIES.map((category) => (
                      <option key={category.value} value={category.value}>
                        {category.label}
                      </option>
                    ))}
                  </select>
                </div>

                {/* Filter Toggle Button (Mobile) */}
                <button
                  onClick={() => setShowFilters(!showFilters)}
                  className="md:hidden flex items-center justify-center px-4 py-3 bg-gradient-to-r from-blue-500 to-cyan-500 text-white rounded-xl hover:opacity-90 transition-all"
                >
                  <Filter className="w-5 h-5" />
                </button>
              </div>

              {/* Active Filters Display */}
              {(searchTerm || selectedCategory) && (
                <div className="mt-4 flex flex-wrap gap-2">
                  <span className="text-sm text-gray-600">Filter aktif:</span>
                  {searchTerm && (
                    <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm">
                      Pencarian: "{searchTerm}"
                    </span>
                  )}
                  {selectedCategory && (
                    <span className="px-3 py-1 bg-green-100 text-green-800 rounded-full text-sm">
                      {
                        CATEGORIES.find((cat) => cat.value === selectedCategory)
                          ?.label
                      }
                    </span>
                  )}
                  <button
                    onClick={() => {
                      setSearchTerm("");
                      setSelectedCategory("");
                    }}
                    className="px-3 py-1 bg-red-100 text-red-800 rounded-full text-sm hover:bg-red-200 transition-colors"
                  >
                    Hapus Filter
                  </button>
                </div>
              )}
            </div>
          </motion.div>

          {/* Featured Articles Section */}
          {featuredArticles.length > 0 &&
            page === 0 &&
            !searchTerm &&
            !selectedCategory && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="mb-16"
              >
                <div className="flex items-center mb-8">
                  <TrendingUp className="w-6 h-6 text-blue-600 mr-3" />
                  <h2 className="text-3xl font-bold text-gray-800">
                    Artikel Unggulan
                  </h2>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {featuredArticles.map((article, index) => (
                    <Link key={article.id} href={`/berita/${article.slug}`}>
                      <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: index * 0.1 }}
                        whileHover={{ y: -8, scale: 1.02 }}
                        className="group relative bg-white rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-500 overflow-hidden border border-gray-100 h-full"
                      >
                        {/* Featured Badge */}
                        <div className="absolute top-4 left-4 z-10">
                          <span className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-3 py-1 rounded-full text-xs font-bold flex items-center">
                            <span className="w-2 h-2 bg-white rounded-full mr-2 animate-pulse"></span>
                            UNGGULAN
                          </span>
                        </div>

                        <div className="relative h-56 overflow-hidden">
                          <img
                            src={article.image_url || "/placeholder-image.jpg"}
                            alt={article.title}
                            className="object-cover w-full h-full transform group-hover:scale-110 transition-transform duration-700"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                          {article.category && (
                            <div className="absolute top-4 right-4">
                              <CategoryBadge category={article.category} />
                            </div>
                          )}
                        </div>

                        <div className="p-6">
                          <div className="flex items-center mb-3 text-xs text-gray-500">
                            <Calendar className="w-3 h-3 mr-1" />
                            <span className="mr-3">
                              {formatDate(article.created_at)}
                            </span>
                            {article.author && (
                              <>
                                <User className="w-3 h-3 mr-1" />
                                <span className="mr-3">{article.author}</span>
                              </>
                            )}
                            {article.view_count !== undefined && (
                              <>
                                <Eye className="w-3 h-3 mr-1" />
                                <span>{article.view_count}</span>
                              </>
                            )}
                          </div>

                          <h2 className="text-xl font-bold text-gray-800 mb-3 line-clamp-2 group-hover:text-blue-600 transition-colors leading-tight">
                            {article.title}
                          </h2>
                          <p className="text-gray-600 line-clamp-3 leading-relaxed mb-4">
                            {article.excerpt ||
                              truncateContent(article.content)}
                          </p>

                          <div className="flex items-center text-blue-600 font-medium group-hover:text-blue-700 transition-colors">
                            <span>Baca Selengkapnya</span>
                            <ChevronRight className="w-4 h-4 ml-1 transform group-hover:translate-x-1 transition-transform" />
                          </div>
                        </div>
                      </motion.div>
                    </Link>
                  ))}
                </div>
              </motion.div>
            )}

          {/* Regular Articles Section */}
          <div className="mb-8">
            <h3 className="text-2xl font-bold text-gray-800 mb-6">
              {searchTerm || selectedCategory
                ? "Hasil Pencarian"
                : page === 0 && featuredArticles.length > 0
                ? "Artikel Terbaru"
                : `Halaman ${page + 1}`}
            </h3>
            {(searchTerm || selectedCategory) && (
              <p className="text-gray-600 mb-6">
                Ditemukan {articles.length} artikel
              </p>
            )}
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {loading && articles.length === 0
              ? Array.from({ length: ARTICLES_PER_PAGE }).map((_, index) => (
                  <ArticleSkeleton key={index} />
                ))
              : articles.map((article, index) => (
                  <Link key={article.id} href={`/berita/${article.slug}`}>
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
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
                        {article.category && (
                          <div className="absolute top-4 left-4">
                            <CategoryBadge category={article.category} />
                          </div>
                        )}
                      </div>

                      <div className="p-6 flex flex-col flex-grow">
                        <div className="flex items-center mb-3 text-xs text-gray-500">
                          <Calendar className="w-3 h-3 mr-1" />
                          <span className="mr-3">
                            {formatDate(article.created_at)}
                          </span>
                          {article.author && (
                            <>
                              <User className="w-3 h-3 mr-1" />
                              <span className="mr-3">{article.author}</span>
                            </>
                          )}
                          {article.view_count !== undefined && (
                            <>
                              <Eye className="w-3 h-3 mr-1" />
                              <span>{article.view_count}</span>
                            </>
                          )}
                        </div>

                        <div className="flex-grow">
                          <h2 className="text-xl font-bold text-gray-800 mb-3 line-clamp-2 group-hover:text-blue-600 transition-colors leading-tight">
                            {article.title}
                          </h2>
                          <p className="text-gray-600 line-clamp-3 leading-relaxed">
                            {article.excerpt ||
                              truncateContent(article.content)}
                          </p>
                        </div>

                        <div className="mt-6 pt-4 border-t border-gray-100 flex justify-between items-center">
                          <div className="flex items-center text-blue-600 font-medium group-hover:text-blue-700 transition-colors">
                            <span>Baca Selengkapnya</span>
                            <ChevronRight className="w-4 h-4 ml-1 transform group-hover:translate-x-1 transition-transform" />
                          </div>
                          <div className="flex items-center text-sm text-gray-400">
                            <Clock className="w-3 h-3 mr-1" />
                            <span>
                              {Math.ceil(article.content.length / 1000)} min
                            </span>
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  </Link>
                ))}
          </div>

          {/* No Results Message */}
          {!loading &&
            articles.length === 0 &&
            (searchTerm || selectedCategory) && (
              <div className="text-center py-16">
                <div className="text-6xl mb-4">🔍</div>
                <h3 className="text-2xl font-bold text-gray-800 mb-4">
                  Tidak Ada Hasil
                </h3>
                <p className="text-gray-600 mb-8 max-w-md mx-auto">
                  Tidak ditemukan artikel yang sesuai dengan pencarian atau
                  filter Anda. Coba gunakan kata kunci yang berbeda atau pilih
                  kategori lain.
                </p>
                <button
                  onClick={() => {
                    setSearchTerm("");
                    setSelectedCategory("");
                  }}
                  className="bg-gradient-to-r from-blue-500 to-cyan-500 text-white py-3 px-8 rounded-xl hover:opacity-90 transition-all duration-300 font-semibold"
                >
                  Tampilkan Semua Artikel
                </button>
              </div>
            )}

          {/* Load More / Pagination */}
          {!loading && articles.length > 0 && hasMore && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="flex justify-center items-center mt-16"
            >
              <button
                onClick={handleLoadMore}
                disabled={loading}
                className="bg-gradient-to-r from-blue-500 to-cyan-500 text-white py-4 px-8 rounded-xl hover:opacity-90 transition-all duration-300 font-semibold shadow-lg transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {loading ? "Memuat..." : "Muat Lebih Banyak"}
              </button>
            </motion.div>
          )}

          {/* Load more articles indicator */}
          {loading && articles.length > 0 && (
            <div className="flex justify-center mt-8">
              <div className="flex items-center space-x-2 text-blue-500">
                <div className="animate-spin rounded-full h-6 w-6 border-b-2 border-blue-500"></div>
                <span>Memuat artikel...</span>
              </div>
            </div>
          )}

          {/* End of Articles Message */}
          {!loading && articles.length > 0 && !hasMore && (
            <div className="text-center mt-16 py-8 border-t border-gray-200">
              <p className="text-gray-600">
                Anda telah melihat semua artikel yang tersedia.
              </p>
              <Link
                href="/"
                className="text-blue-600 hover:underline font-medium"
              >
                Kembali ke Beranda
              </Link>
            </div>
          )}
        </div>
      </main>
      <Footer />
    </>
  );
}
