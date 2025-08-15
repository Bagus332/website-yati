"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { useEffect, useState } from "react";
import { supabase } from "@/lib/supabase";

interface GalleryImage {
  id: number;
  image_url: string;
  alt_text: string;
}

const GallerySkeleton = () => (
  <div className="w-full h-64 bg-gray-300 rounded-lg animate-pulse"></div>
);

export default function GaleriPage() {
  const [images, setImages] = useState<GalleryImage[]>([]);
  const [loading, setLoading] = useState(true);
  const [selectedImage, setSelectedImage] = useState<GalleryImage | null>(null);

  useEffect(() => {
    const fetchImages = async () => {
      setLoading(true);
      const { data } = await supabase.from('gallery').select('*').order('created_at', { ascending: false });
      if (data) setImages(data);
      setLoading(false);
    };
    fetchImages();
  }, []);

  const handleImageClick = (image: GalleryImage) => {
    setSelectedImage(image);
  };

  const closeModal = () => {
    setSelectedImage(null);
  };

  return (
    <>
    <main className="min-h-screen bg-gray-50">
      <Navbar />
      <div className="container mx-auto p-4 py-12">
        <div className="text-center mb-12">
          <span className="inline-block bg-gradient-to-r from-blue-100 to-cyan-100 text-blue-800 px-6 py-3 rounded-full text-sm font-bold uppercase tracking-wider mb-6">
            Galeri Kegiatan
          </span>
          <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent mb-6">
            Momen Berkesan
          </h1>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-cyan-500 mx-auto rounded-full" />
          <p className="text-gray-600 mt-6 text-lg">
            Dokumentasi kegiatan di Pondok Pesantren YATI Kamang Mudik
          </p>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {loading ? (
            Array.from({ length: 8 }).map((_, index) => <GallerySkeleton key={index} />)
          ) : (
            images.map((image) => (
              <div key={image.id} className="overflow-hidden rounded-lg shadow-md transform hover:scale-105 transition-transform duration-300">
                <img 
                  src={image.image_url} 
                  alt={image.alt_text} 
                  className="w-full h-full object-cover cursor-pointer" 
                  onClick={() => handleImageClick(image)} 
                />
              </div>
            ))
          )}
        </div>
      </div>

      {selectedImage && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-75 z-50" onClick={closeModal}>
          <button 
            onClick={closeModal} 
            className="absolute top-4 right-4 text-white text-3xl hover:text-gray-300 transition-colors"
            aria-label="Close"
          >
            &times;
          </button>
          <img 
            src={selectedImage.image_url} 
            alt={selectedImage.alt_text} 
            className="max-w-full max-h-full object-contain" 
          />
        </div>
      )}
    </main>
    <Footer />
    </>
  );
}