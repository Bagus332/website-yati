// page.tsx
import { supabase } from "@/lib/supabase";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import {
  Calendar,
  Clock,
  User,
  Eye,
  Tag,
  ArrowLeft,
  Share2,
} from "lucide-react";
import Image from "next/image";
import ReactMarkdown from "react-markdown";
import readingTime from "reading-time";
import SocialShareButtons from "@/components/SocialShareButtons";
import LatestArticlesSidebar from "@/components/LatestArticlesSidebar";
import { Metadata } from "next";

interface Article {
  id: number;
  created_at: string;
  title: string;
  content: string;
  image_url: string | null;
  slug: string;
  author?: string;
  category?: string;
  excerpt?: string;
  view_count?: number;
  is_featured?: boolean;
  status?: "draft" | "published";
}

// Komponen untuk kategori artikel
const CategoryBadge = ({ category }: { category?: string }) => {
  const getCategoryColor = (cat?: string) => {
    switch (cat?.toLowerCase()) {
      case "kegiatan":
        return "bg-green-100 text-green-800 border-green-200";
      case "prestasi":
        return "bg-yellow-100 text-yellow-800 border-yellow-200";
      case "pengumuman":
        return "bg-red-100 text-red-800 border-red-200";
      case "pembelajaran":
        return "bg-blue-100 text-blue-800 border-blue-200";
      case "beasiswa":
        return "bg-purple-100 text-purple-800 border-purple-200";
      case "pendaftaran":
        return "bg-indigo-100 text-indigo-800 border-indigo-200";
      case "wisuda":
        return "bg-pink-100 text-pink-800 border-pink-200";
      case "olimpiade":
        return "bg-orange-100 text-orange-800 border-orange-200";
      case "ekstrakurikuler":
        return "bg-teal-100 text-teal-800 border-teal-200";
      default:
        return "bg-gray-100 text-gray-800 border-gray-200";
    }
  };

  if (!category) return null;

  return (
    <span
      className={`inline-flex items-center px-3 py-1 rounded-full text-sm font-semibold border ${getCategoryColor(
        category
      )}`}
    >
      <Tag className="w-3 h-3 mr-1" />
      {category}
    </span>
  );
};

async function getArticle(slug: string): Promise<Article | null> {
  const { data, error } = await supabase
    .from("articles")
    .select("*")
    .eq("slug", slug)
    .eq("status", "published") // Hanya tampilkan artikel yang sudah published
    .single();

  if (error) {
    console.error("Error fetching article:", error.message);
    return null;
  }

  // Increment view count
  if (data) {
    await supabase
      .from("articles")
      .update({ view_count: (data.view_count || 0) + 1 })
      .eq("id", data.id);

    data.view_count = (data.view_count || 0) + 1;
  }

  return data;
}

// Generate metadata for SEO
export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const article = await supabase
    .from("articles")
    .select("title, excerpt, content, image_url")
    .eq("slug", slug)
    .eq("status", "published")
    .single();

  if (!article.data) {
    return {
      title: "Artikel Tidak Ditemukan - Pondok Pesantren YATI",
      description: "Artikel yang Anda cari tidak ditemukan.",
    };
  }

  const description =
    article.data.excerpt ||
    article.data.content.substring(0, 160).replace(/\n/g, " ") + "...";

  return {
    title: `${article.data.title} - Pondok Pesantren YATI`,
    description,
    openGraph: {
      title: article.data.title,
      description,
      images: article.data.image_url ? [article.data.image_url] : [],
      type: "article",
    },
    twitter: {
      card: "summary_large_image",
      title: article.data.title,
      description,
      images: article.data.image_url ? [article.data.image_url] : [],
    },
  };
}

