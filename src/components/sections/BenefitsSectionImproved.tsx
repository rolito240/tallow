'use client';

import { Card } from '@/components/ui/card';
import { motion } from 'framer-motion';
import { Leaf, Beaker, Heart } from 'lucide-react';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.1,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6 },
  },
  hover: {
    y: -10,
  },
};

export function BenefitsSectionImproved() {
  const benefits = [
    {
      id: 1,
      icon: Beaker,
      title: 'Biocompatibilidad Total',
      description:
        'La estructura molecular del sebo es casi idéntica a los aceites naturales de la piel humana, permitiendo una absorción profunda sin obstruir poros.',
    },
    {
      id: 2,
      icon: Leaf,
      title: 'Vitaminas Naturales',
      description:
        'Un cóctel natural de vitaminas A, D, E y K con antioxidantes esenciales que la mayoría de las lociones sintéticas intentan imitar.',
    },
    {
      id: 3,
      icon: Heart,
      title: 'Alivio para Piel Sensible',
      description:
        'Específicamente formulado para calmar brotes de eccema, rosácea y psoriasis sin ardor ni irritación.',
    },
  ];

  return (
    <section id="benefits" className="py-20 bg-white">
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
            La Ciencia de la Naturaleza
          </h2>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto">
            Descubre por qué el sebo biocompatible es la solución que tu piel ha estado esperando
          </p>
        </motion.div>

        {/* Benefits Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16"
        >
          {benefits.map((benefit) => {
            const IconComponent = benefit.icon;
            return (
              <motion.div
                key={benefit.id}
                variants={cardVariants}
                whileHover="hover"
                className="group"
              >
                <Card className="p-8 border-2 border-amber-100 hover:border-amber-300 transition h-full bg-linear-to-br from-white to-amber-50">
                  <motion.div
                    whileHover={{ rotate: 360, scale: 1.1 }}
                    transition={{ duration: 0.6 }}
                    className="w-16 h-16 bg-linear-to-br from-yellow-100 to-amber-100 rounded-full flex items-center justify-center mb-6 group-hover:scale-110 transition"
                  >
                    <IconComponent className="w-8 h-8 text-amber-600" />
                  </motion.div>
                  <h3 className="text-2xl font-playfair font-bold text-amber-950 mb-4">
                    {benefit.title}
                  </h3>
                  <p className="text-gray-700 leading-relaxed">{benefit.description}</p>
                </Card>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Additional Benefits Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
          className="bg-linear-to-r from-amber-50 to-yellow-50 rounded-xl p-12"
        >
          <h3 className="text-3xl font-playfair font-bold text-amber-950 mb-8">
            ¿Por qué Tallow Australiano?
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                emoji: '🐄',
                title: 'Alimentado con Pasto',
                desc: 'Vacas que pastan libremente en tierras australianas, resultando en tallow de mayor calidad nutricional.',
              },
              {
                emoji: '✓',
                title: 'Certificado Halal',
                desc: 'Máximo estándar de calidad y respeto ético en cada etapa del procesamiento.',
              },
              {
                emoji: '🌿',
                title: 'Procesamiento Puro',
                desc: 'Filtración de agua especializada. Libre de cloro, químicos de procesamiento o aditivos.',
              },
              {
                emoji: '❤️',
                title: 'Hecho en Australia',
                desc: 'Orgullo australiano. Calidad premium de principio a fin con control total.',
              },
            ].map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, x: idx % 2 === 0 ? -20 : 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="flex items-start gap-4 group hover:translate-x-2 transition-transform"
              >
                <span className="text-4xl shrink-0">{item.emoji}</span>
                <div>
                  <h4 className="font-bold text-lg text-amber-950 group-hover:text-amber-600 transition">
                    {item.title}
                  </h4>
                  <p className="text-gray-700">{item.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
