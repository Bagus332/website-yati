"use client";

import Image from "next/image";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Carousel } from "@/components/ui/carousel";
import { ImageModal } from "@/components/ui/ImageModal";
import { motion, useInView } from "framer-motion";
import { useRef, useEffect, useState } from "react";
import { supabase } from "@/lib/supabase";
import {
  FaQuran,
  FaGraduationCap,
  FaUserTie,
  FaSchool,
  FaStar,
} from "react-icons/fa";

interface SlideData {
  src: string;
}

export default function Home() {
  const contentRef = useRef(null);
  const programsRef = useRef(null);
  const isContentInView = useInView(contentRef, { once: true });
  const isProgramsInView = useInView(programsRef, { once: true });

  const [slideData, setSlideData] = useState<SlideData[]>([]);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [selectedImage, setSelectedImage] = useState<{
    src: string;
    alt: string;
    index: number;
  } | null>(null);

  // Carousel functions
  const showSlide = (index: number) => {
    setCurrentSlide(index);
  };

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev === 2 ? 0 : prev + 1));
  };

  const previousSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? 2 : prev - 1));
  };

  const handleImageClick = (src: string, alt: string) => {
    // Hanya tampilkan modal jika gambar yang diklik adalah gambar yang sedang aktif
    const currentImageSrc = getCurrentImageSrc();
    if (src === currentImageSrc) {
      const imageIndex = getImageIndex(src);
      setSelectedImage({ src, alt, index: imageIndex });
    }
  };

  // Fungsi untuk mendapatkan src gambar yang sedang aktif
  const getCurrentImageSrc = () => {
    const imageSources = ["/mts cowok.jpg", "/mts cewek.jpg", "/MA (3).jpeg"];
    return imageSources[currentSlide];
  };

  // Fungsi untuk mendapatkan index gambar berdasarkan src
  const getImageIndex = (src: string) => {
    const imageSources = ["/mts cowok.jpg", "/mts cewek.jpg", "/MA (3).jpeg"];
    return imageSources.indexOf(src);
  };

  // Fungsi untuk navigasi dalam modal
  const handleModalNavigate = (direction: "prev" | "next") => {
    if (!selectedImage) return;

    const imageSources = ["/mts cowok.jpg", "/mts cewek.jpg", "/MA (3).jpeg"];

    const imageAlts = [
      "Kegiatan MTs - Gambar 1",
      "Kegiatan MTs - Gambar 2",
      "Kegiatan MTs - Gambar 3",
    ];

    let newIndex;
    if (direction === "prev") {
      newIndex =
        selectedImage.index === 0
          ? imageSources.length - 1
          : selectedImage.index - 1;
    } else {
      newIndex =
        selectedImage.index === imageSources.length - 1
          ? 0
          : selectedImage.index + 1;
    }

    setSelectedImage({
      src: imageSources[newIndex],
      alt: imageAlts[newIndex],
      index: newIndex,
    });
  };

  const closeModal = () => {
    setSelectedImage(null);
  };

  // Auto-play carousel
  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 5000);

    return () => clearInterval(interval);
  }, [currentSlide]);

  useEffect(() => {
    const fetchCarouselImages = async () => {
      const { data, error } = await supabase
        .from("carousel_images")
        .select("image_url")
        .order("created_at", { ascending: false });

      if (data) {
        const formattedData = data.map((item) => ({ src: item.image_url }));
        setSlideData(formattedData);
      } else {
        console.error("Error fetching carousel images:", error);
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
      <main className="min-h-screen bg-gradient-to-b font-sans">
        {/* Background Patterns */}
        <div className="fixed inset-0 opacity-[0.02] pointer-events-none -z-20">
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
              Madrasah Tsanawiyah
            </motion.div>

            {/* Main Title */}
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 1 }}
              className="text-5xl md:text-7xl lg:text-8xl font-black mb-6 text-center leading-tight"
            >
              <span className="block bg-gradient-to-r from-white via-slate-100 to-white bg-clip-text text-transparent drop-shadow-2xl">
                MTsS
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
                <span className="text-sm font-medium">Terakreditasi</span>
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
        <section ref={contentRef} className="py-24 px-6 lg:px-14 relative">
          <motion.div
            variants={fadeInUp}
            initial="initial"
            animate={isContentInView ? "animate" : "initial"}
            className="max-w-7xl mx-auto"
          >
            <div className="text-center mb-16">
              <span className="inline-block bg-gradient-to-r from-blue-100 to-cyan-100 text-blue-800 px-6 py-3 rounded-full text-sm font-bold uppercase tracking-wider mb-6">
                Tentang MTs YATI
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
                    Madrasah Tsanawiyah (MTs) YATI Kamang Mudik merupakan
                    lembaga pendidikan tingkat menengah pertama yang menjadi
                    bagian integral dari Pondok Pesantren YATI Kamang Mudik.
                    Bernaung di bawah Yayasan Tarbiyah Islamiyah Buya H. Mansur,
                    MTs YATI telah berperan aktif dalam mencerdaskan generasi
                    muslim sejak masa pendiriannya.
                  </p>
                  <p className="text-gray-700 leading-relaxed mb-6">
                    Dengan menganut faham Ahlussunnah wal Jama&apos;ah dalam
                    kajian Akidah dan berpegang pada Mazhab Syafi&apos;i dalam
                    kajian Fiqh, MTs YATI menerapkan sistem pendidikan yang
                    mengintegrasikan kurikulum nasional dengan nilai-nilai
                    kepesantrenan.
                  </p>
                  <div className="grid grid-cols-2 gap-6">
                    <div className="flex items-center space-x-3">
                      <FaUserTie className="text-blue-600 text-xl" />
                      <div>
                        <h4 className="font-semibold text-gray-800">
                          Kepala Madrasah
                        </h4>
                        <p className="text-blue-600">Welli Okmira, M.PdI</p>
                      </div>
                    </div>
                    <div className="flex items-center space-x-3">
                      <FaSchool className="text-blue-600 text-xl" />
                      <div>
                        <h4 className="font-semibold text-gray-800">Status</h4>
                        <p className="text-blue-600">Terakreditasi</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="relative">
                <div className="relative h-[500px] rounded-2xl overflow-hidden shadow-2xl">
                  <div className="relative w-full h-full">
                    <Image
                      src="/mts cowok.jpg"
                      alt="Kegiatan MTs - Gambar 1"
                      fill
                      className={`object-cover transition-opacity duration-500 cursor-pointer hover:scale-105 transition-transform duration-300 ${
                        currentSlide === 0 ? "opacity-100" : "opacity-0"
                      }`}
                      onClick={() =>
                        handleImageClick(
                          "/mts cowok.jpg",
                          "Kegiatan MTs - Gambar 1"
                        )
                      }
                    />
                    <Image
                      src="/mts cewek.jpg"
                      alt="Kegiatan MTs - Gambar 2"
                      fill
                      className={`object-cover transition-opacity duration-500 cursor-pointer hover:scale-105 transition-transform duration-300 ${
                        currentSlide === 1 ? "opacity-100" : "opacity-0"
                      }`}
                      onClick={() =>
                        handleImageClick(
                          "/mts cewek.jpg",
                          "Kegiatan MTs - Gambar 2"
                        )
                      }
                    />
                    <Image
                      src="/MA (3).jpeg"
                      alt="Kegiatan MTs - Gambar 3"
                      fill
                      className={`object-cover transition-opacity duration-500 cursor-pointer hover:scale-105 transition-transform duration-300 ${
                        currentSlide === 2 ? "opacity-100" : "opacity-0"
                      }`}
                      onClick={() =>
                        handleImageClick(
                          "/MA (3).jpeg",
                          "Kegiatan MTs - Gambar 3"
                        )
                      }
                    />
                  </div>

                  {/* Navigation Dots */}
                  <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2 z-10">
                    <button
                      onClick={() => showSlide(0)}
                      className={`w-3 h-3 rounded-full transition-colors duration-200 ${
                        currentSlide === 0
                          ? "bg-white"
                          : "bg-white/40 hover:bg-white/80"
                      }`}
                    />
                    <button
                      onClick={() => showSlide(1)}
                      className={`w-3 h-3 rounded-full transition-colors duration-200 ${
                        currentSlide === 1
                          ? "bg-white"
                          : "bg-white/40 hover:bg-white/80"
                      }`}
                    />
                    <button
                      onClick={() => showSlide(2)}
                      className={`w-3 h-3 rounded-full transition-colors duration-200 ${
                        currentSlide === 2
                          ? "bg-white"
                          : "bg-white/40 hover:bg-white/80"
                      }`}
                    />
                  </div>

                  {/* Navigation Arrows */}
                  <button
                    onClick={() => previousSlide()}
                    className="absolute left-4 top-1/2 transform -translate-y-1/2 w-10 h-10 bg-black/30 hover:bg-black/50 text-white rounded-full flex items-center justify-center transition-all duration-200 z-10"
                  >
                    <svg
                      className="w-5 h-5"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M15 19l-7-7 7-7"
                      />
                    </svg>
                  </button>
                  <button
                    onClick={() => nextSlide()}
                    className="absolute right-4 top-1/2 transform -translate-y-1/2 w-10 h-10 bg-black/30 hover:bg-black/50 text-white rounded-full flex items-center justify-center transition-all duration-200 z-10"
                  >
                    <svg
                      className="w-5 h-5"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 5l7 7-7 7"
                      />
                    </svg>
                  </button>

                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent pointer-events-none" />
                </div>
              </div>
            </div>
          </motion.div>
        </section>

        {/* Visi, Misi, dan Kegiatan Unggulan Section */}
        <section
          ref={programsRef}
          className="py-24 px-6 lg:px-14 relative bg-gradient-to-b from-white to-blue-50"
        >
          <motion.div
            variants={fadeInUp}
            initial="initial"
            animate={isProgramsInView ? "animate" : "initial"}
            className="max-w-7xl mx-auto"
          >
            <div className="text-center mb-16">
              <span className="inline-block bg-gradient-to-r from-blue-100 to-cyan-100 text-blue-800 px-6 py-3 rounded-full text-sm font-bold uppercase tracking-wider mb-6">
                Visi, Misi & Program
              </span>
              <h2 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent mb-6">
                Visi, Misi & Kegiatan Unggulan
              </h2>
              <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-cyan-500 mx-auto rounded-full" />
            </div>

            {/* Visi Misi Cards */}
            <div className="grid lg:grid-cols-2 gap-8 mb-16">
              {/* Visi Card */}
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.2, duration: 0.8 }}
                className="bg-white p-8 rounded-2xl shadow-xl border border-blue-100 hover:shadow-2xl transition-all duration-300"
              >
                <div className="text-center mb-6">
                  <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-full flex items-center justify-center mx-auto mb-4">
                    <FaStar className="text-white text-2xl" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-800 mb-4">
                    Visi
                  </h3>
                </div>
                <p className="text-gray-700 leading-relaxed text-center text-lg">
                  "Terwujudnya Madrasah Tsanawiyah yang unggul dalam prestasi
                  akademik dan non-akademik, berakhlak mulia, berwawasan global,
                  dan berlandaskan nilai-nilai Islam Ahlussunnah wal Jama'ah"
                </p>
              </motion.div>

              {/* Misi Card */}
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.4, duration: 0.8 }}
                className="bg-white p-8 rounded-2xl shadow-xl border border-blue-100 hover:shadow-2xl transition-all duration-300"
              >
                <div className="text-center mb-6">
                  <div className="w-16 h-16 bg-gradient-to-br from-cyan-500 to-blue-500 rounded-full flex items-center justify-center mx-auto mb-4">
                    <FaGraduationCap className="text-white text-2xl" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-800 mb-4">
                    Misi
                  </h3>
                </div>
                <div className="space-y-3 text-gray-700">
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                    <p>
                      Menyelenggarakan pendidikan berkualitas dengan kurikulum
                      nasional dan nilai kepesantrenan
                    </p>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                    <p>
                      Mengembangkan karakter islami dan akhlak mulia berdasarkan
                      Ahlussunnah wal Jama'ah
                    </p>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                    <p>Meningkatkan prestasi akademik dan non-akademik siswa</p>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                    <p>
                      Menyiapkan generasi muslim yang siap menghadapi tantangan
                      global
                    </p>
                  </div>
                </div>
              </motion.div>
            </div>

            {/* Kegiatan Unggulan Section */}
            <div className="text-center mb-12">
              <h3 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent mb-6">
                Kegiatan Unggulan
              </h3>
              <p className="text-gray-600 text-lg max-w-3xl mx-auto">
                Program-program unggulan yang membedakan MTs YATI dari madrasah
                lainnya
              </p>
            </div>

            {/* Kegiatan Cards Grid */}
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* Tahfidz Al-Qur'an */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6, duration: 0.8 }}
                className="bg-white p-6 rounded-2xl shadow-lg border border-blue-100 hover:shadow-xl transition-all duration-300 group"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-emerald-500 rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <FaQuran className="text-white text-2xl" />
                </div>
                <h4 className="text-xl font-bold text-gray-800 mb-3">
                  Tahfidz Al-Qur'an
                </h4>
                <p className="text-gray-600 leading-relaxed">
                  Program hafalan Al-Qur'an dengan target minimal 5 juz selama 3
                  tahun, didukung dengan metode modern dan bimbingan intensif.
                </p>
              </motion.div>

              {/* Bahasa Arab & Inggris */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8, duration: 0.8 }}
                className="bg-white p-6 rounded-2xl shadow-lg border border-blue-100 hover:shadow-xl transition-all duration-300 group"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-indigo-500 rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <FaGraduationCap className="text-white text-2xl" />
                </div>
                <h4 className="text-xl font-bold text-gray-800 mb-3">
                  Bahasa Arab & Inggris
                </h4>
                <p className="text-gray-600 leading-relaxed">
                  Program bilingual dengan native speaker, conversation
                  practice, dan sertifikasi bahasa untuk meningkatkan kompetensi
                  global.
                </p>
              </motion.div>

              {/* Teknologi Informasi */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.0, duration: 0.8 }}
                className="bg-white p-6 rounded-2xl shadow-lg border border-blue-100 hover:shadow-xl transition-all duration-300 group"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-500 rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <FaSchool className="text-white text-2xl" />
                </div>
                <h4 className="text-xl font-bold text-gray-800 mb-3">
                  Teknologi Informasi
                </h4>
                <p className="text-gray-600 leading-relaxed">
                  Pembelajaran komputer, coding dasar, dan digital literacy
                  untuk mempersiapkan siswa menghadapi era digital.
                </p>
              </motion.div>

              {/* Ekstrakurikuler Seni */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.2, duration: 0.8 }}
                className="bg-white p-6 rounded-2xl shadow-lg border border-blue-100 hover:shadow-xl transition-all duration-300 group"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-orange-500 to-red-500 rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <FaStar className="text-white text-2xl" />
                </div>
                <h4 className="text-xl font-bold text-gray-800 mb-3">
                  Seni & Budaya
                </h4>
                <p className="text-gray-600 leading-relaxed">
                  Program seni islami, kaligrafi, musik rebana, dan kegiatan
                  budaya untuk mengembangkan kreativitas dan apresiasi seni.
                </p>
              </motion.div>

              {/* Olahraga & Kesehatan */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.4, duration: 0.8 }}
                className="bg-white p-6 rounded-2xl shadow-lg border border-blue-100 hover:shadow-xl transition-all duration-300 group"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-teal-500 to-cyan-500 rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <FaUserTie className="text-white text-2xl" />
                </div>
                <h4 className="text-xl font-bold text-gray-800 mb-3">
                  Olahraga & Kesehatan
                </h4>
                <p className="text-gray-600 leading-relaxed">
                  Program olahraga prestasi, futsal, voli, dan kesehatan untuk
                  mengembangkan fisik dan mental yang sehat.
                </p>
              </motion.div>

              {/* Kepemimpinan */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.6, duration: 0.8 }}
                className="bg-white p-6 rounded-2xl shadow-lg border border-blue-100 hover:shadow-xl transition-all duration-300 group"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-yellow-500 to-orange-500 rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <FaStar className="text-white text-2xl" />
                </div>
                <h4 className="text-xl font-bold text-gray-800 mb-3">
                  Kepemimpinan
                </h4>
                <p className="text-gray-600 leading-relaxed">
                  Program OSIS, pramuka, dan leadership training untuk
                  mengembangkan jiwa kepemimpinan dan organisasi.
                </p>
              </motion.div>
            </div>
          </motion.div>
        </section>
      </main>
      <Footer />

      {/* Image Modal */}
      {selectedImage && (
        <ImageModal
          isOpen={!!selectedImage}
          onClose={closeModal}
          imageSrc={selectedImage.src}
          imageAlt={selectedImage.alt}
          onNavigate={handleModalNavigate}
        />
      )}
    </>
  );
}
