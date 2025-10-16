import React from 'react';
import ScrollAnimationWrapper from './ScrollAnimationWrapper';

const About = ({ onViewPortfolio }) => {
  const handleBookConsultation = () => {
    const message = "Hi! I'd like to book a consultation to discuss my makeup needs.";
    const whatsappUrl = `https://wa.me/+918709601720?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <section id="about" className="section-padding bg-white dark:bg-neutral-900">
      <div className="container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-20 items-center">
          {/* Image */}
          <ScrollAnimationWrapper animation="slide-right" delay={200}>
            <div className="relative">
            {/* Main Image Container with Beautiful Border */}
            <div className="relative p-4 bg-gradient-to-br from-primary-100 via-white to-gold-100 dark:from-primary-900/20 dark:via-neutral-800 dark:to-gold-900/20 rounded-3xl shadow-2xl">
              <div className="relative overflow-hidden rounded-2xl">
                <img
                  src="/pictures/dp1.jpg"
                  alt="Professional Makeup Artist Portrait"
                  className="w-full h-[450px] lg:h-[550px] object-cover object-center scale-110 border-4 border-white dark:border-neutral-700 rounded-2xl shadow-lg"
                />
                {/* Elegant overlay gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/10 via-transparent to-transparent rounded-2xl"></div>
              </div>

              {/* Decorative corner elements */}
              <div className="absolute -top-2 -left-2 w-16 h-16 bg-gradient-to-br from-primary-200 to-primary-300 dark:from-primary-700 dark:to-primary-800 rounded-full opacity-80"></div>
              <div className="absolute -bottom-2 -right-2 w-20 h-20 bg-gradient-to-br from-gold-200 to-gold-300 dark:from-gold-700 dark:to-gold-800 rounded-full opacity-60"></div>
            </div>

            {/* Experience Badge */}
            <div className="absolute -bottom-6 left-6 bg-white dark:bg-neutral-700 p-5 rounded-2xl shadow-xl border-2 border-primary-100 dark:border-primary-800">
              <div className="text-center">
                <div className="text-2xl font-display font-bold text-primary-600 dark:text-primary-400 mb-1">4+</div>
                <div className="text-xs font-medium text-neutral-600 dark:text-neutral-300">Years Experience</div>
              </div>
            </div>

            {/* Awards Badge */}
            <div className="absolute top-6 -right-3 bg-gradient-to-r from-gold-400 to-gold-500 dark:from-gold-500 dark:to-gold-600 text-white p-4 rounded-2xl shadow-lg border-2 border-white dark:border-neutral-700">
              <div className="text-center">
                <div className="text-lg font-bold mb-1">100+</div>
                <div className="text-xs">Happy Clients</div>
              </div>
            </div>

            {/* Floating makeup brush icon */}
            <div className="absolute top-1/2 -left-4 transform -translate-y-1/2 bg-white dark:bg-neutral-700 p-3 rounded-full shadow-lg border-2 border-primary-200 dark:border-primary-700">
              <div className="text-2xl">🖌️</div>
            </div>
            </div>
          </ScrollAnimationWrapper>

          {/* Content */}
          <ScrollAnimationWrapper animation="slide-left" delay={400}>
            <div>
              <div className="mb-8">
              <h2 className="font-display text-neutral-800 dark:text-white mb-6">
                Meet Your <span className="text-gradient">Artist</span>
              </h2>
              <div className="w-20 h-1 bg-gradient-to-r from-primary-400 to-gold-400 rounded-full mb-8"></div>
            </div>

            <div className="space-y-6 text-lg text-neutral-600 dark:text-neutral-300 leading-relaxed mb-10">
              <p>
                Hello beautiful! I'm <span className="font-semibold text-neutral-800 dark:text-white"> Preety </span>,
                a passionate makeup artist with over 4+ years of experience creating stunning looks
                that celebrate your unique beauty. My journey began with a simple belief:
                every person deserves to feel absolutely radiant.
              </p>
              <p>
                Specializing in bridal, editorial, and special event makeup, I've had the privilege
                of working with diverse clients, from intimate wedding ceremonies to high-fashion
                photoshoots. My approach combines technical expertise with an artistic eye,
                ensuring each look is perfectly tailored to you.
              </p>
              <p>
                I believe makeup is more than just cosmetics—it's about confidence, self-expression,
                and celebrating the beauty that already exists within you.
              </p>
            </div>

            {/* Specialties */}
            <div className="mb-10">
              <h3 className="text-xl font-display font-semibold text-neutral-800 dark:text-white mb-6">My Specialties</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {[
                  { icon: '💍', skill: 'Bridal Makeup' },
                  { icon: '📸', skill: 'Editorial Looks' },
                  { icon: '✨', skill: 'Airbrush Makeup' },
                  { icon: '✨', skill: 'Event Makeup' },
                  { icon: '🎨', skill: 'Color Theory' },
                  { icon: '👑', skill: 'Luxury Beauty' }
                ].map((item, index) => (
                  <div key={index} className="flex items-center p-3 bg-neutral-50 dark:bg-neutral-800 rounded-xl hover:bg-primary-50 dark:hover:bg-primary-900/20 transition-colors duration-300">
                    <span className="text-2xl mr-4">{item.icon}</span>
                    <span className="font-medium text-neutral-700 dark:text-neutral-300">{item.skill}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Certifications */}
            <div className="mb-10">
              <h3 className="text-xl font-display font-semibold text-neutral-800 dark:text-white mb-4">Certifications & Training</h3>
              <div className="space-y-2 text-neutral-600 dark:text-neutral-300">
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-primary-400 rounded-full mr-3"></div>
                  <span>Certified Professional Makeup Artist - Beauty Institute</span>
                </div>
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-primary-400 rounded-full mr-3"></div>
                  <span>Advanced Bridal Makeup Specialist</span>
                </div>
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-primary-400 rounded-full mr-3"></div>
                  <span>Editorial & Fashion Makeup Certification</span>
                </div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <button onClick={onViewPortfolio} className="btn-primary">
                View My Portfolio
              </button>
              <button
                onClick={handleBookConsultation}
                className="btn-secondary"
              >
                Book Consultation
              </button>
            </div>
            </div>
          </ScrollAnimationWrapper>
        </div>
      </div>
    </section>
  );
};

export default About;