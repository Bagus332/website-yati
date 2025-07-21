import React from "react";

export default function Home() {
  return (
    <main className="container mx-auto py-8 px-4">
      <h1 className="text-2xl font-bold mb-4">
        Struktur Organisasi Pondok Pesantren Yati
      </h1>
      <p className="mb-6">
        Struktur organisasi Pondok Pesantren Yati dirancang untuk mendukung
        kelancaran operasional dan pembinaan santri secara optimal. Berikut adalah
        susunan organisasi di Ponpes Yati:
      </p>
      <ul className="list-disc pl-6 space-y-2 mb-6">
        <li>Pimpinan Pondok Pesantren</li>
        <li>Wakil Pimpinan</li>
        <li>Bagian Pendidikan dan Kurikulum</li>
        <li>Bagian Kesantrian dan Pembinaan</li>
        <li>Bagian Sarana dan Prasarana</li>
        <li>Bagian Keuangan dan Administrasi</li>
        <li>Bagian Humas dan Kerjasama</li>
        <li>Koordinator Ekstrakurikuler</li>
        <li>Koordinator Keamanan dan Ketertiban</li>
      </ul>
      <p>
        Setiap bagian memiliki peran dan tanggung jawab masing-masing untuk
        memastikan seluruh program dan kegiatan di pesantren berjalan dengan baik
        dan terkoordinasi.
      </p>
    </main>
  );
}