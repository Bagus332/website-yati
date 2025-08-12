"use client";

import { JSX, useState } from "react";
import Navbar from "@/components/Navbar";
import { FaUserTie, FaUsers, FaBook, FaMoneyBillWave, FaChalkboardTeacher, FaGraduationCap, FaChevronDown } from "react-icons/fa";

type StaffItem = {
  title: string;
  icon: JSX.Element;
  description: string;
  details?: string;
  photo: string;
  subItems?: string[]; // untuk guru per mapel
};

export default function StrukturAliyah() {
  const [selected, setSelected] = useState<StaffItem | null>(null);
  const [accordionOpen, setAccordionOpen] = useState<number | null>(null);

  const toggleAccordion = (index: number) => {
    setAccordionOpen(accordionOpen === index ? null : index);
  };
  const aliyahStructure: StaffItem[] = [
    // Pimpinan
    {
      title: "Kepala Madrasah Aliyah - Delvianti, M.Pd",
      icon: <FaUserTie />,
      description: "Memimpin dan mengatur jalannya pendidikan di Madrasah Aliyah",
      details: "Bertanggung jawab penuh atas jalannya pendidikan, pembinaan guru, dan pengelolaan administrasi Madrasah Aliyah.",
      photo: "/foto/kepala MAS YATI KAMANG MUDIK.jpg"
    },
    {
      title: "Waka Kurikulum - Yenni Firda, S.Pd",
      icon: <FaBook />,
      description: "Mengatur dan mengembangkan kurikulum",
      details: "Menyusun, mengembangkan, dan mengevaluasi kurikulum agar sesuai standar pendidikan nasional dan visi sekolah.",
      photo: "/foto/yeni firda.jpg"
    },
    {
      title: "Waka Kesiswaan - Mhd. Sabri, SH",
      icon: <FaUsers />,
      description: "Mengatur kegiatan kesiswaan dan pembinaan karakter",
      details: "Bertanggung jawab atas pembinaan siswa, kedisiplinan, dan kegiatan ekstrakurikuler.",
      photo: "/foto/Muhammad Sabri.jpg"
    },
    {
      title: "Tata Usaha - Yufita Indriani, S.Pd",
      icon: <FaUsers />,
      description: "Mengelola administrasi sekolah",
      details: "Mengurus dokumen, surat menyurat, arsip, dan administrasi pendidikan di Madrasah Aliyah.",
      photo: "/vorg.jpg"
    },
    {
      title: "Bendahara - Putri Nurhasanah, S.Pd",
      icon: <FaMoneyBillWave />,
      description: "Mengatur keuangan sekolah",
      details: "Mengelola keuangan, membuat laporan, dan menjaga transparansi anggaran.",
      photo: "/foto/Putri Nurhasanah.jpg"
    },
    {
      title: "Kepala Perpustakaan - Asmawati, S.Pd.I",
      icon: <FaBook />,
      description: "Mengelola perpustakaan sekolah",
      details: "Mengatur koleksi buku, pelayanan perpustakaan, dan kegiatan literasi siswa.",
      photo: "/foto/asmawati ok.jpg"
    },

    // Wali Kelas
    {
      title: "Wali Kelas 10 - Nurrahmi Lathifa, M.Pd",
      icon: <FaChalkboardTeacher />,
      description: "Membimbing siswa kelas 10",
      details: "Bertanggung jawab atas pembinaan siswa kelas 10 dan menjadi penghubung antara siswa, guru, dan orang tua.",
      photo: "/vorg.jpg"
    },
    {
      title: "Wali Kelas 11 - Yusnetti, SH",
      icon: <FaChalkboardTeacher />,
      description: "Membimbing siswa kelas 11",
      details: "Bertanggung jawab atas pembinaan siswa kelas 11 dan menjadi penghubung antara siswa, guru, dan orang tua.",
      photo: "/foto/yusnetti oke.jpg"
    },
    {
      title: "Wali Kelas 12 - Aufi Afifah Rifki TM, S.Pd",
      icon: <FaChalkboardTeacher />,
      description: "Membimbing siswa kelas 12",
      details: "Bertanggung jawab atas pembinaan siswa kelas 12 dan menjadi penghubung antara siswa, guru, dan orang tua.",
      photo: "/foto/aufi afifa rifki.jpg"
    },
  // Guru IPS & PKN
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
      photo: "/vorg.jpg"
    },
    {
      title: "Guru Mapel IPA dan Matematika",
      icon: <FaChalkboardTeacher />,
      description: "Pengajar mata pelajaran IPS dan PKN",
      subItems: [
        "Weni Anggraini, S.Pd", 
        "Arbaisyah, S.Pd", 
        "Nur Faizi, S.Pd"
      ],
      photo: "/vorg.jpg"
    },
    {
      title: "Guru Mapel Agama",
      icon: <FaChalkboardTeacher />,
      description: "Pengajar mata pelajaran IPS dan PKN",
      subItems: [
        "Silhen, S.Pd",
        "Aufi Afifah Rifki TM, S.Pd",
        "Yusnetti, SH",
        "Hevi Murnialis, S.Pd",
        "Elfi Yusmanizar, S.Pd"
      ],
      photo: "/vorg.jpg"
    },

    // Guru Bahasa
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
      photo: "/vorg.jpg"
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
      photo: "/vorg.jpg"
    },

    // Siswa
    {
      title: "Siswa Aliyah",
      icon: <FaGraduationCap />,
      description: "Peserta didik Madrasah Aliyah",
      details: "Siswa-siswi yang sedang menempuh pendidikan menengah berbasis Islam.",
      photo: "/vorg.jpg"
    }
  ];

  return (
    <>
      <Navbar />
      <main className="container mx-auto py-12 px-4">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-4xl font-bold mb-10 text-center text-emerald-700">
            Struktur Organisasi Madrasah Aliyah
          </h1>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {aliyahStructure.map((item, index) => (
              <div
                key={index}
                className="bg-white rounded-xl shadow-md hover:shadow-2xl transition-all duration-300 flex flex-col items-center text-center p-6 border border-gray-100 hover:border-emerald-400 cursor-pointer"
                onClick={() => {
                  setSelected(item);
                  setAccordionOpen(null);
                }}
              >
                <img
                  src={item.photo}
                  alt={item.title}
                  className="w-32 h-32 object-cover rounded-full border-4 border-emerald-500 shadow-md hover:scale-105 transition-transform duration-300"
                  onError={(e) => (e.currentTarget.src = "/images/aliyah/default.jpg")}
                />
                <div className="text-3xl text-emerald-500 mt-3 mb-1">
                  {item.icon}
                </div>
                <h3 className="text-lg font-semibold text-gray-800 leading-tight mb-2">
                  {item.title}
                </h3>
                <p className="text-gray-600 text-sm">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </main>

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