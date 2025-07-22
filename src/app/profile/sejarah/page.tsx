import Navbar from "@/components/Navbar";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="container mx-auto py-8 px-4">
        <h1 className="text-2xl font-bold mb-4 text-center">
          Sejarah Pondok Pesantren Yati
        </h1>
        <p className="mb-6">
          Pondok Pesantren Yati didirikan pada tahun 1985 oleh KH. Ahmad Yati
          dengan tujuan utama membina generasi muda agar berakhlak mulia dan
          berilmu pengetahuan agama yang mendalam. Awalnya, pesantren ini hanya
          memiliki beberapa santri dan fasilitas sederhana.
        </p>
        <p className="mb-6">
          Seiring berjalannya waktu, jumlah santri semakin bertambah dan
          fasilitas pesantren pun berkembang. Berbagai program pendidikan dan
          pembinaan karakter mulai diterapkan, menjadikan Pondok Pesantren Yati
          sebagai salah satu pesantren yang diperhitungkan di wilayah Jawa
          Barat.
        </p>
        <p>
          Hingga saat ini, Pondok Pesantren Yati terus berinovasi dalam bidang
          pendidikan, memperluas jaringan kerjasama, dan meningkatkan kualitas
          sumber daya manusia demi tercapainya visi dan misi pesantren.
        </p>
      </main>
    </>
  );
}
