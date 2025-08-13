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
  level: number;
  parent?: string;
};

export default function Home() {
  const [selected, setSelected] = useState<ManagementItem | null>(null);

  const managementStructure: ManagementItem[] = [
    // Level 1 - Pembina & Ketua Yayasan
    {
      title: "Pembina Yayasan - H. Edi Mahmud",
      icon: <FaUserTie />,
      description: "Membina dan mengarahkan kebijakan strategis yayasan",
      details: "Pembina Yayasan bertanggung jawab membina arah dan kebijakan strategis pondok pesantren agar sesuai dengan visi dan misi yang telah ditetapkan.",
      photo: "/vorg.jpg",
      level: 1
    },
    {
      title: "Ketua Yayasan - Drs. H. Ramza Husmen, M.Pd",
      icon: <FaUserTie />,
      description: "Memimpin yayasan dan memastikan visi misi tercapai",
      details: "Ketua Yayasan memastikan seluruh kegiatan berjalan sesuai visi dan misi, serta memimpin jalannya organisasi yayasan.",
      photo: "/vorg.jpg",
      level: 1
    },
    
    // Level 2 - Pimpinan Operasional
    {
      title: "Pimpinan Pondok - Mhd. Padhil, S.Pd",
      icon: <FaUserTie />,
      description: "Mengelola seluruh kegiatan pesantren dan pembinaan santri",
      details: "Pimpinan pondok bertugas memimpin pengelolaan pendidikan, pembinaan santri, serta mengawasi seluruh aspek kehidupan di pesantren.",
      photo: "/foto/Mhd Padhil.jpg",
      level: 2,
      parent: "Ketua Yayasan - Drs. H. Ramza Husmen, M.Pd"
    },
    {
      title: "Ketua Komite - Sirajul Munir, S.Ag",
      icon: <FaUsers />,
      description: "Mewakili komite dalam memberikan dukungan terhadap pengelolaan pesantren",
      details: "Ketua komite bertugas memberikan masukan dan dukungan strategis bagi perkembangan pesantren.",
      photo: "/vorg.jpg",
      level: 2,
      parent: "Pembina Yayasan - H. Edi Mahmud"
    },
    
    // Level 3 - Kepala Madrasah
    {
      title: "Kepala Madrasah Aliyah - Delvianti, M.Pd",
      icon: <FaBook />,
      description: "Mengelola proses pendidikan di tingkat Madrasah Aliyah",
      details: "Kepala Madrasah Aliyah mengatur jalannya pendidikan, kurikulum, dan pembinaan guru di tingkat Aliyah.",
      photo: "/foto/kepala MAS YATI KAMANG MUDIK.jpg",
      level: 3,
      parent: "Pimpinan Pondok - Mhd. Padhil, S.Pd"
    },
    {
      title: "Kepala Madrasah Tsanawiyah - Welli Okmira, M.Pd",
      icon: <FaBook />,
      description: "Mengelola proses pendidikan di tingkat Madrasah Tsanawiyah",
      details: "Kepala Madrasah Tsanawiyah memimpin pelaksanaan pendidikan dan pembinaan guru di tingkat Tsanawiyah.",
      photo: "/foto/Welli Okmira.jpg",
      level: 3,
      parent: "Pimpinan Pondok - Mhd. Padhil, S.Pd"
    },
    
    // Level 4 - Wakil Kepala & Bendahara
    {
      title: "Waka Kurikulum - Yenni Firda, S.Pd",
      icon: <FaBook />,
      description: "Mengatur dan mengembangkan kurikulum pendidikan pesantren",
      details: "Waka Kurikulum menyusun, mengembangkan, dan mengevaluasi kurikulum pendidikan pesantren agar relevan dan efektif.",
      photo: "/foto/yeni firda.jpg",
      level: 4,
      parent: "Kepala Madrasah"
    },
    {
      title: "Bendahara - Putri Nurhasanah, S.Pd",
      icon: <FaMoneyBillWave />,
      description: "Mengelola keuangan dan administrasi pesantren",
      details: "Bendahara mengatur arus keuangan, membuat laporan, dan menjaga transparansi dalam pengelolaan dana pesantren.",
      photo: "/foto/Putri Nurhasanah.jpg",
      level: 4,
      parent: "Pimpinan Pondok - Mhd. Padhil, S.Pd"
    }
  ];

  const getLevelItems = (level: number) => {
    return managementStructure.filter(item => item.level === level);
  };

  return (
    <>
      <Navbar />
      <main className="container mx-auto py-12 px-4">
        <div className="max-w-7xl mx-auto">
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

          {/* Organizational Chart */}
          <div className="bg-white rounded-lg shadow-lg p-8">
            {/* Level 1 - Pembina & Ketua Yayasan */}
            <div className="flex justify-center mb-12">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {getLevelItems(1).map((item, index) => (
                  <div key={index} className="text-center">
                    <div 
                      className="inline-block p-6 bg-gradient-to-br from-emerald-500 to-emerald-600 text-white rounded-lg shadow-lg cursor-pointer hover:shadow-xl transition-all duration-300"
                      onClick={() => setSelected(item)}
                    >
                      <div className="text-4xl mb-3">{item.icon}</div>
                      <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
                      <p className="text-sm opacity-90">{item.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Connecting Lines */}
            <div className="flex justify-center mb-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {getLevelItems(1).map((_, index) => (
                  <div key={index} className="flex justify-center">
                    <div className="w-px h-8 bg-emerald-300"></div>
                  </div>
                ))}
              </div>
            </div>

            {/* Level 2 - Pimpinan Operasional */}
            <div className="flex justify-center mb-12">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {getLevelItems(2).map((item, index) => (
                  <div key={index} className="text-center">
                    <div 
                      className="inline-block p-5 bg-gradient-to-br from-blue-500 to-blue-600 text-white rounded-lg shadow-lg cursor-pointer hover:shadow-xl transition-all duration-300"
                      onClick={() => setSelected(item)}
                    >
                      <div className="text-3xl mb-2">{item.icon}</div>
                      <h4 className="text-base font-semibold mb-1">{item.title.split(' - ')[0]}</h4>
                      <p className="text-xs opacity-90">{item.title.split(' - ')[1]}</p>
                      <p className="text-xs opacity-90 mt-1">{item.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Connecting Lines */}
            <div className="flex justify-center mb-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {getLevelItems(2).map((_, index) => (
                  <div key={index} className="flex justify-center">
                    <div className="w-px h-8 bg-blue-300"></div>
                  </div>
                ))}
              </div>
            </div>

            {/* Level 3 - Kepala Madrasah */}
            <div className="flex justify-center mb-12">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {getLevelItems(3).map((item, index) => (
                  <div key={index} className="text-center">
                    <div 
                      className="inline-block p-5 bg-gradient-to-br from-cyan-500 to-cyan-600 text-white rounded-lg shadow-lg cursor-pointer hover:shadow-xl transition-all duration-300"
                      onClick={() => setSelected(item)}
                    >
                      <div className="text-3xl mb-2">{item.icon}</div>
                      <h4 className="text-base font-semibold mb-1">{item.title.split(' - ')[0]}</h4>
                      <p className="text-xs opacity-90">{item.title.split(' - ')[1]}</p>
                      <p className="text-xs opacity-90 mt-1">{item.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Connecting Lines */}
            <div className="flex justify-center mb-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {getLevelItems(3).map((_, index) => (
                  <div key={index} className="flex justify-center">
                    <div className="w-px h-8 bg-cyan-300"></div>
                  </div>
                ))}
              </div>
            </div>

            {/* Level 4 - Wakil Kepala & Bendahara */}
            <div className="flex justify-center">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {getLevelItems(4).map((item, index) => (
                  <div key={index} className="text-center">
                    <div 
                      className="inline-block p-5 bg-gradient-to-br from-purple-500 to-purple-600 text-white rounded-lg shadow-lg cursor-pointer hover:shadow-xl transition-all duration-300"
                      onClick={() => setSelected(item)}
                    >
                      <div className="text-3xl mb-2">{item.icon}</div>
                      <h4 className="text-base font-semibold mb-1">{item.title.split(' - ')[0]}</h4>
                      <p className="text-xs opacity-90">{item.title.split(' - ')[1]}</p>
                      <p className="text-xs opacity-90 mt-1">{item.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
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
