import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? 'http://localhost:3000';

export const metadata: Metadata = {
  title: {
    default: "Pondok Pesantren Yati Kamang Mudik - Pendidikan Islam Modern",
    template: "%s | Pondok Pesantren Yati Kamang Mudik"
  },
  description:
    "Website resmi Pondok Pesantren Yati Kamang Mudik - Pendidikan Islam Modern dengan Nilai-nilai Pesantren. Mendidik Generasi Qurani dengan integrasi nilai pesantren dan pendidikan modern. Directed by: KKN 51 UIN Imam Bonjol Padang 2025.",
  keywords: [
    "pondok pesantren",
    "pesantren yati",
    "pendidikan islam",
    "madrasah aliyah",
    "madrasah tsanawiyah",
    "kamang mudik",
    "agam",
    "sumatera barat",
    "pendidikan qurani",
    "islam modern",
    "yayasan tarbiyah islamiyah",
    "buya h mansur"
  ],
  authors: [{ name: "Pondok Pesantren Yati Kamang Mudik" }],
  creator: "KKN 51 UIN Imam Bonjol Padang 2025",
  publisher: "Pondok Pesantren Yati Kamang Mudik",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL(siteUrl),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    type: 'website',
    locale: 'id_ID',
    url: siteUrl,
    title: 'Pondok Pesantren Yati Kamang Mudik - Pendidikan Islam Modern',
    description: 'Website resmi Pondok Pesantren Yati Kamang Mudik - Pendidikan Islam Modern dengan Nilai-nilai Pesantren. Mendidik Generasi Qurani.',
    siteName: 'Pondok Pesantren Yati Kamang Mudik',
    images: [
      {
        url: '/logo.jpeg',
        width: 1200,
        height: 630,
        alt: 'Logo Pondok Pesantren Yati Kamang Mudik',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Pondok Pesantren Yati Kamang Mudik - Pendidikan Islam Modern',
    description: 'Website resmi Pondok Pesantren Yati Kamang Mudik - Pendidikan Islam Modern dengan Nilai-nilai Pesantren.',
    images: ['/logo.jpeg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'ixIQ3OAe95_HnIvFkgVovMXzNNrj0R1FfPW--XW5lVo',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#7FC7D9" />
        <meta name="msapplication-TileColor" content="#7FC7D9" />
        <link rel="icon" href="/logo.jpeg" />
        <link rel="apple-touch-icon" href="/logo.jpeg" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "EducationalOrganization",
              "name": "Pondok Pesantren Yati Kamang Mudik",
              "alternateName": "Pesantren Yati",
              "description": "Pendidikan Islam Modern dengan Nilai-nilai Pesantren",
              "url": siteUrl,
              "logo": `${siteUrl}/logo.jpeg`,
              "image": `${siteUrl}/logo.jpeg`,
              "address": {
                "@type": "PostalAddress",
                "streetAddress": "QCQ2+4X5 Yati, Kampung Baru, Kamang Mudiak",
                "addressLocality": "Kamang Magek",
                "addressRegion": "Sumatera Barat",
                "addressCountry": "ID"
              },
              "contactPoint": {
                "@type": "ContactPoint",
                "telephone": "+62-812-6626-1470",
                "contactType": "customer service",
                "email": "ponpesyatii@gmail.com"
              },
              "openingHours": [
                "Mo-Th 07:00-15:00",
                "Fr 07:00-11:45",
                "Sa 07:00-15:00"
              ],
              "sameAs": [
                "https://www.facebook.com/ponpes.yatikamangmudik",
                "https://www.instagram.com/ponpes_yati/",
                "https://www.youtube.com/@ponpesyatikamangmudik7682"
              ]
            })
          }}
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
