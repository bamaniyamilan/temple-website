import React, { useState } from 'react';
import { QrCode, CreditCard, Banknote, Download, Share2 } from 'lucide-react';

const Donation = ({ donations, setDonations }) => {
  const [amount, setAmount] = useState('');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [purpose, setPurpose] = useState('general');

  const donationPurposes = [
    { id: 'general', label: 'General Donation', icon: '💰' },
    { id: 'aarti', label: 'Aarti Sponsorship', icon: '🕯️' },
    { id: 'prasad', label: 'Prasad Distribution', icon: '🍬' },
    { id: 'maintenance', label: 'Temple Maintenance', icon: '🏛️' },
    { id: 'education', label: 'Education Fund', icon: '📚' },
    { id: 'food', label: 'Food Service', icon: '🍽️' },
  ];

  const handleDonation = (e) => {
    e.preventDefault();
    if (amount && name) {
      const newDonation = {
        id: Date.now(),
        name,
        amount: parseFloat(amount),
        purpose,
        date: new Date().toLocaleDateString(),
      };
      setDonations([...donations, newDonation]);
      
      // Reset form
      setAmount('');
      setName('');
      setEmail('');
      setPurpose('general');
      
      alert('Thank you for your donation! 🙏');
    }
  };

  return (
    <section id="donation" className="py-16 bg-gradient-to-b from-white to-amber-50">
      <div className="container mx-auto px-4">
        <h2 className="section-title">Make a Donation</h2>
        
        <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Donation Form */}
          <div className="temple-card">
            <h3 className="text-2xl font-bold text-gray-800 mb-6">Donation Form</h3>
            
            <form onSubmit={handleDonation} className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Select Purpose
                </label>
                <div className="grid grid-cols-2 gap-3">
                  {donationPurposes.map((item) => (
                    <button
                      key={item.id}
                      type="button"
                      onClick={() => setPurpose(item.id)}
                      className={`p-3 rounded-lg border-2 transition-all duration-300 ${
                        purpose === item.id
                          ? 'border-temple-gold bg-temple-gold/10'
                          : 'border-gray-200 hover:border-temple-gold'
                      }`}
                    >
                      <span className="text-2xl mb-1 block">{item.icon}</span>
                      <span className="text-sm font-medium">{item.label}</span>
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Amount (₹)
                </label>
                <div className="flex flex-wrap gap-2 mb-4">
                  {[100, 500, 1000, 2100, 5100, 11000].map((amt) => (
                    <button
                      key={amt}
                      type="button"
                      onClick={() => setAmount(amt.toString())}
                      className={`px-4 py-2 rounded-lg border transition-all duration-300 ${
                        amount === amt.toString()
                          ? 'bg-temple-gold text-white border-temple-gold'
                          : 'border-gray-300 hover:border-temple-gold'
                      }`}
                    >
                      ₹{amt}
                    </button>
                  ))}
                </div>
                <input
                  type="number"
                  value={amount}
                  onChange={(e) => setAmount(e.target.value)}
                  placeholder="Enter custom amount"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-temple-gold focus:border-transparent"
                  required
                />
              </div>

              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Full Name
                  </label>
                  <input
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-temple-gold focus:border-transparent"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Email (Optional)
                  </label>
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-temple-gold focus:border-transparent"
                  />
                </div>
              </div>

              <button
                type="submit"
                className="w-full py-3 bg-gradient-to-r from-temple-gold to-amber-500 text-white font-semibold rounded-lg hover:opacity-90 transition-opacity duration-300 flex items-center justify-center"
              >
                <CreditCard className="mr-2" size={20} />
                Donate Now
              </button>
            </form>
          </div>

          {/* Bank Details & QR */}
          <div className="space-y-6">
            {/* Bank Details Card */}
            <div className="temple-card">
              <h3 className="text-2xl font-bold text-gray-800 mb-6 flex items-center">
                <Banknote className="mr-2" />
                Bank Details
              </h3>
              
              <div className="space-y-4">
                <div className="p-4 bg-amber-50 rounded-lg">
                  <p className="text-sm text-gray-600">Bank Name</p>
                  <p className="text-lg font-semibold text-gray-800">State Bank of India</p>
                </div>
                
                <div className="p-4 bg-amber-50 rounded-lg">
                  <p className="text-sm text-gray-600">Account Name</p>
                  <p className="text-lg font-semibold text-gray-800">Shri Mandir Trust</p>
                </div>
                
                <div className="p-4 bg-amber-50 rounded-lg">
                  <p className="text-sm text-gray-600">Account Number</p>
                  <p className="text-lg font-semibold text-gray-800">123456789012</p>
                </div>
                
                <div className="p-4 bg-amber-50 rounded-lg">
                  <p className="text-sm text-gray-600">IFSC Code</p>
                  <p className="text-lg font-semibold text-gray-800">SBIN0001234</p>
                </div>
                
                <div className="p-4 bg-amber-50 rounded-lg">
                  <p className="text-sm text-gray-600">Branch</p>
                  <p className="text-lg font-semibold text-gray-800">Varanasi Main Branch</p>
                </div>
              </div>
              
              <div className="flex gap-3 mt-6">
                <button className="flex-1 py-2 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 transition-colors duration-300 flex items-center justify-center">
                  <Download className="mr-2" size={18} />
                  Save Details
                </button>
                <button className="flex-1 py-2 bg-temple-red text-white rounded-lg hover:bg-temple-red/90 transition-colors duration-300 flex items-center justify-center">
                  <Share2 className="mr-2" size={18} />
                  Share
                </button>
              </div>
            </div>

            {/* QR Code Card */}
            <div className="temple-card">
              <h3 className="text-2xl font-bold text-gray-800 mb-6 flex items-center">
                <QrCode className="mr-2" />
                Scan to Donate
              </h3>
              
              <div className="flex flex-col items-center">
                <div className="w-64 h-64 bg-gray-100 rounded-lg flex items-center justify-center mb-4">
                  <div className="text-center">
                    <div className="w-48 h-48 bg-white p-4 rounded-lg mx-auto mb-4 flex items-center justify-center">
                      {/* QR Code Placeholder */}
                      <div className="grid grid-cols-5 gap-1">
                        {Array(25).fill(0).map((_, i) => (
                          <div 
                            key={i}
                            className={`w-8 h-8 rounded ${Math.random() > 0.5 ? 'bg-black' : 'bg-white'}`}
                          />
                        ))}
                      </div>
                    </div>
                    <p className="text-sm text-gray-600">Scan QR for UPI Payment</p>
                  </div>
                </div>
                
                <p className="text-sm text-gray-500 text-center">
                  Available on GPay, PhonePe, Paytm, BHIM UPI
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Recent Donations */}
        {donations.length > 0 && (
          <div className="mt-12 max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold text-gray-800 mb-6 text-center">
              Recent Donations 🙏
            </h3>
            <div className="grid md:grid-cols-3 gap-4">
              {donations.slice(-3).map((donation) => (
                <div key={donation.id} className="temple-card">
                  <div className="flex items-center justify-between mb-2">
                    <span className="font-semibold text-gray-800">{donation.name}</span>
                    <span className="text-temple-gold font-bold">₹{donation.amount}</span>
                  </div>
                  <div className="flex justify-between text-sm text-gray-600">
                    <span>{donationPurposes.find(p => p.id === donation.purpose)?.label}</span>
                    <span>{donation.date}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default Donation;