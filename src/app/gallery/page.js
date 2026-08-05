"use client";
import Image from 'next/image';
import { useState } from 'react';

export default function Gallery() {
  const [activeTab, setActiveTab] = useState('All');
  const [selectedImage, setSelectedImage] = useState(null);

  const images = [
    { src: 'https://res.cloudinary.com/hne4dpfq/image/upload/v1785832089/WhatsApp_Image_2026-08-03_at_6.32.35_PM_o4af87.jpg', alt: 'Mandir Exterior', category: 'Architecture' },
    { src: 'https://res.cloudinary.com/hne4dpfq/image/upload/v1785843526/ChatGPT_Image_Aug_4_2026_05_08_28_PM_iemx4m.png', alt: 'Puja Thali', category: 'Daily Aarti' },
    { src: 'https://res.cloudinary.com/hne4dpfq/image/upload/v1785843830/ChatGPT_Image_Aug_4_2026_05_11_51_PM_sjp56x.png', alt: 'Festival Celebration', category: 'Festivals' },
    { src: 'https://res.cloudinary.com/hne4dpfq/image/upload/v1785844191/ChatGPT_Image_Aug_4_2026_05_19_29_PM_fz2mcl.png', alt: 'Aarti Ceremony', category: 'Daily Aarti' },
    { src: 'https://res.cloudinary.com/hne4dpfq/image/upload/v1785846368/ChatGPT_Image_Aug_4_2026_05_55_43_PM_v6z3ff.png', alt: 'Temple Architecture', category: 'Architecture' },
    { src: 'https://res.cloudinary.com/hne4dpfq/image/upload/v1785845909/ChatGPT_Image_Aug_4_2026_05_38_11_PM_kucyil.png', alt: 'Devotees Praying', category: 'Daily Aarti' },
  ];

  const categories = ['All', 'Architecture', 'Daily Aarti', 'Festivals'];
  const filteredImages = activeTab === 'All' ? images : images.filter(img => img.category === activeTab);

  const openLightbox = (index) => setSelectedImage(index);
  const closeLightbox = () => setSelectedImage(null);
  const nextImage = (e) => {
    e.stopPropagation();
    setSelectedImage((prev) => (prev + 1) % filteredImages.length);
  };
  const prevImage = (e) => {
    e.stopPropagation();
    setSelectedImage((prev) => (prev - 1 + filteredImages.length) % filteredImages.length);
  };

  return (
    <div className="flex flex-col min-h-screen pb-20">
      {/* Header Banner */}
      <div className="relative h-[60vh] md:h-[85vh] w-full flex-shrink-0 flex items-center justify-center overflow-hidden border-b border-saffron/20">
        <Image 
          src="https://res.cloudinary.com/hne4dpfq/image/upload/v1785841893/ChatGPT_Image_Aug_4_2026_04_40_01_PM_b7sldt.png" 
          alt="Temple Gallery Banner" 
          fill 
          className="object-cover" 
          unoptimized 
          priority
        />
        <div className="absolute inset-0 bg-black/50"></div>
        <div className="relative z-10 text-center px-4 w-full">
          <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4 drop-shadow-md">Temple Gallery</h1>
          <div className="w-16 md:w-24 h-1 md:h-1.5 bg-gradient-to-r from-amber-400 to-orange-500 mx-auto rounded-full mb-4 md:mb-6"></div>
          <p className="text-white text-base sm:text-lg md:text-xl drop-shadow-md max-w-2xl mx-auto">Glimpses of divine moments, majestic architecture, and vibrant festivals at Lala Sai Ram.</p>
        </div>
      </div>

      {/* Introduction Section */}
      <section className="w-full bg-white py-12 md:py-20 border-b border-amber-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="text-amber-500 font-bold tracking-wider uppercase text-xs md:text-sm mb-3 md:mb-4 block">Visual Journey</span>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-red-800 font-bold mb-4 md:mb-6">Experience the Divine Grace</h2>
          <div className="w-16 md:w-24 h-1 md:h-1.5 bg-gradient-to-r from-amber-400 to-orange-500 mx-auto mb-6 md:mb-8 rounded-full"></div>
          <p className="text-lg md:text-xl text-gray-600 leading-relaxed">
            Take a visual tour through the sacred premises of Lala Sai Ram. From the magnificent architecture to the soul-stirring daily aartis and vibrant festival celebrations, explore the moments that make our temple a haven of peace and devotion.
          </p>
        </div>
      </section>

      {/* Filter Tabs */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-10 md:mt-16 w-full flex flex-wrap justify-center gap-3">
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => setActiveTab(category)}
            className={`px-6 py-2.5 rounded-full font-bold text-sm md:text-base transition-all duration-300 shadow-sm ${
              activeTab === category 
                ? 'bg-saffron text-white shadow-md scale-105' 
                : 'bg-white text-gray-600 hover:bg-amber-50 border border-gray-200 hover:border-amber-200'
            }`}
          >
            {category}
          </button>
        ))}
      </div>

      {/* Gallery Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-10 w-full">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
          {filteredImages.map((img, index) => (
            <div 
              key={index} 
              onClick={() => openLightbox(index)}
              className="bg-white rounded-2xl shadow-md overflow-hidden group cursor-pointer border border-amber-50 hover:shadow-xl hover:shadow-amber-100 hover:-translate-y-2 transition-all duration-300"
            >
              <div className="relative aspect-[4/3] sm:aspect-square overflow-hidden">
                <Image
                  src={img.src}
                  alt={img.alt}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                  unoptimized
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300 flex items-center justify-center">
                  <span className="text-white opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-300 text-3xl drop-shadow-lg">⤢</span>
                </div>
              </div>
              <div className="p-4 md:p-5 text-center bg-white flex justify-between items-center">
                <h3 className="text-red-800 font-serif text-lg md:text-xl font-bold">{img.alt}</h3>
                <span className="text-xs font-semibold text-amber-600 bg-amber-50 px-2 py-1 rounded-full">{img.category}</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox Modal */}
      {selectedImage !== null && (
        <div 
          className="fixed inset-0 z-[100] bg-black/95 flex items-center justify-center backdrop-blur-sm"
          onClick={closeLightbox}
        >
          <button 
            className="absolute top-6 right-6 text-white hover:text-amber-500 transition-colors z-50 text-4xl"
            onClick={closeLightbox}
          >
            &times;
          </button>
          
          <button 
            className="absolute left-4 md:left-10 text-white hover:text-amber-500 transition-colors z-50 text-5xl bg-black/50 w-14 h-14 rounded-full flex items-center justify-center pb-2 hover:bg-black/80"
            onClick={prevImage}
          >
            &lsaquo;
          </button>

          <div className="relative w-[90vw] h-[70vh] md:w-[80vw] md:h-[85vh]">
            <Image
              src={filteredImages[selectedImage].src}
              alt={filteredImages[selectedImage].alt}
              fill
              className="object-contain"
              unoptimized
            />
            <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/80 to-transparent text-center">
              <p className="text-white font-serif text-xl md:text-2xl">{filteredImages[selectedImage].alt}</p>
            </div>
          </div>

          <button 
            className="absolute right-4 md:right-10 text-white hover:text-amber-500 transition-colors z-50 text-5xl bg-black/50 w-14 h-14 rounded-full flex items-center justify-center pb-2 hover:bg-black/80"
            onClick={nextImage}
          >
            &rsaquo;
          </button>
        </div>
      )}
    </div>
  );
}
