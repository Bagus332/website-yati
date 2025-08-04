import Navbar from "@/components/Navbar";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="container mx-auto py-8 px-4">
        <h1 className="text-2xl font-bold mb-4 text-center">
          Profil Madrasah Aliyah (MA) YATI Kamang Mudik
        </h1>
        <div className="mb-6 text-gray-700">
          <p className="mb-4 leading-relaxed">
            Madrasah Aliyah (MA) YATI merupakan lembaga pendidikan tingkat menengah atas
            yang menjadi bagian integral dari Pondok Pesantren YATI Kamang Mudik.
            Didirikan di bawah naungan Yayasan Tarbiyah Islamiyah Buya H. Mansur,
            MA YATI konsisten menjalankan sistem pendidikan yang mengintegrasikan
            nilai-nilai kepesantrenan dengan kurikulum nasional modern.
          </p>
          <p className="mb-4 leading-relaxed">
            Berlokasi strategis di Jalan Kampung Baru, Jorong Pakan Sinayan,
            Nagari Kamang Mudiak, Kecamatan Kamang Magek, Kabupaten Agam,
            MA YATI telah membuktikan diri sebagai lembaga pendidikan Islam
            yang terpercaya sejak masa pendiriannya. Dengan menganut faham
            Ahlussunnah wal Jama'ah dalam kajian Akidah dan berpegang pada
            Mazhab Syafi'i dalam kajian Fiqh, MA YATI berkomitmen mencetak
            generasi Muslim yang tafaqquh fiddin.
          </p>
          <p className="mb-4 leading-relaxed">
            Sistem pembelajaran di MA YATI menerapkan pendekatan komprehensif
            dengan memadukan tradisi pesantren dan modernitas. Para santri tidak
            hanya mendalami ilmu-ilmu agama melalui kajian kitab kuning dan
            program tahfidz Al-Qur'an, tetapi juga dibekali dengan ilmu pengetahuan
            umum sesuai Kurikulum 2013. Metode pembelajaran yang diterapkan
            mencakup sistem halaqah untuk pendalaman kitab kuning dan sistem
            klasikal untuk pembelajaran umum, diperkaya dengan tradisi mudzakarah
            untuk mengembangkan pemikiran kritis dan moderat.
          </p>
          <p className="mb-4 leading-relaxed">
            Komitmen MA YATI dalam membentuk karakter santri diwujudkan melalui
            berbagai program ekstrakurikuler yang komprehensif, mulai dari program
            tahfidz, muhadharah, hingga kegiatan pengembangan life skill.
            Dengan pendekatan pendidikan yang holistik ini, MA YATI berupaya
            mewujudkan visinya dalam menghasilkan lulusan yang beriman, bertakwa,
            berkarakter, dan berprestasi.
          </p>
        </div>

        <section className="mb-8">
          <h2 className="text-xl font-semibold mb-4 text-emerald-700">
            Program Unggulan MA YATI
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="font-semibold mb-3">Program Wajib</h3>
              <ul className="list-disc pl-6 space-y-2 text-gray-600">
                <li>Tahfizhul Qur'an dengan tingkatan juz tertentu</li>
                <li>Pelatihan Komputer dan TIK terstruktur</li>
                <li>Kegiatan Pramuka sesuai Kurikulum 2013</li>
                <li>Program Muhadharah (pidato dan khutbah)</li>
              </ul>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="font-semibold mb-3">Program Pengembangan</h3>
              <ul className="list-disc pl-6 space-y-2 text-gray-600">
                <li>Jahit menjahit dan Tata Busana</li>
                <li>Seni Bela Diri (Silat dan Karate)</li>
                <li>Forum Annisa'</li>
                <li>Kegiatan Sosial Kemasyarakatan</li>
              </ul>
            </div>
          </div>
        </section>

        <section>
          <h2 className="text-xl font-semibold mb-4 text-emerald-700">
            Visi & Misi
          </h2>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <div className="mb-6">
              <h3 className="font-semibold mb-2">Visi:</h3>
              <p className="text-gray-600">
                Terwujudnya siswa yang beriman, bertakwa, berkarakter dan
                berprestasi
              </p>
            </div>
            <div>
              <h3 className="font-semibold mb-2">Misi:</h3>
              <ul className="list-disc pl-6 space-y-2 text-gray-600">
                <li>
                  Mewujudkan penyelenggaraan pendidikan yang berorientasi pada
                  mutu
                </li>
                <li>Mewujudkan manajemen Madrasah yang akuntabiliatas</li>
                <li>
                  Mewujudkan sumber daya manusia yang cerdas baik intelektual,
                  emosional dan spiritual
                </li>
                <li>Penguasaan ilmu-ilmu agama dan umum</li>
                <li>
                  Mewujudkan sarana dan prasarana yang memadai dan berkualitas
                </li>
                <li>
                  Mewujudkan partisipasi aktif masyarakat terhadap pendidikan
                  Madrasah
                </li>
              </ul>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
