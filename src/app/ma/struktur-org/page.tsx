"use client";

import { JSX } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { FaUserTie, FaUsers, FaBook, FaMoneyBillWave, FaChalkboardTeacher, FaGraduationCap } from "react-icons/fa";
import { motion } from "framer-motion";

type StaffItem = {
  title: string;
  icon: JSX.Element;
  description: string;
  photo: string;
  level: number;
  parent?: string;
};

export default function StrukturAliyah() {
  const aliyahStructure: StaffItem[] = [
    // Staf dan struktur organisasi lainnya
    {
      title: "Kepala Madrasah Aliyah - Delvianti, M.Pd",
      icon: <FaUserTie />,
      description: "Memimpin dan mengatur jalannya pendidikan di Madrasah Aliyah",
      photo: "/foto/kepala MAS YATI KAMANG MUDIK.jpg",
      level: 1
    },
    {
      title: "Waka Kurikulum - Yenni Firda, S.Pd",
      icon: <FaBook />,
      description: "Mengatur dan mengembangkan kurikulum",
      photo: "/foto/yeni firda.jpg",
      level: 2,
      parent: "Kepala Madrasah Aliyah - Delvianti, M.Pd"
    },
    {
      title: "Waka Kesiswaan - Mhd. Sabri, SH",
      icon: <FaUsers />,
      description: "Mengatur kegiatan kesiswaan dan pembinaan karakter",
      photo: "/foto/Muhammad Sabri.jpg",
      level: 2,
      parent: "Kepala Madrasah Aliyah - Delvianti, M.Pd"
    },
    {
      title: "Tata Usaha - Yufita Indriani, S.Pd",
      icon: <FaUsers />,
      description: "Mengelola administrasi sekolah",
      photo: "/vorg.jpg",
      level: 2,
      parent: "Kepala Madrasah Aliyah - Delvianti, M.Pd"
    },
    {
      title: "Bendahara - Putri Nurhasanah, S.Pd",
      icon: <FaMoneyBillWave />,
      description: "Mengatur keuangan sekolah",
      photo: "/foto/Putri Nurhasanah.jpg",
      level: 2,
      parent: "Kepala Madrasah Aliyah - Delvianti, M.Pd"
    },
    {
      title: "Kepala Perpustakaan - Asmawati, S.Pd.I",
      icon: <FaBook />,
      description: "Mengelola perpustakaan sekolah",
      photo: "/foto/asmawati ok.jpg",
      level: 2,
      parent: "Kepala Madrasah Aliyah - Delvianti, M.Pd"
    },
    {
      title: "Wali Kelas 10 - Nurrahmi Lathifa, M.Pd",
      icon: <FaChalkboardTeacher />,
      description: "Membimbing siswa kelas 10",
      photo: "/vorg.jpg",
      level: 3,
      parent: "Waka Kesiswaan - Mhd. Sabri, SH"
    },
    {
      title: "Wali Kelas 11 - Yusnetti, SH",
      icon: <FaChalkboardTeacher />,
      description: "Membimbing siswa kelas 11",
      photo: "/foto/yusnetti oke.jpg",
      level: 3,
      parent: "Waka Kesiswaan - Mhd. Sabri, SH"
    },
    {
      title: "Wali Kelas 12 - Aufi Afifah Rifki TM, S.Pd",
      icon: <FaChalkboardTeacher />,
      description: "Membimbing siswa kelas 12",
      photo: "/foto/aufi afifa rifki.jpg",
      level: 3,
      parent: "Waka Kesiswaan - Mhd. Sabri, SH"
    },
    {
      title: "Guru Mapel IPS & PKN",
      icon: <FaChalkboardTeacher />,
      description: "Pengajar mata pelajaran IPS dan PKN",
      photo: "/vorg.jpg",
      level: 3,
      parent: "Waka Kurikulum - Yenni Firda, S.Pd"
    },
    {
      title: "Guru Mapel IPA dan Matematika",
      icon: <FaChalkboardTeacher />,
      description: "Pengajar mata pelajaran IPA dan Matematika",
      photo: "/vorg.jpg",
      level: 3,
      parent: "Waka Kurikulum - Yenni Firda, S.Pd"
    },
    {
      title: "Guru Mapel Agama",
      icon: <FaChalkboardTeacher />,
      description: "Pengajar mata pelajaran Agama",
      photo: "/vorg.jpg",
      level: 3,
      parent: "Waka Kurikulum - Yenni Firda, S.Pd"
    },
    {
      title: "Guru Mapel Bahasa",
      icon: <FaChalkboardTeacher />,
      description: "Pengajar mata pelajaran Bahasa Indonesia & Inggris",
      photo: "/vorg.jpg",
      level: 3,
      parent: "Waka Kurikulum - Yenni Firda, S.Pd"
    },
    {
      title: "Guru Mapel Pondok",
      icon: <FaChalkboardTeacher />,
      description: "Pengajar mata pelajaran kepondokan",
      photo: "/vorg.jpg",
      level: 3,
      parent: "Waka Kurikulum - Yenni Firda, S.Pd"
    },
    {
      title: "Siswa Aliyah",
      icon: <FaGraduationCap />,
      description: "Peserta didik Madrasah Aliyah",
      photo: "/vorg.jpg",
      level: 4,
      parent: "Wali Kelas"
    }
  ];

  const getLevelItems = (level: number) => {
    return aliyahStructure.filter(item => item.level === level);
  };

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
                Organisasi
              </span>
              <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent mb-6">
                Struktur Organisasi Madrasah Aliyah
              </h1>
              <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-cyan-500 mx-auto rounded-full" />
            </div>

          {/* Organizational Chart */}
          <div className="bg-white/70 backdrop-blur-lg p-8 rounded-[2.5rem] shadow-2xl border-2 border-blue-100/60">
            {/* Level 1 - Kepala Madrasah */}
            <div className="flex justify-center mb-12">
            <motion.div whileHover={{ y: -5, scale: 1.05 }} className="text-center">
                <div className="inline-block p-6 bg-gradient-to-br from-blue-500 to-cyan-500 text-white rounded-2xl shadow-xl">
                  <div className="w-20 h-20 mx-auto mb-4 bg-white/20 rounded-full flex items-center justify-center">
                    <div className="text-4xl">{aliyahStructure[0].icon}</div>
                  </div>
                  <h3 className="text-lg font-semibold">{aliyahStructure[0].title.split(" - ")[0]}</h3>
                  <p className="text-sm opacity-90">{aliyahStructure[0].title.split(" - ")[1]}</p>
                </div>
              </motion.div>
            </div>

            {/* Connecting Line */}
            <div className="flex justify-center mb-8">
              <div className="w-px h-12 bg-gradient-to-b from-cyan-500 to-blue-500"></div>
            </div>

            {/* Level 2 - Wakil Kepala */}
            <div className="flex justify-center mb-12">
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8">
                {getLevelItems(2).map((item, index) => (
                   <motion.div whileHover={{ y: -5, scale: 1.05 }} key={index} className="text-center">
                   <div className="p-4 bg-white rounded-2xl shadow-lg border border-gray-100 h-full flex flex-col justify-center">
                     <div className="w-16 h-16 mx-auto mb-3 bg-gradient-to-br from-blue-100 to-cyan-100 rounded-full flex items-center justify-center text-blue-600">
                       <div className="text-3xl">{item.icon}</div>
                     </div>
                     <h4 className="text-sm font-semibold text-gray-800">{item.title.split(' - ')[0]}</h4>
                     <p className="text-xs text-gray-500">{item.title.split(' - ')[1]}</p>
                   </div>
                 </motion.div>
                ))}
              </div>
            </div>


            {/* Level 3 - Wali Kelas & Guru Mapel */}
            <div className="mb-12">
            <h3 className="text-2xl font-bold text-center mb-8 text-gray-800">Wali Kelas & Guru</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-6">
                {getLevelItems(3).map((item, index) => (
                  <motion.div whileHover={{ y: -5, scale: 1.05 }} key={index} className="text-center">
                  <div className="p-4 bg-gray-50 rounded-2xl shadow-md h-full flex flex-col justify-center items-center">
                    <div className="w-12 h-12 mb-2 bg-gradient-to-br from-gray-200 to-gray-100 rounded-full flex items-center justify-center text-cyan-600">
                      {item.icon}
                    </div>
                    <h4 className="text-sm font-semibold text-gray-700">{item.title.split(' - ')[0]}</h4>
                    {item.title.includes(' - ') && (
                        <p className="text-xs text-gray-500">{item.title.split(' - ')[1]}</p>
                      )}
                  </div>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Connecting Lines */}
            <div className="flex justify-center mb-8">
            <div className="w-px h-12 bg-gradient-to-b from-blue-500 to-cyan-500"></div>
            </div>

            {/* Level 4 - Siswa */}
            <div className="flex justify-center">
            <motion.div whileHover={{ y: -5, scale: 1.05 }} className="text-center">
                <div className="inline-block p-6 bg-gradient-to-br from-cyan-500 to-blue-500 text-white rounded-2xl shadow-xl">
                  <div className="w-20 h-20 mx-auto mb-4 bg-white/20 rounded-full flex items-center justify-center">
                  <div className="text-4xl">{aliyahStructure[aliyahStructure.length - 1].icon}</div>
                  </div>
                  <h3 className="text-lg font-semibold">{aliyahStructure[aliyahStructure.length - 1].title}</h3>
                </div>
                </motion.div>
            </div>
          </div>
        </div>
        </div>
      </main>
      <Footer />
    </>
  );
}