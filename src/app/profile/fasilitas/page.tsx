"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";
import { FaBook, FaMosque, FaRunning, FaBuilding } from "react-icons/fa";

export default function Home() {
  const fadeInUp = {
    initial: { opacity: 0, y: 60 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.8, ease: "easeOut" },
  };

  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
        {/* Background Patterns */}
        <div className="fixed inset-0 opacity-[0.02] pointer-events-none">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_25%_25%,_theme(colors.blue.500)_0%,_transparent_50%)]" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_75%_75%,_theme(colors.cyan.500)_0%,_transparent_50%)]" />
        </div>

        <div className="container mx-auto py-24 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <span className="inline-block bg-gradient-to-r from-blue-100 to-cyan-100 text-blue-800 px-6 py-3 rounded-full text-sm font-bold uppercase tracking-wider mb-6">
                Sarana & Prasarana
              </span>
              <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent mb-6">
                Fasilitas Pondok Pesantren YATI
              </h1>
              <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-cyan-500 mx-auto rounded-full" />
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="bg-white/70 backdrop-blur-lg p-8 rounded-[2.5rem] shadow-2xl border-2 border-blue-100/60 mb-16"
            >
              <p className="text-gray-700 text-lg leading-relaxed text-center max-w-3xl mx-auto">
                Pondok Pesantren YATI berkomitmen untuk menyediakan lingkungan belajar
                yang optimal bagi para santri. Dengan lahan yang luas dan fasilitas yang
                terawat dengan baik, kami memastikan setiap santri dapat menjalani proses
                pendidikan dengan nyaman dan fokus.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 gap-8 mb-8">
              <motion.div
                variants={fadeInUp}
                initial="initial"
                whileInView="animate"
                viewport={{ once: true }}
                className="space-y-6"
              >
                <div className="bg-white/70 backdrop-blur-lg p-8 rounded-[2rem] shadow-xl border-2 border-blue-100/60 hover:shadow-2xl transition-all duration-300">
                  <div className="flex items-center space-x-4 mb-6">
                    <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl flex items-center justify-center">
                      <FaBook className="text-2xl text-white" />
                    </div>
                    <h2 className="text-xl font-bold bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">
                      Fasilitas Pembelajaran
                    </h2>
                  </div>
                  <ul className="space-y-3 text-gray-700">
                    <li className="flex items-center space-x-3">
                      <span className="w-2 h-2 bg-blue-500 rounded-full"></span>
                      <span>10 ruang kelas yang representatif dan terawat</span>
                    </li>
                    <li className="flex items-center space-x-3">
                      <span className="w-2 h-2 bg-blue-500 rounded-full"></span>
                      <span>Perpustakaan dengan koleksi buku agama dan umum</span>
                    </li>
                    <li className="flex items-center space-x-3">
                      <span className="w-2 h-2 bg-blue-500 rounded-full"></span>
                      <span>Laboratorium komputer modern</span>
                    </li>
                    <li className="flex items-center space-x-3">
                      <span className="w-2 h-2 bg-blue-500 rounded-full"></span>
                      <span>Ruang guru dan ruang tata usaha</span>
                    </li>
                    <li className="flex items-center space-x-3">
                      <span className="w-2 h-2 bg-blue-500 rounded-full"></span>
                      <span>Ruang konseling untuk bimbingan santri</span>
                    </li>
                  </ul>
                </div>

                <div className="bg-white/70 backdrop-blur-lg p-8 rounded-[2rem] shadow-xl border-2 border-blue-100/60 hover:shadow-2xl transition-all duration-300">
                  <div className="flex items-center space-x-4 mb-6">
                    <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl flex items-center justify-center">
                      <FaMosque className="text-2xl text-white" />
                    </div>
                    <h2 className="text-xl font-bold bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">
                      Fasilitas Ibadah & Kesehatan
                    </h2>
                  </div>
                  <ul className="space-y-3 text-gray-700">
                    <li className="flex items-center space-x-3">
                      <span className="w-2 h-2 bg-blue-500 rounded-full"></span>
                      <span>Masjid sebagai pusat kegiatan ibadah dan kajian</span>
                    </li>
                    <li className="flex items-center space-x-3">
                      <span className="w-2 h-2 bg-blue-500 rounded-full"></span>
                      <span>Ruang UKS untuk pelayanan kesehatan santri</span>
                    </li>
                    <li className="flex items-center space-x-3">
                      <span className="w-2 h-2 bg-blue-500 rounded-full"></span>
                      <span>7 unit kamar mandi/toilet (5 dalam kondisi baik)</span>
                    </li>
                  </ul>
                </div>
              </motion.div>

              <motion.div
                variants={fadeInUp}
                initial="initial"
                whileInView="animate"
                viewport={{ once: true }}
                className="space-y-6"
              >
                <div className="bg-white/70 backdrop-blur-lg p-8 rounded-[2rem] shadow-xl border-2 border-blue-100/60 hover:shadow-2xl transition-all duration-300">
                  <div className="flex items-center space-x-4 mb-6">
                    <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl flex items-center justify-center">
                      <FaRunning className="text-2xl text-white" />
                    </div>
                    <h2 className="text-xl font-bold bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">
                      Fasilitas Olahraga & Organisasi
                    </h2>
                  </div>
                  <ul className="space-y-3 text-gray-700">
                    <li className="flex items-center space-x-3">
                      <span className="w-2 h-2 bg-blue-500 rounded-full"></span>
                      <span>3 area olahraga yang terpelihara dengan baik</span>
                    </li>
                    <li className="flex items-center space-x-3">
                      <span className="w-2 h-2 bg-blue-500 rounded-full"></span>
                      <span>Ruang organisasi kesiswaan untuk kegiatan ekstrakurikuler</span>
                    </li>
                  </ul>
                </div>

                <div className="bg-white/70 backdrop-blur-lg p-8 rounded-[2rem] shadow-xl border-2 border-blue-100/60 hover:shadow-2xl transition-all duration-300">
                  <div className="flex items-center space-x-4 mb-6">
                    <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl flex items-center justify-center">
                      <FaBuilding className="text-2xl text-white" />
                    </div>
                    <h2 className="text-xl font-bold bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">
                      Fasilitas Administrasi
                    </h2>
                  </div>
                  <ul className="space-y-3 text-gray-700">
                    <li className="flex items-center space-x-3">
                      <span className="w-2 h-2 bg-blue-500 rounded-full"></span>
                      <span>Ruang pimpinan yang representatif</span>
                    </li>
                    <li className="flex items-center space-x-3">
                      <span className="w-2 h-2 bg-blue-500 rounded-full"></span>
                      <span>Ruang tata usaha untuk pelayanan administrasi</span>
                    </li>
                  </ul>
                </div>
              </motion.div>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-white/70 backdrop-blur-lg p-8 rounded-[2.5rem] shadow-2xl border-2 border-blue-100/60 mt-16"
            >
              <p className="text-gray-700 leading-relaxed text-center italic">
                Kami terus berkomitmen untuk meningkatkan dan memelihara kualitas fasilitas
                yang ada demi mendukung terciptanya lingkungan belajar yang kondusif bagi
                para santri Pondok Pesantren YATI. Pengembangan fasilitas dilakukan secara
                berkelanjutan sesuai dengan kebutuhan dan perkembangan pendidikan.
              </p>
            </motion.div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
