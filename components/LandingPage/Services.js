import { FaCarSide, FaTools, FaHandshake, FaMoneyCheckAlt, FaShieldAlt, FaRoad } from 'react-icons/fa';

export default function Services() {
  const services = [
    {
      icon: <FaCarSide className="text-2xl text-yellow-400" />,
      title: 'Wide Vehicle Selection',
      desc: 'Choose from a diverse range of luxury, performance, and economy vehicles to suit your needs.'
    },
    {
      icon: <FaTools className="text-2xl text-red-500" />,
      title: 'Expert Maintenance',
      desc: 'All vehicles are thoroughly inspected and maintained by certified professionals.'
    },
    {
      icon: <FaHandshake className="text-2xl text-yellow-400" />,
      title: 'Flexible Financing',
      desc: 'We offer competitive financing options tailored to your budget.'
    },
    {
      icon: <FaMoneyCheckAlt className="text-2xl text-gray-300" />,
      title: 'Trade-In & Sell',
      desc: 'Get the best value for your trade-in or sell your car directly to us.'
    },
    {
      icon: <FaShieldAlt className="text-2xl text-yellow-400" />,
      title: 'Warranty & Protection',
      desc: 'Enjoy peace of mind with our comprehensive warranty and protection plans.'
    },
    {
      icon: <FaRoad className="text-2xl text-red-500" />,
      title: '24/7 Roadside Assistance',
      desc: 'We provide round-the-clock support to keep you moving safely.'
    },
  ];

  return (
    <section className="w-full flex flex-col items-center justify-center py-8 sm:py-12 px-2 sm:px-4 bg-black">
      {/* WHAT WE OFFER. */}
      <h2 className="text-lg sm:text-xl md:text-2xl font-thin text-yellow-400 mb-2 uppercase tracking-widest">WHAT WE OFFER.</h2>
      {/* Our Services */}
      <h3 className="text-xl sm:text-2xl md:text-3xl font-thin text-white mb-4">Our Services</h3>
      {/* Small content */}
      <p className="text-gray-300 text-sm sm:text-base md:text-lg mb-8 max-w-2xl text-center font-thin">
        At Agape Autos, we are committed to delivering a seamless automotive experience. From helping you find your dream car to providing ongoing support and protection, our services are designed to exceed your expectations every step of the way.
      </p>
      {/* Services Cards */}
      <div className="w-full max-w-6xl grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-8">
        {services.map((service, idx) => (
          <div key={idx} className="flex flex-col items-center bg-gray-900 rounded-2xl shadow-xl border border-gray-700 p-6 hover:shadow-2xl transition-shadow duration-300">
            <div className="mb-4">{service.icon}</div>
            <h4 className="text-lg font-thin text-yellow-400 mb-2 text-center">{service.title}</h4>
            <p className="text-gray-300 text-sm text-center font-thin">{service.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}