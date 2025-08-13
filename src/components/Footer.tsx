import Link from 'next/link';
import Image from 'next/image';
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaFacebook, FaInstagram, FaYoutube, FaQuran, FaGraduationCap } from 'react-icons/fa';

export default function Footer() {
  return (
    <footer className="bg-gradient-to-b from-[#7FC7D9] to-[#365486] relative">
      {/* Decorative Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_25%_25%,_white_0%,_transparent_50%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_75%_75%,_white_0%,_transparent_50%)]" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 relative">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand Section */}
          <div className="space-y-6">
            <div className="flex items-center space-x-3">
              <Image src="/logo.jpeg" alt="YATI Logo" width={60} height={60} className="rounded-lg" />
              <div>
                <h3 className="text-xl font-bold text-white">Pondok Pesantren YATI</h3>
                <p className="text-blue-100 text-sm">Mendidik Generasi Qurani</p>
              </div>
            </div>
            <p className="text-blue-50 leading-relaxed">
              Yayasan Tarbiyah Islamiyah Buya H Mansur, lembaga pendidikan Islam yang 
              mengintegrasikan nilai-nilai pesantren dengan pendidikan modern.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-white hover:text-blue-200 transition-colors">
                <FaFacebook size={24} />
              </a>
              <a href="#" className="text-white hover:text-blue-200 transition-colors">
                <FaInstagram size={24} />
              </a>
              <a href="#" className="text-white hover:text-blue-200 transition-colors">
                <FaYoutube size={24} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-bold text-white mb-6">Menu Utama</h3>
            <ul className="space-y-3">
              <li>
                <Link href="/berita" className="text-blue-50 hover:text-white transition-colors flex items-center">
                  <FaQuran className="mr-2" /> Program Tahfiz
                </Link>
              </li>
              <li>
                <Link href="/pendaftaran" className="text-blue-50 hover:text-white transition-colors flex items-center">
                  <FaGraduationCap className="mr-2" /> Pendaftaran Santri
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-bold text-white mb-6">Informasi Kontak</h3>
            <div className="space-y-4">
              <p className="flex items-center text-blue-50">
                <FaMapMarkerAlt className="text-blue-200 mr-3 flex-shrink-0" />
                <span>QCQ2+4X5 Yati, Kampung Baru, Kamang Mudiak, Kamang Magek, Kab. Agam</span>
              </p>
              <p className="flex items-center text-blue-50">
                <FaPhone className="text-blue-200 mr-3 flex-shrink-0" />
                <a href="tel:081374549687" className="hover:text-white transition-colors">
                  0813-7454-9687
                </a>
              </p>
              <p className="flex items-center text-blue-50">
                <FaEnvelope className="text-blue-200 mr-3 flex-shrink-0" />
                <a href="mailto:mti.yati@yahoo.com" className="hover:text-white transition-colors">
                  mti.yati@yahoo.com
                </a>
              </p>
            </div>
          </div>

          {/* Operating Hours */}
          <div>
            <h3 className="text-lg font-bold text-white mb-6">Jam Operasional</h3>
            <div className="space-y-3 text-blue-50">
              <p className="flex justify-between">
                <span>Senin - Kamis:</span>
                <span>08:00 - 16:00</span>
              </p>
              <p className="flex justify-between">
                <span>Jumat:</span>
                <span>08:00 - 11:30</span>
              </p>
              <p className="flex justify-between">
                <span>Sabtu:</span>
                <span>08:00 - 15:00</span>
              </p>
              <p className="flex justify-between text-blue-200">
                <span>Minggu:</span>
                <span>Tutup</span>
              </p>
            </div>
          </div>
        </div>

        <div className="border-t border-blue-400/30 mt-12 pt-8 text-center">
          <p className="text-blue-100">
            &copy; {new Date().getFullYear()} Pondok Pesantren YATI. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}