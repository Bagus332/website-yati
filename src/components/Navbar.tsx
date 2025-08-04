// src/components/Navbar.tsx
import Link from "next/link";
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
} from "./Dropdown";

const Navbar = () => {
  return (
    <nav className="bg-blue-800 text-white p-4 shadow-lg border-b-4 border-blue-400">
      <div className="container mx-auto flex justify-between items-center">
        <img className="rounded-full w-12 h-12" src="logo.jpeg" alt="logo" />
        <div className="space-x-4 flex items-center">
          <Link href="/" className="hover:text-blue-200">
            Beranda
          </Link>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <button className="hover:text-blue-200 focus:outline-none bg-transparent px-0 py-0 font-inherit text-inherit">
                Profil
              </button>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="bg-blue-900 text-white border-none">
              <DropdownMenuItem asChild>
                <Link href="/profile/visi-misi" className="hover:text-blue-200">
                  Visi dan Misi
                </Link>
              </DropdownMenuItem>
              <DropdownMenuItem asChild>
                <Link href="/profile/sejarah" className="hover:text-blue-200">
                  Sejarah
                </Link>
              </DropdownMenuItem>
              <DropdownMenuItem asChild>
                <Link
                  href="/profile/struktur-org"
                  className="hover:text-blue-200"
                >
                  Struktur Organisasi
                </Link>
              </DropdownMenuItem>
              <DropdownMenuItem asChild>
                <Link
                  href="/profile/profil-pimpinan"
                  className="hover:text-blue-200"
                >
                  Profil Pimpinan
                </Link>
              </DropdownMenuItem>
              <DropdownMenuItem asChild>
                <Link href="/profile/manajemen" className="hover:text-blue-200">
                  Manajemen
                </Link>
              </DropdownMenuItem>
              <DropdownMenuItem asChild>
                <Link href="/profile/fasilitas" className="hover:text-blue-200">
                  Fasilitas
                </Link>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <button className="hover:text-blue-200 focus:outline-none bg-transparent px-0 py-0 font-inherit text-inherit">
                MTs
              </button>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="bg-blue-900 text-white border-none">
              <DropdownMenuItem asChild>
                <Link href="/mts/profil" className="hover:text-blue-200">
                  Profil
                </Link>
              </DropdownMenuItem>
              <DropdownMenuItem asChild>
                <Link href="/mts/tendik" className="hover:text-blue-200">
                  Tendik
                </Link>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <button className="hover:text-blue-200 focus:outline-none bg-transparent px-0 py-0 font-inherit text-inherit">
                MAS
              </button>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="bg-blue-900 text-white border-none">
              <DropdownMenuItem asChild>
                <Link href="/ma/profil" className="hover:text-blue-200">
                  Profil
                </Link>
              </DropdownMenuItem>
              <DropdownMenuItem asChild>
                <Link href="/ma/tendik" className="hover:text-blue-200">
                  Tendik
                </Link>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
          <Link href="/kontak" className="hover:text-blue-200">
            Kontak
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
