import Link from "next/link";

export default function SummaryService() {
    return (
        <div className="bg-linear-to-r from-gray-900 via-black to-gray-800 rounded-3xl shadow-lg px-6 py-12 max-w-4xl mx-auto my-12 text-center">
            <h2 className="text-3xl font-extrabold mb-4 text-white">Service Summary</h2>
            <p className="text-gray-300 text-lg mb-8 font-light max-w-2xl mx-auto">
                At Agape Autos, we are committed to providing a full spectrum of automotive services, from expert repairs and inspections to premium detailing and customer support. Our experienced team ensures your vehicle receives the best care, so you can drive with confidence and peace of mind.
            </p>
                        <div className="flex flex-col sm:flex-row justify-center gap-4 mt-6">
                                <Link
                                    href="/contact"
                                    className="bg-yellow-500 hover:bg-yellow-600 text-white font-semibold px-3 py-1.5 text-xs rounded-full shadow-md transition-colors duration-200 min-w-30 flex items-center justify-center gap-1 mx-auto"
                                >
                                    Contact Us
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-4 h-4 ml-1">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                                    </svg>
                                </Link>
                                <Link
                                    href="/Inventory"
                                    className="bg-black hover:bg-gray-800 text-white font-semibold px-3 py-1.5 text-xs rounded-full shadow-md transition-colors duration-200 min-w-30 flex items-center justify-center gap-1 mx-auto"
                                >
                                    View Inventory
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-4 h-4 ml-1">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                                    </svg>
                                </Link>
                        </div>
        </div>
    );
}