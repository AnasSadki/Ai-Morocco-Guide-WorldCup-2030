import React from 'react';

const FoodCulture = () => {
  const images = [
    '/Moroccan food(Harira ).jpg',
    '/Wᴇᴀʟᴛʜ ᴏғ Mᴏʀᴏᴄᴄᴏ (@WealthofMorocco) on X (1).jpg',
    '/Moroccan Chicken Tagine.jpg',
    '/Tanjia marrakchia 🇲🇦.jpg',
    '/Eat delicious l7m b br9o9 lham b barkok Moroccan wedding Moroccan food djaj mhamar chikren meat Morocco Moroccan culture Moroccan kitchen cuisine maroc.jpg'
  ];

  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {images.map((image, index) => (
            <div key={index} className="aspect-square overflow-hidden rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300">
              <img
                src={image}
                alt={`Moroccan cuisine ${index + 1}`}
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FoodCulture;