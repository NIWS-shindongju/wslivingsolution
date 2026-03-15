import React, { useState } from 'react';

interface SafeImageProps {
  src: string;
  alt: string;
  className?: string;
  fallbackText?: string;
  loading?: 'lazy' | 'eager';
}

export default function SafeImage({
  src,
  alt,
  className = '',
  fallbackText = '이미지 준비 중',
  loading = 'lazy'
}: SafeImageProps) {
  const [hasError, setHasError] = useState(false);

  if (hasError || !src) {
    return (
      <div className={`flex items-center justify-center bg-gradient-to-br from-stone-200 via-stone-300 to-stone-400 text-stone-600 text-sm font-medium ${className}`}>
        {fallbackText}
      </div>
    );
  }

  return (
    <img
      src={src}
      alt={alt}
      loading={loading}
      className={`object-cover ${className}`}
      onError={() => setHasError(true)}
    />
  );
}
