import { WrenchScrewdriverIcon, ShieldCheckIcon, CurrencyDollarIcon, TruckIcon, SparklesIcon, UserGroupIcon, ClockIcon } from "@heroicons/react/24/solid";
import Link from "next/link";

export default function IntroService() {
    return (
        <>
            <section className="w-full max-w-6xl mx-auto px-4 py-12">
                <h2 className="text-3xl font-extrabold text-center mb-6 text-white">Our Services</h2>
                <p className="text-center text-gray-300 max-w-2xl mx-auto mb-12 text-lg font-light">
                    At Agape Autos, we offer a comprehensive suite of automotive services designed to keep you on the road with confidence. From expert repairs to premium detailing, our team is dedicated to your satisfaction.
                </p>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                    {/* Service 1 */}
                    <div className="bg-white rounded-2xl shadow-lg p-6 flex flex-col items-center text-center border-t-4 border-yellow-500">
                        <WrenchScrewdriverIcon className="w-10 h-10 text-yellow-500 mb-3" />
                        <h3 className="font-bold text-lg mb-2 text-black">Auto Repairs</h3>
                        <p className="text-gray-600 text-sm">Comprehensive diagnostics and repairs by certified technicians for all makes and models.</p>
                    </div>
                    {/* Service 2 */}
                    <div className="bg-white rounded-2xl shadow-lg p-6 flex flex-col items-center text-center border-t-4 border-yellow-500">
                        <ShieldCheckIcon className="w-10 h-10 text-yellow-500 mb-3" />
                        <h3 className="font-bold text-lg mb-2 text-black">Vehicle Inspections</h3>
                        <p className="text-gray-600 text-sm">Thorough safety and performance inspections to ensure your vehicle is road-ready.</p>
                    </div>
                    {/* Service 3 */}
                    <div className="bg-white rounded-2xl shadow-lg p-6 flex flex-col items-center text-center border-t-4 border-yellow-500">
                        <CurrencyDollarIcon className="w-10 h-10 text-yellow-500 mb-3" />
                        <h3 className="font-bold text-lg mb-2 text-black">Financing Solutions</h3>
                        <p className="text-gray-600 text-sm">Flexible financing options to help you drive away in your dream car with ease.</p>
                    </div>
                    {/* Service 4 */}
                    <div className="bg-white rounded-2xl shadow-lg p-6 flex flex-col items-center text-center border-t-4 border-yellow-500">
                        <TruckIcon className="w-10 h-10 text-yellow-500 mb-3" />
                        <h3 className="font-bold text-lg mb-2 text-black">Vehicle Delivery</h3>
                        <p className="text-gray-600 text-sm">Convenient home or office delivery for your purchased vehicle, anywhere in the region.</p>
                    </div>
                    {/* Service 5 */}
                    <div className="bg-white rounded-2xl shadow-lg p-6 flex flex-col items-center text-center border-t-4 border-yellow-500">
                        <SparklesIcon className="w-10 h-10 text-yellow-500 mb-3" />
                        <h3 className="font-bold text-lg mb-2 text-black">Detailing & Cleaning</h3>
                        <p className="text-gray-600 text-sm">Premium detailing services to keep your car looking and feeling like new.</p>
                    </div>
                    {/* Service 6 */}
                    <div className="bg-white rounded-2xl shadow-lg p-6 flex flex-col items-center text-center border-t-4 border-yellow-500">
                        <UserGroupIcon className="w-10 h-10 text-yellow-500 mb-3" />
                        <h3 className="font-bold text-lg mb-2 text-black">Customer Support</h3>
                        <p className="text-gray-600 text-sm">Friendly, knowledgeable support for all your automotive needs, before and after the sale.</p>
                    </div>
                    
                </div>
                <div className="w-full flex justify-center mt-15">
                          <Link href="/financing" className="flex items-center gap-2 bg-yellow-500 hover:bg-yellow-600 text-white font-semibold px-6 py-3 rounded-full shadow-lg transition-colors duration-200 mx-auto">
                            Financing
                            {/* Forward arrow icon */}
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                            </svg>
                        </Link>
                    </div>
            </section>
            {/* Why Choose Us Section */}
            <section className="w-full max-w-6xl mx-auto px-4 py-12">
                <h2 className="text-3xl font-extrabold text-center mb-6 text-white">Why Choose Us?</h2>
                <p className="text-center text-gray-300 max-w-2xl mx-auto mb-12 text-lg font-light">
                    Discover the Agape Autos difference—where integrity, expertise, and customer care come together to deliver an exceptional automotive experience. We go the extra mile for your satisfaction and peace of mind.
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                    {/* Card 1 */}
                    <div className="bg-white rounded-2xl shadow-lg p-6 flex flex-col items-center text-center border-t-4 border-yellow-500">
                        <ShieldCheckIcon className="w-10 h-10 text-yellow-500 mb-3" />
                        <h3 className="font-bold text-lg mb-2 text-black">Trusted Reputation</h3>
                        <p className="text-gray-600 text-sm">Years of reliable service and countless satisfied customers make us a name you can trust.</p>
                    </div>
                    {/* Card 2 */}
                    <div className="bg-white rounded-2xl shadow-lg p-6 flex flex-col items-center text-center border-t-4 border-yellow-500">
                        <UserGroupIcon className="w-10 h-10 text-yellow-500 mb-3" />
                        <h3 className="font-bold text-lg mb-2 text-black">Expert Team</h3>
                        <p className="text-gray-600 text-sm">Our certified professionals are passionate about cars and dedicated to your needs.</p>
                    </div>
                    {/* Card 3 */}
                    <div className="bg-white rounded-2xl shadow-lg p-6 flex flex-col items-center text-center border-t-4 border-yellow-500">
                        <SparklesIcon className="w-10 h-10 text-yellow-500 mb-3" />
                        <h3 className="font-bold text-lg mb-2 text-black">Quality Assurance</h3>
                        <p className="text-gray-600 text-sm">Every vehicle and service meets our high standards for safety, quality, and performance.</p>
                    </div>
                    {/* Card 4 */}
                    <div className="bg-white rounded-2xl shadow-lg p-6 flex flex-col items-center text-center border-t-4 border-yellow-500">
                        <CurrencyDollarIcon className="w-10 h-10 text-yellow-500 mb-3" />
                        <h3 className="font-bold text-lg mb-2 text-black">Transparent Pricing</h3>
                        <p className="text-gray-600 text-sm">No hidden fees—just honest, upfront pricing and clear communication.</p>
                    </div>
                    {/* Card 5 */}
                    <div className="bg-white rounded-2xl shadow-lg p-6 flex flex-col items-center text-center border-t-4 border-yellow-500">
                        <WrenchScrewdriverIcon className="w-10 h-10 text-yellow-500 mb-3" />
                        <h3 className="font-bold text-lg mb-2 text-black">Comprehensive Services</h3>
                        <p className="text-gray-600 text-sm">From sales to service, we offer everything you need for a smooth automotive journey.</p>
                    </div>
                    {/* Card 6 */}
                    <div className="bg-white rounded-2xl shadow-lg p-6 flex flex-col items-center text-center border-t-4 border-yellow-500">
                        <ClockIcon className="w-10 h-10 text-yellow-500 mb-3" />
                        <h3 className="font-bold text-lg mb-2 text-black">Convenient & Fast</h3>
                        <p className="text-gray-600 text-sm">Enjoy quick turnaround times and flexible scheduling to fit your busy life.</p>
                    </div>
                </div>
            </section>
        </>
    );
}