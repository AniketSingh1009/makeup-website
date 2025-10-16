import React from 'react';
import ScrollAnimationWrapper from './ScrollAnimationWrapper';

const Services = ({ onViewPortfolio }) => {
  const services = [
    {
      icon: '💍',
      title: 'Bridal Makeup',
      description: 'Your perfect wedding day look, from intimate ceremonies to grand celebrations. Includes trial session and day-of services.',
      features: ['Perfection Gurantee', 'Wedding Day Application', 'Touch-up Kit Included', 'Bridal Party Packages', 'Travel Available'],
      price: 'From 15000 onwards',
      duration: '3-4 hours',
      popular: true
    },
    {
      icon: '📸',
      title: 'Editorial & Fashion',
      description: 'High-fashion makeup for photoshoots, fashion shows, and creative projects. Collaboration with photographers and stylists.',
      features: ['Creative Concept Development', 'Photo-Ready Application', 'Multiple Look Changes', 'Portfolio Collaboration', 'Set Touch-ups'],
      price: 'From 15000 onwards',
      duration: '2-3 hours',
      popular: false
    },
    {
      icon: '✨',
      title: 'Airbrush Makeup',
      description: 'Flawless, long-lasting airbrush makeup for a perfect finish. Ideal for weddings, photoshoots, and special events.',
      features: ['HD Finish', 'Long-lasting Coverage', 'Sweat & Water Resistant', 'Photo-Ready Results', 'Natural Look'],
      price: 'From 15000 onwards',
      duration: '2-4 hours',
      popular: false
    },
    {
      icon: '✨',
      title: 'Special Events',
      description: 'Look stunning for any occasion - galas, parties, photoshoots, or date nights. Professional makeup that lasts all day.',
      features: ['Occasion-Specific Styling', 'Long-Lasting Formula', 'Quick Application', 'Group Bookings Available', 'Makeup Lessons'],
      price: 'From 10000 onwards',
      duration: '1-2 hours',
      popular: false
    },
    // {
    //   icon: '🎓',
    //   title: 'Makeup Lessons',
    //   description: 'Learn professional techniques in personalized one-on-one sessions. Perfect your everyday look or master special occasion makeup.',
    //   features: ['Personalized Instruction', 'Product Recommendations', 'Technique Practice', 'Take-Home Guide', 'Follow-up Support'],
    //   price: 'From $150',
    //   duration: '2 hours',
    //   popular: false
    // },
    {
      icon: '👥',
      title: 'Group Services',
      description: 'Perfect for bridal parties, corporate events, or special celebrations. Professional makeup for multiple people.',
      features: ['Group Discounts', 'Coordinated Looks', 'Flexible Scheduling', 'On-Location Service', 'Team of Artists Available'],
      price: 'From 5000 onwards',
      duration: '1 hour/person',
      popular: false
    }
  ];

  const handleBookService = (serviceName) => {
    const message = `Hi! I'm interested in booking ${serviceName}. Could you please share more details about availability and pricing? 🖌️`;
    const whatsappUrl = `https://wa.me/+918709601720?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <section id="services" className="section-padding bg-neutral-50 dark:bg-neutral-800">
      <div className="container-custom">
        {/* Header */}
        <ScrollAnimationWrapper animation="fade-in" delay={200}>
          <div className="text-center mb-16">
          <h2 className="font-display text-neutral-800 dark:text-white mb-6">
            My <span className="text-gradient">Services</span>
          </h2>
          <p className="text-xl text-neutral-600 dark:text-neutral-300 max-w-3xl mx-auto font-light leading-relaxed">
            From intimate bridal sessions to high-fashion editorial shoots, I offer comprehensive
            makeup services tailored to your unique vision and style.
          </p>
          </div>
        </ScrollAnimationWrapper>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {services.map((service, index) => (
            <ScrollAnimationWrapper 
              key={index}
              animation="scale-in" 
              delay={index * 150 + 600}
            >
              <div
                className={`relative bg-white dark:bg-neutral-700 rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden card-hover ${service.popular ? 'ring-2 ring-primary-200 dark:ring-primary-400' : ''
                  }`}
              >
                {service.popular && (
                  <div className="absolute top-6 right-6 bg-gradient-to-r from-primary-500 to-gold-500 text-white px-3 py-1 rounded-full text-xs font-semibold">
                    Most Popular
                  </div>
                )}

                <div className="p-8">
                <div className="text-5xl mb-6">{service.icon}</div>
                <h3 className="text-2xl font-display font-semibold text-neutral-800 dark:text-white mb-4">{service.title}</h3>
                <p className="text-neutral-600 dark:text-neutral-300 mb-6 leading-relaxed">{service.description}</p>

                {/* Duration */}
                <div className="flex items-center mb-6 text-sm text-neutral-500 dark:text-neutral-400">
                  <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  {service.duration}
                </div>

                {/* Features */}
                <ul className="space-y-3 mb-8">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start text-neutral-700">
                      <div className="w-2 h-2 bg-primary-400 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                      <span className="text-sm text-neutral-700 dark:text-neutral-300">{feature}</span>
                    </li>
                  ))}
                </ul>

                {/* Price and CTA */}
                <div className="border-t border-neutral-100 dark:border-neutral-600 pt-6">
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-2xl font-display font-bold text-primary-600">{service.price}</span>
                  </div>
                  <button
                    onClick={() => handleBookService(service.title)}
                    className={`w-full py-3 px-6 rounded-full font-medium transition-all duration-300 transform hover:scale-105 ${service.popular
                      ? 'bg-gradient-to-r from-primary-500 to-gold-500 text-white shadow-lg hover:shadow-xl'
                      : 'bg-primary-500 hover:bg-primary-600 text-white'
                      }`}
                  >
                    Book {service.title}
                  </button>
                </div>
                </div>
              </div>
            </ScrollAnimationWrapper>
          ))}
        </div>

        {/* Custom Packages Section */}
        <div className="text-center animate-slide-up">
          <div className="bg-gradient-to-r from-primary-50 to-gold-50 dark:from-primary-900/20 dark:to-gold-900/20 rounded-3xl p-12 max-w-4xl mx-auto border border-primary-100 dark:border-primary-800">
            <div className="text-4xl mb-6">🎨</div>
            <h3 className="text-3xl font-display font-semibold text-neutral-800 dark:text-white mb-4">Custom Packages</h3>
            <p className="text-lg text-neutral-600 dark:text-neutral-300 mb-8 max-w-2xl mx-auto leading-relaxed">
              Have a unique vision or special requirements? I create bespoke makeup packages for
              destination weddings, multi-day events, film projects, and special celebrations.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                onClick={() => handleBookService('Custom Package Consultation')}
                className="btn-primary"
              >
                Discuss Custom Package
              </button>
              <button onClick={onViewPortfolio} className="btn-secondary">
                View My Work
              </button>
            </div>
          </div>
        </div>

        {/* Additional Info */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          <div className="animate-fade-in">
            <div className="text-3xl mb-4">🚗</div>
            <h4 className="font-display font-semibold text-neutral-800 mb-2">Travel Services</h4>
            <p className="text-neutral-600 text-sm">On-location services available within 50 miles. Travel fees may apply.</p>
          </div>
          <div className="animate-fade-in" style={{ animationDelay: '0.2s' }}>
            <div className="text-3xl mb-4">💎</div>
            <h4 className="font-display font-semibold text-neutral-800 mb-2">Premium Products</h4>
            <p className="text-neutral-600 text-sm">Only the finest professional-grade cosmetics from top luxury brands.</p>
          </div>
          <div className="animate-fade-in" style={{ animationDelay: '0.4s' }}>
            <div className="text-3xl mb-4">📞</div>
            <h4 className="font-display font-semibold text-neutral-800 mb-2">Free Consultation</h4>
            <p className="text-neutral-600 text-sm">Complimentary consultation to discuss your vision and needs.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;