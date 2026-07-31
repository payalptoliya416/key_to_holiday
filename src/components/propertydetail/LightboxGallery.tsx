"use client";

import { X, ChevronLeft, ChevronRight } from "lucide-react";
import Image from "next/image";
import { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Thumbs, Keyboard } from "swiper/modules";
import type { Swiper as SwiperType } from "swiper";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/thumbs";

interface LightboxGalleryProps {
  open: boolean;
  images: string[];
  initialSlide?: number;
  onClose: () => void;
}

export default function LightboxGallery({
  open,
  images,
  initialSlide = 0,
  onClose,
}: LightboxGalleryProps) {
  const [thumbsSwiper, setThumbsSwiper] = useState<SwiperType | null>(null);

  useEffect(() => {
    if (!open) return;

    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        onClose();
      }
    };

    document.body.style.overflow = "hidden";

    window.addEventListener("keydown", handleKey);

    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleKey);
    };
  }, [open, onClose]);

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-[9999] bg-[#111827]/40 backdrop-blur-2xl">
      {/* Header */}
      <div className="absolute left-0 right-0 top-0 z-50 flex items-center justify-between px-8 py-6">
        <p className="text-lg font-semibold text-white">
          Property Gallery
        </p>

        <button
          onClick={onClose}
          className="flex h-11 w-11 items-center justify-center rounded-full bg-white/10 text-white transition hover:bg-white/20 cursor-pointer"
        >
          <X size={24} />
        </button>
      </div>

      {/* Navigation Buttons */}
      <button className="gallery-prev absolute left-6 top-1/2 z-50 flex h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full bg-white text-black shadow-lg cursor-pointer">
        <ChevronLeft size={22} />
      </button>

      <button className="gallery-next absolute right-6 top-1/2 z-50 flex h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full bg-white text-black shadow-lg cursor-pointer">
        <ChevronRight size={22} />
      </button>

      {/* Main Slider */}
      <div className="flex h-full flex-col justify-center px-20 pt-20 pb-8">
        <Swiper
          modules={[Navigation, Thumbs, Keyboard]}
          initialSlide={initialSlide}
          keyboard={{ enabled: true }}
          navigation={{
            nextEl: ".gallery-next",
            prevEl: ".gallery-prev",
          }}
          thumbs={{
            swiper:
              thumbsSwiper && !thumbsSwiper.destroyed
                ? thumbsSwiper
                : null,
          }}
          spaceBetween={20}
          className="w-full flex-1"
        >
          {images.map((img, index) => (
            <SwiperSlide key={index}>
              <div className="relative h-[75vh] w-full">
                <Image
                  src={img}
                  alt={`Gallery ${index + 1}`}
                  fill
                  priority
                  className="object-contain"
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Thumbnail Slider */}
        <Swiper
          modules={[Thumbs]}
          onSwiper={setThumbsSwiper}
          slidesPerView={6}
          watchSlidesProgress
          spaceBetween={12}
          className="mt-6 w-full max-w-5xl"
          breakpoints={{
            0: {
              slidesPerView: 3,
            },
            640: {
              slidesPerView: 4,
            },
            1024: {
              slidesPerView: 6,
            },
          }}
        >
          {images.map((img, index) => (
            <SwiperSlide key={index}>
              <div className="relative h-24 cursor-pointer overflow-hidden rounded-xl border-2 border-transparent transition hover:border-white">
                <Image
                  src={img}
                  alt=""
                  fill
                  className="object-cover"
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
}