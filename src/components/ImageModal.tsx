"use client";

import { useEffect } from "react";
import Image from "next/image";
import { X, ChevronLeft, ChevronRight } from "lucide-react";

interface ImageModalProps {
  src: string;
  alt: string;
  isOpen: boolean;
  onClose: () => void;
  onPrev?: () => void;
  onNext?: () => void;
  canPrev?: boolean;
  canNext?: boolean;
}

export default function ImageModal({ src, alt, isOpen, onClose, onPrev, onNext, canPrev = true, canNext = true }: ImageModalProps) {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }

    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        event.preventDefault();
        onClose();
      } else if (event.key === "ArrowLeft") {
        if (onPrev && canPrev) {
          event.preventDefault();
          onPrev();
        }
      } else if (event.key === "ArrowRight") {
        if (onNext && canNext) {
          event.preventDefault();
          onNext();
        }
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, onClose, onPrev, onNext, canPrev, canNext]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm">
      <div className="relative max-w-[95vw] max-h-[95vh] p-4">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute -top-2 -right-2 z-10 p-2 bg-white dark:bg-gray-800 rounded-full shadow-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
        >
          <X size={20} className="text-gray-600 dark:text-gray-300" />
        </button>
        {/* Left Arrow */}
        {onPrev && canPrev && (
          <button
            aria-label="Previous image"
            onClick={onPrev}
            className={`absolute left-2 top-1/2 -translate-y-1/2 z-10 p-2 rounded-full bg-white/90 dark:bg-gray-800/90 shadow-lg hover:bg-white`}
          >
            <ChevronLeft size={22} className="text-gray-700 dark:text-gray-200" />
          </button>
        )}
        {/* Right Arrow */}
        {onNext && canNext && (
          <button
            aria-label="Next image"
            onClick={onNext}
            className={`absolute right-2 top-1/2 -translate-y-1/2 z-10 p-2 rounded-full bg-white/90 dark:bg-gray-800/90 shadow-lg hover:bg-white`}
          >
            <ChevronRight size={22} className="text-gray-700 dark:text-gray-200" />
          </button>
        )}
        <div className="relative">
          <Image
            src={src}
            alt={alt}
            width={1200}
            height={800}
            className="max-w-full max-h-[90vh] object-contain rounded-lg"
            priority
          />
        </div>
      </div>
    </div>
  );
}
