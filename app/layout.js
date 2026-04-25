import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { ThemeProvider } from "@/components/theme/ThemeProvider";
import ThemeScript from "@/components/theme/ThemeScript";
import ScrollProgress from "@/components/feedback/ScrollProgress";
import BackToTop from "@/components/feedback/BackToTop";
import { ToastProvider } from "@/components/feedback/Toaster";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

export const metadata = {
  title: "Easy Autos | Premium Vehicles",
  description:
    "Easy Autos — Premium vehicles, exceptional service. Explore our curated selection of Toyota, Mercedes, Lexus, BMW, and Honda vehicles across Nigeria.",
  keywords:
    "car dealership, used cars, new cars, Toyota, Mercedes, BMW, Lexus, Honda, Nigeria, Lagos",
  openGraph: {
    title: "Easy Autos | Premium Vehicles",
    description:
      "Discover your dream car at Easy Autos. Premium selection, transparent pricing, exceptional service.",
    type: "website",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="preconnect" href="https://fonts.googleapis.com" crossOrigin="anonymous" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <ThemeScript />
      </head>
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased bg-page text-fg`}>
        <ThemeProvider>
          <ToastProvider>
            <ScrollProgress />
            <Navbar />
            {children}
            <Footer />
            <BackToTop />
          </ToastProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
