'use client';

import React from 'react';

export default function ShippingSection() {
  return (
    <section className="relative py-16 bg-[#1a1a1a]">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="max-w-3xl mx-auto bg-[#212121] rounded-lg shadow-2xl p-8 border border-[#333333]">
          {/* Header */}
          <div className="flex justify-between items-center bg-black text-white p-4 rounded-t-lg -mt-8 -mx-8 mb-6 border-b border-[#333333]">
            <div className="flex-1">
              <h2 className="text-lg font-medium text-[#c8ff00]">SHIPPING</h2>
              <p className="text-sm text-gray-400">Where Should We Ship It?</p>
            </div>
            <div className="flex-1 text-right">
              <h2 className="text-lg font-medium text-[#c8ff00]">YOUR INFO</h2>
              <p className="text-sm text-gray-400">Upgrade Your Order & Save!</p>
            </div>
          </div>

          {/* Form */}
          <form className="space-y-4">
            <div>
              <input
                type="text"
                placeholder="Full Name..."
                className="w-full px-4 py-3 bg-[#2a2a2a] border border-[#333333] rounded-md text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-[#c8ff00] focus:border-transparent"
              />
            </div>
            <div>
              <input
                type="email"
                placeholder="Email Address..."
                className="w-full px-4 py-3 bg-[#2a2a2a] border border-[#333333] rounded-md text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-[#c8ff00] focus:border-transparent"
              />
            </div>
            
            <div className="mt-6">
              <h3 className="text-[#c8ff00] font-medium mb-3">SHIPPING</h3>
              <div className="space-y-4">
                <input
                  type="text"
                  placeholder="Full Address..."
                  className="w-full px-4 py-3 bg-[#2a2a2a] border border-[#333333] rounded-md text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-[#c8ff00] focus:border-transparent"
                />
                <input
                  type="text"
                  placeholder="City Name..."
                  className="w-full px-4 py-3 bg-[#2a2a2a] border border-[#333333] rounded-md text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-[#c8ff00] focus:border-transparent"
                />
                <div className="grid grid-cols-2 gap-4">
                  <select className="w-full px-4 py-3 bg-[#2a2a2a] border border-[#333333] rounded-md text-white focus:outline-none focus:ring-2 focus:ring-[#c8ff00] focus:border-transparent appearance-none">
                    <option value="" className="bg-[#2a2a2a]">Select Country</option>
                    <option value="US" className="bg-[#2a2a2a]">United States</option>
                    <option value="CA" className="bg-[#2a2a2a]">Canada</option>
                    <option value="UK" className="bg-[#2a2a2a]">United Kingdom</option>
                  </select>
                  <input
                    type="text"
                    placeholder="Zip Code..."
                    className="w-full px-4 py-3 bg-[#2a2a2a] border border-[#333333] rounded-md text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-[#c8ff00] focus:border-transparent"
                  />
                </div>
              </div>
            </div>

            <button
              type="submit"
              className="w-full py-4 px-6 bg-[#c8ff00] text-black font-bold rounded-md hover:bg-[#d4ff33] transition-colors mt-6 shadow-[0_0_15px_rgba(200,255,0,0.3)]"
            >
              GO TO STEP #2
            </button>

            <p className="text-center text-sm text-gray-400 mt-4">
              We Respect Your Privacy & Information.
            </p>
          </form>
        </div>
      </div>
    </section>
  );
} 