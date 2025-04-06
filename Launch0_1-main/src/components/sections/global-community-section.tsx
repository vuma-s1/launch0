'use client';

import React from 'react';

const ExperienceBar = ({ percentage, years }: { percentage: string; years: string }) => (
  <div className="flex items-center gap-4 w-full max-w-md">
    <div className="relative w-full h-12 bg-[#212121] rounded-lg overflow-hidden">
      <div 
        className="absolute left-0 top-0 h-full bg-[#c8ff00]" 
        style={{ width: percentage }}
      />
      <div className="absolute inset-0 flex items-center justify-between px-4">
        <span className="text-2xl font-medium text-black">{percentage}</span>
        <span className="text-sm text-white/70">{years}</span>
      </div>
    </div>
  </div>
);

export default function GlobalCommunitySection() {
  const experienceData = [
    { percentage: "50%", years: "5-10 years" },
    { percentage: "40%", years: "10+ years" },
    { percentage: "10%", years: "0-2 years" }
  ];

  return (
    <section className="relative py-20 bg-[#1a1a1a] overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left Column - Text Content */}
            <div className="space-y-6">
              <div className="inline-block px-3 py-1.5 bg-white/5 rounded-full">
                <span className="text-[13px] uppercase tracking-wider font-medium text-white/70">
                  LEARNERS FROM 8+ COUNTRIES
                </span>
              </div>
              
              <h2 className="text-4xl sm:text-5xl font-medium text-white">
                Join a Global Community Shaping the Future of AI
              </h2>
              
              <p className="text-[15px] sm:text-[17px] leading-relaxed text-white/70 font-light">
                55% of our Community consists of Founders, Working Professionals, Students & More.
              </p>

              <div className="space-y-4 pt-4">
                {experienceData.map((data, index) => (
                  <ExperienceBar 
                    key={index}
                    percentage={data.percentage}
                    years={data.years}
                  />
                ))}
              </div>
            </div>

            {/* Right Column - World Map */}
            <div className="relative">
              <div className="w-full aspect-[4/3]">
                <div className="absolute inset-0 bg-[url('/world-map.svg')] bg-contain bg-center bg-no-repeat opacity-20" />
                <svg 
                  viewBox="0 0 1000 650" 
                  className="w-full h-full"
                  style={{ filter: 'drop-shadow(0 0 10px rgba(200, 255, 0, 0.2))' }}
                >
                  {/* Highlighted regions in neon green */}
                  <path 
                    d="M170 150 L400 150 L400 300 L170 300 Z" 
                    fill="#c8ff00" 
                    fillOpacity="0.2"
                  />
                  {/* Add more path elements for other highlighted regions */}
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
} 