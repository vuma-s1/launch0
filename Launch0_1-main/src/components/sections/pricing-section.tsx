'use client';

import Image from 'next/image';
import Link from 'next/link';

export default function PricingSection() {
  const plans = [
    {
      name: 'Starter',
      price: '$5,000',
      description: 'Perfect for small businesses looking to automate their first process',
      features: [
        'Initial process automation',
        'Basic AI integration',
        'Up to 5 team members',
        'Email support',
        '1 month of maintenance'
      ],
      cta: 'Get Started',
      ctaLink: 'https://calendly.com/tom-creme/discovery-call-creme'
    },
    {
      name: 'Growth',
      price: '$15,000',
      description: 'Ideal for growing businesses needing multiple automated processes',
      features: [
        'Multiple process automation',
        'Advanced AI integration',
        'Up to 20 team members',
        'Priority support',
        '3 months of maintenance',
        'Custom reporting'
      ],
      cta: 'Get Started',
      ctaLink: 'https://calendly.com/tom-creme/discovery-call-creme',
      popular: true
    },
    {
      name: 'Enterprise',
      price: 'Custom',
      description: 'For large organizations requiring comprehensive automation solutions',
      features: [
        'Full process automation',
        'Enterprise AI integration',
        'Unlimited team members',
        '24/7 dedicated support',
        '6 months of maintenance',
        'Custom reporting & analytics',
        'SLA guarantees'
      ],
      cta: 'Contact Us',
      ctaLink: 'https://calendly.com/tom-creme/discovery-call-creme'
    }
  ];

  return (
    <>
      {/* Testimonials Section */}
      <section className="relative py-24 bg-black overflow-hidden">
        <div className="container mx-auto px-4 sm:px-6">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-medium text-white text-center mb-16">
            Hear more from the <span className="text-[#c8ff00]">community</span>.
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            {/* Marc Andreessen Quote */}
            <div className="flex gap-4 items-start">
              <div className="w-16 h-16 flex-shrink-0 rounded-full overflow-hidden relative">
                <Image
                  src="/marc-andreessen.jpg"
                  alt="Marc Andreessen"
                  fill
                  className="object-cover"
                />
              </div>
              <div>
                <p className="text-white text-lg mb-4">"Y Combinator is the best program for creating top-end entrepreneurs that has ever existed."</p>
                <div>
                  <p className="text-white font-medium">Marc Andreessen</p>
                  <p className="text-white/70 text-sm">General Partner, Andreessen Horowitz</p>
                </div>
              </div>
            </div>

            {/* Ron Conway Quote */}
            <div className="flex gap-4 items-start">
              <div className="w-16 h-16 flex-shrink-0 rounded-full overflow-hidden relative">
                <Image
                  src="/ron-conway.jpg"
                  alt="Ron Conway"
                  fill
                  className="object-cover"
                />
              </div>
              <div>
                <p className="text-white text-lg mb-4">"Y Combinator is the best startup accelerator in the world. YC helps their companies a lot, and the YC community is a huge asset for the companies that go through the program."</p>
                <div>
                  <p className="text-white font-medium">Ron Conway</p>
                  <p className="text-white/70 text-sm">Founder, SV Angel</p>
                </div>
              </div>
            </div>

            {/* Brian Chesky Quote */}
            <div className="flex gap-4 items-start">
              <div className="w-16 h-16 flex-shrink-0 rounded-full overflow-hidden relative">
                <Image
                  src="/brian-chesky.jpg"
                  alt="Brian Chesky"
                  fill
                  className="object-cover"
                />
              </div>
              <div>
                <p className="text-white text-lg mb-4">"At YC, we were challenged to do things that don't scale – to start with the perfect experience for one person, then work backwards and scale it to 100 people who love us. This was the best piece of advice we've ever received."</p>
                <div>
                  <p className="text-white font-medium">Brian Chesky</p>
                  <p className="text-white/70 text-sm">Founder, Airbnb (YC W09)</p>
                </div>
              </div>
            </div>

            {/* Patrick Collison Quote */}
            <div className="flex gap-4 items-start">
              <div className="w-16 h-16 flex-shrink-0 rounded-full overflow-hidden relative">
                <Image
                  src="/patrick-collison.jpg"
                  alt="Patrick Collison"
                  fill
                  className="object-cover"
                />
              </div>
              <div>
                <p className="text-white text-lg mb-4">"I doubt that Stripe would have worked without YC. It's that simple. Acquiring early customers, figuring out who to hire, closing deals with banks, raising money – YC's partners were closely involved and crucially helpful."</p>
                <div>
                  <p className="text-white font-medium">Patrick Collison</p>
                  <p className="text-white/70 text-sm">Founder, Stripe (YC S09)</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Image Content Section */}
      <section className="relative py-24 bg-black overflow-hidden">
        <div className="container mx-auto px-4 sm:px-6 mb-16">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-medium text-white">
              We put <span className="text-[#c8ff00]">founders' interests</span> first.
            </h2>
          </div>
          <div className="mt-8 grid grid-cols-2 gap-4 text-white/70">
            <div>
              <ul className="space-y-4">
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-[#c8ff00] rounded-full"></span>
                  We don't take a board seat.
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-[#c8ff00] rounded-full"></span>
                  We don't take weeks/months to decide to invest.
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-[#c8ff00] rounded-full"></span>
                  We don't require decks, business plans, or MBAs.
                </li>
              </ul>
            </div>
            <div>
              <ul className="space-y-4">
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-[#c8ff00] rounded-full"></span>
                  We don't demand 20% of your company.
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-[#c8ff00] rounded-full"></span>
                  We don't charge fees.
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-[#c8ff00] rounded-full"></span>
                  We don't tell you what to do. We only offer advice.
                </li>
              </ul>
            </div>
          </div>
          <div className="mt-12 grid grid-cols-3 gap-8">
            <div className="aspect-[16/9] relative rounded-lg overflow-hidden">
              <Image
                src="/founders-network.jpg"
                alt="Founders networking"
                fill
                className="object-cover"
              />
            </div>
            <div className="aspect-[16/9] relative rounded-lg overflow-hidden">
              <Image
                src="/written-advice.jpg"
                alt="Written advice"
                fill
                className="object-cover"
              />
            </div>
            <div className="aspect-[16/9] relative rounded-lg overflow-hidden">
              <Image
                src="/team-building.jpg"
                alt="Team building"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="relative py-20 lg:py-32 overflow-hidden bg-black">
        <div className="absolute inset-0">
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-[#c8ff00]/10 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"></div>
          <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-[#c8ff00]/10 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-[#c8ff00]/10 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000"></div>
        </div>
        
        <div className="container relative z-10">
          <div className="text-center mb-16">
            <span className="text-[#c8ff00] uppercase text-sm tracking-wide font-medium">Pricing</span>
            <h2 className="text-3xl md:text-4xl font-bold mt-4 text-white">
              Choose the plan that fits your needs
            </h2>
            <p className="text-white/70 md:text-lg mt-4 max-w-2xl mx-auto">
              We offer flexible pricing plans to help businesses of all sizes scale efficiently
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {plans.map((plan, index) => (
              <div
                key={index}
                className={`relative rounded-xl overflow-hidden border ${
                  plan.popular
                    ? 'border-[#c8ff00] bg-[#c8ff00]/5'
                    : 'border-white/10 bg-black/40'
                } backdrop-blur-sm p-8 hover:border-[#c8ff00]/50 transition-all duration-300 group`}
              >
                {plan.popular && (
                  <div className="absolute top-0 right-0 bg-[#c8ff00] text-black text-xs font-medium px-3 py-1 rounded-bl-lg">
                    Most Popular
                  </div>
                )}

                <div className="mb-8">
                  <h3 className="text-2xl font-bold mb-2 text-white group-hover:text-[#c8ff00] transition-colors">{plan.name}</h3>
                  <div className="text-3xl font-bold mb-4 text-[#c8ff00]">{plan.price}</div>
                  <p className="text-white/70">{plan.description}</p>
                </div>

                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center gap-2 text-white/70">
                      <svg className="w-5 h-5 text-[#c8ff00]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      {feature}
                    </li>
                  ))}
                </ul>

                <Link
                  href="https://calendly.com/tom-creme/discovery-call-creme"
                  className={`w-full inline-flex justify-center items-center px-6 py-3 text-base font-medium rounded-full transition-all duration-300 ${
                    plan.popular
                      ? 'bg-gradient-to-r from-[#c8ff00] to-[#96bf00] hover:from-[#d4ff33] hover:to-[#a6d400] text-black'
                      : 'text-[#c8ff00] hover:text-[#d4ff33] border border-[#c8ff00]/20 hover:border-[#c8ff00]/40 bg-[rgba(200,255,0,0.1)]'
                  }`}
                >
                  {plan.cta}
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
} 