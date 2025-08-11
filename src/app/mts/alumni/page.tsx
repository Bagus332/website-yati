"use client";

import Navbar from "@/components/Navbar";
import Image from "next/image";
import { motion } from "framer-motion";
import { useRef } from "react";
import { useInView } from "framer-motion";
import { FaGraduationCap, FaStar, FaQuoteLeft } from "react-icons/fa";

const alumniList = [
  {
    name: "Ahmad Fauzi, S.Pd.I",
    photo: "/alumni1.jpg",
    angkatan: "2005",
    pekerjaan: "Guru & Pengasuh Pesantren",
    quote:
      "Pondok Pesantren YATI membentuk karakter dan akhlak saya. Ilmu yang saya dapatkan menjadi bekal berharga dalam kehidupan bermasyarakat.",
  },
  {
    name: "Nurul Aini, S.H.",
    photo: "/alumni2.jpg",
    angkatan: "2010",
    pekerjaan: "Pengacara",
    quote:
      "Lingkungan pesantren yang religius dan penuh kekeluargaan membuat saya siap menghadapi tantangan dunia kerja.",
  },
  {
    name: "Rizki Ramadhan, S.Kom",
    photo: "/alumni3.jpg",
    angkatan: "2012",
    pekerjaan: "Software Engineer",
    quote:
      "Belajar di YATI bukan hanya soal ilmu agama, tapi juga membangun soft skill dan kepemimpinan.",
  },
];

export default function AlumniPage() {
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
        className="relative h-[60vh] flex items-center justify-center overflow-hidden"
        ref={heroRef}
      >
        <Image
          src="/alumni-hero.jpg"
          alt="Alumni YATI"
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
            Alumni YATI
          </h1>
          <p className="text-lg md:text-2xl font-light max-w-2xl mx-auto text-emerald-100">
            Jejak langkah para alumni yang menginspirasi dan berkontribusi untuk
            negeri.
          </p>
        </motion.div>
      </section>

      {/* Statistik Alumni */}
      <section className="py-16 px-6 lg:px-14 max-w-7xl mx-auto">
        <motion.div
          variants={fadeInUp}
          initial="initial"
          animate="animate"
          className="grid md:grid-cols-3 gap-8 text-center mb-16"
        >
          <div className="bg-gradient-to-br from-emerald-500 to-emerald-600 p-8 rounded-2xl text-white shadow-xl">
            <FaGraduationCap className="text-4xl mx-auto mb-3" />
            <div className="text-3xl font-black">2.300+</div>
            <div className="font-semibold">Total Alumni</div>
          </div>
          <div className="bg-gradient-to-br from-blue-500 to-blue-600 p-8 rounded-2xl text-white shadow-xl">
            <FaStar className="text-4xl mx-auto mb-3" />
            <div className="text-3xl font-black">50+</div>
            <div className="font-semibold">Profesi Beragam</div>
          </div>
          <div className="bg-gradient-to-br from-emerald-400 to-blue-400 p-8 rounded-2xl text-white shadow-xl">
            <FaGraduationCap className="text-4xl mx-auto mb-3" />
            <div className="text-3xl font-black">30+</div>
            <div className="font-semibold">Angkatan Lulusan</div>
          </div>
        </motion.div>

        {/* Testimoni Alumni */}
        <motion.div
          variants={fadeInUp}
          initial="initial"
          animate="animate"
          className="mb-20"
        >
          <h2 className="text-3xl md:text-5xl font-bold text-center bg-gradient-to-r from-emerald-600 to-blue-600 bg-clip-text text-transparent mb-12">
            Kisah & Testimoni Alumni
          </h2>
          <div className="grid md:grid-cols-3 gap-10">
            {alumniList.map((alumni) => (
              <motion.div
                key={alumni.name}
                whileHover={{ y: -8, scale: 1.03 }}
                className="bg-white rounded-3xl shadow-xl border border-gray-100 p-8 flex flex-col items-center text-center relative"
              >
                <div className="relative w-24 h-24 mb-4">
                  <Image
                    src={alumni.photo}
                    alt={alumni.name}
                    fill
                    className="object-cover rounded-full border-4 border-emerald-200 shadow-lg"
                  />
                </div>
                <div className="mb-2 font-bold text-lg text-gray-800">
                  {alumni.name}
                </div>
                <div className="text-sm text-emerald-600 mb-1">
                  Angkatan {alumni.angkatan}
                </div>
                <div className="text-sm text-gray-500 mb-4">
                  {alumni.pekerjaan}
                </div>
                <div className="relative">
                  <FaQuoteLeft className="absolute -left-6 -top-2 text-emerald-200 text-2xl" />
                  <p className="italic text-gray-700">{alumni.quote}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Ajakan Bergabung */}
        <motion.div
          variants={fadeInUp}
          initial="initial"
          animate="animate"
          className="text-center mt-20"
        >
          <h3 className="text-2xl md:text-3xl font-bold mb-4 text-gray-800">
            Bergabung dengan Ikatan Alumni YATI
          </h3>
          <p className="text-gray-600 mb-6 max-w-xl mx-auto">
            Jadilah bagian dari keluarga besar alumni YATI. Dukung dan
            berkontribusi untuk kemajuan pesantren dan masyarakat.
          </p>
          <a
            href="mailto:mti.yati@yahoo.com"
            className="inline-block bg-gradient-to-r from-emerald-500 to-blue-500 text-white px-8 py-3 rounded-full font-bold shadow-lg hover:scale-105 transition-transform"
          >
            Hubungi Kami
          </a>
        </motion.div>
      </section>
    </main>
  );
}
