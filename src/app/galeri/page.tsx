"use client";

import Navbar from "@/components/Navbar";
import Image from "next/image";
import { motion } from "framer-motion";
import { useRef } from "react";
import { useInView } from "framer-motion";

const galleryImages = [
  { src: "/galeri1.jpg", alt: "Kegiatan Pesantren 1" },
  { src: "/galeri2.jpg", alt: "Kegiatan Pesantren 2" },
  { src: "/galeri3.jpg", alt: "Kegiatan Pesantren 3" },
  { src: "/galeri4.jpg", alt: "Kegiatan Pesantren 4" },
  { src: "/galeri5.jpg", alt: "Kegiatan Pesantren 5" },
  { src: "/galeri6.jpg", alt: "Kegiatan Pesantren 6" },
];

export default function GaleriPage() {
  const heroRef = useRef(null);
  const isHeroInView = useInView(heroRef, { once: true });

  const fadeInUp = {
    initial: { opacity: 0, y: 60 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.8, ease: "easeOut" },
  };

  return (
    <main className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
      {/* Navbar */}
      <Navbar />

      {/* Hero Section */}
      <section
        className="relative h-[50vh] flex items-center justify-center overflow-hidden"
        ref={heroRef}
      >
        <Image
          src="/galeri-hero.jpg"
          alt="Galeri Kegiatan"
          fill
          className="object-cover brightness-[0.4] scale-105"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/40 to-black/70" />
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isHeroInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
          className="relative z-10 text-center text-white px-4"
        >
          <h1 className="text-4xl md:text-6xl font-black mb-4 bg-gradient-to-r from-emerald-200 via-blue-100 to-emerald-200 bg-clip-text text-transparent drop-shadow-2xl">
            Galeri Kegiatan
          </h1>
          <p className="text-lg md:text-2xl font-light max-w-2xl mx-auto text-emerald-100">
            Mengabadikan momen berharga di Pondok Pesantren YATI.
          </p>
        </motion.div>
      </section>

      {/* Galeri Foto */}
      <section className="py-16 px-6 lg:px-14 max-w-7xl mx-auto">
        <motion.div
          variants={fadeInUp}
          initial="initial"
          animate="animate"
          className="mb-12 text-center"
        >
          <h2 className="text-3xl md:text-5xl font-bold bg-gradient-to-r from-emerald-600 to-blue-600 bg-clip-text text-transparent">
            Momen Istimewa
          </h2>
          <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
            Dokumentasi kegiatan pondok, mulai dari pembelajaran, acara tahunan,
            hingga aktivitas sehari-hari santri.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
          {galleryImages.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              className="overflow-hidden rounded-2xl shadow-lg border border-gray-100 group cursor-pointer"
            >
              <div className="relative w-full h-64">
                <Image
                  src={item.src}
                  alt={item.alt}
                  fill
                  className="object-cover transform group-hover:scale-110 transition-transform duration-500"
                />
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Ajakan Upload / Berbagi Foto */}
      <motion.section
        variants={fadeInUp}
        initial="initial"
        animate="animate"
        className="text-center py-20 bg-gradient-to-r from-emerald-500 to-blue-500 text-white"
      >
        <h3 className="text-2xl md:text-3xl font-bold mb-4">
          Punya Foto Kegiatan di YATI?
        </h3>
        <p className="mb-6 max-w-xl mx-auto">
          Kirim foto-foto kegiatanmu untuk menjadi bagian dari galeri kami dan
          berbagi inspirasi dengan semua.
        </p>
        <a
          href="mailto:mti.yati@yahoo.com"
          className="inline-block bg-white text-emerald-700 px-8 py-3 rounded-full font-bold shadow-lg hover:scale-105 transition-transform"
        >
          Kirim Foto
        </a>
      </motion.section>
    </main>
  );
}
