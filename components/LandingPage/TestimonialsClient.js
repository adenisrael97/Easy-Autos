"use client";
import dynamic from "next/dynamic";

const Testimonials = dynamic(() => import("@/components/LandingPage/Testimonials"), {
  loading: () => <div className="w-full min-h-75 flex items-center justify-center text-gray-400">Loading testimonials...</div>,
});

export default function TestimonialsClient() {
  return <Testimonials />;
}
