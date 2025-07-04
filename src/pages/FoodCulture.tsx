import React from 'react';

const FoodCulture = () => {
  const images = [
    '/Moroccan food(Harira ).jpg',
    '/Wᴇᴀʟᴛʜ ᴏғ Mᴏʀᴏᴄᴄᴏ (@WealthofMorocco) on X (1).jpg',
    '/Moroccan Chicken Tagine.jpg',
    '/Tanjia marrakchia 🇲🇦.jpg',
    '/Eat delicious l7m b br9o9 lham b barkok Moroccan wedding Moroccan food djaj mhamar chikren meat Morocco Moroccan culture Moroccan kitchen cuisine maroc.jpg',
    '/files_5636413-1751293467039-téléchargement (8).jpg',
    '/files_5636413-1751293438858-𝐌𝐨𝐫𝐨𝐜𝐜𝐚𝐧 𝐬𝐰𝐞𝐞𝐭•🇲🇦.jpg',
    '/files_5636413-1751293445781-Sellou _ Kookmutsjes.jpg',
    '/files_5636413-1751293450873-Wᴇᴀʟᴛʜ ᴏғ Mᴏʀᴏᴄᴄᴏ (@WealthofMorocco) on X.jpg',
    '/files_5636413-1751293292550-Moroccan Recipes ebook available 👍👌.jpg',
    '/files_5636413-1751293312740-بسطيلة الدجاج المغربية.jpg',
    '/files_5636413-1751293328742-Moroccan couscous.jpg',
    '/files_5636413-1751293349835-81 Traditional Christmas Foods To Feast On.jpg',
    '/files_5636413-1751294418975-Moroccan tea.jpg',
    '/files_5636413-1751294421930-Abundance.jpg',
    '/files_5636413-1751294424918-téléchargement.jpg'
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