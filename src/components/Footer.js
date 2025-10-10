import React from 'react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const handleWhatsApp = () => {
    const message = "Hi! I'd like to inquire about your makeup services.";
    const whatsappUrl = `https://wa.me/+918709601720?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <footer className="bg-gradient-to-br from-neutral-900 to-neutral-800 dark:from-neutral-950 dark:to-neutral-900 text-white">
      <div className="container-custom py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="lg:col-span-2">
            <h3 className="text-3xl font-display font-bold mb-6 text-gradient">Sarah Chen</h3>
            <p className="text-neutral-300 mb-8 max-w-md leading-relaxed">
              Professional makeup artistry for your most important moments.
              Creating beauty that inspires confidence and celebrates your unique style.
            </p>

            {/* Contact Info */}
            <div className="space-y-3 mb-8">
              <div className="flex items-center text-neutral-300">
                <svg className="w-5 h-5 mr-3 text-primary-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                <span>+91 87096 01720</span>
              </div>
              <div className="flex items-center text-neutral-300">
                <svg className="w-5 h-5 mr-3 text-primary-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <span>hello@makeupbysarah.com</span>
              </div>
              <div className="flex items-center text-neutral-300">
                <svg className="w-5 h-5 mr-3 text-primary-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <span>Patna,Bihar & Surrounding Areas</span>
              </div>
            </div>

            {/* Social Media */}
            <div className="flex space-x-4">
              <a href="https://instagram.com/makeupbysarah" target="_blank" rel="noopener noreferrer" className="bg-gradient-to-r from-pink-500 to-purple-600 hover:from-pink-600 hover:to-purple-700 p-3 rounded-2xl transition-all duration-300 transform hover:scale-110">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                </svg>
              </a>
              <a href="https://pinterest.com/makeupbysarah" target="_blank" rel="noopener noreferrer" className="bg-gradient-to-r from-red-500 to-red-600 hover:from-red-600 hover:to-red-700 p-3 rounded-2xl transition-all duration-300 transform hover:scale-110">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 5.079 3.158 9.417 7.618 11.174-.105-.949-.199-2.403.041-3.439.219-.937 1.406-5.957 1.406-5.957s-.359-.72-.359-1.781c0-1.663.967-2.911 2.168-2.911 1.024 0 1.518.769 1.518 1.688 0 1.029-.653 2.567-.992 3.992-.285 1.193.6 2.165 1.775 2.165 2.128 0 3.768-2.245 3.768-5.487 0-2.861-2.063-4.869-5.008-4.869-3.41 0-5.409 2.562-5.409 5.199 0 1.033.394 2.143.889 2.741.097.118.112.221.085.345-.09.375-.293 1.199-.334 1.363-.053.225-.172.271-.402.165-1.495-.69-2.433-2.878-2.433-4.646 0-3.776 2.748-7.252 7.92-7.252 4.158 0 7.392 2.967 7.392 6.923 0 4.135-2.607 7.462-6.233 7.462-1.214 0-2.357-.629-2.748-1.378l-.748 2.853c-.271 1.043-1.002 2.35-1.492 3.146C9.57 23.812 10.763 24.009 12.017 24.009c6.624 0 11.99-5.367 11.99-11.988C24.007 5.367 18.641.001.012.001z" />
                </svg>
              </a>
              <a href="https://tiktok.com/@makeupbysarah" target="_blank" rel="noopener noreferrer" className="bg-gradient-to-r from-gray-800 to-gray-900 hover:from-gray-900 hover:to-black p-3 rounded-2xl transition-all duration-300 transform hover:scale-110">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.15 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z" />
                </svg>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-xl font-display font-semibold mb-6">Quick Links</h4>
            <ul className="space-y-3">
              <li><a href="#home" className="text-neutral-300 hover:text-primary-400 transition-colors duration-300">Home</a></li>
              <li><a href="#about" className="text-neutral-300 hover:text-primary-400 transition-colors duration-300">About</a></li>
              <li><a href="#portfolio" className="text-neutral-300 hover:text-primary-400 transition-colors duration-300">Portfolio</a></li>
              <li><a href="#services" className="text-neutral-300 hover:text-primary-400 transition-colors duration-300">Services</a></li>
              <li><a href="#products" className="text-neutral-300 hover:text-primary-400 transition-colors duration-300">Products</a></li>
              <li><a href="#contact" className="text-neutral-300 hover:text-primary-400 transition-colors duration-300">Contact</a></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-xl font-display font-semibold mb-6">Services</h4>
            <ul className="space-y-3">
              <li><span className="text-neutral-300">Bridal Makeup</span></li>
              <li><span className="text-neutral-300">Editorial & Fashion</span></li>
              <li><span className="text-neutral-300">Special Effects</span></li>
              <li><span className="text-neutral-300">Event Makeup</span></li>
              <li><span className="text-neutral-300">Makeup Lessons</span></li>
              <li>
                <button
                  onClick={handleWhatsApp}
                  className="text-primary-400 hover:text-primary-300 transition-colors duration-300 font-medium"
                >
                  Book Consultation →
                </button>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-neutral-700 mt-16 pt-8">
          <div className="flex flex-col lg:flex-row justify-between items-center">
            <p className="text-neutral-400 text-sm mb-4 lg:mb-0">
              © {currentYear} Preety Makeup Artistry. All rights reserved.
            </p>
            <div className="flex flex-wrap justify-center lg:justify-end space-x-8">
              <a href="/privacy" className="text-neutral-400 hover:text-primary-400 text-sm transition-colors duration-300">
                Privacy Policy
              </a>
              <a href="/terms" className="text-neutral-400 hover:text-primary-400 text-sm transition-colors duration-300">
                Terms of Service
              </a>
              <span className="text-neutral-500 text-sm">
                Made with 💄 in Anipreet.
              </span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;