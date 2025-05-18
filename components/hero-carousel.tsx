"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";
import type { Post } from "@/lib/types";

interface HeroCarouselProps {
  posts: Post[];
}

export function HeroCarousel({ posts }: HeroCarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % posts.length);
  };

  const prevSlide = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + posts.length) % posts.length
    );
  };

  // Auto-advance slides
  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  if (!posts.length) return null;

  return (
    <div className="relative overflow-hidden rounded-xl">
      <div className="relative h-[250px] sm:h-[350px] md:h-[450px] lg:h-[500px] w-full">
        {posts.map((post, index) => (
          <div
            key={post.id}
            className={cn(
              "absolute inset-0 transition-opacity duration-500",
              index === currentIndex
                ? "opacity-100"
                : "opacity-0 pointer-events-none"
            )}
          >
            <Image
              src={post.coverImage || "/placeholder.svg"}
              alt={post.title}
              fill
              className="object-cover"
              priority={index === 0}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />

            <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8">
              <Badge className="mb-3 bg-pink-600 hover:bg-pink-700">
                {post.category}
              </Badge>
              <h2 className="font-bebas-neue text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-2 sm:mb-3 text-white">
                <Link
                  href={`/posts/${post.slug}`}
                  className="hover:text-pink-400 transition-colors"
                >
                  {post.title}
                </Link>
              </h2>
              <p className="text-white/80 mb-3 sm:mb-4 max-w-2xl text-sm sm:text-base line-clamp-2 md:line-clamp-3">
                {post.excerpt}
              </p>
              <Button asChild>
                <Link href={`/posts/${post.slug}`}>Read More</Link>
              </Button>
            </div>
          </div>
        ))}
      </div>

      <Button
        variant="outline"
        size="icon"
        className="absolute left-4 top-1/2 -translate-y-1/2 bg-background/80 backdrop-blur-sm hover:bg-background"
        onClick={prevSlide}
      >
        <ChevronLeft className="h-6 w-6" />
        <span className="sr-only">Previous slide</span>
      </Button>

      <Button
        variant="outline"
        size="icon"
        className="absolute right-4 top-1/2 -translate-y-1/2 bg-background/80 backdrop-blur-sm hover:bg-background"
        onClick={nextSlide}
      >
        <ChevronRight className="h-6 w-6" />
        <span className="sr-only">Next slide</span>
      </Button>

      <div className="absolute bottom-2 left-1/2 -translate-x-1/2 flex gap-2">
        {posts.map((_, index) => (
          <button
            key={index}
            className={cn(
              "w-2 h-2 rounded-full transition-all",
              index === currentIndex
                ? "bg-white w-6"
                : "bg-white/50 hover:bg-white/80"
            )}
            onClick={() => setCurrentIndex(index)}
          >
            <span className="sr-only">Go to slide {index + 1}</span>
          </button>
        ))}
      </div>
    </div>
  );
}
