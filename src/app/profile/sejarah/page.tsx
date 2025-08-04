import Navbar from "@/components/Navbar";
import { FaHistory, FaGraduationCap, FaUserTie } from "react-icons/fa";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="container mx-auto py-8 px-4">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-3xl md:text-4xl font-bold mb-8 text-center text-gray-800">
            Sejarah Pondok Pesantren YATI
          </h1>

          {/* Introduction Section */}
          <div className="bg-white p-6 rounded-lg shadow-md mb-8">
            <div className="flex items-center space-x-4 mb-6">
              <div className="text-3xl text-emerald-500">
                <FaHistory />
              </div>
              <h2 className="text-2xl font-semibold text-gray-800">Awal Mula</h2>
            </div>
            <div className="prose prose-emerald max-w-none">
              <p className="text-gray-600 leading-relaxed mb-6">
                Berdirinya Pondok Pesantren dilatarbelakangi dengan adanya pengajian–pengajian
                yang dilakukan di Surau dalam bentuk halakah. Pengajian ini banyak mendapat
                tanggapan baik dari masyarakat. Dari sinilah mulai munculnya ide untuk
                mendirikan suatu Madrasah.
              </p>
              <p className="text-gray-600 leading-relaxed mb-6">
                Setelah hasil musyawarah Buya bersama adik ipar beliau, H. Mahmud Dt. Sati
                (lebih dikenal dengan Inyiak Palo Pauh) yang menjabat sebagai Kapalo Nagari,
                dan mendapat dukungan besar dari masyarakat, maka didirikan suatu gedung
                Madrasah yang diresmikan pada tanggal{" "}
                <span className="font-semibold">30 Maret 1930</span>, yang diberi nama MTI
                Kampung Baru Kamang Mudik.
              </p>
            </div>
          </div>

          {/* Milestone Section */}
          <div className="bg-white p-6 rounded-lg shadow-md mb-8">
            <div className="flex items-center space-x-4 mb-6">
              <div className="text-3xl text-emerald-500">
                <FaGraduationCap />
              </div>
              <h2 className="text-2xl font-semibold text-gray-800">Perkembangan</h2>
            </div>
            <div className="space-y-6">
              <div className="border-l-4 border-emerald-500 pl-4">
                <h3 className="font-semibold text-lg mb-2">1937 - Lulusan Pertama</h3>
                <p className="text-gray-600">
                  Tamatan pertama telah menghasilkan tokoh-tokoh yang berhasil di masyarakat,
                  termasuk Saibi Tuanku Sinaro, Jaonan, Tuanku Kari, dan lainnya yang menjadi
                  guru, Hakim Pengadilan Agama, serta panutan dalam masyarakat.
                </p>
              </div>
              <div className="border-l-4 border-emerald-500 pl-4">
                <h3 className="font-semibold text-lg mb-2">1962 - Pembentukan Yayasan</h3>
                <p className="text-gray-600">
                  MTI Kampung Baru dikelola oleh Yayasan Tarbiyah Islamiyah (YATI) dengan
                  tiga jenjang pendidikan: Madrasah Ibtidaiyah, Tsanawiyah, dan Aliyah.
                </p>
              </div>
              <div className="border-l-4 border-emerald-500 pl-4">
                <h3 className="font-semibold text-lg mb-2">1979 - Reformasi Pendidikan</h3>
                <p className="text-gray-600">
                  Penyesuaian sistem pendidikan dengan masa belajar 6 tahun: 3 tahun untuk
                  tingkat Tsanawiyah dan 3 tahun untuk tingkat Aliyah.
                </p>
              </div>
            </div>
          </div>

          {/* Leadership Section */}
          <div className="bg-white p-6 rounded-lg shadow-md">
            <div className="flex items-center space-x-4 mb-6">
              <div className="text-3xl text-emerald-500">
                <FaUserTie />
              </div>
              <h2 className="text-2xl font-semibold text-gray-800">Kepemimpinan</h2>
            </div>
            <div className="grid md:grid-cols-2 gap-6">
              {[
                "H. Buya Mansur Dt. Nagari Basa (Pendiri)",
                "H. Abdul Manaf Idris",
                "A. Tuangku Sati",
                "Hj. Nurza Mahmud",
                "Muhammad Nasir",
                "Drs. Abdurrahman",
                "Dra. Emilya Husteti",
                "Junaidi, S.Pd. I",
                "Drs. Ramza Husmen, M.Pd",
                "Hj. Suarni, S. Pd. I",
                "Fetriwati, S.Ag. M.Pd",
                "Welli Okmira, S.Pd.I",
                "Drs. H. Chairul Huda"
              ].map((name, index) => (
                <div key={index} className="flex items-center space-x-3">
                  <div className="w-8 h-8 bg-emerald-100 rounded-full flex items-center justify-center text-emerald-600 font-semibold">
                    {index + 1}
                  </div>
                  <span className="text-gray-700">{name}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
