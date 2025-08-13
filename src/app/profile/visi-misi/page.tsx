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
              Arah dan tujuan Pondok Pesantren YATI dalam membentuk generasi
              yang unggul
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
                  "Terwujudnya siswa yang beriman, bertakwa, berkarakter dan
                  berprestasi"
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
                      title: "Beriman",
                      description:
                        "Memiliki kepercayaan kepada Allah SWT dengan penuh keyakinan dan tanpa keraguan.",
                    },
                    {
                      title: "Bertakwa",
                      description:
                        "Melaksanakan segala perintah dan menjauhi larangan Allah SWT",
                    },
                    {
                      title: "Berkarakter",
                      description:
                        "Memiliki cara berfikir dan berperilaku untuk hidup dan bekerja sama baik dalam lingkup keluarga, masyarakat, agama, bangsa dan negara",
                    },
                    {
                      title: "Berprestasi",
                      description:
                        "Memiliki kualitas yang tinggi dalam penguasaan Iptek dan Imtak serta keterampilan yang berjiwa kompetitif dan Islami",
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
                  "Mewujudkan penyelenggaraan pendidikan yang berorientasi pada mutu, baik pada mutu tenaga pendidik dan kependidikan maupun mutu siswa.",
                  "Mewujudkan manajemen Madrasah yang akuntabiliatas.",
                  "Mewujudkan sumber daya manusia yang cerdas baik intelektual, emosional dan spiritual.",
                  "Penguasaan ilmu-ilmu agama dan umum.",
                  "Mewujudkan sarana dan prasarana yang memadai dan berkualitas sesuai dengan kebutuhan.",
                  "Mewujudkan partisipasi aktif masyarakat terhadap pendidikan Madrasah.",
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
