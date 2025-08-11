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
      {/* Kolom Kiri: Form Input */}
      <div>
        <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-200">
          <h3 className="text-2xl font-bold mb-4 text-[#071952]">{editingArticle ? 'Edit Artikel' : 'Artikel Baru'}</h3>
          {message.text && <p className={`mb-4 text-sm font-semibold ${message.type === 'error' ? 'text-red-600' : (message.type === 'success' ? 'text-green-600' : 'text-blue-600')}`}>{message.text}</p>}
          <form onSubmit={handleSubmit} className="space-y-4">
            <input type="text" placeholder="Judul Artikel" value={title} onChange={(e) => setTitle(e.target.value)} className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#3572EF] transition" required />
            <textarea placeholder="Konten Artikel" value={content} onChange={(e) => setContent(e.target.value)} className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#3572EF] transition" rows={8} required />
            
            <div className="space-y-2">
                <label className="font-semibold text-gray-700">Gambar Artikel</label>
                <div className="flex items-center gap-4">
                    <CldUploadButton uploadPreset="ponpes_yati" onSuccess={handleArticleUpload}>
                        <span className="bg-[#0B666A] text-white py-2 px-4 rounded-lg hover:bg-opacity-90 transition-colors cursor-pointer text-sm font-semibold">
                            {imageUrl ? 'Ganti Gambar' : 'Pilih Gambar'}
                        </span>
                    </CldUploadButton>
                    {imageUrl && (
                        <div className="relative">
                            <img src={imageUrl} alt="Preview" className="w-24 h-24 object-cover rounded-lg shadow" />
                            <button type="button" onClick={handleRemoveImage} className="absolute -top-2 -right-2 bg-red-600 text-white rounded-full p-1.5 leading-none hover:bg-red-700 transition-transform hover:scale-110" title="Hapus gambar">
                                <FaTimes size={12} />
                            </button>
                        </div>
                    )}
                </div>
            </div>

            <button type="submit" disabled={isSubmitting} className="w-full bg-[#3572EF] text-white p-3 rounded-lg disabled:bg-opacity-50 font-bold hover:bg-opacity-90 transition-colors">{isSubmitting ? 'Menyimpan...' : (editingArticle ? 'Perbarui Artikel' : 'Terbitkan Artikel')}</button>
            {editingArticle && <button type="button" onClick={resetForm} className="w-full bg-gray-600 text-white p-3 rounded-lg mt-2 hover:bg-gray-700 transition-colors">Batal</button>}
          </form>
        </div>
      </div>
      
      {/* Kolom Kanan: Daftar Artikel */}
      <div>
        <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-200">
          <h3 className="text-2xl font-bold mb-4 text-[#071952]">Daftar Artikel</h3>
          <div className="max-h-[600px] overflow-y-auto">
            {articles.map(article => (
              <div key={article.id} className="flex justify-between items-center p-3 border-b border-gray-200 hover:bg-[#E0F7FA]/50">
                <span className="flex-1 truncate pr-4 text-gray-700">{article.title}</span>
                <div className="flex space-x-4">
                  <button onClick={() => handleEdit(article)} title="Edit"><FaPen className="text-yellow-500 hover:text-yellow-600 transition-colors" /></button>
                  <button onClick={() => handleDelete(article.id)} title="Hapus"><FaTrash className="text-red-500 hover:text-red-600 transition-colors" /></button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}