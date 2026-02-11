import React from 'react';
import { Clock, Sunrise, Sunset, Moon } from 'lucide-react';

const AartiTimings = () => {
  const timings = [
    { id: 1, name: 'Mangala Aarti', time: '5:00 AM', icon: <Sunrise size={20} />, description: 'Morning awakening ceremony' },
    { id: 2, name: 'Shringar Aarti', time: '8:00 AM', icon: <Clock size={20} />, description: 'Decoration ceremony' },
    { id: 3, name: 'Rajbhog Aarti', time: '12:00 PM', icon: <Clock size={20} />, description: 'Mid-day offering' },
    { id: 4, name: 'Sandhya Aarti', time: '6:30 PM', icon: <Sunset size={20} />, description: 'Evening ceremony' },
    { id: 5, name: 'Shayan Aarti', time: '9:00 PM', icon: <Moon size={20} />, description: 'Bedtime ceremony' },
  ];

  const specialAartis = [
    { id: 1, name: 'Sunday Special', time: '7:00 PM', description: 'Surya Dev Aarti' },
    { id: 2, name: 'Full Moon', time: '7:30 PM', description: 'Purnima Aarti' },
    { id: 3, name: 'Ekadashi', time: '6:00 PM', description: 'Vishnu Aarti' },
  ];

  return (
    <section id="aarti" className="py-16 bg-gradient-to-b from-amber-50 to-white">
      <div className="container mx-auto px-4">
        <h2 className="section-title">Aarti Timings</h2>
        
        <div className="max-w-6xl mx-auto">
          <div className="temple-card mb-8">
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-2xl font-bold text-gray-800">Daily Schedule</h3>
              <div className="px-4 py-2 bg-temple-gold/10 text-temple-gold rounded-full font-semibold">
                Temple Opens: 5 AM - 10 PM
              </div>
            </div>
            
            <div className="space-y-4">
              {timings.map((timing) => (
                <div 
                  key={timing.id}
                  className="flex items-center justify-between p-4 rounded-lg hover:bg-amber-50 transition-colors duration-300 border border-gray-100"
                >
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 rounded-full bg-temple-red/10 flex items-center justify-center">
                      <div className="text-temple-red">
                        {timing.icon}
                      </div>
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-800">{timing.name}</h4>
                      <p className="text-sm text-gray-600">{timing.description}</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="text-2xl font-bold text-temple-gold">{timing.time}</div>
                    <div className="text-sm text-gray-500">Duration: 45 mins</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Special Aartis */}
            <div className="temple-card">
              <h3 className="text-2xl font-bold text-gray-800 mb-6">Special Aartis</h3>
              <div className="space-y-4">
                {specialAartis.map((aarti) => (
                  <div 
                    key={aarti.id}
                    className="p-4 border border-gray-100 rounded-lg hover:border-temple-gold transition-colors duration-300"
                  >
                    <div className="flex justify-between items-center mb-2">
                      <h4 className="font-bold text-gray-800">{aarti.name}</h4>
                      <span className="px-3 py-1 bg-temple-red/10 text-temple-red rounded-full text-sm font-medium">
                        {aarti.time}
                      </span>
                    </div>
                    <p className="text-gray-600">{aarti.description}</p>
                  </div>
                ))}
              </div>
              
              <div className="mt-6 p-4 bg-gradient-to-r from-temple-gold/10 to-amber-100 rounded-lg">
                <h4 className="font-bold text-gray-800 mb-2">Aarti Sponsorship</h4>
                <p className="text-gray-600 mb-3">Sponsor daily or special aartis for blessings</p>
                <button className="w-full py-2 bg-temple-gold text-white rounded-lg font-semibold hover:bg-temple-gold/90 transition-colors duration-300">
                  Sponsor Aarti - ₹2100
                </button>
              </div>
            </div>

            {/* Important Notes */}
            <div className="temple-card">
              <h3 className="text-2xl font-bold text-gray-800 mb-6">Important Information</h3>
              
              <div className="space-y-4">
                <div className="p-4 bg-blue-50 rounded-lg">
                  <h4 className="font-bold text-blue-800 mb-2">📋 Dress Code</h4>
                  <p className="text-blue-700">Traditional attire recommended. Avoid shorts and sleeveless tops.</p>
                </div>
                
                <div className="p-4 bg-green-50 rounded-lg">
                  <h4 className="font-bold text-green-800 mb-2">📱 Mobile Phones</h4>
                  <p className="text-green-700">Silent mode mandatory. Photography restricted in inner sanctum.</p>
                </div>
                
                <div className="p-4 bg-purple-50 rounded-lg">
                  <h4 className="font-bold text-purple-800 mb-2">🎟️ Entry Pass</h4>
                  <p className="text-purple-700">No entry pass required for regular darshan. Special darshan passes available online.</p>
                </div>
                
                <div className="p-4 bg-amber-50 rounded-lg">
                  <h4 className="font-bold text-amber-800 mb-2">🎁 Prasad Distribution</h4>
                  <p className="text-amber-700">After each aarti. Available for all devotees.</p>
                </div>
              </div>
              
              <div className="mt-6">
                <h4 className="font-bold text-gray-800 mb-3">Live Streaming</h4>
                <div className="flex gap-3">
                  <button className="flex-1 py-2 bg-red-600 text-white rounded-lg font-semibold hover:bg-red-700 transition-colors duration-300">
                    YouTube Live
                  </button>
                  <button className="flex-1 py-2 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 transition-colors duration-300">
                    Facebook Live
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AartiTimings;