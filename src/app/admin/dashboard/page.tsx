"use client";

import { useState } from "react";
import { supabase } from "@/lib/supabase";
import { CldUploadButton } from 'next-cloudinary';

export default function AdminDashboard() {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [imageUrl, setImageUrl] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isUploading, setIsUploading] = useState(false);
  const [message, setMessage] = useState({ type: '', text: '' });

  const handleUpload = async (result: any) => {
    try {
      setIsUploading(true);
      setImageUrl(result.info.secure_url);
      setMessage({ type: 'success', text: 'Gambar berhasil diunggah' });
    } catch (error: any) {
      setMessage({ 
        type: 'error', 
        text: 'Gagal mengunggah gambar: ' + error.message 
      });
    } finally {
      setIsUploading(false);
    }
  };

  const validateForm = () => {
    if (!title.trim()) {
      setMessage({ type: 'error', text: 'Judul artikel tidak boleh kosong' });
      return false;
    }
    if (!content.trim()) {
      setMessage({ type: 'error', text: 'Konten artikel tidak boleh kosong' });
      return false;
    }
    return true;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setMessage({ type: '', text: '' });

    if (!validateForm()) return;

    try {
      setIsSubmitting(true);
      
      // Log the data being sent
      console.log('Submitting article:', { title, content, imageUrl });
      
      const { data, error } = await supabase
        .from("articles")
        .insert([{ 
          title, 
          content, 
          image_url: imageUrl || null 
        }])
        .select(); // Add this to get response data

      if (error) {
        console.error('Supabase error:', error);
        throw error;
      }

      console.log('Article created:', data);
      setMessage({ type: 'success', text: 'Artikel berhasil dibuat!' });
      setTitle("");
      setContent("");
      setImageUrl("");
    } catch (error: any) {
      console.error('Submission error:', error);
      setMessage({ 
        type: 'error', 
        text: error.message || 'Terjadi kesalahan saat membuat artikel' 
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Dasbor Admin</h1>
      {message.text && (
        <div className={`p-4 mb-4 rounded ${
          message.type === 'error' 
            ? 'bg-red-100 text-red-700 border border-red-200' 
            : 'bg-green-100 text-green-700 border border-green-200'
        }`}>
          {message.text}
        </div>
      )}
      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          type="text"
          placeholder="Judul Artikel"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="w-full p-2 border rounded"
        />
        <textarea
          placeholder="Konten Artikel"
          value={content}
          onChange={(e) => setContent(e.target.value)}
          className="w-full p-2 border rounded"
          rows={10}
        />
        <CldUploadButton
          uploadPreset="ponpes_yati"
          onSuccess={handleUpload}
          onError={(error: any) => setMessage({ 
            type: 'error', 
            text: 'Gagal mengunggah gambar: ' + error.message 
          })}
        >
          <span className="bg-blue-500 text-white p-2 rounded hover:bg-blue-600 transition-colors">
            Unggah Gambar
          </span>
        </CldUploadButton>

        {imageUrl && <img src={imageUrl} alt="Preview" className="w-1/4 mt-4" />}

        <button 
          type="submit" 
          disabled={isSubmitting}
          className={`w-full bg-green-500 text-white p-2 rounded ${
            isSubmitting 
              ? 'opacity-50 cursor-not-allowed' 
              : 'hover:bg-green-600 transition-colors'
          }`}
        >
          {isSubmitting ? 'Membuat Artikel...' : 'Buat Artikel'}
        </button>
      </form>
    </div>
  );
}