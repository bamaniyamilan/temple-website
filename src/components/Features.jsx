import React from 'react';
import { Shield, Users, Clock, Gift } from 'lucide-react';

const Features = () => {
  const features = [
    {
      icon: <Shield size={32} />,
      title: 'Secure Donations',
      description: '100% secure and transparent donation process with instant receipts',
      color: 'text-green-600',
      bg: 'bg-green-50',
    },
    {
      icon: <Users size={32} />,
      title: 'Community Service',
      description: 'Serving the community through various social initiatives',
      color: 'text-blue-600',
      bg: 'bg-blue-50',
    },
    {
      icon: <Clock size={32} />,
      title: 'Live Streaming',
      description: 'Watch live aarti and ceremonies from anywhere in the world',
      color: 'text-red-600',
      bg: 'bg-red-50',
    },
    {
      icon: <Gift size={32} />,
      title: 'Online Services',
      description: 'Order prasad, ganga jal, and book pujas online',
      color: 'text-purple-600',
      bg: 'bg-purple-50',
    },
  ];

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            Why Choose Our Temple?
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            We combine ancient traditions with modern technology to serve devotees worldwide
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index}
              className={`${feature.bg} p-6 rounded-xl transition-all duration-300 hover:scale-[1.02] hover:shadow-xl`}
            >
              <div className={`${feature.color} mb-4`}>
                {feature.icon}
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-3">
                {feature.title}
              </h3>
              <p className="text-gray-600">
                {feature.description}
              </p>
            </div>
          ))}
        </div>

        {/* Stats */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          <div className="p-6">
            <div className="text-3xl md:text-4xl font-bold text-temple-gold mb-2">173+</div>
            <div className="text-gray-600">Years Serving</div>
          </div>
          <div className="p-6">
            <div className="text-3xl md:text-4xl font-bold text-temple-gold mb-2">5000+</div>
            <div className="text-gray-600">Daily Devotees</div>
          </div>
          <div className="p-6">
            <div className="text-3xl md:text-4xl font-bold text-temple-gold mb-2">₹10L+</div>
            <div className="text-gray-600">Monthly Donations</div>
          </div>
          <div className="p-6">
            <div className="text-3xl md:text-4xl font-bold text-temple-gold mb-2">50+</div>
            <div className="text-gray-600">Online Services</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;