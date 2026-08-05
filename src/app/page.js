import Image from "next/image";
import Link from "next/link";
import NewsletterForm from './NewsletterForm';
export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-[#FAFAF8] w-full overflow-hidden">
      {/* Hero Section */}
      <section className="relative min-h-[85vh] w-full flex-shrink-0 flex items-center justify-center py-20 overflow-hidden">
        <Image
          src="https://res.cloudinary.com/hne4dpfq/image/upload/v1785835711/ChatGPT_Image_Aug_4_2026_02_57_58_PM_dn1zce.png"
          alt="Lala Sai Ram at Sunset"
          fill
          className="object-cover object-center"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-white/30 via-transparent to-black/60"></div>
        <div className="relative z-10 flex flex-col items-center justify-center text-center px-4 w-full">
          <div className="bg-white/20 backdrop-blur-xs p-6 sm:p-8 md:p-14 rounded-3xl border border-white/40 shadow-2xl max-w-4xl w-full mx-auto max-w-[1000px]">
           <h1 className="font-serif font-bold leading-tight text-white drop-shadow-[0_6px_18px_rgba(0,0,0,0.85)]
text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl">
  Welcome to
  <br />
  <span className="bg-gradient-to-r from-amber-300 via-yellow-300 to-orange-400 bg-clip-text text-transparent">
    Dudheshwar Mahadev
  </span>
  <br />
  <span className="text-white">
    Mandir
  </span>
</h1>
            <p className="mt-6 text-lg sm:text-xl md:text-2xl text-gray-100 font-medium max-w-4xl mx-auto leading-relaxed drop-shadow-lg">
  Experience the divine blessings of Lord Shiva in a place of peace,
  devotion, and timeless tradition. Join us for daily aarti, festivals,
  and community service.
</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center w-full">
              {/* <Link href="/services" className="bg-saffron text-white px-6 sm:px-8 py-3.5 rounded-full font-bold hover:bg-red-800 transition-colors shadow-md hover:shadow-lg w-full sm:w-auto text-sm sm:text-base">
                View Darshan Timings
              </Link> */}
              <Link href="/donate" className="bg-white text-red-800 hover:bg-red-800 hover:text-white px-6 sm:px-8 py-3.5 rounded-full font-bold transition-colors shadow-md hover:shadow-lg w-full sm:w-auto text-sm sm:text-base">
                Make a Donation
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Intro Section - Fixed Structure */}
      <section className="w-full bg-white py-16 md:py-24 border-b border-amber-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-red-800 font-bold mb-6">A Place of Devotion & Peace</h2>
          <div className="w-24 h-1.5 bg-gradient-to-r from-amber-400 to-orange-500 mx-auto mb-8 rounded-full"></div>
          <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            The Lala Sai Ram has been a beacon of spirituality and community service for decades. We welcome devotees from all walks of life to come and experience the divine presence. Our temple offers a serene environment for prayer, meditation, and spiritual growth.
          </p>
        </div>
      </section>

      {/* Daily Quote Section */}
      <section className="w-full bg-saffron/5 py-12 md:py-16 border-b border-amber-100 overflow-hidden">
        <div className="max-w-4xl mx-auto px-6 sm:px-8 lg:px-8 text-center relative">
          <span className="text-5xl md:text-6xl text-amber-300/50 absolute top-0 left-2 md:left-10 font-serif leading-none">"</span>
          <p className="font-serif text-lg sm:text-xl md:text-3xl text-red-800 leading-relaxed italic relative z-10 font-medium break-words px-4">
            He who has no attachments can really love others, for his love is pure and divine.
          </p>
          <span className="text-5xl md:text-6xl text-amber-300/50 absolute bottom-0 right-2 md:right-10 font-serif rotate-180 leading-none">"</span>
          <p className="mt-6 md:mt-8 text-amber-700 font-bold tracking-widest uppercase text-xs sm:text-sm md:text-base break-words">- Bhagavad Gita</p>
        </div>
      </section>

      {/* Highlights Section - Fixed Structure */}
      <section className="w-full bg-gradient-to-b from-[#FFF8F0] to-[#FFF3E0] py-16 md:py-24 border-b border-amber-100">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

    <div className="flex justify-center">
      <div className="bg-white rounded-3xl shadow-xl hover:shadow-amber-100 hover:-translate-y-2 transition-all duration-500 overflow-hidden border border-amber-100 max-w-5xl w-full lg:flex group">

        {/* Image */}
        <div className="relative w-full lg:w-1/2 h-72 lg:h-auto overflow-hidden">
          <Image
            src="/puja.png"
            alt="Daily Aarti"
            fill
            className="object-cover group-hover:scale-110 transition-transform duration-700"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent"></div>

          <div className="absolute bottom-6 left-6">
            <span className="bg-amber-500 text-white px-4 py-1 rounded-full text-sm font-semibold shadow-lg">
              Every Day
            </span>
          </div>
        </div>

        {/* Content */}
        <div className="lg:w-1/2 p-8 lg:p-12 flex flex-col justify-center">

          <span className="text-amber-600 font-semibold uppercase tracking-widest text-sm">
            Temple Ritual
          </span>

          <h3 className="mt-3 text-3xl lg:text-4xl font-serif font-bold text-red-800">
            Daily Aarti
          </h3>

          <p className="mt-6 text-gray-600 leading-8 text-lg">
            Join us every morning and evening for the sacred Aarti and immerse
            yourself in divine chants, spiritual energy, and peaceful
            surroundings. Experience devotion that brings inner peace and
            positivity to your life.
          </p>

          <div className="mt-8 flex flex-wrap gap-4">

            <Link
              href="/services"
              className="inline-flex items-center gap-2 bg-amber-500 hover:bg-red-700 text-white px-6 py-3 rounded-full font-semibold transition-all duration-300 shadow-lg hover:shadow-xl"
            >
              Learn More →
            </Link>

            <Link
              href="/contact"
              className="inline-flex items-center gap-2 border-2 border-amber-500 text-amber-600 hover:bg-amber-500 hover:text-white px-6 py-3 rounded-full font-semibold transition-all duration-300"
            >
              Contact
            </Link>

          </div>

        </div>

      </div>
    </div>

  </div>
