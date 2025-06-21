import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Home, Calendar, UtensilsCrossed, Car, MessageCircle, Globe, Crown } from 'lucide-react';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  const location = useLocation();

  const navItems = [
    { path: '/', icon: Home, label: 'Home' },
    { path: '/matches', icon: Calendar, label: 'Match Info' },
    { path: '/food-culture', icon: UtensilsCrossed, label: 'Food & Culture' },
    { path: '/transport', icon: Car, label: 'Transport' },
    { path: '/ai-assistant', icon: MessageCircle, label: 'AI Assistant' },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-red-50 via-white to-green-50">
      {/* Header */}
      <header className="bg-white/95 backdrop-blur-sm shadow-lg sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <Link to="/" className="flex items-center space-x-3 group">
              <div className="bg-gradient-to-r from-red-600 to-green-600 p-2 rounded-xl group-hover:shadow-lg transition-shadow relative">
                <div 
                  className="w-8 h-8 bg-cover bg-center rounded-lg"
                  style={{ backgroundImage: `url('/download (1).jpeg')` }}
                >
                  <Crown className="w-8 h-8 text-white opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>
              </div>
              <div>
                <h1 className="text-2xl font-bold bg-gradient-to-r from-red-600 via-blue-600 to-green-600 bg-clip-text text-transparent">
                  Morocco AI Guide
                </h1>
                <p className="text-sm text-gray-600">World Cup 2030 🦁</p>
              </div>
            </Link>
            
            <div className="flex items-center space-x-2">
              <div className="flex items-center space-x-1 bg-gray-100 rounded-full px-3 py-1">
                <Globe className="w-4 h-4 text-gray-600" />
                <span className="text-sm text-gray-700">🇲🇦 🇵🇹 🇪🇸</span>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Navigation */}
      <nav className="bg-white/90 backdrop-blur-sm shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-center space-x-1 py-2">
            {navItems.map(({ path, icon: Icon, label }) => (
              <Link
                key={path}
                to={path}
                className={`flex items-center space-x-2 px-4 py-2 rounded-lg transition-all duration-200 ${
                  location.pathname === path
                    ? 'bg-gradient-to-r from-red-600 to-green-600 text-white shadow-lg'
                    : 'text-gray-700 hover:bg-gray-100 hover:text-red-600'
                }`}
              >
                <Icon className="w-4 h-4" />
                <span className="text-sm font-medium hidden sm:block">{label}</span>
              </Link>
            ))}
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main className="flex-1">
        {children}
      </main>

      {/* Footer */}
      <footer className="bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <div className="flex items-center space-x-3 mb-4">
                <div 
                  className="w-10 h-10 bg-cover bg-center rounded-lg"
                  style={{ backgroundImage: `url('/download (1).jpeg')` }}
                ></div>
                <h3 className="text-lg font-semibold">Morocco AI Guide 🦁</h3>
              </div>
              <p className="text-gray-300 text-sm">
                Your intelligent companion for FIFA World Cup 2030 in Morocco, Portugal, and Spain.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Host Countries</h3>
              <div className="space-y-2">
                <div className="flex items-center space-x-2">
                  <span>🇲🇦</span>
                  <span className="text-gray-300">Morocco</span>
                </div>
                <div className="flex items-center space-x-2">
                  <span>🇵🇹</span>
                  <span className="text-gray-300">Portugal</span>
                </div>
                <div className="flex items-center space-x-2">
                  <span>🇪🇸</span>
                  <span className="text-gray-300">Spain</span>
                </div>
              </div>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Languages</h3>
              <p className="text-gray-300 text-sm">
                Available in English, French, Arabic, and Darija
              </p>
            </div>
          </div>
          <div className="border-t border-gray-700 mt-8 pt-8 text-center">
            <p className="text-gray-400 text-sm">
              © 2024 Morocco AI Guide 🦁. Built with ❤️ for World Cup 2030.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Layout;