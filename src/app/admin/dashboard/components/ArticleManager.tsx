"use client";

import { useState, useEffect, FormEvent } from "react";
import { supabase } from "@/lib/supabase";
import { CldUploadButton } from "next-cloudinary";
import {
  FaPen,
  FaTrash,
  FaTimes,
  FaEye,
  FaCalendar,
  FaUser,
  FaTag,
  FaImage,
  FaSave,
  FaPlus,
} from "react-icons/fa";

// Definisikan tipe data untuk artikel
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
  "Kegiatan",
  "Prestasi",
  "Pengumuman",
  "Pembelajaran",
  "Beasiswa",
  "Pendaftaran",
  "Wisuda",
  "Olimpiade",
  "Ekstrakurikuler",
  "Lainnya",
];

export default function ArticleManager() {
  // State untuk form
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [excerpt, setExcerpt] = useState("");
  const [imageUrl, setImageUrl] = useState<string | null>(null);
  const [author, setAuthor] = useState("");
  const [category, setCategory] = useState("");
  const [status, setStatus] = useState<"draft" | "published">("published");
  const [isFeatured, setIsFeatured] = useState(false);

  // State untuk manajemen data
  const [articles, setArticles] = useState<Article[]>([]);
  const [editingArticle, setEditingArticle] = useState<Article | null>(null);
  const [searchTerm, setSearchTerm] = useState("");
  const [filterCategory, setFilterCategory] = useState("");
  const [filterStatus, setFilterStatus] = useState("");

  // State untuk UI
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [message, setMessage] = useState({ type: "", text: "" });
  const [currentPage, setCurrentPage] = useState(1);
  const articlesPerPage = 10;

  // Mengambil data artikel saat komponen pertama kali dimuat
  useEffect(() => {
    fetchArticles();
  }, []);

  // Fungsi untuk mengambil semua artikel dari Supabase
  const fetchArticles = async () => {
    const { data, error } = await supabase
      .from("articles")
      .select("*")
      .order("created_at", { ascending: false });

    if (data) {
      setArticles(data);
    } else {
      setMessage({ type: "error", text: "Gagal memuat artikel." });
    }
  };

  // Fungsi untuk membuat slug URL-friendly dari judul
  const createSlug = (title: string) => {
    return title
      .toLowerCase()
      .replace(/ /g, "-")
      .replace(/[^\w-]+/g, "")
      .replace(/--+/g, "-")
      .replace(/^-|-$/g, "");
  };

  // Handler saat gambar berhasil diunggah ke Cloudinary
  const handleArticleUpload = (result: any) => {
    setImageUrl(result.info.secure_url);
    setMessage({ type: "success", text: "Gambar berhasil diunggah!" });
  };

  // Handler untuk menghapus gambar dari state (sebelum disimpan)
  const handleRemoveImage = () => {
    setImageUrl(null);
    setMessage({
      type: "info",
      text: "Gambar akan dihapus saat artikel disimpan.",
    });
  };

  // Fungsi untuk mereset form ke kondisi awal
  const resetForm = () => {
    setTitle("");
    setContent("");
    setExcerpt("");
    setImageUrl(null);
    setAuthor("");
    setCategory("");
    setStatus("published");
    setIsFeatured(false);
    setEditingArticle(null);
    setMessage({ type: "", text: "" });
  };

  // Handler untuk submit form (bisa untuk membuat atau memperbarui)
  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();

    if (!title.trim() || !content.trim()) {
      setMessage({
        type: "error",
        text: "Judul dan konten tidak boleh kosong.",
      });
      return;
    }

    setIsSubmitting(true);
    setMessage({ type: "", text: "" });

    const slug = createSlug(title);
    const articleData = {
      title,
      content,
      excerpt: excerpt || content.substring(0, 200) + "...",
      image_url: imageUrl,
      author: author || "Admin",
      category: category || "Lainnya",
      slug,
      status,
      is_featured: isFeatured,
      view_count: editingArticle?.view_count || 0,
    };

    let error;
    if (editingArticle) {
      // Logic untuk UPDATE artikel yang ada
      const { error: updateError } = await supabase
        .from("articles")
        .update(articleData)
        .eq("id", editingArticle.id);
      error = updateError;
    } else {
      // Logic untuk CREATE artikel baru
      const { error: insertError } = await supabase
        .from("articles")
        .insert([articleData]);
      error = insertError;
    }

    if (error) {
      setMessage({
        type: "error",
        text: "Gagal menyimpan artikel: " + error.message,
      });
    } else {
      setMessage({
        type: "success",
        text: `Artikel berhasil ${
          editingArticle ? "diperbarui" : "diterbitkan"
        }!`,
      });
      resetForm();
      fetchArticles(); // Muat ulang daftar artikel
    }
    setIsSubmitting(false);
  };

  // Handler untuk menghapus artikel dari database
  const handleDelete = async (id: number) => {
    if (
      window.confirm(
        "Apakah Anda yakin ingin menghapus artikel ini? Tindakan ini tidak dapat dibatalkan."
      )
    ) {
      const { error } = await supabase.from("articles").delete().eq("id", id);

      if (error) {
        setMessage({
          type: "error",
          text: "Gagal menghapus artikel: " + error.message,
        });
      } else {
        setMessage({ type: "success", text: "Artikel berhasil dihapus." });
        fetchArticles();
      }
    }
  };

  // Handler untuk mengisi form dengan data artikel yang akan diedit
  const handleEdit = (article: Article) => {
    setEditingArticle(article);
    setTitle(article.title);
    setContent(article.content);
    setExcerpt(article.excerpt || "");
    setImageUrl(article.image_url);
    setAuthor(article.author || "");
    setCategory(article.category || "");
    setStatus(article.status || "published");
    setIsFeatured(article.is_featured || false);
    setMessage({ type: "", text: "" });
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  // Auto-generate excerpt dari content
  const handleContentChange = (value: string) => {
    setContent(value);
    if (!excerpt && value.length > 0) {
      setExcerpt(value.substring(0, 200) + (value.length > 200 ? "..." : ""));
    }
  };

  // Filter articles berdasarkan search dan filter
  const filteredArticles = articles.filter((article) => {
    const matchesSearch =
      article.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      article.content.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory =
      !filterCategory || article.category === filterCategory;
    const matchesStatus = !filterStatus || article.status === filterStatus;

    return matchesSearch && matchesCategory && matchesStatus;
  });

  // Pagination
  const totalPages = Math.ceil(filteredArticles.length / articlesPerPage);
  const startIndex = (currentPage - 1) * articlesPerPage;
  const paginatedArticles = filteredArticles.slice(
    startIndex,
    startIndex + articlesPerPage
  );

  // Format tanggal
  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString("id-ID", {
      day: "numeric",
      month: "short",
      year: "numeric",
      hour: "2-digit",
      minute: "2-digit",
    });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-cyan-50">
      <div className="container mx-auto p-6">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent mb-4">
            Manajemen Artikel & Berita
          </h1>
          <p className="text-gray-600 text-lg">
            Kelola konten berita dan artikel untuk website sekolah
          </p>
        </div>

        <div className="grid grid-cols-1 xl:grid-cols-3 gap-8">
          {/* Form Section - Wider */}
          <div className="xl:col-span-1">
            <div className="bg-white/80 backdrop-blur-lg p-8 rounded-3xl shadow-2xl border border-blue-100/60 sticky top-6">
              <div className="flex items-center justify-center mb-6">
                <div className="p-3 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full text-white mr-3">
                  {editingArticle ? <FaPen /> : <FaPlus />}
                </div>
                <h2 className="text-2xl font-bold text-gray-800">
                  {editingArticle ? "Edit Artikel" : "Artikel Baru"}
                </h2>
              </div>

              {message.text && (
                <div
                  className={`mb-6 p-4 rounded-xl ${
                    message.type === "error"
                      ? "bg-red-50 text-red-600 border border-red-200"
                      : message.type === "success"
                      ? "bg-green-50 text-green-600 border border-green-200"
                      : "bg-blue-50 text-blue-600 border border-blue-200"
                  } font-medium`}
                >
                  {message.text}
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Status dan Featured */}
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Status
                    </label>
                    <select
                      value={status}
                      onChange={(e) =>
                        setStatus(e.target.value as "draft" | "published")
                      }
                      className="w-full p-3 bg-white border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-400 focus:border-transparent transition-all"
                    >
                      <option value="published">Terbit</option>
                      <option value="draft">Draft</option>
                    </select>
                  </div>
                  <div className="flex items-center pt-8">
                    <input
                      type="checkbox"
                      id="featured"
                      checked={isFeatured}
                      onChange={(e) => setIsFeatured(e.target.checked)}
                      className="w-5 h-5 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
                    />
                    <label
                      htmlFor="featured"
                      className="ml-2 text-sm font-medium text-gray-700"
                    >
                      Artikel Utama
                    </label>
                  </div>
                </div>

                {/* Title */}
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    <FaTag className="inline mr-2" />
                    Judul Artikel *
                  </label>
                  <input
                    type="text"
                    placeholder="Masukkan judul artikel yang menarik"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    className="w-full p-3 bg-white border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-400 focus:border-transparent transition-all"
                    required
                  />
                </div>

                {/* Author and Category */}
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      <FaUser className="inline mr-2" />
                      Penulis
                    </label>
                    <input
                      type="text"
                      placeholder="Nama penulis"
                      value={author}
                      onChange={(e) => setAuthor(e.target.value)}
                      className="w-full p-3 bg-white border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-400 focus:border-transparent transition-all"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Kategori
                    </label>
                    <select
                      value={category}
                      onChange={(e) => setCategory(e.target.value)}
                      className="w-full p-3 bg-white border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-400 focus:border-transparent transition-all"
                    >
                      <option value="">Pilih Kategori</option>
                      {CATEGORIES.map((cat) => (
                        <option key={cat} value={cat}>
                          {cat}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                {/* Excerpt */}
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Ringkasan
                  </label>
                  <textarea
                    placeholder="Ringkasan singkat artikel (opsional)"
                    value={excerpt}
                    onChange={(e) => setExcerpt(e.target.value)}
                    className="w-full p-3 bg-white border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-400 focus:border-transparent transition-all"
                    rows={3}
                  />
                  <p className="text-xs text-gray-500 mt-1">
                    Jika kosong, akan diambil dari 200 karakter pertama konten
                  </p>
                </div>

                {/* Content */}
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Konten Artikel *
                  </label>
                  <textarea
                    placeholder="Tulis konten artikel lengkap di sini..."
                    value={content}
                    onChange={(e) => handleContentChange(e.target.value)}
                    className="w-full p-3 bg-white border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-400 focus:border-transparent transition-all"
                    rows={8}
                    required
                  />
                </div>

                {/* Image Upload */}
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    <FaImage className="inline mr-2" />
                    Gambar Artikel
                  </label>
                  <div className="space-y-3">
                    <CldUploadButton
                      uploadPreset="ponpes_yati"
                      onSuccess={handleArticleUpload}
                      className="w-full bg-gradient-to-r from-blue-500 to-cyan-500 text-white py-3 px-6 rounded-xl hover:opacity-90 transition-all duration-300 font-semibold flex items-center justify-center"
                    >
                      <FaImage className="mr-2" />
                      {imageUrl ? "Ganti Gambar" : "Upload Gambar"}
                    </CldUploadButton>

                    {imageUrl && (
                      <div className="relative">
                        <img
                          src={imageUrl}
                          alt="Preview"
                          className="w-full h-48 object-cover rounded-xl shadow-lg"
                        />
                        <button
                          type="button"
                          onClick={handleRemoveImage}
                          className="absolute top-2 right-2 bg-red-500 text-white rounded-full p-2 shadow-lg hover:bg-red-600 transition-all duration-300"
                        >
                          <FaTimes size={12} />
                        </button>
                      </div>
                    )}
                  </div>
                </div>

                {/* Submit Buttons */}
                <div className="space-y-3 pt-4">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-gradient-to-r from-blue-500 to-cyan-500 text-white p-4 rounded-xl disabled:opacity-50 font-bold hover:opacity-90 transition-all duration-300 transform hover:scale-[1.02] flex items-center justify-center"
                  >
                    <FaSave className="mr-2" />
                    {isSubmitting
                      ? "Menyimpan..."
                      : editingArticle
                      ? "Perbarui Artikel"
                      : "Terbitkan Artikel"}
                  </button>

                  {editingArticle && (
                    <button
                      type="button"
                      onClick={resetForm}
                      className="w-full bg-gradient-to-r from-gray-500 to-gray-600 text-white p-4 rounded-xl hover:opacity-90 transition-all duration-300 transform hover:scale-[1.02]"
                    >
                      Batal Edit
                    </button>
                  )}
                </div>
              </form>
            </div>
          </div>

          {/* Article List Section - Wider */}
          <div className="xl:col-span-2">
            <div className="bg-white/80 backdrop-blur-lg rounded-3xl shadow-2xl border border-cyan-100/60">
              {/* Header with Filters */}
              <div className="p-6 border-b border-gray-200">
                <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
                  <h3 className="text-2xl font-bold text-gray-800">
                    Daftar Artikel ({filteredArticles.length})
                  </h3>

                  {/* Search and Filters */}
                  <div className="flex flex-col sm:flex-row gap-3">
                    <input
                      type="text"
                      placeholder="Cari artikel..."
                      value={searchTerm}
                      onChange={(e) => setSearchTerm(e.target.value)}
                      className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-400 focus:border-transparent"
                    />
                    <select
                      value={filterCategory}
                      onChange={(e) => setFilterCategory(e.target.value)}
                      className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-400 focus:border-transparent"
                    >
                      <option value="">Semua Kategori</option>
                      {CATEGORIES.map((cat) => (
                        <option key={cat} value={cat}>
                          {cat}
                        </option>
                      ))}
                    </select>
                    <select
                      value={filterStatus}
                      onChange={(e) => setFilterStatus(e.target.value)}
                      className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-400 focus:border-transparent"
                    >
                      <option value="">Semua Status</option>
                      <option value="published">Terbit</option>
                      <option value="draft">Draft</option>
                    </select>
                  </div>
                </div>
              </div>

              {/* Articles List */}
              <div className="p-6">
                <div className="max-h-[800px] overflow-y-auto space-y-4">
                  {paginatedArticles.length === 0 ? (
                    <div className="text-center py-12 text-gray-500">
                      <FaEye className="mx-auto text-4xl mb-4 opacity-50" />
                      <p className="text-lg">Tidak ada artikel ditemukan</p>
                    </div>
                  ) : (
                    paginatedArticles.map((article) => (
                      <div
                        key={article.id}
                        className="group bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl border border-gray-100 transition-all duration-300 hover:scale-[1.01]"
                      >
                        <div className="flex items-start justify-between">
                          <div className="flex-1 min-w-0">
                            <div className="flex items-center gap-2 mb-2">
                              {/* Status Badge */}
                              <span
                                className={`px-3 py-1 rounded-full text-xs font-semibold ${
                                  article.status === "published"
                                    ? "bg-green-100 text-green-800"
                                    : "bg-yellow-100 text-yellow-800"
                                }`}
                              >
                                {article.status === "published"
                                  ? "Terbit"
                                  : "Draft"}
                              </span>

                              {/* Category Badge */}
                              {article.category && (
                                <span className="px-3 py-1 rounded-full text-xs font-semibold bg-blue-100 text-blue-800">
                                  {article.category}
                                </span>
                              )}

                              {/* Featured Badge */}
                              {article.is_featured && (
                                <span className="px-3 py-1 rounded-full text-xs font-semibold bg-purple-100 text-purple-800">
                                  Utama
                                </span>
                              )}
                            </div>

                            <h4 className="font-bold text-gray-800 text-lg mb-2 group-hover:text-blue-600 transition-colors leading-tight">
                              {article.title}
                            </h4>

                            <p className="text-sm text-gray-600 mb-3 line-clamp-2">
                              {article.excerpt ||
                                article.content.substring(0, 150) + "..."}
                            </p>

                            <div className="flex items-center text-xs text-gray-500 space-x-4">
                              <div className="flex items-center">
                                <FaCalendar className="mr-1" />
                                <span>{formatDate(article.created_at)}</span>
                              </div>
                              {article.author && (
                                <div className="flex items-center">
                                  <FaUser className="mr-1" />
                                  <span>{article.author}</span>
                                </div>
                              )}
                              {article.view_count !== undefined && (
                                <div className="flex items-center">
                                  <FaEye className="mr-1" />
                                  <span>{article.view_count} views</span>
                                </div>
                              )}
                            </div>
                          </div>

                          {/* Article Image Thumbnail */}
                          {article.image_url && (
                            <div className="ml-4 flex-shrink-0">
                              <img
                                src={article.image_url}
                                alt={article.title}
                                className="w-20 h-20 object-cover rounded-xl shadow-md"
                              />
                            </div>
                          )}
                        </div>

                        {/* Action Buttons */}
                        <div className="flex justify-end space-x-3 mt-4 pt-4 border-t border-gray-100">
                          <button
                            onClick={() => handleEdit(article)}
                            className="flex items-center text-yellow-600 hover:text-yellow-700 transition-colors p-2 hover:bg-yellow-50 rounded-lg font-medium"
                            title="Edit Artikel"
                          >
                            <FaPen className="mr-1" />
                            Edit
                          </button>
                          <button
                            onClick={() => handleDelete(article.id)}
                            className="flex items-center text-red-600 hover:text-red-700 transition-colors p-2 hover:bg-red-50 rounded-lg font-medium"
                            title="Hapus Artikel"
                          >
                            <FaTrash className="mr-1" />
                            Hapus
                          </button>
                        </div>
                      </div>
                    ))
                  )}
                </div>

                {/* Pagination */}
                {totalPages > 1 && (
                  <div className="flex justify-center items-center mt-6 space-x-2">
                    <button
                      onClick={() =>
                        setCurrentPage((prev) => Math.max(prev - 1, 1))
                      }
                      disabled={currentPage === 1}
                      className="px-4 py-2 bg-white border border-gray-300 rounded-lg hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
                    >
                      Sebelumnya
                    </button>

                    <div className="flex space-x-1">
                      {Array.from(
                        { length: Math.min(5, totalPages) },
                        (_, i) => {
                          const pageNum = i + 1;
                          return (
                            <button
                              key={pageNum}
                              onClick={() => setCurrentPage(pageNum)}
                              className={`px-4 py-2 rounded-lg transition-colors ${
                                currentPage === pageNum
                                  ? "bg-gradient-to-r from-blue-500 to-cyan-500 text-white"
                                  : "bg-white border border-gray-300 hover:bg-gray-50"
                              }`}
                            >
                              {pageNum}
                            </button>
                          );
                        }
                      )}
                    </div>

                    <button
                      onClick={() =>
                        setCurrentPage((prev) => Math.min(prev + 1, totalPages))
                      }
                      disabled={currentPage === totalPages}
                      className="px-4 py-2 bg-white border border-gray-300 rounded-lg hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
                    >
                      Berikutnya
                    </button>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
