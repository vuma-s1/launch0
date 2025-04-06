'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

export default function FoundersNetworkSection() {
  return (
    <section className="relative py-24 bg-[#1a1a1a] overflow-hidden">
      {/* Header Text */}
      <div className="container mx-auto px-4 sm:px-6 mb-16">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-medium text-white">
            YC is <span className="text-[#c8ff00]">run by startup founders</span> who have built exactly what they wanted when starting and growing a startup.
          </h2>
        </div>
      </div>

      {/* Feature Grid */}
      <div className="container mx-auto px-4 sm:px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Private Social Network */}
            <div className="bg-[#212121] rounded-2xl p-8 border border-white/10">
              <div className="aspect-[16/9] relative mb-6 rounded-lg overflow-hidden">
                <Image
                  src="/founders-network.jpg"
                  alt="Private social network only for founders"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="space-y-4">
                <h3 className="text-xl font-medium text-white flex items-center gap-2">
                  <span className="w-1 h-6 bg-[#ff4d4d]"></span>
                  Private social network only for founders
                </h3>
                <p className="text-[15px] leading-relaxed text-white/70 font-light">
                  YC founders get to benefit from the collective wisdom of over 9000 YC alumni. They can access these alums through Bookface, our private social network. We have a forum for asking questions to the community, a founder directory for finding specific people who can provide advice and intros, and a company directory for finding potential customers.
                </p>
              </div>
            </div>

            {/* Exclusive Deals */}
            <div className="bg-[#212121] rounded-2xl p-8 border border-white/10">
              <div className="aspect-[16/9] relative mb-6 rounded-lg overflow-hidden bg-white/5 flex items-center justify-center">
                <div className="grid grid-cols-4 gap-4 p-8 w-full">
                  {/* Company logos grid */}
                  <div className="flex items-center justify-center">
                    <Image src="/logos/stripe.svg" alt="Stripe" width={40} height={40} />
                  </div>
                  <div className="flex items-center justify-center">
                    <Image src="/logos/aws.svg" alt="AWS" width={40} height={40} />
                  </div>
                  <div className="flex items-center justify-center">
                    <Image src="/logos/github.svg" alt="GitHub" width={40} height={40} />
                  </div>
                  <div className="flex items-center justify-center">
                    <Image src="/logos/gusto.svg" alt="Gusto" width={40} height={40} />
                  </div>
                </div>
              </div>
              <div className="space-y-4">
                <h3 className="text-xl font-medium text-white flex items-center gap-2">
                  <span className="w-1 h-6 bg-[#ff4d4d]"></span>
                  Exclusive deals
                </h3>
                <p className="text-[15px] leading-relaxed text-white/70 font-light">
                  YC founders have access to over 1000 deals from leading software companies. Every YC company gets free credits or significant discounts on hosting, banking, cap table management, back office, and much more. Companies report these deals to be worth in excess of $500,000.
                </p>
              </div>
            </div>

            {/* Written Advice */}
            <div className="bg-[#212121] rounded-2xl p-8 border border-white/10">
              <div className="aspect-[16/9] relative mb-6 rounded-lg overflow-hidden">
                <Image
                  src="/written-advice.jpg"
                  alt="The best written advice"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="space-y-4">
                <h3 className="text-xl font-medium text-white flex items-center gap-2">
                  <span className="w-1 h-6 bg-[#ff4d4d]"></span>
                  The best written advice
                </h3>
                <p className="text-[15px] leading-relaxed text-white/70 font-light">
                  YC founders get to benefit from our collective experience funding 5000 companies across almost 20 years. We have extensive documentation for common questions about fundraising, go to market, sales, product market fit, mental health, hiring, and much more.
                </p>
              </div>
            </div>

            {/* Networks to Build Your Team */}
            <div className="bg-[#212121] rounded-2xl p-8 border border-white/10">
              <div className="aspect-[16/9] relative mb-6 rounded-lg overflow-hidden">
                <Image
                  src="/team-building.jpg"
                  alt="Networks to build your team"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="space-y-4">
                <h3 className="text-xl font-medium text-white flex items-center gap-2">
                  <span className="w-1 h-6 bg-[#ff4d4d]"></span>
                  Networks to build your team
                </h3>
                <p className="text-[15px] leading-relaxed text-white/70 font-light">
                  Through <Link href="#" className="text-white hover:text-[#ff4d4d] transition-colors">Work at a Startup</Link> and <Link href="#" className="text-white hover:text-[#ff4d4d] transition-colors">HN</Link>, we help our founders hire the small number of early engineers and other team members critical to finding product market fit. At any given time there are 150,000+ candidates searching for jobs at early stage YC companies.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
} 