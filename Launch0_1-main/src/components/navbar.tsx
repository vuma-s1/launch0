'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { cn } from '@/lib/utils';
import { usePathname } from 'next/navigation';

const navLinks = [
  { name: 'Our work', href: '/our-work' },
  { name: 'Pricing', href: '/#pricing' },
  { name: 'About', href: '/about-us' },
  { name: 'Blog', href: '/blogs' },
  { name: 'Contact us', href: '/contact' },
];

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isPricingVisible, setIsPricingVisible] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      if (pathname === '/') {
        const pricingSection = document.getElementById('pricing');
        if (pricingSection) {
          const rect = pricingSection.getBoundingClientRect();
          setIsPricingVisible(rect.top <= 100 && rect.bottom >= 100);
        }
      } else {
        setIsPricingVisible(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Check initial state
    return () => window.removeEventListener('scroll', handleScroll);
  }, [pathname]);

  const isActive = (href: string) => {
    if (href === '/#pricing') return isPricingVisible;
    return pathname === href;
  };

  return (
    <header className="fixed top-0 left-0 w-full z-50 py-6 backdrop-blur-sm bg-[#1d1e2166]/15 border-b border-white/5">
      <div className="container mx-auto flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center">
          <Image
            src="/assets/images/logo.svg"
            alt="Startup Logo"
            width={40}
            height={40}
            className="h-10 w-10"
            priority
          />
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center bg-[#0A0A0A]/90 backdrop-blur-sm rounded-full px-3 py-1.5 border border-white/5">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className={cn(
                "relative px-4 py-2 text-sm font-medium transition-all duration-200 group",
                isActive(link.href) ? "text-white" : "text-white/70 hover:text-white"
              )}
            >
              {link.name}
              <span className={cn(
                "absolute inset-0 rounded-full bg-white/[0.08] opacity-0 transition-opacity -z-10",
                {
                  "opacity-100": isActive(link.href),
                  "group-hover:opacity-100": true
                }
              )}></span>
            </Link>
          ))}
        </nav>

        {/* CTA Button */}
        <div className="hidden md:block">
          <Link
            href="https://calendly.com/tom-creme/discovery-call-creme"
            className="hidden sm:inline-flex items-center justify-center px-4 py-1.5 text-base font-medium text-black transition-colors rounded-full bg-gradient-to-r from-[#c8ff00] to-[#96bf00] hover:from-[#d4ff33] hover:to-[#a6d400]"
          >
            Get Started
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          type="button"
          className="md:hidden p-2 rounded-full bg-[#0A0A0A]/90 hover:bg-[#0A0A0A] transition-all duration-300"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          <div className={cn("w-6 h-0.5 bg-white mb-1.5 transition-all", mobileMenuOpen && "rotate-45 translate-y-2")}></div>
          <div className={cn("w-6 h-0.5 bg-white mb-1.5 transition-all", mobileMenuOpen && "opacity-0")}></div>
          <div className={cn("w-6 h-0.5 bg-white transition-all", mobileMenuOpen && "-rotate-45 -translate-y-2")}></div>
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={cn(
          "absolute top-full left-0 w-full bg-[#0A0A0A]/95 backdrop-blur-sm py-4 md:hidden transition-all duration-300 border-t border-white/5",
          mobileMenuOpen ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-4 pointer-events-none"
        )}
      >
        <div className="container mx-auto flex flex-col">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className={cn(
                "relative px-4 py-3 text-base transition-all duration-200 group",
                isActive(link.href) ? "text-white" : "text-white/70 hover:text-white"
              )}
              onClick={() => setMobileMenuOpen(false)}
            >
              {link.name}
              <span className={cn(
                "absolute inset-0 rounded-full bg-white/[0.08] opacity-0 transition-opacity -z-10",
                {
                  "opacity-100": isActive(link.href),
                  "group-hover:opacity-100": true
                }
              )}></span>
            </Link>
          ))}
          <div className="pt-4 px-4">
            <Link
              href="https://calendly.com/tom-creme/discovery-call-creme"
              className="block px-5 py-2 text-base font-medium text-black transition-colors rounded-full bg-gradient-to-r from-[#c8ff00] to-[#96bf00] hover:from-[#d4ff33] hover:to-[#a6d400]"
              onClick={() => setMobileMenuOpen(false)}
            >
              Get Started
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}
