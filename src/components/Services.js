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
        <ScrollAnimationWrapper animation="fade-in" delay={100}>
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
              delay={Math.min(index * 100 + 300, 600)} // Faster, capped delays
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

                <div className="p-6">
                <div className="text-4xl mb-4">{service.icon}</div>
                <h3 className="text-xl font-display font-semibold text-neutral-800 dark:text-white mb-3">{service.title}</h3>
                <p className="text-neutral-600 dark:text-neutral-300 mb-4 leading-relaxed text-sm">{service.description}</p>

                {/* Duration */}
                <div className="flex items-center mb-4 text-sm text-neutral-500 dark:text-neutral-400">
                  <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  {service.duration}
                </div>

                {/* Features */}
                <ul className="space-y-2 mb-6">
                  {service.features.slice(0, 3).map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start text-neutral-700">
                      <div className="w-1.5 h-1.5 bg-primary-400 rounded-full mt-1.5 mr-2 flex-shrink-0"></div>
                      <span className="text-xs text-neutral-700 dark:text-neutral-300">{feature}</span>
                    </li>
                  ))}
                  {service.features.length > 3 && (
                    <li className="text-xs text-primary-500 dark:text-primary-400 font-medium">
                      +{service.features.length - 3} more features
                    </li>
                  )}
                </ul>

                {/* Price and CTA */}
                <div className="border-t border-neutral-100 dark:border-neutral-600 pt-4">
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-xl font-display font-bold text-primary-600">{service.price}</span>
                  </div>
                  
                  {/* Action Buttons */}
                  <div className="grid grid-cols-2 gap-2">
                    {/* Book Now Button - WhatsApp */}
                    <button
                      onClick={() => handleBookService(service.title)}
                      className={`py-2.5 px-3 rounded-full font-medium text-xs transition-all duration-300 transform hover:scale-105 flex items-center justify-center ${service.popular
                        ? 'bg-gradient-to-r from-primary-500 to-gold-500 text-white shadow-lg hover:shadow-xl'
                        : 'bg-primary-500 hover:bg-primary-600 text-white'
                        }`}
                    >
                      <svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.309"/>
                      </svg>
                      Book Now
                    </button>
                    
                    {/* Call Now Button */}
                    <a
                      href="tel:+918709601720"
                      className="py-2.5 px-3 rounded-full font-medium text-xs transition-all duration-300 transform hover:scale-105 bg-green-500 hover:bg-green-600 text-white flex items-center justify-center"
                    >
                      <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                      </svg>
                      Call Now
                    </a>
                  </div>
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