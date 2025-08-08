"use client";

import { useState, useEffect, FormEvent } from "react";
import { supabase } from "@/lib/supabase";
import { CldUploadButton } from 'next-cloudinary';

// Definisikan tipe data untuk artikel agar lebih aman
interface Article {
  id: number;
  created_at: string;
  title: string;
  content: string;
  image_url: string | null;
  slug: string;
}

export default function AdminDashboard() {
  // State untuk form
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [imageUrl, setImageUrl] = useState<string | null>(null);

  // State untuk manajemen data
  const [articles, setArticles] = useState<Article[]>([]);
  const [editingArticle, setEditingArticle] = useState<Article | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [message, setMessage] = useState({ type: '', text: '' });

  // Mengambil data artikel saat komponen dimuat
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
    } else if (error) {
      setMessage({ type: 'error', text: 'Gagal memuat artikel: ' + error.message });
    }
  };

  // Fungsi untuk membuat slug URL-friendly dari judul
  const createSlug = (title: string) => {
    return title
      .toLowerCase()
      .replace(/ /g, '-')
      .replace(/[^\w-]+/g, '');
  };

  // Handler untuk unggah gambar ke Cloudinary
  const handleUpload = (result: any) => {
    setImageUrl(result.info.secure_url);
    setMessage({ type: 'success', text: 'Gambar berhasil diunggah' });
  };
  
  // Fungsi untuk mereset form
  const resetForm = () => {
    setTitle('');
    setContent('');
    setImageUrl(null);
    setEditingArticle(null);
  };

  // Handler untuk submit form (Create & Update)
  const handleFormSubmit = async (e: FormEvent) => {
    e.preventDefault();

    if (!title.trim() || !content.trim()) {
      setMessage({ type: 'error', text: 'Judul dan konten tidak boleh kosong' });
      return;
    }

    setIsSubmitting(true);
    const slug = createSlug(title);

    let error;

    if (editingArticle) {
      // Logic untuk Update
      const { error: updateError } = await supabase
        .from("articles")
        .update({ title, content, image_url: imageUrl, slug })
        .eq("id", editingArticle.id);
      error = updateError;
    } else {
      // Logic untuk Create
      const { error: insertError } = await supabase
        .from("articles")
        .insert([{ title, content, image_url: imageUrl, slug }]);
      error = insertError;
    }

    if (error) {
      setMessage({ type: 'error', text: 'Gagal menyimpan artikel: ' + error.message });
    } else {
      setMessage({ type: 'success', text: `Artikel berhasil ${editingArticle ? 'diperbarui' : 'dibuat'}!` });
      resetForm();
      fetchArticles(); // Muat ulang daftar artikel
    }

    setIsSubmitting(false);
  };

  // Handler untuk menghapus artikel
  const handleDelete = async (id: number) => {
    if (window.confirm("Apakah Anda yakin ingin menghapus artikel ini?")) {
      const { error } = await supabase.from("articles").delete().eq("id", id);
      if (error) {
        setMessage({ type: 'error', text: 'Gagal menghapus artikel: ' + error.message });
      } else {
        setMessage({ type: 'success', text: 'Artikel berhasil dihapus.' });
        fetchArticles();
      }
    }
  };

  // Handler untuk memulai mode edit
  const handleEdit = (article: Article) => {
    setEditingArticle(article);
    setTitle(article.title);
    setContent(article.content);
    setImageUrl(article.image_url);
    window.scrollTo(0, 0); // Gulir ke atas untuk melihat form edit
  };

  return (
    <div className="container mx-auto p-4 md:p-8">
      <h1 className="text-3xl font-bold mb-6 text-center">Dasbor Admin</h1>

      {/* Notifikasi */}
      {message.text && (
        <div className={`p-4 mb-6 rounded text-center ${
          message.type === 'error' 
            ? 'bg-red-100 text-red-700' 
            : 'bg-green-100 text-green-700'
        }`}>
          {message.text}
        </div>
      )}

      {/* Form untuk Create dan Update */}
      <div className="bg-white p-6 rounded-lg shadow-md mb-12">
        <h2 className="text-2xl font-bold mb-4">
          {editingArticle ? 'Edit Artikel' : 'Buat Artikel Baru'}
        </h2>
        <form onSubmit={handleFormSubmit} className="space-y-4">
          <input
            type="text"
            placeholder="Judul Artikel"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="w-full p-2 border rounded"
            required
          />
          <textarea
            placeholder="Konten Artikel"
            value={content}
            onChange={(e) => setContent(e.target.value)}
            className="w-full p-2 border rounded"
            rows={10}
            required
          />
          <div className="flex items-center space-x-4">
            <CldUploadButton
              uploadPreset="ponpes_yati" // Ganti dengan nama upload preset Anda
              onSuccess={handleUpload}
            >
              <span className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 transition-colors cursor-pointer">
                Unggah Gambar
              </span>
            </CldUploadButton>
            {imageUrl && <img src={imageUrl} alt="Preview" className="w-32 h-32 object-cover rounded" />}
          </div>
          <div className="flex space-x-4">
            <button 
              type="submit" 
              disabled={isSubmitting}
              className={`py-2 px-6 bg-green-500 text-white rounded ${
                isSubmitting 
                  ? 'opacity-50 cursor-not-allowed' 
                  : 'hover:bg-green-600 transition-colors'
              }`}
            >
              {isSubmitting ? 'Menyimpan...' : (editingArticle ? 'Perbarui Artikel' : 'Buat Artikel')}
            </button>
            {editingArticle && (
              <button 
                type="button" 
                onClick={resetForm}
                className="py-2 px-6 bg-gray-500 text-white rounded hover:bg-gray-600 transition-colors"
              >
                Batal
              </button>
            )}
          </div>
        </form>
      </div>

      {/* Daftar Artikel */}
      <div>
        <h2 className="text-2xl font-bold mb-4">Daftar Artikel</h2>
        <div className="space-y-4">
          {articles.length > 0 ? articles.map((article) => (
            <div key={article.id} className="bg-white p-4 rounded-lg shadow-md flex flex-col md:flex-row justify-between items-start md:items-center">
              <div className="flex-1 mb-4 md:mb-0">
                <h3 className="text-xl font-bold">{article.title}</h3>
                <p className="text-sm text-gray-500">
                  Dibuat pada: {new Date(article.created_at).toLocaleDateString()}
                </p>
              </div>
              <div className="flex space-x-2">
                <button
                  onClick={() => handleEdit(article)}
                  className="bg-yellow-500 text-white py-1 px-3 rounded hover:bg-yellow-600 transition-colors"
                >
                  Edit
                </button>
                <button
                  onClick={() => handleDelete(article.id)}
                  className="bg-red-500 text-white py-1 px-3 rounded hover:bg-red-600 transition-colors"
                >
                  Hapus
                </button>
              </div>
            </div>
          )) : <p>Belum ada artikel.</p>}
        </div>
      </div>
    </div>
  );
}