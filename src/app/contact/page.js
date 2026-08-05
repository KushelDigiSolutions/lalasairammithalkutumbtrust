import Image from 'next/image';

import ContactForm from './ContactForm';

export const metadata = {
  title: 'Contact Us | Lala Sai Ram',
  description: 'Get in touch with Lala Sai Ram. Find our location, contact details, and send us a message.',
};

export default function Contact() {
  return (
    <div className="flex flex-col min-h-screen pb-20">
      {/* Header Banner */}
      <div className="relative h-[60vh] md:h-[85vh] w-full flex-shrink-0 flex items-center justify-center overflow-hidden border-b border-saffron/20">
        <Image 
          src="https://res.cloudinary.com/hne4dpfq/image/upload/v1785841893/ChatGPT_Image_Aug_4_2026_04_40_01_PM_b7sldt.png" 
          alt="Contact Us Banner" 
          fill 
          className="object-cover" 
          unoptimized 
          priority
        />
        <div className="absolute inset-0 bg-black/50"></div>
        <div className="relative z-10 text-center px-4 w-full">
          <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4 drop-shadow-md">Contact Us</h1>
          <div className="w-16 md:w-24 h-1 md:h-1.5 bg-gradient-to-r from-amber-400 to-orange-500 mx-auto rounded-full mb-4 md:mb-6"></div>
          <p className="text-white text-base sm:text-lg md:text-xl drop-shadow-md max-w-2xl mx-auto">We welcome your inquiries, feedback, and suggestions. Feel free to reach out to us.</p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-8 md:mt-12 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-stretch">
          {/* Contact Form */}
          <div className="bg-white p-6 md:p-8 rounded-2xl shadow-lg border border-gray-100 flex flex-col h-full">
            <h2 className="font-serif text-2xl md:text-3xl font-bold text-red-800 mb-6">Send us a Message</h2>
            <ContactForm />
          </div>

          {/* Contact Details */}
          <div className="space-y-6 md:space-y-8 flex flex-col h-full justify-center">
            <div>
              <h2 className="font-serif text-2xl md:text-3xl font-bold text-red-800 mb-4 md:mb-6">Our Location</h2>
              <div className="bg-saffron/10 p-5 md:p-6 rounded-xl border border-saffron/20 flex items-start gap-4">
                <span className="text-2xl mt-1">📍</span>
                <div>
                  <h3 className="font-bold text-base md:text-lg text-gray-800">Lala SaiRam Mittal Kutumb Trust</h3>
                  <p className="text-gray-600 mt-1 text-sm md:text-base">Reg Add : B-46, Samrat Palace , 
                  Garh Road, Meerut -250004.
                  Mandir Add : Shiv Puri ward,
                  Niwari , Modinagar -201204</p>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6">
              <div className="bg-white p-5 md:p-6 rounded-xl shadow-sm border border-gray-100 flex items-start gap-4">
                <span className="text-xl md:text-2xl text-saffron">📞</span>
                <div>
                  <h3 className="font-bold text-gray-800 text-sm md:text-base">Phone</h3>
                  <a href="tel:+919876543210" className="text-gray-600 mt-1 text-sm md:text-base">+91 9897973446</a>
                </div>
              </div>
              <div className="bg-white p-5 md:p-6 rounded-xl shadow-sm border border-gray-100 flex items-start gap-4">
                <span className="text-xl md:text-2xl text-saffron">✉️</span>
                <div>
                  <h3 className="font-bold text-gray-800 text-sm md:text-base">Email</h3>
                  <p className="text-gray-600 mt-1 text-sm md:text-base break-all">Lalasairammittalkutumbtrust@gmail.com</p>
                </div>
              </div>
            </div>

            {/* WhatsApp Integration */}
            <div className="bg-gradient-to-r from-[#25D366]/10 to-[#128C7E]/10 p-5 md:p-6 rounded-xl border border-[#25D366]/30 flex flex-col sm:flex-row items-center justify-between gap-4">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-[#25D366] text-white rounded-full flex items-center justify-center text-2xl shadow-md">
                  💬
                </div>
                <div>
                  <h3 className="font-bold text-gray-800 text-base md:text-lg">Chat with us on WhatsApp</h3>
                  <p className="text-gray-600 text-sm">Get instant replies to your queries</p>
                </div>
              </div>
              <a 
                href="https://wa.me/919897973446" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="w-full sm:w-auto bg-saffron text-white px-6 py-2.5 rounded-full font-bold hover:bg-red-800 transition-colors shadow-md hover:shadow-lg text-center whitespace-nowrap"
              >
                Start Chat
              </a>
            </div>

          </div>
        </div>
      </div>

      {/* Full Width Map Section */}
      <div className="w-full h-[400px] md:h-[500px] mt-16 md:mt-24 border-y border-amber-200 shadow-inner relative z-0">
        <iframe
          title="Lala Sai Ram Location"
          width="100%"
          height="100%"
          style={{ border: 0 }}
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2738.568156967526!2d77.5349301!3d28.8769006!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390c5f8be1f69007%3A0xe7780d538a901fcf!2sDudheshvar%20Mahadev%20Mandir%20(Lala%20Sairam%20Mittal%20Kutumb%20Trust)!5e1!3m2!1sen!2sin!4v1785826039907!5m2!1sen!2sin"
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-16 md:mt-20 w-full">
        <h2 className="font-serif text-3xl md:text-4xl font-bold text-red-800 mb-8 md:mb-12 text-center">Plan Your Visit</h2>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12">
          {/* Visiting Guidelines */}
          <div className="bg-white p-6 md:p-8 rounded-2xl shadow-md border border-gray-100 hover:border-saffron/30 transition-colors h-fit">
            <h3 className="font-serif text-xl md:text-2xl font-bold text-gray-800 mb-4 md:mb-6 flex items-center gap-3">
              <span className="text-saffron">📋</span> Visiting Guidelines
            </h3>
            <ul className="space-y-4 text-gray-700 text-sm md:text-base">
              <li className="flex items-start gap-3">
                <span className="text-red-800 mt-0.5 md:mt-1">✓</span>
                <p><strong>Dress Code:</strong> Please wear modest clothing. Shoulders and knees must be covered. Traditional Indian attire is encouraged.</p>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-red-800 mt-0.5 md:mt-1">✓</span>
                <p><strong>Footwear:</strong> All footwear must be removed and left at the designated shoe racks near the entrance.</p>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-red-800 mt-0.5 md:mt-1">✓</span>
                <p><strong>Photography:</strong> Photography is allowed in all areas of the temple premises.</p>
              </li>
              {/* <li className="flex items-start gap-3">
                <span className="text-red-800 mt-0.5 md:mt-1">✓</span>
                <p><strong>Offerings:</strong> Only fruits, flowers, and sealed dry fruits are accepted as offerings. Please do not bring cooked food from outside.</p>
              </li> */}
            </ul>
          </div>

          {/* FAQ */}
          <div className="bg-white p-5 md:p-6 rounded-2xl shadow-md border border-gray-100 hover:border-saffron/30 transition-colors h-fit">
  <h3 className="font-serif text-xl md:text-2xl font-bold text-gray-800 mb-4 flex items-center gap-3">
    <span className="text-saffron">❓</span> Frequently Asked Questions
  </h3>

  <div className="space-y-3 text-sm md:text-base">
    <div>
      <h4 className="font-bold text-gray-800">Is there parking available?</h4>
      <p className="text-gray-600 mt-1">
        Yes, parking is available for devotees visiting the temple.
      </p>
    </div>

    {/* <div className="border-t border-gray-100"></div> */}

    <div>
      <h4 className="font-bold text-gray-800">Is Prasad available at the temple?</h4>
      <p className="text-gray-600 mt-1">
        Yes, Prasad is distributed to devotees after the Aarti and on special religious occasions.
      </p>
    </div>
    {/* <div className="border-t border-gray-100"></div> */}

    <div>
      <h4 className="font-bold text-gray-800">Are all devotees welcome?</h4>
      <p className="text-gray-600 mt-1">
        Yes, everyone is welcome to visit and seek blessings.
      </p>
    </div>
  </div>
</div>
        </div>
      </div>
    </div>
  );
}
