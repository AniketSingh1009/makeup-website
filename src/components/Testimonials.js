import React, { useState, useEffect } from 'react';
import ScrollAnimationWrapper from './ScrollAnimationWrapper';

const Testimonials = ({ onViewPortfolio }) => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  const testimonials = [
    {
      name: 'Emily Johnson',
      role: 'Bride • Central Park Wedding',
      image: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80',
      text: 'Sarah made my wedding day absolutely magical! Her attention to detail was incredible. I felt like the most radiant version of myself.',
      rating: 5,
      featured: true
    },
    {
      name: 'Maria Rodriguez',
      role: 'Fashion Model • Vogue Editorial',
      image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80',
      text: 'Working with Sarah is always a dream. She understands lighting and creates looks that translate beautifully on camera.',
      rating: 5,
      featured: false
    },
    {
      name: 'Jessica Chen',
      role: 'Event Coordinator • Luxury Weddings',
      image: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80',
      text: 'I recommend Sarah to all my clients. She is incredibly professional and creates stunning looks that photograph beautifully.',
      rating: 5,
      featured: false
    },
    {
      name: 'Amanda Thompson',
      role: 'Portrait Photographer',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80',
      text: 'Sarah is my go-to makeup artist. Her work is flawless and she makes every client feel comfortable and confident.',
      rating: 5,
      featured: false
    },
    {
      name: 'Rachel Kim',
      role: 'Bride • Destination Wedding',
      image: 'https://images.unsplash.com/photo-1489424731084-a5d8b219a5bb?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80',
      text: 'Sarah traveled to our destination wedding and was worth every penny. She created the perfect romantic look for our ceremony.',
      rating: 5,
      featured: false
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 6000);
    return () => clearInterval(timer);
  }, [testimonials.length]);

  const renderStars = (rating) => {
    return [...Array(5)].map((_, i) => (
      <svg
        key={i}
        className={`w-5 h-5 ${i < rating ? 'text-gold-400' : 'text-neutral-300'}`}
        fill="currentColor"
        viewBox="0 0 20 20"
      >
        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
      </svg>
    ));
  };

  const handleBookTestimonial = () => {
    const message = "Hi! I saw the amazing testimonials from your clients and I'd love to book a session. Could we discuss my needs?";
    const whatsappUrl = `https://wa.me/+918709601720?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <section className="section-padding bg-gradient-to-br from-neutral-50 to-primary-50 dark:from-neutral-800 dark:to-primary-900/20">
      <div className="container-custom">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="font-display text-neutral-800 dark:text-white mb-6">
            Client <span className="text-gradient">Love Stories</span>
          </h2>
          <p className="text-xl text-neutral-600 dark:text-neutral-300 max-w-3xl mx-auto font-light leading-relaxed">
            Nothing makes me happier than seeing my clients feel absolutely radiant.
            Here's what they have to say about their experience.
          </p>
        </div>

        {/* Main Testimonial Carousel */}
        <div className="relative max-w-5xl mx-auto mb-16 animate-slide-up">
          <div className="bg-white dark:bg-neutral-700 rounded-3xl shadow-2xl overflow-hidden">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-0">
              {/* Image Section */}
              <div className="relative h-48 lg:h-auto">
                <img
                  src={testimonials[currentTestimonial].image}
                  alt={testimonials[currentTestimonial].name}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
                <div className="absolute bottom-6 left-6 right-6">
                  <div className="flex justify-center mb-2">
                    {renderStars(testimonials[currentTestimonial].rating)}
                  </div>
                </div>
              </div>

              {/* Content Section */}
              <div className="lg:col-span-2 p-6 lg:p-8 flex flex-col justify-center">
                <div className="mb-6">
                  <svg className="w-12 h-12 text-primary-200 mb-4" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h4v10h-10z" />
                  </svg>
                </div>

                <blockquote className="text-lg lg:text-xl text-neutral-700 dark:text-neutral-200 mb-6 leading-relaxed font-light">
                  {testimonials[currentTestimonial].text}
                </blockquote>

                <div className="flex items-center">
                  <div>
                    <div className="font-display font-semibold text-neutral-800 dark:text-white text-lg mb-1">
                      {testimonials[currentTestimonial].name}
                    </div>
                    <div className="text-primary-600 font-medium text-sm">
                      {testimonials[currentTestimonial].role}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Navigation */}
          <div className="flex justify-center mt-8 space-x-3">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentTestimonial(index)}
                className={`w-4 h-4 rounded-full transition-all duration-300 ${index === currentTestimonial
                  ? 'bg-primary-500 scale-125'
                  : 'bg-neutral-300 hover:bg-primary-300'
                  }`}
              />
            ))}
          </div>
        </div>

        {/* Stats Section */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {[
            { number: '100+', label: 'Happy Clients', icon: '😊' },
            { number: '30+', label: 'Weddings', icon: '💍' },
            { number: '5.0★', label: 'Average Rating', icon: '⭐' },
            { number: '4+', label: 'Years Experience', icon: '🎨' }
          ].map((stat, index) => (
            <div
              key={index}
              className="text-center p-6 bg-white dark:bg-neutral-700 rounded-2xl shadow-lg animate-scale-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="text-3xl mb-2">{stat.icon}</div>
              <div className="text-3xl lg:text-4xl font-display font-bold text-primary-600 mb-2">
                {stat.number}
              </div>
              <div className="text-neutral-600 dark:text-neutral-300 font-medium text-sm">
                {stat.label}
              </div>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="text-center animate-slide-up">
          <div className="bg-white dark:bg-neutral-700 rounded-3xl shadow-xl p-12 max-w-3xl mx-auto">
            <div className="text-4xl mb-6">✨</div>
            <h3 className="text-3xl font-display font-semibold text-neutral-800 dark:text-white mb-4">
              Ready to Create Your Own Success Story?
            </h3>
            <p className="text-lg text-neutral-600 dark:text-neutral-300 mb-8 leading-relaxed">
              Join hundreds of satisfied clients who trusted me with their most important moments.
              Let's create something beautiful together.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                onClick={handleBookTestimonial}
                className="btn-primary"
              >
                Book Your Session
              </button>
              <button onClick={onViewPortfolio} className="btn-secondary">
              View My Portfolio
            </button>
          </div>
        </div>
      </div>
    </div>
    </section >
  );
};

export default Testimonials;