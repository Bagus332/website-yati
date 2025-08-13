"use client";

import { useState, useEffect, FormEvent } from "react";
import { supabase } from "@/lib/supabase";
import { CldUploadButton } from 'next-cloudinary';
import { FaPen, FaTrash, FaTimes } from 'react-icons/fa';

// Definisikan tipe data untuk artikel
interface Article {
  id: number;
  created_at: string;
  title: string;
  content: string;
  image_url: string | null;
  slug: string;
}

export default function ArticleManager() {
  // State untuk form
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [imageUrl, setImageUrl] = useState<string | null>(null);
  
  // State untuk manajemen data
  const [articles, setArticles] = useState<Article[]>([]);
  const [editingArticle, setEditingArticle] = useState<Article | null>(null);
  
  // State untuk UI
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [message, setMessage] = useState({ type: '', text: '' });

  // Mengambil data artikel saat komponen pertama kali dimuat
  useEffect(() => {
    fetchArticles();
  }, []);

  // Fungsi untuk mengambil semua artikel dari Supabase
  const fetchArticles = async () => {
    const { data, error } = await supabase.from("articles").select("*").order("created_at", { ascending: false });
    if (data) {
      setArticles(data);
    } else {
      setMessage({ type: 'error', text: 'Gagal memuat artikel.' });
    }
  };

  // Fungsi untuk membuat slug URL-friendly dari judul
  const createSlug = (title: string) => {
    return title
      .toLowerCase()
      .replace(/ /g, '-')
      .replace(/[^\w-]+/g, '');
  };

  // Handler saat gambar berhasil diunggah ke Cloudinary
  const handleArticleUpload = (result: any) => {
    setImageUrl(result.info.secure_url);
    setMessage({ type: 'info', text: 'Gambar baru telah dipilih.' });
  };
  
  // Handler untuk menghapus gambar dari state (sebelum disimpan)
  const handleRemoveImage = () => {
    setImageUrl(null);
    setMessage({ type: 'info', text: 'Gambar akan dihapus saat artikel disimpan.' });
  };

  // Fungsi untuk mereset form ke kondisi awal
  const resetForm = () => {
    setTitle('');
    setContent('');
    setImageUrl(null);
    setEditingArticle(null);
    setMessage({ type: '', text: '' });
  };

  // Handler untuk submit form (bisa untuk membuat atau memperbarui)
  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    if (!title.trim() || !content.trim()) {
        setMessage({ type: 'error', text: 'Judul dan konten tidak boleh kosong.' });
        return;
    }

    setIsSubmitting(true);
    setMessage({ type: '', text: '' });
    const slug = createSlug(title);
    
    let error;
    if (editingArticle) {
      // Logic untuk UPDATE artikel yang ada
      const { error: updateError } = await supabase.from("articles").update({ title, content, image_url: imageUrl, slug }).eq("id", editingArticle.id);
      error = updateError;
    } else {
      // Logic untuk CREATE artikel baru
      const { error: insertError } = await supabase.from("articles").insert([{ title, content, image_url: imageUrl, slug }]);
      error = insertError;
    }

    if (error) {
      setMessage({ type: 'error', text: 'Gagal menyimpan artikel: ' + error.message });
    } else {
      setMessage({ type: 'success', text: `Artikel berhasil ${editingArticle ? 'diperbarui' : 'diterbitkan'}!` });
      resetForm();
      fetchArticles(); // Muat ulang daftar artikel
    }
    setIsSubmitting(false);
  };

  // Handler untuk menghapus artikel dari database
  const handleDelete = async (id: number) => {
    if (window.confirm("Apakah Anda yakin ingin menghapus artikel ini?")) {
      await supabase.from("articles").delete().eq("id", id);
      fetchArticles();
      setMessage({ type: 'success', text: 'Artikel berhasil dihapus.' });
    }
  };

  // Handler untuk mengisi form dengan data artikel yang akan diedit
  const handleEdit = (article: Article) => {
    setEditingArticle(article);
    setTitle(article.title);
    setContent(article.content);
    setImageUrl(article.image_url);
    setMessage({ type: '', text: '' });
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
      {/* Form Section */}
      <div>
        <div className="bg-white/70 backdrop-blur-lg p-8 rounded-[2.5rem] shadow-2xl border-2 border-blue-100/60">
          <div className="text-center mb-8">
            <h3 className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">
              {editingArticle ? 'Edit Artikel' : 'Artikel Baru'}
            </h3>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-cyan-500 mx-auto rounded-full mt-4" />
          </div>

          {message.text && (
            <div className={`mb-6 p-4 rounded-xl ${
              message.type === 'error' 
                ? 'bg-red-50 text-red-600' 
                : message.type === 'success'
                ? 'bg-green-50 text-green-600'
                : 'bg-blue-50 text-blue-600'
            } font-semibold text-center`}>
              {message.text}
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-6">
            <input 
              type="text" 
              placeholder="Judul Artikel" 
              value={title} 
              onChange={(e) => setTitle(e.target.value)} 
              className="w-full p-4 bg-white/80 border border-blue-100 rounded-xl focus:ring-2 focus:ring-blue-400 transition-all" 
              required 
            />
            
            <textarea 
              placeholder="Konten Artikel" 
              value={content} 
              onChange={(e) => setContent(e.target.value)} 
              className="w-full p-4 bg-white/80 border border-blue-100 rounded-xl focus:ring-2 focus:ring-blue-400 transition-all" 
              rows={8} 
              required 
            />
            
            <div className="space-y-3">
              <label className="font-semibold text-gray-700 block">Gambar Artikel</label>
              <div className="flex items-center gap-4">
                <CldUploadButton 
                  uploadPreset="ponpes_yati" 
                  onSuccess={handleArticleUpload}
                  className="bg-gradient-to-r from-blue-500 to-cyan-500 text-white py-3 px-6 rounded-xl hover:opacity-90 transition-all duration-300 font-semibold"
                >
                  {imageUrl ? 'Ganti Gambar' : 'Pilih Gambar'}
                </CldUploadButton>

                {imageUrl && (
                  <div className="relative">
                    <img 
                      src={imageUrl} 
                      alt="Preview" 
                      className="w-24 h-24 object-cover rounded-xl shadow-lg" 
                    />
                    <button 
                      type="button" 
                      onClick={handleRemoveImage} 
                      className="absolute -top-2 -right-2 bg-red-500 text-white rounded-full p-2 shadow-lg hover:bg-red-600 transition-all duration-300"
                    >
                      <FaTimes size={12} />
                    </button>
                  </div>
                )}
              </div>
            </div>

            <div className="space-y-3">
              <button 
                type="submit" 
                disabled={isSubmitting} 
                className="w-full bg-gradient-to-r from-blue-500 to-cyan-500 text-white p-4 rounded-xl disabled:opacity-50 font-bold hover:opacity-90 transition-all duration-300 transform hover:scale-[1.02]"
              >
                {isSubmitting ? 'Menyimpan...' : (editingArticle ? 'Perbarui Artikel' : 'Terbitkan Artikel')}
              </button>

              {editingArticle && (
                <button 
                  type="button" 
                  onClick={resetForm} 
                  className="w-full bg-gradient-to-r from-gray-500 to-gray-600 text-white p-4 rounded-xl hover:opacity-90 transition-all duration-300 transform hover:scale-[1.02]"
                >
                  Batal
                </button>
              )}
            </div>
          </form>
        </div>
      </div>

      {/* Article List Section */}
      <div>
        <div className="bg-white/70 backdrop-blur-lg p-8 rounded-[2.5rem] shadow-2xl border-2 border-cyan-100/60">
          <div className="text-center mb-8">
            <h3 className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">
              Daftar Artikel
            </h3>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-cyan-500 mx-auto rounded-full mt-4" />
          </div>

          <div className="max-h-[600px] overflow-y-auto pr-4 space-y-4">
            {articles.map(article => (
              <div 
                key={article.id} 
                className="group bg-white p-6 rounded-xl shadow-lg hover:shadow-xl border border-blue-100/60 transition-all duration-300 hover:scale-[1.02]"
              >
                <div className="flex justify-between items-center">
                  <span className="flex-1 font-semibold text-gray-800 truncate pr-4">
                    {article.title}
                  </span>
                  <div className="flex space-x-4">
                    <button 
                      onClick={() => handleEdit(article)} 
                      className="text-yellow-500 hover:text-yellow-600 transition-colors p-2 hover:bg-yellow-50 rounded-full"
                      title="Edit"
                    >
                      <FaPen />
                    </button>
                    <button 
                      onClick={() => handleDelete(article.id)} 
                      className="text-red-500 hover:text-red-600 transition-colors p-2 hover:bg-red-50 rounded-full"
                      title="Hapus"
                    >
                      <FaTrash />
                    </button>
                  </div>
                </div>
                <p className="text-sm text-gray-500 mt-2">
                  {new Date(article.created_at).toLocaleDateString('id-ID', {
                    day: 'numeric',
                    month: 'long',
                    year: 'numeric'
                  })}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}