import Image from "next/image";
import Link from "next/link";
export const metadata = {
  title: 'About Us | Lala Sai Ram',
  description: 'Learn about the history, significance, and mission of Lala Sai Ram.',
};

export default function About() {
  return (
    <div className="flex flex-col min-h-screen pb-20">
      {/* Header Banner */}
      <div className="relative h-[60vh] md:h-[85vh] w-full flex-shrink-0 flex items-center justify-center overflow-hidden border-b border-saffron/20">
        <Image
  src="https://res.cloudinary.com/hne4dpfq/image/upload/v1785849348/ChatGPT_Image_Aug_4_2026_06_45_32_PM_efi8j6.png"
  alt="About Lala Sai Ram Banner"
  fill
  className="object-cover object-center "
  priority
/>
        <div className="absolute inset-0 bg-black/50"></div>
        <div className="relative z-10 text-center px-4 w-full">
          <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4 drop-shadow-md">About Lala Sai Ram</h1>
          <div className="w-16 md:w-24 h-1 md:h-1.5 bg-gradient-to-r from-amber-400 to-orange-500 mx-auto rounded-full"></div>
        </div>
      </div>

      {/* Content Section */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 mt-8 md:mt-12 space-y-8 md:space-y-12 text-gray-700 leading-relaxed text-base md:text-lg">
        <section>
          <h2 className="font-serif text-2xl md:text-3xl font-bold text-red-800 mb-6 md:mb-8 text-center break-words">Our Journey</h2>
          {/* Added ml-8 and pl-6 for mobile so absolute -left-9 (36px) doesn't overflow */}
          <div className="relative border-l-2 border-saffron/30 pl-6 ml-8 md:ml-0 md:pl-0 md:border-none space-y-8 md:space-y-0">
            {/* Desktop Center Line */}
            <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 w-0.5 h-full bg-saffron/30 top-0"></div>
            
            {/* Timeline Item 1 */}
            <div className="relative md:flex items-center justify-between group">
              <div className="md:w-5/12 text-left md:text-right pr-0 md:pr-8 mb-4 md:mb-0">
                <h3 className="font-bold text-lg sm:text-xl text-gray-800 break-words">1780: The Inception</h3>
                <p className="text-gray-600 mt-2 text-sm md:text-base break-words">Established over 250 years ago by the Lala Sai Ram family as the sacred Char Pita Shiya Temple.</p>
              </div>
              <div className="absolute top-1 -left-[37px] md:static md:w-2/12 flex justify-center">
                <div className="w-6 h-6 bg-saffron rounded-full border-4 border-white shadow-md group-hover:scale-125 transition-transform duration-300"></div>
              </div>
              <div className="hidden md:block md:w-5/12 pl-8"></div>
            </div>

            {/* Timeline Item 2 */}
            <div className="relative md:flex items-center justify-between group mt-0 md:mt-12">
              <div className="hidden md:block md:w-5/12 pr-8"></div>
              <div className="absolute top-1 -left-[37px] md:static md:w-2/12 flex justify-center">
                <div className="w-6 h-6 bg-saffron rounded-full border-4 border-white shadow-md group-hover:scale-125 transition-transform duration-300"></div>
              </div>
              <div className="md:w-5/12 text-left pl-0 md:pl-8 mb-4 md:mb-0">
                <h3 className="font-bold text-lg sm:text-xl text-gray-800 break-words">1960: Mandir Expansion</h3>
                <p className="text-gray-600 mt-2 text-sm md:text-base break-words">The main hall was constructed to accommodate the growing number of devotees during festivals.</p>
              </div>
            </div>

            {/* Timeline Item 3 */}
            <div className="relative md:flex items-center justify-between group mt-0 md:mt-12">
              <div className="md:w-5/12 text-left md:text-right pr-0 md:pr-8 mb-4 md:mb-0">
                <h3 className="font-bold text-lg sm:text-xl text-gray-800 break-words">
  2025: Modernization
</h3>
<p className="text-gray-600 mt-2 text-sm md:text-base break-words">
  Started building Hanuman Mandir, Radha Krishna Mandir, and Mata Bhagwati Mandir to expand the temple complex.
</p>
              </div>
              <div className="absolute top-1 -left-[37px] md:static md:w-2/12 flex justify-center">
                <div className="w-6 h-6 bg-saffron rounded-full border-4 border-white shadow-md group-hover:scale-125 transition-transform duration-300"></div>
              </div>
              <div className="hidden md:block md:w-5/12 pl-8"></div>
            </div>
          </div>
        </section>

        <section>
          <h2 className="font-serif text-2xl md:text-3xl font-bold text-red-800 mb-3 md:mb-4">Spiritual Significance</h2>
          <p>
            Dedicated to Lord Ram, the embodiment of dharma (righteousness) and virtue, the mandir serves as a constant reminder of the ideal way of life. The serene atmosphere, the chanting of Vedic mantras, and the scent of incense create an environment conducive to meditation and spiritual awakening.
          </p>
        </section>

        <section>
          <h2 className="font-serif text-2xl md:text-3xl font-bold text-red-800 mb-3 md:mb-4">Our Mission</h2>
          <ul className="list-disc pl-5 md:pl-6 space-y-2 mt-3 md:mt-4">
            <li>To promote spiritual awareness and the teachings of Sanatana Dharma.</li>
            <li>To serve the community through various charitable initiatives, including food donation and education.</li>
            <li>To preserve and celebrate our rich cultural heritage through festivals and religious ceremonies.</li>
            <li>To provide a peaceful environment for meditation, prayer, and inner reflection.</li>
          </ul>
        </section>
        <section>
          <h2 className="font-serif text-2xl md:text-3xl font-bold text-red-800 mb-3 md:mb-4">Temple Architecture</h2>
          <div className="bg-saffron/5 p-6 md:p-8 rounded-2xl border border-saffron/20 shadow-sm">
            <p className="mb-4">
              Our temple showcases traditional Nagara style architecture, characterized by its towering shikhara (spire) and intricately carved pillars. Every stone tells a story from the epic Ramayana, hand-carved by master artisans from across the country.
            </p>
            <p>
              The main sanctum sanctorum (Garbhagriha) is designed to align with the sun's rays on Ram Navami, illuminating the deity's idol perfectly at noon.
            </p>
          </div>
        </section>

        <section>
  <h2 className="font-serif text-2xl md:text-3xl font-bold text-red-800 mb-3 md:mb-4">
    Temple Trust & Leadership
  </h2>

  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6 mt-4 md:mt-6">
    {/* President */}
    <div className="bg-white p-5 md:p-6 rounded-xl shadow-sm border border-gray-100 flex items-center gap-4 hover:shadow-md transition-shadow cursor-pointer">
      <div className="w-14 h-14 md:w-16 md:h-16 flex-shrink-0 bg-saffron text-white rounded-full flex items-center justify-center font-bold text-lg md:text-xl shadow-inner">
        AM
      </div>
      <div>
        <h3 className="font-bold text-gray-800 text-base md:text-lg leading-tight">
          Anil Mittal
        </h3>
        <p className="text-saffron font-medium text-sm md:text-base mt-1">
          President
        </p>
      </div>
    </div>

    {/* Secretary */}
    <div className="bg-white p-5 md:p-6 rounded-xl shadow-sm border border-gray-100 flex items-center gap-4 hover:shadow-md transition-shadow cursor-pointer">
      <div className="w-14 h-14 md:w-16 md:h-16 flex-shrink-0 bg-saffron text-white rounded-full flex items-center justify-center font-bold text-lg md:text-xl shadow-inner">
        SM
      </div>
      <div>
        <h3 className="font-bold text-gray-800 text-base md:text-lg leading-tight">
          Sital Mittal
        </h3>
        <p className="text-saffron font-medium text-sm md:text-base mt-1">
          Secretary
        </p>
      </div>
    </div>

    {/* Treasurer */}
    <div className="bg-white p-5 md:p-6 rounded-xl shadow-sm border border-gray-100 flex items-center gap-4 hover:shadow-md transition-shadow cursor-pointer">
      <div className="w-14 h-14 md:w-16 md:h-16 flex-shrink-0 bg-saffron text-white rounded-full flex items-center justify-center font-bold text-lg md:text-xl shadow-inner">
        PM
      </div>
      <div>
        <h3 className="font-bold text-gray-800 text-base md:text-lg leading-tight">
          Pawan Kumar Mittal
        </h3>
        <p className="text-saffron font-medium text-sm md:text-base mt-1">
          Treasurer
        </p>
      </div>
    </div>
  </div>
</section>

        {/* Volunteer & Seva Section */}
        {/* <section className="mt-16 bg-gradient-to-br from-amber-50 to-orange-50 p-6 md:p-10 rounded-3xl border border-amber-100 shadow-inner overflow-hidden">
          <div className="flex flex-col md:flex-row gap-6 sm:gap-8 items-center">
            <div className="w-full md:w-2/3">
              <h2 className="font-serif text-2xl md:text-3xl font-bold text-red-800 mb-4 flex items-center gap-2 break-words">
                <span className="text-saffron flex-shrink-0">🙏</span> Volunteer & Seva
              </h2>
              <p className="text-gray-700 leading-relaxed text-sm md:text-base mb-6 break-words">
                "Seva is the very essence of devotion." Join our dedicated team of volunteers and experience the joy of selfless service. From helping in the Anna Daan kitchen to assisting during mega festivals, every contribution matters.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 text-xs sm:text-sm font-semibold text-gray-800 mb-6">
                <div className="flex items-center gap-2 break-words"><span className="w-2 h-2 rounded-full bg-green-500 flex-shrink-0"></span> Temple Cleaning</div>
                <div className="flex items-center gap-2 break-words"><span className="w-2 h-2 rounded-full bg-blue-500 flex-shrink-0"></span> Anna Daan (Kitchen)</div>
                <div className="flex items-center gap-2 break-words"><span className="w-2 h-2 rounded-full bg-purple-500 flex-shrink-0"></span> Event Management</div>
                <div className="flex items-center gap-2 break-words"><span className="w-2 h-2 rounded-full bg-red-500 flex-shrink-0"></span> Crowd Control</div>
              </div>
            </div>
            <div className="w-full md:w-1/3 text-center">
              <Link href="/contact" className="inline-block text-center bg-saffron text-white px-6 sm:px-8 py-3 sm:py-4 rounded-full font-bold hover:bg-red-800 transition-colors shadow-md hover:shadow-lg w-full text-sm sm:text-base break-words">
                Register as Volunteer
              </Link>
            </div>
          </div>
        </section> */}
      </div>
    </div>
  );
}
