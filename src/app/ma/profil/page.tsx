"use client";

import Image from "next/image";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Carousel } from "@/components/ui/carousel";
import { motion, useInView } from "framer-motion";
import { useRef, useEffect, useState } from "react"; // Tambahkan useEffect dan useState
import { supabase } from "@/lib/supabase"; // Impor supabase
import {
  FaQuran,
  FaGraduationCap,
  FaUserTie,
  FaSchool,
  FaStar,
} from "react-icons/fa";

// Definisikan tipe untuk data slide
interface SlideData {
  src: string;
}

export default function Home() {
  const contentRef = useRef(null);
  const programsRef = useRef(null);
  const isContentInView = useInView(contentRef, { once: true });
  const isProgramsInView = useInView(programsRef, { once: true });

  const [slideData, setSlideData] = useState<SlideData[]>([]);

  // useEffect untuk mengambil data gambar carousel dari Supabase
  useEffect(() => {
    const fetchCarouselImages = async () => {
      const { data, error } = await supabase
        .from("carousel_images")
        .select("image_url")
        .order("created_at", { ascending: false });

      if (data) {
        // Format data agar sesuai dengan yang dibutuhkan komponen Carousel
        const formattedData = data.map((item) => ({ src: item.image_url }));
        setSlideData(formattedData);
      } else {
        console.error("Gagal mengambil gambar carousel:", error);
      }
    };

    fetchCarouselImages();
  }, []);

  const fadeInUp = {
    initial: { opacity: 0, y: 60 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.8, ease: "easeOut" },
  };

  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-gradient-to-b from-blue-50 to-white font-sans">
        {/* Background Patterns */}
        <div className="fixed inset-0 opacity-[0.02] pointer-events-none">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_25%_25%,_theme(colors.blue.500)_0%,_transparent_50%)]" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_75%_75%,_theme(colors.cyan.500)_0%,_transparent_50%)]" />
        </div>

        {/* Hero Section */}
        <section className="relative h-screen overflow-hidden">
          {/* Layer 1: Background Carousel */}
          <div className="absolute inset-0 w-full h-full">
            {slideData.length > 0 && <Carousel slides={slideData} />}
          </div>

          {/* Layer 2: Overlay with Patterns and Gradients */}
          <div className="absolute inset-0 bg-gradient-to-b from-slate-900/85 via-slate-800/75 to-slate-700/65" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(30,64,175,0.25)_0%,transparent_50%)]" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(6,182,212,0.15)_0%,transparent_50%)]" />

          {/* Decorative Elements */}
          <div className="absolute top-20 left-10 w-32 h-32 bg-indigo-500/8 rounded-full blur-3xl" />
          <div className="absolute bottom-20 right-10 w-40 h-40 bg-teal-500/8 rounded-full blur-3xl" />
          <div className="absolute top-1/2 left-1/4 w-24 h-24 bg-white/3 rounded-full blur-2xl" />

          {/* Layer 3: Main Content with Enhanced Typography */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.5, ease: "easeOut" }}
            className="absolute inset-0 flex flex-col items-center justify-center text-white px-4 z-20"
          >
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.3, duration: 0.6 }}
              className="inline-block bg-white/15 backdrop-blur-sm border border-white/25 text-white px-6 py-3 rounded-full text-sm font-semibold uppercase tracking-wider mb-8 shadow-lg"
            >
              Madrasah Aliyah
            </motion.div>

            {/* Main Title */}
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 1 }}
              className="text-5xl md:text-7xl lg:text-8xl font-black mb-6 text-center leading-tight"
            >
              <span className="block bg-gradient-to-r from-white via-slate-100 to-white bg-clip-text text-transparent drop-shadow-2xl">
                MAS
              </span>
              <span className="block bg-gradient-to-r from-blue-200 via-sky-200 to-blue-200 bg-clip-text text-transparent drop-shadow-xl">
                YATI
              </span>
              <span className="block text-2xl md:text-3xl lg:text-4xl font-bold text-slate-200 mt-4">
                Kamang Mudik
              </span>
            </motion.h1>

            {/* Animated Divider */}
            <motion.div
              initial={{ width: 0, opacity: 0 }}
              animate={{ width: "16rem", opacity: 1 }}
              transition={{ delay: 1, duration: 0.8 }}
              className="h-1 bg-gradient-to-r from-blue-400 via-sky-400 to-blue-400 mx-auto mb-8 rounded-full shadow-lg"
            />

            {/* Subtitle */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.2, duration: 0.8 }}
              className="text-xl md:text-2xl lg:text-3xl text-slate-200 text-center max-w-4xl leading-relaxed font-medium"
            >
              Pendidikan Islam Modern dengan Nilai-nilai Pesantren
            </motion.p>

            {/* Additional Info */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.5, duration: 0.8 }}
              className="mt-8 flex flex-wrap justify-center gap-6 text-slate-200"
            >
              <div className="flex items-center space-x-2">
                <FaQuran className="text-sky-300 text-xl" />
                <span className="text-sm font-medium">Akreditasi A</span>
              </div>
              <div className="flex items-center space-x-2">
                <FaGraduationCap className="text-sky-300 text-xl" />
                <span className="text-sm font-medium">Kurikulum Nasional</span>
              </div>
              <div className="flex items-center space-x-2">
                <FaStar className="text-sky-300 text-xl" />
                <span className="text-sm font-medium">Berprestasi</span>
              </div>
            </motion.div>
          </motion.div>
        </section>

        {/* Sisa konten halaman... */}
        {/* ... (tidak ada perubahan di bawah ini) ... */}
        <section ref={contentRef} className="py-24 px-6 lg:px-14 relative">
          <motion.div
            variants={fadeInUp}
            initial="initial"
            animate={isContentInView ? "animate" : "initial"}
            className="max-w-7xl mx-auto"
          >
            <div className="text-center mb-16">
              <span className="inline-block bg-gradient-to-r from-blue-100 to-cyan-100 text-blue-800 px-6 py-3 rounded-full text-sm font-bold uppercase tracking-wider mb-6">
                Tentang MA YATI
              </span>
              <h2 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent mb-6">
                Profil Madrasah
              </h2>
              <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-cyan-500 mx-auto rounded-full" />
            </div>

            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div className="space-y-8">
                <div className="bg-white p-8 rounded-2xl shadow-xl border border-blue-100">
                  <p className="text-gray-700 leading-relaxed mb-6">
                    Madrasah Aliyah (MA) YATI merupakan lembaga pendidikan
                    tingkat menengah atas yang menjadi bagian integral dari
                    Pondok Pesantren YATI Kamang Mudik. Didirikan di bawah
                    naungan Yayasan Tarbiyah Islamiyah Buya H. Mansur, MA YATI
                    konsisten menjalankan sistem pendidikan yang
                    mengintegrasikan nilai-nilai kepesantrenan dengan kurikulum
                    nasional modern.
                  </p>
                  <p className="text-gray-700 leading-relaxed mb-6">
                    Sistem pembelajaran di MA YATI menerapkan pendekatan
                    komprehensif dengan memadukan tradisi pesantren dan
                    modernitas. Para santri tidak hanya mendalami ilmu-ilmu
                    agama melalui kajian kitab kuning dan program tahfidz
                    Al-Qur'an, tetapi juga dibekali dengan ilmu pengetahuan umum
                    sesuai Kurikulum 2013.
                  </p>
                  <div className="grid grid-cols-2 gap-6">
                    <div className="flex items-center space-x-3">
                      <FaUserTie className="text-blue-600 text-xl" />
                      <div>
                        <h4 className="font-semibold text-gray-800">
                          Kepala Madrasah
                        </h4>
                        <p className="text-blue-600">Delvianti, M.Pd</p>
                      </div>
                    </div>
                    <div className="flex items-center space-x-3">
                      <FaSchool className="text-blue-600 text-xl" />
                      <div>
                        <h4 className="font-semibold text-gray-800">Status</h4>
                        <p className="text-blue-600">Akreditasi A</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="relative">
                <div className="relative h-[500px] rounded-3xl overflow-hidden shadow-2xl">
                  <Image
                    src="/photo_2025-08-15_09-16-27.jpg"
                    alt="Kegiatan Madrasah"
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
                </div>
              </div>
            </div>
          </motion.div>
        </section>
      </main>
      <Footer />
    </>
  );
}
