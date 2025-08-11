"use client";

import { useState, useEffect, FormEvent } from "react";
import { supabase } from "@/lib/supabase";
import { CldUploadButton } from 'next-cloudinary';
import { FaPen, FaTrash, FaTimes } from 'react-icons/fa';

// Definisikan tipe data
interface Article {
  id: number;
  created_at: string;
  title: string;
  content: string;
  image_url: string | null;
  slug: string;
}

export default function ArticleManager() {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [imageUrl, setImageUrl] = useState<string | null>(null);
  const [articles, setArticles] = useState<Article[]>([]);
  const [editingArticle, setEditingArticle] = useState<Article | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [message, setMessage] = useState({ type: '', text: '' });

  useEffect(() => {
    fetchArticles();
  }, []);

  const fetchArticles = async () => {
    const { data } = await supabase.from("articles").select("*").order("created_at", { ascending: false });
    if (data) setArticles(data);
  };

  const createSlug = (title: string) => title.toLowerCase().replace(/ /g, '-').replace(/[^\w-]+/g, '');

  const handleArticleUpload = (result: any) => {
    setImageUrl(result.info.secure_url);
    setMessage({ type: 'info', text: 'Gambar baru telah dipilih.' });
  };
  
  // ** FUNGSI BARU UNTUK MENGHAPUS GAMBAR **
  const handleRemoveImage = () => {
    setImageUrl(null);
    setMessage({ type: 'info', text: 'Gambar akan dihapus saat artikel disimpan.' });
  };

  const resetForm = () => {
    setTitle('');
    setContent('');
    setImageUrl(null);
    setEditingArticle(null);
    setMessage({ type: '', text: '' });
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setMessage({ type: '', text: '' });
    const slug = createSlug(title);
    
    let error;
    if (editingArticle) {
      const { error: updateError } = await supabase.from("articles").update({ title, content, image_url: imageUrl, slug }).eq("id", editingArticle.id);
      error = updateError;
    } else {
      const { error: insertError } = await supabase.from("articles").insert([{ title, content, image_url: imageUrl, slug }]);
      error = insertError;
    }

    if (error) {
      setMessage({ type: 'error', text: 'Gagal menyimpan artikel: ' + error.message });
    } else {
      setMessage({ type: 'success', text: `Artikel berhasil ${editingArticle ? 'diperbarui' : 'diterbitkan'}!` });
      resetForm();
      fetchArticles();
    }
    setIsSubmitting(false);
  };

  const handleDelete = async (id: number) => {
    if (window.confirm("Yakin ingin menghapus artikel ini?")) {
      await supabase.from("articles").delete().eq("id", id);
      fetchArticles();
      setMessage({ type: 'success', text: 'Artikel berhasil dihapus.' });
    }
  };

  const handleEdit = (article: Article) => {
    setEditingArticle(article);
    setTitle(article.title);
    setContent(article.content);
    setImageUrl(article.image_url);
    setMessage({ type: '', text: '' });
  };

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
      <div>
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h3 className="text-2xl font-bold mb-4">{editingArticle ? 'Edit Artikel' : 'Artikel Baru'}</h3>
          {message.text && <p className={`mb-4 text-sm ${message.type === 'error' ? 'text-red-600' : (message.type === 'success' ? 'text-green-600' : 'text-blue-600')}`}>{message.text}</p>}
          <form onSubmit={handleSubmit} className="space-y-4">
            <input type="text" placeholder="Judul Artikel" value={title} onChange={(e) => setTitle(e.target.value)} className="w-full p-2 border rounded" required />
            <textarea placeholder="Konten Artikel" value={content} onChange={(e) => setContent(e.target.value)} className="w-full p-2 border rounded" rows={8} required />
            
            {/* ** BAGIAN GAMBAR YANG DIPERBARUI ** */}
            <div className="space-y-2">
                <label className="font-semibold text-gray-700">Gambar Artikel</label>
                <div className="flex items-center gap-4">
                    <CldUploadButton uploadPreset="ponpes_yati" onSuccess={handleArticleUpload}>
                        <span className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 cursor-pointer text-sm">
                            {imageUrl ? 'Ganti Gambar' : 'Pilih Gambar'}
                        </span>
                    </CldUploadButton>
                    {imageUrl && (
                        <div className="relative">
                            <img src={imageUrl} alt="Preview" className="w-20 h-20 object-cover rounded shadow" />
                            <button 
                                type="button" 
                                onClick={handleRemoveImage}
                                className="absolute -top-2 -right-2 bg-red-600 text-white rounded-full p-1 leading-none hover:bg-red-700"
                                title="Hapus gambar"
                            >
                                <FaTimes size={10} />
                            </button>
                        </div>
                    )}
                </div>
            </div>

            <button type="submit" disabled={isSubmitting} className="w-full bg-green-600 text-white p-2 rounded disabled:bg-green-300 hover:bg-green-700 transition-colors">{isSubmitting ? 'Menyimpan...' : (editingArticle ? 'Perbarui Artikel' : 'Terbitkan Artikel')}</button>
            {editingArticle && <button type="button" onClick={resetForm} className="w-full bg-gray-500 text-white p-2 rounded mt-2 hover:bg-gray-600 transition-colors">Batal</button>}
          </form>
        </div>
      </div>
      <div>
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h3 className="text-2xl font-bold mb-4">Daftar Artikel</h3>
          <div className="max-h-[600px] overflow-y-auto">
            {articles.map(article => (
              <div key={article.id} className="flex justify-between items-center p-2 border-b hover:bg-gray-50">
                <span className="flex-1 truncate pr-4">{article.title}</span>
                <div className="flex space-x-3">
                  <button onClick={() => handleEdit(article)} title="Edit"><FaPen className="text-yellow-500 hover:text-yellow-600" /></button>
                  <button onClick={() => handleDelete(article.id)} title="Hapus"><FaTrash className="text-red-500 hover:text-red-600" /></button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}