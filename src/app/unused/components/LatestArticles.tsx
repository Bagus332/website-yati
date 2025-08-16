import { supabase } from "@/lib/supabase";
import Link from "next/link";
import Image from "next/image";
import readingTime from "reading-time";

interface Article {
  id: number;
  created_at: string;
  title: string;
  content: string; // Tambahkan konten untuk menghitung waktu baca
  image_url: string | null;
  slug: string;
}

// Fungsi untuk mengambil 6 artikel terbaru dari Supabase
async function getLatestArticles(): Promise<Article[]> {
  const { data, error } = await supabase
    .from("articles")
    .select("id, title, created_at, image_url, slug, content")
    .order("created_at", { ascending: false })
    .limit(6);

  if (error) {
    console.error("Error fetching latest articles:", error.message);
    return [];
  }
  return data;
}

export default async function LatestArticles() {
  const articles = await getLatestArticles();

  if (articles.length === 0) {
    return (
      <p className="text-center text-gray-500">
        Tidak ada berita terbaru saat ini.
      </p>
    );
  }

  return (
    <section className="bg-white py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-extrabold text-center text-gray-900 mb-12">
          Berita Terbaru
        </h2>
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-3">
          {articles.map((article) => {
            const readingStats = readingTime(article.content);
            return (
              <div
                key={article.id}
                className="bg-gray-50 rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-shadow duration-300"
              >
                {article.image_url && (
                  <div className="relative w-full h-56">
                    <Image
                      src={article.image_url}
                      alt={article.title}
                      layout="fill"
                      objectFit="cover"
                      className="transition-transform duration-300 hover:scale-105"
                    />
                  </div>
                )}
                <div className="p-6">
                  <span className="text-sm text-gray-500 block mb-2">
                    {new Date(article.created_at).toLocaleDateString("id-ID", {
                      year: "numeric",
                      month: "long",
                      day: "numeric",
                    })}
                  </span>
                  <Link href={`/berita/${article.slug}`}>
                    <h3 className="text-xl font-bold text-gray-800 hover:text-blue-600 transition-colors mb-2">
                      {article.title}
                    </h3>
                  </Link>
                  <div className="flex items-center text-sm text-gray-500">
                    <span>{Math.ceil(readingStats.minutes)} menit baca</span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
        <div className="text-center mt-12">
          <Link
            href="/berita"
            className="inline-block bg-blue-600 text-white font-semibold py-3 px-8 rounded-full shadow-lg hover:bg-blue-700 transition-colors"
          >
            Lihat Semua Berita
          </Link>
        </div>
      </div>
    </section>
  );
}
