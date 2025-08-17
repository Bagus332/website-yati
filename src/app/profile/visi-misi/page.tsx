"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { useRef } from "react";
import {
  FaEye,
  FaCrosshairs,
  FaLightbulb,
  FaStar,
  FaQuoteLeft,
} from "react-icons/fa";
import { motion, useInView } from "framer-motion";

export default function Home() {
  const visiRef = useRef(null);
  const misiRef = useRef(null);
  const isVisiInView = useInView(visiRef);
  const isMisiInView = useInView(misiRef);

  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
    },
    transition: {
      duration: 0.5,
      ease: "easeInOut",
    },
  };

  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-gradient-to-b from-slate-50 to-white py-16 px-4">
        <div className="max-w-5xl mx-auto">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-emerald-600 to-blue-600 bg-clip-text text-transparent mb-6">
              Visi & Misi
            </h1>
            <div className="w-24 h-1 bg-gradient-to-r from-emerald-500 to-blue-500 mx-auto rounded-full mb-4" />
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              Arah dan tujuan Madrasah Aliyah Swasta (MAS) YATI Kamang Mudik
              dalam membentuk generasi yang unggul
            </p>
          </motion.div>

          {/* Vision Section */}
          <section ref={visiRef} className="mb-16 relative">
            <motion.div
              initial="hidden"
              animate={isVisiInView ? "visible" : "hidden"}
              variants={{
                visible: { transition: { staggerChildren: 0.2 } },
              }}
              className="bg-white rounded-2xl shadow-xl p-8 md:p-10 backdrop-blur-sm border border-gray-100 relative overflow-hidden"
            >
              {/* Decorative Background */}
              <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-emerald-100/20 to-transparent rounded-full blur-3xl" />
              <div className="absolute bottom-0 left-0 w-64 h-64 bg-gradient-to-tr from-blue-100/20 to-transparent rounded-full blur-3xl" />

              <motion.div
                variants={fadeInUp}
                className="flex items-center gap-4 mb-8 relative"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-emerald-500 to-emerald-600 rounded-2xl flex items-center justify-center shadow-lg transform hover:rotate-6 transition-transform duration-300">
                  <FaEye className="text-2xl text-white" />
                </div>
                <h2 className="text-3xl font-bold bg-gradient-to-r from-emerald-600 to-emerald-800 bg-clip-text text-transparent">
                  Visi
                </h2>
              </motion.div>

              <motion.div
                variants={fadeInUp}
                className="relative mb-12 p-8 bg-gradient-to-br from-emerald-50 to-blue-50 rounded-xl"
              >
                <FaQuoteLeft className="absolute -top-4 -left-2 text-4xl text-emerald-200" />
                <p className="text-2xl md:text-3xl text-gray-700 font-medium leading-relaxed">
                  "Terbentuknya Generasi Islami, moderat, Unggul dalam Iptek
                  Serta Terampil Berkarya"
                </p>
              </motion.div>

              <motion.div
                variants={fadeInUp}
                className="bg-gray-50 rounded-xl p-6 md:p-8"
              >
                <div className="flex items-center gap-3 mb-8">
                  <FaLightbulb className="text-2xl text-emerald-500" />
                  <h3 className="text-xl font-bold text-gray-800">
                    Indikator Visi
                  </h3>
                </div>
                <div className="grid md:grid-cols-2 gap-6">
                  {[
                    {
                      title: "Generasi Islami",
                      description:
                        "Taat menjalankan ibadah, berakhlakul karimah, fasih membaca Alquran dan memahami maknanya, serta mampu menjadi imam salat dan memimpin kegiatan keagamaan. Selain itu, hafal Juz 4, 5, 6 dan surat-surat populer lainnya, serta mampu mengamalkan doa dan zikir setelah salat.",
                    },
                    {
                      title: "Unggul Dalam Iptek",
                      description:
                        "Berprestasi dalam bidang akademik dan non-akademik, mampu mengoperasikan program komputer, dan mengikuti perkembangan teknologi, terutama IT.",
                    },
                    {
                      title: "Terampil Berkarya",
                      description:
                        "Mandiri dalam kegiatan madrasah, keluarga, dan masyarakat, serta mampu membuat dan mengembangkan berbagai keterampilan yang produktif.",
                    },
                  ].map((item, index) => (
                    <motion.div
                      key={index}
                      variants={fadeInUp}
                      whileHover={{ y: -5 }}
                      className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-all duration-300 border border-gray-100 group"
                    >
                      <h4 className="font-bold text-emerald-600 mb-3 text-lg group-hover:text-emerald-700 transition-colors">
                        {item.title}
                      </h4>
                      <p className="text-gray-600 leading-relaxed group-hover:text-gray-700">
                        {item.description}
                      </p>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </motion.div>
          </section>

          {/* Mission Section */}
          <section ref={misiRef} className="relative">
            <motion.div
              initial="hidden"
              animate={isMisiInView ? "visible" : "hidden"}
              variants={{
                visible: { transition: { staggerChildren: 0.2 } },
              }}
              className="bg-white rounded-2xl shadow-xl p-8 md:p-10 backdrop-blur-sm border border-gray-100 relative overflow-hidden"
            >
              {/* Decorative Background */}
              <div className="absolute top-0 left-0 w-64 h-64 bg-gradient-to-br from-blue-100/20 to-transparent rounded-full blur-3xl" />
              <div className="absolute bottom-0 right-0 w-64 h-64 bg-gradient-to-tr from-emerald-100/20 to-transparent rounded-full blur-3xl" />

              <motion.div
                variants={fadeInUp}
                className="flex items-center gap-4 mb-8 relative"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center shadow-lg transform hover:rotate-6 transition-transform duration-300">
                  <FaCrosshairs className="text-2xl text-white" />
                </div>
                <h2 className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent">
                  Misi
                </h2>
              </motion.div>

              <motion.div variants={fadeInUp} className="grid gap-4">
                {[
                  "Melaksanakan pembelajaran PAIKEMI dan bermakna melalui pendekatan Saintifik dan Abad 21 dengan metode MIKiR (mengamati, interaksi, komunikasi dan refleksi) yang dapat menumbuhkembangkan siswa secara maksimal untuk mencapai generasi Islam.",
                  "Melaksanakan pembelajaran profesional dan bermakna melalui pendekatan Saintifik dan Abad 21 dengan metode MIKiR yang dapat menumbuhkembangkan potensi siswa untuk menguasai Iptek dan berakhlakul karimah.",
                  "Menumbuhkan penghayatan dan pengamalan siswa terhadap ajaran agama Islam Ahlussunah Wal Jama’ah.",
                  "Melaksanakan program bimbingan untuk mengoptimalkan potensi yang dimiliki siswa agar menjadi pribadi yang kreatif dan mandiri.",
                  "Melaksanakan pengelolaan madrasah dengan manajemen partisipatif, profesional, dan kreatif berlandaskan nilai-nilai islami.",
                  "Melaksanakan program ekstrakurikuler untuk pengembangan bakat, minat, dan kreativitas siswa secara efektif.",
                  "Bekerja sama dengan stakeholder dan berbagai lembaga untuk mengembangkan madrasah.",
                ].map((mission, index) => (
                  <motion.div
                    key={index}
                    variants={fadeInUp}
                    whileHover={{ scale: 1.02, x: 5 }}
                    className="flex items-start gap-4 p-6 bg-gradient-to-r from-blue-50 to-emerald-50 rounded-xl hover:shadow-md transition-all duration-300 group"
                  >
                    <div className="mt-1 transform group-hover:rotate-12 transition-transform duration-300">
                      <FaStar className="text-blue-500" />
                    </div>
                    <p className="text-gray-700 leading-relaxed">{mission}</p>
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>
          </section>
        </div>
      </main>
      <Footer />
    </>
  );
}
