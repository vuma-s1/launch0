'use client';

import Image from 'next/image';
import Link from 'next/link';
import '@/styles/hero-section.css';

export default function HeroSection() {
  return (
    <section className="relative overflow-hidden pt-24 pb-8 md:pt-40 md:pb-16 lg:py-48">
      {/* Header Effect Wrap */}
      <div className="absolute inset-0 overflow-visible flex flex-col justify-center items-center max-w-[1440px] mx-auto z-0">
        {/* Header Circles */}
        <div className="absolute left-1/2 top-[60%] -translate-x-1/2 -translate-y-1/2 transform -rotate-[15deg] perspective-[1000px] rotate-x-12 scale-[0.8] sm:scale-[0.6] md:scale-100">
          {/* Largest Circle */}
          <div className="header_circle_1 absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[1221px] h-[1221px] rounded-[10000px] p-[1px] opacity-70 bg-gradient-to-b from-white via-[#414142] to-[#414142]">
            <div className="header_circle-inner_1 w-full h-full rounded-[1000px] bg-gradient-to-b from-[#0e0f10] to-[#1d1e21]"></div>
          </div>
          
          {/* Middle Circle */}
          <div className="header_circle_2 absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[1004px] h-[1004px]">
            <div className="header_circle-inner_2_1 w-full h-full rounded-[1000px] bg-gradient-to-b from-black to-[#121315] opacity-95"></div>
          </div>
          
          {/* Middle Circle with Gradient Detail */}
          <div className="header_circle_2 detail absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[1004px] h-[1004px] rounded-[10000px] p-[2px] bg-[linear-gradient(315deg,#c8ff0000_8%,#c8ff00_12%,#c8ff0000_42%),linear-gradient(33deg,#c8ff0000_8%,#c8ff00_12%,#c8ff0000_42%)]">
            <div className="header_circle-inner_2 w-full h-full rounded-[1000px] bg-gradient-to-b from-black to-[#121315]"></div>
          </div>
          
          {/* Smallest Circle */}
          <div className="header_circle_3 absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[789px] h-[789px] rounded-[10000px] p-[1px] opacity-80 bg-gradient-to-b from-white to-[#1d1e2100]">
            <div className="header_circle-inner_3 w-full h-full rounded-[1000px] bg-gradient-to-b from-[#070809] to-black"></div>
          </div>
        </div>
      
        <div className="header_blur-small purple red"></div>
        <div className="header_blur-small purple"></div>
        <div className="stars right"></div>
        <div className="stars"></div>
        <div className="header_blur"></div>
        <div className="header-blur red"></div>
      </div>

      {/* Hero Content */}
      <div className="container relative z-10 mx-auto px-4 sm:px-6">
        <div className="flex flex-col items-center justify-center text-center min-h-[70vh] sm:min-h-[80vh] md:min-h-0">
          <div className="header_text-wrap relative w-full max-w-[340px] sm:max-w-[800px] lg:max-w-[1000px] mx-auto">
            <div className="header_text large">
              <h1 className="text-[20px] sm:text-[40px] leading-[1.2] md:text-5xl lg:text-6xl mx-auto text-white">
                We help businesses
                <span className="block mt-1">scale with AI</span>
              </h1>

              <p className="mt-2 sm:mt-6 text-[11px] sm:text-[16px] leading-[1.6] md:text-xl text-white/70 mx-auto max-w-[220px] sm:max-w-[600px]">
                We help businesses build a scalable internal system
                <span className="block mt-1">to save them 200+ hours a month.</span>
              </p>

              <div className="button_wrap relative mt-3 sm:mt-10 flex flex-col sm:flex-row justify-center gap-2 sm:gap-4">
                <Link
                  href="https://calendly.com/tom-creme/discovery-call-creme"
                  className="creme-button-primary py-3 px-6 sm:py-3.5 sm:px-8 flex items-center justify-center gap-2 w-full sm:w-auto rounded-full bg-gradient-to-r from-[#c8ff00] to-[#96bf00] hover:from-[#d4ff33] hover:to-[#a6d400] text-black font-medium min-w-[200px]"
                >
                  <span>Schedule A Call</span>
                  <Image
                    src="https://cdn.prod.website-files.com/63c26552be9ea599a179aeed/657b388b5a2f8cade34f6f94_arrow-right.svg"
                    alt="Arrow right"
                    width={16}
                    height={16}
                    className="w-4 h-4"
                  />
                </Link>

                <div className="kpi_cta relative">
                  <Link
                    href="/kpi-dashboard"
                    className="creme-button-outline py-3.5 px-8 text-[#c8ff00] hover:text-[#d4ff33] flex items-center justify-center gap-2 w-full sm:w-auto transition-colors border border-[#c8ff00]/20 hover:border-[#c8ff00]/40 bg-[rgba(200,255,0,0.1)] rounded-full min-w-[200px]"
                  >
                    <span>Access Your KPI Dashboard</span>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
