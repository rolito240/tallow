'use client';

import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { motion } from 'framer-motion';
import { Mail, MapPin, Phone } from 'lucide-react';
import { useState } from 'react';

export function ContactSection() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setFormData({ name: '', email: '', message: '' });
    setTimeout(() => setSubmitted(false), 3000);
  };

  return (
    <section id="contact" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-playfair font-bold text-amber-950 mb-4">
            Contáctanos
          </h2>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto">
            ¿Tienes preguntas? Nuestro equipo está aquí para ayudarte
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-8"
          >
            <h3 className="text-2xl font-playfair font-bold text-amber-950">
              Información de Contacto
            </h3>

            {[
              {
                icon: Mail,
                label: 'Email',
                value: 'info@oztallow.com',
                href: 'mailto:info@oztallow.com',
              },
              {
                icon: MapPin,
                label: 'Ubicación',
                value: 'Australia',
                href: '#',
              },
              {
                icon: Phone,
                label: 'Teléfono',
                value: '+61 (0) XXX XXX XXX',
                href: 'tel:+61xxxxxxxxx',
              },
            ].map((item, idx) => {
              const Icon = item.icon;
              return (
                <motion.a
                  key={idx}
                  href={item.href}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                  className="flex items-start gap-4 group hover:translate-x-2 transition-transform"
                >
                  <motion.div
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.6 }}
                    className="w-12 h-12 bg-linear-to-br from-yellow-100 to-amber-100 rounded-full flex items-center justify-center shrink-0 text-amber-600"
                  >
                    <Icon className="w-6 h-6" />
                  </motion.div>
                  <div>
                    <h4 className="font-bold text-amber-950 group-hover:text-amber-600 transition">
                      {item.label}
                    </h4>
                    <p className="text-gray-700">{item.value}</p>
                  </div>
                </motion.a>
              );
            })}
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-linear-to-br from-amber-50 to-yellow-50 rounded-xl p-8"
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block text-sm font-semibold text-amber-950 mb-2">
                  Nombre
                </label>
                <Input
                  type="text"
                  value={formData.name}
                  onChange={(e) =>
                    setFormData({ ...formData, name: e.target.value })
                  }
                  required
                  className="w-full bg-white border-2 border-amber-200 focus:border-amber-600 text-gray-900"
                  placeholder="Tu nombre"
                />
              </div>
              <div>
                <label className="block text-sm font-semibold text-amber-950 mb-2">
                  Email
                </label>
                <Input
                  type="email"
                  value={formData.email}
                  onChange={(e) =>
                    setFormData({ ...formData, email: e.target.value })
                  }
                  required
                  className="w-full bg-white border-2 border-amber-200 focus:border-amber-600 text-gray-900"
                  placeholder="tu@email.com"
                />
              </div>
              <div>
                <label className="block text-sm font-semibold text-amber-950 mb-2">
                  Mensaje
                </label>
                <textarea
                  value={formData.message}
                  onChange={(e) =>
                    setFormData({ ...formData, message: e.target.value })
                  }
                  required
                  rows={5}
                  className="w-full bg-white border-2 border-amber-200 focus:border-amber-600 text-gray-900 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-amber-600"
                  placeholder="Tu mensaje..."
                />
              </div>
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Button
                  type="submit"
                  className="w-full bg-linear-to-r from-amber-600 to-yellow-600 hover:from-amber-700 hover:to-yellow-700 text-white font-bold py-3"
                >
                  Enviar Mensaje
                </Button>
              </motion.div>
            </form>
            {submitted && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0 }}
                className="mt-4 p-4 bg-green-100 border-2 border-green-500 rounded-lg text-green-700 text-sm font-semibold text-center"
              >
                ¡Mensaje enviado! Te responderemos pronto.
              </motion.div>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
