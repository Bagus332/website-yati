import Navbar from "@/components/Navbar";
import { FaUsers, FaUserTie, FaBook, FaHome, FaMoneyBillWave, FaHandshake } from "react-icons/fa";

export default function Home() {
  const managementStructure = [
    {
      title: "Pimpinan Pondok Pesantren",
      icon: <FaUserTie />,
      description: "Memimpin dan mengarahkan seluruh kegiatan pesantren sesuai visi dan misi"
    },
    {
      title: "Wakil Pimpinan",
      icon: <FaUsers />,
      description: "Membantu pimpinan dalam pelaksanaan program dan pengambilan keputusan"
    },
    {
      title: "Bagian Pendidikan dan Kurikulum",
      icon: <FaBook />,
      description: "Mengelola program pembelajaran dan pengembangan kurikulum"
    },
    {
      title: "Bagian Kesantrian dan Pembinaan",
      icon: <FaUsers />,
      description: "Mengatur pembinaan dan kesejahteraan santri"
    },
    {
      title: "Bagian Sarana dan Prasarana",
      icon: <FaHome />,
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
    }
  ];

  return (
    <>
      <Navbar />
      <main className="container mx-auto py-8 px-4">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-3xl md:text-4xl font-bold mb-6 text-center">
            Manajemen Pondok Pesantren YATI
          </h1>
          
          <div className="bg-white p-6 rounded-lg shadow-md mb-8">
            <p className="text-gray-600 text-lg leading-relaxed text-center max-w-3xl mx-auto">
              Pondok Pesantren YATI dikelola oleh tim manajemen yang profesional dan
              berkomitmen dalam menjalankan visi dan misi pesantren. Manajemen
              pesantren disusun secara sistematis untuk memastikan kualitas
              pendidikan dan pembinaan santri.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {managementStructure.map((item, index) => (
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
              Setiap bagian memiliki tugas dan tanggung jawab yang terstruktur untuk
              memastikan seluruh kegiatan di pesantren berjalan dengan baik,
              terkoordinasi, dan sesuai dengan tujuan pendidikan Islam. Sistem
              manajemen yang diterapkan mengutamakan profesionalisme dan akuntabilitas
              dalam setiap aspek pengelolaan pesantren.
            </p>
          </div>
        </div>
      </main>
    </>
  );
}