</section>

      {/* Daily Timings Section */}
      <section className="w-full py-12 sm:py-16 md:py-24 bg-gradient-to-br from-red-900 to-red-800 text-white border-b border-amber-200 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10 md:mb-16">
            <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold mb-4 md:mb-6 break-words">Daily Timings & Schedule</h2>
            <div className="w-24 h-1.5 bg-gradient-to-r from-amber-400 to-orange-500 mx-auto rounded-full mb-6"></div>
            <p className="text-red-100 text-base sm:text-lg md:text-xl max-w-2xl mx-auto break-words">
              Join us in our daily rituals and find peace in the divine routine of Lala Sai Ram.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {/* Morning */}
            <div className="bg-red-950/40 border border-red-800/50 p-6 md:p-8 rounded-3xl backdrop-blur-sm hover:bg-red-950/60 transition-colors shadow-xl cursor-pointer">
              <div className="flex items-center gap-4 mb-6 border-b border-red-800/50 pb-4">
                <span className="text-4xl">🌅</span>
                <h3 className="font-serif text-2xl font-bold text-amber-400">Morning</h3>
              </div>
              <ul className="space-y-4 text-red-50 text-sm md:text-base">
                <li className="flex justify-between items-center">
                  <span>Temple Opens</span>
                  <span className="font-bold font-mono text-amber-200">06:00 AM</span>
                </li>
                <li className="flex justify-between items-center">
                  <span>Mangala Aarti</span>
                  <span className="font-bold font-mono text-amber-200">06:30 AM</span>
                </li>
                <li className="flex justify-between items-center">
                  <span>Shringar & Darshan</span>
                  <span className="font-bold font-mono text-amber-200">08:00 AM</span>
                </li>
                <li className="flex justify-between items-center">
                  <span>Rajbhog Aarti</span>
                  <span className="font-bold font-mono text-amber-200">12:00 PM</span>
                </li>
              </ul>
            </div>

            {/* Afternoon */}
            <div className="bg-red-950/40 border border-red-800/50 p-6 md:p-8 rounded-3xl backdrop-blur-sm hover:bg-red-950/60 transition-colors shadow-xl cursor-pointer">
              <div className="flex items-center gap-4 mb-6 border-b border-red-800/50 pb-4">
                <span className="text-4xl">☀️</span>
                <h3 className="font-serif text-2xl font-bold text-amber-400">Afternoon</h3>
              </div>
              <ul className="space-y-4 text-red-50 text-sm md:text-base">
                <li className="flex justify-between items-center">
                  <span>Temple Closes</span>
                  <span className="font-bold font-mono text-amber-200">01:00 PM</span>
                </li>
                <li className="flex justify-between items-center">
                  <span>Rest Period</span>
                  <span className="font-bold font-mono text-amber-200">1 PM - 4 PM</span>
                </li>
                <li className="flex justify-between items-center">
                  <span>Temple Reopens</span>
                  <span className="font-bold font-mono text-amber-200">04:00 PM</span>
                </li>
                <li className="flex justify-between items-center">
                  <span>Evening Darshan</span>
                  <span className="font-bold font-mono text-amber-200">04:30 PM</span>
                </li>
              </ul>
            </div>

            {/* Evening */}
            <div className="bg-red-950/40 border border-red-800/50 p-6 md:p-8 rounded-3xl backdrop-blur-sm hover:bg-red-950/60 transition-colors shadow-xl cursor-pointer">
              <div className="flex items-center gap-4 mb-6 border-b border-red-800/50 pb-4">
                <span className="text-4xl">🌙</span>
                <h3 className="font-serif text-2xl font-bold text-amber-400">Evening</h3>
              </div>
              <ul className="space-y-4 text-red-50 text-sm md:text-base">
                <li className="flex justify-between items-center">
                  <span>Sandhya Aarti</span>
                  <span className="font-bold font-mono text-amber-200">07:00 PM</span>
                </li>
                <li className="flex justify-between items-center">
                  <span>Bhajan Kirtan</span>
                  <span className="font-bold font-mono text-amber-200">07:45 PM</span>
                </li>
                <li className="flex justify-between items-center">
                  <span>Shayan Aarti</span>
                  <span className="font-bold font-mono text-amber-200">08:30 PM</span>
                </li>
                <li className="flex justify-between items-center">
                  <span>Temple Closes</span>
                  <span className="font-bold font-mono text-amber-200">10:00 PM</span>
                </li>
              </ul>
            </div>
          </div>
          
          <div className="mt-10 text-center">
            <p className="text-red-200/80 text-xs sm:text-sm italic">
              * Timings may vary slightly during special festivals and eclipses (Grahan).
            </p>
          </div>
        </div>
      </section>

      {/* Upcoming Festivals - Fixed Structure */}
      {/* Upcoming Festivals */}
