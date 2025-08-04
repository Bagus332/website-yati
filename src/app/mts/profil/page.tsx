import Navbar from "@/components/Navbar";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="container mx-auto py-8 px-4">
        <h1 className="text-2xl font-bold mb-4 text-center">
          Profil Madrasah Tsanawiyah (MTs) YATI Kamang Mudik
        </h1>
        
        <div className="mb-8 text-gray-700">
          <p className="mb-4 leading-relaxed">
            Madrasah Tsanawiyah (MTs) YATI Kamang Mudik merupakan lembaga pendidikan 
            tingkat menengah pertama yang menjadi bagian integral dari Pondok Pesantren 
            YATI Kamang Mudik. Bernaung di bawah Yayasan Tarbiyah Islamiyah Buya H. 
            Mansur, MTs YATI telah berperan aktif dalam mencerdaskan generasi muslim 
            sejak masa pendiriannya.
          </p>

          <p className="mb-4 leading-relaxed">
            Dengan menganut faham Ahlussunnah wal Jama'ah dalam kajian Akidah dan 
            berpegang pada Mazhab Syafi'i dalam kajian Fiqh, MTs YATI menerapkan 
            sistem pendidikan yang mengintegrasikan kurikulum nasional dengan nilai-nilai 
            kepesantrenan. Para santri tidak hanya dibekali dengan ilmu pengetahuan 
            umum, tetapi juga diajarkan pemahaman mendalam tentang ilmu-ilmu agama 
            melalui kajian kitab kuning dan program tahfidz Al-Qur'an.
          </p>

          <p className="mb-4 leading-relaxed">
            Metode pembelajaran di MTs YATI memadukan sistem klasikal modern dengan 
            tradisi pesantren. Pola halaqah dalam pendalaman kitab kuning dan tradisi 
            mudzakarah menjadi ciri khas yang membentuk karakter santri untuk berfikir 
            kritis dan moderat. Kurikulum yang diterapkan mengacu pada Kurikulum 2013 
            yang menekankan pendidikan berbasis karakter.
          </p>
        </div>

        <section className="mb-8">
          <h2 className="text-xl font-semibold mb-4 text-emerald-700">Program Unggulan</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="font-semibold mb-3">Program Wajib</h3>
              <ul className="list-disc pl-6 space-y-2 text-gray-600">
                <li>Program Tahfizhul Qur'an dengan tingkatan juz tertentu</li>
                <li>Pelatihan Komputer dan TIK terstruktur</li>
                <li>Kegiatan Pramuka sesuai Kurikulum 2013</li>
                <li>Program Muhadharah (Pidato dan Khutbah)</li>
              </ul>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="font-semibold mb-3">Pengembangan Diri</h3>
              <ul className="list-disc pl-6 space-y-2 text-gray-600">
                <li>Jahit menjahit dan Tata Busana</li>
                <li>Seni Bela Diri (Silat dan Karate)</li>
                <li>Forum Annisa'</li>
                <li>Kegiatan Sosial dan Dakwah Kemasyarakatan</li>
              </ul>
            </div>
          </div>
        </section>

        <section className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-xl font-semibold mb-4 text-emerald-700">Visi & Misi</h2>
          <div className="mb-6">
            <h3 className="font-semibold mb-2">Visi:</h3>
            <p className="text-gray-600">
              Terwujudnya siswa yang beriman, bertakwa, berkarakter dan berprestasi
            </p>
          </div>
          <div>
            <h3 className="font-semibold mb-2">Misi:</h3>
            <ul className="list-disc pl-6 space-y-2 text-gray-600">
              <li>Mewujudkan penyelenggaraan pendidikan yang berorientasi pada mutu</li>
              <li>Mewujudkan manajemen Madrasah yang akuntabiliatas</li>
              <li>Mewujudkan sumber daya manusia yang cerdas baik intelektual, emosional dan spiritual</li>
              <li>Penguasaan ilmu-ilmu agama dan umum</li>
              <li>Mewujudkan sarana dan prasarana yang memadai dan berkualitas</li>
              <li>Mewujudkan partisipasi aktif masyarakat terhadap pendidikan Madrasah</li>
            </ul>
          </div>
        </section>
      </main>
    </>
  );
}
