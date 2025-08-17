"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Image from "next/image";
import { motion } from "framer-motion";

type StaffItem = {
  title: string;
  photo: string;
  jabatan: string;
};

export default function TendikTsanawiyah() {
  const tsanawiyahTendik: StaffItem[] = [
    {
      title: "Welli Okmira, M.Pd",
      jabatan: "Kepala Madrasah Tsanawiyah",
      photo: "/foto/Welli Okmira.jpg",
    },
    {
      title: "Mhd Padhil, S.Pd",
      jabatan: "Waka Kurikulum & Guru Matematika",
      photo: "/foto/Mhd Padhil.jpg",
    },
    {
      title: "Putri Nurhasanah, S.Pd",
      jabatan: "Waka Kesiswaan & Bendahara & Guru BK",
      photo: "/foto/Putri Nurhasanah.jpg",
    },
    {
      title: "Gito Prabowo, S.Pd",
      jabatan: "Tata Usaha & Guru TIK & PJOK",
      photo: "/foto/Gito Prabowo.jpg",
    },
    {
      title: "Meldawati, S.Pd.I",
      jabatan: "Kepala Perpustakaan & Guru SKI dan Akhidah Akhlak",
      photo: "/foto/Meldawati.jpg",
    },
    {
      title: "Refda Yetti, S.Pd I",
      jabatan: "Kepala Labor Keagamaan & Guru Al Qur'an Hadist dan Fikih",
      photo: "/foto/Refda Yetti.jpg",
    },
    {
      title: "Azkia Rahmi, S.Ag",
      jabatan: "Wali Kelas 7 & Guru Tauhid dan Hadist",
      photo: "/foto/Azkia Rahmi.jpg",
    },
    {
      title: "Putri Rahmadhani, S.Pd",
      jabatan: "Wali Kelas 8 & Guru Bahasa Indonesia",
      photo: "/foto/Putri Ramadhani.jpg",
    },
    {
      title: "Arbaiysah, S.Pd",
      jabatan: "Wali Kelas 9 & Guru IPA Terpadu",
      photo: "/foto/Arbaisyah.jpg",
    },
    {
      title: "Silhein, S.Pd",
      jabatan: "Guru IPS Terpadu",
      photo: "/foto/Arbaisyah.jpg",
    },
    {
      title: "Marlina, S.Pd",
      jabatan: "Guru Bahasa Inggris",
      photo: "/foto/Marlina.jpg",
    },
    {
      title: "Lilvia, S.Pd.I",
      jabatan: "Guru Bahasa Arab",
      photo: "/foto/Lilvia.jpg",
    },
    {
      title: "Zul Efendi, S.Pd",
      jabatan: "Guru Tasawuf",
      photo: "/foto/Zul Efendi.jpg",
    },
    {
      title: "Junia Safreni",
      jabatan: "Guru Nahwu",
      photo: "/vorg.jpg",
    },
    {
      title: "Fahmi Hafizha O, S.Pd",
      jabatan: "Guru Tarekh",
      photo: "/foto/Fahmi Hafizha.jpeg",
    },
    {
      title: "Firdaus, SH",
      jabatan: "Guru Keterampilan Agama",
      photo: "/foto/Firdaus.jpg",
    },
    {
      title: "Muhammad Sabri, SH",
      jabatan: "Guru Fikih Khitab",
      photo: "/foto/Muhammad Sabri.jpg",
    },
    {
      title: "Nini Arianti, S Thi",
      jabatan: "Guru Sharaf",
      photo: "/vorg.jpg",
    },
    {
      title: "Debi Amanda, S.Pd.I",
      jabatan: "Guru Tahfidz",
      photo: "/foto/debi amanda.jpg",
    },
  ];

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
                Staf & Pengajar
              </span>
              <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent mb-6">
                Tenaga Kependidikan Madrasah Tsanawiyah
              </h1>
              <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-cyan-500 mx-auto rounded-full" />
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
              {tsanawiyahTendik.map((item, index) => (
                <motion.div
                  key={index}
                  whileHover={{ y: -8, scale: 1.05 }}
                  className="group text-center bg-white/70 backdrop-blur-lg p-6 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 border border-blue-100/60"
                >
                  <div className="relative w-32 h-32 mx-auto mb-4">
                    <Image
                      src={item.photo}
                      alt={item.title}
                      fill
                      className="object-cover rounded-full border-4 border-white shadow-md group-hover:border-cyan-200 transition-colors"
                      onError={(e) => (e.currentTarget.src = "/vorg.jpg")}
                    />
                  </div>
                  <h4 className="text-md font-bold text-gray-800 mb-1">
                    {item.title}
                  </h4>
                  <p className="text-sm text-blue-600 font-medium">
                    {item.jabatan}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
