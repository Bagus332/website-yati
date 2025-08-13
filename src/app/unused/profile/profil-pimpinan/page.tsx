import Navbar from "@/components/Navbar";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="container mx-auto py-8 px-4">
        <h1 className="text-2xl font-bold mb-4 text-center">
          Profil Pimpinan Pondok Pesantren Yati
        </h1>
        <div className="mb-6">
          <p>
            Pondok Pesantren Yati dipimpin oleh{" "}
            <span className="font-semibold">KH. Ahmad Yati</span>, seorang ulama
            yang berdedikasi dalam pengembangan pendidikan Islam dan pembinaan
            generasi muda. Beliau dikenal sebagai sosok yang ramah, tegas, dan
            visioner dalam memajukan pesantren.
          </p>
        </div>
        <div className="mb-6">
          <h2 className="text-lg font-semibold mb-2">Riwayat Pendidikan</h2>
          <ul className="list-disc pl-6">
            <li>Lulusan Pesantren Ternama di Jawa Barat</li>
            <li>Studi lanjut di Universitas Islam Negeri</li>
            <li>Aktif dalam berbagai pelatihan kepemimpinan dan pendidikan</li>
          </ul>
        </div>
        <div>
          <h2 className="text-lg font-semibold mb-2">Visi Kepemimpinan</h2>
          <p>
            Mewujudkan Pondok Pesantren Yati sebagai pusat pendidikan Islam yang
            unggul, berkarakter, dan berwawasan luas, serta membina santri
            menjadi generasi yang berakhlak mulia dan berilmu.
          </p>
        </div>
      </main>
    </>
  );
}
