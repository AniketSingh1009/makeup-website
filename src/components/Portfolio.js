import React, { useState, useEffect } from 'react';

const Portfolio = ({ onClose }) => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [portfolioImages, setPortfolioImages] = useState([]);

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

        <div className="text-center mb-16 animate-fade-in">
          <h2 className="font-display text-neutral-800 dark:text-white mb-6">
            My <span className="text-gradient">Portfolio</span>
          </h2>
          <p className="text-xl text-neutral-600 dark:text-neutral-300 max-w-3xl mx-auto font-light leading-relaxed">
            Explore my makeup artistry work. Each image showcases my passion for creating beautiful,
            transformative looks that enhance natural beauty and celebrate individual style.
          </p>
        </div>

        {/* Portfolio Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 lg:gap-8">
          {portfolioImages.map((item, index) => (
            <div
              key={item.id}
              className="group cursor-pointer animate-scale-in card-hover"
              style={{ animationDelay: `${index * 0.1}s` }}
              onClick={() => setSelectedImage(item)}
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

        {/* Lightbox Modal */}
        {selectedImage && (
          <div
            className="fixed inset-0 bg-black/95 z-50 flex items-center justify-center p-4 animate-fade-in"
            onClick={() => setSelectedImage(null)}
          >
            <div className="relative max-w-5xl max-h-full" onClick={(e) => e.stopPropagation()}>
              <button
                onClick={() => setSelectedImage(null)}
                className="absolute -top-12 right-0 text-white hover:text-primary-400 transition-colors z-10"
              >
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
              <img
                src={selectedImage.image}
                alt={selectedImage.alt}
                className="max-w-full max-h-[80vh] object-contain rounded-lg animate-scale-in"
              />
              <div className="text-center mt-6 animate-slide-up">
                <h3 className="text-2xl font-display text-white mb-2">{selectedImage.title}</h3>
                <p className="text-neutral-300">Professional makeup artistry work</p>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default Portfolio;