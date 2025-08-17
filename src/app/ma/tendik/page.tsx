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

export default function TendikAliyah() {
  const aliyahTendik: StaffItem[] = [
    {
      title: "Delvianti, M.Pd",
      jabatan: "Kepala Madrasah Aliyah",
      photo: "/foto/kepala MAS YATI KAMANG MUDIK.jpg",
    },
    {
      title: "Yenni Firda, S.Pd",
      jabatan: "Waka Kurikulum & Guru Ekonomi",
      photo: "/foto/yeni firda.jpg",
    },
    {
      title: "Mhd. Sabri, SH",
      jabatan: "Waka Kesiswaan & Guru Fikih Khitab",
      photo: "/foto/Muhammad Sabri.jpg",
    },
    {
      title: "Yufita Indriani, S.Pd",
      jabatan: "Tata Usaha & Guru TIK",
      photo: "/foto/Yuftia Indri.png",
    },
    {
      title: "Putri Nurhasanah, S.Pd",
      jabatan: "Bendahara & Guru BK",
      photo: "/foto/Putri Nurhasanah.jpg",
    },
    {
      title: "Asmawati, S.Pd.I",
      jabatan: "Kepala Perpustakaan",
      photo: "/foto/asmawati ok.jpg",
    },
    {
      title: "Nurrahmi Lathifa, M.Pd",
      jabatan: "Wali Kelas 10 & Guru Tahfidz",
      photo: "/vorg.jpg",
    },
    {
      title: "Yusnetti, SH",
      jabatan: "Wali Kelas 11 & Guru Sosiologi",
      photo: "/foto/yusnetti oke.jpg",
    },
    {
      title: "Aufi Afifah Rifki TM, S.Pd",
      jabatan: "Wali Kelas 12 & Guru PKN",
      photo: "/foto/aufi afifa rifki.jpg",
    },
    {
      title: "Zul Efendi, S.Pd",
      jabatan: "Guru Ushul Fiqh",
      photo: "/foto/Zul Efendi.jpg",
    },
    {
      title: "Debi Amanda, S.Pd.I",
      jabatan: "Guru Fikih",
      photo: "/foto/debi amanda.jpg",
    },
    {
      title: "Lisa Yunita, S.Pd I",
      jabatan: "Guru Akidah Akhlak",
      photo: "/foto/Lisa Yunita.jpg",
    },
    {
      title: "Gusti Ayu, S.Pd I",
      jabatan: "Guru Bahasa Arab",
      photo: "/foto/Gusti Ayu.jpg",
    },
    {
      title: "Nur Faizi, S. Pd",
      jabatan: "Guru IPA Biologi",
      photo: "/foto/Nur Faizi.jpeg",
    },
    {
      title: "Lisnawati, S. Pd",
      jabatan: "Guru Bahasa Indonesia",
      photo: "/foto/Lisnawati.jpeg",
    },
    {
      title: "Weni Anggraini, S. Pd",
      jabatan: "Guru Matematika",
      photo: "/foto/Weni Anggraini.jpg",
    },
    {
      title: "Fahmi Hafizha O, S.Pd",
      jabatan: "Guru Bahasa Arab",
      photo: "/foto/Fahmi Hafizha.jpeg",
    },
    {
      title: "Elfi Yusmanizar, S.Pd",
      jabatan: "Guru Geografi",
      photo: "/foto/Elfi Yusmanizar.jpg",
    },
    {
      title: "Hevi Murnialis, S.Pd",
      jabatan: "Guru Ekonomi",
      photo: "/foto/Hevi Murnialis.jpg",
    },
    {
      title: "M.Irfan, S.Hum",
      jabatan: "Guru Fekah & Nahwu & Tasawuf",
      photo: "/foto/M.Irfan.jpeg",
    },
    {
      title: "Gito Prabowo",
      jabatan: "Guru TIK & PJOK",
      photo: "/foto/Gito Prabowo.jpg",
    },
    {
      title: "Azkia Rahmi, S.Ag",
      jabatan: "Guru Keterampilan Agama",
      photo: "/foto/Azkia Rahmi.jpg",
    },
    {
      title: "Nini Arianti, S Thi",
      jabatan: "Guru Sharaf",
      photo: "/vorg.jpg",
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
                Tenaga Kependidikan Madrasah Aliyah
              </h1>
              <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-cyan-500 mx-auto rounded-full" />
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
              {aliyahTendik.map((item, index) => (
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
