"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";
import {
  FaMapMarkerAlt,
  FaPhone,
  FaEnvelope,
  FaUser,
  FaBuilding,
  FaIdCard,
} from "react-icons/fa";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-gradient-to-b from-blue-50 to-white font-sans">
        {/* Background Patterns */}
        <div className="fixed inset-0 opacity-[0.02] pointer-events-none">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_25%_25%,_theme(colors.blue.500)_0%,_transparent_50%)]" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_75%_75%,_theme(colors.cyan.500)_0%,_transparent_50%)]" />
        </div>

        <div className="container mx-auto py-24 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <span className="inline-block bg-gradient-to-r from-blue-100 to-cyan-100 text-blue-800 px-6 py-3 rounded-full text-sm font-bold uppercase tracking-wider mb-6">
                Hubungi Kami
              </span>
              <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent mb-6">
                Kontak Pondok Pesantren YATI
              </h1>
              <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-cyan-500 mx-auto rounded-full" />
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="bg-white/70 backdrop-blur-lg p-8 rounded-[2.5rem] shadow-2xl border-2 border-blue-100/60 mb-16"
            >
              <p className="text-gray-700 text-lg leading-relaxed text-center max-w-3xl mx-auto">
                Silakan hubungi kami untuk informasi lebih lanjut mengenai
                pendaftaran, program pendidikan, atau kunjungan ke Pondok
                Pesantren YATI Kamang Mudik.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 gap-8 mb-16">
              {/* Contact Info */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                className="bg-white/70 backdrop-blur-lg p-8 rounded-[2.5rem] shadow-2xl border-2 border-blue-100/60"
              >
                <div className="space-y-6">
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl flex items-center justify-center">
                      <FaBuilding className="text-2xl text-white" />
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-gray-800">
                        Nama Yayasan
                      </h3>
                      <p className="text-gray-600">
                        Yayasan Tarbiyah Islamiyah Buya H Mansur
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl flex items-center justify-center">
                      <FaMapMarkerAlt className="text-2xl text-white" />
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-gray-800">
                        Alamat
                      </h3>
                      <p className="text-gray-600">
                        QCQ2+4X5 Yati, Kampung Baru
                      </p>
                      <p className="text-gray-600">
                        Kamang Mudiak, Kamang Magek
                      </p>
                      <p className="text-gray-600">
                        Kabupaten Agam, Sumatera Barat 26152
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl flex items-center justify-center">
                      <FaUser className="text-2xl text-white" />
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-gray-800">
                        Pimpinan
                      </h3>
                      <p className="text-gray-600">Mhd Padhil, S.Pd</p>
                    </div>
                  </div>

                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl flex items-center justify-center">
                      <FaPhone className="text-2xl text-white" />
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-gray-800">
                        Telepon
                      </h3>
                      <div className="flex flex-col">
                        <a
                          href="tel:081266261470"
                          className="text-blue-600 hover:text-blue-700 transition-colors"
                        >
                          0812-6626-1470 (Admin)
                        </a>
                        <a
                          href="tel:085263286663"
                          className="text-blue-600 hover:text-blue-700 transition-colors mt-1"
                        >
                          0852-6328-6663 (Kepala MAS)
                        </a>
                        <a
                          href="tel:081363789074"
                          className="text-blue-600 hover:text-blue-700 transition-colors mt-1"
                        >
                          0813-6378-9074 (Kepala MTsS)
                        </a>
                      </div>
                    </div>
                  </div>

                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl flex items-center justify-center">
                      <FaEnvelope className="text-2xl text-white" />
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-gray-800">Email</h3>
                      <a
                        href="mailto:mti.yati@yahoo.com"
                        className="text-blue-600 hover:text-blue-700 transition-colors"
                      >
                        ponpesyatii@gmail.com
                      </a>
                    </div>
                  </div>

                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl flex items-center justify-center">
                      <FaIdCard className="text-2xl text-white" />
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-gray-800">
                        Informasi Legal
                      </h3>
                      <p className="text-gray-600">
                        No. Statistik: 510013060005
                      </p>
                      <p className="text-gray-600">
                        NPWP: 0.2.698.791.7-203.000
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>
              {/* Maps Section */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                className="bg-white/70 backdrop-blur-lg p-8 rounded-[2.5rem] shadow-2xl border-2 border-blue-100/60"
              >
                <div className="space-y-6">
                  {/* Iframe Peta (untuk tampilan desktop) */}
                  <div className="relative pt-[56.25%] rounded-2xl overflow-hidden shadow-md">
                    <iframe
                      src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d3989.790991355191!2d100.402306!3d-0.212067!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2fd5452d2b0d1af9%3A0xf07f31c10565121!2sPondok%20Pesantren%20YATI%20Kamang%20Mudik!5e0!3m2!1sen!2sid!4v1755325146076!5m2!1sen!2sid"
                      className="absolute inset-0 w-full h-full"
                      style={{ border: 0 }}
                      allowFullScreen
                      loading="lazy"
                      referrerPolicy="no-referrer-when-downgrade"
                      title="Lokasi Pondok Pesantren YATI Kamang Mudik"
                    ></iframe>
                  </div>

                  {/* Tombol Buka Peta (untuk tampilan mobile dan alternatif) */}
                  <div className="flex flex-col items-center justify-center text-center p-4">
                    <h3 className="text-xl font-bold text-gray-800 mb-2">
                      Lihat Lokasi di Peta
                    </h3>
                    <p className="text-gray-600 max-w-sm mb-4">
                      Jika peta tidak muncul, klik tombol di bawah untuk membuka
                      lokasi langsung di aplikasi peta Anda.
                    </p>
                    <a
                      href="https://www.google.com/maps/place/Pondok+Pesantren+Yati+Kamang+Mudiak/@-0.212067,100.402306,17z/data=!3m1!4b1!4m6!3m5!1s0x2fd538f9b9a67a03:0xaf5081fdfd5395a0!8m2!3d-0.212067!4d100.402306!16s%2Fg%2F11b6m774r8"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-block bg-blue-600 text-white font-bold py-3 px-8 rounded-full shadow-lg hover:bg-blue-700 transition-colors"
                    >
                      Buka Peta
                    </a>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
