"use client";

import Image from "next/image";
import Navbar from "../components/Navbar";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { FaQuran, FaBook, FaLanguage, FaLaptop, FaCampground, FaTshirt, FaMicrophone, FaPeopleCarry, FaMosque } from 'react-icons/fa';

export default function Home() {
  const aboutRef = useRef(null);
  const programsRef = useRef(null);
  const isAboutInView = useInView(aboutRef, { once: true });
  const isProgramsInView = useInView(programsRef, { once: true });

  return (
    <main className="min-h-screen">
      <div className="fixed inset-0 bg-[url('/pattern.png')] opacity-5 pointer-events-none" />
      <Navbar />
      {/* Hero Section */}
      <section className="relative h-screen">
        <Image
          src="/hero.webp"
          alt="Pondok Pesantren YATI"
          fill
          className="object-cover brightness-50 opacity-40"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 to-transparent" />
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="absolute inset-0 flex flex-col items-center justify-center text-white"
        >
          <div className="relative">
            <div className="absolute -left-10 -top-10 w-20 h-20 bg-emerald-500/20 rounded-full blur-xl" />
            <div className="absolute -right-10 -bottom-10 w-20 h-20 bg-blue-500/20 rounded-full blur-xl" />
            <h1 className="text-4xl md:text-6xl font-bold text-center mb-4">
              Pondok Pesantren YATI Kamang Mudik
            </h1>
            <p className="text-xl md:text-2xl text-center max-w-2xl mx-4">
              Yayasan Tarbiyah Islamiyah Buya H. Mansur
            </p>
          </div>
        </motion.div>
      </section>

      {/* About Section */}
      <section className="py-16 px-14 bg-white relative overflow-hidden" ref={aboutRef}>
        <div className="absolute -right-20 -top-20 w-40 h-40 bg-emerald-100 rounded-full opacity-50" />
        <div className="absolute -left-20 -bottom-20 w-40 h-40 bg-blue-100 rounded-full opacity-50" />
        <motion.div 
          style={{
            transform: isAboutInView ? "none" : "translateY(50px)",
            opacity: isAboutInView ? 1 : 0,
            transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s"
          }}
          className="max-w-6xl mx-auto relative"
        >
          <h2 className="text-3xl font-bold text-center mb-8">Tentang Kami</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-6">
              <div className="flex items-center space-x-4 mb-6">
                <div className="w-1 h-16 bg-emerald-500" />
                <h3 className="text-2xl font-semibold text-gray-800">Profil Pesantren</h3>
              </div>
              <p className="text-gray-600 leading-relaxed">
                Pondok Pesantren YATI Kamang Mudik merupakan lembaga pendidikan agama Islam yang terdiri dari Madrasah Aliyah untuk tingkat SMA dan Madrasah Tsanawiyah untuk Tingkat SMP, bernaung di bawah Yayasan yang dikelola oleh keluarga Buya H. Mansur Dt. Nagari Basa.
              </p>
              <div className="space-y-2 text-gray-600">
                <p><strong>Alamat:</strong> Jalan Kampung Baru, Jorong Pakan Sinayan</p>
                <p>Nagari Kamang Mudiak, Kec. Kamang Magek</p>
                <p>Kab. Agam, Sumatera Barat</p>
                <p><strong>Email:</strong> mti.yati@yahoo.com</p>
                <p><strong>Pimpinan:</strong> Mhd Padhil, S.Pd</p>
                <p><strong>No. Telepon:</strong> 081374549687</p>
              </div>
              <div className="grid grid-cols-2 gap-4 mt-8">
                <div className="p-4 bg-gray-50 rounded-lg border border-gray-100">
                  <h4 className="font-semibold mb-2">Luas Tanah</h4>
                  <p className="text-2xl font-bold text-emerald-600">101.202 m²</p>
                </div>
                <div className="p-4 bg-gray-50 rounded-lg border border-gray-100">
                  <h4 className="font-semibold mb-2">Luas Bangunan</h4>
                  <p className="text-2xl font-bold text-emerald-600">505 m²</p>
                </div>
              </div>
            </div>
            <div className="relative h-64 md:h-128">
              <Image
                src="/kegiatan.jpeg"
                alt="Kegiatan Santri"
                fill
                className="object-cover rounded-lg"
              />
            </div>
          </div>
        </motion.div>
      </section>

      {/* Programs Section */}
      <section className="py-16 px-4 bg-gray-50 relative" ref={programsRef}>
        <div className="absolute inset-0 bg-gradient-radial from-emerald-50 to-transparent opacity-60" />
        <motion.div className="max-w-6xl mx-auto relative">
          <h2 className="text-3xl font-bold text-center mb-12">Program dan Kegiatan Madrasah</h2>
          
          {/* Kurikulum */}
          <div className="mb-12">
            <h3 className="text-2xl font-semibold mb-6 text-emerald-700">Kurikulum Madrasah</h3>
            <div className="grid md:grid-cols-2 gap-8">
              <motion.div 
                whileHover={{ scale: 1.05 }}
                className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 border border-gray-100"
              >
                <div className="text-4xl text-emerald-500 mb-6">
                  <FaBook />
                </div>
                <h3 className="text-xl font-semibold mb-4">Kurikulum Pondok</h3>
                <p className="text-gray-600 mb-4">
                  Berbasis karakter dengan faham Ahlussunnah wal Jama'ah dalam kajian Akidah dan Mazhab Syafi'i dalam kajian Fiqh.
                </p>
                <ul className="list-disc pl-6 space-y-2 text-gray-600">
                  <li>Memberdayakan tradisi Mudzakarah</li>
                  <li>Pola halaqah dalam pendalaman kitab kuning</li>
                  <li>Sistem klasikal dalam PBM umum</li>
                </ul>
              </motion.div>

              <motion.div 
                whileHover={{ scale: 1.05 }}
                className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 border border-gray-100"
              >
                <div className="text-4xl text-emerald-500 mb-6">
                  <FaLanguage />
                </div>
                <h3 className="text-xl font-semibold mb-4">Kurikulum Nasional</h3>
                <p className="text-gray-600 mb-4">
                  Mengadopsi Kurikulum 2013 yang menekankan pendidikan berbasis karakter, sejalan dengan pola pendidikan pesantren.
                </p>
                <ul className="list-disc pl-6 space-y-2 text-gray-600">
                  <li>Integrasi ilmu umum dan agama</li>
                  <li>Penerapan sejak tahun 2014-2015</li>
                  <li>Pembelajaran berbasis karakter</li>
                </ul>
              </motion.div>
            </div>
          </div>

          {/* Kegiatan Ekstrakurikuler */}
          <div className="mb-12">
            <h3 className="text-2xl font-semibold mb-6 text-emerald-700">Program Ekstrakurikuler</h3>
            <div className="grid md:grid-cols-3 gap-8">
              <motion.div 
                whileHover={{ scale: 1.05 }}
                className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 border border-gray-100"
              >
                <div className="text-4xl text-emerald-500 mb-6">
                  <FaQuran />
                </div>
                <h3 className="text-xl font-semibold mb-4">Tahfizhul Qur'an</h3>
                <p className="text-gray-600">Terintegrasi dalam PBM dengan tingkatan juz tertentu untuk setiap kelas.</p>
              </motion.div>

              <motion.div 
                whileHover={{ scale: 1.05 }}
                className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 border border-gray-100"
              >
                <div className="text-4xl text-emerald-500 mb-6">
                  <FaMicrophone />
                </div>
                <h3 className="text-xl font-semibold mb-4">Muhadharah</h3>
                <p className="text-gray-600">Program pidato dan khutbah setiap Selasa malam dan Senin ke-4, dengan teori dan praktek.</p>
              </motion.div>

              <motion.div 
                whileHover={{ scale: 1.05 }}
                className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 border border-gray-100"
              >
                <div className="text-4xl text-emerald-500 mb-6">
                  <FaCampground />
                </div>
                <h3 className="text-xl font-semibold mb-4">Pramuka</h3>
                <p className="text-gray-600">Wajib bagi kelas VII-IX MTs dan X-XII MA sesuai Kurikulum 2013.</p>
              </motion.div>
            </div>
          </div>

          {/* Kegiatan Eksternal */}
          <div>
            <h3 className="text-2xl font-semibold mb-6 text-emerald-700">Kegiatan Eksternal</h3>
            <div className="grid md:grid-cols-2 gap-8">
              <motion.div 
                whileHover={{ scale: 1.05 }}
                className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 border border-gray-100"
              >
                <div className="text-4xl text-emerald-500 mb-6">
                  <FaPeopleCarry />
                </div>
                <h3 className="text-xl font-semibold mb-4">Sosial Kemasyarakatan</h3>
                <p className="text-gray-600">Kegiatan gotong royong bersama masyarakat di lingkungan Madrasah dan tempat-tempat umum.</p>
              </motion.div>

              <motion.div 
                whileHover={{ scale: 1.05 }}
                className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 border border-gray-100"
              >
                <div className="text-4xl text-emerald-500 mb-6">
                  <FaMosque />
                </div>
                <h3 className="text-xl font-semibold mb-4">Dakwah</h3>
                <p className="text-gray-600">Program dakwah bil hal dan bil qaul: Mesjidku Bersih, Safari Dakwah, dan penyelenggaraan jenazah.</p>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </section>
    </main>
  );
}
