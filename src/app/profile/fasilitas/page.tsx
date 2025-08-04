import Navbar from "@/components/Navbar";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="container mx-auto py-8 px-4">
        <h1 className="text-2xl font-bold mb-4 text-center">
          Fasilitas Pondok Pesantren Yati
        </h1>
        <p className="mb-6 text-gray-700 leading-relaxed">
          Pondok Pesantren Yati berkomitmen untuk menyediakan lingkungan belajar yang
          optimal bagi para santri. Dengan lahan yang luas dan fasilitas yang terawat dengan baik,
          kami memastikan setiap santri dapat menjalani proses pendidikan dengan nyaman dan fokus.
          Berikut adalah fasilitas-fasilitas yang tersedia di Pondok Pesantren Yati:
        </p>

        <div className="grid md:grid-cols-2 gap-8 mb-8">
          <div className="space-y-6">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h2 className="text-xl font-semibold mb-4 text-emerald-700">Fasilitas Pembelajaran</h2>
              <ul className="list-disc pl-6 space-y-2 text-gray-700">
                <li>10 ruang kelas yang representatif dan terawat</li>
                <li>Perpustakaan dengan koleksi buku agama dan umum</li>
                <li>Laboratorium komputer modern</li>
                <li>Ruang guru dan ruang tata usaha</li>
                <li>Ruang konseling untuk bimbingan santri</li>
              </ul>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <h2 className="text-xl font-semibold mb-4 text-emerald-700">Fasilitas Ibadah & Kesehatan</h2>
              <ul className="list-disc pl-6 space-y-2 text-gray-700">
                <li>Masjid sebagai pusat kegiatan ibadah dan kajian</li>
                <li>Ruang UKS untuk pelayanan kesehatan santri</li>
                <li>7 unit kamar mandi/toilet (5 dalam kondisi baik)</li>
              </ul>
            </div>
          </div>

          <div className="space-y-6">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h2 className="text-xl font-semibold mb-4 text-emerald-700">Fasilitas Olahraga & Organisasi</h2>
              <ul className="list-disc pl-6 space-y-2 text-gray-700">
                <li>3 area olahraga yang terpelihara dengan baik</li>
                <li>Ruang organisasi kesiswaan untuk kegiatan ekstrakurikuler</li>
              </ul>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <h2 className="text-xl font-semibold mb-4 text-emerald-700">Fasilitas Administrasi</h2>
              <ul className="list-disc pl-6 space-y-2 text-gray-700">
                <li>Ruang pimpinan yang representatif</li>
                <li>Ruang tata usaha untuk pelayanan administrasi</li>
              </ul>
            </div>
          </div>
        </div>

        <p className="mt-6 text-gray-700 leading-relaxed text-center italic">
          Kami terus berkomitmen untuk meningkatkan dan memelihara kualitas fasilitas
          yang ada demi mendukung terciptanya lingkungan belajar yang kondusif bagi
          para santri Pondok Pesantren Yati. Pengembangan fasilitas dilakukan secara
          berkelanjutan sesuai dengan kebutuhan dan perkembangan pendidikan.
        </p>
      </main>
    </>
  );
}
