import React from 'react';

const Products = () => {
  const brands = [
    {
      name: 'MAC Cosmetics',
      category: 'Professional Makeup',
      logo: 'https://logos-world.net/wp-content/uploads/2020/04/MAC-Logo.png',
      description: 'Professional-grade foundations, lipsticks, and eye makeup',
      specialty: 'Foundation & Color'
    },
    {
      name: 'Charlotte Tilbury',
      category: 'Luxury Beauty',
      logo: 'https://www.charlottetilbury.com/on/demandware.static/-/Sites-ctilbury-master/default/dw8c8b5c5e/images/charlotte-tilbury-logo.svg',
      description: 'Luxury makeup with Hollywood glamour',
      specialty: 'Bridal & Glam'
    },
    {
      name: 'Fenty Beauty',
      category: 'Inclusive Beauty',
      logo: 'https://logos-world.net/wp-content/uploads/2021/02/Fenty-Beauty-Logo.png',
      description: 'Inclusive shade range for all skin tones',
      specialty: 'Complexion'
    },
    {
      name: 'Urban Decay',
      category: 'Editorial Makeup',
      logo: 'https://logos-world.net/wp-content/uploads/2020/04/Urban-Decay-Logo.png',
      description: 'Bold, edgy colors for creative looks',
      specialty: 'Eyeshadow & Color'
    },
    {
      name: 'NARS',
      category: 'Professional Artistry',
      logo: 'https://logos-world.net/wp-content/uploads/2020/04/NARS-Logo.png',
      description: 'Professional makeup artist favorite',
      specialty: 'Blush & Contour'
    },
    {
      name: 'Bobbi Brown',
      category: 'Natural Beauty',
      logo: 'https://logos-world.net/wp-content/uploads/2020/04/Bobbi-Brown-Logo.png',
      description: 'Natural, wearable makeup essentials',
      specialty: 'Natural Looks'
    }
  ];

  const productCategories = [
    {
      category: 'Base Makeup',
      icon: '🎨',
      products: [
        'High-definition foundations',
        'Color-correcting primers',
        'Professional concealers',
        'Setting powders & sprays',
        'Contouring palettes'
      ]
    },
    {
      category: 'Eye Makeup',
      icon: '👁️',
      products: [
        'Eyeshadow palettes',
        'Waterproof mascaras',
        'Precision eyeliners',
        'False lashes & adhesives',
        'Brow defining products'
      ]
    },
    {
      category: 'Lip Products',
      icon: '💋',
      products: [
        'Long-lasting lipsticks',
        'Lip liners & pencils',
        'Glosses & balms',
        'Liquid lipsticks',
        'Lip stains & tints'
      ]
    },
    {
      category: 'Tools & Brushes',
      icon: '🖌️',
      products: [
        'Professional brush sets',
        'Beauty blenders & sponges',
        'Makeup palettes',
        'Sanitizing products',
        'Application tools'
      ]
    }
  ];

  const handleBookConsultation = () => {
    const message = "Hi! I'd like to know more about the makeup products and brands you use. Could we discuss this?";
    const whatsappUrl = `https://wa.me/+918709601720?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <section id="products" className="section-padding bg-gradient-to-br from-neutral-50 to-primary-50 dark:from-neutral-800 dark:to-primary-900/20">
      <div className="container-custom">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="font-display text-neutral-800 dark:text-white mb-6">
            Premium <span className="text-gradient">Products & Brands</span>
          </h2>
          <p className="text-xl text-neutral-600 dark:text-neutral-300 max-w-3xl mx-auto font-light leading-relaxed">
            I work exclusively with high-end, professional-grade cosmetics from the world's most 
            trusted beauty brands to ensure flawless, long-lasting results.
          </p>
        </div>

        {/* Featured Brands */}
        <div className="mb-20">
          <h3 className="text-2xl font-display font-semibold text-center text-neutral-800 mb-12">
            Trusted Brand Partners
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
            {brands.map((brand, index) => (
              <div 
                key={index}
                className="bg-white dark:bg-neutral-700 rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-500 card-hover animate-scale-in text-center"
                style={{animationDelay: `${index * 0.1}s`}}
              >
                <div className="h-16 flex items-center justify-center mb-4">
                  <div className="text-2xl font-bold text-neutral-700 dark:text-neutral-200">
                    {brand.name.split(' ')[0]}
                  </div>
                </div>
                <h4 className="font-semibold text-neutral-800 dark:text-white text-sm mb-2">{brand.name}</h4>
                <p className="text-xs text-primary-600 font-medium mb-2">{brand.specialty}</p>
                <p className="text-xs text-neutral-500 dark:text-neutral-400 leading-relaxed">{brand.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Product Categories */}
        <div className="mb-16">
          <h3 className="text-2xl font-display font-semibold text-center text-neutral-800 mb-12">
            Professional Product Categories
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {productCategories.map((category, index) => (
              <div 
                key={index}
                className="bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 card-hover animate-slide-up"
                style={{animationDelay: `${index * 0.1}s`}}
              >
                <div className="text-4xl mb-6 text-center">{category.icon}</div>
                <h4 className="text-xl font-display font-semibold text-neutral-800 mb-6 text-center">
                  {category.category}
                </h4>
                <ul className="space-y-3">
                  {category.products.map((product, productIndex) => (
                    <li key={productIndex} className="flex items-start text-neutral-600">
                      <div className="w-2 h-2 bg-primary-400 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                      <span className="text-sm">{product}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Quality Promise */}
        <div className="bg-white rounded-3xl shadow-2xl p-12 text-center animate-fade-in">
          <div className="text-5xl mb-8">✨</div>
          <h3 className="text-3xl font-display font-semibold text-neutral-800 mb-6">
            My Quality Promise
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-10">
            <div className="text-center">
              <div className="text-3xl mb-4">🌟</div>
              <h4 className="font-display font-semibold text-neutral-800 mb-2">Premium Quality</h4>
              <p className="text-neutral-600 text-sm">Only the finest professional-grade cosmetics from luxury brands</p>
            </div>
            <div className="text-center">
              <div className="text-3xl mb-4">🧪</div>
              <h4 className="font-display font-semibold text-neutral-800 mb-2">Hygienic Standards</h4>
              <p className="text-neutral-600 text-sm">All products are sanitized and applied with clean, professional tools</p>
            </div>
            <div className="text-center">
              <div className="text-3xl mb-4">⏰</div>
              <h4 className="font-display font-semibold text-neutral-800 mb-2">Long-Lasting</h4>
              <p className="text-neutral-600 text-sm">Makeup that stays perfect throughout your entire event</p>
            </div>
          </div>
          
          <p className="text-lg text-neutral-600 mb-8 max-w-3xl mx-auto leading-relaxed">
            I invest in the best products because you deserve nothing less than perfection. 
            Every product in my kit is carefully selected for its quality, performance, and ability 
            to create stunning, camera-ready results.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={handleBookConsultation}
              className="btn-primary"
            >
              Discuss Product Preferences
            </button>
            <a href="#services" className="btn-secondary">
              View Services
            </a>
          </div>
        </div>

        {/* Additional Info */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          <div className="animate-fade-in">
            <div className="text-3xl mb-4">🛡️</div>
            <h4 className="font-display font-semibold text-neutral-800 mb-2">Allergy-Friendly</h4>
            <p className="text-neutral-600 text-sm">Hypoallergenic options available for sensitive skin</p>
          </div>
          <div className="animate-fade-in" style={{animationDelay: '0.2s'}}>
            <div className="text-3xl mb-4">🌿</div>
            <h4 className="font-display font-semibold text-neutral-800 mb-2">Cruelty-Free</h4>
            <p className="text-neutral-600 text-sm">All brands are cruelty-free and ethically sourced</p>
          </div>
          <div className="animate-fade-in" style={{animationDelay: '0.4s'}}>
            <div className="text-3xl mb-4">📸</div>
            <h4 className="font-display font-semibold text-neutral-800 mb-2">Camera-Ready</h4>
            <p className="text-neutral-600 text-sm">Products specifically chosen for photography and videography</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Products;