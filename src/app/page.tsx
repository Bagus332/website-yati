"use client";

import Image from "next/image";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useEffect, useState } from "react";
import {
  FaQuran,
  FaBook,
  FaLanguage,
  FaLaptop,
  FaCampground,
  FaTshirt,
  FaMicrophone,
  FaPeopleCarry,
  FaMosque,
  FaStar,
  FaGraduationCap,
  FaUsers,
} from "react-icons/fa";
import { supabase } from "@/lib/supabase";

interface Article {
  id: number;
  created_at: string;
  title: string;
  content: string;
  image_url: string;
}

export default function Home() {
  const aboutRef = useRef(null);
  const programsRef = useRef(null);
  const statsRef = useRef(null);
  const isAboutInView = useInView(aboutRef, { once: true });
  const isProgramsInView = useInView(programsRef, { once: true });
  const isStatsInView = useInView(statsRef, { once: true });

  const [articles, setArticles] = useState<Article[]>([]);

  useEffect(() => {
    const fetchArticles = async () => {
      const { data, error } = await supabase
        .from("articles")
        .select("*")
        .order("created_at", { ascending: false });

      if (data) {
        setArticles(data);
      }
    };

    fetchArticles();
  }, []);

  // Animasi untuk fade in dari bawah
  const fadeInUp = {
    initial: { opacity: 0, y: 60 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.8, ease: "easeOut" },
  };

  // Animasi stagger untuk menampilkan children secara berurutan
  const staggerContainer = {
    animate: {
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  // Fungsi untuk membuat slug dari judul
  const createSlug = (title: string) => {
    return title
      .toLowerCase()
      .replace(/ /g, "-")
      .replace(/[^\w-]+/g, "");
  };

  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-gradient-to-b from-blue-50 to-white font-sans">
        <div className="fixed inset-0 opacity-[0.02] pointer-events-none">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_25%_25%,_theme(colors.blue.500)_0%,_transparent_50%)]" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_75%_75%,_theme(colors.cyan.500)_0%,_transparent_50%)]" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_75%_25%,_theme(colors.blue.500)_0%,_transparent_50%)]" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_25%_75%,_theme(colors.cyan.500)_0%,_transparent_50%)]" />
        </div>

        {/* Hero Section dengan gambar yang lebih terang */}
        <section className="relative h-screen overflow-hidden">
          <Image
            src="/hero.webp"
            alt="Pondok Pesantren YATI"
            fill
            className="object-cover brightness-[0.6] scale-105"
            priority
          />

          {/* Gradien overlay disesuaikan agar teks tetap terbaca */}
          <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-black/30 to-black/80" />
          <div className="absolute inset-0 bg-gradient-to-r from-blue-400/30 via-transparent to-cyan-400/30" />

          <div className="absolute top-20 left-10 w-2 h-2 bg-cyan-400 rounded-full animate-pulse opacity-60" />
          <div className="absolute top-32 right-20 w-1 h-1 bg-blue-400 rounded-full animate-pulse opacity-60" />
          <div className="absolute bottom-40 left-20 w-1.5 h-1.5 bg-white rounded-full animate-pulse opacity-40" />

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, ease: "easeOut" }}
            className="absolute inset-0 flex flex-col items-center justify-center text-white px-4"
          >
            <div className="relative max-w-5xl mx-auto text-center">
              <motion.div
                initial={{ scale: 0, rotate: -180 }}
                animate={{ scale: 1, rotate: 0 }}
                transition={{ delay: 0.5, duration: 0.8 }}
                className="absolute -left-16 -top-16 w-32 h-32 bg-gradient-to-br from-blue-500/20 to-transparent rounded-full blur-2xl"
              />
              <motion.div
                initial={{ scale: 0, rotate: 180 }}
                animate={{ scale: 1, rotate: 0 }}
                transition={{ delay: 0.7, duration: 0.8 }}
                className="absolute -right-16 -bottom-16 w-32 h-32 bg-gradient-to-br from-cyan-500/20 to-transparent rounded-full blur-2xl"
              />

              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, duration: 0.8 }}
                className="text-5xl md:text-7xl lg:text-8xl font-black mb-6 leading-tight"
              >
                <span className="bg-gradient-to-r from-white via-blue-100 to-white bg-clip-text text-transparent drop-shadow-2xl">
                  Pondok Pesantren
                </span>
                <br />
                <span className="bg-gradient-to-r from-blue-300 via-cyan-200 to-blue-300 bg-clip-text text-transparent">
                  YATI
                </span>
              </motion.h1>

              <motion.div
                initial={{ width: 0 }}
                animate={{ width: "12rem" }}
                transition={{ delay: 0.8, duration: 0.6 }}
                className="h-1 bg-gradient-to-r from-blue-400 to-cyan-400 mx-auto mb-8 rounded-full"
              />

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1, duration: 0.8 }}
                className="text-xl md:text-3xl lg:text-4xl font-light mb-8 text-blue-100 max-w-4xl mx-auto leading-relaxed"
              >
                Yayasan Tarbiyah Islamiyah
                <br />
                <span className="text-cyan-200">Buya H. Mansur</span>
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.2, duration: 0.8 }}
                className="text-lg md:text-xl text-gray-300 font-medium tracking-wide"
              >
                Kamang Mudik • Sumatera Barat
              </motion.div>
            </div>
          </motion.div>
          {/* 
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.5 }}
            className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
          >
            <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
              <div className="w-1 h-3 bg-white/60 rounded-full mt-2 animate-bounce" />
            </div>
          </motion.div> */}
        </section>

        <section
          className="py-24 px-6 lg:px-14 relative overflow-hidden"
          ref={aboutRef}
        >
          <div className="absolute -right-32 -top-32 w-64 h-64 bg-gradient-to-br from-blue-100/40 to-transparent rounded-full blur-3xl" />
          <div className="absolute -left-32 -bottom-32 w-64 h-64 bg-gradient-to-br from-cyan-100/40 to-transparent rounded-full blur-3xl" />

          <motion.div
            variants={staggerContainer}
            initial="initial"
            animate={isAboutInView ? "animate" : "initial"}
            className="max-w-7xl mx-auto relative"
          >
            <motion.div variants={fadeInUp} className="text-center mb-20">
              <span className="inline-block bg-gradient-to-r from-blue-100 to-cyan-100 text-blue-800 px-6 py-3 rounded-full text-sm font-bold uppercase tracking-wider mb-6">
                Profil Pesantren
              </span>
              <h2 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent mb-6">
                Tentang Kami
              </h2>
              <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-cyan-500 mx-auto rounded-full" />
            </motion.div>

            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <motion.div variants={fadeInUp} className="space-y-8">
                <div className="flex items-start space-x-4 mb-8">
                  <div className="w-2 h-20 bg-gradient-to-b from-blue-500 to-cyan-500 rounded-full flex-shrink-0" />
                  <div>
                    <h3 className="text-3xl font-bold text-gray-800 mb-4">
                      Lembaga Pendidikan Islam Terpadu
                    </h3>
                    <p className="text-lg text-gray-600 leading-relaxed">
                      Pondok Pesantren YATI Kamang Mudik merupakan lembaga
                      pendidikan agama Islam yang terdiri dari Madrasah Aliyah
                      untuk tingkat SMA dan Madrasah Tsanawiyah untuk Tingkat
                      SMP, bernaung di bawah Yayasan yang dikelola oleh keluarga
                      Buya H. Mansur Dt. Nagari Basa.
                    </p>
                  </div>
                </div>

                <div className="bg-gradient-to-r from-gray-50 to-blue-50/30 p-8 rounded-2xl border border-gray-100">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-4">
                      <div>
                        <h4 className="font-semibold text-gray-800 mb-2">
                          📍 Alamat
                        </h4>
                        <p className="text-gray-600">
                          Jalan Kampung Baru, Jorong Pakan Sinayan
                          <br />
                          Nagari Kamang Mudiak, Kec. Kamang Magek
                          <br />
                          Kab. Agam, Sumatera Barat
                        </p>
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-800 mb-2">
                          👨‍💼 Pimpinan
                        </h4>
                        <p className="text-gray-600">Mhd Padhil, S.Pd</p>
                      </div>
                    </div>
                    <div className="space-y-4">
                      <div>
                        <h4 className="font-semibold text-gray-800 mb-2">
                          📧 Email
                        </h4>
                        <p className="text-blue-600 font-medium">
                          mti.yati@yahoo.com
                        </p>
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-800 mb-2">
                          📞 Telepon
                        </h4>
                        <p className="text-blue-600 font-medium">
                          081374549687
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-6">
                  <motion.div
                    whileHover={{ scale: 1.05, y: -2 }}
                    className="bg-gradient-to-br from-blue-500 to-blue-600 p-6 rounded-2xl text-white shadow-xl hover:shadow-blue-200 transition-all duration-300"
                  >
                    <div className="text-3xl mb-2">🏫</div>
                    <h4 className="font-bold mb-2">Luas Tanah</h4>
                    <p className="text-3xl font-black">101.202 m²</p>
                  </motion.div>
                  <motion.div
                    whileHover={{ scale: 1.05, y: -2 }}
                    className="bg-gradient-to-br from-cyan-500 to-cyan-600 p-6 rounded-2xl text-white shadow-xl hover:shadow-cyan-200 transition-all duration-300"
                  >
                    <div className="text-3xl mb-2">🏢</div>
                    <h4 className="font-bold mb-2">Luas Bangunan</h4>
                    <p className="text-3xl font-black">505 m²</p>
                  </motion.div>
                </div>
              </motion.div>

              <motion.div variants={fadeInUp} className="relative">
                <div className="relative h-96 lg:h-[600px] rounded-3xl overflow-hidden shadow-2xl">
                  <Image
                    src="/kegiatan.jpeg"
                    alt="Kegiatan Santri"
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
                </div>
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  animate={
                    isAboutInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 20 }
                  }
                  transition={{ delay: 0.8, duration: 0.6 }}
                  className="absolute -bottom-6 -right-6 bg-white p-6 rounded-2xl shadow-xl border border-gray-100"
                >
                  <div className="flex items-center space-x-3">
                    <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-full flex items-center justify-center">
                      <FaGraduationCap className="text-white text-xl" />
                    </div>
                    <div>
                      <div className="font-bold text-gray-800">
                        Pendidikan Berkualitas
                      </div>
                      <div className="text-sm text-gray-600">Sejak 1985</div>
                    </div>
                  </div>
                </motion.div>
              </motion.div>
            </div>
          </motion.div>
        </section>

        <section
          className="py-24 px-6 lg:px-14 bg-gradient-to-b from-gray-50 to-white relative"
          ref={programsRef}
        >
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_theme(colors.blue.100)_0%,_transparent_50%)] opacity-30" />

          <motion.div
            variants={staggerContainer}
            initial="initial"
            animate={isProgramsInView ? "animate" : "initial"}
            className="max-w-7xl mx-auto relative"
          >
            <motion.div variants={fadeInUp} className="text-center mb-20">
              <span className="inline-block bg-gradient-to-r from-blue-100 to-cyan-100 text-blue-800 px-6 py-3 rounded-full text-sm font-bold uppercase tracking-wider mb-6">
                Program Unggulan
              </span>
              <h2 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent mb-6">
                Program dan Kegiatan
              </h2>
              <div className="w-32 h-1 bg-gradient-to-r from-blue-500 to-cyan-500 mx-auto rounded-full" />
            </motion.div>

            <motion.div variants={fadeInUp} className="mb-20">
              <h3 className="text-3xl font-bold text-center mb-12 text-gray-800">
                Sistem Kurikulum Terintegrasi
              </h3>
              <div className="grid lg:grid-cols-2 gap-8">
                <motion.div
                  whileHover={{ y: -8, scale: 1.02 }}
                  className="group bg-white p-10 rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-500 border border-blue-100 relative overflow-hidden"
                >
                  <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-blue-400/10 to-transparent rounded-full blur-2xl group-hover:scale-150 transition-transform duration-500" />
                  <div className="flex items-center space-x-4 mb-6">
                    <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center group-hover:rotate-6 transition-transform duration-300">
                      <FaBook className="text-2xl text-white" />
                    </div>
                    <h3 className="text-2xl font-bold text-gray-800">
                      Kurikulum Pondok
                    </h3>
                  </div>
                  <p className="text-gray-600 mb-6 leading-relaxed">
                    Berbasis karakter dengan faham Ahlussunnah wal Jama'ah dalam
                    kajian Akidah dan Mazhab Syafi'i dalam kajian Fiqh.
                  </p>
                  <div className="space-y-3">
                    {[
                      "Memberdayakan tradisi Mudzakarah",
                      "Pola halaqah dalam pendalaman kitab kuning",
                      "Sistem klasikal dalam PBM umum",
                    ].map((item, index) => (
                      <div key={index} className="flex items-center space-x-3">
                        <div className="w-2 h-2 bg-blue-500 rounded-full flex-shrink-0" />
                        <span className="text-gray-700">{item}</span>
                      </div>
                    ))}
                  </div>
                </motion.div>

                <motion.div
                  whileHover={{ y: -8, scale: 1.02 }}
                  className="group bg-white p-10 rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-500 border border-cyan-100 relative overflow-hidden"
                >
                  <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-cyan-400/10 to-transparent rounded-full blur-2xl group-hover:scale-150 transition-transform duration-500" />
                  <div className="flex items-center space-x-4 mb-6">
                    <div className="w-16 h-16 bg-gradient-to-br from-cyan-500 to-cyan-600 rounded-2xl flex items-center justify-center group-hover:rotate-6 transition-transform duration-300">
                      <FaLanguage className="text-2xl text-white" />
                    </div>
                    <h3 className="text-2xl font-bold text-gray-800">
                      Kurikulum Nasional
                    </h3>
                  </div>
                  <p className="text-gray-600 mb-6 leading-relaxed">
                    Mengadopsi Kurikulum 2013 yang menekankan pendidikan
                    berbasis karakter, sejalan dengan pola pendidikan pesantren.
                  </p>
                  <div className="space-y-3">
                    {[
                      "Integrasi ilmu umum dan agama",
                      "Penerapan sejak tahun 2014-2015",
                      "Pembelajaran berbasis karakter",
                    ].map((item, index) => (
                      <div key={index} className="flex items-center space-x-3">
                        <div className="w-2 h-2 bg-cyan-500 rounded-full flex-shrink-0" />
                        <span className="text-gray-700">{item}</span>
                      </div>
                    ))}
                  </div>
                </motion.div>
              </div>
            </motion.div>

            <motion.div variants={fadeInUp} className="mb-20">
              <div className="text-center mb-16">
                <h3 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent mb-4">
                  Program Ekstrakurikuler
                </h3>
                <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                  Program pengembangan diri yang terintegrasi dengan nilai-nilai
                  Islam
                </p>
              </div>

              <div className="grid md:grid-cols-3 gap-8">
                {[
                  {
                    icon: FaQuran,
                    title: "Tahfizhul Qur'an",
                    description:
                      "Program hafalan Al-Qur'an terintegrasi dalam pembelajaran dengan target juz tertentu untuk setiap tingkatan kelas.",
                    gradient: "from-blue-500 to-cyan-500",
                    bgGradient: "from-white to-blue-50",
                    borderColor: "border-blue-100",
                    shadowColor: "hover:shadow-blue-200/60",
                  },
                  {
                    icon: FaMicrophone,
                    title: "Muhadharah",
                    description:
                      "Pelatihan pidato dan khutbah dengan jadwal rutin setiap Selasa malam dan Senin ke-4, mengombinasikan teori dan praktik.",
                    gradient: "from-cyan-500 to-blue-500",
                    bgGradient: "from-white to-cyan-50",
                    borderColor: "border-cyan-100",
                    shadowColor: "hover:shadow-cyan-200/60",
                  },
                  {
                    icon: FaCampground,
                    title: "Pramuka",
                    description:
                      "Kegiatan kepramukaan wajib untuk kelas VII-IX MTs dan X-XII MA, sesuai dengan implementasi Kurikulum 2013.",
                    gradient: "from-blue-500 to-cyan-500",
                    bgGradient: "from-white to-blue-50",
                    borderColor: "border-blue-100",
                    shadowColor: "hover:shadow-blue-200/60",
                  },
                ].map((program, index) => (
                  <motion.div
                    key={index}
                    whileHover={{ y: -12, scale: 1.03 }}
                    whileTap={{ scale: 0.98 }}
                    className={`group bg-gradient-to-br ${program.bgGradient} p-8 rounded-3xl shadow-2xl ${program.shadowColor} transition-all duration-500 border ${program.borderColor} relative overflow-hidden cursor-pointer`}
                  >
                    <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-br from-white/20 to-transparent rounded-full blur-2xl group-hover:scale-125 transition-transform duration-500" />

                    <div
                      className={`w-20 h-20 bg-gradient-to-br ${program.gradient} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 group-hover:rotate-12 transition-transform duration-300 shadow-lg`}
                    >
                      <program.icon className="text-3xl text-white" />
                    </div>

                    <h3 className="text-2xl font-bold mb-4 text-gray-800 group-hover:text-gray-900 transition-colors">
                      {program.title}
                    </h3>

                    <p className="text-gray-600 leading-relaxed group-hover:text-gray-700 transition-colors">
                      {program.description}
                    </p>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            <motion.div variants={fadeInUp}>
              <div className="text-center mb-12">
                <h3 className="text-3xl font-bold text-gray-800 mb-4">
                  Kegiatan Sosial & Dakwah
                </h3>
                <p className="text-lg text-gray-600">
                  Mengembangkan jiwa sosial dan dakwah santri melalui kegiatan
                  kemasyarakatan
                </p>
              </div>

              <div className="grid md:grid-cols-2 gap-8">
                <motion.div
                  whileHover={{ scale: 1.06, y: -10, rotate: -1 }}
                  className="relative bg-white/70 backdrop-blur-lg p-10 rounded-[2.5rem] shadow-2xl border-2 border-transparent group transition-all duration-500 overflow-visible hover:border-blue-400/60 hover:shadow-blue-200/60"
                >
                  <div className="absolute -top-8 left-1/2 -translate-x-1/2 w-20 h-20 bg-gradient-to-br from-blue-400 to-blue-600 rounded-full flex items-center justify-center shadow-lg border-4 border-white/60 group-hover:scale-110 group-hover:rotate-12 transition-transform duration-300 z-20">
                    <FaPeopleCarry className="text-3xl text-white drop-shadow" />
                  </div>
                  <div className="pt-16 text-center">
                    <h3 className="text-2xl font-extrabold text-blue-700 mb-3 tracking-tight group-hover:text-blue-800 transition-colors">
                      Sosial Kemasyarakatan
                    </h3>
                    <p className="text-gray-700 leading-relaxed mb-2">
                      Kegiatan gotong royong bersama masyarakat di lingkungan
                      Madrasah dan tempat-tempat umum untuk membangun karakter
                      peduli sosial.
                    </p>
                    <div className="mt-4 flex justify-center">
                      <span className="inline-block bg-gradient-to-r from-blue-100 to-cyan-100 text-blue-700 px-4 py-1 rounded-full text-xs font-semibold tracking-wide shadow-sm">
                        Peduli Sosial
                      </span>
                    </div>
                  </div>
                  <div className="absolute -inset-1 rounded-[2.7rem] bg-gradient-to-br from-blue-200/40 via-white/0 to-cyan-200/40 blur-[2px] -z-10" />
                </motion.div>

                <motion.div
                  whileHover={{ scale: 1.06, y: -10, rotate: 1 }}
                  className="relative bg-white/70 backdrop-blur-lg p-10 rounded-[2.5rem] shadow-2xl border-2 border-transparent group transition-all duration-500 overflow-visible hover:border-cyan-400/60 hover:shadow-cyan-200/60"
                >
                  <div className="absolute -top-8 left-1/2 -translate-x-1/2 w-20 h-20 bg-gradient-to-br from-cyan-500 to-cyan-700 rounded-full flex items-center justify-center shadow-lg border-4 border-white/60 group-hover:scale-110 group-hover:rotate-12 transition-transform duration-300 z-20">
                    <FaMosque className="text-3xl text-white drop-shadow" />
                  </div>
                  <div className="pt-16 text-center">
                    <h3 className="text-2xl font-extrabold text-cyan-700 mb-3 tracking-tight group-hover:text-cyan-800 transition-colors">
                      Program Dakwah
                    </h3>
                    <p className="text-gray-700 leading-relaxed mb-2">
                      Program dakwah bil hal dan bil qaul: Mesjidku Bersih,
                      Safari Dakwah, dan penyelenggaraan jenazah sebagai bentuk
                      pengabdian kepada masyarakat.
                    </p>
                    <div className="mt-4 flex justify-center">
                      <span className="inline-block bg-gradient-to-r from-cyan-100 to-blue-100 text-cyan-700 px-4 py-1 rounded-full text-xs font-semibold tracking-wide shadow-sm">
                        Pengabdian Umat
                      </span>
                    </div>
                  </div>
                  <div className="absolute -inset-1 rounded-[2.7rem] bg-gradient-to-br from-cyan-200/40 via-white/0 to-blue-200/40 blur-[2px] -z-10" />
                </motion.div>
              </div>
            </motion.div>
          </motion.div>
        </section>

        {/* News Section dengan gradien biru yang lebih lembut */}
        <section className="py-24 px-6 lg:px-14 relative overflow-hidden bg-gradient-to-b from-white to-gray-50">
          <div className="absolute inset-0 bg-gradient-to-br from-blue-50/50 via-white to-cyan-50/50" />
          <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-blue-100/20 to-transparent rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-gradient-to-tr from-cyan-100/20 to-transparent rounded-full blur-3xl" />

          <div className="max-w-7xl mx-auto relative">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <span className="inline-block bg-gradient-to-r from-blue-100 to-cyan-100 text-blue-800 px-6 py-2 rounded-full text-sm font-bold uppercase tracking-wider mb-4">
                Updates & Informasi
              </span>
              <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent mb-6">
                Berita Terbaru
              </h2>
              <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-cyan-500 mx-auto rounded-full" />
              <p className="mt-6 text-lg text-gray-600 max-w-3xl mx-auto">
                Ikuti perkembangan terbaru dari Pondok Pesantren YATI Kamang
                Mudik
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {articles.map((article, index) => {
                const slug = createSlug(article.title);
                return (
                  <motion.div
                    key={article.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    whileHover={{ y: -8, scale: 1.02 }}
                    className="group bg-white rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-500 overflow-hidden border border-gray-100 flex flex-col h-full"
                  >
                    <div className="relative h-56 overflow-hidden">
                      <Image
                        src={article.image_url}
                        alt={article.title}
                        fill
                        className="object-cover transform group-hover:scale-110 transition-transform duration-700"
                        unoptimized
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-blue-500/20 via-transparent to-transparent z-10" />
                    </div>

                    <div className="p-6 flex flex-col flex-grow">
                      <div className="flex-grow">
                        <h3 className="text-xl font-bold text-gray-800 mb-2 line-clamp-2 group-hover:text-blue-600 transition-colors">
                          {article.title}
                        </h3>
                        <p className="text-gray-600 line-clamp-3">
                          {article.content.substring(0, 150)}...
                        </p>
                      </div>

                      <div className="mt-6 flex items-center justify-between pt-4 border-t border-gray-100">
                        <a
                          href={`/berita/${slug}`}
                          className="inline-flex items-center space-x-2 text-blue-600 font-medium group-hover:text-blue-700 transition-colors"
                        >
                          <span>Baca Selengkapnya</span>
                          <svg
                            className="w-4 h-4 group-hover:translate-x-1 transition-transform"
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
                        </a>
                        <span className="text-sm text-gray-500">
                          {new Date(article.created_at).toLocaleDateString(
                            "id-ID",
                            {
                              day: "numeric",
                              month: "short",
                              year: "numeric",
                            }
                          )}
                        </span>
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
