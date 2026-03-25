import { FaFacebookF, FaInstagram, FaTwitter, FaLinkedinIn, FaYoutube } from 'react-icons/fa';
import Link from 'next/link';

export default function Footer () {
    return (
                <footer className="w-full bg-linear-to-t from-gray-900 via-gray-800 to-gray-700 text-gray-300 pt-8 sm:pt-12 pb-6 px-2 sm:px-4 mt-16">
                    <div className="max-w-7xl mx-auto flex flex-col md:flex-row md:justify-between gap-8 md:gap-10 border-b border-gray-600 pb-8 md:pb-10">
                        {/* Brand & Social */}
                        <div className="flex-1 min-w-55 flex flex-col gap-4">
                            <div className="flex items-center gap-2 mb-2">
                                <span className="text-2xl font-bold text-yellow-400 tracking-widest">AGAPE</span>
                                <span className="text-lg font-semibold text-white">AUTOS</span>
                            </div>
                            <p className="text-sm text-gray-400 max-w-xs mb-2">Premium vehicles, exceptional service. Experience luxury, reliability, and trust with Agape Autos.</p>
                            <div className="flex gap-3 mt-2">
                                <a href="#" aria-label="Facebook" className="hover:text-yellow-400 transition"><FaFacebookF size={20} /></a>
                                <a href="#" aria-label="Instagram" className="hover:text-yellow-400 transition"><FaInstagram size={20} /></a>
                                <a href="#" aria-label="Twitter" className="hover:text-yellow-400 transition"><FaTwitter size={20} /></a>
                                <a href="#" aria-label="LinkedIn" className="hover:text-yellow-400 transition"><FaLinkedinIn size={20} /></a>
                                <a href="#" aria-label="YouTube" className="hover:text-yellow-400 transition"><FaYoutube size={20} /></a>
                            </div>
                        </div>
                        {/* Services */}
                        <div className="flex-1 min-w-45">
                            <h4 className="text-lg font-semibold text-white mb-3">Services</h4>
                            <ul className="space-y-2 text-sm">
                                <li>
                                    <Link href="/Inventory" className="hover:text-yellow-400 transition">
                                        Car Sales
                                    </Link>
                                </li>
                                <li><Link href="/service" className="hover:text-yellow-400 transition">Maintenance & Repairs</Link></li>
                                <li><Link href="/financing" className="hover:text-yellow-400 transition">Financing</Link></li>
                                <li><Link href="/sell-trade" className="hover:text-yellow-400 transition">Sell/Trade-In</Link></li>
                                <li><Link href="/service" className="hover:text-yellow-400 transition">Vehicle Detailing</Link></li>
                            </ul>
                        </div>
                        {/* Support */}
                        <div className="flex-1 min-w-45">
                            <h4 className="text-lg font-semibold text-white mb-3">Support</h4>
                            <ul className="space-y-2 text-sm">
                                <li><Link href="/contact" className="hover:text-yellow-400 transition">Contact Us</Link></li>
                                <li><a href="#" className="hover:text-yellow-400 transition">FAQs</a></li>
                                <li><a href="#" className="hover:text-yellow-400 transition">Warranty</a></li>
                                <li><a href="#" className="hover:text-yellow-400 transition">Customer Support</a></li>
                                <li><a href="#" className="hover:text-yellow-400 transition">After-Sales Service</a></li>
                            </ul>
                        </div>
                        {/* Company */}
                        <div className="flex-1 min-w-45">
                            <h4 className="text-lg font-semibold text-white mb-3">Company</h4>
                            <ul className="space-y-2 text-sm">
                                <li><Link href="/about" className="hover:text-yellow-400 transition">About Us</Link></li>
                                <li><a href="#" className="hover:text-yellow-400 transition">Our Team</a></li>
                                <li><a href="#" className="hover:text-yellow-400 transition">Careers</a></li>
                                <li><a href="#" className="hover:text-yellow-400 transition">Testimonials</a></li>
                                <li><a href="#" className="hover:text-yellow-400 transition">Blog</a></li>
                            </ul>
                        </div>
                        {/* Contact Info */}
                        <div className="flex-1 min-w-55">
                            <h4 className="text-lg font-semibold text-white mb-3">Contact</h4>
                            <ul className="space-y-2 text-sm text-gray-400">
                                <li><span className="text-yellow-400">Address:</span> 123 Main Street, City, Country</li>
                                <li><span className="text-yellow-400">Phone:</span> +234 800 123 4567</li>
                                <li><span className="text-yellow-400">Email:</span> info@agapeautos.com</li>
                                <li><span className="text-yellow-400">Hours:</span> Mon - Sat: 8am - 6pm</li>
                            </ul>
                        </div>
                    </div>
                    {/* Bottom Bar */}
                    <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between pt-6 text-xs text-gray-500">
                        <span>&copy; {new Date().getFullYear()} Agape Autos. All rights reserved.</span>
                        <div className="flex gap-4 mt-2 md:mt-0">
                            <a href="#" className="hover:text-yellow-400 transition">Privacy Policy</a>
                            <a href="#" className="hover:text-yellow-400 transition">Terms of Service</a>
                            <a href="#" className="hover:text-yellow-400 transition">Sitemap</a>
                        </div>
                    </div>
                </footer>
    )
}