<section className="w-full py-16 md:py-24 bg-gradient-to-b from-white to-amber-50">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

    <div className="text-center mb-14">
      <span className="inline-block bg-amber-100 text-amber-700 px-4 py-2 rounded-full text-sm font-semibold mb-4">
        ✨ Upcoming Celebrations
      </span>

      <h2 className="font-serif text-4xl md:text-5xl font-bold text-red-800">
        Upcoming Festivals
      </h2>

      <div className="w-28 h-1.5 bg-gradient-to-r from-amber-400 to-orange-500 rounded-full mx-auto mt-5"></div>

      <p className="mt-6 text-lg text-gray-600 max-w-3xl mx-auto">
        Celebrate the divine festivals with us through special pujas,
        bhajans, aarti, and prasadam.
      </p>
    </div>

    <div className="grid gap-8 md:grid-cols-2">

      {[
        {
          day: "09",
          month: "AUG",
          title: "Raksha Bandhan",
          icon: "🪢",
          desc: "Special blessings for brothers and sisters followed by evening Aarti and Prasadam."
        },
        {
          day: "16",
          month: "AUG",
          title: "Krishna Janmashtami",
          icon: "🦚",
          desc: "Midnight Janmotsav, Jhanki Darshan, Bhajan Sandhya, Abhishek and Maha Prasadam."
        },
        {
          day: "27",
          month: "AUG",
          title: "Ganesh Chaturthi",
          icon: "🐘",
          desc: "Special Ganesh Puja, Modak Bhog, Sankat Nashak Path and Evening Aarti."
        },
        {
          day: "12",
          month: "OCT",
          title: "Sharad Navratri",
          icon: "🌺",
          desc: "Nine days of Durga Puja, Bhajan, Kanya Pujan and daily spiritual programs."
        },
      ].map((festival) => (
        <div
          key={festival.title}
          className="bg-white rounded-3xl border border-amber-100 shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all duration-300 overflow-hidden group"
        >
          <div className="flex">

            <div className="bg-gradient-to-b from-red-700 to-red-900 text-white w-28 flex flex-col justify-center items-center p-6">
              <div className="text-3xl mb-2">{festival.icon}</div>
              <div className="text-3xl font-bold">{festival.day}</div>
              <div className="uppercase tracking-wider text-sm">
                {festival.month}
              </div>
            </div>

            <div className="flex-1 p-7">
              <h3 className="font-serif text-2xl font-bold text-red-800 mb-3">
                {festival.title}
              </h3>

              <p className="text-gray-600 leading-7">
                {festival.desc}
              </p>

            </div>

          </div>
        </div>
      ))}

    </div>

  </div>
