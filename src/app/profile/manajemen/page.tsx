"use client";

import { JSX, useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { FaUserTie, FaUsers, FaBook, FaMoneyBillWave } from "react-icons/fa";

type ManagementItem = {
  title: string;
  icon: JSX.Element;
  description: string;
  details: string;
  photo: string;
};

export default function Home() {
  const [selected, setSelected] = useState<ManagementItem | null>(null);


  const managementStructure = [
    {
      title: "Pembina Yayasan - H. Edi Mahmud",
      icon: <FaUserTie />,
      description: "Membina dan mengarahkan kebijakan strategis yayasan",
      details: "Pembina Yayasan bertanggung jawab membina arah dan kebijakan strategis pondok pesantren agar sesuai dengan visi dan misi yang telah ditetapkan.",
      photo: "/vorg.jpg"
    },
    {
      title: "Ketua Yayasan - Drs. H. Ramza Husmen, M.Pd",
      icon: <FaUserTie />,
      description: "Memimpin yayasan dan memastikan visi misi tercapai",
      details: "Ketua Yayasan memastikan seluruh kegiatan berjalan sesuai visi dan misi, serta memimpin jalannya organisasi yayasan.",
      photo: "/vorg.jpg"
    },
    {
      title: "Pimpinan Pondok - Mhd. Padhil, S.Pd",
      icon: <FaUserTie />,
      description: "Mengelola seluruh kegiatan pesantren dan pembinaan santri",
      details: "Pimpinan pondok bertugas memimpin pengelolaan pendidikan, pembinaan santri, serta mengawasi seluruh aspek kehidupan di pesantren.",
      photo: "/foto/Mhd Padhil.jpg"
    },
    {
      title: "Ketua Komite - Sirajul Munir, S.Ag",
      icon: <FaUsers />,
      description: "Mewakili komite dalam memberikan dukungan terhadap pengelolaan pesantren",
      details: "Ketua komite bertugas memberikan masukan dan dukungan strategis bagi perkembangan pesantren.",
      photo: "/vorg.jpg"
    },
    {
      title: "Kepala Madrasah Aliyah - Delvianti, M.Pd",
      icon: <FaBook />,
      description: "Mengelola proses pendidikan di tingkat Madrasah Aliyah",
      details: "Kepala Madrasah Aliyah mengatur jalannya pendidikan, kurikulum, dan pembinaan guru di tingkat Aliyah.",
      photo: "/foto/kepala MAS YATI KAMANG MUDIK.jpg"
    },
    {
      title: "Kepala Madrasah Tsanawiyah - Welli Okmira, M.Pd",
      icon: <FaBook />,
      description: "Mengelola proses pendidikan di tingkat Madrasah Tsanawiyah",
      details: "Kepala Madrasah Tsanawiyah memimpin pelaksanaan pendidikan dan pembinaan guru di tingkat Tsanawiyah.",
      photo: "/foto/Welli Okmira.jpg"
    },
    {
      title: "Waka Kurikulum - Yenni Firda, S.Pd",
      icon: <FaBook />,
      description: "Mengatur dan mengembangkan kurikulum pendidikan pesantren",
      details: "Waka Kurikulum menyusun, mengembangkan, dan mengevaluasi kurikulum pendidikan pesantren agar relevan dan efektif.",
      photo: "/foto/yeni firda.jpg"
    },
    {
      title: "Bendahara - Putri Nurhasanah, S.Pd",
      icon: <FaMoneyBillWave />,
      description: "Mengelola keuangan dan administrasi pesantren",
      details: "Bendahara mengatur arus keuangan, membuat laporan, dan menjaga transparansi dalam pengelolaan dana pesantren.",
      photo: "/foto/Putri Nurhasanah.jpg"
    }
  ];

  return (
    <>
      <Navbar />
      <main className="container mx-auto py-12 px-4">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-4xl font-bold mb-10 text-center text-emerald-700">
            Manajemen Pondok Pesantren YATI
          </h1>
          
          <div className="bg-gradient-to-r from-emerald-50 to-white p-6 rounded-xl shadow-lg mb-10">
            <p className="text-gray-700 text-lg leading-relaxed text-center max-w-3xl mx-auto">
              Pondok Pesantren YATI dikelola oleh tim manajemen yang berdedikasi tinggi.
              Dengan pembagian tugas yang jelas, setiap jabatan berperan penting
              memastikan kualitas pendidikan dan pembinaan santri berjalan optimal.
            </p>
          </div>

          {/* Grid Kartu */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {managementStructure.map((item, index) => (
              <div 
                key={index} 
                className="bg-white rounded-xl shadow-md hover:shadow-2xl transition-all duration-300 flex flex-col items-center text-center p-6 border border-gray-100 hover:border-emerald-400 cursor-pointer"
                onClick={() => setSelected(item)}
              >
                {/* Foto */}
                <img 
                  src={item.photo} 
                  alt={item.title} 
                  className="w-32 h-32 object-cover rounded-full border-4 border-emerald-500 shadow-md hover:scale-105 transition-transform duration-300"
                  onError={(e) => e.currentTarget.src = "/images/management/default.jpg"}
                />
                {/* Icon */}
                <div className="text-3xl text-emerald-500 mt-3 mb-1">
                  {item.icon}
                </div>
                {/* Nama & Jabatan */}
                <h3 className="text-lg font-semibold text-gray-800 leading-tight mb-2">
                  {item.title}
                </h3>
                {/* Deskripsi */}
                <p className="text-gray-600 text-sm">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </main>
      <Footer />

      {/* Modal */}
      {selected && (
        <div className="fixed inset-0 bg-black bg-opacity-60 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg shadow-xl p-6 max-w-lg w-full relative">
            {/* Tombol close */}
            <button 
              className="absolute top-3 right-3 text-gray-500 hover:text-red-500 text-xl"
              onClick={() => setSelected(null)}
            >
              ✕
            </button>
            {/* Foto besar */}
            <img 
              src={selected.photo} 
              alt={selected.title} 
              className="w-40 h-40 object-cover rounded-full border-4 border-emerald-500 mx-auto mb-4"
              onError={(e) => e.currentTarget.src = "/images/management/default.jpg"}
            />
            {/* Nama */}
            <h2 className="text-2xl font-semibold text-center text-emerald-700 mb-2">
              {selected.title}
            </h2>
            {/* Detail */}
            <p className="text-gray-700 text-center leading-relaxed">
              {selected.details}
            </p>
          </div>
        </div>
      )}
    </>
  );
}
