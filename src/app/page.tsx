import Image from "next/image";
import Navbar from "../components/Navbar";

export default function Home() {
  return (
    <div className="font-sans min-h-screen flex flex-col bg-gradient-to-br from-green-50 to-green-200">
      <Navbar />
      <main className="flex flex-col items-center justify-center flex-1 px-4 py-12 sm:py-20">
        <Image
          src="/logo-ponpes.png"
          alt="Logo Pondok Pesantren Yati"
          width={120}
          height={120}
          className="mb-6 rounded-full shadow-lg"
          priority
        />
        <h1 className="text-3xl sm:text-5xl font-bold text-green-900 mb-4 text-center">
          Pondok Pesantren Yati
        </h1>
        <p className="text-lg sm:text-xl text-green-800 mb-8 text-center max-w-2xl">
          Selamat datang di website resmi Pondok Pesantren Yati. Tempat pendidikan
          agama, pengembangan karakter, dan pembinaan generasi Islami yang
          berakhlak mulia.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 mb-10">
          <a
            className="rounded-full bg-green-700 text-white px-6 py-3 font-semibold shadow hover:bg-green-800 transition"
            href="#profil"
          >
            Profil Pesantren
          </a>
          <a
            className="rounded-full bg-white border border-green-700 text-green-700 px-6 py-3 font-semibold shadow hover:bg-green-100 transition"
            href="#pendaftaran"
          >
            Pendaftaran Santri
          </a>
        </div>
        <section
          id="profil"
          className="bg-white rounded-xl shadow p-6 max-w-2xl w-full mb-8"
        >
          <h2 className="text-2xl font-bold text-green-900 mb-2">
            Tentang Kami
          </h2>
          <p className="text-green-800">
            Pondok Pesantren Yati berdiri sejak tahun 1980 dan telah melahirkan
            ribuan santri yang berprestasi di bidang agama maupun umum. Kami
            berkomitmen memberikan pendidikan terbaik dengan mengedepankan
            nilai-nilai Islam, disiplin, dan cinta tanah air.
          </p>
        </section>
        <section
          id="pendaftaran"
          className="bg-white rounded-xl shadow p-6 max-w-2xl w-full"
        >
          <h2 className="text-2xl font-bold text-green-900 mb-2">
            Pendaftaran Santri Baru
          </h2>
          <p className="text-green-800 mb-4">
            Pendaftaran santri baru tahun ajaran 2025/2026 telah dibuka. Klik
            tombol di bawah untuk informasi lebih lanjut.
          </p>
          <a
            className="inline-block rounded bg-green-700 text-white px-5 py-2 font-semibold hover:bg-green-800 transition"
            href="/pendaftaran"
          >
            Info Pendaftaran
          </a>
        </section>
      </main>
      <footer className="bg-green-900 text-white text-center py-4 mt-auto">
        &copy; {new Date().getFullYear()} Pondok Pesantren Yati. All rights
        reserved.
      </footer>
    </div>
  );
}
