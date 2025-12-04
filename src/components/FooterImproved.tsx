'use client';

import Link from 'next/link';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Mail, Leaf, Heart, Instagram, Facebook, Twitter } from 'lucide-react';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useLanguage } from '@/context/LanguageContext';

export function FooterImproved() {
  const { language, t } = useLanguage();
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    setSubscribed(true);
    setEmail('');
    setTimeout(() => setSubscribed(false), 3000);
  };

  const footerSections = [
    {
      title: language === 'es' ? 'Navegación' : 'Navigation',
      links: [
        { label: t('nav.home'), href: '/' },
        { label: t('nav.products'), href: '/productos' },
        { label: t('nav.about'), href: '/acerca' },
        { label: t('nav.contact'), href: '/contacto' },
      ],
    },
    {
      title: language === 'es' ? 'Soporte' : 'Support',
      links: [
        { label: t('faq.title'), href: '#faq' },
        { label: language === 'es' ? 'Envíos & Devoluciones' : 'Shipping & Returns', href: '#' },
        { label: t('footer.privacy'), href: '#' },
        { label: t('footer.terms'), href: '#' },
      ],
    },
  ];

  const socialLinks = [
    { icon: Instagram, label: 'Instagram', href: 'https://instagram.com' },
    { icon: Facebook, label: 'Facebook', href: 'https://facebook.com' },
    { icon: Twitter, label: 'Twitter', href: 'https://twitter.com' },
  ];

  return (
    <footer className="bg-linear-to-b from-white to-amber-950 text-white pt-20">
      {/* Newsletter Section */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="bg-linear-to-r from-amber-600 to-yellow-600 py-12"
      >
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-8">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <h3 className="text-2xl font-bold mb-2 text-white">{t('footer.newsletter')}</h3>
              <p className="text-amber-50">{t('footer.newsletter_desc')}</p>
            </motion.div>
            <motion.form
              onSubmit={handleSubscribe}
              className="flex gap-2 w-full md:w-auto"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <Input
                type="email"
                placeholder="tu@email.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="bg-white text-gray-900 placeholder-gray-500 border-0 flex-1 md:flex-initial"
              />
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Button
                  type="submit"
                  variant="secondary"
                  className="font-bold"
                >
                  <Mail className="w-4 h-4 mr-2" />
                  Suscribir
                </Button>
              </motion.div>
            </motion.form>
          </div>
          <AnimatePresence>
            {subscribed && (
              <motion.p
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.3 }}
                className="text-center mt-4 text-sm font-semibold animate-pulse"
              >
                ¡Gracias! Revisa tu email para tu código de descuento.
              </motion.p>
            )}
          </AnimatePresence>
        </div>
      </motion.div>

      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          {/* Brand */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-4"
          >
            <Link href="/" className="flex items-center space-x-2">
              <div className="w-10 h-10 relative bg-yellow-400 rounded-full flex items-center justify-center">
                <Image
                  src="/logo.png"
                  alt="OZ Tallow"
                  width={40}
                  height={40}
                  className="rounded-full"
                />
              </div>
              <span className="font-playfair font-bold text-xl">OZ Tallow</span>
            </Link>
            <p className="text-amber-100 text-sm leading-relaxed">
              Cuidado de la piel natural, biocompatible y halal certificado. Hecho en Australia con
              orgullo.
            </p>
            <div className="flex gap-3 pt-4">
              {socialLinks.map((social) => {
                const Icon = social.icon;
                return (
                  <motion.a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.1, rotate: 10 }}
                    whileTap={{ scale: 0.9 }}
                    className="w-10 h-10 rounded-full bg-amber-900 hover:bg-yellow-500 transition flex items-center justify-center text-white"
                  >
                    <Icon className="w-5 h-5" />
                  </motion.a>
                );
              })}
            </div>
          </motion.div>

          {/* Links Sections */}
          {footerSections.map((section, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: (idx + 1) * 0.1 }}
            >
              <h4 className="font-bold text-lg mb-4">{section.title}</h4>
              <ul className="space-y-2 text-amber-100 text-sm">
                {section.links.map((link) => (
                  <li key={link.href}>
                    <motion.div
                      whileHover={{ x: 5 }}
                      transition={{ duration: 0.2 }}
                    >
                      <Link
                        href={link.href}
                        className="hover:text-white transition inline-block"
                      >
                        {link.label}
                      </Link>
                    </motion.div>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}

          {/* Contact */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <h4 className="font-bold text-lg mb-4">Contacto</h4>
            <ul className="space-y-3 text-amber-100 text-sm">
              <li className="flex items-center gap-2 hover:text-white transition">
                <Mail className="w-4 h-4" />
                <a href="mailto:info@oztallow.com">info@oztallow.com</a>
              </li>
              <li className="flex items-center gap-2">
                <Leaf className="w-4 h-4" />
                Made in Australia
              </li>
              <li className="flex items-center gap-2">
                <Heart className="w-4 h-4" />
                Halal Certified
              </li>
            </ul>
          </motion.div>
        </div>

        {/* Bottom */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="border-t border-amber-900 pt-8"
        >
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-amber-100 text-sm">
            <p>&copy; 2024 OZ Tallow Skincare. Todos los derechos reservados.</p>
            <div className="flex gap-6 flex-wrap justify-center">
              <span className="flex items-center gap-1 hover:text-white transition">🌾 Grass-Fed</span>
              <span className="flex items-center gap-1 hover:text-white transition">✓ Halal</span>
              <span className="flex items-center gap-1 hover:text-white transition">🍃 Chemical-Free</span>
            </div>
          </div>
        </motion.div>
      </div>
    </footer>
  );
}
