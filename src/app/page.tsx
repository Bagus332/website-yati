import Image from "next/image";
import Navbar from "../components/Navbar";

export default function Home() {
  return (
    <div className="font-sans min-h-screen flex flex-col bg-gradient-to-br from-blue-50 to-blue-200">
      <Navbar />
      <main className="flex flex-col items-center justify-center flex-1 px-4 py-12 sm:py-20">
        <div className="mb-6 flex items-center justify-center">
          <div className="bg-blue-100 rounded-full p-4 shadow-lg">
            <Image
              src="/logo-ponpes.png"
              alt="Logo Pondok Pesantren Yati"
              width={120}
              height={120}
              className="rounded-full"
              priority
            />
          </div>
        </div>
        <h1 className="text-3xl sm:text-5xl font-bold text-blue-900 mb-4 text-center drop-shadow">
          Pondok Pesantren Yati
        </h1>
        <p className="text-lg sm:text-xl text-blue-800 mb-8 text-center max-w-2xl">
          Selamat datang di website resmi Pondok Pesantren Yati. Tempat
          pendidikan agama, pengembangan karakter, dan pembinaan generasi Islami
          yang berakhlak mulia.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 mb-10">
          <a
            className="rounded-full bg-blue-700 text-white px-6 py-3 font-semibold shadow hover:bg-blue-800 transition border-2 border-blue-300"
            href="#profil"
          >
            <span className="inline-flex items-center gap-2">
              <svg width="20" height="20" fill="none" viewBox="0 0 20 20">
                <circle cx="10" cy="10" r="10" fill="#3B82F6" />
                <path
                  d="M10 5v10M5 10h10"
                  stroke="#fff"
                  strokeWidth="2"
                  strokeLinecap="round"
                />
              </svg>
              Profil Pesantren
            </span>
          </a>
          <a
            className="rounded-full bg-white border border-blue-700 text-blue-700 px-6 py-3 font-semibold shadow hover:bg-blue-100 transition border-2 border-blue-300"
            href="#pendaftaran"
          >
            <span className="inline-flex items-center gap-2">
              <svg width="20" height="20" fill="none" viewBox="0 0 20 20">
                <rect x="3" y="6" width="14" height="8" rx="2" fill="#3B82F6" />
                <path
                  d="M3 6l7 5 7-5"
                  stroke="#fff"
                  strokeWidth="2"
                  strokeLinecap="round"
                />
              </svg>
              Pendaftaran Santri
            </span>
          </a>
        </div>
        <section
          id="profil"
          className="bg-white rounded-xl shadow-lg p-6 max-w-2xl w-full mb-8 border-l-4 border-blue-400"
        >
          <h2 className="text-2xl font-bold text-blue-900 mb-2 flex items-center gap-2">
            <svg width="24" height="24" fill="none" viewBox="0 0 24 24">
              <circle cx="12" cy="12" r="12" fill="#3B82F6" />
              <path
                d="M12 7v10M7 12h10"
                stroke="#fff"
                strokeWidth="2"
                strokeLinecap="round"
              />
            </svg>
            Tentang Kami
          </h2>
          <p className="text-blue-800">
            Pondok Pesantren Yati berdiri sejak tahun 1980 dan telah melahirkan
            ribuan santri yang berprestasi di bidang agama maupun umum. Kami
            berkomitmen memberikan pendidikan terbaik dengan mengedepankan
            nilai-nilai Islam, disiplin, dan cinta tanah air.
          </p>
        </section>
        <section
          id="pendaftaran"
          className="bg-white rounded-xl shadow-lg p-6 max-w-2xl w-full border-l-4 border-blue-400"
        >
          <h2 className="text-2xl font-bold text-blue-900 mb-2 flex items-center gap-2">
            <svg width="24" height="24" fill="none" viewBox="0 0 24 24">
              <rect x="4" y="8" width="16" height="8" rx="2" fill="#3B82F6" />
              <path
                d="M4 8l8 6 8-6"
                stroke="#fff"
                strokeWidth="2"
                strokeLinecap="round"
              />
            </svg>
            Pendaftaran Santri Baru
          </h2>
          <p className="text-blue-800 mb-4">
            Pendaftaran santri baru tahun ajaran 2025/2026 telah dibuka. Klik
            tombol di bawah untuk informasi lebih lanjut.
          </p>
          <a
            className="inline-block rounded bg-blue-700 text-white px-5 py-2 font-semibold hover:bg-blue-800 transition border-2 border-blue-300"
            href="/pendaftaran"
          >
            <span className="inline-flex items-center gap-2">
              <svg width="20" height="20" fill="none" viewBox="0 0 20 20">
                <rect x="3" y="6" width="14" height="8" rx="2" fill="#3B82F6" />
                <path
                  d="M3 6l7 5 7-5"
                  stroke="#fff"
                  strokeWidth="2"
                  strokeLinecap="round"
                />
              </svg>
              Info Pendaftaran
            </span>
          </a>
        </section>
      </main>
      <footer className="bg-blue-900 text-white text-center py-4 mt-auto border-t-4 border-blue-400">
        <div className="flex items-center justify-center gap-2 mb-2">
          <svg width="24" height="24" fill="none" viewBox="0 0 24 24">
            <circle cx="12" cy="12" r="12" fill="#3B82F6" />
            <text
              x="12"
              y="17"
              textAnchor="middle"
              fontSize="12"
              fill="white"
              fontFamily="sans-serif"
            >
              Y
            </text>
          </svg>
          <span className="font-bold">Pondok Pesantren Yati</span>
        </div>
        <span>
          &copy; {new Date().getFullYear()} Pondok Pesantren Yati. All rights
          reserved.
        </span>
      </footer>
    </div>
  );
}
