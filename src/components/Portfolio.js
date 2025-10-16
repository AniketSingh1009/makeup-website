import React, { useState, useEffect } from 'react';
import ScrollAnimationWrapper from './ScrollAnimationWrapper';

const Portfolio = ({ onClose }) => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);
  const [portfolioImages, setPortfolioImages] = useState([]);
  const [zoomLevel, setZoomLevel] = useState(1);
  const [imagePosition, setImagePosition] = useState({ x: 0, y: 0 });
  const [isDragging, setIsDragging] = useState(false);
  const [dragStart, setDragStart] = useState({ x: 0, y: 0 });
  const [showDragHint, setShowDragHint] = useState(false);

  // Generate image list from public/pictures folder
  // You can manually add image names here or use a dynamic approach
  const imageNames = [
    'b25.jpg',
    'b6.jpg',
    'IMG_20241024_003646_344.jpg',
    'afa1.jpg',
    'afa2.jpg',
    'afa3.jpg',
    'afa4.jpg',
    'af1.jpg',
    'af2.jpg',
    'af3.jpg',
    'af4.jpg',
    'af5.jpg',
    'af6.jpg',
    // 'af7.jpg',
    // 'af8.jpg',
    'b1.jpg',
    'b2.jpg',
    'b3.jpg',
    'b4.jpg',
    'b5.jpg',
    'b10.jpg',
    'b12.jpg',
    'b13.jpg',
    'b14.jpg',
    'b16.jpg',
    'b17.jpg',
    'b18.jpg',
    'b19.jpg',
    'b20.jpg',
    't1.jpeg',
    't2.jpeg',
    'b21.jpg',
    'b24.jpg',
    'IMG-20241023-WA0025.jpg',
    'IMG-20241023-WA0026.jpg',
    'IMG-20241023-WA0028.jpg',
    'IMG-20241023-WA0027.jpg',
    'b9.jpg',
    //  'IMG-20241023-WA0003.jpg',
    // Add more image names as they exist in your public/pictures folder
    // For example:
    // 'image1.jpg',
    // 'image2.jpg',
    // 'image3.jpg',
    // etc.
  ];

  useEffect(() => {
    // Create portfolio items from image names
    const images = imageNames.map((imageName, index) => ({
      id: index + 1,
      image: `/pictures/${imageName}`,
      title: `Portfolio Image ${index + 1}`,
      alt: `Makeup artistry work ${index + 1}`
    }));
    setPortfolioImages(images);
  }, []);

  // Prevent background scrolling when lightbox is open
  useEffect(() => {
    if (selectedImage) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    // Cleanup on unmount
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [selectedImage]);

  // Navigation functions
  const openLightbox = (image, index) => {
    setSelectedImage(image);
    setSelectedImageIndex(index);
  };

  const closeLightbox = () => {
    setSelectedImage(null);
    setSelectedImageIndex(0);
    setZoomLevel(1);
    setImagePosition({ x: 0, y: 0 });
  };

  const navigateToNext = () => {
    const nextIndex = (selectedImageIndex + 1) % portfolioImages.length;
    setSelectedImageIndex(nextIndex);
    setSelectedImage(portfolioImages[nextIndex]);
    setZoomLevel(1);
    setImagePosition({ x: 0, y: 0 });
  };

  const navigateToPrevious = () => {
    const prevIndex = selectedImageIndex === 0 ? portfolioImages.length - 1 : selectedImageIndex - 1;
    setSelectedImageIndex(prevIndex);
    setSelectedImage(portfolioImages[prevIndex]);
    setZoomLevel(1);
    setImagePosition({ x: 0, y: 0 });
  };

  // Zoom functions
  const zoomIn = () => {
    const newZoom = Math.min(zoomLevel + 0.5, 3);
    setZoomLevel(newZoom);

    // Show drag hint when first zooming in
    if (zoomLevel === 1 && newZoom > 1) {
      setShowDragHint(true);
      setTimeout(() => setShowDragHint(false), 3000);
    }
  };

  const zoomOut = () => {
    setZoomLevel(prev => {
      const newZoom = Math.max(prev - 0.5, 1);
      if (newZoom === 1) {
        setImagePosition({ x: 0, y: 0 });
        setShowDragHint(false);
      }
      return newZoom;
    });
  };

  const resetZoom = () => {
    setZoomLevel(1);
    setImagePosition({ x: 0, y: 0 });
    setShowDragHint(false);
  };

  // Mouse drag functions
  const handleMouseDown = (e) => {
    if (zoomLevel > 1) {
      setIsDragging(true);
      setDragStart({
        x: e.clientX - imagePosition.x,
        y: e.clientY - imagePosition.y
      });
    }
  };

  const handleMouseMove = (e) => {
    if (isDragging && zoomLevel > 1) {
      const newX = e.clientX - dragStart.x;
      const newY = e.clientY - dragStart.y;

      // Apply bounds to prevent panning too far
      const maxPan = 200 * zoomLevel;
      const boundedX = Math.max(-maxPan, Math.min(maxPan, newX));
      const boundedY = Math.max(-maxPan, Math.min(maxPan, newY));

      setImagePosition({
        x: boundedX,
        y: boundedY
      });
    }
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  // Wheel zoom
  const handleWheel = (e) => {
    e.preventDefault();
    if (e.deltaY < 0) {
      zoomIn();
    } else {
      zoomOut();
    }
  };

  // Keyboard navigation and zoom
  useEffect(() => {
    const handleKeyPress = (e) => {
      if (!selectedImage) return;

      // Pan movement when zoomed in
      if (zoomLevel > 1) {
        const panStep = 50; // pixels to move per keypress
        const maxPan = 200 * zoomLevel;

        if (e.key === 'ArrowRight') {
          e.preventDefault();
          setImagePosition(prev => ({
            ...prev,
            x: Math.max(-maxPan, prev.x - panStep)
          }));
          return;
        } else if (e.key === 'ArrowLeft') {
          e.preventDefault();
          setImagePosition(prev => ({
            ...prev,
            x: Math.min(maxPan, prev.x + panStep)
          }));
          return;
        } else if (e.key === 'ArrowUp') {
          e.preventDefault();
          setImagePosition(prev => ({
            ...prev,
            y: Math.min(maxPan, prev.y + panStep)
          }));
          return;
        } else if (e.key === 'ArrowDown') {
          e.preventDefault();
          setImagePosition(prev => ({
            ...prev,
            y: Math.max(-maxPan, prev.y - panStep)
          }));
          return;
        }
      }

      // Image navigation when not zoomed
      if (zoomLevel === 1) {
        if (e.key === 'ArrowRight') {
          navigateToNext();
        } else if (e.key === 'ArrowLeft') {
          navigateToPrevious();
        }
      }

      // Zoom and other controls (work regardless of zoom level)
      if (e.key === 'Escape') {
        closeLightbox();
      } else if (e.key === '+' || e.key === '=') {
        zoomIn();
      } else if (e.key === '-') {
        zoomOut();
      } else if (e.key === '0') {
        resetZoom();
      }
    };

    window.addEventListener('keydown', handleKeyPress);
    return () => window.removeEventListener('keydown', handleKeyPress);
  }, [selectedImage, selectedImageIndex, portfolioImages, zoomLevel, imagePosition]);

  // Touch/swipe handling
  const [touchStart, setTouchStart] = useState(null);
  const [touchEnd, setTouchEnd] = useState(null);
  const [touchStartPos, setTouchStartPos] = useState({ x: 0, y: 0 });
  const [isTouchDragging, setIsTouchDragging] = useState(false);

  const minSwipeDistance = 50;

  const onTouchStart = (e) => {
    const touch = e.targetTouches[0];
    setTouchEnd(null);
    setTouchStart(touch.clientX);
    setTouchStartPos({ x: touch.clientX, y: touch.clientY });

    if (zoomLevel > 1) {
      setIsTouchDragging(true);
      setDragStart({
        x: touch.clientX - imagePosition.x,
        y: touch.clientY - imagePosition.y
      });
    }
  };

  const onTouchMove = (e) => {
    const touch = e.targetTouches[0];
    setTouchEnd(touch.clientX);

    if (isTouchDragging && zoomLevel > 1) {
      e.preventDefault(); // Prevent scrolling
      const newX = touch.clientX - dragStart.x;
      const newY = touch.clientY - dragStart.y;

      // Apply bounds to prevent panning too far
      const maxPan = 200 * zoomLevel;
      const boundedX = Math.max(-maxPan, Math.min(maxPan, newX));
      const boundedY = Math.max(-maxPan, Math.min(maxPan, newY));

      setImagePosition({
        x: boundedX,
        y: boundedY
      });
    }
  };

  const onTouchEnd = () => {
    setIsTouchDragging(false);

    // Only handle swipe navigation if not zoomed and not dragging
    if (zoomLevel === 1 && touchStart && touchEnd) {
      const distance = touchStart - touchEnd;
      const isLeftSwipe = distance > minSwipeDistance;
      const isRightSwipe = distance < -minSwipeDistance;

      if (isLeftSwipe) {
        navigateToNext();
      } else if (isRightSwipe) {
        navigateToPrevious();
      }
    }
  };

  return (
    <section id="portfolio" className="section-padding bg-neutral-50 dark:bg-neutral-800">
      <div className="container-custom">
        {/* Header */}
        {/* Close Button */}
        <div className="fixed top-4 right-4 z-50">
          <button
            onClick={onClose}
            className="bg-white dark:bg-neutral-700 hover:bg-neutral-100 dark:hover:bg-neutral-600 text-neutral-800 dark:text-white p-3 rounded-full shadow-lg transition-all duration-300 transform hover:scale-110"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        {/* Back to Main Button */}
        <div className="text-center mb-8">
          <button
            onClick={onClose}
            className="inline-flex items-center text-primary-600 dark:text-primary-400 hover:text-primary-700 dark:hover:text-primary-300 font-medium transition-colors duration-300"
          >
            <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            Back to Main Page
          </button>
        </div>

        <ScrollAnimationWrapper animation="fade-in" delay={200}>
          <div className="text-center mb-16">
            <h2 className="font-display text-neutral-800 dark:text-white mb-6">
              My <span className="text-gradient">Portfolio</span>
            </h2>
            <p className="text-xl text-neutral-600 dark:text-neutral-300 max-w-3xl mx-auto font-light leading-relaxed">
              Explore my makeup artistry work. Each image showcases my passion for creating beautiful,
              transformative looks that enhance natural beauty and celebrate individual style.
            </p>
          </div>
        </ScrollAnimationWrapper>

        {/* Portfolio Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 lg:gap-8">
          {portfolioImages.map((item, index) => (
            <ScrollAnimationWrapper
              key={item.id}
              animation="scale-in"
              delay={400 + (index * 100)}
            >
              <div
                className="group cursor-pointer card-hover"
                onClick={() => openLightbox(item, index)}
              >
                <div className="relative overflow-hidden rounded-2xl shadow-lg bg-neutral-100">
                  <img
                    src={item.image}
                    alt={item.alt}
                    className="w-full h-64 sm:h-72 md:h-80 object-cover group-hover:scale-110 transition-transform duration-700"
                    onError={(e) => {
                      e.target.style.display = 'none';
                      e.target.nextSibling.style.display = 'flex';
                    }}
                  />
                  {/* Fallback for missing images */}
                  <div className="hidden w-full h-64 sm:h-72 md:h-80 bg-neutral-200 dark:bg-neutral-600 items-center justify-center">
                    <div className="text-center text-neutral-500 dark:text-neutral-400">
                      <svg className="w-12 h-12 mx-auto mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                      </svg>
                      <p className="text-sm">Image not found</p>
                    </div>
                  </div>

                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500">
                    <div className="absolute bottom-4 left-4 right-4 text-white transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                      <h3 className="text-sm font-semibold">{item.title}</h3>
                    </div>
                  </div>

                  <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-all duration-300">
                    <div className="bg-white/20 backdrop-blur-sm rounded-full p-2">
                      <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
            </ScrollAnimationWrapper>
          ))}
        </div>

        {/* Empty State */}
        {portfolioImages.length === 0 && (
          <div className="text-center py-20">
            <div className="text-6xl mb-6">📸</div>
            <h3 className="text-2xl font-display font-semibold text-neutral-800 dark:text-white mb-4">
              Portfolio Coming Soon
            </h3>
            <p className="text-neutral-600 dark:text-neutral-300 max-w-md mx-auto">
              I'm currently updating my portfolio with new work. Please check back soon to see my latest creations!
            </p>
          </div>
        )}

        {/* Enhanced Lightbox Modal with Navigation */}
        {selectedImage && (
          <div
            className="fixed inset-0 bg-black/95 z-50 flex items-center justify-center p-4 animate-fade-in lightbox-overlay"
            onClick={closeLightbox}
            onTouchStart={onTouchStart}
            onTouchMove={onTouchMove}
            onTouchEnd={onTouchEnd}
          >
            <div className="relative max-w-5xl max-h-full lightbox-container" onClick={(e) => e.stopPropagation()}>
              {/* Close Button */}
              <button
                onClick={closeLightbox}
                className="absolute -top-12 right-0 text-white hover:text-primary-400 transition-colors z-10"
              >
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>

              {/* Zoom Controls */}
              <div className="absolute -top-12 left-0 flex space-x-2 z-10">
                <button
                  onClick={zoomIn}
                  className="bg-black/50 hover:bg-black/70 text-white p-2 rounded-full transition-all duration-300 hover:scale-110 nav-button"
                  title="Zoom In (+)"
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                  </svg>
                </button>
                <button
                  onClick={zoomOut}
                  className="bg-black/50 hover:bg-black/70 text-white p-2 rounded-full transition-all duration-300 hover:scale-110 nav-button"
                  title="Zoom Out (-)"
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18 12H6" />
                  </svg>
                </button>
                <button
                  onClick={resetZoom}
                  className="bg-black/50 hover:bg-black/70 text-white p-2 rounded-full transition-all duration-300 hover:scale-110 nav-button"
                  title="Reset Zoom (0)"
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                  </svg>
                </button>
                <div className="bg-black/50 text-white px-3 py-2 rounded-full text-sm">
                  {Math.round(zoomLevel * 100)}%
                </div>
              </div>



              {/* Previous Button */}
              {portfolioImages.length > 1 && (
                <button
                  onClick={navigateToPrevious}
                  className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-3 rounded-full transition-all duration-300 hover:scale-110 z-10 nav-button"
                >
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                  </svg>
                </button>
              )}

              {/* Next Button */}
              {portfolioImages.length > 1 && (
                <button
                  onClick={navigateToNext}
                  className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-3 rounded-full transition-all duration-300 hover:scale-110 z-10 nav-button"
                >
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </button>
              )}

              {/* Main Image Container */}
              <div
                className="overflow-hidden rounded-lg"
                onWheel={handleWheel}
                onMouseMove={handleMouseMove}
                onMouseUp={handleMouseUp}
                onMouseLeave={handleMouseUp}
              >
                <img
                  src={selectedImage.image}
                  alt={selectedImage.alt}
                  className={`max-w-full max-h-[80vh] object-contain rounded-lg animate-scale-in lightbox-image transition-transform duration-200 ${zoomLevel > 1 ? 'cursor-grab' : 'cursor-default'
                    } ${isDragging ? 'cursor-grabbing' : ''}`}
                  style={{
                    transform: `scale(${zoomLevel}) translate(${imagePosition.x / zoomLevel}px, ${imagePosition.y / zoomLevel}px)`,
                    transformOrigin: 'center center'
                  }}
                  onMouseDown={handleMouseDown}
                  onTouchStart={onTouchStart}
                  onTouchMove={onTouchMove}
                  onTouchEnd={onTouchEnd}
                  draggable={false}
                />
              </div>

              {/* Drag Hint - Shows when first zooming */}
              {showDragHint && (
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-black/70 text-white px-4 py-2 rounded-lg animate-fade-in z-20">
                  <p className="text-sm font-medium">
                    📱 Drag to pan around • 🖱️ Click and drag
                  </p>
                </div>
              )}

              {/* Image Info */}
              <div className="text-center mt-6 animate-slide-up">
                <h3 className="text-2xl font-display text-white mb-2">{selectedImage.title}</h3>
                <p className="text-neutral-300">Professional makeup artistry work</p>
              </div>

              {/* Keyboard Instructions - Hidden on Mobile */}
              <div className="absolute -bottom-16 left-1/2 transform -translate-x-1/2 text-center hidden md:block">
                <p className="text-neutral-400 text-sm">
                  {zoomLevel > 1
                    ? "Arrow keys: Pan • + - Zoom • 0 Reset • ESC Close • Scroll to zoom • Drag to pan"
                    : "← → Navigate • + - Zoom • 0 Reset • ESC Close • Scroll to zoom • Drag to pan"
                  }
                </p>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default Portfolio;