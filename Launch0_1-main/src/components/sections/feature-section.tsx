'use client';

import Image from 'next/image';
import Link from 'next/link';

export default function FeatureSection() {
  const features = [
    {
      title: "AI-Powered Automation",
      description: "Implement smart workflows that handle repetitive tasks, freeing your team to focus on high-value work.",
      icon: "https://ext.same-assets.com/2675109532/4232413090.svg",
    },
    {
      title: "Custom Internal Tools",
      description: "Tailored digital solutions designed specifically for your business processes and team structure.",
      icon: "https://ext.same-assets.com/2675109532/503286976.svg",
    },
    {
      title: "Centralized Data",
      description: "Connect disparate systems into one unified platform for better visibility and decision-making.",
      icon: "https://ext.same-assets.com/2675109532/2825732690.svg",
    },
    {
      title: "Team Efficiency",
      description: "Measure and improve team performance with real-time metrics and productivity insights.",
      icon: "https://ext.same-assets.com/2675109532/2457861265.svg",
    },
  ];

  return (
    <section className="py-20 lg:py-32 relative overflow-hidden">
      <div className="container relative z-10">
        <div className="text-center mb-16">
          <span className="text-white/50 uppercase text-sm tracking-wide">Features</span>
          <h2 className="text-3xl md:text-4xl font-bold mt-4">
            Built for scalable operations
          </h2>
          <p className="text-white/70 md:text-lg mt-4 max-w-2xl mx-auto">
            Our AI-powered internal tools create efficient systems that grow with your business
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="rounded-xl overflow-hidden border border-white/10 bg-gradient-to-b from-white/5 to-white/0 backdrop-blur-sm p-6"
            >
              <div className="h-12 w-12 rounded-full bg-white/5 flex items-center justify-center mb-6">
                <Image
                  src={feature.icon}
                  alt={feature.title}
                  width={24}
                  height={24}
                  className="w-6 h-6"
                />
              </div>

              <h3 className="text-xl font-semibold mb-4">{feature.title}</h3>
              <p className="text-white/70">{feature.description}</p>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <Link
            href="https://calendly.com/tom-creme/discovery-call-creme"
            className="creme-button-primary py-3 px-8"
          >
            Learn How We Can Help
          </Link>
        </div>
      </div>
    </section>
  );
}
