import React, { useState } from 'react';
import { Car, Train, Bus, Plane, MapPin, Clock, DollarSign, Route, Navigation, Crown, Ticket, MessageSquare, AlertCircle, Banknote, Languages, Shield } from 'lucide-react';

const Transport = () => {
  const [selectedRoute, setSelectedRoute] = useState('');

  const transportOptions = [
    {
      type: 'High-Speed Rail',
      icon: Train,
      name: 'Al Boraq (TGV)',
      routes: ['Tangier ↔ Casablanca', 'Casablanca ↔ Rabat'],
      duration: '2h 10min (Tangier-Casablanca)',
      price: '100-200 MAD',
      features: ['Air-conditioned', 'WiFi', 'Food service', '320 km/h speed'],
      color: 'from-blue-500 to-blue-600',
      image: '/Riding Morocco\'s Al Boraq Bullet Train copy copy.jpg'
    },
    {
      type: 'Regular Train',
      icon: Train,
      name: 'ONCF Network',
      routes: ['Marrakech ↔ Fez', 'Meknes ↔ Oujda', 'Multiple routes'],
      duration: '3-8 hours',
      price: '50-150 MAD',
      features: ['1st & 2nd class', 'Couchettes available', 'Dining car', 'Scenic routes'],
      color: 'from-green-500 to-green-600',
      image: 'https://images.pexels.com/photos/1727044/pexels-photo-1727044.jpeg?auto=compress&cs=tinysrgb&w=800&h=400&fit=crop'
    },
    {
      type: 'Intercity Bus',
      icon: Bus,
      name: 'CTM & Supratours',
      routes: ['All major cities', 'Atlas Mountains', 'Sahara routes'],
      duration: '2-12 hours',
      price: '30-200 MAD',
      features: ['Air-conditioned', 'Comfortable seats', 'Regular schedules', 'Affordable'],
      color: 'from-orange-500 to-orange-600',
      image: 'https://images.pexels.com/photos/1007025/pexels-photo-1007025.jpeg?auto=compress&cs=tinysrgb&w=800&h=400&fit=crop'
    },
    {
      type: 'Domestic Flights',
      icon: Plane,
      name: 'Royal Air Maroc',
      routes: ['Casablanca ↔ Marrakech', 'Rabat ↔ Fez', 'Regional airports'],
      duration: '1-2 hours',
      price: '400-1000 MAD',
      features: ['Quick travel', 'Multiple daily flights', 'Business class', 'Baggage included'],
      color: 'from-red-500 to-red-600',
      image: '/téléchargement (3).jpg'
    }
  ];

  const cityTransport = [
    {
      city: 'Casablanca',
      options: [
        { type: 'Tram', price: '6 MAD', info: 'Modern tram system covering main routes' },
        { type: 'Grand Taxi', price: '10-50 MAD', info: 'Shared taxis for longer distances' },
        { type: 'Petit Taxi', price: '5-20 MAD', info: 'Red taxis for city center' },
        { type: 'Bus', price: '4 MAD', info: 'Public bus network' }
      ]
    },
    {
      city: 'Rabat',
      options: [
        { type: 'Tram', price: '6 MAD', info: 'Clean, efficient tram system' },
        { type: 'Taxi', price: '8-25 MAD', info: 'Blue taxis throughout the city' },
        { type: 'Bus', price: '4 MAD', info: 'Stareo bus network' }
      ]
    },
    {
      city: 'Marrakech',
      options: [
        { type: 'Petit Taxi', price: '7-30 MAD', info: 'Beige taxis, negotiate price' },
        { type: 'Calèche', price: '100-200 MAD/hour', info: 'Horse-drawn carriage tours' },
        { type: 'Bus', price: '4 MAD', info: 'Local bus service' },
        { type: 'Scooter', price: '150-300 MAD/day', info: 'Rental scooters available' }
      ]
    }
  ];

  const tips = [
    {
      title: 'Booking Train Tickets',
      description: 'Book online at ONCF website or mobile app for best prices',
      icon: Ticket,
      category: 'Planning'
    },
    {
      title: 'Taxi Negotiations',
      description: 'Always agree on price before starting journey in petit taxis',
      icon: MessageSquare,
      category: 'Local Transport'
    },
    {
      title: 'Rush Hours',
      description: 'Avoid 7-9 AM and 5-7 PM in major cities',
      icon: Clock,
      category: 'Timing'
    },
    {
      title: 'Currency',
      description: 'Keep small denominations (5, 10, 20 MAD) for transport',
      icon: Banknote,
      category: 'Money'
    },
    {
      title: 'Language',
      description: 'Learn basic phrases: "Fin?" (Where?), "Besh-hal?" (How much?)',
      icon: Languages,
      category: 'Communication'
    },
    {
      title: 'Safety',
      description: 'Use official taxis and keep valuables secure',
      icon: Shield,
      category: 'Safety'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-green-50">
      {/* Hero Section */}
      <section 
        className="relative py-20 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url('/téléchargement (2) copy copy.jpg')`
        }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
            Transport Guide
          </h1>
          <p className="text-xl text-gray-200 max-w-3xl mx-auto">
            Navigate Morocco with ease using our comprehensive transport guide for World Cup 2030
          </p>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Route Planner */}
        <div className="bg-white rounded-2xl shadow-lg p-8 mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center space-x-3">
            <Route className="w-6 h-6 text-blue-600" />
            <span>Quick Route Planner</span>
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">From</label>
              <select className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent">
                <option value="">Select departure city</option>
                <option value="casablanca">Casablanca</option>
                <option value="marrakech">Marrakech</option>
                <option value="fez">Fez</option>
                <option value="rabat">Rabat</option>
                <option value="tangier">Tangier</option>
              </select>
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">To</label>
              <select 
                value={selectedRoute}
                onChange={(e) => setSelectedRoute(e.target.value)}
                className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              >
                <option value="">Select destination</option>
                <option value="casablanca">Casablanca</option>
                <option value="marrakech">Marrakech</option>
                <option value="fez">Fez</option>
                <option value="rabat">Rabat</option>
                <option value="tangier">Tangier</option>
              </select>
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Travel Date</label>
              <input
                type="date"
                className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>
          </div>
          
          <button className="mt-6 bg-gradient-to-r from-blue-600 to-green-600 text-white px-8 py-3 rounded-lg hover:shadow-lg transition-all duration-300 flex items-center space-x-2">
            <Navigation className="w-5 h-5" />
            <span>Find Best Routes</span>
          </button>
        </div>

        {/* Transport Options */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Intercity Transport Options</h2>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {transportOptions.map((option, index) => (
              <div key={index} className="bg-white rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-300">
                <div 
                  className="h-48 bg-cover bg-center relative"
                  style={{ backgroundImage: `url(${option.image})` }}
                >
                  <div className="absolute inset-0 bg-black/20"></div>
                  <div className="absolute top-4 left-4">
                    <div className={`bg-gradient-to-r ${option.color} p-3 rounded-xl flex items-center space-x-2`}>
                      <option.icon className="w-6 h-6 text-white" />
                    </div>
                  </div>
                  <div className="absolute bottom-4 left-4 text-white">
                    <h3 className="text-xl font-bold">{option.name}</h3>
                    <p className="text-gray-200">{option.type}</p>
                  </div>
                </div>
                
                <div className="p-6">
                  <div className="grid grid-cols-2 gap-4 mb-4">
                    <div className="flex items-center space-x-2">
                      <Clock className="w-5 h-5 text-gray-500" />
                      <span className="text-sm text-gray-700">{option.duration}</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <DollarSign className="w-5 h-5 text-gray-500" />
                      <span className="text-sm text-gray-700">{option.price}</span>
                    </div>
                  </div>
                  
                  <div className="mb-4">
                    <h4 className="font-semibold text-gray-900 mb-2">Popular Routes:</h4>
                    <div className="space-y-1">
                      {option.routes.map((route, i) => (
                        <div key={i} className="flex items-center space-x-2">
                          <MapPin className="w-4 h-4 text-blue-600" />
                          <span className="text-sm text-gray-700">{route}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Features:</h4>
                    <div className="flex flex-wrap gap-2">
                      {option.features.map((feature, i) => (
                        <span key={i} className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm">
                          {feature}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* City Transport */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">City Transport Options</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {cityTransport.map((city, index) => (
              <div key={index} className="bg-white rounded-2xl shadow-lg p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center space-x-2">
                  <MapPin className="w-5 h-5 text-blue-600" />
                  <span>{city.city}</span>
                </h3>
                
                <div className="space-y-3">
                  {city.options.map((transport, i) => (
                    <div key={i} className="border border-gray-200 rounded-lg p-4">
                      <div className="flex justify-between items-start mb-2">
                        <h4 className="font-semibold text-gray-900">{transport.type}</h4>
                        <span className="bg-green-100 text-green-800 px-2 py-1 rounded text-sm font-medium">
                          {transport.price}
                        </span>
                      </div>
                      <p className="text-sm text-gray-600">{transport.info}</p>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Transport Tips */}
        <div className="bg-gradient-to-br from-blue-100 to-green-100 rounded-2xl p-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">
            Smart Travel Tips
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {tips.map((tip, index) => (
              <div key={index} className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300">
                <div className="flex items-center space-x-3 mb-3">
                  <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
                    <tip.icon className="w-4 h-4 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900">{tip.title}</h3>
                    <span className="text-xs bg-blue-100 text-blue-800 px-2 py-1 rounded-full">
                      {tip.category}
                    </span>
                  </div>
                </div>
                <p className="text-gray-700 text-sm">{tip.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Emergency Contacts */}
        <div className="mt-12 bg-red-50 border border-red-200 rounded-2xl p-8">
          <h2 className="text-2xl font-bold text-red-900 mb-4">
            Emergency Transport Information
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h3 className="font-semibold text-red-800 mb-2">Emergency Numbers</h3>
              <ul className="space-y-1 text-red-700">
                <li>• Police: 19</li>
                <li>• Medical Emergency: 15</li>
                <li>• Fire Department: 15</li>
                <li>• Tourist Police: 0537-20-46-18</li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold text-red-800 mb-2">Transport Helplines</h3>
              <ul className="space-y-1 text-red-700">
                <li>• ONCF (Trains): 080-020-40-40</li>
                <li>• CTM (Buses): 0522-54-10-10</li>
                <li>• Airport Info: 0522-53-90-40</li>
                <li>• Taxi Complaints: Contact local authorities</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Transport;