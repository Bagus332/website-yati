import type { MetadataRoute } from 'next';

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? 'http://localhost:3000';

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  const routes: string[] = [
    '',
    '/berita',
    '/galeri',
    '/kontak',
    '/ma/profil',
    '/ma/struktur-org',
    '/ma/alumni',
    '/ma/tendik',
    '/mts/profil',
    '/mts/struktur-org',
    '/mts/alumni',
    '/mts/tendik',
    '/profile/sejarah',
    '/profile/visi-misi',
    '/profile/struktur-org',
    '/profile/fasilitas',
    '/profile/manajemen',
  ];

  return routes.map((path) => ({
    url: `${siteUrl}${path}`,
    lastModified: now,
    changeFrequency: 'weekly',
    priority: path === '' ? 1 : 0.7,
  }));
}


