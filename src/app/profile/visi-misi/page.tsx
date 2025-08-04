import Navbar from "@/components/Navbar";
import { FaEye, FaCrosshairs, FaLightbulb, FaStar } from "react-icons/fa";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="container mx-auto py-8 px-4">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-3xl md:text-4xl font-bold mb-8 text-center text-gray-800">
            Visi & Misi Pondok Pesantren YATI
          </h1>

          {/* Vision Section */}
          <section className="mb-12 bg-white rounded-lg shadow-md p-6">
            <div className="flex items-center space-x-3 mb-6">
              <FaEye className="text-3xl text-emerald-500" />
              <h2 className="text-2xl font-semibold text-gray-800">Visi</h2>
            </div>
            <p className="text-lg mb-6 text-gray-700 font-medium">
              "Terwujudnya siswa yang beriman, bertakwa, berkarakter dan
              berprestasi"
            </p>

            <div className="bg-gray-50 rounded-lg p-6">
              <div className="flex items-center space-x-2 mb-4">
                <FaLightbulb className="text-emerald-500" />
                <h3 className="font-semibold text-lg">Indikator:</h3>
              </div>
              <div className="grid md:grid-cols-2 gap-6">
                {[{
                  title: "Beriman",
                  description:
                    "Memiliki kepercayaan kepada Allah SWT dengan penuh keyakinan dan tanpa keraguan.",
                },
                {
                  title: "Bertakwa",
                  description: "Melaksanakan segala perintah dan menjauhi larangan Allah SWT",
                },
                {
                  title: "Berkarakter",
                  description:
                    "Memiliki cara berfikir dan berperilaku untuk hidup dan bekerja sama baik dalam lingkup keluarga, masyarakat, agama, bangsa dan negara",
                },
                {
                  title: "Berprestasi",
                  description:
                    "Memiliki kualitas yang tinggi dalam penguasaan Iptek dan Imtak serta keterampilan yang berjiwa kompetitif dan Islami",
                }].map((item, index) => (
                  <div
                    key={index}
                    className="bg-white p-4 rounded-lg shadow-sm"
                  >
                    <h4 className="font-semibold text-emerald-600 mb-2">
                      {item.title}
                    </h4>
                    <p className="text-gray-600">{item.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Mission Section */}
          <section className="bg-white rounded-lg shadow-md p-6">
            <div className="flex items-center space-x-3 mb-6">
              <FaCrosshairs className="text-3xl text-emerald-500" />
              <h2 className="text-2xl font-semibold text-gray-800">Misi</h2>
            </div>
            <div className="grid gap-4">
              {[
                "Mewujudkan penyelenggaraan pendidikan yang berorientasi pada mutu, baik pada mutu tenaga pendidik dan kependidikan maupun mutu siswa.",
                "Mewujudkan manajemen Madrasah yang akuntabiliatas.",
                "Mewujudkan sumber daya manusia yang cerdas baik intelektual, emosional dan spiritual.",
                "Penguasaan ilmu-ilmu agama dan umum.",
                "Mewujudkan sarana dan prasarana yang memadai dan berkualitas sesuai dengan kebutuhan.",
                "Mewujudkan partisipasi aktif masyarakat terhadap pendidikan Madrasah."
              ].map((mission, index) => (
                <div
                  key={index}
                  className="flex items-start space-x-4 p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors"
                >
                  <div className="mt-1">
                    <FaStar className="text-emerald-500" />
                  </div>
                  <p className="text-gray-700">{mission}</p>
                </div>
              ))}
            </div>
          </section>
        </div>
      </main>
    </>
  );
}
