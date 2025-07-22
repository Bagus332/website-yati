import Navbar from "@/components/Navbar";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="container mx-auto py-8 px-4">
        <h1 className="text-2xl font-bold mb-4 text-center">
          Profil Madrasah Tsanawiyah (MTs) Yati
        </h1>
        <div className="mb-6 text-center">
          <p className="mb-4">
            Madrasah Tsanawiyah (MTs) Yati adalah lembaga pendidikan tingkat
            menengah pertama di bawah naungan Pondok Pesantren Yati yang
            berfokus pada pembinaan ilmu pengetahuan umum dan agama Islam bagi
            santri usia remaja.
          </p>
          <p className="mb-4">
            MTs Yati mengintegrasikan kurikulum nasional dengan pendidikan
            agama, membentuk santri yang berilmu, berakhlak mulia, dan siap
            melanjutkan ke jenjang pendidikan lebih tinggi.
          </p>
        </div>
        <section className="mb-8">
          <h2 className="text-xl font-semibold mb-2">Keunggulan MTs Yati</h2>
          <ul className="list-disc pl-6 space-y-2 text-left">
            <li>Guru berpengalaman dan kompeten di bidangnya</li>
            <li>Fasilitas belajar yang memadai</li>
            <li>Pembinaan karakter dan akhlak santri</li>
            <li>Program tahfidz Al-Qur'an dan kajian kitab dasar</li>
            <li>Kegiatan ekstrakurikuler untuk pengembangan minat dan bakat</li>
            <li>Pembekalan keterampilan hidup</li>
          </ul>
        </section>
        <section>
          <h2 className="text-xl font-semibold mb-2">Visi & Misi MTs Yati</h2>
          <p className="mb-2 font-semibold">Visi:</p>
          <p className="mb-4">
            Mewujudkan generasi muslim yang berilmu, berakhlak mulia, dan siap
            menghadapi tantangan masa depan.
          </p>
          <p className="mb-2 font-semibold">Misi:</p>
          <ul className="list-disc pl-6 space-y-2 text-left">
            <li>
              Menyelenggarakan pendidikan berkualitas berbasis nilai-nilai Islam
            </li>
            <li>Mengembangkan potensi akademik dan non-akademik santri</li>
            <li>Menanamkan semangat kemandirian dan kepedulian sosial</li>
            <li>Mendorong santri untuk berprestasi di berbagai bidang</li>
          </ul>
        </section>
      </main>
    </>
  );
}
