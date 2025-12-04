'use client';

import Link from 'next/link';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { useState } from 'react';
import { Menu, X, ShoppingCart, Globe } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { useLanguage } from '@/context/LanguageContext';

export function HeaderImproved() {
  const { language, setLanguage, t } = useLanguage();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const handleScroll = () => {
    if (typeof window !== 'undefined') {
      setIsScrolled(window.scrollY > 50);
    }
  };

  if (typeof window !== 'undefined') {
    window.addEventListener('scroll', handleScroll, { once: false });
  }

  const navItems = [
    { label: t('nav.home'), href: '/' },
    { label: t('nav.products'), href: '/productos' },
    { label: t('nav.about'), href: '/acerca' },
    { label: t('nav.contact'), href: '/contacto' },
  ];

  return (
    <>
      {/* Announcement Bar - Sticky */}
      <motion.div
        initial={{ y: -60 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
        className="w-full bg-linear-to-r from-yellow-50 to-amber-50 border-b border-yellow-200 py-3 px-4 text-center sticky top-0 z-50"
      >
        <div className="flex items-center justify-center gap-2 flex-wrap text-sm md:text-base font-medium text-amber-900">
          <span>🌿</span>
          <p>
            {t('header.announcement')}{' '}
            <span className="font-bold">{t('header.freeShipping')}</span>
          </p>
        </div>
      </motion.div>

      {/* Main Header */}
      <motion.header
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, delay: 0.1 }}
        className={`w-full sticky top-12 z-40 transition-all duration-300 ${
          isScrolled
            ? 'bg-white shadow-lg border-b border-gray-100'
            : 'bg-white/95 backdrop-blur-sm border-b border-gray-100'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            {/* Logo with animation */}
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="shrink-0"
            >
              <Link href="/" className="flex items-center space-x-2">
                <div className="relative w-10 h-10">
                  <Image
                    src="/logo.png"
                    alt="OZ Tallow Logo"
                    fill
                    className="object-contain"
                    priority
                  />
                </div>
                <span className="font-playfair font-bold text-xl text-amber-900 hidden sm:inline">
                  OZ Tallow
                </span>
              </Link>
            </motion.div>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex space-x-1">
              {navItems.map((item, idx) => (
                <motion.div
                  key={item.href}
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: idx * 0.05 }}
                >
                  <Link
                    href={item.href}
                    className="relative px-3 py-2 text-gray-700 font-medium hover:text-amber-600 transition group"
                  >
                    {item.label}
                    <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-linear-to-r from-amber-600 to-yellow-600 group-hover:w-full transition-all duration-300"></span>
                  </Link>
                </motion.div>
              ))}
            </nav>

            {/* Desktop CTA and Language */}
            <div className="hidden md:flex items-center space-x-3">
              {/* Language Selector */}
              <div className="flex items-center gap-2 border-2 border-amber-200 rounded-lg p-1 bg-white">
                <button
                  onClick={() => setLanguage('es')}
                  className={`px-3 py-1.5 rounded font-bold text-sm transition ${
                    language === 'es'
                      ? 'bg-linear-to-r from-amber-600 to-yellow-600 text-white shadow-md'
                      : 'text-amber-900 hover:bg-amber-100'
                  }`}
                  aria-label="Español"
                >
                  ES
                </button>
                <button
                  onClick={() => setLanguage('en')}
                  className={`px-3 py-1.5 rounded font-bold text-sm transition ${
                    language === 'en'
                      ? 'bg-linear-to-r from-amber-600 to-yellow-600 text-white shadow-md'
                      : 'text-amber-900 hover:bg-amber-100'
                  }`}
                  aria-label="English"
                >
                  EN
                </button>
              </div>

              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Button
                  asChild
                  className="border-2 border-amber-600 text-amber-600 hover:bg-amber-600 hover:text-white font-bold transition"
                >
                  <Link href="/productos">{t('nav.products')}</Link>
                </Button>
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Button
                  asChild
                  className="bg-linear-to-r from-amber-600 to-yellow-600 hover:from-amber-700 hover:to-yellow-700 text-white font-bold shadow-lg"
                >
                  <Link href="/productos" className="flex items-center gap-2">
                    <ShoppingCart className="w-4 h-4" />
                    {t('hero.cta')}
                  </Link>
                </Button>
              </motion.div>
            </div>

            {/* Mobile Menu Button */}
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 hover:bg-amber-50 rounded-lg transition"
            >
              {mobileMenuOpen ? (
                <X className="w-6 h-6 text-gray-700" />
              ) : (
                <Menu className="w-6 h-6 text-gray-700" />
              )}
            </motion.button>
          </div>

          {/* Mobile Navigation */}
          <AnimatePresence>
            {mobileMenuOpen && (
              <motion.nav
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.3 }}
                className="md:hidden overflow-hidden pb-4 space-y-2"
              >
                {navItems.map((item) => (
                  <motion.div key={item.href} whileHover={{ x: 5 }}>
                    <Link
                      href={item.href}
                      className="block px-4 py-2 text-gray-700 hover:bg-amber-50 rounded transition font-medium"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      {item.label}
                    </Link>
                  </motion.div>
                ))}

                {/* Mobile Language Selector */}
                <div className="px-4 py-2 flex items-center gap-2 border border-gray-200 rounded-lg">
                  <Globe className="w-4 h-4 text-gray-600" />
                  <button
                    onClick={() => {
                      setLanguage('es');
                      setMobileMenuOpen(false);
                    }}
                    className={`flex-1 px-2 py-1 rounded text-sm font-medium transition ${
                      language === 'es'
                        ? 'bg-amber-600 text-white'
                        : 'text-gray-600 hover:bg-amber-50'
                    }`}
                  >
                    Español
                  </button>
                  <button
                    onClick={() => {
                      setLanguage('en');
                      setMobileMenuOpen(false);
                    }}
                    className={`flex-1 px-2 py-1 rounded text-sm font-medium transition ${
                      language === 'en'
                        ? 'bg-amber-600 text-white'
                        : 'text-gray-600 hover:bg-amber-50'
                    }`}
                  >
                    English
                  </button>
                </div>

                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                  <Button
                    asChild
                    className="w-full mt-4 bg-linear-to-r from-amber-600 to-yellow-600 hover:from-amber-700 hover:to-yellow-700 text-white font-semibold"
                  >
                    <Link href="/productos">{t('hero.cta')}</Link>
                  </Button>
                </motion.div>
              </motion.nav>
            )}
          </AnimatePresence>
        </div>
      </motion.header>
    </>
  );
}
