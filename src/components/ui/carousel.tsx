"use client";
import { useState, useRef, useId, useEffect } from "react";
import { ImageModal } from "./ImageModal";

interface SlideData {
  src: string;
}

interface SlideProps {
  slide: SlideData;
  index: number;
  current: number;
  onImageClick: (src: string, alt: string) => void;
}

// Komponen untuk ikon panah kanan menggunakan SVG inline
const RightArrowIcon = ({ className }: { className: string }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className={className}
    width="24"
    height="24"
    viewBox="0 0 24 24"
    strokeWidth="2"
    stroke="currentColor"
    fill="none"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
    <path d="M5 12l14 0" />
    <path d="M15 16l4 -4" />
    <path d="M15 8l4 4" />
  </svg>
);

const Slide = ({ slide, index, current, onImageClick }: SlideProps) => {
  const slideRef = useRef<HTMLLIElement>(null);

  const xRef = useRef(0);
  const yRef = useRef(0);
  const frameRef = useRef<number>(0);

  useEffect(() => {
    const animate = () => {
      if (!slideRef.current) return;

      const x = xRef.current;
      const y = yRef.current;

      slideRef.current.style.setProperty("--x", `${x}px`);
      slideRef.current.style.setProperty("--y", `${y}px`);

      frameRef.current = requestAnimationFrame(animate);
    };

    frameRef.current = requestAnimationFrame(animate);

    return () => {
      if (frameRef.current) {
        cancelAnimationFrame(frameRef.current);
      }
    };
  }, []);

  const handleMouseMove = (event: React.MouseEvent) => {
    const el = slideRef.current;
    if (!el) return;

    const r = el.getBoundingClientRect();
    xRef.current = event.clientX - (r.left + Math.floor(r.width / 2));
    yRef.current = event.clientY - (r.top + Math.floor(r.height / 2));
  };

  const handleMouseLeave = () => {
    xRef.current = 0;
    yRef.current = 0;
  };

  const { src } = slide;

  const handleImageClick = () => {
    // Hanya tampilkan modal jika slide ini adalah slide yang sedang aktif
    if (current === index) {
      onImageClick(src, `Slide ${index + 1}`);
    }
  };

  return (
    <div className="[perspective:1200px] [transform-style:preserve-3d]">
      <li
        ref={slideRef}
        // Menghilangkan `justify-center` untuk menempatkan gambar di bagian atas
        // dan menyesuaikan `pt-0` untuk mengontrol posisi.
        className="flex flex-1 flex-col items-center relative text-center text-black z-10 w-[100vw] h-[100vh] transition-transform duration-1000 ease-in-out pt-0"
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        style={{
          transform: `scale(${current === index ? 1 : 0.95})`,
          opacity: current === index ? 1 : 0.5,
          transition:
            "transform 0.5s cubic-bezier(0.4, 0, 0.2, 1), opacity 0.5s ease-in-out",
          transformOrigin: "bottom",
        }}
      >
        <div
          // Mengubah latar belakang slide menjadi putih
          className="absolute top-0 left-0 w-full h-full bg-white rounded-[1%] overflow-hidden transition-all duration-150 ease-out"
          style={{
            transform:
              current === index
                ? "translate3d(calc(var(--x) / 30), calc(var(--y) / 30), 0)"
                : "none",
          }}
        >
          <img
            // Menggunakan object-contain untuk mencegah gambar terpotong
            className={`absolute inset-0 w-full h-full object-contain transition-transform duration-300 ${
              current === index
                ? "cursor-pointer hover:scale-105"
                : "cursor-default"
            }`}
            src={src}
            loading="eager"
            decoding="sync"
            onClick={handleImageClick}
            alt={`Slide ${index + 1}`}
          />
          {current === index && (
            // Mengubah overlay menjadi abu-abu transparan
            <div className="absolute inset-0 bg-gray-300/30 transition-all duration-1000" />
          )}
        </div>
      </li>
    </div>
  );
};

interface CarouselControlProps {
  type: string;
  title: string;
  handleClick: () => void;
}

const CarouselControl = ({
  type,
  title,
  handleClick,
}: CarouselControlProps) => {
  return (
    <button
      // Mengubah warna latar belakang tombol untuk latar belakang putih
      className={`w-10 h-10 flex items-center mx-2 justify-center bg-gray-200 border-3 border-transparent rounded-full focus:border-[#6D64F7] focus:outline-none hover:-translate-y-0.5 active:translate-y-0.5 transition duration-200 ${
        type === "previous" ? "rotate-180" : ""
      }`}
      title={title}
      onClick={handleClick}
    >
      <RightArrowIcon className="text-neutral-600" />
    </button>
  );
};

interface CarouselProps {
  slides: SlideData[];
}

export function Carousel({ slides }: CarouselProps) {
  const [current, setCurrent] = useState(0);
  const [selectedImage, setSelectedImage] = useState<{
    src: string;
    alt: string;
    index: number;
  } | null>(null);

  const handleNextClick = () => {
    const next = current + 1;
    setCurrent(next === slides.length ? 0 : next);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      handleNextClick();
    }, 5000);

    return () => clearInterval(interval);
  }, [current, slides.length]);

  const handlePreviousClick = () => {
    const previous = current - 1;
    setCurrent(previous < 0 ? slides.length - 1 : previous);
  };

  const handleImageClick = (src: string, alt: string) => {
    const imageIndex = slides.findIndex((slide) => slide.src === src);
    setSelectedImage({ src, alt, index: imageIndex });
  };

  const closeModal = () => {
    setSelectedImage(null);
  };

  const handleModalNavigate = (direction: "prev" | "next") => {
    if (!selectedImage) return;

    let newIndex;
    if (direction === "prev") {
      newIndex =
        selectedImage.index === 0 ? slides.length - 1 : selectedImage.index - 1;
    } else {
      newIndex =
        selectedImage.index === slides.length - 1 ? 0 : selectedImage.index + 1;
    }

    const newSlide = slides[newIndex];
    setSelectedImage({
      src: newSlide.src,
      alt: `Slide ${newIndex + 1}`,
      index: newIndex,
    });
  };

  const id = useId();

  return (
    <>
      <div
        className="relative w-full h-screen mx-auto overflow-hidden"
        aria-labelledby={`carousel-heading-${id}`}
      >
        <ul
          className="absolute flex w-[100vw] h-[100vh] transition-transform duration-1000 ease-in-out"
          style={{
            transform: `translateX(-${current * 100}%)`,
          }}
        >
          {slides.map((slide, index) => (
            <Slide
              key={index}
              slide={slide}
              index={index}
              current={current}
              onImageClick={handleImageClick}
            />
          ))}
        </ul>

        <div className="absolute flex justify-center w-full top-[calc(100%-4rem)]">
          <CarouselControl
            type="previous"
            title="Go to previous slide"
            handleClick={handlePreviousClick}
          />

          <CarouselControl
            type="next"
            title="Go to next slide"
            handleClick={handleNextClick}
          />
        </div>
      </div>

      {/* Image Modal */}
      {selectedImage && (
        <ImageModal
          isOpen={!!selectedImage}
          onClose={closeModal}
          imageSrc={selectedImage.src}
          imageAlt={selectedImage.alt}
          allImages={slides.map((slide, index) => ({
            src: slide.src,
            alt: `Slide ${index + 1}`,
          }))}
          currentIndex={selectedImage.index}
          onNavigate={handleModalNavigate}
        />
      )}
    </>
  );
}
