// src/components/Navbar.tsx
import Link from 'next/link';

const Navbar = () => {
  return (
    <nav className="bg-green-800 text-white p-4 shadow-md">
      <div className="container mx-auto flex justify-between items-center">
        <Link href="/" className="font-bold text-xl">
          Pondok Pesantren XYZ
        </Link>
        <div className="space-x-4">
          <Link href="/" className="hover:text-green-200">Beranda</Link>
          <Link href="/profil/visi-misi" className="hover:text-green-200">Profil</Link>
          <Link href="/mts/profil" className="hover:text-green-200">MTs</Link>
          <Link href="/ma/profil" className="hover:text-green-200">MA</Link>
          <Link href="/kontak" className="hover:text-green-200">Kontak</Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;