import Image from 'next/image';
import Link from 'next/link';

// This array holds the stats we want to display
const stats = [
    { label: "Years of Experience", value: "12+", color: "text-yellow-400" },
    { label: "Vehicles Sold", value: "3,500+", color: "text-yellow-400" },
    { label: "Customer Satisfaction", value: "98%", color: "text-yellow-400" },
    { label: "Support Available", value: "24/7", color: "text-white" },
];

// This is the main CTA component
export default function CTA() {
    return (
        // Section is the main container with background and padding
        <>
            {/* Stats Section */}
            <section className="w-full bg-linear-to-r from-gray-900 via-black to-gray-800 py-10 sm:py-16 flex flex-col items-center justify-center">
                <div className="max-w-6xl w-full flex flex-row flex-wrap justify-center items-center gap-4 sm:gap-6 px-2 sm:px-6 bg-black/80 rounded-2xl shadow-2xl py-6 sm:py-8 border border-gray-700">
                    {stats.map((stat, idx) => (
                        <div
                            key={idx}
                            className="flex flex-col items-center justify-center px-2"
                        >
                            <span className={`text-base sm:text-xl md:text-2xl font-bold mb-1 font-mono drop-shadow-lg ${stat.color}`}>
                                {stat.value}
                            </span>
                            <span className="text-xs sm:text-sm md:text-base font-semibold text-yellow-400 tracking-wide text-center uppercase drop-shadow-sm">
                                {stat.label}
                            </span>
                            <div className="w-8 h-1 bg-linear-to-r from-yellow-400 via-yellow-500 to-yellow-400 rounded-full mt-2 mb-1" />
                        </div>
                    ))}
                </div>
            </section>
            {/* Collections and Featured Vehicles Section */}
            <section className="w-full flex flex-col items-center justify-center py-8 sm:py-10 px-2 sm:px-4 bg-black">
                <div className="max-w-3xl text-center">
                    <h2 className="text-2xl md:text-3xl font-bold text-yellow-400 mb-3">Our Collections</h2>
                    <h2 className="text-2xl md:text-3xl font-bold text-yellow-400 mt-8 mb-3">Featured Vehicles</h2>
                    <p className="text-gray-200 text-base md:text-lg mb-2">
                        Discover a curated selection of luxury, performance, and reliable vehicles. Our featured collection highlights the best in class—meticulously inspected, top-rated, and ready for you to drive home with confidence and style.
                    </p>
                </div>
            </section>
            {/* Car Collections Grid */}
            <section className="w-full flex flex-col items-center justify-center py-8 sm:py-12 px-2 sm:px-4 bg-linear-to-r from-gray-900 via-black to-gray-800">
                <div className="max-w-7xl w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-8">
                    {/* Example: Replace this array with actual imported car data for production */}
                    {[
                        // Toyota
                        { brand: 'Toyota', name: 'Land Cruiser', type: 'SUV', fuelType: 'Diesel', transmission: 'Automatic', mileage: 8000, price: 55000000, image: '/images/Toyota/Toyota1.avif' },
                        { brand: 'Toyota', name: 'Highlander', type: 'SUV', fuelType: 'Petrol', transmission: 'Automatic', mileage: 12000, price: 35000000, image: '/images/Toyota/Toyota10.avif' },
                        // BMW
                        { brand: 'BMW', name: 'X5', type: 'SUV', fuelType: 'Petrol', transmission: 'Automatic', mileage: 12000, price: 35000000, image: '/images/bmw/bmw1.avif' },
                        { brand: 'BMW', name: '3 Series', type: 'Sedan', fuelType: 'Petrol', transmission: 'Automatic', mileage: 18000, price: 22000000, image: '/images/bmw/bmw10.avif' },
                        // Mercedes
                        { brand: 'Mercedes', name: 'GLE', type: 'SUV', fuelType: 'Diesel', transmission: 'Automatic', mileage: 7000, price: 48000000, image: '/images/mercedes/Mercedes1.avif' },
                        { brand: 'Mercedes', name: 'C-Class', type: 'Sedan', fuelType: 'Petrol', transmission: 'Automatic', mileage: 22000, price: 25000000, image: '/images/mercedes/Mercedes2.avif' },
                        // Honda
                        { brand: 'Honda', name: 'CR-V', type: 'SUV', fuelType: 'Petrol', transmission: 'Automatic', mileage: 8000, price: 28000000, image: '/images/honda/honda1.avif' },
                        { brand: 'Honda', name: 'Accord', type: 'Sedan', fuelType: 'Petrol', transmission: 'Automatic', mileage: 25000, price: 17000000, image: '/images/honda/honda10.avif' },
                        // Lexus
                        { brand: 'Lexus', name: 'RX 350', type: 'SUV', fuelType: 'Petrol', transmission: 'Automatic', mileage: 10000, price: 42000000, image: '/images/lexus/lexus1.avif' },
                        { brand: 'Lexus', name: 'ES 350', type: 'Sedan', fuelType: 'Petrol', transmission: 'Automatic', mileage: 15000, price: 32000000, image: '/images/lexus/lexus2.avif' },
                        // More variety
                        { brand: 'Toyota', name: 'Camry', type: 'Sedan', fuelType: 'Petrol', transmission: 'Automatic', mileage: 20000, price: 18000000, image: '/images/Toyota/Toyota11.avif' },
                        { brand: 'BMW', name: 'X3', type: 'SUV', fuelType: 'Petrol', transmission: 'Automatic', mileage: 10000, price: 32000000, image: '/images/bmw/bmw12.avif' },
                    ].slice(0, 12).map((car, idx) => (
                        <div key={idx} className="bg-black/90 rounded-2xl shadow-xl border border-gray-700 flex flex-col overflow-hidden hover:shadow-2xl transition-shadow duration-300">
                            <Image
                                src={car.image}
                                alt={car.name}
                                width={400}
                                height={160}
                                className="w-full h-40 object-cover rounded-t-2xl"
                                style={{ width: '100%', height: '160px', objectFit: 'cover', borderTopLeftRadius: '1rem', borderTopRightRadius: '1rem' }}
                                priority={idx < 4}
                            />
                            <div className="p-4 flex flex-col flex-1">
                                <h3 className="text-lg font-bold text-yellow-400 mb-1">{car.brand} {car.name}</h3>
                                <div className="flex flex-wrap gap-2 text-xs text-white mb-2">
                                    <span className="bg-gray-800 px-2 py-1 rounded">{car.type}</span>
                                    <span className="bg-gray-800 px-2 py-1 rounded">{car.fuelType}</span>
                                    <span className="bg-gray-800 px-2 py-1 rounded">{car.transmission}</span>
                                    <span className="bg-gray-800 px-2 py-1 rounded">{car.mileage.toLocaleString()} km</span>
                                </div>
                                <div className="text-xl font-bold text-yellow-400 mb-3">₦{car.price.toLocaleString()}</div>
                                <Link href="/Inventory" className="mt-auto inline-block px-4 py-2 rounded-full bg-linear-to-r from-yellow-400 via-yellow-500 to-yellow-400 text-black font-semibold shadow hover:scale-105 transition-transform duration-200 text-center">View Details</Link>
                            </div>
                        </div>
                    ))}
                </div>
                <div className="w-full flex justify-center mt-10">
                <Link
                    href="/Inventory"
                    className="flex items-center gap-2 px-4 py-1.5 rounded-md bg-linear-to-r from-yellow-400 via-yellow-500 to-yellow-400 text-black font-semibold shadow-md hover:scale-105 hover:from-yellow-500 hover:to-yellow-500 transition-all duration-300 border border-yellow-400 text-sm"
                >
                    View All Inventory
                    <span className="ml-1 text-base">→</span>
                </Link>
            </div>
            </section>
            {/* View All Inventory Button */}
            
        </>
    );
}