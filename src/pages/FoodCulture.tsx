import React, { useState } from 'react';
import { UtensilsCrossed, Heart, MapPin, Star, Clock, Lightbulb, Crown } from 'lucide-react';

const FoodCulture = () => {
  const [activeCategory, setActiveCategory] = useState('dishes');

  const dishes = [
    {
      name: 'Tagine',
      description: 'The Arabic طاجين (ṭajīn) is derived from Ancient Greek τάγηνον (tágēnon) \'frying-pan, saucepan\'. According to some sources, the origin of the word \'tagine\' is Persian, pronounced Tahchin.',
      image: '/téléchargement (2).jpg',
      difficulty: 'Traditional',
      time: '2-3 hours',
      ingredients: ['Lamb or chicken', 'Vegetables', 'Preserved lemons', 'Olives', 'Spices']
    },
    {
      name: 'Rfissa',
      description: 'Rfissa (Arabic: رفيسة) is a Moroccan dish that is served during various traditional celebrations. It traditionally includes chicken, lentils, fenugreek seeds (helba in Arabic), msemmen, meloui or day-old bread, and the spice blend ras el-hanout.',
      image: '/téléchargement (1).jpg',
      difficulty: 'Celebratory',
      time: '2-3 hours',
      ingredients: ['Chicken', 'Lentils', 'Fenugreek seeds', 'Msemmen bread', 'Ras el-hanout']
    },
    {
      name: 'Couscous',
      description: 'Couscous (Arabic: كُسْكُس, romanized: kuskus) is a traditional North African dish of small steamed granules of rolled semolina that is often served with a stew spooned on top. The national dish of Morocco, traditionally served on Fridays.',
      image: '/téléchargement.jpg',
      difficulty: 'Essential',
      time: '1-2 hours',
      ingredients: ['Semolina grains', 'Seven vegetables', 'Meat or chicken', 'Rich broth']
    },
    {
      name: 'Méchoui',
      description: 'Le méchoui est un mets culinaire d\'Afrique du Nord composé le plus souvent d\'un mouton ou d\'un agneau entier rôti à la broche, sur les braises d\'un feu de bois. Le mot vient du verbe arabe « šawa » (chawa) qui signifie « griller », « rôtir ».',
      image: '/téléchargement (6).jpg',
      difficulty: 'Festive',
      time: '4-6 hours',
      ingredients: ['Whole lamb or sheep', 'Wood fire', 'Traditional spices', 'Salt', 'Aromatic herbs']
    },
    {
      name: 'Pastilla',
      description: 'Pastilla (Arabic: بسطيلة, romanized: basṭīla, also called North African pie) is a meat or seafood pie in Maghrebi cuisine made with warqa dough (ورقة), which is similar to filo. It is a specialty of Morocco, Algeria, and Tunisia.',
      image: '/images.webp',
      difficulty: 'Special Occasion',
      time: '3-4 hours',
      ingredients: ['Warqa pastry', 'Chicken or pigeon', 'Almonds', 'Eggs', 'Cinnamon', 'Sugar']
    },
    {
      name: 'Harira',
      description: 'Hearty soup traditionally eaten to break the fast during Ramadan',
      image: 'https://images.pexels.com/photos/8992557/pexels-photo-8992557.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
      difficulty: 'Comfort Food',
      time: '45 minutes',
      ingredients: ['Tomatoes', 'Lentils', 'Chickpeas', 'Lamb', 'Fresh herbs', 'Spices']
    }
  ];

  const traditions = [
    {
      title: 'Tea Culture',
      description: 'Moroccan mint tea (Atay) is a symbol of hospitality and friendship',
      icon: '🫖',
      details: [
        'Always served in small glasses',
        'Poured from a height to create foam',
        'Traditionally served three times',
        'Refusing tea can be considered rude'
      ]
    },
    {
      title: 'Dining Etiquette',
      description: 'Moroccan meals are communal experiences with specific customs',
      icon: '🍽️',
      details: [
        'Wash hands before and after eating',
        'Eat with your right hand only',
        'Share from communal dishes',
        'Leave a little food to show satisfaction'
      ]
    },
    {
      title: 'Religious Observances',
      description: 'Understanding Islamic customs enhances your cultural experience',
      icon: '🕌',
      details: [
        'Dress modestly when visiting mosques',
        'Remove shoes before entering',
        'Ramadan affects restaurant hours',
        'Friday prayers are important (Jumu\'ah)'
      ]
    },
    {
      title: 'Berber Heritage',
      description: 'The indigenous Amazigh culture is integral to Moroccan identity',
      icon: '🏔️',
      details: [
        'Rich oral tradition and music',
        'Beautiful handicrafts and carpets',
        'Mountain village hospitality',
        'Ancient agricultural practices'
      ]
    }
  ];

  const restaurants = [
    {
      name: 'La Mamounia Restaurant',
      city: 'Marrakech',
      type: 'Fine Dining',
      specialty: 'Royal Moroccan Cuisine',
      image: 'https://images.pexels.com/photos/3556892/pexels-photo-3556892.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
      rating: 5
    },
    {
      name: 'Café Clock',
      city: 'Fez',
      type: 'Casual',
      specialty: 'Traditional & Modern Fusion',
      image: 'https://images.pexels.com/photos/1581384/pexels-photo-1581384.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
      rating: 4
    },
    {
      name: 'Rick\'s Café',
      city: 'Casablanca',
      type: 'Themed',
      specialty: 'International & Moroccan',
      image: 'https://images.pexels.com/photos/941861/pexels-photo-941861.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
      rating: 4
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 via-white to-red-50">
      {/* Hero Section */}
      <section 
        className="relative py-20 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url('/A Moroccan Feast Awaits_ Journey Through Authentic Flavors at Bab Al Qasr Hotel\'s Artisan Kitchen.jpeg')`
        }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="flex justify-center items-center space-x-4 mb-6">
            <div className="relative">
              <UtensilsCrossed className="w-12 h-12 text-orange-400" />
              <Crown className="w-6 h-6 text-red-500 absolute -top-2 -right-2" />
            </div>
            <div className="text-3xl">🇲🇦 🍽️ 🫖</div>
          </div>
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
            Food & Culture 🦁
          </h1>
          <p className="text-xl text-gray-200 max-w-3xl mx-auto">
            Experience the rich flavors and traditions of Morocco, from authentic cuisine to cultural heritage
          </p>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Category Navigation */}
        <div className="bg-white rounded-2xl shadow-lg p-2 mb-8">
          <div className="flex flex-wrap gap-2">
            {[
              { id: 'dishes', label: 'Traditional Dishes 🦁', icon: UtensilsCrossed },
              { id: 'culture', label: 'Cultural Traditions', icon: Heart },
              { id: 'restaurants', label: 'Recommended Places', icon: MapPin }
            ].map(({ id, label, icon: Icon }) => (
              <button
                key={id}
                onClick={() => setActiveCategory(id)}
                className={`flex items-center space-x-2 px-6 py-3 rounded-xl font-medium transition-all duration-300 ${
                  activeCategory === id
                    ? 'bg-gradient-to-r from-orange-500 to-red-500 text-white shadow-lg'
                    : 'text-gray-700 hover:bg-gray-100'
                }`}
              >
                <Icon className="w-5 h-5" />
                <span>{label}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Traditional Dishes */}
        {activeCategory === 'dishes' && (
          <div className="space-y-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Must-Try Moroccan Dishes 🦁</h2>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {dishes.map((dish, index) => (
                <div key={index} className="bg-white rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-300">
                  <div 
                    className="h-64 bg-cover bg-center relative"
                    style={{ backgroundImage: `url(${dish.image})` }}
                  >
                    <div className="absolute inset-0 bg-black/30"></div>
                    <div className="absolute top-4 right-4">
                      <div className="bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full flex items-center space-x-2">
                        <Crown className="w-4 h-4 text-orange-600" />
                        <span className="text-sm font-medium text-gray-800">{dish.difficulty}</span>
                      </div>
                    </div>
                  </div>
                  
                  <div className="p-6">
                    <h3 className="text-2xl font-bold text-gray-900 mb-3">{dish.name}</h3>
                    <p className="text-gray-600 mb-4 leading-relaxed">{dish.description}</p>
                    
                    <div className="flex items-center space-x-4 mb-4">
                      <div className="flex items-center space-x-2 text-gray-500">
                        <Clock className="w-4 h-4" />
                        <span className="text-sm">{dish.time}</span>
                      </div>
                    </div>
                    
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-2">Key Ingredients:</h4>
                      <div className="flex flex-wrap gap-2">
                        {dish.ingredients.map((ingredient, i) => (
                          <span key={i} className="bg-orange-100 text-orange-800 px-3 py-1 rounded-full text-sm">
                            {ingredient}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Cultural Traditions */}
        {activeCategory === 'culture' && (
          <div className="space-y-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Cultural Traditions & Etiquette 🦁</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {traditions.map((tradition, index) => (
                <div key={index} className="bg-white rounded-2xl shadow-xl p-8 hover:shadow-2xl transition-all duration-300">
                  <div className="flex items-center space-x-4 mb-6">
                    <div className="text-4xl">{tradition.icon}</div>
                    <div>
                      <h3 className="text-xl font-bold text-gray-900 flex items-center space-x-2">
                        <span>{tradition.title}</span>
                        <Crown className="w-5 h-5 text-orange-600" />
                      </h3>
                      <p className="text-gray-600">{tradition.description}</p>
                    </div>
                  </div>
                  
                  <div className="space-y-3">
                    {tradition.details.map((detail, i) => (
                      <div key={i} className="flex items-start space-x-3">
                        <Lightbulb className="w-5 h-5 text-orange-500 mt-0.5 flex-shrink-0" />
                        <span className="text-gray-700">{detail}</span>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Recommended Restaurants */}
        {activeCategory === 'restaurants' && (
          <div className="space-y-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Recommended Dining Experiences 🦁</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {restaurants.map((restaurant, index) => (
                <div key={index} className="bg-white rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
                  <div 
                    className="h-48 bg-cover bg-center relative"
                    style={{ backgroundImage: `url(${restaurant.image})` }}
                  >
                    <div className="absolute inset-0 bg-black/30"></div>
                    <div className="absolute bottom-4 left-4">
                      <div className="flex items-center space-x-1">
                        {[...Array(restaurant.rating)].map((_, i) => (
                          <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                        ))}
                      </div>
                    </div>
                    <div className="absolute top-4 right-4">
                      <div className="bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full flex items-center space-x-2">
                        <Crown className="w-4 h-4 text-orange-600" />
                        <span className="text-sm font-medium text-gray-800">{restaurant.type}</span>
                      </div>
                    </div>
                  </div>
                  
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-gray-900 mb-2">{restaurant.name}</h3>
                    <div className="flex items-center space-x-2 text-gray-600 mb-2">
                      <MapPin className="w-4 h-4" />
                      <span>{restaurant.city}</span>
                    </div>
                    <p className="text-gray-700 font-medium">{restaurant.specialty}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Cultural Tips */}
        <div className="mt-16 bg-gradient-to-br from-orange-100 to-red-100 rounded-2xl p-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">Quick Cultural Tips for World Cup Visitors 🦁</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                title: 'Greeting',
                tip: 'Say "As-salamu alaykum" or "Ahlan wa sahlan" for a warm greeting',
                icon: '👋'
              },
              {
                title: 'Tipping',
                tip: '10-15% is customary in restaurants, small tips for services',
                icon: '💰'
              },
              {
                title: 'Dress Code',
                tip: 'Dress modestly, especially when visiting religious sites',
                icon: '👔'
              },
              {
                title: 'Bargaining',
                tip: 'Expected in souks and markets, start at 30% of asking price',
                icon: '🤝'
              },
              {
                title: 'Photography',
                tip: 'Ask permission before photographing people',
                icon: '📸'
              },
              {
                title: 'Language',
                tip: 'Arabic and Berber are official, French widely spoken',
                icon: '🗣️'
              }
            ].map((item, index) => (
              <div key={index} className="bg-white rounded-xl p-6 shadow-lg">
                <div className="flex items-center space-x-3 mb-3">
                  <span className="text-2xl">{item.icon}</span>
                  <h3 className="font-bold text-gray-900 flex items-center space-x-2">
                    <span>{item.title}</span>
                    <Crown className="w-4 h-4 text-orange-600" />
                  </h3>
                </div>
                <p className="text-gray-700">{item.tip}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default FoodCulture;