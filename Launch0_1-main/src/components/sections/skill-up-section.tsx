'use client';

import React from 'react';
import Link from 'next/link';

export default function SkillUpSection() {
  const features = [
    {
      icon: "📚",
      title: "Self-paced video content",
      description: "Master new skills on your schedule with our flexible, self-paced video content."
    },
    {
      icon: "👥",
      title: "Office hours with Mentors for clearing blockers",
      description: "Overcome challenges fast with dedicated mentor office hours."
    },
    {
      icon: "🎯",
      title: "Project driven approach to achieve outcomes",
      description: "Gain practical skills through our project-driven approach for real results."
    },
    {
      icon: "🌐",
      title: "Access to network of 1000+ learners",
      description: "Tap into our vibrant network of learners, enhancing your learning experience."
    }
  ];

  return (
    <section className="relative py-16 bg-[#1a1a1a]">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="max-w-3xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <div className="inline-block px-3 py-1.5 mb-4 bg-white/5 rounded-full">
              <span className="text-[13px] uppercase tracking-wider font-medium text-white/70">
                SKILL UP, SCALE UP
              </span>
            </div>
            <h2 className="text-4xl sm:text-5xl font-medium text-white mb-4">
              Upskill your Team;
              <br />
              Upscale your Business
            </h2>
            <p className="text-[15px] sm:text-[17px] leading-relaxed text-white/70 font-light max-w-2xl mx-auto">
              Elevate your team's skills to fuel efficiency and ongoing innovation for sustained business growth.
            </p>
          </div>

          {/* Why learn section */}
          <div className="mb-12">
            <h3 className="text-[13px] uppercase tracking-wider font-medium text-[#c8ff00] mb-8 text-center">
              Why learn with Outskill?
            </h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {features.map((feature, index) => (
                <div key={index} className="flex items-start gap-4 bg-[#212121]/50 p-6 rounded-lg border border-[#333333]">
                  <span className="text-2xl">{feature.icon}</span>
                  <div>
                    <h4 className="text-[15px] font-medium text-white mb-2">
                      {feature.title}
                    </h4>
                    <p className="text-[13px] sm:text-[15px] leading-relaxed text-white/70 font-light">
                      {feature.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* CTA Button */}
          <div className="text-center">
            <Link 
              href="#"
              className="inline-block px-6 py-3 border border-white/20 text-[13px] uppercase tracking-wider font-medium text-white hover:bg-white/10 transition-colors rounded-lg"
            >
              Upskill Your Team
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
} 