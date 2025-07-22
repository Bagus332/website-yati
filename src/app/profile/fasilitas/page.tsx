import Navbar from "@/components/Navbar";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="container mx-auto py-8 px-4">
        <h1 className="text-2xl font-bold mb-4 text-center">
          Fasilitas Pondok Pesantren Yati
        </h1>
        <p className="mb-6">
          Pondok Pesantren Yati menyediakan berbagai fasilitas untuk mendukung
          kegiatan belajar, ibadah, dan kehidupan santri sehari-hari. Berikut
          beberapa fasilitas yang tersedia:
        </p>
        <ul className="list-disc pl-6 space-y-2">
          <li>Masjid utama untuk kegiatan ibadah dan kajian</li>
          <li>Asrama santri yang nyaman dan bersih</li>
          <li>Ruang kelas yang representatif</li>
          <li>Perpustakaan dengan koleksi buku agama dan umum</li>
          <li>Laboratorium komputer dan IPA</li>
          <li>Lapangan olahraga (futsal, voli, bulu tangkis)</li>
          <li>Dapur umum dan kantin</li>
          <li>Ruang tamu dan ruang pertemuan</li>
          <li>Klinik kesehatan</li>
          <li>Area parkir yang luas</li>
        </ul>
        <p className="mt-6">
          Semua fasilitas tersebut diharapkan dapat menunjang proses pendidikan
          dan pembinaan karakter santri di Pondok Pesantren Yati.
        </p>
      </main>
    </>
  );
}
