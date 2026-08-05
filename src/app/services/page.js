import Image from "next/image";
import Link from 'next/link';
import PujaForm from './PujaForm';

export const metadata = {
  title: 'Services | Lala Sai Ram',
  description: 'Explore the daily darshan timings and various pujas offered at Lala Sai Ram.',
};

export default function Services() {
  const pujas = [
    { title: "Mangala Aarti", time: "6:30 AM", desc: "The first aarti of the day, awakening the deity." },
    { title: "Shringar Aarti", time: "8:00 AM", desc: "Aarti performed after adorning the deity with new clothes and ornaments." },
    { title: "Rajbhog Aarti", time: "12:00 PM", desc: "Midday aarti offering the main meal to the deity." },
    { title: "Sandhya Aarti", time: "7:00 PM", desc: "The mesmerizing evening aarti attended by hundreds of devotees." },
    { title: "Shayan Aarti", time: "9:00 PM", desc: "The final aarti before the deity rests for the night." },
  ];

  const specialServices = [
    { name: "Vahan Puja", desc: "Blessing for new vehicles to ensure safe journeys." },
    { name: "Namakaran", desc: "Naming ceremony for newborns seeking divine blessings." },
    { name: "Annaprashan", desc: "First solid food feeding ceremony for infants." },
    { name: "Satyanarayan Katha", desc: "Special prayer for peace, prosperity, and happiness in the family." },
  ];

  return (
    <div className="flex flex-col min-h-screen bg-[#FFFDF8] pb-20">
      {/* Header Banner */}
      <div className="relative h-[60vh] md:h-[85vh] w-full flex-shrink-0 flex items-center justify-center overflow-hidden border-b border-saffron/20">
        <Image 
          src="https://res.cloudinary.com/hne4dpfq/image/upload/v1785841893/ChatGPT_Image_Aug_4_2026_04_40_01_PM_b7sldt.png" 
          alt="Services & Pujas Banner" 
          fill 
          className="object-cover" 
          unoptimized 
          priority
        />
        <div className="absolute inset-0 bg-black/50"></div>
        <div className="relative z-10 text-center px-4 w-full">
          <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4 drop-shadow-md">Services</h1>
          <div className="w-16 md:w-24 h-1 md:h-1.5 bg-gradient-to-r from-amber-400 to-orange-500 mx-auto rounded-full"></div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-8 md:mt-12 w-full">
        <div className="max-w-3xl mx-auto">
  <h2 className="font-serif text-2xl md:text-3xl font-bold text-red-800 mb-6 md:mb-8 flex items-center gap-3">
    <span className="text-saffron">🕒</span> Daily Darshan Timings
  </h2>

  <div className="space-y-4">
    {pujas.map((puja, index) => (
      <div
        key={index}
        className="bg-white p-5 md:p-6 rounded-xl shadow-md border border-saffron/10 hover:shadow-lg transition-shadow"
      >
        <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center mb-2 gap-2">
          <h3 className="text-lg md:text-xl font-bold text-gray-800">
            {puja.title}
          </h3>

          <span className="bg-saffron/10 text-saffron px-3 py-1 rounded-full font-semibold text-sm w-fit">
            {puja.time}
          </span>
        </div>

        <p className="text-gray-600 text-sm md:text-base">
          {puja.desc}
        </p>
      </div>
    ))}
  </div>
</div>
      </div>

      
      {/* <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 mt-16 md:mt-20 w-full mb-10 overflow-hidden">
        <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl font-bold text-red-800 mb-6 md:mb-8 text-center break-words">Suggested Dakshina & Offerings</h2>
        <div className="bg-white rounded-2xl shadow-md border border-gray-100 overflow-hidden w-full">
          
          <div className="hidden sm:block overflow-x-auto w-full">
            <table className="w-full text-left border-collapse min-w-[600px]">
              <thead>
                <tr className="bg-gradient-to-r from-amber-50 to-orange-50 border-b border-amber-200">
                  <th className="p-4 md:p-5 font-bold text-gray-800 text-sm sm:text-base">Puja Type</th>
                  <th className="p-4 md:p-5 font-bold text-gray-800 text-sm sm:text-base">Suggested Dakshina (₹)</th>
                  <th className="p-4 md:p-5 font-bold text-gray-800 text-sm sm:text-base">Required Samagri</th>
                </tr>
              </thead>
              <tbody className="text-gray-600 text-sm md:text-base">
                <tr className="border-b border-gray-100 hover:bg-gray-50 transition-colors cursor-pointer">
                  <td className="p-4 md:p-5 font-semibold text-gray-700">Satyanarayan Katha</td>
                  <td className="p-4 md:p-5">1,100 - 2,100</td>
                  <td className="p-4 md:p-5">Fruits, Flowers, Prasad (Panjiri), Coconut</td>
                </tr>
                <tr className="border-b border-gray-100 hover:bg-gray-50 transition-colors cursor-pointer">
                  <td className="p-4 md:p-5 font-semibold text-gray-700">Rudrabhishek</td>
                  <td className="p-4 md:p-5">2,100 - 5,100</td>
                  <td className="p-4 md:p-5">Milk, Yogurt, Honey, Ghee, Sugar, Bael Leaves</td>
                </tr>
                <tr className="border-b border-gray-100 hover:bg-gray-50 transition-colors cursor-pointer">
                  <td className="p-4 md:p-5 font-semibold text-gray-700">Vehicle Puja</td>
                  <td className="p-4 md:p-5">501 - 1,100</td>
                  <td className="p-4 md:p-5">Garland, Coconut, Sweets, Camphor</td>
                </tr>
              </tbody>
            </table>
          </div>

          
          <div className="sm:hidden flex flex-col p-4 gap-4">
            <div className="bg-gray-50 rounded-xl p-4 border border-gray-100 hover:border-amber-200 transition-colors cursor-pointer">
              <h3 className="font-bold text-gray-800 text-lg mb-2">Satyanarayan Katha</h3>
              <p className="text-gray-600 text-sm mb-1.5"><span className="font-semibold text-gray-800">Dakshina (₹):</span> 1,100 - 2,100</p>
              <p className="text-gray-600 text-sm"><span className="font-semibold text-gray-800">Samagri:</span> Fruits, Flowers, Prasad (Panjiri), Coconut</p>
            </div>
            <div className="bg-gray-50 rounded-xl p-4 border border-gray-100 hover:border-amber-200 transition-colors cursor-pointer">
              <h3 className="font-bold text-gray-800 text-lg mb-2">Rudrabhishek</h3>
              <p className="text-gray-600 text-sm mb-1.5"><span className="font-semibold text-gray-800">Dakshina (₹):</span> 2,100 - 5,100</p>
              <p className="text-gray-600 text-sm"><span className="font-semibold text-gray-800">Samagri:</span> Milk, Yogurt, Honey, Ghee, Sugar, Bael Leaves</p>
            </div>
            <div className="bg-gray-50 rounded-xl p-4 border border-gray-100 hover:border-amber-200 transition-colors cursor-pointer">
              <h3 className="font-bold text-gray-800 text-lg mb-2">Vehicle Puja</h3>
              <p className="text-gray-600 text-sm mb-1.5"><span className="font-semibold text-gray-800">Dakshina (₹):</span> 501 - 1,100</p>
              <p className="text-gray-600 text-sm"><span className="font-semibold text-gray-800">Samagri:</span> Garland, Coconut, Sweets, Camphor</p>
            </div>
          </div>
          <div className="bg-saffron/5 p-4 text-xs sm:text-sm text-gray-500 italic text-center break-words">
            * Dakshina is completely voluntary. The above are only standard suggestions. Samagri can also be purchased directly from the temple counter.
          </div>
        </div>
      </div> */}
    </div>
  );
}
