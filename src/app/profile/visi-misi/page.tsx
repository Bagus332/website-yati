import Navbar from "@/components/Navbar";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="container mx-auto py-8 px-4">
        <h1 className="text-2xl font-bold mb-4 text-center">
          Visi & Misi Pondok Pesantren Yati
        </h1>
        <section className="mb-8">
          <h2 className="text-xl font-semibold mb-2">Visi</h2>
          <p className="mb-4">
            Mewujudkan generasi muslim yang berilmu, berakhlak mulia, mandiri,
            dan mampu berkontribusi positif bagi masyarakat serta bangsa.
          </p>
        </section>
        <section>
          <h2 className="text-xl font-semibold mb-2">Misi</h2>
          <ul className="list-disc pl-6 space-y-2">
            <li>
              Menyelenggarakan pendidikan berbasis Al-Qur'an dan Sunnah yang
              berkualitas.
            </li>
            <li>
              Membentuk karakter santri yang berakhlak mulia, disiplin, dan
              bertanggung jawab.
            </li>
            <li>
              Mengembangkan potensi santri dalam bidang ilmu pengetahuan,
              teknologi, dan keterampilan hidup.
            </li>
            <li>
              Menanamkan semangat kemandirian dan kepedulian sosial kepada
              santri.
            </li>
            <li>
              Mendorong santri untuk aktif berperan dalam pembangunan masyarakat
              dan bangsa.
            </li>
          </ul>
        </section>
      </main>
    </>
  );
}
