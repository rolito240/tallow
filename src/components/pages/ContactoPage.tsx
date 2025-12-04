'use client';

import { HeaderImproved } from '@/components/HeaderImproved';
import { FooterImproved } from '@/components/FooterImproved';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card } from '@/components/ui/card';
import { Mail, Phone, MapPin, Send } from 'lucide-react';
import { motion } from 'framer-motion';
import { useLanguage } from '@/context/LanguageContext';
import { useState } from 'react';

export default function ContactoPage() {
  const { t, language } = useLanguage();
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (formData.name && formData.email && formData.message) {
      setSubmitted(true);
      setFormData({ name: '', email: '', message: '' });
      setTimeout(() => setSubmitted(false), 3000);
    }
  };

  const contactInfo = [
    {
      icon: Mail,
      title: language === 'es' ? 'Email' : 'Email',
      value: 'info@oztallow.com',
      href: 'mailto:info@oztallow.com',
    },
    {
      icon: Phone,
      title: language === 'es' ? 'Teléfono' : 'Phone',
      value: '+61 2 XXXX XXXX',
      href: 'tel:+61223334444',
    },
    {
      icon: MapPin,
      title: language === 'es' ? 'Ubicación' : 'Location',
      value: language === 'es' ? 'Australia' : 'Australia',
      href: '#',
    },
  ];

  return (
    <>
      <HeaderImproved />
      <main className="min-h-screen bg-white">
        {/* Hero Section */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="py-20 px-4 sm:px-6 lg:px-8 bg-linear-to-r from-amber-100 to-yellow-100"
        >
          <div className="max-w-7xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-playfair font-bold text-amber-900 mb-4">
              {t('contact.title')}
            </h1>
            <p className="text-xl text-gray-700 max-w-2xl mx-auto">
              {t('contact.description')}
            </p>
          </div>
        </motion.section>

        {/* Contact Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-8 mb-16">
            {contactInfo.map((info, idx) => {
              const Icon = info.icon;
              return (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: idx * 0.1 }}
                  viewport={{ once: true }}
                >
                  <Card className="p-8 bg-linear-to-br from-amber-50 to-yellow-50 border-amber-200 text-center hover:shadow-lg transition-all">
                    <motion.div
                      whileHover={{ scale: 1.1 }}
                      className="inline-block mb-4"
                    >
                      <Icon className="w-12 h-12 text-amber-600" />
                    </motion.div>
                    <h3 className="text-xl font-playfair font-bold text-amber-900 mb-2">
                      {info.title}
                    </h3>
                    <a
                      href={info.href}
                      className="text-gray-700 hover:text-amber-600 transition font-medium"
                    >
                      {info.value}
                    </a>
                  </Card>
                </motion.div>
              );
            })}
          </div>

          {/* Contact Form */}
          <div className="max-w-2xl mx-auto">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <Card className="p-8 bg-linear-to-br from-white to-amber-50 border-amber-200">
                <h2 className="text-3xl font-playfair font-bold text-amber-900 mb-6 text-center">
                  {language === 'es' ? 'Envíanos un Mensaje' : 'Send us a Message'}
                </h2>

                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Name */}
                  <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.4, delay: 0.1 }}
                  >
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      {t('contact.name')} *
                    </label>
                    <Input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder={language === 'es' ? 'Tu nombre' : 'Your name'}
                      className="w-full px-4 py-3 border border-amber-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-600"
                      required
                    />
                  </motion.div>

                  {/* Email */}
                  <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.4, delay: 0.2 }}
                  >
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      {t('contact.email')} *
                    </label>
                    <Input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="tu@email.com"
                      className="w-full px-4 py-3 border border-amber-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-600"
                      required
                    />
                  </motion.div>

                  {/* Message */}
                  <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.4, delay: 0.3 }}
                  >
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      {t('contact.message')} *
                    </label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      placeholder={language === 'es' ? 'Tu mensaje...' : 'Your message...'}
                      rows={6}
                      className="w-full px-4 py-3 border border-amber-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-600 font-montserrat"
                      required
                    ></textarea>
                  </motion.div>

                  {/* Submit Button */}
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: 0.4 }}
                  >
                    <Button
                      type="submit"
                      className="w-full bg-linear-to-r from-amber-600 to-yellow-600 hover:from-amber-700 hover:to-yellow-700 text-white font-semibold py-3 flex items-center justify-center gap-2"
                    >
                      <Send className="w-4 h-4" />
                      {t('contact.send')}
                    </Button>
                  </motion.div>

                  {/* Success Message */}
                  {submitted && (
                    <motion.div
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      transition={{ duration: 0.3 }}
                      className="p-4 bg-green-50 border border-green-200 rounded-lg text-green-800 text-center font-medium"
                    >
                      ✓ {t('contact.success')}
                    </motion.div>
                  )}
                </form>
              </Card>
            </motion.div>
          </div>
        </section>

        {/* CTA Section */}
        <motion.section
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="py-20 px-4 sm:px-6 lg:px-8 bg-linear-to-r from-amber-600 to-yellow-600"
        >
          <div className="max-w-4xl mx-auto text-center text-white">
            <h2 className="text-4xl font-playfair font-bold mb-4">
              {language === 'es'
                ? '¿Tienes Alguna Pregunta?'
                : 'Have Any Questions?'}
            </h2>
            <p className="text-xl mb-8 opacity-90">
              {language === 'es'
                ? 'Nuestro equipo está disponible para ayudarte'
                : 'Our team is available to help you'}
            </p>
            <Button className="bg-white text-amber-600 hover:bg-gray-100 font-semibold text-lg px-8 py-3">
              {language === 'es' ? 'Enviar Email' : 'Send Email'}
            </Button>
          </div>
        </motion.section>
      </main>
      <FooterImproved />
    </>
  );
}
