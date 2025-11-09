
import { useState, useEffect } from 'react';
import FloatingParticles from './FloatingParticles';
const Hero = ({ onViewPortfolio }) => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      image: "/pictures/af1.jpg?auto=format&fit=crop&w=2000&q=100",
      title: "Artistry That",
      subtitle: "Transforms",
      description: "Creating timeless beauty for life's most precious moments"
    },
    {
      image: "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80",
      title: "Bridal Beauty",
      subtitle: "Perfected",
      description: "Your dream wedding look, crafted with precision and care"
    },
    {
      image: "https://images.unsplash.com/photo-1487412947147-5cebf100ffc2?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80",
      title: "Editorial",
      subtitle: "Excellence",
      description: "High-fashion makeup for photoshoots and special events"
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [slides.length]);

  const handleBookNow = () => {
    const message = "Hi! I would like to book a makeup session. 🖌️";
    const whatsappUrl = `https://wa.me/+918709601720?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };



  return (
    <section id="home" className="relative h-screen overflow-hidden">
      {/* Floating Particles */}
      <FloatingParticles count={60} color="rgba(225, 132, 79, 0.4)" />
      
      {/* Background Slider */}
      <div className="absolute inset-0">
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ${index === currentSlide ? 'opacity-100' : 'opacity-0'
              }`}
          >
            <div className="absolute inset-0 overlay-gradient z-10"></div>
            <img
              src={slide.image}
              alt={`Makeup artistry ${index + 1}`}
              className="w-full h-full object-cover"
            />
          </div>
        ))}
      </div>

      {/* Content */}
      <div className="relative z-20 h-full flex items-center justify-center">
        <div className="text-center text-white max-w-5xl mx-auto px-4 animate-fade-in">
          <div className="mb-6">
            <h1 className="font-display font-bold leading-tight mb-4">
              <span className="block animate-slide-up">
                {slides[currentSlide].title}
              </span>
              <span className="block text-gradient animate-slide-up" style={{ animationDelay: '0.2s' }}>
                {slides[currentSlide].subtitle}
              </span>
            </h1>
          </div>

          <p className="text-xl md:text-2xl mb-12 text-neutral-100 max-w-3xl mx-auto font-light animate-slide-up" style={{ animationDelay: '0.4s' }}>
            {slides[currentSlide].description}
          </p>

          <div className="flex flex-col sm:flex-row gap-6 justify-center animate-slide-up" style={{ animationDelay: '0.6s' }}>
            <button onClick={onViewPortfolio} className="btn-primary text-lg">
              View Portfolio
            </button>
            <button
              onClick={handleBookNow}
              className="btn-outline text-lg"
            >
              Book Now
            </button>
          </div>
        </div>
      </div>

      {/* Slide Indicators */}
      <div className="absolute bottom-20 left-1/2 transform -translate-x-1/2 z-20">
        <div className="flex space-x-3">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${index === currentSlide
                ? 'bg-white scale-125'
                : 'bg-white/50 hover:bg-white/75'
                }`}
            />
          ))}
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce-slow z-20">
        <div className="flex flex-col items-center text-white/80 bg-white/10 backdrop-blur-sm rounded-full px-4 py-3 border border-white/20">
          <span className="text-sm font-light mb-1">Scroll</span>
          <svg className="w-4 h-4 animate-bounce" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </div>
      </div>

      {/* Floating makeup icons */}
      <div className="absolute top-1/4 left-10 animate-float z-10 opacity-20">
        <div className="text-4xl">💄</div>
      </div>
      <div className="absolute top-1/3 right-16 animate-float z-10 opacity-20" style={{animationDelay: '1s'}}>
        <div className="text-3xl">🖌️</div>
      </div>
      <div className="absolute bottom-1/4 left-20 animate-float z-10 opacity-20" style={{animationDelay: '2s'}}>
        <div className="text-3xl">✨</div>
      </div>
    </section>
  );
};

export default Hero;