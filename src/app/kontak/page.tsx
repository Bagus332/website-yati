import Navbar from "@/components/Navbar";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="container mx-auto py-8 px-4">
        <h1 className="text-2xl font-bold mb-4 text-center">
          Kontak Pondok Pesantren Yati
        </h1>
        <div className="mb-6 text-center">
          <p className="mb-2">
            Silakan hubungi kami untuk informasi lebih lanjut mengenai
            pendaftaran, program pendidikan, atau kunjungan ke Pondok Pesantren
            Yati.
          </p>
          <div className="inline-block text-left bg-white rounded shadow p-6 border border-gray-200">
            <p className="mb-2">
              <span className="font-semibold">Alamat:</span> Jl. Pesantren Yati
              No. 123, Kabupaten Bandung, Jawa Barat
            </p>
            <p className="mb-2">
              <span className="font-semibold">Telepon:</span> (022) 1234567
            </p>
            <p className="mb-2">
              <span className="font-semibold">Email:</span>{" "}
              info@ponpesyati.sch.id
            </p>
            <p className="mb-2">
              <span className="font-semibold">WhatsApp:</span> 0812-3456-7890
            </p>
          </div>
        </div>
        <div className="text-center mt-8">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3168.123456789!2d107.123456!3d-6.987654!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e68e9c123456789%3A0x123456789abcdef!2sPondok+Pesantren+Yati!5e0!3m2!1sid!2sid!4v1621234567890!5m2!1sid!2sid"
            width="100%"
            height="300"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Lokasi Pondok Pesantren Yati"
          ></iframe>
        </div>
      </main>
    </>
  );
}
