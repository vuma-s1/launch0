'use client';

import React from 'react';
import Image from 'next/image';

export default function OfferRulesSection() {
  return (
    <section className="relative py-16 bg-[#1a1a1a]">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="max-w-4xl mx-auto">
          {/* Checkmark and Text */}
          <div className="flex items-start gap-8 mb-20">
            <div className="w-20 h-20 rounded-full bg-[#ffd9d9] flex items-center justify-center flex-shrink-0">
              <svg
                className="w-12 h-12 text-[#1a1a1a]"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={3}
                  d="M5 13l4 4L19 7"
                />
              </svg>
            </div>
            <div>
              <p className="text-xl md:text-2xl text-gray-300 leading-relaxed">
                If you can wrap your expertise up using our 
                <span className="text-[#c8ff00] font-semibold"> Three Simple Golden Offer Rules</span>, you can 
                take yourself to market with reasonable assurance that you will have something that 
                <span className="font-bold text-white"> rocks your customers' socks off!</span>
              </p>
            </div>
          </div>

          {/* Middle Content */}
          <div className="text-center space-y-6 mb-16">
            <p className="text-xl md:text-2xl text-gray-300">
              Many people <span className="text-[#c8ff00] font-semibold">KNOW this stuff logically already</span> but get lost on how to 
              accomplish these three things quickly and painlessly.
            </p>
            
            <div className="space-y-2">
              <p className="text-xl md:text-2xl text-[#ff9ecd]">
                Key word there? <span className="font-bold">QUICKLY.</span>
              </p>
            </div>
          </div>

          {/* Enhanced Quick Fix Title and Logo Section */}
          <div className="text-center space-y-12 relative">
            <h3 className="text-3xl md:text-4xl text-[#c8a185] font-script italic relative inline-block">
              Enter... the Quick Fix...
              <div className="absolute -bottom-2 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-[#c8a185] to-transparent opacity-50"></div>
            </h3>
            
            {/* Enhanced Offer Cure Logo */}
            <div className="relative py-20">
              {/* Background Effects */}
              <div className="absolute inset-0 bg-gradient-to-r from-[#c8a18505] via-[#c8a18515] to-[#c8a18505] rounded-3xl"></div>
              
              {/* Animated Rays */}
              <div className="absolute inset-0 overflow-hidden">
                <div className="absolute inset-[-100%] animate-[spin_20s_linear_infinite] opacity-10">
                  {[...Array(12)].map((_, i) => (
                    <div
                      key={i}
                      className="absolute top-1/2 left-1/2 h-full origin-bottom"
                      style={{
                        transform: `translate(-50%, -50%) rotate(${i * 30}deg)`,
                      }}
                    >
                      <div className="h-1/2 w-[2px] bg-gradient-to-b from-[#c8a185] to-transparent"></div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Main Logo Content */}
              <div className="relative">
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] bg-[#c8a18510] rounded-full blur-3xl"></div>
                <h2 className="relative text-4xl md:text-6xl font-bold text-center">
                  <span className="text-[#c8a185] inline-block transform hover:scale-105 transition-transform duration-300">THE</span>
                  <br />
                  <span className="text-[#c8a185] tracking-[0.2em] inline-block transform hover:scale-105 transition-transform duration-300">OFFER</span>
                  <br />
                  <span className="text-[#c8a185] font-script italic inline-block transform hover:scale-105 transition-transform duration-300">Cure</span>
                </h2>

                {/* Decorative Elements */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full max-w-[600px]">
                  {/* Inner Glow */}
                  <div className="absolute inset-0 bg-gradient-to-r from-[#c8a18510] via-[#c8a18520] to-[#c8a18510] blur-xl rounded-full"></div>
                  
                  {/* Outer Ring */}
                  <div className="absolute -inset-4 border border-[#c8a185] opacity-10 rounded-full"></div>
                  <div className="absolute -inset-8 border border-[#c8a185] opacity-5 rounded-full"></div>
                </div>
              </div>

              {/* Sparkles */}
              <div className="absolute inset-0">
                {[...Array(6)].map((_, i) => (
                  <div
                    key={i}
                    className="absolute w-1 h-1 bg-[#c8a185]"
                    style={{
                      top: `${Math.random() * 100}%`,
                      left: `${Math.random() * 100}%`,
                      animation: `twinkle ${1 + Math.random() * 2}s infinite ${Math.random() * 2}s`,
                    }}
                  ></div>
                ))}
              </div>
            </div>
          </div>

          {/* Add custom keyframes for animations */}
          <style jsx>{`
            @keyframes twinkle {
              0%, 100% { opacity: 0; transform: scale(0.5); }
              50% { opacity: 1; transform: scale(1.5); }
            }
          `}</style>
        </div>
      </div>
    </section>
  );
} 