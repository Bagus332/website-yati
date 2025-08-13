"use client";

import React, { useState, ReactNode } from "react";
import Image from "next/image";
import { usePathname } from "next/navigation"; // Add this import

interface DropdownProps {
  title: string;
  children: ReactNode;
  isOpen: boolean;
  onToggle: () => void;
}

const Dropdown: React.FC<DropdownProps> = ({ title, children, isOpen, onToggle }) => {
  const pathname = usePathname();
  
  const isActive = pathname.startsWith(`/${title.toLowerCase()}`) || 
    (title === "MTsS" && pathname.startsWith("/mts")) ||
    (title === "MAS" && pathname.startsWith("/ma"));

  return (
    <div className="relative">
      {/* Tombol Dropdown */}
      <button
        onClick={onToggle}
        className={`flex items-center gap-2 px-4 py-2 rounded-lg transition-all duration-300 font-medium relative group
          ${isActive
            ? "text-white bg-[#7FC7D9]"
            : "text-[#0F1035] hover:text-white hover:bg-[#7FC7D9]"
          }`}
      >
        <span>{title}</span>
        {/* Ikon Chevron */}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          className={`transform transition-all duration-300 ${
            isOpen ? "rotate-180 text-white" : ""
          }`}
        >
          <path d="m6 9 6 6 6-6" />
        </svg>
        {/* Hover indicator */}
        <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-0.5 bg-gradient-to-r from-[#7FC7D9] to-[#365486] group-hover:w-full transition-all duration-300 rounded-full"></span>
      </button>

      {/* Isi Dropdown */}
      {isOpen && (
        <div className="absolute top-full left-1/2 -translate-x-1/2 mt-3 w-64 rounded-2xl shadow-2xl bg-white text-[#0F1035] ring-2 ring-[#7FC7D9] z-30 overflow-hidden backdrop-blur-lg border-2 border-[#7FC7D9]">
          <div className="py-3">{children}</div>
          {/* Decorative gradient line */}
          <div className="h-1 bg-gradient-to-r from-[#7FC7D9] via-[#365486] to-[#7FC7D9]"></div>
        </div>
      )}
    </div>
  );
};

const Navbar: React.FC = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const pathname = usePathname();

  // Helper function to toggle dropdown
  const handleDropdownToggle = (dropdownName: string) => {
    setActiveDropdown(activeDropdown === dropdownName ? null : dropdownName);
  };

  // Helper function to check if path is active
  const isPathActive = (path: string) => {
    if (path === "/") return pathname === "/";
    return pathname.startsWith(path);
  };

  const navLinks = [
    { href: "/", label: "Beranda" },
    { href: "/berita", label: "Berita" },
    { href: "/galeri", label: "Galeri" },
    { href: "/kontak", label: "Kontak" },
  ];

  return (
    <nav className="bg-gradient-to-r from-[#DCF2F1] via-white to-[#DCF2F1] text-[#0F1035] shadow-2xl border-b-4 border-[#7FC7D9] font-sans sticky top-0 z-50 backdrop-blur-md">
      <div className="container mx-auto px-4 py-3">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <div className="flex items-center gap-4">
            <a href="/" className="flex items-center gap-3 group">
              <div className="relative">
                <Image
                  className="rounded-full border-3 border-[#7FC7D9] object-cover transform transition-all duration-300 group-hover:scale-110 group-hover:border-[#365486] shadow-lg"
                  src="/logo.jpeg"
                  alt="Logo Pondok Pesantren YATI"
                  width={52}
                  height={52}
                  priority
                />
                <div className="absolute inset-0 rounded-full bg-[#7FC7D9]/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
              <div className="hidden md:block">
                <span className="text-2xl font-bold text-[#0F1035] transition-all duration-300 group-hover:text-[#365486] bg-gradient-to-r from-[#0F1035] to-[#365486] bg-clip-text">
                  Pondok Pesantren YATI
                </span>
                <div className="h-0.5 w-0 bg-gradient-to-r from-[#7FC7D9] to-[#365486] group-hover:w-full transition-all duration-500 rounded-full"></div>
              </div>
            </a>
          </div>

          {/* Menu Desktop */}
          <div className="hidden md:flex items-center space-x-2 text-lg">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className={`px-4 py-2 rounded-lg transition-all duration-300 relative group font-medium
                  ${isPathActive(link.href)
                    ? "text-white bg-[#7FC7D9]"
                    : "text-[#0F1035] hover:text-white hover:bg-[#7FC7D9]"
                  }`}
              >
                {link.label}
                <span className={`absolute bottom-0 left-1/2 -translate-x-1/2 h-0.5 bg-gradient-to-r from-[#7FC7D9] to-[#365486] transition-all duration-300 rounded-full
                  ${isPathActive(link.href) ? "w-full" : "w-0 group-hover:w-full"}`}>
                </span>
              </a>
            ))}

            <Dropdown 
              title="Profil" 
              isOpen={activeDropdown === 'profil'}
              onToggle={() => handleDropdownToggle('profil')}
            >
              <a
                href="/profile/visi-misi"
                className="block px-6 py-3 hover:bg-[#7FC7D9] hover:text-white transition-all duration-300 font-medium border-l-4 border-transparent hover:border-[#365486]"
              >
                <span className="flex items-center gap-2">
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                  </svg>
                  Visi dan Misi
                </span>
              </a>
              <a
                href="/profile/sejarah"
                className="block px-6 py-3 hover:bg-gradient-to-r hover:from-[#7FC7D9]/30 hover:to-[#DCF2F1]/50 hover:text-[#0F1035] transition-all duration-300 font-medium border-l-4 border-transparent hover:border-[#365486]"
              >
                <span className="flex items-center gap-2">
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" />
                  </svg>
                  Sejarah
                </span>
              </a>
              <a
                href="/profile/manajemen"
                className="block px-6 py-3 hover:bg-gradient-to-r hover:from-[#7FC7D9]/30 hover:to-[#DCF2F1]/50 hover:text-[#0F1035] transition-all duration-300 font-medium border-l-4 border-transparent hover:border-[#365486]"
              >
                <span className="flex items-center gap-2">
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <path d="M16 4c0-1.11.89-2 2-2s2 .89 2 2-.89 2-2 2-2-.89-2-2zm4 18v-6h2.5l-2.54-7.63A2.99 2.99 0 0 0 17.09 7H14.9c-1.29 0-2.4.8-2.87 1.93L9.49 18H12v-6h4v8h4z" />
                  </svg>
                  Manajemen
                </span>
              </a>
              <a
                href="/profile/fasilitas"
                className="block px-6 py-3 hover:bg-gradient-to-r hover:from-[#7FC7D9]/30 hover:to-[#DCF2F1]/50 hover:text-[#0F1035] transition-all duration-300 font-medium border-l-4 border-transparent hover:border-[#365486]"
              >
                <span className="flex items-center gap-2">
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <path d="M12 2l8 6v12H4V8l8-6zm0 2.4L6 8.8V18h12V8.8L12 4.4z" />
                  </svg>
                  Fasilitas
                </span>
              </a>
            </Dropdown>

            <Dropdown 
              title="MTsS" 
              isOpen={activeDropdown === 'mts'}
              onToggle={() => handleDropdownToggle('mts')}
            >
              <a
                href="/mts/profil"
                className="block px-6 py-3 hover:bg-gradient-to-r hover:from-[#7FC7D9]/30 hover:to-[#DCF2F1]/50 hover:text-[#0F1035] transition-all duration-300 font-medium border-l-4 border-transparent hover:border-[#365486]"
              >
                Profil
              </a>
              <a
                href="/mts/struktur-org"
                className="block px-6 py-3 hover:bg-gradient-to-r hover:from-[#7FC7D9]/30 hover:to-[#DCF2F1]/50 hover:text-[#0F1035] transition-all duration-300 font-medium border-l-4 border-transparent hover:border-[#365486]"
              >
                Struktur Organisasi
              </a>
              <a
              href="/mts/tendik"
              className="block px-6 py-3 hover:bg-gradient-to-r hover:from-[#7FC7D9]/30 hover:to-[#DCF2F1]/50 hover:text-[#0F1035] transition-all duration-300 font-medium border-l-4 border-transparent hover:border-[#365486]"
            >
              Tendik
            </a>
              <a
                href="/mts/alumni"
                className="block px-6 py-3 hover:bg-gradient-to-r hover:from-[#7FC7D9]/30 hover:to-[#DCF2F1]/50 hover:text-[#0F1035] transition-all duration-300 font-medium border-l-4 border-transparent hover:border-[#365486]"
              >
                Alumni
              </a>
            </Dropdown>

            <Dropdown 
              title="MAS" 
              isOpen={activeDropdown === 'mas'}
              onToggle={() => handleDropdownToggle('mas')}
            >
              <a
                href="/ma/profil"
                className="block px-6 py-3 hover:bg-gradient-to-r hover:from-[#7FC7D9]/30 hover:to-[#DCF2F1]/50 hover:text-[#0F1035] transition-all duration-300 font-medium border-l-4 border-transparent hover:border-[#365486]"
              >
                Profil
              </a>
              <a
                href="/ma/struktur-org"
                className="block px-6 py-3 hover:bg-gradient-to-r hover:from-[#7FC7D9]/30 hover:to-[#DCF2F1]/50 hover:text-[#0F1035] transition-all duration-300 font-medium border-l-4 border-transparent hover:border-[#365486]"
              >
                Struktur Organisasi
              </a>
              <a
              href="/ma/tendik"
              className="block px-6 py-3 hover:bg-gradient-to-r hover:from-[#7FC7D9]/30 hover:to-[#DCF2F1]/50 hover:text-[#0F1035] transition-all duration-300 font-medium border-l-4 border-transparent hover:border-[#365486]"
            >
              Tendik
            </a>
              <a
                href="/ma/alumni"
                className="block px-6 py-3 hover:bg-gradient-to-r hover:from-[#7FC7D9]/30 hover:to-[#DCF2F1]/50 hover:text-[#0F1035] transition-all duration-300 font-medium border-l-4 border-transparent hover:border-[#365486]"
              >
                Alumni
              </a>
            </Dropdown>
          </div>

          {/* Tombol Menu Mobile */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-[#0F1035] hover:text-white focus:outline-none p-3 rounded-xl transition-all duration-300 hover:bg-[#7FC7D9] border-2 border-[#7FC7D9] hover:border-[#365486]"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="2.5"
                className={`transform transition-transform duration-300 ${
                  isMobileMenuOpen ? "rotate-90" : ""
                }`}
              >
                <line x1="4" x2="20" y1="12" y2="12" />
                <line x1="4" x2="20" y1="6" y2="6" />
                <line x1="4" x2="20" y1="18" y2="18" />
              </svg>
            </button>
          </div>
        </div>

        {/* Menu Mobile */}
        {isMobileMenuOpen && (
          <div className="md:hidden mt-6 bg-gradient-to-br from-[#DCF2F1] to-white rounded-2xl shadow-2xl p-6 space-y-3 border-2 border-[#7FC7D9] backdrop-blur-lg">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className={`block px-5 py-3 rounded-xl transition-all duration-300 font-medium border-l-4
                  ${isPathActive(link.href)
                    ? "bg-[#7FC7D9] text-white border-[#365486]"
                    : "text-[#0F1035] hover:bg-[#7FC7D9] hover:text-white border-transparent hover:border-[#365486]"
                  } hover:shadow-lg`}
              >
                {link.label}
              </a>
            ))}

            {/* Mobile Dropdowns */}
            <div className="space-y-2 pt-4 border-t-2 border-[#7FC7D9]">
              <Dropdown 
                title="Profil" 
                isOpen={activeDropdown === 'profil-mobile'}
                onToggle={() => handleDropdownToggle('profil-mobile')}
              >
                <a
                  href="/profile/visi-misi"
                  className="block px-5 py-2 hover:bg-[#7FC7D9] hover:text-white transition-all duration-300 font-medium"
                >
                  Visi dan Misi
                </a>
                <a
                  href="/profile/sejarah"
                  className="block px-5 py-2 hover:bg-[#7FC7D9]/20 hover:text-[#0F1035] transition-all duration-300 font-medium"
                >
                  Sejarah
                </a>
                <a
                  href="/profile/manajemen"
                  className="block px-5 py-2 hover:bg-[#7FC7D9]/20 hover:text-[#0F1035] transition-all duration-300 font-medium"
                >
                  Manajemen
                </a>
                <a
                  href="/profile/fasilitas"
                  className="block px-5 py-2 hover:bg-[#7FC7D9]/20 hover:text-[#0F1035] transition-all duration-300 font-medium"
                >
                  Fasilitas
                </a>
              </Dropdown>

              <Dropdown 
                title="MTsS" 
                isOpen={activeDropdown === 'mts-mobile'}
                onToggle={() => handleDropdownToggle('mts-mobile')}
              >
                <a
                  href="/mts/profil"
                  className="block px-5 py-2 hover:bg-[#7FC7D9]/20 hover:text-[#0F1035] transition-all duration-300 font-medium"
                >
                  Profil
                </a>
                <a
                  href="/mts/struktur-org"
                  className="block px-5 py-2 hover:bg-[#7FC7D9]/20 hover:text-[#0F1035] transition-all duration-300 font-medium"
                >
                  Struktur Organisasi
                </a>
                <a
              href="/mts/tendik"
              className="block px-5 py-2 hover:bg-[#7FC7D9]/20 hover:text-[#0F1035] transition-all duration-300 font-medium"
            >
              Tendik
            </a>
                <a
                  href="/mts/alumni"
                  className="block px-5 py-2 hover:bg-[#7FC7D9]/20 hover:text-[#0F1035] transition-all duration-300 font-medium"
                >
                  Alumni
                </a>
              </Dropdown>

              <Dropdown 
                title="MAS" 
                isOpen={activeDropdown === 'mas-mobile'}
                onToggle={() => handleDropdownToggle('mas-mobile')}
              >
                <a
                  href="/ma/profil"
                  className="block px-5 py-2 hover:bg-[#7FC7D9]/20 hover:text-[#0F1035] transition-all duration-300 font-medium"
                >
                  Profil
                </a>
                <a
                  href="/ma/struktur-org"
                  className="block px-5 py-2 hover:bg-[#7FC7D9]/20 hover:text-[#0F1035] transition-all duration-300 font-medium"
                >
                  Struktur Organisasi
                </a>
                <a
                  href="/ma/tendik"
                  className="block px-5 py-2 hover:bg-[#7FC7D9]/20 hover:text-[#0F1035] transition-all duration-300 font-medium"
                >
                  Tendik
            </a>
                <a
                  href="/ma/alumni"
                  className="block px-5 py-2 hover:bg-[#7FC7D9]/20 hover:text-[#0F1035] transition-all duration-300 font-medium"
                >
                  Alumni
                </a>
              </Dropdown>
            </div>

            {/* Decorative bottom gradient */}
            <div className="mt-6 h-1 bg-gradient-to-r from-[#7FC7D9] via-[#365486] to-[#7FC7D9] rounded-full"></div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
