import Link from 'next/link';
import Image from 'next/image';

export default function Footer() {
  return (
    <footer className="bg-[#FFF8F0] border-t border-amber-200 pt-8 lg:pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-8 lg:gap-12">
          {/* Brand */}
          <div className="col-span-1 md:col-span-1">
            <Link
  href="/"
  className="items-center gap-3 group mb-2"
>
  <Image
    src="/logo.jpeg"
    alt="Dudheshwar Mahadev Mandir Logo"
    width={80}
    height={80}
    priority
    className="rounded-full object-cover shadow-md group-hover:scale-105 transition-transform duration-300"
  />

  <h2 className="font-serif text-sm md:text-2xl font-bold text-red-800 group-hover:text-red-700 transition-colors">
    Dudheshwar Mahadev Mandir
  </h2>
</Link>
            <p className="text-gray-600 text-sm leading-relaxed">
              A place of peace, devotion, and spiritual awakening. Join us in our daily prayers and community services.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-serif text-xl font-bold mb-4 text-red-800">Quick Links</h3>
            <ul className="space-y-3">
              <li><Link href="/about" className="text-gray-600 hover:text-amber-600 font-medium transition-colors flex items-center gap-2"><span className="text-amber-400">▪</span> About Us</Link></li>
              <li><Link href="/services" className="text-gray-600 hover:text-amber-600 font-medium transition-colors flex items-center gap-2"><span className="text-amber-400">▪</span> Services</Link></li>
              <li><Link href="/gallery" className="text-gray-600 hover:text-amber-600 font-medium transition-colors flex items-center gap-2"><span className="text-amber-400">▪</span> Gallery</Link></li>
              <li><Link href="/contact" className="text-gray-600 hover:text-amber-600 font-medium transition-colors flex items-center gap-2"><span className="text-amber-400">▪</span> Contact Us</Link></li>
            </ul>
          </div>

          {/* Timings */}
          <div>
            <h3 className="font-serif text-xl font-bold mb-4 text-red-800">Darshan Timings</h3>
            <ul className="space-y-3 text-gray-600 font-medium">
              <li className="flex justify-between border-b border-amber-100 pb-1"><span>Morning:</span> <span>6:00 AM - 12:00 PM</span></li>
              <li className="flex justify-between border-b border-amber-100 pb-1"><span>Evening:</span> <span>4:00 PM - 10:00 PM</span></li>
              <li className="flex justify-between border-b border-amber-100 pb-1"><span>Mangala Aarti:</span> <span>6:30 AM</span></li>
              <li className="flex justify-between border-b border-amber-100 pb-1"><span>Sandhya Aarti:</span> <span>7:00 PM</span></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-serif text-xl font-bold mb-4 text-red-800">Contact Us</h3>
            <ul className="space-y-3 text-gray-600 font-medium">
              <li>
                <a href="https://maps.google.com/?q=123+Spiritual+Way,+Meerut,+Uttar+Pradesh,+India+250001" target="_blank" rel="noopener noreferrer" className="flex items-start gap-3 hover:text-amber-600 transition-colors cursor-pointer group">
                  <span className="text-amber-500 text-lg mt-0.5 group-hover:scale-110 transition-transform">📍</span>
                  <span>Shiv Puri ward, Niwari , Modinagar -201204</span>
                </a>
              </li>
              <li>
                <a href="tel:+919876543210" className="flex items-center gap-3 hover:text-amber-600 transition-colors cursor-pointer group">
                  <span className="text-amber-500 text-lg group-hover:scale-110 transition-transform">📞</span>
                  <span>+91 9897973446</span>
                </a>
              </li>
              <li>
                <a
  href="mailto:Lalasairammittalkutumbtrust@gmail.com"
  className="flex items-start gap-3 hover:text-amber-600 transition-colors cursor-pointer group"
>
  <span className="text-amber-500 text-lg group-hover:scale-110 transition-transform shrink-0">
    ✉️
  </span>

  <span className="min-w-0 break-all">
    Lalasairammittalkutumbtrust@gmail.com
  </span>
</a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-amber-200 mt-16 pt-8 flex flex-col md:flex-row justify-between items-center text-center md:text-left text-gray-500 text-sm font-medium gap-6 md:gap-0">
          <div>
            <span className="block lg:inline">&copy; {new Date().getFullYear()} <span className="text-gray-800 font-bold">Lala Sai Ram</span>.</span>
            <span className="block lg:inline lg:ml-1 mt-1 lg:mt-0">All Rights Reserved.</span>
          </div>
          <div className="md:text-right">
            <span className="block lg:inline">Designed and Developed By</span>
            <Link href="https://kusheldigital.com" target="_blank" rel="noopener noreferrer" className="block lg:inline lg:ml-1 mt-1 lg:mt-0 text-amber-600 hover:text-red-700 font-bold">
              Kushel Digi Solutions
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
