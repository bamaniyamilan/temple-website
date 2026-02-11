import React from 'react';
import { ChevronRight, PlayCircle } from 'lucide-react';

const Hero = () => {
  return (
    <section id="home" className="pt-24 pb-16 md:pt-32 md:pb-24 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg%20width%3D%2260%22%20height%3D%2260%22%20viewBox%3D%220%200%2060%2060%22%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%3E%3Cg%20fill%3D%22none%22%20fill-rule%3D%22evenodd%22%3E%3Cg%20fill%3D%22%23D4AF37%22%20fill-opacity%3D%220.05%22%3E%3Cpath%20d%3D%22M36%2034v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6%2034v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6%204V0H4v4H0v2h4v4h2V6h4V4H6z%22/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')]"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="text-center md:text-left">
            <span className="inline-block px-4 py-2 rounded-full bg-temple-red/10 text-temple-red font-semibold mb-4">
              Welcome to Divine Blessings
            </span>
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              Experience the{' '}
              <span className="text-temple-gold relative">
                Divine Peace
                <span className="absolute -bottom-2 left-0 w-full h-1 gold-gradient rounded-full"></span>
              </span>
            </h1>
            <p className="text-lg text-gray-600 mb-8 max-w-2xl">
              Welcome to Shri Mandir, a sacred space where spirituality meets serenity. 
              Join us in prayer, meditation, and community service.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
              <button className="px-8 py-3 bg-temple-red text-white rounded-lg font-semibold hover:bg-temple-red/90 transition-colors duration-300 flex items-center justify-center">
                Book Darshan
                <ChevronRight className="ml-2" size={20} />
              </button>
              <button className="px-8 py-3 border-2 border-temple-gold text-temple-gold rounded-lg font-semibold hover:bg-temple-gold/10 transition-colors duration-300 flex items-center justify-center">
                <PlayCircle className="mr-2" size={20} />
                Watch Live Aarti
              </button>
            </div>
          </div>
          
          <div className="relative">
            <div className="relative h-80 md:h-96 rounded-2xl overflow-hidden shadow-2xl">
              <div className="absolute inset-0 bg-gradient-to-br from-temple-gold/20 to-temple-red/20"></div>
              <img 
                src="/hero.png" 
                alt="Temple"
                className="w-full h-full object-cover"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-6">
                <h3 className="text-white text-xl font-semibold">Daily Darshan: 6 AM - 9 PM</h3>
                <p className="text-amber-200">Open all days</p>
              </div>
            </div>
            
            {/* Decorative elements */}
            <div className="absolute -top-4 -right-4 w-24 h-24 bg-temple-gold/20 rounded-full"></div>
            <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-temple-red/10 rounded-full"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;