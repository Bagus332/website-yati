import Navbar from "@/components/Navbar";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="container mx-auto py-8 px-4">
        <h1 className="text-2xl font-bold mb-4 text-center">
          Manajemen Pondok Pesantren Yati
        </h1>
        <p className="mb-6">
          Pondok Pesantren Yati dikelola oleh tim manajemen yang profesional dan
          berkomitmen dalam menjalankan visi dan misi pesantren. Struktur
          manajemen terdiri dari beberapa bagian utama:
        </p>
        <ul className="list-disc pl-6 space-y-2">
          <li>Pimpinan Pondok Pesantren</li>
          <li>Wakil Pimpinan</li>
          <li>Bagian Pendidikan dan Kurikulum</li>
          <li>Bagian Kesantrian dan Pembinaan</li>
          <li>Bagian Sarana dan Prasarana</li>
          <li>Bagian Keuangan dan Administrasi</li>
          <li>Bagian Humas dan Kerjasama</li>
        </ul>
        <p className="mt-6">
          Setiap bagian memiliki tugas dan tanggung jawab masing-masing untuk
          memastikan seluruh kegiatan di pesantren berjalan dengan baik,
          terkoordinasi, dan sesuai dengan tujuan pendidikan Islam.
        </p>
      </main>
    </>
  );
}
