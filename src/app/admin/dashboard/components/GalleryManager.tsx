"use client";

import { useState, useEffect } from "react";
import { supabase } from "@/lib/supabase";
import { CldUploadButton } from 'next-cloudinary';
import { FaPlus, FaTrash } from 'react-icons/fa';

interface GalleryImage {
  id: number;
  image_url: string;
}

export default function GalleryManager() {
  const [images, setImages] = useState<GalleryImage[]>([]);
  const [message, setMessage] = useState({ type: '', text: '' });

  useEffect(() => {
    fetchImages();
  }, []);

  const fetchImages = async () => {
    const { data } = await supabase.from('gallery').select('*').order('created_at', { ascending: false });
    if (data) setImages(data);
  };

  const handleUpload = async (result: any) => {
    const { error } = await supabase.from('gallery').insert([{ image_url: result.info.secure_url, alt_text: 'Foto Galeri' }]);
    if (error) {
      setMessage({ type: 'error', text: 'Gagal menyimpan foto: ' + error.message });
    } else {
      setMessage({ type: 'success', text: 'Foto berhasil ditambahkan!' });
      fetchImages();
    }
  };

  const handleDelete = async (id: number) => {
    if (window.confirm("Yakin ingin menghapus foto ini?")) {
      await supabase.from('gallery').delete().eq('id', id);
      fetchImages();
      setMessage({ type: 'success', text: 'Foto berhasil dihapus.' });
    }
  };

  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <h3 className="text-2xl font-bold mb-4">Kelola Galeri</h3>
      {message.text && <p className={`mb-4 text-sm ${message.type === 'error' ? 'text-red-600' : 'text-green-600'}`}>{message.text}</p>}
      <CldUploadButton uploadPreset="ponpes_yati" onSuccess={handleUpload}>
        <div className="w-full text-center bg-blue-600 text-white py-3 px-4 rounded hover:bg-blue-700 cursor-pointer transition-colors font-semibold">
          <FaPlus className="inline mr-2"/>Tambah Foto Baru
        </div>
      </CldUploadButton>
      <div className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 mt-6 max-h-[500px] overflow-y-auto p-2 bg-gray-50 rounded">
        {images.map(img => (
          <div key={img.id} className="relative group">
            <img src={img.image_url} alt="Foto Galeri" className="w-full h-28 object-cover rounded-lg shadow"/>
            <button onClick={() => handleDelete(img.id)} className="absolute top-1 right-1 bg-red-600 text-white rounded-full p-1.5 opacity-0 group-hover:opacity-100 transition-opacity">
              <FaTrash size={10}/>
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}