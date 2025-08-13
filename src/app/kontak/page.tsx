"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";
import { FaMapMarkerAlt, FaPhone, FaEnvelope, FaUser, FaBuilding, FaIdCard } from "react-icons/fa";

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
                pendaftaran, program pendidikan, atau kunjungan ke Pondok Pesantren
                YATI Kamang Mudik.
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
                      <h3 className="text-lg font-bold text-gray-800">Nama Yayasan</h3>
                      <p className="text-gray-600">Yayasan Tarbiyah Islamiyah Buya H Mansur</p>
                    </div>
                  </div>

                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl flex items-center justify-center">
                      <FaMapMarkerAlt className="text-2xl text-white" />
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-gray-800">Alamat</h3>
                      <p className="text-gray-600">QCQ2+4X5 Yati, Kampung Baru</p>
                      <p className="text-gray-600">Kamang Mudiak, Kamang Magek</p>
                      <p className="text-gray-600">Kabupaten Agam, Sumatera Barat 26152</p>
                    </div>
                  </div>

                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl flex items-center justify-center">
                      <FaUser className="text-2xl text-white" />
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-gray-800">Pimpinan</h3>
                      <p className="text-gray-600">Mhd Padhil, S.Pd</p>
                    </div>
                  </div>

                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl flex items-center justify-center">
                      <FaPhone className="text-2xl text-white" />
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-gray-800">Telepon</h3>
                      <a href="tel:081374549687" className="text-blue-600 hover:text-blue-700 transition-colors">
                        0813-7454-9687
                      </a>
                    </div>
                  </div>

                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl flex items-center justify-center">
                      <FaEnvelope className="text-2xl text-white" />
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-gray-800">Email</h3>
                      <a href="mailto:mti.yati@yahoo.com" className="text-blue-600 hover:text-blue-700 transition-colors">
                        mti.yati@yahoo.com
                      </a>
                    </div>
                  </div>

                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl flex items-center justify-center">
                      <FaIdCard className="text-2xl text-white" />
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-gray-800">Informasi Legal</h3>
                      <p className="text-gray-600">No. Statistik: 510013060005</p>
                      <p className="text-gray-600">NPWP: 0.2.698.791.7-203.000</p>
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
                <div className="relative h-full min-h-[500px] rounded-2xl overflow-hidden">
                  <iframe
                    src="https://www.bing.com/maps/embed?h=400&w=800&cp=-0.212067~100.402306&lvl=16&typ=d&sty=r&src=SHELL&FORM=MBEDV8"
                    width="100%"
                    height="100%"
                    className="absolute inset-0 w-full h-full rounded-2xl"
                    allowFullScreen
                    loading="lazy"
                    title="Lokasi Pondok Pesantren YATI Kamang Mudik"
                  ></iframe>
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
