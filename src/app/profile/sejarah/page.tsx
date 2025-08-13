"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import {
  FaHistory,
  FaGraduationCap,
  FaUserTie,
  FaQuoteLeft,
} from "react-icons/fa";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

export default function Home() {
  const introRef = useRef(null);
  const milestoneRef = useRef(null);
  const leadershipRef = useRef(null);

  const isIntroInView = useInView(introRef);
  const isMilestoneInView = useInView(milestoneRef);
  const isLeadershipInView = useInView(leadershipRef);

  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
      },
    },
  };
  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-gradient-to-b from-slate-50 to-white py-16 px-4">
        <div className="max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-emerald-600 to-blue-600 bg-clip-text text-transparent mb-6">
              Sejarah Pondok Pesantren YATI
            </h1>
            <div className="w-24 h-1 bg-gradient-to-r from-emerald-500 to-blue-500 mx-auto rounded-full mb-4" />
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              Perjalanan panjang dalam membentuk generasi Islam yang unggul
            </p>
          </motion.div>

          {/* Introduction Section */}
          <motion.div
            ref={introRef}
            initial="hidden"
            animate={isIntroInView ? "visible" : "hidden"}
            variants={{
              visible: { transition: { staggerChildren: 0.2 } },
            }}
            className="bg-white rounded-2xl shadow-xl p-8 md:p-10 backdrop-blur-sm border border-gray-100 relative overflow-hidden mb-16"
          >
            <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-emerald-100/20 to-transparent rounded-full blur-3xl" />
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-gradient-to-tr from-blue-100/20 to-transparent rounded-full blur-3xl" />

            <motion.div
              variants={fadeInUp}
              className="flex items-center gap-4 mb-8 relative"
            >
              <div className="w-16 h-16 bg-gradient-to-br from-emerald-500 to-emerald-600 rounded-2xl flex items-center justify-center shadow-lg transform hover:rotate-6 transition-transform duration-300">
                <FaHistory className="text-2xl text-white" />
              </div>
              <h2 className="text-3xl font-bold bg-gradient-to-r from-emerald-600 to-emerald-800 bg-clip-text text-transparent">
                Awal Mula
              </h2>
            </motion.div>
            <motion.div
              variants={fadeInUp}
              className="relative mb-12 p-8 bg-gradient-to-br from-emerald-50 to-blue-50 rounded-xl"
            >
              <FaQuoteLeft className="absolute -top-4 -left-2 text-4xl text-emerald-200" />
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                Berdirinya Pondok Pesantren dilatarbelakangi dengan adanya
                pengajian–pengajian yang dilakukan di Surau dalam bentuk
                halakah. Pengajian ini banyak mendapat tanggapan baik dari
                masyarakat. Dari sinilah mulai munculnya ide untuk mendirikan
                suatu Madrasah.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                Setelah hasil musyawarah Buya bersama adik ipar beliau, H.
                Mahmud Dt. Sati (lebih dikenal dengan Inyiak Palo Pauh) yang
                menjabat sebagai Kapalo Nagari, dan mendapat dukungan besar dari
                masyarakat, maka didirikan suatu gedung Madrasah yang diresmikan
                pada tanggal{" "}
                <span className="font-bold text-emerald-600">
                  30 Maret 1930
                </span>
                , yang diberi nama MTI Kampung Baru Kamang Mudik.
              </p>
            </motion.div>
          </motion.div>

          {/* Milestone Section */}
          <motion.div
            ref={milestoneRef}
            initial="hidden"
            animate={isMilestoneInView ? "visible" : "hidden"}
            variants={{
              visible: { transition: { staggerChildren: 0.2 } },
            }}
            className="bg-white rounded-2xl shadow-xl p-8 md:p-10 backdrop-blur-sm border border-gray-100 relative overflow-hidden mb-16"
          >
            <div className="absolute top-0 left-0 w-64 h-64 bg-gradient-to-br from-blue-100/20 to-transparent rounded-full blur-3xl" />
            <div className="absolute bottom-0 right-0 w-64 h-64 bg-gradient-to-tr from-emerald-100/20 to-transparent rounded-full blur-3xl" />

            <motion.div
              variants={fadeInUp}
              className="flex items-center gap-4 mb-8 relative"
            >
              <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center shadow-lg transform hover:rotate-6 transition-transform duration-300">
                <FaGraduationCap className="text-2xl text-white" />
              </div>
              <h2 className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent">
                Perkembangan
              </h2>
            </motion.div>

            <motion.div variants={fadeInUp} className="space-y-6">
              <div className="relative pl-8 before:absolute before:left-0 before:top-0 before:h-full before:w-1 before:bg-gradient-to-b before:from-emerald-500 before:to-blue-500 before:rounded-full">
                <h3 className="font-bold text-xl mb-3 text-gray-800">
                  1937 - Lulusan Pertama
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  Tamatan pertama telah menghasilkan tokoh-tokoh yang berhasil
                  di masyarakat, termasuk Saibi Tuanku Sinaro, Jaonan, Tuanku
                  Kari, dan lainnya yang menjadi guru, Hakim Pengadilan Agama,
                  serta panutan dalam masyarakat.
                </p>
              </div>
              <div className="relative pl-8 before:absolute before:left-0 before:top-0 before:h-full before:w-1 before:bg-gradient-to-b before:from-emerald-500 before:to-blue-500 before:rounded-full">
                <h3 className="font-bold text-xl mb-3 text-gray-800">
                  1962 - Pembentukan Yayasan
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  MTI Kampung Baru dikelola oleh Yayasan Tarbiyah Islamiyah
                  (YATI) dengan tiga jenjang pendidikan: Madrasah Ibtidaiyah,
                  Tsanawiyah, dan Aliyah.
                </p>
              </div>
              <div className="relative pl-8 before:absolute before:left-0 before:top-0 before:h-full before:w-1 before:bg-gradient-to-b before:from-emerald-500 before:to-blue-500 before:rounded-full">
                <h3 className="font-bold text-xl mb-3 text-gray-800">
                  1979 - Reformasi Pendidikan
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  Penyesuaian sistem pendidikan dengan masa belajar 6 tahun: 3
                  tahun untuk tingkat Tsanawiyah dan 3 tahun untuk tingkat
                  Aliyah.
                </p>
              </div>
            </motion.div>
          </motion.div>

          {/* Leadership Section */}
          <motion.div
            ref={leadershipRef}
            initial="hidden"
            animate={isLeadershipInView ? "visible" : "hidden"}
            variants={{
              visible: { transition: { staggerChildren: 0.1 } },
            }}
            className="bg-white rounded-2xl shadow-xl p-8 md:p-10 backdrop-blur-sm border border-gray-100 relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-emerald-100/20 to-transparent rounded-full blur-3xl" />
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-gradient-to-tr from-blue-100/20 to-transparent rounded-full blur-3xl" />

            <motion.div
              variants={fadeInUp}
              className="flex items-center gap-4 mb-12 relative"
            >
              <div className="w-16 h-16 bg-gradient-to-br from-emerald-500 to-emerald-600 rounded-2xl flex items-center justify-center shadow-lg transform hover:rotate-6 transition-transform duration-300">
                <FaUserTie className="text-2xl text-white" />
              </div>
              <h2 className="text-3xl font-bold bg-gradient-to-r from-emerald-600 to-emerald-800 bg-clip-text text-transparent">
                Kepemimpinan
              </h2>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                {
                  name: "H. Buya Mansur Dt. Nagari Basa",
                  role: "Pendiri",
                  period: "1930 - 1945",
                  image: "/placeholder-leader.jpg",
                },
                {
                  name: "H. Abdul Manaf Idris",
                  role: "Pimpinan",
                  period: "1945 - 1955",
                  image: "/placeholder-leader.jpg",
                },
                {
                  name: "A. Tuangku Sati",
                  role: "Pimpinan",
                  period: "1955 - 1965",
                  image: "/placeholder-leader.jpg",
                },
                {
                  name: "Hj. Nurza Mahmud",
                  role: "Pimpinan",
                  period: "1965 - 1975",
                  image: "/placeholder-leader.jpg",
                },
                {
                  name: "Muhammad Nasir",
                  role: "Pimpinan",
                  period: "1975 - 1985",
                  image: "/placeholder-leader.jpg",
                },
                {
                  name: "Drs. Abdurrahman",
                  role: "Pimpinan",
                  period: "1985 - 1995",
                  image: "/placeholder-leader.jpg",
                },
                {
                  name: "Dra. Emilya Husteti",
                  role: "Pimpinan",
                  period: "1995 - 2000",
                  image: "/placeholder-leader.jpg",
                },
                {
                  name: "Junaidi, S.Pd. I",
                  role: "Pimpinan",
                  period: "2000 - 2005",
                  image: "/placeholder-leader.jpg",
                },
                {
                  name: "Drs. Ramza Husmen, M.Pd",
                  role: "Pimpinan",
                  period: "2005 - 2010",
                  image: "/placeholder-leader.jpg",
                },
                {
                  name: "Hj. Suarni, S. Pd. I",
                  role: "Pimpinan",
                  period: "2010 - 2015",
                  image: "/placeholder-leader.jpg",
                },
                {
                  name: "Fetriwati, S.Ag. M.Pd",
                  role: "Pimpinan",
                  period: "2015 - 2018",
                  image: "/placeholder-leader.jpg",
                },
                {
                  name: "Welli Okmira, S.Pd.I",
                  role: "Pimpinan",
                  period: "2018 - 2020",
                  image: "/public/foto/Welli Okmira.jpg",
                },
                {
                  name: "Drs. H. Chairul Huda",
                  role: "Pimpinan",
                  period: "2020 - Sekarang",
                  image: "/placeholder-leader.jpg",
                },
              ].map((leader, index) => (
                <motion.div
                  key={index}
                  variants={fadeInUp}
                  whileHover={{ y: -5 }}
                  className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-all duration-300 border border-gray-100 group"
                >
                  <div className="w-full h-48 mb-4 rounded-lg bg-gray-100 overflow-hidden">
                    <div className="w-full h-full bg-gradient-to-br from-emerald-100 to-blue-50 flex items-center justify-center">
                      <FaUserTie className="text-4xl text-emerald-300" />
                    </div>
                  </div>
                  <h3 className="font-bold text-lg text-gray-800 mb-1 group-hover:text-emerald-600 transition-colors">
                    {leader.name}
                  </h3>
                  <p className="text-emerald-600 font-medium mb-1">
                    {leader.role}
                  </p>
                  <p className="text-sm text-gray-500">{leader.period}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </main>
      <Footer />
    </>
  );
}
