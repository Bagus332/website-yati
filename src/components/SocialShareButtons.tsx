// components/SocialShareButtons.tsx
"use client";

import {
  FacebookShareButton,
  WhatsappShareButton,
  TwitterShareButton,
  TwitterIcon, // Import icon X (Twitter) dari next-share
  FacebookIcon, // Import icon Facebook dari next-share
  WhatsappIcon, // Import icon Whatsapp dari next-share
} from "next-share";
import { Share2 } from "lucide-react"; // Ikon umum untuk label "Bagikan"

interface SocialShareProps {
  url: string;
  title: string;
}

export default function SocialShareButtons({ url, title }: SocialShareProps) {
  return (
    <div className="mt-12 pt-6 border-t border-gray-200 flex flex-col sm:flex-row items-center justify-center gap-4">
      <span className="text-gray-600 font-semibold flex items-center gap-2">
        <Share2 size={20} /> Bagikan artikel ini:
      </span>
      <div className="flex gap-4">
        <TwitterShareButton url={url} title={title}>
          <TwitterIcon size={32} round />
        </TwitterShareButton>

        <FacebookShareButton url={url} quote={title} hashtag={"#BeritaTerkini"}>
          <FacebookIcon size={32} round />
        </FacebookShareButton>

        <WhatsappShareButton url={url} title={title}>
          <WhatsappIcon size={32} round />
        </WhatsappShareButton>
      </div>
    </div>
  );
}
