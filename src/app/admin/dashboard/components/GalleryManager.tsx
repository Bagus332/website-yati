"use client";

import { useState, useEffect } from "react";
import { supabase } from "@/lib/supabase";
import { CldUploadButton } from 'next-cloudinary';
import { FaPlus, FaTrash } from 'react-icons/fa';

// Definisikan tipe data untuk gambar galeri
interface GalleryImage {
  id: number;
  image_url: string;
}

export default function GalleryManager() {
  // State untuk menyimpan daftar gambar dan pesan notifikasi
  const [images, setImages] = useState<GalleryImage[]>([]);
  const [message, setMessage] = useState({ type: '', text: '' });

  // Mengambil data gambar saat komponen pertama kali dimuat
  useEffect(() => {
    fetchImages();
  }, []);

  // Fungsi untuk mengambil semua data gambar dari tabel 'gallery'
  const fetchImages = async () => {
    const { data, error } = await supabase.from('gallery').select('*').order('created_at', { ascending: false });
    if (data) {
      setImages(data);
    } else if (error) {
      setMessage({ type: 'error', text: 'Gagal memuat gambar galeri.' });
    }
  };

  // Handler saat gambar berhasil diunggah ke Cloudinary
  const handleUpload = async (result: any) => {
    // Simpan URL gambar ke tabel 'gallery' di Supabase
    const { error } = await supabase.from('gallery').insert([{ 
      image_url: result.info.secure_url, 
      alt_text: 'Foto Galeri' 
    }]);

    if (error) {
      setMessage({ type: 'error', text: 'Gagal menyimpan foto: ' + error.message });
    } else {
      setMessage({ type: 'success', text: 'Foto berhasil ditambahkan ke galeri!' });
      fetchImages(); // Muat ulang daftar gambar
    }
  };

  // Handler untuk menghapus gambar dari galeri
  const handleDelete = async (id: number) => {
    if (window.confirm("Apakah Anda yakin ingin menghapus foto ini dari galeri?")) {
      const { error } = await supabase.from('gallery').delete().eq('id', id);
      if (error) {
        setMessage({ type: 'error', text: 'Gagal menghapus foto: ' + error.message });
      } else {
        setMessage({ type: 'success', text: 'Foto berhasil dihapus.' });
        fetchImages(); // Muat ulang daftar gambar
      }
    }
  };

  return (
    <div className="bg-white/70 backdrop-blur-lg p-8 rounded-[2.5rem] shadow-2xl border-2 border-blue-100/60">
      <div className="text-center mb-8">
        <h3 className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">
          Kelola Galeri
        </h3>
        <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-cyan-500 mx-auto rounded-full mt-4" />
      </div>

      {message.text && (
        <div className={`mb-6 p-4 rounded-xl ${
          message.type === 'error' 
            ? 'bg-red-50 text-red-600' 
            : 'bg-green-50 text-green-600'
        } font-semibold text-center`}>
          {message.text}
        </div>
      )}

      <CldUploadButton 
        uploadPreset="ponpes_yati"
        onSuccess={handleUpload}
        className="w-full"
      >
        <div className="bg-gradient-to-r from-blue-500 to-cyan-500 text-white py-4 px-6 rounded-xl hover:opacity-90 transition-all duration-300 font-semibold flex items-center justify-center space-x-2">
          <FaPlus />
          <span>Tambah Foto Baru</span>
        </div>
      </CldUploadButton>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-8">
        {images.length > 0 ? images.map(img => (
          <div key={img.id} className="group relative transform hover:scale-105 transition-all duration-300">
            <div className="relative h-48 rounded-xl overflow-hidden shadow-lg">
              <img 
                src={img.image_url} 
                alt="Foto Galeri" 
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </div>
            <button 
              onClick={() => handleDelete(img.id)} 
              className="absolute bottom-4 right-4 bg-red-500 text-white rounded-full p-3 shadow-lg opacity-0 group-hover:opacity-100 transition-all duration-300 hover:bg-red-600 transform hover:scale-110"
              title="Hapus Foto"
            >
              <FaTrash size={14} />
            </button>
          </div>
        )) : (
          <div className="col-span-full text-center py-12 text-gray-500">
            Belum ada foto di galeri.
          </div>
        )}
      </div>
    </div>
  );
}