import Link from 'next/link';
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaFacebook, FaInstagram, FaYoutube } from 'react-icons/fa';

export default function Footer() {
  return (
    <footer className="bg-gradient-to-b from-[#7FC7D9] to-[#5CA7B9]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* About Section */}
          <div>
            <h3 className="text-xl font-bold text-blue-800 mb-4">Pondok Pesantren YATI</h3>
            <p className="font-semibowhite mb-4">
              Yayasan Tarbiyah Islamiyah Buya H Mansur, lembaga pendidikan Islam yang 
              mengintegrasikan nilai-nilai pesantren dengan pendidikan modern.
            </p>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-xl font-bold text-blue-800 mb-4">Kontak</h3>
            <div className="space-y-3">
              <p className="flex items-center font-semibowhite">
                <FaMapMarkerAlt className="text-blue-600 mr-2" />
                <span>Jalan Kampung Baru, Jorong Pakan Sinayan, Nagari Kamang Mudiak</span>
              </p>
              <p className="flex items-center font-semibowhite">
                <FaPhone className="text-blue-600 mr-2" />
                <a href="tel:081374549687" className="hover:text-blue-600">
                  0813-7454-9687
                </a>
              </p>
              <p className="flex items-center font-semibowhite">
                <FaEnvelope className="text-blue-600 mr-2" />
                <a href="mailto:mti.yati@yahoo.com" className="hover:text-blue-600">
                  mti.yati@yahoo.com
                </a>
              </p>
            </div>
          </div>

          {/* Social Media & Quick Links */}
          <div>
            <h3 className="text-xl font-bold text-blue-800 mb-4">Ikuti Kami</h3>
            <div className="flex space-x-4 mb-6">
              <a href="#" className="text-blue-600 hover:text-blue-800 transition-colors">
                <FaFacebook size={24} />
              </a>
              <a href="#" className="text-blue-600 hover:text-blue-800 transition-colors">
                <FaInstagram size={24} />
              </a>
              <a href="#" className="text-blue-600 hover:text-blue-800 transition-colors">
                <FaYoutube size={24} />
              </a>
            </div>
            <div className="space-y-2">
              <Link href="/kontak" className="block font-semibold text-white-600 hover:text-blue-600">
                Kontak
              </Link>
              <Link href="/pendaftaran" className="block font-semibold text-white-600 hover:text-blue-600">
                Pendaftaran
              </Link>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-200 mt-8 pt-8 text-center">
          <p className="font-semibold text-white-600">&copy; {new Date().getFullYear()} Pondok Pesantren YATI. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}