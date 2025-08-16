# Website Pondok Pesantren YATI

Ini adalah proyek [Next.js](https://nextjs.org) yang di-bootstrap dengan [`create-next-app`](https://www.google.com/search?q=%5Bhttps://nextjs.org/docs/app/api-reference/cli/create-next-app%5D\(https://nextjs.org/docs/app/api-reference/cli/create-next-app\)).

## Ringkasan Proyek

Website ini bertujuan untuk menjadi platform digital bagi Pondok Pesantren YATI, menyediakan informasi profil, berita, galeri kegiatan, serta detail mengenai jenjang pendidikan MTsS dan MAS. Selain itu, terdapat dasbor admin untuk mengelola konten artikel, galeri, dan data alumni.

## Teknologi yang Digunakan

  * **Framework**: [Next.js](https://nextjs.org/)
  * **Bahasa**: [TypeScript](https://www.typescriptlang.org/)
  * **Styling**: [Tailwind CSS](https://tailwindcss.com/)
  * **Animasi**: [Framer Motion](https://www.framer.com/motion/)
  * **Database & Autentikasi**: [Supabase](https://supabase.io/)
  * **Penyimpanan Gambar**: [Cloudinary](https://cloudinary.com/)

## Memulai

Pertama, jalankan server pengembangan:

```bash
npm run dev
# atau
yarn dev
# atau
pnpm dev
# atau
bun dev
```

Buka [http://localhost:3000](https://www.google.com/search?q=http://localhost:3000) dengan browser Anda untuk melihat hasilnya.

Anda dapat mulai mengedit halaman dengan memodifikasi `app/page.tsx`. Halaman akan diperbarui secara otomatis saat Anda mengedit file.

Proyek ini menggunakan [`next/font`](https://www.google.com/search?q=%5Bhttps://nextjs.org/docs/app/building-your-application/optimizing/fonts%5D\(https://nextjs.org/docs/app/building-your-application/optimizing/fonts\)) untuk mengoptimalkan dan memuat [Geist](https://vercel.com/font), keluarga font baru untuk Vercel, secara otomatis.

## Struktur Proyek

```
/src
├── app
│   ├── (public)
│   │   ├── profile
│   │   ├── mts
│   │   ├── ma
│   │   ├── berita
│   │   ├── galeri
│   │   └── kontak
│   └── admin
│       ├── dashboard
│       └── page.tsx (Login)
├── components
│   ├── ui
│   └── (komponen-utama)
└── lib
    ├── supabase.ts
    └── utils.ts
```

  * **`/app`**: Berisi semua rute aplikasi.
      * **`(public)`**: Grup rute untuk halaman yang dapat diakses publik.
      * **`/admin`**: Grup rute untuk halaman admin, termasuk halaman login dan dasbor.
  * **`/components`**: Berisi komponen React yang dapat digunakan kembali.
  * **`/lib`**: Berisi file utilitas dan konfigurasi, seperti koneksi Supabase.

## Dasbor Admin

Dasbor admin adalah area terproteksi untuk mengelola konten website.

  * **Login**: Akses halaman `/admin` untuk masuk.
  * **Fitur**:
      * **Manajemen Artikel**: Buat, edit, dan hapus artikel berita.
      * **Manajemen Galeri**: Unggah dan hapus foto di galeri.
      * **Manajemen Alumni**: Tambah, edit, dan hapus data alumni untuk MTsS dan MAS.

## Variabel Lingkungan

Untuk menjalankan proyek ini secara lokal, Anda perlu membuat file `.env.local` di root proyek dan menambahkan variabel berikut:

```
NEXT_PUBLIC_SUPABASE_URL=URL_PROYEK_SUPABASE_ANDA
NEXT_PUBLIC_SUPABASE_ANON_KEY=KUNCI_ANON_SUPABASE_ANDA
```

## Pelajari Lebih Lanjut

Untuk mempelajari lebih lanjut tentang Next.js, lihat sumber daya berikut:

  * [Dokumentasi Next.js](https://nextjs.org/docs) - pelajari tentang fitur dan API Next.js.
  * [Learn Next.js](https://nextjs.org/learn) - tutorial interaktif Next.js.

Anda dapat melihat [repositori GitHub Next.js](https://github.com/vercel/next.js) - umpan balik dan kontribusi Anda sangat kami harapkan\!

## Deploy di Vercel

Cara termudah untuk men-deploy aplikasi Next.js Anda adalah dengan menggunakan [Platform Vercel](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) dari para pembuat Next.js.

Lihat [dokumentasi deployment Next.js](https://nextjs.org/docs/app/building-your-application/deploying) kami untuk detail lebih lanjut.