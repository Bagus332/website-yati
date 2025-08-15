"use client";

import Image from "next/image";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import {
  FaQuran,
  FaGraduationCap,
  FaUserTie,
  FaSchool,
  FaStar,
} from "react-icons/fa";

export default function Home() {
  const contentRef = useRef(null);
  const programsRef = useRef(null);
  const isContentInView = useInView(contentRef, { once: true });
  const isProgramsInView = useInView(programsRef, { once: true });

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
        <section className="relative h-[60vh] overflow-hidden">
          <Image
            src="/photo_2025-08-15_09-16-27.jpg"
            alt="MA YATI"
            fill
            className="object-cover brightness-[0.6] scale-105"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-black/30 to-black/80" />

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, ease: "easeOut" }}
            className="absolute inset-0 flex flex-col items-center justify-center text-white px-4"
          >
            <h1 className="text-5xl md:text-7xl font-black mb-6 text-center">
              <span className="bg-gradient-to-r from-white via-blue-100 to-white bg-clip-text text-transparent drop-shadow-2xl">
                Madrasah Aliyah
              </span>
              <br />
              <span className="bg-gradient-to-r from-blue-300 via-cyan-200 to-blue-300 bg-clip-text text-transparent">
                YATI
              </span>
            </h1>
            <motion.div
              initial={{ width: 0 }}
              animate={{ width: "12rem" }}
              transition={{ delay: 0.8, duration: 0.6 }}
              className="h-1 bg-gradient-to-r from-blue-400 to-cyan-400 mx-auto mb-8 rounded-full"
            />
            <p className="text-xl md:text-2xl text-blue-100 text-center max-w-3xl">
              Pendidikan Islam Modern dengan Nilai-nilai Pesantren
            </p>
          </motion.div>
        </section>

        {/* Content Section */}
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
                        <p className="text-blue-600">Terakreditasi B</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="relative">
                <div className="relative h-[500px] rounded-3xl overflow-hidden shadow-2xl">
                  <Image
                    src="/madrasah.jpg"
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

        {/* Programs Section */}
        <section
          ref={programsRef}
          className="py-24 px-6 lg:px-14 bg-gradient-to-b from-gray-50 to-white relative"
        >
          <motion.div
            variants={fadeInUp}
            initial="initial"
            animate={isProgramsInView ? "animate" : "initial"}
            className="max-w-7xl mx-auto"
          >
            <div className="text-center mb-16">
              <span className="inline-block bg-gradient-to-r from-blue-100 to-cyan-100 text-blue-800 px-6 py-3 rounded-full text-sm font-bold uppercase tracking-wider mb-6">
                Program Unggulan
              </span>
              <h2 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent mb-6">
                Program & Kegiatan
              </h2>
              <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-cyan-500 mx-auto rounded-full" />
            </div>

            <div className="grid md:grid-cols-2 gap-8 mb-16">
              <motion.div
                whileHover={{ y: -8, scale: 1.02 }}
                className="bg-white p-8 rounded-2xl shadow-xl border border-blue-100"
              >
                <h3 className="text-2xl font-bold text-gray-800 mb-6">
                  Program Wajib
                </h3>
                <ul className="space-y-3 text-gray-700">
                  <li>Tahfizhul Qur'an dengan tingkatan juz tertentu</li>
                  <li>Pelatihan Komputer dan TIK terstruktur</li>
                  <li>Kegiatan Pramuka sesuai Kurikulum 2013</li>
                  <li>Program Muhadharah (pidato dan khutbah)</li>
                </ul>
              </motion.div>

              <motion.div
                whileHover={{ y: -8, scale: 1.02 }}
                className="bg-white p-8 rounded-2xl shadow-xl border border-cyan-100"
              >
                <h3 className="text-2xl font-bold text-gray-800 mb-6">
                  Program Pengembangan
                </h3>
                <ul className="space-y-3 text-gray-700">
                  <li>Jahit menjahit dan Tata Busana</li>
                  <li>Seni Bela Diri (Silat dan Karate)</li>
                  <li>Forum Annisa'</li>
                  <li>Kegiatan Sosial Kemasyarakatan</li>
                </ul>
              </motion.div>
            </div>

            {/* Visi & Misi Section */}
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent mb-6">
                Visi & Misi
              </h2>
              <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-cyan-500 mx-auto rounded-full" />
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              <motion.div
                whileHover={{ y: -8, scale: 1.02 }}
                className="bg-white p-8 rounded-2xl shadow-xl border border-blue-100"
              >
                <div className="flex items-center space-x-4 mb-6">
                  <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center">
                    <FaStar className="text-2xl text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-800">Visi</h3>
                </div>
                <p className="text-gray-700 leading-relaxed">
                  Terwujudnya siswa yang beriman, bertakwa, berkarakter dan
                  berprestasi
                </p>
              </motion.div>

              <motion.div
                whileHover={{ y: -8, scale: 1.02 }}
                className="bg-white p-8 rounded-2xl shadow-xl border border-cyan-100"
              >
                <div className="flex items-center space-x-4 mb-6">
                  <div className="w-16 h-16 bg-gradient-to-br from-cyan-500 to-cyan-600 rounded-2xl flex items-center justify-center">
                    <FaQuran className="text-2xl text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-800">Misi</h3>
                </div>
                <ul className="space-y-3 text-gray-700">
                  <li>
                    • Mewujudkan penyelenggaraan pendidikan yang berorientasi
                    pada mutu
                  </li>
                  <li>• Mewujudkan manajemen Madrasah yang akuntabiliatas</li>
                  <li>
                    • Mewujudkan SDM yang cerdas intelektual, emosional dan
                    spiritual
                  </li>
                  <li>• Penguasaan ilmu-ilmu agama dan umum</li>
                  <li>
                    • Mewujudkan sarana dan prasarana yang memadai dan
                    berkualitas
                  </li>
                  <li>
                    • Mewujudkan partisipasi aktif masyarakat terhadap
                    pendidikan Madrasah
                  </li>
                </ul>
              </motion.div>
            </div>
          </motion.div>
        </section>
      </main>
      <Footer />
    </>
  );
}
