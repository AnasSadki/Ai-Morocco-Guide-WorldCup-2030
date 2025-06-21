import React, { useState } from 'react';
import { Send, MessageCircle, Bot, User, Lightbulb, Globe, Clock, Star, Crown } from 'lucide-react';

interface Message {
  id: number;
  text: string;
  sender: 'user' | 'assistant';
  timestamp: Date;
}

const AIAssistant = () => {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: 1,
      text: "مرحبا! أهلاً وسهلاً! Welcome to Morocco! 🦁 I'm your AI travel assistant for the World Cup 2030. I can help you with anything about Morocco, Portugal, Spain, and your World Cup experience. How can I assist you today?",
      sender: 'assistant',
      timestamp: new Date()
    }
  ]);
  const [inputText, setInputText] = useState('');
  const [isTyping, setIsTyping] = useState(false);

  const quickQuestions = [
    "How do I get from Casablanca to Marrakech?",
    "What should I eat in Morocco?",
    "Where can I buy World Cup tickets?",
    "What's the weather like in June 2030?",
    "How do I say 'thank you' in Arabic?",
    "What should I wear to visit a mosque?",
    "Best places to stay in Fez?",
    "How much should I tip in restaurants?"
  ];

  const handleSendMessage = async (text: string) => {
    if (!text.trim()) return;

    const userMessage: Message = {
      id: messages.length + 1,
      text: text,
      sender: 'user',
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMessage]);
    setInputText('');
    setIsTyping(true);

    // Simulate AI response
    setTimeout(() => {
      const responses = [
        "Great question! 🦁 For travel between Casablanca and Marrakech, I recommend the train - it's comfortable, affordable (around 100 MAD), and takes about 3 hours. The Al Boraq high-speed train doesn't cover this route yet, but the regular ONCF trains are reliable and scenic. Would you like specific departure times?",
        "Morocco offers incredible cuisine! 🦁 Must-try dishes include Tagine (slow-cooked stew), Couscous (national dish, traditionally served Fridays), Pastilla (sweet-savory pastry), and Harira soup. For street food, try Msemen (flaky pancakes) and fresh mint tea. Each region has specialties - what type of food interests you most?",
        "Official World Cup 2030 tickets will be available through FIFA's official website closer to the tournament. 🦁 Be cautious of unofficial sellers. Tickets typically go on sale about 18 months before the tournament. I'll keep you updated on official announcements. Are you interested in specific matches?",
        "June 2030 in Morocco will be warm but pleasant in most cities. 🦁 Expect 25-30°C (77-86°F) in coastal areas like Casablanca and Rabat, and hotter inland (30-35°C/86-95°F in Marrakech). Pack light, breathable clothing, sunscreen, and a hat. Perfect weather for the World Cup!",
        "In Arabic: 'Shukran' (شكراً) means 'thank you'. 🦁 In Moroccan Darija: 'Baraka Allahu fik' (for men) or 'Baraka Allahu fiki' (for women) means 'may God bless you' and is commonly used. You can also say 'Merci' as French is widely understood. Moroccans appreciate when visitors try local phrases!"
      ];
      
      const randomResponse = responses[Math.floor(Math.random() * responses.length)];
      
      const assistantMessage: Message = {
        id: messages.length + 2,
        text: randomResponse,
        sender: 'assistant',
        timestamp: new Date()
      };

      setMessages(prev => [...prev, assistantMessage]);
      setIsTyping(false);
    }, 2000);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    handleSendMessage(inputText);
  };

  const handleQuickQuestion = (question: string) => {
    handleSendMessage(question);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-white to-blue-50">
      {/* Hero Section */}
      <section 
        className="relative py-16 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.6)), url('/🔮 10 Mind-Blowing AI Workspace Secrets (2024 Guide).jpeg')`
        }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="flex justify-center items-center space-x-4 mb-6">
            <div className="relative">
              <Bot className="w-12 h-12 text-purple-400" />
              <Crown className="w-6 h-6 text-red-500 absolute -top-2 -right-2" />
            </div>
            <div className="text-3xl">🤖 💬 🧠</div>
          </div>
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
            AI Assistant 🦁
          </h1>
          <p className="text-xl text-gray-200 max-w-3xl mx-auto">
            Chat with your intelligent Morocco guide - available 24/7 in multiple languages
          </p>
        </div>
      </section>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Chat Interface */}
          <div className="lg:col-span-3">
            <div className="bg-white rounded-2xl shadow-xl overflow-hidden h-[600px] flex flex-col">
              {/* Chat Header */}
              <div className="bg-gradient-to-r from-purple-600 to-blue-600 p-4">
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center relative">
                    <Bot className="w-6 h-6 text-white" />
                    <Crown className="w-4 h-4 text-yellow-400 absolute -top-1 -right-1" />
                  </div>
                  <div>
                    <h2 className="text-lg font-semibold text-white">Morocco AI Guide 🦁</h2>
                    <div className="flex items-center space-x-2 text-white/80">
                      <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                      <span className="text-sm">Online & Ready to Help</span>
                    </div>
                  </div>
                  <div className="ml-auto flex items-center space-x-2">
                    <Globe className="w-5 h-5 text-white/80" />
                    <span className="text-sm text-white/80">🇲🇦 🇵🇹 🇪🇸</span>
                  </div>
                </div>
              </div>

              {/* Messages Area */}
              <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-gray-50">
                {messages.map((message) => (
                  <div
                    key={message.id}
                    className={`flex items-start space-x-3 ${
                      message.sender === 'user' ? 'flex-row-reverse space-x-reverse' : ''
                    }`}
                  >
                    <div className={`w-8 h-8 rounded-full flex items-center justify-center relative ${
                      message.sender === 'user' 
                        ? 'bg-blue-500' 
                        : 'bg-gradient-to-r from-purple-500 to-blue-500'
                    }`}>
                      {message.sender === 'user' ? (
                        <User className="w-5 h-5 text-white" />
                      ) : (
                        <>
                          <Bot className="w-5 h-5 text-white" />
                          <Crown className="w-3 h-3 text-yellow-400 absolute -top-1 -right-1" />
                        </>
                      )}
                    </div>
                    
                    <div className={`max-w-xs lg:max-w-md px-4 py-2 rounded-2xl ${
                      message.sender === 'user'
                        ? 'bg-blue-500 text-white ml-auto'
                        : 'bg-white shadow-md'
                    }`}>
                      <p className="text-sm">{message.text}</p>
                      <div className={`text-xs mt-1 ${
                        message.sender === 'user' ? 'text-blue-100' : 'text-gray-500'
                      }`}>
                        <Clock className="w-3 h-3 inline mr-1" />
                        {message.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                      </div>
                    </div>
                  </div>
                ))}
                
                {isTyping && (
                  <div className="flex items-start space-x-3">
                    <div className="w-8 h-8 rounded-full bg-gradient-to-r from-purple-500 to-blue-500 flex items-center justify-center relative">
                      <Bot className="w-5 h-5 text-white" />
                      <Crown className="w-3 h-3 text-yellow-400 absolute -top-1 -right-1" />
                    </div>
                    <div className="bg-white shadow-md px-4 py-2 rounded-2xl">
                      <div className="flex space-x-1">
                        <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"></div>
                        <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                        <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.4s' }}></div>
                      </div>
                    </div>
                  </div>
                )}
              </div>

              {/* Input Area */}
              <div className="p-4 bg-white border-t">
                <form onSubmit={handleSubmit} className="flex space-x-2">
                  <input
                    type="text"
                    value={inputText}
                    onChange={(e) => setInputText(e.target.value)}
                    placeholder="Ask me anything about Morocco, World Cup 2030, or travel tips... 🦁"
                    className="flex-1 p-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                    disabled={isTyping}
                  />
                  <button
                    type="submit"
                    disabled={!inputText.trim() || isTyping}
                    className="bg-gradient-to-r from-purple-600 to-blue-600 text-white p-3 rounded-xl hover:shadow-lg transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed relative"
                  >
                    <Send className="w-5 h-5" />
                    <Crown className="w-3 h-3 text-yellow-400 absolute -top-1 -right-1" />
                  </button>
                </form>
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Quick Questions */}
            <div className="bg-white rounded-2xl shadow-lg p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center space-x-2">
                <Lightbulb className="w-5 h-5 text-yellow-500" />
                <span>Quick Questions 🦁</span>
                <Crown className="w-4 h-4 text-purple-600" />
              </h3>
              
              <div className="space-y-2">
                {quickQuestions.map((question, index) => (
                  <button
                    key={index}
                    onClick={() => handleQuickQuestion(question)}
                    className="w-full text-left p-3 text-sm bg-gray-50 hover:bg-purple-50 hover:text-purple-700 rounded-lg transition-colors duration-200 border border-gray-200 hover:border-purple-300"
                    disabled={isTyping}
                  >
                    {question}
                  </button>
                ))}
              </div>
            </div>

            {/* Features */}
            <div className="bg-gradient-to-br from-purple-100 to-blue-100 rounded-2xl p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center space-x-2">
                <span>AI Features 🦁</span>
                <Crown className="w-4 h-4 text-purple-600" />
              </h3>
              
              <div className="space-y-3">
                {[
                  { icon: '🌍', text: 'Multilingual Support' },
                  { icon: '🕌', text: 'Cultural Knowledge' },
                  { icon: '⚽', text: 'World Cup Expert' },
                  { icon: '🗺️', text: 'Local Insights' },
                  { icon: '🍽️', text: 'Food Recommendations' },
                  { icon: '🚗', text: 'Transport Help' }
                ].map((feature, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <span className="text-xl">{feature.icon}</span>
                    <span className="text-sm text-gray-700">{feature.text}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Languages */}
            <div className="bg-white rounded-2xl shadow-lg p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center space-x-2">
                <span>Available Languages 🦁</span>
                <Crown className="w-4 h-4 text-purple-600" />
              </h3>
              
              <div className="grid grid-cols-2 gap-2">
                {[
                  { flag: '🇺🇸', lang: 'English' },
                  { flag: '🇫🇷', lang: 'Français' },
                  { flag: '🇸🇦', lang: 'العربية' },
                  { flag: '🇲🇦', lang: 'Darija' }
                ].map((language, index) => (
                  <div key={index} className="flex items-center space-x-2 p-2 bg-gray-50 rounded-lg">
                    <span className="text-lg">{language.flag}</span>
                    <span className="text-sm font-medium">{language.lang}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* AI Capabilities */}
        <div className="mt-12 bg-white rounded-2xl shadow-lg p-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center flex items-center justify-center space-x-2">
            <span>What I Can Help You With 🦁</span>
            <Crown className="w-6 h-6 text-purple-600" />
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                icon: MessageCircle,
                title: 'Travel Planning',
                description: 'Routes, schedules, bookings, and itineraries',
                color: 'from-blue-500 to-blue-600'
              },
              {
                icon: Star,
                title: 'Cultural Guidance',
                description: 'Customs, etiquette, traditions, and local insights',
                color: 'from-green-500 to-green-600'
              },
              {
                icon: Globe,
                title: 'Language Help',
                description: 'Translations, phrases, and communication tips',
                color: 'from-purple-500 to-purple-600'
              },
              {
                icon: Bot,
                title: 'Real-time Support',
                description: '24/7 assistance for any questions or emergencies',
                color: 'from-red-500 to-red-600'
              }
            ].map((capability, index) => (
              <div key={index} className="text-center">
                <div className={`w-16 h-16 bg-gradient-to-br ${capability.color} rounded-xl flex items-center justify-center mx-auto mb-4 relative`}>
                  <capability.icon className="w-8 h-8 text-white" />
                  <Crown className="w-4 h-4 text-yellow-400 absolute -top-1 -right-1" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{capability.title}</h3>
                <p className="text-gray-600 text-sm">{capability.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AIAssistant;