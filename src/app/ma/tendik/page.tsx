"use client";

import { JSX, useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { FaUserTie, FaChalkboardTeacher, FaUserCog, FaBook, FaUsers, FaMoneyBillWave, FaChevronDown } from "react-icons/fa";

type StaffItem = {
  title: string;
  icon: JSX.Element;
  description: string;
  details?: string;
  photo: string;
  subItems?: string[];
  level: number;
  parent?: string;
};

export default function TendikAliyah() {
  const [selected, setSelected] = useState<StaffItem | null>(null);
  const [accordionOpen, setAccordionOpen] = useState<number | null>(null);

  const toggleAccordion = (index: number) => {
    setAccordionOpen(accordionOpen === index ? null : index);
  };

  const aliyahTendik: StaffItem[] = [
    // Level 1 - Kepala Madrasah
    {
      title: "Kepala Madrasah Aliyah - Delvianti, M.Pd",
      icon: <FaUserTie />,
      description: "Memimpin dan mengatur jalannya pendidikan di Madrasah Aliyah",
      details: "Bertanggung jawab penuh atas jalannya pendidikan, pembinaan guru, dan pengelolaan administrasi Madrasah Aliyah.",
      photo: "/foto/kepala MAS YATI KAMANG MUDIK.jpg",
      level: 1
    },
    
    // Level 2 - Wakil Kepala
    {
      title: "Waka Kurikulum - Yenni Firda, S.Pd",
      icon: <FaBook />,
      description: "Mengatur dan mengembangkan kurikulum",
      details: "Menyusun, mengembangkan, dan mengevaluasi kurikulum agar sesuai standar pendidikan nasional dan visi sekolah.",
      photo: "/foto/yeni firda.jpg",
      level: 2,
      parent: "Kepala Madrasah Aliyah - Delvianti, M.Pd"
    },
    {
      title: "Waka Kesiswaan - Mhd. Sabri, SH",
      icon: <FaUsers />,
      description: "Mengatur kegiatan kesiswaan dan pembinaan karakter",
      details: "Bertanggung jawab atas pembinaan siswa, kedisiplinan, dan kegiatan ekstrakurikuler.",
      photo: "/foto/Muhammad Sabri.jpg",
      level: 2,
      parent: "Kepala Madrasah Aliyah - Delvianti, M.Pd"
    },
    {
      title: "Tata Usaha - Yufita Indriani, S.Pd",
      icon: <FaUserCog />,
      description: "Mengelola administrasi sekolah",
      details: "Mengurus dokumen, surat menyurat, arsip, dan administrasi pendidikan di Madrasah Aliyah.",
      photo: "/vorg.jpg",
      level: 2,
      parent: "Kepala Madrasah Aliyah - Delvianti, M.Pd"
    },
    {
      title: "Bendahara - Putri Nurhasanah, S.Pd",
      icon: <FaMoneyBillWave />,
      description: "Mengatur keuangan sekolah",
      details: "Mengelola keuangan, membuat laporan, dan menjaga transparansi anggaran.",
      photo: "/foto/Putri Nurhasanah.jpg",
      level: 2,
      parent: "Kepala Madrasah Aliyah - Delvianti, M.Pd"
    },
    {
      title: "Kepala Perpustakaan - Asmawati, S.Pd.I",
      icon: <FaBook />,
      description: "Mengelola perpustakaan sekolah",
      details: "Mengatur koleksi buku, pelayanan perpustakaan, dan kegiatan literasi siswa.",
      photo: "/foto/asmawati ok.jpg",
      level: 2,
      parent: "Kepala Madrasah Aliyah - Delvianti, M.Pd"
    },

    // Level 3 - Wali Kelas
    {
      title: "Wali Kelas 10 - Nurrahmi Lathifa, M.Pd",
      icon: <FaChalkboardTeacher />,
      description: "Membimbing siswa kelas 10",
      details: "Bertanggung jawab atas pembinaan siswa kelas 10 dan menjadi penghubung antara siswa, guru, dan orang tua.",
      photo: "/vorg.jpg",
      level: 3,
      parent: "Waka Kesiswaan - Mhd. Sabri, SH"
    },
    {
      title: "Wali Kelas 11 - Yusnetti, SH",
      icon: <FaChalkboardTeacher />,
      description: "Membimbing siswa kelas 11",
      details: "Bertanggung jawab atas pembinaan siswa kelas 11 dan menjadi penghubung antara siswa, guru, dan orang tua.",
      photo: "/foto/yusnetti oke.jpg",
      level: 3,
      parent: "Waka Kesiswaan - Mhd. Sabri, SH"
    },
    {
      title: "Wali Kelas 12 - Aufi Afifah Rifki TM, S.Pd",
      icon: <FaChalkboardTeacher />,
      description: "Membimbing siswa kelas 12",
      details: "Bertanggung jawab atas pembinaan siswa kelas 12 dan menjadi penghubung antara siswa, guru, dan orang tua.",
      photo: "/foto/aufi afifa rifki.jpg",
      level: 3,
      parent: "Waka Kesiswaan - Mhd. Sabri, SH"
    },

    // Level 3 - Guru Mapel
    {
      title: "Guru Mapel IPS & PKN",
      icon: <FaChalkboardTeacher />,
      description: "Pengajar mata pelajaran IPS dan PKN",
      subItems: [
        "Asmawati, S.Pd.I",
        "Refda Yetti, S.Pd.I", 
        "Lisa Yunita, S.Pd.I", 
        "Debi Amanda, S.Pd"
      ],
      photo: "/vorg.jpg",
      level: 3,
      parent: "Waka Kurikulum - Yenni Firda, S.Pd"
    },
    {
      title: "Guru Mapel IPA dan Matematika",
      icon: <FaChalkboardTeacher />,
      description: "Pengajar mata pelajaran IPA dan Matematika",
      subItems: [
        "Weni Anggraini, S.Pd", 
        "Arbaisyah, S.Pd", 
        "Nur Faizi, S.Pd"
      ],
      photo: "/vorg.jpg",
      level: 3,
      parent: "Waka Kurikulum - Yenni Firda, S.Pd"
    },
    {
      title: "Guru Mapel Agama",
      icon: <FaChalkboardTeacher />,
      description: "Pengajar mata pelajaran Agama",
      subItems: [
        "Silhen, S.Pd",
        "Aufi Afifah Rifki TM, S.Pd",
        "Yusnetti, SH",
        "Hevi Murnialis, S.Pd",
        "Elfi Yusmanizar, S.Pd"
      ],
      photo: "/vorg.jpg",
      level: 3,
      parent: "Waka Kurikulum - Yenni Firda, S.Pd"
    },
    {
      title: "Guru Mapel Bahasa",
      icon: <FaChalkboardTeacher />,
      description: "Pengajar mata pelajaran Bahasa Indonesia & Inggris",
      subItems: [
        "Marlina, S.Pd",
        "Putri Rahmadhani, S.Pd",
        "Lilvia, S.Pd",
        "Gusti Ayu, S.Pd",
        "Fahmi Hafizha O, S.Pd"
      ],
      photo: "/vorg.jpg",
      level: 3,
      parent: "Waka Kurikulum - Yenni Firda, S.Pd"
    },
    {
      title: "Guru Mapel Pondok",
      icon: <FaChalkboardTeacher />,
      description: "Pengajar mata pelajaran kepondokan",
      subItems: [
       "Nini Arianti, S.Ag", 
       "M. Irfan, S.Pd", 
       "Azkia Rahmi, S.Ag", 
       "Nurrahmi Lathifa, M.Pd"
      ],
      photo: "/vorg.jpg",
      level: 3,
      parent: "Waka Kurikulum - Yenni Firda, S.Pd"
    }
  ];

  const getLevelItems = (level: number) => {
    return aliyahTendik.filter(item => item.level === level);
  };

  return (
    <>
      <Navbar />
      <main className="container mx-auto py-12 px-4">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-4xl font-bold mb-10 text-center text-emerald-700">
            Tenaga Kependidikan Madrasah Aliyah
          </h1>

          {/* Overview Section */}
          <div className="bg-gradient-to-r from-emerald-50 to-white p-6 rounded-xl shadow-lg mb-10">
            <p className="text-gray-700 text-lg leading-relaxed text-center max-w-3xl mx-auto">
              Tenaga kependidikan di MA YATI terdiri dari para profesional yang
              berdedikasi dalam membina dan mendidik para santri. Dengan kompetensi
              yang mumpuni dan pengalaman yang luas, mereka berkomitmen dalam
              mengembangkan potensi akademik dan karakter islami para santri.
            </p>
          </div>

          {/* Organizational Chart */}
          <div className="bg-white rounded-lg shadow-lg p-8">
            {/* Level 1 - Kepala Madrasah */}
            <div className="flex justify-center mb-12">
              <div className="text-center">
                <div 
                  className="inline-block p-6 bg-gradient-to-br from-emerald-500 to-emerald-600 text-white rounded-lg shadow-lg cursor-pointer hover:shadow-xl transition-all duration-300"
                  onClick={() => setSelected(aliyahTendik[0])}
                >
                  <div className="text-4xl mb-3">{aliyahTendik[0].icon}</div>
                  <h3 className="text-lg font-semibold mb-2">{aliyahTendik[0].title}</h3>
                  <p className="text-sm opacity-90">{aliyahTendik[0].description}</p>
                </div>
              </div>
            </div>

            {/* Connecting Line */}
            <div className="flex justify-center mb-8">
              <div className="w-px h-8 bg-emerald-300"></div>
            </div>

            {/* Level 2 - Wakil Kepala */}
            <div className="flex justify-center mb-12">
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
                {getLevelItems(2).map((item, index) => (
                  <div key={index} className="text-center">
                    <div 
                      className="inline-block p-4 bg-gradient-to-br from-blue-500 to-blue-600 text-white rounded-lg shadow-lg cursor-pointer hover:shadow-xl transition-all duration-300"
                      onClick={() => setSelected(item)}
                    >
                      <div className="text-2xl mb-2">{item.icon}</div>
                      <h4 className="text-sm font-semibold mb-1">{item.title.split(' - ')[0]}</h4>
                      <p className="text-xs opacity-90">{item.title.split(' - ')[1]}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Connecting Lines */}
            <div className="flex justify-center mb-8">
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
                {getLevelItems(2).map((_, index) => (
                  <div key={index} className="flex justify-center">
                    <div className="w-px h-8 bg-blue-300"></div>
                  </div>
                ))}
              </div>
            </div>

            {/* Level 3 - Wali Kelas & Guru Mapel */}
            <div className="mb-12">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {getLevelItems(3).map((item, index) => (
                  <div key={index} className="text-center">
                    <div 
                      className="inline-block p-4 bg-gradient-to-br from-cyan-500 to-cyan-600 text-white rounded-lg shadow-lg cursor-pointer hover:shadow-xl transition-all duration-300"
                      onClick={() => setSelected(item)}
                    >
                      <div className="text-2xl mb-2">{item.icon}</div>
                      <h4 className="text-sm font-semibold mb-1">{item.title.split(' - ')[0]}</h4>
                      {item.title.includes(' - ') && (
                        <p className="text-xs opacity-90">{item.title.split(' - ')[1]}</p>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />

      {/* Modal Detail */}
      {selected && (
        <div className="fixed inset-0 bg-black bg-opacity-60 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg shadow-xl p-6 max-w-lg w-full relative animate-fadeIn">
            <button
              className="absolute top-3 right-3 text-gray-500 hover:text-red-500 text-xl"
              onClick={() => setSelected(null)}
            >
              ✕
            </button>

            <img
              src={selected.photo}
              alt={selected.title}
              className="w-40 h-40 object-cover rounded-full border-4 border-emerald-500 mx-auto mb-4"
              onError={(e) => (e.currentTarget.src = "/images/aliyah/default.jpg")}
            />

            <h2 className="text-2xl font-semibold text-center text-emerald-700 mb-4">
              {selected.title}
            </h2>

            {selected.subItems ? (
              <div>
                <div
                  className="flex justify-between items-center cursor-pointer p-3 bg-emerald-100 rounded-lg"
                  onClick={() => toggleAccordion(0)}
                >
                  <span className="font-semibold text-emerald-700">Daftar Guru</span>
                  <FaChevronDown
                    className={`transition-transform duration-300 ${
                      accordionOpen === 0 ? "rotate-180" : ""
                    }`}
                  />
                </div>
                {accordionOpen === 0 && (
                  <ul className="mt-3 space-y-2 pl-5 list-disc text-gray-700">
                    {selected.subItems.map((name, idx) => (
                      <li key={idx}>{name}</li>
                    ))}
                  </ul>
                )}
              </div>
            ) : (
              <p className="text-gray-700 text-center leading-relaxed">
                {selected.details}
              </p>
            )}
          </div>
        </div>
      )}
    </>
  );
}
