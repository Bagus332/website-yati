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
    <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-200">
      <h3 className="text-2xl font-bold mb-4 text-[#071952]">Kelola Galeri</h3>
      
      {/* Pesan Notifikasi */}
      {message.text && (
        <p className={`mb-4 text-sm font-semibold ${message.type === 'error' ? 'text-red-600' : 'text-green-600'}`}>
          {message.text}
        </p>
      )}

      {/* Tombol Upload */}
      <CldUploadButton 
        uploadPreset="ponpes_yati" // Pastikan nama preset ini benar
        onSuccess={handleUpload}
      >
        <div className="w-full text-center bg-[#3572EF] text-white py-3 px-4 rounded-lg hover:bg-opacity-90 cursor-pointer transition-colors font-semibold">
          <FaPlus className="inline mr-2"/>Tambah Foto Baru
        </div>
      </CldUploadButton>

      {/* Grid Tampilan Gambar */}
      <div className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 mt-6 max-h-[500px] overflow-y-auto p-4 bg-[#E0F7FA]/50 rounded-lg border border-[#97FEED]">
        {images.length > 0 ? images.map(img => (
          <div key={img.id} className="relative group">
            <img src={img.image_url} alt="Foto Galeri" className="w-full h-28 object-cover rounded-lg shadow-md"/>
            <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center rounded-lg">
                <button 
                    onClick={() => handleDelete(img.id)} 
                    className="bg-red-600 text-white rounded-full p-2 transform scale-75 group-hover:scale-100 transition-transform duration-300"
                    title="Hapus Foto"
                >
                    <FaTrash size={12}/>
                </button>
            </div>
          </div>
        )) : <p className="col-span-full text-center text-gray-500 py-8">Belum ada foto di galeri.</p>}
      </div>
    </div>
  );
}