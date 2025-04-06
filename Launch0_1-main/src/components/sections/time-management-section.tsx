'use client';

import React from 'react';

export default function TimeManagementSection() {
  return (
    <section className="relative py-16 bg-[#1a1a1a]">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="max-w-5xl mx-auto space-y-20">
          {/* About Darn Time Section */}
          <div className="text-center space-y-8">
            <h2 className="text-2xl md:text-3xl text-gray-300 italic">
              About Darn Time™ is the <span className="text-[#ff9966]">near-effortless</span> schedule management system for business 
              owners who need fast simple strategies for prioritizing their day & to-do's.
            </h2>
            
            {/* Product Cards Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
              {/* Time Card */}
              <div className="bg-[#212121] p-6 rounded-lg border border-[#333333] transform hover:scale-105 transition-transform">
                <div className="bg-[#c8ff00] text-black text-sm px-3 py-1 rounded-full inline-block mb-4">CLASS ONE</div>
                <h3 className="text-2xl font-bold text-white mb-2">TIME</h3>
                <div className="h-40 bg-[#2a2a2a] rounded-lg"></div>
              </div>

              {/* Tasks Card */}
              <div className="bg-[#212121] p-6 rounded-lg border border-[#333333] transform hover:scale-105 transition-transform">
                <div className="bg-[#c8ff00] text-black text-sm px-3 py-1 rounded-full inline-block mb-4">CLASS TWO</div>
                <h3 className="text-2xl font-bold text-white mb-2">TASKS</h3>
                <div className="h-40 bg-[#2a2a2a] rounded-lg"></div>
              </div>

              {/* Focus Card */}
              <div className="bg-[#212121] p-6 rounded-lg border border-[#333333] transform hover:scale-105 transition-transform">
                <div className="bg-[#c8ff00] text-black text-sm px-3 py-1 rounded-full inline-block mb-4">CLASS THREE</div>
                <h3 className="text-2xl font-bold text-white mb-2">FOCUS</h3>
                <div className="h-40 bg-[#2a2a2a] rounded-lg"></div>
              </div>
            </div>
          </div>

          {/* Venn Diagram Section */}
          <div className="space-y-12">
            <h2 className="text-2xl md:text-3xl text-center text-gray-300">
              You <span className="text-[#ff9966]">need ALL three</span>, because just two out of 
              three... and the <span className="text-[#ff9966] italic">system breaks.</span>
            </h2>

            {/* Venn Diagram */}
            <div className="relative max-w-3xl mx-auto aspect-square">
              <div className="absolute inset-0 flex items-center justify-center">
                {/* Venn Circles */}
                <div className="relative w-full h-full max-w-2xl">
                  {/* Estimating Time Circle */}
                  <div className="absolute top-0 left-1/4 w-1/2 h-1/2 rounded-full bg-[#ff9ecd20] border border-[#ff9ecd40]">
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="text-center">
                        <h3 className="text-[#ff9ecd] font-semibold">ESTIMATING<br/>TIME</h3>
                      </div>
                    </div>
                    <div className="absolute -left-48 top-1/4 text-sm text-gray-400 italic max-w-[200px] text-right">
                      You have a good grasp of time and can focus but don't know how to prioritize.
                    </div>
                  </div>

                  {/* Prioritizing Tasks Circle */}
                  <div className="absolute top-0 right-1/4 w-1/2 h-1/2 rounded-full bg-[#c8ff0020] border border-[#c8ff0040]">
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="text-center">
                        <h3 className="text-[#c8ff00] font-semibold">PRIORITIZING<br/>TASKS</h3>
                      </div>
                    </div>
                    <div className="absolute -right-48 top-1/4 text-sm text-gray-400 italic max-w-[200px] text-left">
                      You have an accurate view but you don't stick to your plan.
                    </div>
                  </div>

                  {/* Mastering Focus Circle */}
                  <div className="absolute bottom-0 left-1/3 w-1/2 h-1/2 rounded-full bg-[#8a85ff20] border border-[#8a85ff40]">
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="text-center">
                        <h3 className="text-[#8a85ff] font-semibold">MASTERING<br/>FOCUS</h3>
                      </div>
                    </div>
                    <div className="absolute right-0 bottom-0 text-sm text-gray-400 italic max-w-[200px] text-left">
                      You are getting stuff done but there's never enough time to finish it all.
                    </div>
                  </div>

                  {/* Productivity Wizard Label */}
                  <div className="absolute bottom-1/4 left-1/4 text-[#c8a185] font-['Playfair_Display'] italic text-2xl">
                    Productivity<br/>Wizard
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
} 