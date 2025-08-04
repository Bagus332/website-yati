import Navbar from "@/components/Navbar";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="container mx-auto py-8 px-4">
        <h1 className="text-2xl font-bold mb-4 text-center">
          Kontak Pondok Pesantren YATI Kamang Mudik
        </h1>
        <div className="mb-6 text-center">
          <p className="mb-2">
            Silakan hubungi kami untuk informasi lebih lanjut mengenai
            pendaftaran, program pendidikan, atau kunjungan ke Pondok Pesantren
            YATI Kamang Mudik.
          </p>
          <div className="inline-block text-left bg-white rounded shadow p-6 border border-gray-200">
            <p className="mb-2">
              <span className="font-semibold">Nama Yayasan:</span> Yayasan Tarbiyah Islamiyah Buya H Mansur
            </p>
            <p className="mb-2">
              <span className="font-semibold">Alamat:</span> Jalan Kampung Baru, Jorong Pakan Sinayan
            </p>
            <p className="mb-2">
              Nagari Kamang Mudiak, Kec. Kamang Magek
            </p>
            <p className="mb-2">
              Kab. Agam, Sumatera Barat
            </p>
            <p className="mb-2">
              <span className="font-semibold">Email:</span>{" "}
              mti.yati@yahoo.com
            </p>
            <p className="mb-2">
              <span className="font-semibold">Pimpinan:</span>{" "}
              Mhd Padhil, S.Pd
            </p>
            <p className="mb-2">
              <span className="font-semibold">No. Telepon:</span>{" "}
              081374549687
            </p>
            <p className="mb-2">
              <span className="font-semibold">No. Statistik:</span>{" "}
              510013060005
            </p>
            <p className="mb-2">
              <span className="font-semibold">NPWP:</span>{" "}
              0.2.698.791.7-203.000
            </p>
          </div>
        </div>
        <div className="text-center mt-8">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3989.8166509336237!2d100.35870857492733!3d-0.2447899995831439!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2fd54c8c8b8c8b8b%3A0x2a3b2b2b2b2b2b2b!2sKamang%20Mudik%2C%20Kamang%20Magek%2C%20Agam%20Regency%2C%20West%20Sumatra!5e0!3m2!1sen!2sid!4v1659517427726!5m2!1sen!2sid"
            width="100%"
            height="300"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Lokasi Pondok Pesantren YATI Kamang Mudik"
          ></iframe>
        </div>
      </main>
    </>
  );
}
