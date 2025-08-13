import Navbar from "@/components/Navbar";
import Image from "next/image";
import { FaUserTie, FaChalkboardTeacher, FaUserCog } from "react-icons/fa";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="container mx-auto py-8 px-4">
        <h1 className="text-2xl font-bold mb-4 text-center">
          Tenaga Kependidikan MTs YATI Kamang Mudik
        </h1>

        {/* Overview Section */}
        <div className="mb-10 max-w-3xl mx-auto text-center">
          <p className="text-gray-600 leading-relaxed">
            Tenaga kependidikan di MTs YATI terdiri dari para profesional yang
            berdedikasi dalam membina dan mendidik para santri. Dengan kompetensi
            yang mumpuni dan pengalaman yang luas, mereka berkomitmen dalam
            mengembangkan potensi akademik dan karakter islami para santri.
          </p>
        </div>

        {/* Categories Section */}
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          <div className="bg-white p-6 rounded-lg shadow-md text-center">
            <div className="text-4xl text-emerald-500 mb-4 flex justify-center">
              <FaUserTie />
            </div>
            <h3 className="text-lg font-semibold mb-2">Pimpinan Madrasah</h3>
            <p className="text-gray-600">
              Mengelola dan memimpin penyelenggaraan pendidikan
            </p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md text-center">
            <div className="text-4xl text-emerald-500 mb-4 flex justify-center">
              <FaChalkboardTeacher />
            </div>
            <h3 className="text-lg font-semibold mb-2">Tenaga Pendidik</h3>
            <p className="text-gray-600">
              Membimbing dan mendidik santri dalam pembelajaran
            </p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md text-center">
            <div className="text-4xl text-emerald-500 mb-4 flex justify-center">
              <FaUserCog />
            </div>
            <h3 className="text-lg font-semibold mb-2">Tenaga Kependidikan</h3>
            <p className="text-gray-600">
              Mendukung kelancaran proses pendidikan
            </p>
          </div>
        </div>

        {/* Staff Directory */}
        <div className="grid md:grid-cols-2 gap-8">
          {/* Pimpinan Section */}
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-xl font-semibold mb-4 text-emerald-700 border-b pb-2">
              Pimpinan Madrasah
            </h2>
            <div className="space-y-4">
              <div className="flex items-start space-x-4">
                <div className="w-24 h-24 relative rounded-lg overflow-hidden bg-gray-100">
                  <Image
                    src="/placeholder-profile.jpg"
                    alt="Kepala Madrasah"
                    fill
                    className="object-cover"
                  />
                </div>
                <div>
                  <h3 className="font-semibold">Ustadz H. Ahmad Yati</h3>
                  <p className="text-emerald-600">Kepala Madrasah</p>
                </div>
              </div>
            </div>
          </div>

          {/* Teaching Staff Section */}
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-xl font-semibold mb-4 text-emerald-700 border-b pb-2">
              Tenaga Pendidik
            </h2>
            <div className="grid grid-cols-1 gap-4">
              <div className="flex items-center space-x-4 p-3 hover:bg-gray-50 rounded-lg transition-colors">
                <div className="w-12 h-12 relative rounded-full overflow-hidden bg-gray-100">
                  <Image
                    src="/placeholder-profile.jpg"
                    alt="Staff photo"
                    fill
                    className="object-cover"
                  />
                </div>
                <div>
                  <h3 className="font-semibold">Ustadzah Siti Aminah, S.Pd.I</h3>
                  <p className="text-sm text-emerald-600">
                    Wakil Kepala Bidang Kurikulum
                  </p>
                </div>
              </div>
              <div className="flex items-center space-x-4 p-3 hover:bg-gray-50 rounded-lg transition-colors">
                <div className="w-12 h-12 relative rounded-full overflow-hidden bg-gray-100">
                  <Image
                    src="/placeholder-profile.jpg"
                    alt="Staff photo"
                    fill
                    className="object-cover"
                  />
                </div>
                <div>
                  <h3 className="font-semibold">Ustadz M. Ridwan, S.Pd</h3>
                  <p className="text-sm text-emerald-600">Guru Matematika</p>
                </div>
              </div>
              <div className="flex items-center space-x-4 p-3 hover:bg-gray-50 rounded-lg transition-colors">
                <div className="w-12 h-12 relative rounded-full overflow-hidden bg-gray-100">
                  <Image
                    src="/placeholder-profile.jpg"
                    alt="Staff photo"
                    fill
                    className="object-cover"
                  />
                </div>
                <div>
                  <h3 className="font-semibold">Ustadzah Nurul Hidayah, S.Pd</h3>
                  <p className="text-sm text-emerald-600">Guru Bahasa Indonesia</p>
                </div>
              </div>
              {/* Add more teaching staff here */}
            </div>
          </div>
        </div>

        {/* Support Staff Section */}
        <div className="mt-8 bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-xl font-semibold mb-4 text-emerald-700 border-b pb-2">
            Tenaga Kependidikan
          </h2>
          <div className="grid md:grid-cols-2 gap-4">
            <div className="flex items-center space-x-4 p-3 hover:bg-gray-50 rounded-lg transition-colors">
              <div className="w-12 h-12 relative rounded-full overflow-hidden bg-gray-100">
                <Image
                  src="/placeholder-profile.jpg"
                  alt="Staff photo"
                  fill
                  className="object-cover"
                />
              </div>
              <div>
                <h3 className="font-semibold">Ustadz Deni Saputra</h3>
                <p className="text-sm text-emerald-600">Staf Administrasi</p>
              </div>
            </div>
            <div className="flex items-center space-x-4 p-3 hover:bg-gray-50 rounded-lg transition-colors">
              <div className="w-12 h-12 relative rounded-full overflow-hidden bg-gray-100">
                <Image
                  src="/placeholder-profile.jpg"
                  alt="Staff photo"
                  fill
                  className="object-cover"
                />
              </div>
              <div>
                <h3 className="font-semibold">Ustadzah Rina Marlina</h3>
                <p className="text-sm text-emerald-600">Pembina Asrama</p>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
