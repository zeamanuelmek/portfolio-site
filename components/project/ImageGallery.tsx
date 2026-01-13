'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import type { ProjectImage } from '@/lib/data/projects';

interface ImageGalleryProps {
  images: ProjectImage[];
  columns?: 1 | 2 | 3;
  onImageClick?: (index: number) => void;
}

export function ImageGallery({
  images,
  columns = 1,
  onImageClick,
}: ImageGalleryProps) {
  const gridClasses = {
    1: 'grid-cols-1',
    2: 'grid-cols-1 md:grid-cols-2',
    3: 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3',
  };

  return (
    <div className={`grid ${gridClasses[columns]} gap-6`}>
      {images.map((image, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: index * 0.1 }}
          className="group"
        >
          <div
            className={`relative aspect-video rounded-lg overflow-hidden border border-zinc-800 bg-zinc-900 shadow-lg ${
              onImageClick ? 'cursor-pointer' : ''
            }`}
            onClick={() => onImageClick?.(index)}
          >
            <Image
              src={image.src}
              alt={image.alt}
              fill
              className="object-cover group-hover:scale-105 transition-transform duration-500"
              loading="lazy"
              sizes={
                columns === 1
                  ? '(max-width: 1024px) 100vw, 1024px'
                  : columns === 2
                  ? '(max-width: 768px) 100vw, 50vw'
                  : '(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw'
              }
            />
            {onImageClick && (
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300 flex items-center justify-center">
                <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="bg-white/10 backdrop-blur-sm rounded-full p-3">
                    <svg
                      className="w-6 h-6 text-white"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v6m3-3H7"
                      />
                    </svg>
                  </div>
                </div>
              </div>
            )}
          </div>
          {image.caption && (
            <p className="text-sm text-zinc-500 mt-3 text-center">
              {image.caption}
            </p>
          )}
        </motion.div>
      ))}
    </div>
  );
}
