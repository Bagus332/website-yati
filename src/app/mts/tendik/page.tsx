import Navbar from "@/components/Navbar";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="container mx-auto py-8 px-4">
        <h1 className="text-2xl font-bold mb-4 text-center">
          Tenaga Kependidikan MTs Yati
        </h1>
        <div className="mb-6 text-center">
          <p className="mb-4">
            Tenaga kependidikan di Madrasah Tsanawiyah (MTs) Yati terdiri dari
            guru, staf administrasi, dan pembina yang berkomitmen dalam
            mendukung proses pembelajaran dan pembinaan karakter santri.
          </p>
        </div>
        <section>
          <h2 className="text-xl font-semibold mb-2">
            Daftar Tenaga Kependidikan
          </h2>
          <ul className="list-disc pl-6 space-y-2 text-left">
            <li>Ustadz H. Ahmad Yati – Kepala Madrasah</li>
            <li>
              Ustadzah Siti Aminah, S.Pd.I – Wakil Kepala Bidang Kurikulum
            </li>
            <li>Ustadz M. Ridwan, S.Pd – Guru Matematika</li>
            <li>Ustadzah Nurul Hidayah, S.Pd – Guru Bahasa Indonesia</li>
            <li>Ustadz Abdul Aziz, S.Ag – Guru Pendidikan Agama Islam</li>
            <li>Ustadzah Fitriani, S.Pd – Guru IPA</li>
            <li>Ustadz Deni Saputra – Staf Administrasi</li>
            <li>Ustadzah Rina Marlina – Pembina Asrama</li>
            <li>
              Dan tenaga kependidikan lainnya yang profesional dan berdedikasi
            </li>
          </ul>
        </section>
        <section className="mt-8">
          <h2 className="text-xl font-semibold mb-2">
            Komitmen Tenaga Kependidikan
          </h2>
          <p>
            Seluruh tenaga kependidikan MTs Yati berperan aktif dalam
            menciptakan lingkungan belajar yang kondusif, membina akhlak santri,
            serta mendukung visi dan misi madrasah untuk mencetak generasi
            muslim yang unggul dan berkarakter.
          </p>
        </section>
      </main>
    </>
  );
}
