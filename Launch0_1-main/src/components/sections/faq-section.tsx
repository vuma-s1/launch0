"use client";

import { useState } from 'react';

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs = [
    {
      question: 'How long does it take to implement automation?',
      answer: 'Implementation time varies based on process complexity. Simple automations can be live within 2-4 weeks, while more complex systems may take 2-3 months. We provide a detailed timeline during initial consultation.'
    },
    {
      question: 'Do you provide ongoing support?',
      answer: 'Yes, we offer comprehensive support packages. Each plan includes maintenance periods, and we provide 24/7 support for enterprise clients. Regular updates and optimizations are part of our service.'
    },
    {
      question: 'What types of processes can be automated?',
      answer: 'We can automate a wide range of business processes including data entry, document processing, customer service, inventory management, and more. Our AI solutions are customizable to your specific needs.'
    },
    {
      question: 'How do you ensure data security?',
      answer: 'We implement industry-standard security protocols, including end-to-end encryption, secure cloud storage, and regular security audits. All solutions comply with relevant data protection regulations.'
    },
    {
      question: 'Can the automation scale with my business?',
      answer: 'Absolutely! Our solutions are built to scale. We design systems that can handle increased workloads and can be easily modified as your business grows and requirements change.'
    }
  ];

  return (
    <section className="relative py-20 lg:py-32 bg-black overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-[#c8ff00]/10 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-[#c8ff00]/10 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-[#c8ff00]/10 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <span className="text-[#c8ff00] uppercase text-sm tracking-wide font-medium">FAQ</span>
          <h2 className="text-3xl md:text-4xl font-bold mt-4 text-white">
            Frequently Asked Questions
          </h2>
          <p className="text-white/70 md:text-lg mt-4 max-w-2xl mx-auto">
            Find answers to common questions about our automation solutions
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="mb-4 group"
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full flex items-center justify-between p-6 text-left bg-black/40 border border-[#c8ff00]/10 rounded-xl hover:border-[#c8ff00]/30 transition-all duration-300"
              >
                <span className="text-lg font-medium text-white group-hover:text-[#c8ff00]">
                  {faq.question}
                </span>
                <span className="ml-6 flex-shrink-0 text-[#c8ff00]">
                  {openIndex === index ? (
                    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  ) : (
                    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  )}
                </span>
              </button>
              {openIndex === index && (
                <div className="p-6 bg-black/20 border border-[#c8ff00]/5 rounded-xl mt-2">
                  <p className="text-white/70">{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
} 