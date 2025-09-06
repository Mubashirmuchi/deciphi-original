"use client";
import React, { useState, useEffect, useRef, useCallback, memo, useMemo } from "react";
import Image from 'next/image';

interface StrapiMediaFormat {
  name: string;
  hash: string;
  ext: string;
  mime: string;
  width: number;
  height: number;
  size: number;
  url: string;
}

interface MediaItem {
  type: "video" | "image";
  src: string;
  duration?: number;
  poster?: string;
  formats?: Record<string, StrapiMediaFormat>;
}

interface MediaSlideshowProps {
  mediaItems: MediaItem[];
  overlay?: boolean;
  overlayColor?: "overlayBlack" | "overlayWhite";
  loopLastItem?: boolean;
}

const TRANSITION_DURATION = 300;

const MediaSlideshowComponent: React.FC<MediaSlideshowProps> = ({
  mediaItems,
  overlay = false,
  overlayColor = "overlayBlack",
  loopLastItem = false,
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [touchStartX, setTouchStartX] = useState<number | null>(null);
  const [touchEndX, setTouchEndX] = useState<number | null>(null);
  const [isUserInteracting, setIsUserInteracting] = useState(false);
  
  const timerRef = useRef<number | null>(null);
  const transitionTimeoutRef = useRef<number | null>(null);
  const mountedRef = useRef(true);

  const currentItem = mediaItems[currentIndex];

  const deviceInfo = useMemo(() => {
    if (typeof window === 'undefined') return { isIOS: false, isSlowNetwork: false, isMobile: false };
    
    const isIOS = /iPad|iPhone|iPod/.test(navigator.userAgent);
    const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
    const isSlowNetwork = 'connection' in navigator && 
      (navigator.connection as { effectiveType?: string })?.effectiveType === 'slow-2g';
    
    return { isIOS, isSlowNetwork, isMobile };
  }, []);

  const nextSlide = useCallback(() => {
    const nextIndex = (currentIndex + 1) % mediaItems.length;
    if (nextIndex === 0 && !loopLastItem) {
      return;
    }
    setCurrentIndex(nextIndex);
  }, [currentIndex, mediaItems.length, loopLastItem]);

  const previousSlide = useCallback(() => {
    const prevIndex = currentIndex === 0 ? mediaItems.length - 1 : currentIndex - 1;
    setCurrentIndex(prevIndex);
  }, [currentIndex, mediaItems.length]);

  const handleTouchStart = useCallback((e: React.TouchEvent) => {
    setTouchStartX(e.targetTouches[0].clientX);
    setTouchEndX(null);
    setIsUserInteracting(true);
  }, []);

  const handleTouchMove = useCallback((e: React.TouchEvent) => {
    setTouchEndX(e.targetTouches[0].clientX);
  }, []);

  const handleTouchEnd = useCallback(() => {
    if (!touchStartX || !touchEndX) {
      setIsUserInteracting(false);
      return;
    }
    
    const distance = touchStartX - touchEndX;
    const minSwipeDistance = 50;
    
    if (Math.abs(distance) > minSwipeDistance) {
      if (distance > 0) {
        nextSlide();
      } else {
        previousSlide();
      }
    }
    
    setIsUserInteracting(false);
  }, [touchStartX, touchEndX, nextSlide, previousSlide]);

  const clearTimer = useCallback(() => {
    if (timerRef.current) {
      window.clearTimeout(timerRef.current);
      timerRef.current = null;
    }
    
    if (transitionTimeoutRef.current) {
      window.clearTimeout(transitionTimeoutRef.current);
      transitionTimeoutRef.current = null;
    }
  }, []);

  const startTimer = useCallback(() => {
    if (!mountedRef.current || isUserInteracting || !currentItem) return;

    clearTimer();

    if (currentItem.type === "image" && currentItem.duration) {
      timerRef.current = window.setTimeout(() => {
        if (!mountedRef.current || isUserInteracting) return;

        const nextIndex = (currentIndex + 1) % mediaItems.length;
        if (nextIndex === 0 && !loopLastItem) {
          return;
        }

        setIsTransitioning(true);
        transitionTimeoutRef.current = window.setTimeout(() => {
          if (!mountedRef.current) return;
          setCurrentIndex(nextIndex);
          setIsTransitioning(false);
        }, TRANSITION_DURATION);
      }, currentItem.duration);
    }
  }, [currentIndex, currentItem, mediaItems.length, loopLastItem, clearTimer, isUserInteracting]);

  useEffect(() => {
    mountedRef.current = true;
    return () => {
      mountedRef.current = false;
    };
  }, []);

  useEffect(() => {
    startTimer();
    return clearTimer;
  }, [startTimer, clearTimer]);

  const getImageUrl = useCallback((item: MediaItem) => {
    if (item.formats) {
      const formatKeys = Object.keys(item.formats);
      
      if (deviceInfo.isSlowNetwork || deviceInfo.isMobile) {
        // Prefer smaller formats for mobile/slow networks
        const preferredOrder = ['small', 'thumbnail', 'medium', 'large'];
        for (const formatKey of preferredOrder) {
          if (item.formats[formatKey]?.url) {
            return item.formats[formatKey].url;
          }
        }
        // If no preferred formats found, use any available format
        if (formatKeys.length > 0) {
          return item.formats[formatKeys[0]].url;
        }
      } else {
        // Prefer larger formats for desktop/fast networks
        const preferredOrder = ['large', 'medium', 'small', 'thumbnail'];
        for (const formatKey of preferredOrder) {
          if (item.formats[formatKey]?.url) {
            return item.formats[formatKey].url;
          }
        }
        // If no preferred formats found, use any available format
        if (formatKeys.length > 0) {
          return item.formats[formatKeys[0]].url;
        }
      }
    }
    return item.src;
  }, [deviceInfo.isSlowNetwork, deviceInfo.isMobile]);

  const renderMediaItem = useCallback((item: MediaItem, index: number) => {
    if (item.type === "video") {
      // Get poster from item.poster or fallback to formats
      let posterUrl = item.poster;
      if (!posterUrl && item.formats) {
        const formatKeys = Object.keys(item.formats);
        // Try to find a thumbnail or small format for poster
        const thumbnailFormat = item.formats['thumbnail'] || item.formats['small'];
        if (thumbnailFormat?.url) {
          posterUrl = thumbnailFormat.url;
        } else if (formatKeys.length > 0) {
          posterUrl = item.formats[formatKeys[0]].url;
        }
      }

      return (
        <video
          key={index}
          className="absolute inset-0 w-full h-full object-cover"
          autoPlay
          loop
          muted
          controls={false}
          playsInline={true}
          preload="auto"
          poster={posterUrl}
        >
          <source
            src={item.src}
            type="video/mp4"
          />
          Your browser does not support the video tag.
        </video>
      );
    } else {
      const imageUrl = getImageUrl(item);
      return (
        <div key={index} className="absolute inset-0 w-full h-full">
          <Image
            src={imageUrl}
            alt={`Slide ${index + 1}`}
            className="w-full h-full object-cover"
            fill
            sizes="100vw"
            priority={index === 0}
            quality={deviceInfo.isSlowNetwork ? 75 : 85}
          />
        </div>
      );
    }
  }, [getImageUrl, deviceInfo.isSlowNetwork]);

  return (
    <div 
      className="relative w-full h-full overflow-hidden"
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
    >
      <div
        className={`absolute inset-0 transition-opacity duration-${TRANSITION_DURATION} ${
          isTransitioning ? "opacity-0" : "opacity-100"
        }`}
      >
        {renderMediaItem(currentItem, currentIndex)}
      </div>
     
      {overlay && (
        <div
          className={`absolute inset-0 pointer-events-none ${
            overlayColor === "overlayBlack"
              ? "bg-black/50"
              : "bg-white/50"
          }`}
        />
      )}
    </div>
  );
};

export const MediaSlideshow = memo(MediaSlideshowComponent);
export type { MediaItem, StrapiMediaFormat };