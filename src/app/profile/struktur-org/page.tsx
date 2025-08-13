import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { 
  FaUserTie, 
  FaUsers, 
  FaBook, 
  FaUserGraduate, 
  FaTools, 
  FaMoneyBillWave, 
  FaHandshake,
  FaRunning,
  FaShieldAlt 
} from "react-icons/fa";

export default function Home() {
  const organizationStructure = [
    {
      title: "Pimpinan Pondok Pesantren",
      icon: <FaUserTie />,
      description: "Memimpin dan mengarahkan penyelenggaraan pendidikan pesantren",
      level: 1
    },
    {
      title: "Wakil Pimpinan",
      icon: <FaUsers />,
      description: "Membantu pimpinan dalam pelaksanaan program pesantren",
      level: 2,
      parent: "Pimpinan Pondok Pesantren"
    },
    {
      title: "Bagian Pendidikan dan Kurikulum",
      icon: <FaBook />,
      description: "Mengelola program pembelajaran dan pengembangan kurikulum",
      level: 2,
      parent: "Pimpinan Pondok Pesantren"
    },
    {
      title: "Bagian Kesantrian dan Pembinaan",
      icon: <FaUserGraduate />,
      description: "Mengelola pembinaan dan kesejahteraan santri",
      level: 2,
      parent: "Pimpinan Pondok Pesantren"
    },
    {
      title: "Bagian Sarana dan Prasarana",
      icon: <FaTools />,
      description: "Mengelola fasilitas dan infrastruktur pesantren",
      level: 2,
      parent: "Pimpinan Pondok Pesantren"
    },
    {
      title: "Bagian Keuangan dan Administrasi",
      icon: <FaMoneyBillWave />,
      description: "Mengelola keuangan dan administrasi pesantren",
      level: 2,
      parent: "Pimpinan Pondok Pesantren"
    },
    {
      title: "Bagian Humas dan Kerjasama",
      icon: <FaHandshake />,
      description: "Menjalin hubungan dengan masyarakat dan lembaga lain",
      level: 3,
      parent: "Wakil Pimpinan"
    },
    {
      title: "Koordinator Ekstrakurikuler",
      icon: <FaRunning />,
      description: "Mengkoordinir kegiatan pengembangan bakat santri",
      level: 3,
      parent: "Bagian Kesantrian dan Pembinaan"
    },
    {
      title: "Koordinator Keamanan dan Ketertiban",
      icon: <FaShieldAlt />,
      description: "Menjaga keamanan dan ketertiban lingkungan pesantren",
      level: 3,
      parent: "Bagian Kesantrian dan Pembinaan"
    }
  ];

  const getLevelItems = (level: number) => {
    return organizationStructure.filter(item => item.level === level);
  };

  return (
    <>
      <Navbar />
      <main className="container mx-auto py-8 px-4">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-3xl md:text-4xl font-bold mb-6 text-center text-emerald-700">
            Struktur Organisasi Pondok Pesantren YATI
          </h1>
          
          <div className="bg-white p-6 rounded-lg shadow-md mb-8">
            <p className="text-gray-600 text-lg leading-relaxed text-center max-w-3xl mx-auto">
              Struktur organisasi Pondok Pesantren YATI dirancang untuk mendukung
              kelancaran operasional dan pembinaan santri secara optimal. Setiap bagian
              memiliki peran dan tanggung jawab yang terkoordinasi dengan baik.
            </p>
          </div>

          {/* Organizational Chart */}
          <div className="bg-white rounded-lg shadow-lg p-8">
            {/* Level 1 - Pimpinan */}
            <div className="flex justify-center mb-12">
              <div className="text-center">
                <div className="inline-block p-6 bg-gradient-to-br from-emerald-500 to-emerald-600 text-white rounded-lg shadow-lg">
                  <div className="text-4xl mb-3">{organizationStructure[0].icon}</div>
                  <h3 className="text-lg font-semibold mb-2">{organizationStructure[0].title}</h3>
                  <p className="text-sm opacity-90">{organizationStructure[0].description}</p>
                </div>
              </div>
            </div>

            {/* Connecting Line */}
            <div className="flex justify-center mb-8">
              <div className="w-px h-8 bg-emerald-300"></div>
            </div>

            {/* Level 2 - Bagian Utama */}
            <div className="flex justify-center mb-12">
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
                {getLevelItems(2).map((item, index) => (
                  <div key={index} className="text-center">
                    <div className="inline-block p-4 bg-gradient-to-br from-blue-500 to-blue-600 text-white rounded-lg shadow-lg">
                      <div className="text-2xl mb-2">{item.icon}</div>
                      <h4 className="text-sm font-semibold mb-1">{item.title}</h4>
                      <p className="text-xs opacity-90">{item.description}</p>
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

            {/* Level 3 - Koordinator */}
            <div className="flex justify-center">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {getLevelItems(3).map((item, index) => (
                  <div key={index} className="text-center">
                    <div className="inline-block p-4 bg-gradient-to-br from-cyan-500 to-cyan-600 text-white rounded-lg shadow-lg">
                      <div className="text-2xl mb-2">{item.icon}</div>
                      <h4 className="text-sm font-semibold mb-1">{item.title}</h4>
                      <p className="text-xs opacity-90">{item.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="mt-8 bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-2xl font-semibold mb-4 text-center text-gray-800">
              Tata Kelola
            </h2>
            <p className="text-gray-600 leading-relaxed text-center max-w-3xl mx-auto">
              Setiap bagian dalam struktur organisasi bekerja secara sinergis untuk
              memastikan tercapainya visi dan misi pesantren. Koordinasi antar bagian
              dilakukan secara rutin melalui rapat evaluasi dan perencanaan program.
            </p>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