</section>

      {/* Testimonials Section - Fixed Structure */}
      {/* <section className="w-full bg-gradient-to-b from-[#FFF8F0] to-[#FAFAF8] py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-serif text-3xl md:text-4xl text-red-800 font-bold mb-6">Devotee Experiences</h2>
          <div className="w-24 h-1.5 bg-gradient-to-r from-amber-400 to-orange-500 mx-auto mb-12 md:mb-16 rounded-full"></div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10">
            <div className="bg-white p-8 md:p-10 rounded-3xl shadow-lg border border-amber-50 hover:shadow-xl hover:-translate-y-2 transition-all duration-300 relative flex flex-col mt-6 md:mt-0 cursor-pointer">
              <div className="absolute -top-6 left-1/2 transform -translate-x-1/2 text-5xl text-amber-300 opacity-50">"</div>
              <p className="italic text-gray-600 mb-8 text-base md:text-lg leading-relaxed relative z-10 flex-grow">The peaceful environment here is unmatched. Sitting in the main hall during the evening aarti brings tears of joy to my eyes.</p>
              <h4 className="font-bold text-red-800 text-base md:text-lg mt-auto">- Rahul S.</h4>
            </div>
            <div className="bg-white p-8 md:p-10 rounded-3xl shadow-lg border border-amber-50 hover:shadow-xl hover:-translate-y-2 transition-all duration-300 relative flex flex-col mt-6 md:mt-0 cursor-pointer">
              <div className="absolute -top-6 left-1/2 transform -translate-x-1/2 text-5xl text-amber-300 opacity-50">"</div>
              <p className="italic text-gray-600 mb-8 text-base md:text-lg leading-relaxed relative z-10 flex-grow">I celebrated my child's Annaprashan here. The priests were incredibly kind and explained the significance of every mantra.</p>
              <h4 className="font-bold text-red-800 text-base md:text-lg mt-auto">- Priya M.</h4>
            </div>
            <div className="bg-white p-8 md:p-10 rounded-3xl shadow-lg border border-amber-50 hover:shadow-xl hover:-translate-y-2 transition-all duration-300 relative flex flex-col mt-6 md:mt-0 sm:col-span-2 lg:col-span-1 cursor-pointer">
              <div className="absolute -top-6 left-1/2 transform -translate-x-1/2 text-5xl text-amber-300 opacity-50">"</div>
              <p className="italic text-gray-600 mb-8 text-base md:text-lg leading-relaxed relative z-10 flex-grow">A beautifully maintained temple. The architecture and the daily cleanliness are highly commendable. A must-visit place for peace.</p>
              <h4 className="font-bold text-red-800 text-base md:text-lg mt-auto">- Amit K.</h4>
            </div>
          </div>
        </div>
      </section> */}
      
      {/* Newsletter Section */}
      {/* <section className="w-full bg-white py-16 md:py-24 border-t border-amber-50 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-64 h-64 bg-saffron/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-amber-200/20 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2"></div>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl text-red-800 font-bold mb-4 break-words">Stay Connected with the Divine</h2>
          <p className="text-gray-600 text-base sm:text-lg md:text-xl mb-6 md:mb-8 max-w-2xl mx-auto break-words">
            Subscribe to our newsletter to receive daily darshan images, spiritual quotes, and updates on upcoming festivals directly in your inbox.
          </p>
          <NewsletterForm />
        </div>
      </section> */}
    </div>
  );
}
