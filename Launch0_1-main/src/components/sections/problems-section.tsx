'use client';

import React from 'react';

export default function ProblemsSection() {
  return (
    <section className="relative py-16 bg-[#1a1a1a]">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="max-w-4xl mx-auto">
          {/* Email Header */}
          <div className="bg-[#212121] rounded-lg p-6 mb-8 border border-[#333333]">
            <div className="flex items-start gap-6">
              <div className="w-16 h-16 bg-[#c8a185] rounded-full flex items-center justify-center text-3xl font-bold text-white">
                1
              </div>
              <div className="flex-1 space-y-2">
                <div className="flex flex-col">
                  <span className="text-[#c8a185]">Date:</span>
                  <span className="text-gray-300">About three weeks into your procrastination routine</span>
                </div>
                <div className="flex flex-col">
                  <span className="text-[#c8a185]">From:</span>
                  <span className="text-gray-300">Julie + Cathy (members of info product creators anonymous)</span>
                </div>
              </div>
            </div>
          </div>

          {/* Main Content */}
          <div className="space-y-8 text-center">
            <div className="space-y-4">
              <p className="text-gray-300 text-xl">
                We know your <span className="text-[#c8ff00] font-semibold">time is valuable,</span> so 
                <span className="text-[#c8ff00] font-semibold"> we promise not to waste it</span> with fluffery.
              </p>
              <p className="text-gray-300 text-xl">
                There is a <span className="text-[#c8ff00] font-semibold">big problem</span> in the education market right now.
              </p>
              <div className="flex items-center justify-center space-x-4">
                <div className="w-32 h-[2px] bg-[#c8a185]"></div>
                <h2 className="text-[#c8a185] text-3xl font-semibold">Actually three BIG problems.</h2>
                <div className="w-32 h-[2px] bg-[#c8a185]"></div>
              </div>
            </div>

            {/* Problems Grid */}
            <div className="grid md:grid-cols-3 gap-8 mt-12">
              {/* Problem 1 */}
              <div className="bg-[#212121] p-6 rounded-lg border border-[#333333]">
                <h3 className="text-[#ff9ecd] text-2xl font-semibold mb-4">PROBLEM № 1</h3>
                <p className="text-gray-300">
                  Real, true experts <span className="text-[#c8ff00]">struggle to sell their info products</span> because, 
                  <span className="font-semibold text-white">while they know their field,</span> 
                  <span className="text-[#c8ff00]"> they don't understand online marketing.</span> They think their 
                  expertise is enough and become disheartened when other people with way less skill 
                  seem to grab the market share.
                </p>
              </div>

              {/* Problem 2 */}
              <div className="bg-[#212121] p-6 rounded-lg border border-[#333333]">
                <h3 className="text-[#ff9ecd] text-2xl font-semibold mb-4">PROBLEM № 2</h3>
                <p className="text-gray-300">
                  Many of those who DO understand online marketing 
                  <span className="text-[#c8ff00]"> unethically use it to their advantage</span>...creating stuff that 
                  totally under-delivers. They aren't experts in anything other than marketing, so they churn 
                  out <span className="text-white font-semibold">crappy courses and programs</span> that don't even do 
                  half of what they promise.
                </p>
              </div>

              {/* Problem 3 */}
              <div className="bg-[#212121] p-6 rounded-lg border border-[#333333]">
                <h3 className="text-[#ff9ecd] text-2xl font-semibold mb-4">PROBLEM № 3</h3>
                <p className="text-gray-300">
                  Attempting to solve this crisis are the large influx of 
                  <span className="text-white font-semibold">"offer gurus"</span> who are here to teach 
                  you about crafting an offer, but who OVERCOMPLICATE the process and make it difficult to 
                  actually launch anything. <span className="text-[#c8ff00]">You're so bogged down with theory</span> that 
                  you doubt yourself every step of the way.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
} 