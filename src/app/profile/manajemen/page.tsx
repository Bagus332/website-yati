"use client";

import { JSX } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { FaUserTie, FaUsers, FaBook, FaMoneyBillWave } from "react-icons/fa";
import { motion } from "framer-motion";

type ManagementItem = {
  title: string;
  icon: JSX.Element;
  description: string;
  level: number;
  parent?: string;
};

// Komponen untuk setiap kartu manajemen
const ManagementCard = ({ item }: { item: ManagementItem }) => (
  <motion.div
    whileHover={{ y: -5, scale: 1.05 }}
    className="text-center w-full md:w-64"
  >
    <div className="p-6 bg-gradient-to-br from-blue-500 to-cyan-500 text-white rounded-2xl shadow-xl h-full flex flex-col items-center justify-center">
      <div className="w-20 h-20 mx-auto mb-4 bg-white/20 rounded-full flex items-center justify-center text-4xl">
        {item.icon}
      </div>
      <h3 className="text-md font-semibold">{item.title.split(" - ")[0]}</h3>
      <p className="text-xs opacity-90">{item.title.split(" - ")[1]}</p>
    </div>
  </motion.div>
);

export default function Home() {
  const managementStructure: ManagementItem[] = [
    {
      title: "Pembina Yayasan - H. Edi Mahmud",
      icon: <FaUserTie />,
      description: "Membina dan mengarahkan kebijakan strategis.",
      level: 1,
    },
    {
      title: "Ketua Yayasan - Drs. H. Ramza Husmen, M.Pd",
      icon: <FaUserTie />,
      description: "Memimpin yayasan dan memastikan visi-misi tercapai.",
      level: 1,
    },
    {
      title: "Pimpinan Pondok - Mhd. Padhil, S.Pd",
      icon: <FaUserTie />,
      description: "Mengelola seluruh kegiatan pesantren.",
      level: 2,
      parent: "Ketua Yayasan",
    },
    {
      title: "Ketua Komite - Sirajul Munir, S.Ag",
      icon: <FaUsers />,
      description: "Memberikan dukungan strategis.",
      level: 2,
      parent: "Pembina Yayasan",
    },
    {
      title: "Kepala MA - Delvianti, M.Pd",
      icon: <FaBook />,
      description: "Mengelola pendidikan tingkat Aliyah.",
      level: 3,
      parent: "Pimpinan Pondok",
    },
    {
      title: "Kepala MTs - Welli Okmira, M.Pd",
      icon: <FaBook />,
      description: "Mengelola pendidikan tingkat Tsanawiyah.",
      level: 3,
      parent: "Pimpinan Pondok",
    },
    {
      title: "Waka Kurikulum - Yenni Firda, S.Pd",
      icon: <FaBook />,
      description: "Mengembangkan kurikulum pendidikan.",
      level: 4,
      parent: "Kepala Madrasah",
    },
    {
      title: "Bendahara - Putri Nurhasanah, S.Pd",
      icon: <FaMoneyBillWave />,
      description: "Mengelola keuangan dan administrasi.",
      level: 4,
      parent: "Pimpinan Pondok",
    },
  ];

  const getLevelItems = (level: number) =>
    managementStructure.filter((item) => item.level === level);

  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-gradient-to-b from-blue-50 to-white font-sans">
        <div className="fixed inset-0 opacity-[0.02] pointer-events-none">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_25%_25%,_theme(colors.blue.500)_0%,_transparent_50%)]" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_75%_75%,_theme(colors.cyan.500)_0%,_transparent_50%)]" />
        </div>
        <div className="container mx-auto py-24 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <span className="inline-block bg-gradient-to-r from-blue-100 to-cyan-100 text-blue-800 px-6 py-3 rounded-full text-sm font-bold uppercase tracking-wider mb-6">
                Tata Kelola
              </span>
              <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent mb-6">
                Manajemen Pondok Pesantren YATI
              </h1>
              <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-cyan-500 mx-auto rounded-full" />
            </div>

            <div className="flex flex-col items-center bg-white/70 backdrop-blur-lg p-8 rounded-[2.5rem] shadow-2xl border-2 border-blue-100/60">
              {/* Level 1: Yayasan */}
              <div className="flex flex-col md:flex-row justify-center gap-6 md:gap-24 mb-6">
                {getLevelItems(1).map((item, index) => (
                  <ManagementCard key={index} item={item} />
                ))}
              </div>

              {/* Garis Penghubung ke Level 2 */}
              <div className="w-px h-16 bg-gradient-to-b from-cyan-400 to-cyan-400 my-4"></div>

              {/* Level 2: Pimpinan & Komite */}
              <div className="flex flex-col md:flex-row justify-around gap-6 md:gap-16 w-full mb-6">
                {getLevelItems(2).map((item, index) => (
                  <ManagementCard key={index} item={item} />
                ))}
              </div>

              {/* Garis Penghubung ke Level 3 */}
              <div className="w-px h-16 bg-gradient-to-b from-cyan-400 to-cyan-400 my-4"></div>

              {/* Level 3: Kepala Madrasah */}
              <div className="flex flex-col md:flex-row justify-center gap-6 md:gap-16 w-full mb-6">
                {getLevelItems(3).map((item, index) => (
                  <ManagementCard key={index} item={item} />
                ))}
              </div>

              {/* Garis Penghubung ke Level 4 */}
              <div className="w-px h-16 bg-gradient-to-b from-cyan-400 to-cyan-400 my-4"></div>

              {/* Level 4: Waka & Bendahara */}
              <div className="flex flex-col md:flex-row justify-around gap-6 md:gap-16 w-full">
                {getLevelItems(4).map((item, index) => (
                  <ManagementCard key={index} item={item} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
