import React from 'react';
import { Package, Droplets, BookOpen, Gift, Flower2, Users } from 'lucide-react';

const Services = () => {
  const services = [
    {
      id: 1,
      icon: <img src="/s1.png" alt="Ganga Jal" className="w-8 h-8 object-cover" />,
      title: 'Ganga Jal',
      description: 'Holy water from River Ganga',
      price: '₹51',
      features: ['200ml Bottle', 'Blessed at Source', 'Free Shipping'],
      popular: true
    },
    {
      id: 2,
      icon: <img src="/s2.png" alt="Prasad Box" className="w-8 h-8 object-cover" />,
      title: 'Prasad Box',
      description: 'Traditional temple sweets',
      price: '₹101',
      features: ['5 Types of Prasad', 'Hygienically Packed', 'Pan India Delivery'],
      popular: false
    },
    {
      id: 3,
      icon: <img src="/s3.png" alt="Puja Kit" className="w-8 h-8 object-cover" />,
      title: 'Puja Kit',
      description: 'Complete puja essentials',
      price: '₹251',
      features: ['All Puja Items', 'Step-by-step Guide', 'Free Diya'],
      popular: true
    },
    {
      id: 4,
      icon: <img src="/s1.png" alt="Religious Books" className="w-8 h-8 object-cover" />,
      title: 'Religious Books',
      description: 'Spiritual literature collection',
      price: '₹151',
      features: ['Bhagavad Gita', 'Hanuman Chalisa', 'Mantra Books'],
      popular: false
    },
    {
      id: 5,
      icon: <img src="/s2.png" alt="Priest Service" className="w-8 h-8 object-cover" />,
      title: 'Priest Service',
      description: 'Online puja booking',
      price: '₹510',
      features: ['Video Call Puja', 'Custom Rituals', 'Certificate'],
      popular: true
    },
    {
      id: 6,
      icon: <Package size={32} />,
      title: 'Monthly Subscription',
      description: 'Regular spiritual supplies',
      price: '₹999/mo',
      features: ['Monthly Prasad', 'Ganga Jal', 'New Books'],
      popular: false
    },
  ];

  return (
    <section id="services" className="py-16 bg-gradient-to-b from-white to-amber-50">
      <div className="container mx-auto px-4">
        <h2 className="section-title">Online Services</h2>
        <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
          Access divine blessings from anywhere in the world through our online services
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {services.map((service) => (
            <div 
              key={service.id}
              className={`temple-card relative ${service.popular ? 'border-2 border-temple-gold' : ''}`}
            >
              {service.popular && (
                <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                  <span className="px-4 py-1 bg-gradient-to-r from-temple-gold to-amber-500 text-white text-sm font-bold rounded-full">
                    MOST POPULAR
                  </span>
                </div>
              )}
              
              <div className="flex flex-col h-full">
                <div className="flex items-center justify-between mb-4">
                  <div className="w-16 h-16 rounded-full bg-temple-red/10 flex items-center justify-center">
                    <div className="text-temple-red">
                      {service.icon}
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="text-3xl font-bold text-temple-gold">{service.price}</div>
                    {service.id === 6 && <div className="text-sm text-gray-500">per month</div>}
                  </div>
                </div>
                
                <h3 className="text-xl font-bold text-gray-800 mb-2">{service.title}</h3>
                <p className="text-gray-600 mb-4">{service.description}</p>
                
                <div className="space-y-2 mb-6 flex-grow">
                  {service.features.map((feature, index) => (
                    <div key={index} className="flex items-center">
                      <div className="w-2 h-2 bg-temple-green rounded-full mr-3"></div>
                      <span className="text-sm text-gray-700">{feature}</span>
                    </div>
                  ))}
                </div>
                
                <button className="w-full py-3 border-2 border-temple-red text-temple-red rounded-lg font-semibold hover:bg-temple-red hover:text-white transition-all duration-300">
                  Order Now
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Booking Section */}
        <div className="mt-16 max-w-4xl mx-auto">
          <div className="temple-card bg-gradient-to-r from-temple-red/5 to-temple-gold/5">
            <h3 className="text-2xl font-bold text-gray-800 mb-6 text-center">
              Book Special Services
            </h3>
            
            <div className="grid md:grid-cols-3 gap-6">
              <div className="text-center p-6">
                <div className="text-4xl mb-4">🕉️</div>
                <h4 className="font-bold text-gray-800 mb-2">Havan/Yagna</h4>
                <p className="text-gray-600 mb-4">Sacred fire ceremony for prosperity</p>
                <button className="px-6 py-2 bg-temple-gold text-white rounded-lg font-semibold hover:bg-temple-gold/90">
                  Book - ₹5100
                </button>
              </div>
              
              <div className="text-center p-6">
                <div className="text-4xl mb-4">📿</div>
                <h4 className="font-bold text-gray-800 mb-2">Rudrabhishek</h4>
                <p className="text-gray-600 mb-4">Shiva abhishekam with 108 names</p>
                <button className="px-6 py-2 bg-temple-gold text-white rounded-lg font-semibold hover:bg-temple-gold/90">
                  Book - ₹2100
                </button>
              </div>
              
              <div className="text-center p-6">
                <div className="text-4xl mb-4">🎂</div>
                <h4 className="font-bold text-gray-800 mb-2">Birthday Puja</h4>
                <p className="text-gray-600 mb-4">Special puja on your birthday</p>
                <button className="px-6 py-2 bg-temple-gold text-white rounded-lg font-semibold hover:bg-temple-gold/90">
                  Book - ₹1100
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;