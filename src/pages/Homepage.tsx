import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, MessageCircle, Calendar, UtensilsCrossed, Car, Globe, Trophy, Star, Users, MapPin } from 'lucide-react';

const Homepage = () => {
  const features = [
    {
      icon: MessageCircle,
      title: 'Real-time AI Answers',
      description: 'Get instant answers to your travel questions 24/7',
      color: 'from-blue-500 to-blue-600'
    },
    {
      icon: Globe,
      title: 'Multilingual Support',
      description: 'Available in English, French, Arabic, and Darija',
      color: 'from-green-500 to-green-600'
    },
    {
      icon: MapPin,
      title: 'Local Expertise',
      description: 'Cultural knowledge, traditions, and local insights',
      color: 'from-red-500 to-red-600'
    },
    {
      icon: Trophy,
      title: 'World Cup Ready',
      description: 'Specialized for World Cup 2030 travelers',
      color: 'from-yellow-500 to-orange-600'
    }
  ];

  const quickActions = [
    { 
      to: '/matches', 
      icon: Calendar, 
      title: 'Match Info', 
      description: 'Schedules & venues',
      color: 'bg-gradient-to-br from-red-500 to-red-600'
    },
    { 
      to: '/food-culture', 
      icon: UtensilsCrossed, 
      title: 'Eat & Explore', 
      description: 'Food & culture guide',
      color: 'bg-gradient-to-br from-green-500 to-green-600'
    },
    { 
      to: '/transport', 
      icon: Car, 
      title: 'Transport', 
      description: 'Navigate with ease',
      color: 'bg-gradient-to-br from-blue-500 to-blue-600'
    },
    { 
      to: '/ai-assistant', 
      icon: MessageCircle, 
      title: 'Ask Morocco AI', 
      description: 'Chat with your guide',
      color: 'bg-gradient-to-br from-purple-500 to-purple-600'
    }
  ];

  return (
    <div className="space-y-0">
      {/* Hero Section */}
      <section 
        className="relative min-h-screen flex items-center justify-center bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `linear-gradient(rgba(0,0,0,0.4), rgba(0,0,0,0.4)), url('/Exploring the 2030 World Cup Stadiums in Morocco, Portugal, and Spain.jpg')`
        }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="space-y-8">
            <div className="space-y-4">
              <h1 className="text-5xl md:text-7xl font-bold text-white leading-tight">
                Welcome to
                <span className="block bg-gradient-to-r from-yellow-400 via-red-500 to-green-500 bg-clip-text text-transparent">
                  Morocco AI Guide
                </span>
              </h1>
              
              <p className="text-xl md:text-2xl text-gray-200 max-w-3xl mx-auto leading-relaxed">
                Your Smart Companion for <strong>FIFA World Cup 2030</strong>
              </p>
              
              <p className="text-lg text-gray-300 max-w-2xl mx-auto">
                Explore Morocco, Portugal, and Spain like never before with your intelligent local friend — available 24/7 in your pocket.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link
                to="/ai-assistant"
                className="bg-gradient-to-r from-red-600 to-green-600 text-white px-8 py-4 rounded-xl font-semibold text-lg shadow-2xl hover:shadow-3xl transform hover:scale-105 transition-all duration-300 flex items-center space-x-2"
              >
                <MessageCircle className="w-5 h-5" />
                <span>Start Chatting with AI</span>
                <ArrowRight className="w-5 h-5" />
              </Link>
              
              <Link
                to="/matches"
                className="bg-white/20 backdrop-blur-sm text-white border-2 border-white/30 px-8 py-4 rounded-xl font-semibold text-lg hover:bg-white/30 transition-all duration-300 flex items-center space-x-2"
              >
                <Calendar className="w-5 h-5" />
                <span>View Matches</span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Why Choose Morocco AI Guide?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Built with cutting-edge AI technology to make your World Cup experience seamless and memorable
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100"
              >
                <div className={`w-16 h-16 bg-gradient-to-br ${feature.color} rounded-xl flex items-center justify-center mb-6`}>
                  <feature.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Quick Actions */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Start Your Journey
            </h2>
            <p className="text-xl text-gray-600">
              Choose a category or ask Morocco AI anything
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {quickActions.map((action, index) => (
              <Link
                key={index}
                to={action.to}
                className="group relative overflow-hidden rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105"
              >
                <div className={`${action.color} p-8 text-white h-full flex flex-col justify-between min-h-[200px]`}>
                  <div>
                    <action.icon className="w-12 h-12 mb-4 group-hover:scale-110 transition-transform duration-300" />
                    <h3 className="text-2xl font-bold mb-2">{action.title}</h3>
                    <p className="text-white/90">{action.description}</p>
                  </div>
                  <ArrowRight className="w-6 h-6 self-end group-hover:translate-x-2 transition-transform duration-300" />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Sample Questions */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">
            Ask Morocco AI Anything
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {[
              "How do I get from Tangier to Marrakech by train?",
              "Where can I buy official World Cup tickets?",
              "What food should I try in Fez?",
              "Is it respectful to wear this outfit in a mosque?",
              "What's the weather like during the World Cup?",
              "How do I say 'thank you' in Darija?"
            ].map((question, index) => (
              <Link
                key={index}
                to="/ai-assistant"
                className="bg-gray-50 hover:bg-gray-100 p-4 rounded-xl text-left transition-colors duration-200 group border border-gray-200 hover:border-red-300"
              >
                <p className="text-gray-700 group-hover:text-red-600 transition-colors duration-200">"{question}"</p>
              </Link>
            ))}
          </div>

          <div className="mt-8">
            <Link
              to="/ai-assistant"
              className="inline-flex items-center space-x-2 bg-gradient-to-r from-red-600 to-green-600 text-white px-8 py-4 rounded-xl font-semibold text-lg shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <MessageCircle className="w-5 h-5" />
              <span>Start Chatting Now</span>
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Homepage;