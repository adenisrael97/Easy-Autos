import { CurrencyDollarIcon, ShieldCheckIcon, ClockIcon, UserGroupIcon } from "@heroicons/react/24/solid";

export default function FinanceSummary() {
    return (
        <section className="w-full max-w-6xl mx-auto px-2 sm:px-4 py-8 sm:py-12">
            <h2 className="text-3xl font-extrabold text-center mb-6 text-black">Why Finance with AgapeAutos?</h2>
            <p className="text-center text-gray-700 max-w-2xl mx-auto mb-12 text-lg font-light">
                Experience a seamless, transparent, and customer-focused financing journey. We make it easy to drive away in your dream car with confidence and peace of mind.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
                {/* Card 1 */}
                <div className="bg-white rounded-2xl shadow-lg p-6 flex flex-col items-center text-center border-t-4 border-yellow-500">
                    <CurrencyDollarIcon className="w-10 h-10 text-yellow-500 mb-3" />
                    <h3 className="font-bold text-lg mb-2 text-black">Flexible Payment Options</h3>
                    <p className="text-gray-600 text-sm">Choose from a variety of plans tailored to your budget and lifestyle, with competitive rates and terms.</p>
                </div>
                {/* Card 2 */}
                <div className="bg-white rounded-2xl shadow-lg p-6 flex flex-col items-center text-center border-t-4 border-yellow-500">
                    <ShieldCheckIcon className="w-10 h-10 text-yellow-500 mb-3" />
                    <h3 className="font-bold text-lg mb-2 text-black">Trusted & Transparent</h3>
                    <p className="text-gray-600 text-sm">No hidden fees, no surprises. We provide clear terms and honest guidance every step of the way.</p>
                </div>
                {/* Card 3 */}
                <div className="bg-white rounded-2xl shadow-lg p-6 flex flex-col items-center text-center border-t-4 border-yellow-500">
                    <ClockIcon className="w-10 h-10 text-yellow-500 mb-3" />
                    <h3 className="font-bold text-lg mb-2 text-black">Fast Approval Process</h3>
                    <p className="text-gray-600 text-sm">Get pre-approved quickly with our streamlined application and responsive team.</p>
                </div>
                {/* Card 4 */}
                <div className="bg-white rounded-2xl shadow-lg p-6 flex flex-col items-center text-center border-t-4 border-yellow-500">
                    <UserGroupIcon className="w-10 h-10 text-yellow-500 mb-3" />
                    <h3 className="font-bold text-lg mb-2 text-black">Personalized Support</h3>
                    <p className="text-gray-600 text-sm">Our finance experts work with you to find the best solution for your unique needs and goals.</p>
                </div>
            </div>
        </section>
    );
}