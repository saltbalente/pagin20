import { useState, useRef, useEffect } from 'react';

export interface OptimizedImageProps {
  src: string;
  alt: string;
  className?: string;
  width?: number;
  height?: number;
  placeholder?: string;
  priority?: boolean;
}

export default function OptimizedImage({ 
  src, 
  alt, 
  className = '', 
  width, 
  height, 
  placeholder = 'bg-mystic-dark/50 animate-pulse',
  priority = false
}: OptimizedImageProps) {
  const [isLoaded, setIsLoaded] = useState(false);
  const [hasError, setHasError] = useState(false);
  const [shouldLoad, setShouldLoad] = useState(priority);
  const imgRef = useRef<HTMLImageElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (priority) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const [entry] = entries;
        if (entry.isIntersecting) {
          setShouldLoad(true);
          observer.disconnect();
        }
      },
      {
        rootMargin: '50px'
      }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => observer.disconnect();
  }, [priority]);

  const handleLoad = () => {
    setIsLoaded(true);
  };

  const handleError = () => {
    setHasError(true);
    setIsLoaded(true);
  };

  // Optimizar URL solo para URLs externas que contengan parámetros
  const optimizedSrc = src.includes('image_size=') 
    ? src 
    : src.startsWith('http') && src.includes('?')
    ? `${src}&image_size=square`
    : src;

  return (
    <div 
      ref={containerRef}
      className={`relative overflow-hidden image-container ${className}`} 
      style={{ width: width || '100%', height: height || 'auto', maxWidth: '100%' }}
    >
      {!isLoaded && (
        <div 
          className={`absolute inset-0 ${placeholder} flex items-center justify-center`}
          style={{ width: width || '100%', height: height || 'auto' }}
        >
          <div className="text-mystic-gold/50 text-sm">Cargando...</div>
        </div>
      )}
      
      {hasError ? (
        <div 
          className="absolute inset-0 bg-mystic-dark/50 flex items-center justify-center border border-mystic-gold/20 rounded"
          style={{ width: width || '100%', height: height || 'auto' }}
        >
          <div className="text-mystic-gold/50 text-sm text-center">
            <div className="text-2xl mb-2">🖼️</div>
            <div>Imagen no disponible</div>
          </div>
        </div>
      ) : shouldLoad ? (
        <img
          ref={imgRef}
          src={optimizedSrc}
          alt={alt}
          className={`transition-opacity duration-500 ${isLoaded ? 'opacity-100' : 'opacity-0'}`}
          onLoad={handleLoad}
          onError={handleError}
          loading={priority ? 'eager' : 'lazy'}
          width={width}
          height={height}
          style={{
            objectFit: 'cover',
            width: width || '100%',
            height: height || '100%',
            maxWidth: '100%',
            display: 'block'
          }}
        />
      ) : null}
    </div>
  );
}