"use client";

import { useState } from "react";

export default function ContactForm() {
    const [form, setForm] = useState({
        name: "",
        email: "",
        phone: "",
        subject: "",
        message: "",
    });
    const [submitted, setSubmitted] = useState(false);

    function handleChange(e) {
        setForm({ ...form, [e.target.name]: e.target.value });
    }

    function handleSubmit(e) {
        e.preventDefault();
        setSubmitted(true);
        // Here you would send the form data to your backend or email service
    }

    return (
        <section className="max-w-xl mx-auto mt-8 sm:mt-12 rounded-2xl shadow-2xl p-4 sm:p-8 border border-gray-200 bg-linear-to-br from-gray-700 via-gray-800 to-black">
            <h2 className="text-2xl font-bold text-black mb-6 flex items-center gap-2">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-7 h-7 text-yellow-500"><path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75v10.5A2.25 2.25 0 004.5 19.5h15a2.25 2.25 0 002.25-2.25V6.75M2.25 6.75A2.25 2.25 0 014.5 4.5h15a2.25 2.25 0 012.25 2.25M2.25 6.75l9.72 7.29a2.25 2.25 0 002.58 0l9.72-7.29" /></svg>
                Send Us a Message
            </h2>
            <form onSubmit={handleSubmit} className="flex flex-col gap-5">
                <div className="flex flex-col sm:flex-row gap-4 mt-4">
                    <div className="flex-1">
                        <label className="text-yellow-600 font-semibold mb-1 flex items-center gap-1" htmlFor="name">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 text-yellow-500"><path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.5 19.5a7.5 7.5 0 0115 0v.75a.75.75 0 01-.75.75h-13.5a.75.75 0 01-.75-.75V19.5z" /></svg>
                            Name
                        </label>
                        <input type="text" name="name" id="name" required value={form.name} onChange={handleChange} className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500 bg-gray-50 text-black" placeholder="Your Name" />
                    </div>
                    <div className="flex-1">
                        <label className="text-yellow-600 font-semibold mb-1 flex items-center gap-1" htmlFor="email">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 text-yellow-500"><path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5A2.25 2.25 0 0119.5 19.5h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0l-9.72 7.29a2.25 2.25 0 01-2.58 0L2.25 6.75" /></svg>
                            Email
                        </label>
                        <input type="email" name="email" id="email" required value={form.email} onChange={handleChange} className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500 bg-gray-50 text-black" placeholder="you@email.com" />
                    </div>
                </div>
                <div className="flex flex-col sm:flex-row gap-4 mt-4">
                    <div className="flex-1">
                        <label className="text-yellow-600 font-semibold mb-1 flex items-center gap-1" htmlFor="phone">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 text-yellow-500"><path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75v10.5A2.25 2.25 0 004.5 19.5h15a2.25 2.25 0 002.25-2.25V6.75M2.25 6.75A2.25 2.25 0 014.5 4.5h15a2.25 2.25 0 012.25 2.25M2.25 6.75l9.72 7.29a2.25 2.25 0 002.58 0l9.72-7.29" /></svg>
                            Phone
                        </label>
                        <input type="tel" name="phone" id="phone" required value={form.phone} onChange={handleChange} className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500 bg-gray-50 text-black" placeholder="Phone Number" />
                    </div>
                    <div className="flex-1">
                        <label className="text-yellow-600 font-semibold mb-1 flex items-center gap-1" htmlFor="subject">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 text-yellow-500"><path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6l4 2" /></svg>
                            Subject
                        </label>
                        <input type="text" name="subject" id="subject" required value={form.subject} onChange={handleChange} className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500 bg-gray-50 text-black" placeholder="Subject" />
                    </div>
                </div>
                <div className="mt-4">
                    <label className="text-yellow-600 font-semibold mb-1 flex items-center gap-1" htmlFor="message">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 text-yellow-500"><path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5A2.25 2.25 0 0119.5 19.5h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0l-9.72 7.29a2.25 2.25 0 01-2.58 0L2.25 6.75" /></svg>
                        Message
                    </label>
                    <textarea name="message" id="message" required value={form.message} onChange={handleChange} rows={5} className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500 bg-gray-50 text-black resize-none" placeholder="Type your message here..." />
                </div>
                <button type="submit" className="mt-2 bg-yellow-500 hover:bg-yellow-600 text-white font-bold py-3 rounded-lg shadow-lg transition-colors duration-200 flex items-center justify-center gap-2">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6"><path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" /></svg>
                    Send Message
                </button>
                {submitted && (
                    <div className="text-black font-semibold text-center mt-2">Thank you! Your message has been sent.</div>
                )}
            </form>
        </section>
    );
}