export default async function ArticlePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const article = await getArticle(slug);
  const articleUrl = `${
    process.env.NEXT_PUBLIC_SITE_URL || "https://your-domain.com"
  }/berita/${slug}`;

  if (!article) {
    return (
      <>
        <Navbar />
        <main className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-b from-blue-50 to-white">
          <div className="text-center p-8 max-w-lg mx-auto">
            <div className="mb-8">
              <div className="text-8xl font-bold text-blue-200 mb-4">404</div>
              <h1 className="text-3xl font-bold text-gray-800 mb-4">
                Artikel Tidak Ditemukan
              </h1>
              <p className="text-gray-600 mb-8 text-lg leading-relaxed">
                Maaf, artikel yang Anda cari tidak ada atau mungkin sudah
                dipindahkan. Silakan kembali ke halaman berita untuk melihat
                artikel lainnya.
              </p>
            </div>
            <div className="space-y-4">
              <a
                href="/berita"
                className="inline-flex items-center bg-gradient-to-r from-blue-500 to-cyan-500 text-white py-3 px-8 rounded-xl hover:opacity-90 transition-all duration-300 font-semibold shadow-lg transform hover:scale-105"
              >
                <ArrowLeft className="w-4 h-4 mr-2" />
                Kembali ke Daftar Berita
              </a>
              <div className="text-sm text-gray-500">
                atau{" "}
                <a href="/" className="text-blue-500 hover:underline">
                  kembali ke beranda
                </a>
              </div>
            </div>
          </div>
        </main>
        <Footer />
      </>
    );
  }

  const readingStats = readingTime(article.content);
  const formattedDate = new Date(article.created_at).toLocaleDateString(
    "id-ID",
    {
      year: "numeric",
      month: "long",
      day: "numeric",
    }
  );

  return (
    <>
      <Navbar />
      <main className="bg-gradient-to-b from-blue-50 to-white font-sans">
        {/* Breadcrumb & Navigation */}
        <div className="bg-white/50 backdrop-blur-sm border-b border-gray-200">
          <div className="container mx-auto px-4 py-4">
            <nav className="flex items-center space-x-2 text-sm text-gray-600">
              <a href="/" className="hover:text-blue-600 transition-colors">
                Beranda
              </a>
              <span>/</span>
              <a
                href="/berita"
                className="hover:text-blue-600 transition-colors"
              >
                Berita
              </a>
              <span>/</span>
              <span className="text-gray-800 font-medium truncate">
                {article.title}
              </span>
            </nav>
          </div>
        </div>

        <div className="container mx-auto px-4 py-12">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
            {/* Main Content - 3 columns */}
            <article className="lg:col-span-3">
              <div className="bg-white/80 backdrop-blur-lg rounded-3xl shadow-2xl border border-gray-100 overflow-hidden">
                {/* Article Header */}
                <div className="p-8 lg:p-12">
                  {/* Back Button */}
                  <div className="mb-8">
                    <a
                      href="/berita"
                      className="inline-flex items-center text-blue-600 hover:text-blue-800 transition-colors font-medium group"
                    >
                      <ArrowLeft className="w-4 h-4 mr-2 transform group-hover:-translate-x-1 transition-transform" />
                      Kembali ke Daftar Berita
                    </a>
                  </div>

                  {/* Category & Featured Badge */}
                  <div className="flex flex-wrap items-center gap-3 mb-6">
                    <CategoryBadge category={article.category} />
                    {article.is_featured && (
                      <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-semibold bg-gradient-to-r from-purple-100 to-pink-100 text-purple-800 border border-purple-200">
                        <span className="w-2 h-2 bg-purple-500 rounded-full mr-2 animate-pulse"></span>
                        Artikel Utama
                      </span>
                    )}
                  </div>

                  {/* Title */}
                  <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent mb-6 leading-tight">
                    {article.title}
                  </h1>

                  {/* Article Meta */}
                  <div className="flex flex-wrap items-center gap-6 text-gray-600 text-sm mb-8 pb-8 border-b border-gray-200">
                    <div className="flex items-center">
                      <Calendar className="w-4 h-4 mr-2" />
                      <span>Dipublikasikan {formattedDate}</span>
                    </div>

                    {article.author && (
                      <div className="flex items-center">
                        <User className="w-4 h-4 mr-2" />
                        <span>Oleh {article.author}</span>
                      </div>
                    )}

                    <div className="flex items-center">
                      <Clock className="w-4 h-4 mr-2" />
                      <span>{Math.ceil(readingStats.minutes)} menit baca</span>
                    </div>

                    {article.view_count !== undefined && (
                      <div className="flex items-center">
                        <Eye className="w-4 h-4 mr-2" />
                        <span>
                          {article.view_count.toLocaleString()} kali dibaca
                        </span>
                      </div>
                    )}
                  </div>

                  {/* Article Excerpt */}
                  {article.excerpt && (
                    <div className="bg-blue-50 border-l-4 border-blue-500 p-6 rounded-r-lg mb-8">
                      <p className="text-lg text-gray-700 italic leading-relaxed">
                        {article.excerpt}
                      </p>
                    </div>
                  )}
                </div>

                {/* Article Image */}
                {article.image_url && (
                  <div className="px-8 lg:px-12 mb-8">
                    <div className="rounded-2xl overflow-hidden shadow-xl">
                      <Image
                        src={article.image_url}
                        alt={article.title}
                        width={1200}
                        height={600}
                        className="w-full h-auto object-cover"
                        priority
                      />
                    </div>
                  </div>
                )}

                {/* Article Content */}
                <div className="px-8 lg:px-12 pb-12">
                  <div
                    className="prose prose-lg lg:prose-xl max-w-none 
                    prose-headings:text-gray-800 prose-headings:font-bold
                    prose-p:text-gray-700 prose-p:leading-relaxed prose-p:mb-6
                    prose-strong:text-gray-900 prose-strong:font-semibold
                    prose-a:text-blue-600 prose-a:no-underline hover:prose-a:underline
                    prose-blockquote:border-l-4 prose-blockquote:border-blue-500 
                    prose-blockquote:bg-blue-50 prose-blockquote:pl-6 prose-blockquote:py-4 
                    prose-blockquote:rounded-r-lg prose-blockquote:not-italic
                    prose-ul:list-disc prose-ol:list-decimal
                    prose-li:text-gray-700 prose-li:mb-2
                    prose-img:rounded-xl prose-img:shadow-lg
                    prose-hr:border-gray-300"
                  >
                    <ReactMarkdown
                      components={{
                        // Custom component untuk heading dengan anchor links
                        h2: ({ children, ...props }) => (
                          <h2
                            className="text-2xl font-bold text-gray-800 mt-8 mb-4 pb-2 border-b border-gray-200"
                            {...props}
                          >
                            {children}
                          </h2>
                        ),
                        h3: ({ children, ...props }) => (
                          <h3
                            className="text-xl font-semibold text-gray-800 mt-6 mb-3"
                            {...props}
                          >
                            {children}
                          </h3>
                        ),
                        // Custom blockquote
                        blockquote: ({ children, ...props }) => (
                          <blockquote
                            className="border-l-4 border-blue-500 bg-blue-50 pl-6 py-4 rounded-r-lg my-6 not-italic"
                            {...props}
                          >
                            {children}
                          </blockquote>
                        ),
                      }}
                    >
                      {article.content}
                    </ReactMarkdown>
                  </div>

                  {/* Social Share */}
                  <div className="mt-12 pt-8 border-t border-gray-200">
                    <div className="flex items-center justify-between">
                      <h3 className="text-lg font-semibold text-gray-800 mb-4">
                        Bagikan Artikel Ini
                      </h3>
                      <Share2 className="w-5 h-5 text-gray-600" />
                    </div>
                    <SocialShareButtons
                      url={articleUrl}
                      title={article.title}
                    />
                  </div>

                  {/* Article Tags/Categories */}
                  {article.category && (
                    <div className="mt-8 pt-6 border-t border-gray-200">
                      <div className="flex items-center flex-wrap gap-2">
                        <span className="text-sm font-medium text-gray-600 mr-2">
                          Kategori:
                        </span>
                        <CategoryBadge category={article.category} />
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </article>

            {/* Sidebar - 1 column */}
            <aside className="lg:col-span-1">
              <div className="sticky top-6 space-y-8">
                <LatestArticlesSidebar />

                {/* Article Stats Card */}
                <div className="bg-white/80 backdrop-blur-lg rounded-2xl shadow-xl border border-gray-100 p-6">
                  <h3 className="text-lg font-semibold text-gray-800 mb-4">
                    Statistik Artikel
                  </h3>
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <span className="text-gray-600">Dibaca</span>
                      <span className="font-semibold text-blue-600">
                        {(article.view_count || 0).toLocaleString()} kali
                      </span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-gray-600">Waktu baca</span>
                      <span className="font-semibold text-green-600">
                        {Math.ceil(readingStats.minutes)} menit
                      </span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-gray-600">Kata</span>
                      <span className="font-semibold text-purple-600">
                        {readingStats.words.toLocaleString()}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Quick Actions */}
                <div className="bg-gradient-to-br from-blue-500 to-cyan-500 text-white rounded-2xl shadow-xl p-6">
                  <h3 className="text-lg font-semibold mb-4">
                    Ingin Tahu Lebih?
                  </h3>
                  <p className="text-blue-100 mb-4 text-sm">
                    Dapatkan informasi terbaru dari Pondok Pesantren YATI
                  </p>
                  <div className="space-y-3">
                    <a
                      href="/berita"
                      className="block w-full bg-white/20 hover:bg-white/30 backdrop-blur-sm text-center py-2 px-4 rounded-lg transition-all duration-300"
                    >
                      Lihat Semua Berita
                    </a>
                    <a
                      href="/kontak"
                      className="block w-full bg-white/20 hover:bg-white/30 backdrop-blur-sm text-center py-2 px-4 rounded-lg transition-all duration-300"
                    >
                      Hubungi Kami
                    </a>
                  </div>
                </div>
              </div>
            </aside>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
