import React, { useState } from 'react';
import { Calendar, MapPin, Clock, Users, Trophy, Ticket, Filter, Crown } from 'lucide-react';

const MatchInfo = () => {
  const [selectedCountry, setSelectedCountry] = useState('all');
  const [selectedStage, setSelectedStage] = useState('all');

  const matches = [
    {
      id: 1,
      date: '2030-06-15',
      time: '18:00',
      team1: 'Morocco',
      team2: 'Portugal',
      venue: 'Hassan II Stadium',
      city: 'Casablanca',
      country: 'Morocco',
      stage: 'Group Stage',
      flag1: '🇲🇦',
      flag2: '🇵🇹'
    },
    {
      id: 2,
      date: '2030-06-16',
      time: '21:00',
      team1: 'Spain',
      team2: 'Brazil',
      venue: 'Santiago Bernabéu',
      city: 'Madrid',
      country: 'Spain',
      stage: 'Group Stage',
      flag1: '🇪🇸',
      flag2: '🇧🇷'
    },
    {
      id: 3,
      date: '2030-06-18',
      time: '16:00',
      team1: 'France',
      team2: 'Argentina',
      venue: 'Estádio da Luz',
      city: 'Lisbon',
      country: 'Portugal',
      stage: 'Group Stage',
      flag1: '🇫🇷',
      flag2: '🇦🇷'
    },
    {
      id: 4,
      date: '2030-07-05',
      time: '20:00',
      team1: 'TBD',
      team2: 'TBD',
      venue: 'Prince Mouley Abdellah Stadium',
      city: 'Rabat',
      country: 'Morocco',
      stage: 'Quarter Final',
      flag1: '🏆',
      flag2: '🏆'
    },
    {
      id: 5,
      date: '2030-07-14',
      time: '20:00',
      team1: 'TBD',
      team2: 'TBD',
      venue: 'Camp Nou',
      city: 'Barcelona',
      country: 'Spain',
      stage: 'Final',
      flag1: '🏆',
      flag2: '🏆'
    }
  ];

  const filteredMatches = matches.filter(match => {
    const countryMatch = selectedCountry === 'all' || match.country === selectedCountry;
    const stageMatch = selectedStage === 'all' || match.stage === selectedStage;
    return countryMatch && stageMatch;
  });

  const stadiums = [
    {
      name: 'Hassan II Stadium',
      city: 'Casablanca, Morocco',
      capacity: '93,000',
      image: 'https://images.pexels.com/photos/1618269/pexels-photo-1618269.jpeg?auto=compress&cs=tinysrgb&w=800&h=400&fit=crop'
    },
    {
      name: 'Santiago Bernabéu',
      city: 'Madrid, Spain',
      capacity: '81,044',
      image: 'https://images.pexels.com/photos/1884574/pexels-photo-1884574.jpeg?auto=compress&cs=tinysrgb&w=800&h=400&fit=crop'
    },
    {
      name: 'Estádio da Luz',
      city: 'Lisbon, Portugal',
      capacity: '65,647',
      image: 'https://images.pexels.com/photos/1171084/pexels-photo-1171084.jpeg?auto=compress&cs=tinysrgb&w=800&h=400&fit=crop'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-red-50 via-white to-green-50">
      {/* Hero Section */}
      <section 
        className="relative py-20 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.6)), url('/download.jpeg')`
        }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="flex justify-center items-center space-x-4 mb-6">
            <div className="relative">
              <Trophy className="w-12 h-12 text-yellow-400" />
              <Crown className="w-6 h-6 text-red-500 absolute -top-2 -right-2" />
            </div>
          </div>
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
            FIFA World Cup 2030
          </h1>
          <p className="text-xl text-gray-200 max-w-3xl mx-auto">
            Stay updated with match schedules, venues, and tournament information across Morocco, Portugal, and Spain
          </p>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Filters */}
        <div className="bg-white rounded-2xl shadow-lg p-6 mb-8">
          <div className="flex items-center space-x-4 mb-4">
            <Filter className="w-5 h-5 text-gray-600" />
            <h2 className="text-xl font-semibold text-gray-900">Filter Matches</h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Country</label>
              <select
                value={selectedCountry}
                onChange={(e) => setSelectedCountry(e.target.value)}
                className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent"
              >
                <option value="all">All Countries</option>
                <option value="Morocco">Morocco</option>
                <option value="Portugal">Portugal</option>
                <option value="Spain">Spain</option>
              </select>
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Tournament Stage</label>
              <select
                value={selectedStage}
                onChange={(e) => setSelectedStage(e.target.value)}
                className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent"
              >
                <option value="all">All Stages</option>
                <option value="Group Stage">Group Stage</option>
                <option value="Round of 16">Round of 16</option>
                <option value="Quarter Final">Quarter Final</option>
                <option value="Semi Final">Semi Final</option>
                <option value="Final">Final</option>
              </select>
            </div>
          </div>
        </div>

        {/* Match Cards */}
        <div className="space-y-6 mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Upcoming Matches</h2>
          
          {filteredMatches.map((match) => (
            <div key={match.id} className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden">
              <div className="bg-gradient-to-r from-red-600 via-blue-600 to-green-600 p-4">
                <div className="flex items-center justify-between text-white">
                  <div className="flex items-center space-x-2">
                    <Calendar className="w-5 h-5" />
                    <span className="font-medium">{new Date(match.date).toLocaleDateString('en-US', { 
                      weekday: 'long', 
                      year: 'numeric', 
                      month: 'long', 
                      day: 'numeric' 
                    })}</span>
                  </div>
                  <div className="bg-white/20 backdrop-blur-sm px-3 py-1 rounded-full flex items-center space-x-2">
                    <Crown className="w-4 h-4" />
                    <span className="text-sm font-medium">{match.stage}</span>
                  </div>
                </div>
              </div>
              
              <div className="p-6">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 items-center">
                  {/* Teams */}
                  <div className="lg:col-span-2">
                    <div className="flex items-center justify-center space-x-8">
                      <div className="text-center">
                        <div className="text-4xl mb-2">{match.flag1}</div>
                        <h3 className="text-xl font-bold text-gray-900">{match.team1}</h3>
                      </div>
                      
                      <div className="text-center">
                        <div className="text-2xl font-bold text-gray-400 mb-2">VS</div>
                        <div className="flex items-center space-x-2 text-gray-600">
                          <Clock className="w-4 h-4" />
                          <span>{match.time}</span>
                        </div>
                      </div>
                      
                      <div className="text-center">
                        <div className="text-4xl mb-2">{match.flag2}</div>
                        <h3 className="text-xl font-bold text-gray-900">{match.team2}</h3>
                      </div>
                    </div>
                  </div>
                  
                  {/* Venue Info */}
                  <div className="text-center lg:text-right space-y-2">
                    <div className="flex items-center justify-center lg:justify-end space-x-2">
                      <MapPin className="w-5 h-5 text-red-600" />
                      <span className="font-semibold text-gray-900">{match.venue}</span>
                    </div>
                    <p className="text-gray-600">{match.city}</p>
                    
                    <button className="bg-gradient-to-r from-red-600 to-green-600 text-white px-6 py-2 rounded-lg hover:shadow-lg transition-all duration-300 flex items-center space-x-2 mx-auto lg:ml-auto lg:mr-0">
                      <Ticket className="w-4 h-4" />
                      <span>Get Tickets</span>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Stadiums Section */}
        <div className="mt-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Iconic Stadiums</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {stadiums.map((stadium, index) => (
              <div key={index} className="bg-white rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
                <div 
                  className="h-48 bg-cover bg-center relative"
                  style={{ backgroundImage: `url(${stadium.image})` }}
                >
                  <div className="absolute inset-0 bg-black/40"></div>
                  <div className="absolute bottom-4 left-4 text-white">
                    <div className="flex items-center space-x-2">
                      <Users className="w-5 h-5" />
                      <span className="font-semibold">{stadium.capacity} capacity</span>
                    </div>
                  </div>
                  <div className="absolute top-4 right-4">
                    <Crown className="w-6 h-6 text-yellow-400" />
                  </div>
                </div>
                
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{stadium.name}</h3>
                  <p className="text-gray-600 flex items-center space-x-2">
                    <MapPin className="w-4 h-4" />
                    <span>{stadium.city}</span>
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default MatchInfo;