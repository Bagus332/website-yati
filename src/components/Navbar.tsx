"use client";

import React, { useState, ReactNode } from "react";
import Image from "next/image";

interface DropdownProps {
  title: string;
  children: ReactNode;
}

// A simple mock for dropdowns since we can't import external libraries.
const Dropdown: React.FC<DropdownProps> = ({ title, children }) => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleDropdown = () => setIsOpen(!isOpen);

  return (
    <div className="relative">
      {/* Dropdown trigger button */}
      <button
        onClick={toggleDropdown}
        className="flex items-center gap-2 text-slate-300 hover:text-white transition-colors focus:outline-none"
      >
        <span>{title}</span>
        {/* Chevron icon for the dropdown */}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="18"
          height="18"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className={`lucide lucide-chevron-down transform transition-transform duration-300 ${
            isOpen ? "rotate-180" : ""
          }`}
        >
          <path d="m6 9 6 6 6-6" />
        </svg>
      </button>

      {/* Dropdown content */}
      {isOpen && (
        <div className="absolute top-full left-1/2 -translate-x-1/2 mt-2 w-56 rounded-xl shadow-lg bg-slate-800 text-slate-200 ring-1 ring-slate-700 z-20 overflow-hidden">
          <div className="py-2">{children}</div>
        </div>
      )}
    </div>
  );
};

