"use client";

import Image from "next/image";
import Navbar from "../components/Navbar";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { FaQuran, FaBook, FaLanguage } from 'react-icons/fa';

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
              Pondok Pesantren YATI
            </h1>
            <p className="text-xl md:text-2xl text-center max-w-2xl mx-4">
              Membentuk Generasi Qurani yang Berakhlak Mulia
            </p>
          </div>
        </motion.div>
      </section>

      {/* About Section */}
      <section className="py-16 px-14 bg-white relative overflow-hidden" ref={aboutRef}>
        <div className="absolute -right-20 -top-20 w-40 h-40 bg-emerald-100 rounded-full opacity-50" />
        <div className="absolute -left-20 -bottom-20 w-40 h-40 bg-blue-100 rounded-full opacity-50" />
        <motion.div className="max-w-6xl mx-auto relative">
          <h2 className="text-3xl font-bold text-center mb-8">Tentang Kami</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-6">
              <div className="flex items-center space-x-4 mb-6">
                <div className="w-1 h-16 bg-emerald-500" />
                <h3 className="text-2xl font-semibold text-gray-800">Visi & Misi</h3>
              </div>
              <p className="text-gray-600 leading-relaxed">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum
              </p>
              <div className="grid grid-cols-2 gap-4 mt-8">
                <div className="p-4 bg-gray-50 rounded-lg border border-gray-100">
                  <h4 className="font-semibold mb-2">Santri Aktif</h4>
                  <p className="text-2xl font-bold text-emerald-600">150+</p>
                </div>
                <div className="p-4 bg-gray-50 rounded-lg border border-gray-100">
                  <h4 className="font-semibold mb-2">Pengajar</h4>
                  <p className="text-2xl font-bold text-emerald-600">42</p>
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
          <h2 className="text-3xl font-bold text-center mb-12">Program Unggulan</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <motion.div 
              whileHover={{ scale: 1.05 }}
              className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 border border-gray-100"
            >
              <div className="text-4xl text-emerald-500 mb-6">
                <FaQuran />
              </div>
              <h3 className="text-xl font-semibold mb-4">Tahfidz Al-Quran</h3>
              <p className="text-gray-600">Program hafalan Al-Quran dengan bimbingan intensif</p>
            </motion.div>
            <motion.div 
              whileHover={{ scale: 1.05 }}
              className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 border border-gray-100"
            >
              <div className="text-4xl text-emerald-500 mb-6">
                <FaBook />
              </div>
              <h3 className="text-xl font-semibold mb-4">Kitab Kuning</h3>
              <p className="text-gray-600">Pembelajaran kitab klasik dengan metode tradisional</p>
            </motion.div>
            <motion.div 
              whileHover={{ scale: 1.05 }}
              className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 border border-gray-100"
            >
              <div className="text-4xl text-emerald-500 mb-6">
                <FaLanguage />
              </div>
              <h3 className="text-xl font-semibold mb-4">Bahasa Arab & Inggris</h3>
              <p className="text-gray-600">Pengembangan kemampuan bahasa internasional</p>
            </motion.div>
          </div>
        </motion.div>
      </section>
    </main>
  );
}
