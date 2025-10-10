import React from 'react';

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
          <div className="relative animate-fade-in">
            <div className="relative">
              <img
                src="/pictures/dp1.jpg"
                alt="Professional Makeup Artist Portrait"
                className="rounded-3xl shadow-2xl w-full h-[500px] lg:h-[600px] object-cover"
              />
              {/* Decorative elements */}
              <div className="absolute -top-6 -left-6 w-24 h-24 bg-primary-100 rounded-full opacity-60"></div>
              <div className="absolute -bottom-8 -right-8 w-32 h-32 bg-gold-100 rounded-full opacity-40"></div>
            </div>

            {/* Experience Badge */}
            <div className="absolute -bottom-8 left-8 bg-white p-6 rounded-2xl shadow-xl border border-neutral-100">
              <div className="text-center">
                <div className="text-3xl font-display font-bold text-primary-600 mb-1">4+</div>
                <div className="text-sm font-medium text-neutral-600">Years Experience</div>
              </div>
            </div>

            {/* Awards Badge */}
            <div className="absolute top-8 -right-4 bg-gradient-to-r from-gold-400 to-gold-500 text-white p-4 rounded-2xl shadow-lg">
              <div className="text-center">
                <div className="text-xl font-bold mb-1">50+</div>
                <div className="text-xs">Happy Brides</div>
              </div>
            </div>
          </div>

          {/* Content */}
          <div className="animate-slide-up">
            <div className="mb-8">
              <h2 className="font-display text-neutral-800 dark:text-white mb-6">
                Meet Your <span className="text-gradient">Artist</span>
              </h2>
              <div className="w-20 h-1 bg-gradient-to-r from-primary-400 to-gold-400 rounded-full mb-8"></div>
            </div>

            <div className="space-y-6 text-lg text-neutral-600 dark:text-neutral-300 leading-relaxed mb-10">
              <p>
                Hello beautiful! I'm <span className="font-semibold text-neutral-800"> Preety </span>,
                a passionate makeup artist with over 5 years of experience creating stunning looks
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
              <h3 className="text-xl font-display font-semibold text-neutral-800 mb-6">My Specialties</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {[
                  { icon: '💍', skill: 'Bridal Makeup' },
                  { icon: '📸', skill: 'Editorial Looks' },
                  { icon: '🎭', skill: 'Airbrush Makeup' },
                  { icon: '✨', skill: 'Event Makeup' },
                  { icon: '🎨', skill: 'Color Theory' },
                  { icon: '👑', skill: 'Luxury Beauty' }
                ].map((item, index) => (
                  <div key={index} className="flex items-center p-3 bg-neutral-50 rounded-xl hover:bg-primary-50 transition-colors duration-300">
                    <span className="text-2xl mr-4">{item.icon}</span>
                    <span className="font-medium text-neutral-700">{item.skill}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Certifications */}
            <div className="mb-10">
              <h3 className="text-xl font-display font-semibold text-neutral-800 mb-4">Certifications & Training</h3>
              <div className="space-y-2 text-neutral-600">
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
        </div>
      </div>
    </section>
  );
};

export default About;