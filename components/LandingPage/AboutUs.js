import { FaCheckCircle } from 'react-icons/fa';
import Link from 'next/link';

export default function AboutUs() {
  const features = [
    'Trusted by thousands of customers',
    'Award-winning customer service',
    'Transparent pricing & financing',
    'Comprehensive after-sales support',
  ];

  const cards = [
    {
      title: 'Our Mission',
      desc: 'To deliver premium vehicles and exceptional service, making your car buying journey seamless and enjoyable.',
      style: 'bg-black/80 text-yellow-400',
    },
    {
      title: 'Our Vision',
      desc: 'To be the most trusted and innovative auto dealership, setting the standard for excellence in the industry.',
      style: 'bg-gray-900 text-white',
    },
    {
      title: 'Our Values',
      desc: 'Integrity, customer focus, and continuous improvement drive everything we do at Agape Autos.',
      style: 'bg-black/90 text-yellow-400',
    },
    {
      title: 'Our Promise',
      desc: 'We stand by every vehicle we sell, ensuring quality, safety, and satisfaction for every customer.',
      style: 'bg-gray-800 text-white',
    },
  ];

  return (
    <section className="w-full flex flex-col lg:flex-row items-center justify-center py-8 sm:py-12 px-2 sm:px-4 bg-linear-to-r from-gray-900 via-black to-gray-800 gap-8 sm:gap-10">
      {/* About Us Content */}
      <div className="flex-1 max-w-xl flex flex-col items-start w-full">
        <h2 className="text-lg sm:text-xl md:text-2xl font-thin text-yellow-400 mb-2 uppercase tracking-widest">About us</h2>
        <h3 className="text-xl sm:text-2xl md:text-3xl font-thin text-white mb-2">Driving Excellence</h3>
        <h4 className="text-base sm:text-lg md:text-xl font-thin text-yellow-400 mb-4">Since 2009</h4>
        <p className="text-gray-200 text-sm sm:text-base md:text-lg mb-6 font-thin">
          Agape Autos has been a leader in the automotive industry since 2009, providing customers with a handpicked selection of luxury, performance, and reliable vehicles. Our commitment to excellence is reflected in every interaction, from your first inquiry to long after you drive off the lot. We believe in building lasting relationships, offering transparent pricing, and delivering unmatched customer satisfaction.
        </p>
        {/* Feature List */}
        <ul className="mb-6 space-y-2 sm:space-y-3">
          {features.map((item, idx) => (
            <li key={idx} className="flex items-center text-gray-100 text-xs sm:text-sm md:text-base font-thin">
              <FaCheckCircle className="text-yellow-400 mr-2" />
              {item}
            </li>
          ))}
        </ul>
        {/* Contact Us Button */}
        <Link href="/contact" className="inline-block px-4 sm:px-6 py-2 rounded-full bg-linear-to-r from-yellow-400 via-yellow-500 to-yellow-400 text-black font-thin shadow-md hover:scale-105 hover:from-yellow-500 hover:to-yellow-500 transition-all duration-300 border border-yellow-400 text-xs sm:text-sm">
          Contact Us Today
        </Link>
      </div>
      {/* Feature Cards */}
      <div className="flex-1 w-full grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 lg:flex lg:flex-col lg:gap-6 lg:max-w-lg">
        {cards.map((card, idx) => (
          <div
            key={idx}
            className={`rounded-2xl shadow-xl border border-gray-700 p-6 flex flex-col justify-center items-start ${card.style} ${idx === 0 ? 'h-40' : idx === 1 ? 'h-32' : idx === 2 ? 'h-28' : 'h-24'} lg:w-full`}
          >
            <h5 className="text-lg font-thin mb-2">{card.title}</h5>
            <p className="text-sm md:text-base font-thin">{card.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
