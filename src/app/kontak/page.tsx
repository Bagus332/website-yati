import Navbar from "@/components/Navbar";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="container mx-auto py-10 px-4 bg-gradient-to-b from-blue-50 to-white min-h-screen">
        {/* Judul */}
        <h1 className="text-3xl font-bold mb-6 text-center text-blue-700">
          Kontak Pondok Pesantren YATI Kamang Mudik
        </h1>

        {/* Deskripsi */}
        <div className="mb-8 text-center max-w-2xl mx-auto text-gray-700">
          <p className="mb-2">
            Silakan hubungi kami untuk informasi lebih lanjut mengenai
            pendaftaran, program pendidikan, atau kunjungan ke Pondok Pesantren
            YATI Kamang Mudik.
          </p>
        </div>

        {/* Info Kontak */}
        <div className="bg-white shadow-lg rounded-2xl p-6 max-w-xl mx-auto border border-blue-100">
          <p className="mb-2">
            <span className="font-semibold text-blue-700">Nama Yayasan:</span>{" "}
            Yayasan Tarbiyah Islamiyah Buya H Mansur
          </p>
          <p className="mb-2">
            <span className="font-semibold text-blue-700">Alamat:</span> Jalan
            Kampung Baru, Jorong Pakan Sinayan
          </p>
          <p className="mb-2">Nagari Kamang Mudiak, Kec. Kamang Magek</p>
          <p className="mb-2">Kab. Agam, Sumatera Barat</p>
          <p className="mb-2">
            <span className="font-semibold text-blue-700">Email:</span>{" "}
            <a
              href="mailto:mti.yati@yahoo.com"
              className="text-blue-500 hover:underline"
            >
              mti.yati@yahoo.com
            </a>
          </p>
          <p className="mb-2">
            <span className="font-semibold text-blue-700">Pimpinan:</span>{" "}
            Mhd Padhil, S.Pd
          </p>
          <p className="mb-2">
            <span className="font-semibold text-blue-700">No. Telepon:</span>{" "}
            <a href="tel:081374549687" className="text-blue-500 hover:underline">
              0813-7454-9687
            </a>
          </p>
          <p className="mb-2">
            <span className="font-semibold text-blue-700">No. Statistik:</span>{" "}
            510013060005
          </p>
          <p className="mb-2">
            <span className="font-semibold text-blue-700">NPWP:</span>{" "}
            0.2.698.791.7-203.000
          </p>
        </div>

        {/* Google Maps */}
        <div className="text-center mt-10">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15957.443721011277!2d100.402472!3d-0.212250!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2fd537f912345678%3A0xabcdefabcdefabcd!2sPonpes%20YATI%20Kamang%20Mudik!5e0!3m2!1sid!2sid!4v1692000000000!5m2!1sid!2sid"
            width="100%"
            height="350"
            style={{ border: 0, borderRadius: "12px" }}
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
