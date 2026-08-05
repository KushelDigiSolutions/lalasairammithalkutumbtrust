import Image from "next/image";

export const metadata = {
  title: 'Donate | Lala Sai Ram',
  description: 'Support Lala Sai Ram through your generous donations.',
};

export default function Donate() {
  return (
    <div className="flex flex-col min-h-screen pb-20 bg-[#FFFDF8]">
      <div className="relative h-[60vh] md:h-[85vh] w-full flex-shrink-0 flex items-center justify-center overflow-hidden border-b border-saffron/20">
        <Image 
          src="https://res.cloudinary.com/hne4dpfq/image/upload/v1785841893/ChatGPT_Image_Aug_4_2026_04_40_01_PM_b7sldt.png" 
          alt="Donate to Lala Sai Ram Banner" 
          fill 
          className="object-cover object-bottom" 
          unoptimized 
          priority
        />
        <div className="absolute inset-0 bg-black/50"></div>
        <div className="relative z-10 text-center px-4 w-full">
          <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4 drop-shadow-md">Make a Donation</h1>
          <div className="w-16 md:w-24 h-1 md:h-1.5 bg-gradient-to-r from-amber-400 to-orange-500 mx-auto rounded-full mb-4 md:mb-6"></div>
          <p className="text-white/90 max-w-2xl mx-auto text-base sm:text-lg drop-shadow">Your generous contributions help us maintain the mandir, organize festivals, and support our community service initiatives.</p>
        </div>
      </div>

      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 mt-10 md:mt-16 w-full">
        <div className="bg-white p-6 md:p-12 rounded-3xl shadow-xl border border-saffron/20 text-center">
          <span className="text-5xl md:text-6xl mb-4 md:mb-6 inline-block">🙏</span>
          <h2 className="font-serif text-2xl md:text-3xl font-bold text-red-800 mb-3 md:mb-4">Support Our Mission</h2>
          <p className="text-gray-600 mb-6 md:mb-8 text-sm md:text-base leading-relaxed">
            We are currently setting up our secure online payment gateway. In the meantime, you can make donations via Bank Transfer or by visiting the Mandir office in person.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6 md:mb-8">
            <div className="bg-gray-50 p-5 md:p-6 rounded-xl text-left border border-gray-200">
              <h3 className="font-bold text-gray-800 mb-4 border-b pb-2 text-base md:text-lg">Bank Transfer</h3>
              <div className="grid grid-cols-1 sm:grid-cols-[140px_1fr] gap-y-1 sm:gap-y-3 gap-x-2 text-gray-600 text-sm md:text-base">
                <div className="font-semibold text-gray-800 mt-2 sm:mt-0">Account Name:</div>
                <div className="sm:font-medium"> Lala sairam mittal kutumb trust</div>
                
                <div className="font-semibold text-gray-800 mt-2 sm:mt-0">Bank:</div>
                <div className="sm:font-medium">Indusind bank </div>
                
                <div className="font-semibold text-gray-800 mt-2 sm:mt-0">Account Number:</div>
                <div className="sm:font-medium"> 201037179617</div>
                
                <div className="font-semibold text-gray-800 mt-2 sm:mt-0">IFSC Code:</div>
                <div className="sm:font-medium">INDB0000410</div>
              </div>
            </div>

            <div className="bg-gray-50 p-5 md:p-6 rounded-xl text-center border border-gray-200 flex flex-col items-center justify-center">
              <h3 className="font-bold text-gray-800 mb-4 border-b pb-2 text-base md:text-lg w-full text-left">Scan & Pay (UPI)</h3>
              <div className="relative w-32 h-32 md:w-40 md:h-40 bg-white rounded-xl overflow-hidden shadow-md mb-3">
  <Image
    src="https://res.cloudinary.com/hne4dpfq/image/upload/v1785839279/Screenshot_2026-08-04_155730_xpikfk.png"
    alt="Temple UPI QR Code"
    fill
    className="object-contain p-2"
  />
</div>
              <p className="text-xs md:text-sm text-gray-600 font-bold">UPI ID: pos.5364711@indus</p>
            </div>
          </div>
          
          <p className="text-xs md:text-sm text-gray-500 italic">
            * All donations are tax-exempted under Section 80G of the Income Tax Act.
          </p>
        </div>
      </div>

      {/* Impact Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-16 md:mt-24 w-full mb-10">
        <h2 className="font-serif text-2xl md:text-4xl font-bold text-red-800 mb-10 text-center break-words">Your Impact</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          <div className="bg-white p-6 sm:p-8 rounded-3xl border border-amber-100 shadow-md text-center hover:-translate-y-2 transition-transform duration-300 cursor-pointer">
            <div className="w-16 h-16 sm:w-20 sm:h-20 bg-saffron/10 rounded-full flex items-center justify-center mx-auto mb-4 sm:mb-6">
              <span className="text-3xl sm:text-4xl">🍲</span>
            </div>
            <h3 className="text-lg sm:text-xl font-bold text-gray-800 mb-3 break-words">40% Anna Daan</h3>
            <p className="text-gray-600 text-sm md:text-base leading-relaxed break-words">Providing free, nutritious meals daily to devotees, sadhus, and the needy in our community.</p>
          </div>
          
          <div className="bg-white p-6 sm:p-8 rounded-3xl border border-amber-100 shadow-md text-center hover:-translate-y-2 transition-transform duration-300 cursor-pointer">
            <div className="w-16 h-16 sm:w-20 sm:h-20 bg-saffron/10 rounded-full flex items-center justify-center mx-auto mb-4 sm:mb-6">
              <span className="text-3xl sm:text-4xl">🏛️</span>
            </div>
            <h3 className="text-lg sm:text-xl font-bold text-gray-800 mb-3 break-words">30% Temple Maintenance</h3>
            <p className="text-gray-600 text-sm md:text-base leading-relaxed break-words">Upkeep of the temple premises, daily floral decorations, and ensuring a clean, peaceful environment.</p>
          </div>
          
          <div className="bg-white p-6 sm:p-8 rounded-3xl border border-amber-100 shadow-md text-center hover:-translate-y-2 transition-transform duration-300 cursor-pointer">
            <div className="w-16 h-16 sm:w-20 sm:h-20 bg-saffron/10 rounded-full flex items-center justify-center mx-auto mb-4 sm:mb-6">
              <span className="text-3xl sm:text-4xl">🪔</span>
            </div>
            <h3 className="text-lg sm:text-xl font-bold text-gray-800 mb-3 break-words">30% Festivals & Pujas</h3>
            <p className="text-gray-600 text-sm md:text-base leading-relaxed break-words">Organizing grand celebrations for Ram Navami, Diwali, and conducting daily Vedic rituals.</p>
          </div>
        </div>
      </div>
    </div>
  );
}