// Main Navbar component
const Navbar: React.FC = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <nav className="bg-slate-900 text-slate-300 p-4 shadow-xl border-b-4 border-blue-600 font-sans">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo Section */}
        <div className="flex items-center gap-4">
          <a href="/" className="flex items-center gap-3">
            <Image
              className="rounded-full border-2 border-blue-600 object-cover transform transition-transform hover:scale-110"
              src="/logo.jpeg"
              alt="Logo Pondok Pesantren YATI"
              width={48}
              height={48}
              priority
            />
            <span className="text-2xl font-bold text-white hidden md:block transition-colors hover:text-blue-400">
              Pondok Pesantren YATI
            </span>
          </a>
        </div>

        {/* Desktop Navigation Links */}
        <div className="hidden md:flex items-center space-x-8 text-lg">
          <a
            href="/"
            className="text-slate-300 hover:text-white transition-colors relative group"
          >
            Beranda
            <span className="absolute bottom-0 left-0 w-full h-0.5 bg-blue-400 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></span>
          </a>

          <Dropdown title="Profil">
            <a
              href="/profile/visi-misi"
              className="block px-6 py-2 hover:bg-blue-600 hover:text-white transition-colors duration-300"
            >
              Visi dan Misi
            </a>
            <a
              href="/profile/sejarah"
              className="block px-6 py-2 hover:bg-blue-600 hover:text-white transition-colors duration-300"
            >
              Sejarah
            </a>
            <a
              href="/profile/manajemen"
              className="block px-6 py-2 hover:bg-blue-600 hover:text-white transition-colors duration-300"
            >
              Manajemen
            </a>
            <a
              href="/profile/fasilitas"
              className="block px-6 py-2 hover:bg-blue-600 hover:text-white transition-colors duration-300"
            >
              Fasilitas
            </a>
          </Dropdown>

          <Dropdown title="MTsS">
            <a
              href="/mts/profil"
              className="block px-6 py-2 hover:bg-blue-600 hover:text-white transition-colors duration-300"
            >
              Profil
            </a>
            <a
              href="/mts/tendik"
              className="block px-6 py-2 hover:bg-blue-600 hover:text-white transition-colors duration-300"
            >
              Tendik
            </a>
            <a
              href="/mts/struktur-org"
              className="block px-6 py-2 hover:bg-blue-600 hover:text-white transition-colors duration-300"
            >
              Struktur Organisasi
            </a>
            <a
              href="/mts/alumni"
              className="block px-6 py-2 hover:bg-blue-600 hover:text-white transition-colors duration-300"
            >
              Alumni
            </a>
          </Dropdown>

          <Dropdown title="MAS">
            <a
              href="/ma/profil"
              className="block px-6 py-2 hover:bg-blue-600 hover:text-white transition-colors duration-300"
            >
              Profil
            </a>
            <a
              href="/ma/tendik"
              className="block px-6 py-2 hover:bg-blue-600 hover:text-white transition-colors duration-300"
            >
              Tendik
            </a>
            <a
              href="/ma/struktur-org"
              className="block px-6 py-2 hover:bg-blue-600 hover:text-white transition-colors duration-300"
            >
              Struktur Organisasi
            </a>
            <a
              href="/ma/alumni"
              className="block px-6 py-2 hover:bg-blue-600 hover:text-white transition-colors duration-300"
            >
              Alumni
            </a>
          </Dropdown>

          <a
            href="/berita"
            className="text-slate-300 hover:text-white transition-colors relative group"
          >
            Berita
            <span className="absolute bottom-0 left-0 w-full h-0.5 bg-blue-400 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></span>
          </a>

          <a
            href="/galeri"
            className="text-slate-300 hover:text-white transition-colors relative group"
          >
            Galeri
            <span className="absolute bottom-0 left-0 w-full h-0.5 bg-blue-400 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></span>
          </a>

          <a
            href="/kontak"
            className="text-slate-300 hover:text-white transition-colors relative group"
          >
            Kontak
            <span className="absolute bottom-0 left-0 w-full h-0.5 bg-blue-400 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></span>
          </a>
        </div>

        {/* Mobile menu button (hamburger icon) */}
        <div className="md:hidden">
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="text-slate-300 hover:text-white focus:outline-none p-2 rounded-md transition-colors hover:bg-slate-700"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="lucide lucide-menu"
            >
              <line x1="4" x2="20" y1="12" y2="12" />
              <line x1="4" x2="20" y1="6" y2="6" />
              <line x1="4" x2="20" y1="18" y2="18" />
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu Content (conditionally rendered) */}
      {isMobileMenuOpen && (
        <div className="md:hidden mt-4 bg-slate-800 rounded-xl shadow-lg p-4 space-y-2">
          <a
            href="/"
            className="block px-4 py-2 rounded-lg hover:bg-blue-600 hover:text-white transition-colors"
          >
            Beranda
          </a>
          <div className="border-t border-slate-700 pt-2">
            <Dropdown title="Profil">
              <a
                href="/profile/visi-misi"
                className="block px-4 py-2 hover:bg-blue-600 hover:text-white transition-colors"
              >
                Visi dan Misi
              </a>
              <a
                href="/profile/sejarah"
                className="block px-4 py-2 hover:bg-blue-600 hover:text-white transition-colors"
              >
                Sejarah
              </a>
              <a
                href="/profile/manajemen"
                className="block px-4 py-2 hover:bg-blue-600 hover:text-white transition-colors"
              >
                Manajemen
              </a>
              <a
                href="/profile/fasilitas"
                className="block px-4 py-2 hover:bg-blue-600 hover:text-white transition-colors"
              >
                Fasilitas
              </a>
            </Dropdown>
          </div>
          <div className="border-t border-slate-700 pt-2">
            <Dropdown title="MTsS">
              <a
                href="/mts/profil"
                className="block px-4 py-2 hover:bg-blue-600 hover:text-white transition-colors"
              >
                Profil
              </a>
              <a
                href="/mts/tendik"
                className="block px-4 py-2 hover:bg-blue-600 hover:text-white transition-colors"
              >
                Tendik
              </a>
              <a
                href="/mts/struktur-org"
                className="block px-4 py-2 hover:bg-blue-600 hover:text-white transition-colors"
              >
                Struktur Organisasi
              </a>
              <a
                href="/mts/alumni"
                className="block px-6 py-2 hover:bg-blue-600 hover:text-white transition-colors duration-300"
              >
                Alumni
              </a>
            </Dropdown>
          </div>
          <div className="border-t border-slate-700 pt-2">
            <Dropdown title="MAS">
              <a
                href="/ma/profil"
                className="block px-4 py-2 hover:bg-blue-600 hover:text-white transition-colors"
              >
                Profil
              </a>
              <a
                href="/ma/tendik"
                className="block px-4 py-2 hover:bg-blue-600 hover:text-white transition-colors"
              >
                Tendik
              </a>
              <a
                href="/ma/struktur-org"
                className="block px-4 py-2 hover:bg-blue-600 hover:text-white transition-colors"
              >
                Struktur Organisasi
              </a>
              <a
                href="/ma/alumni"
                className="block px-6 py-2 hover:bg-blue-600 hover:text-white transition-colors duration-300"
              >
                Alumni
              </a>
            </Dropdown>
          </div>
          <a
            href="/berita/[slug]"
            className="block px-4 py-2 rounded-lg hover:bg-blue-600 hover:text-white transition-colors"
          >
            Berita
          </a>
          <a
            href="/galeri"
            className="block px-4 py-2 rounded-lg hover:bg-blue-600 hover:text-white transition-colors"
          >
            Galeri
          </a>
          <a
            href="/kontak"
            className="block px-4 py-2 rounded-lg hover:bg-blue-600 hover:text-white transition-colors"
          >
            Kontak
          </a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
