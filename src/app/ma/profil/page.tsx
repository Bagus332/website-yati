import Navbar from "@/components/Navbar";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="container mx-auto py-8 px-4">
        <h1 className="text-2xl font-bold mb-4 text-center">
          Profil Madrasah Aliyah (MA) Yati
        </h1>
        <div className="mb-6 text-center">
          <p className="mb-4">
            Madrasah Aliyah (MA) Yati merupakan salah satu lembaga pendidikan
            formal di bawah naungan Pondok Pesantren Yati yang berfokus pada
            pengembangan ilmu pengetahuan umum dan agama Islam bagi para santri
            tingkat menengah atas.
          </p>
          <p className="mb-4">
            MA Yati memiliki kurikulum terpadu yang menggabungkan pendidikan
            agama, sains, teknologi, dan keterampilan hidup, sehingga lulusan MA
            Yati diharapkan mampu bersaing di dunia pendidikan tinggi maupun
            dunia kerja.
          </p>
        </div>
        <section className="mb-8">
          <h2 className="text-xl font-semibold mb-2">Keunggulan MA Yati</h2>
          <ul className="list-disc pl-6 space-y-2 text-left">
            <li>Tenaga pendidik profesional dan berpengalaman</li>
            <li>Fasilitas belajar lengkap dan modern</li>
            <li>Pembinaan karakter dan akhlak mulia</li>
            <li>Program tahfidz Al-Qur'an dan kajian kitab kuning</li>
            <li>Kegiatan ekstrakurikuler yang beragam</li>
            <li>Pembekalan keterampilan hidup dan teknologi</li>
          </ul>
        </section>
        <section>
          <h2 className="text-xl font-semibold mb-2">Visi & Misi MA Yati</h2>
          <p className="mb-2 font-semibold">Visi:</p>
          <p className="mb-4">
            Mewujudkan generasi muslim yang berilmu, berakhlak mulia, dan siap
            menghadapi tantangan zaman.
          </p>
          <p className="mb-2 font-semibold">Misi:</p>
          <ul className="list-disc pl-6 space-y-2 text-left">
            <li>
              Menyelenggarakan pendidikan berkualitas berbasis nilai-nilai Islam
            </li>
            <li>Mengembangkan potensi akademik dan non-akademik santri</li>
            <li>Menanamkan semangat kemandirian dan kepedulian sosial</li>
            <li>
              Mendorong santri untuk berprestasi di tingkat lokal, nasional, dan
              internasional
            </li>
          </ul>
        </section>
      </main>
    </>
  );
}
