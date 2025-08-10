import Navbar from "@/components/Navbar";
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
      description: "Memimpin dan mengarahkan penyelenggaraan pendidikan pesantren"
    },
    {
      title: "Wakil Pimpinan",
      icon: <FaUsers />,
      description: "Membantu pimpinan dalam pelaksanaan program pesantren"
    },
    {
      title: "Bagian Pendidikan dan Kurikulum",
      icon: <FaBook />,
      description: "Mengelola program pembelajaran dan pengembangan kurikulum"
    },
    {
      title: "Bagian Kesantrian dan Pembinaan",
      icon: <FaUserGraduate />,
      description: "Mengelola pembinaan dan kesejahteraan santri"
    },
    {
      title: "Bagian Sarana dan Prasarana",
      icon: <FaTools />,
      description: "Mengelola fasilitas dan infrastruktur pesantren"
    },
    {
      title: "Bagian Keuangan dan Administrasi",
      icon: <FaMoneyBillWave />,
      description: "Mengelola keuangan dan administrasi pesantren"
    },
    {
      title: "Bagian Humas dan Kerjasama",
      icon: <FaHandshake />,
      description: "Menjalin hubungan dengan masyarakat dan lembaga lain"
    },
    {
      title: "Koordinator Ekstrakurikuler",
      icon: <FaRunning />,
      description: "Mengkoordinir kegiatan pengembangan bakat santri"
    },
    {
      title: "Koordinator Keamanan dan Ketertiban",
      icon: <FaShieldAlt />,
      description: "Menjaga keamanan dan ketertiban lingkungan pesantren"
    }
  ];

  return (
    <>
      <Navbar />
      <main className="container mx-auto py-8 px-4">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-3xl md:text-4xl font-bold mb-6 text-center">
            Struktur Organisasi Pondok Pesantren YATI
          </h1>
          
          <div className="bg-white p-6 rounded-lg shadow-md mb-8">
            <p className="text-gray-600 text-lg leading-relaxed text-center max-w-3xl mx-auto">
              Struktur organisasi Pondok Pesantren YATI dirancang untuk mendukung
              kelancaran operasional dan pembinaan santri secara optimal. Setiap bagian
              memiliki peran dan tanggung jawab yang terkoordinasi dengan baik.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {organizationStructure.map((item, index) => (
              <div 
                key={index}
                className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-all duration-300"
              >
                <div className="text-3xl text-emerald-500 mb-4">
                  {item.icon}
                </div>
                <h3 className="text-xl font-semibold mb-3 text-gray-800">
                  {item.title}
                </h3>
                <p className="text-gray-600">
                  {item.description}
                </p>
              </div>
            ))}
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
    </>
  );
}
