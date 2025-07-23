"use client";

import Image from "next/image";
import Navbar from "../components/Navbar";

export default function Home() {
  return (
    <div className="font-sans min-h-screen flex flex-col bg-gradient-to-br from-blue-50 via-blue-100 to-blue-200 relative overflow-hidden">
      {/* Enhanced Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
        {/* Floating gradient blobs */}
        <div className="absolute -top-16 -left-16 w-80 h-80 bg-gradient-to-br from-blue-300 via-blue-400 to-blue-500 rounded-full opacity-30 animate-blob1 blur-2xl"></div>
        <div className="absolute top-1/4 right-0 w-96 h-96 bg-gradient-to-tr from-blue-400 via-blue-500 to-blue-600 rounded-full opacity-20 animate-blob2 blur-3xl"></div>
        <div className="absolute bottom-10 left-1/3 w-64 h-64 bg-gradient-to-tl from-blue-200 via-blue-300 to-blue-400 rounded-full opacity-25 animate-blob3 blur-2xl"></div>
        {/* Sparkle particles */}
        <div className="absolute top-1/2 left-1/4 w-2 h-2 bg-blue-200 rounded-full animate-sparkle"></div>
        <div className="absolute bottom-1/3 right-1/2 w-1.5 h-1.5 bg-blue-400 rounded-full animate-sparkle2"></div>
        <div className="absolute top-1/3 right-1/3 w-1 h-1 bg-blue-500 rounded-full animate-sparkle3"></div>
      </div>

      <Navbar />

      <main className="flex flex-col items-center justify-center flex-1 px-4 py-12 sm:py-20 relative z-10">
        {/* Logo Section with Enhanced Animation */}
        <div className="mb-8 flex items-center justify-center group animate-fade-in-down">
          <div className="bg-gradient-to-br from-blue-100 to-blue-300 rounded-full p-8 shadow-2xl border-4 border-white transform transition-all duration-700 hover:scale-110 hover:rotate-6 hover:shadow-3xl animate-logo-bounce">
            <div className="bg-white rounded-full p-3 shadow-inner animate-logo-spin">
              <Image
                src="/logo-ponpes.png"
                alt="Logo Pondok Pesantren Yati"
                width={120}
                height={120}
                className="rounded-full transform transition-transform duration-700 group-hover:rotate-12"
                priority
              />
            </div>
          </div>
        </div>

        {/* Title with Gradient and Animation */}
        <h1 className="text-4xl sm:text-6xl font-bold bg-gradient-to-r from-blue-900 via-blue-700 to-blue-900 bg-clip-text text-transparent mb-6 text-center drop-shadow-lg animate-fade-in-up relative tracking-wide">
          <span
            className="inline-block animate-bounce"
            style={{ animationDelay: "0.1s" }}
          >
            P
          </span>
          <span
            className="inline-block animate-bounce"
            style={{ animationDelay: "0.2s" }}
          >
            o
          </span>
          <span
            className="inline-block animate-bounce"
            style={{ animationDelay: "0.3s" }}
          >
            n
          </span>
          <span
            className="inline-block animate-bounce"
            style={{ animationDelay: "0.4s" }}
          >
            d
          </span>
          <span
            className="inline-block animate-bounce"
            style={{ animationDelay: "0.5s" }}
          >
            o
          </span>
          <span
            className="inline-block animate-bounce"
            style={{ animationDelay: "0.6s" }}
          >
            k
          </span>
          <span
            className="inline-block ml-3 animate-bounce"
            style={{ animationDelay: "0.7s" }}
          >
            P
          </span>
          <span
            className="inline-block animate-bounce"
            style={{ animationDelay: "0.8s" }}
          >
            e
          </span>
          <span
            className="inline-block animate-bounce"
            style={{ animationDelay: "0.9s" }}
          >
            s
          </span>
          <span
            className="inline-block animate-bounce"
            style={{ animationDelay: "1.0s" }}
          >
            a
          </span>
          <span
            className="inline-block animate-bounce"
            style={{ animationDelay: "1.1s" }}
          >
            n
          </span>
          <span
            className="inline-block animate-bounce"
            style={{ animationDelay: "1.2s" }}
          >
            t
          </span>
          <span
            className="inline-block animate-bounce"
            style={{ animationDelay: "1.3s" }}
          >
            r
          </span>
          <span
            className="inline-block animate-bounce"
            style={{ animationDelay: "1.4s" }}
          >
            e
          </span>
          <span
            className="inline-block animate-bounce"
            style={{ animationDelay: "1.5s" }}
          >
            n
          </span>
          <span
            className="inline-block ml-3 animate-bounce"
            style={{ animationDelay: "1.6s" }}
          >
            Y
          </span>
          <span
            className="inline-block animate-bounce"
            style={{ animationDelay: "1.7s" }}
          >
            a
          </span>
          <span
            className="inline-block animate-bounce"
            style={{ animationDelay: "1.8s" }}
          >
            t
          </span>
          <span
            className="inline-block animate-bounce"
            style={{ animationDelay: "1.9s" }}
          >
            i
          </span>
        </h1>

        {/* Description with Typing Effect Style */}
        <div
          className="relative mb-10 animate-fade-in-up"
          style={{ animationDelay: "0.5s" }}
        >
          <p className="text-lg sm:text-xl text-blue-800 text-center max-w-3xl leading-relaxed font-medium">
            Selamat datang di website resmi Pondok Pesantren Yati. Tempat
            pendidikan agama, pengembangan karakter, dan pembinaan generasi
            Islami yang berakhlak mulia.
          </p>
          <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-24 h-1 bg-gradient-to-r from-blue-400 to-blue-600 rounded-full animate-gradient-bar"></div>
        </div>

        {/* Enhanced CTA Button */}
        <div
          className="mb-12 animate-fade-in-up"
          style={{ animationDelay: "0.8s" }}
        >
          <a
            className="group relative inline-flex items-center justify-center px-8 py-4 text-lg font-bold text-white transition-all duration-300 bg-gradient-to-r from-blue-600 to-blue-800 rounded-full shadow-xl hover:shadow-2xl transform hover:scale-110 hover:-translate-y-1 active:scale-95 overflow-hidden animate-cta-bounce"
            href="#profil"
          >
            <span className="absolute inset-0 w-full h-full transition duration-300 ease-out transform translate-x-1 translate-y-1 bg-blue-900 group-hover:-translate-x-0 group-hover:-translate-y-0 rounded-full"></span>
            <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-blue-600 to-blue-800 rounded-full"></span>
            <span className="relative flex items-center gap-3">
              <svg
                width="24"
                height="24"
                fill="none"
                viewBox="0 0 24 24"
                className="transform transition-transform group-hover:rotate-12"
              >
                <circle
                  cx="12"
                  cy="12"
                  r="10"
                  fill="currentColor"
                  fillOpacity="0.3"
                />
                <path
                  d="M12 6v12M6 12h12"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                />
              </svg>
              Profil Pesantren
            </span>
          </a>
        </div>

        {/* Enhanced About Section */}
        <section
          id="profil"
          className="bg-white/90 backdrop-blur-sm rounded-2xl shadow-2xl p-8 max-w-4xl w-full border border-blue-200 relative overflow-hidden animate-fade-in-up animate-section-pop"
          style={{ animationDelay: "1s" }}
        >
          {/* Decorative Elements */}
          <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-blue-400 via-blue-500 to-blue-600"></div>
          <div className="absolute -top-4 -right-4 w-24 h-24 bg-gradient-to-br from-blue-200 to-blue-300 rounded-full opacity-50"></div>
          <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-gradient-to-tl from-blue-100 to-blue-200 rounded-full opacity-30"></div>

          <div className="relative z-10">
            <h2 className="text-3xl font-bold text-blue-900 mb-6 flex items-center gap-3">
              <div className="p-3 bg-gradient-to-br from-blue-500 to-blue-700 rounded-xl shadow-lg transform transition-transform hover:rotate-12">
                <svg width="28" height="28" fill="none" viewBox="0 0 24 24">
                  <path
                    d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"
                    stroke="white"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
              <span className="bg-gradient-to-r from-blue-900 to-blue-700 bg-clip-text text-transparent">
                Tentang Kami
              </span>
            </h2>

            <div className="space-y-4">
              <p className="text-blue-800 text-lg leading-relaxed">
                Pondok Pesantren Yati berdiri sejak tahun{" "}
                <span className="font-bold text-blue-900">1980</span> dan telah
                melahirkan ribuan santri yang berprestasi di bidang agama maupun
                umum.
              </p>
              <p className="text-blue-800 text-lg leading-relaxed">
                Kami berkomitmen memberikan pendidikan terbaik dengan
                mengedepankan nilai-nilai Islam, disiplin, dan cinta tanah air.
              </p>
            </div>

            {/* Stats Section */}
            <div className="mt-8 grid grid-cols-2 sm:grid-cols-3 gap-4">
              <div className="text-center p-4 bg-gradient-to-br from-blue-50 to-blue-100 rounded-xl border border-blue-200">
                <div className="text-2xl font-bold text-blue-900">45+</div>
                <div className="text-sm text-blue-700">Tahun Berdiri</div>
              </div>
              <div className="text-center p-4 bg-gradient-to-br from-blue-50 to-blue-100 rounded-xl border border-blue-200">
                <div className="text-2xl font-bold text-blue-900">1000+</div>
                <div className="text-sm text-blue-700">Alumni</div>
              </div>
              <div className="text-center p-4 bg-gradient-to-br from-blue-50 to-blue-100 rounded-xl border border-blue-200 sm:col-span-1 col-span-2">
                <div className="text-2xl font-bold text-blue-900">100%</div>
                <div className="text-sm text-blue-700">Berkarakter</div>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Enhanced Footer */}
      <footer className="bg-gradient-to-r from-blue-900 via-blue-800 to-blue-900 text-white text-center py-8 mt-auto border-t-4 border-blue-400 relative overflow-hidden animate-footer-fade">
        <div className="absolute inset-0 bg-blue-900 opacity-90"></div>
        <div className="absolute top-0 left-0 w-full h-full">
          <div className="absolute top-0 left-1/4 w-2 h-2 bg-blue-300 rounded-full animate-ping opacity-60"></div>
          <div className="absolute top-4 right-1/3 w-1 h-1 bg-blue-200 rounded-full animate-pulse opacity-40"></div>
          <div
            className="absolute bottom-2 left-1/2 w-3 h-3 bg-blue-400 rounded-full animate-bounce opacity-30"
            style={{ animationDelay: "1s" }}
          ></div>
        </div>

        <div className="relative z-10">
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="p-2 bg-gradient-to-br from-blue-600 to-blue-800 rounded-full shadow-lg">
              <svg width="24" height="24" fill="none" viewBox="0 0 24 24">
                <circle
                  cx="12"
                  cy="12"
                  r="10"
                  fill="currentColor"
                  fillOpacity="0.3"
                />
                <text
                  x="12"
                  y="17"
                  textAnchor="middle"
                  fontSize="12"
                  fill="currentColor"
                  fontFamily="sans-serif"
                  fontWeight="bold"
                >
                  Y
                </text>
              </svg>
            </div>
            <span className="font-bold text-xl">Pondok Pesantren Yati</span>
          </div>
          <div className="space-y-2">
            <p className="text-blue-200 text-sm">
              Membentuk Generasi Islami Berakhlak Mulia
            </p>
            <p className="text-blue-300">
              &copy; {new Date().getFullYear()} Pondok Pesantren Yati. All
              rights reserved.
            </p>
          </div>
        </div>
      </footer>

      <style jsx>{`
        @keyframes blob1 {
          0%,
          100% {
            transform: scale(1) translateY(0) translateX(0);
          }
          50% {
            transform: scale(1.1) translateY(20px) translateX(30px);
          }
        }
        @keyframes blob2 {
          0%,
          100% {
            transform: scale(1) translateY(0) translateX(0);
          }
          50% {
            transform: scale(1.05) translateY(-30px) translateX(-40px);
          }
        }
        @keyframes blob3 {
          0%,
          100% {
            transform: scale(1) translateY(0) translateX(0);
          }
          50% {
            transform: scale(1.15) translateY(10px) translateX(20px);
          }
        }
        .animate-blob1 {
          animation: blob1 8s ease-in-out infinite;
        }
        .animate-blob2 {
          animation: blob2 10s ease-in-out infinite;
        }
        .animate-blob3 {
          animation: blob3 12s ease-in-out infinite;
        }
        @keyframes sparkle {
          0%,
          100% {
            opacity: 0.7;
            transform: scale(1);
          }
          50% {
            opacity: 1;
            transform: scale(1.3);
          }
        }
        .animate-sparkle {
          animation: sparkle 2.5s infinite;
        }
        @keyframes sparkle2 {
          0%,
          100% {
            opacity: 0.5;
            transform: scale(1);
          }
          50% {
            opacity: 0.9;
            transform: scale(1.5);
          }
        }
        .animate-sparkle2 {
          animation: sparkle2 3s infinite;
        }
        @keyframes sparkle3 {
          0%,
          100% {
            opacity: 0.6;
            transform: scale(1);
          }
          50% {
            opacity: 1;
            transform: scale(1.2);
          }
        }
        .animate-sparkle3 {
          animation: sparkle3 2.2s infinite;
        }
        @keyframes logo-bounce {
          0%,
          100% {
            transform: scale(1) rotate(0deg);
          }
          50% {
            transform: scale(1.08) rotate(8deg);
          }
        }
        .animate-logo-bounce {
          animation: logo-bounce 2.5s infinite;
        }
        @keyframes logo-spin {
          0% {
            transform: rotate(0deg);
          }
          100% {
            transform: rotate(360deg);
          }
        }
        .animate-logo-spin {
          animation: logo-spin 10s linear infinite;
        }
        @keyframes gradient-bar {
          0%,
          100% {
            opacity: 0.7;
          }
          50% {
            opacity: 1;
          }
        }
        .animate-gradient-bar {
          animation: gradient-bar 2s infinite;
        }
        @keyframes cta-bounce {
          0%,
          100% {
            transform: scale(1) translateY(0);
          }
          50% {
            transform: scale(1.08) translateY(-8px);
          }
        }
        .animate-cta-bounce {
          animation: cta-bounce 1.8s infinite;
        }
        @keyframes section-pop {
          0% {
            opacity: 0;
            transform: scale(0.95);
          }
          100% {
            opacity: 1;
            transform: scale(1);
          }
        }
        .animate-section-pop {
          animation: section-pop 1s cubic-bezier(0.4, 0, 0.2, 1) forwards;
        }
        @keyframes footer-fade {
          0% {
            opacity: 0;
          }
          100% {
            opacity: 1;
          }
        }
        .animate-footer-fade {
          animation: footer-fade 1.2s ease-in forwards;
        }
        @keyframes fade-in-down {
          0% {
            opacity: 0;
            transform: translateY(-20px);
          }
          100% {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes fade-in-up {
          0% {
            opacity: 0;
            transform: translateY(20px);
          }
          100% {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-fade-in-down {
          animation: fade-in-down 0.8s ease-out forwards;
        }

        .animate-fade-in-up {
          animation: fade-in-up 0.8s ease-out forwards;
          opacity: 0;
        }
      `}</style>
    </div>
  );
}
