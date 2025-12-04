'use client';

import { motion } from 'framer-motion';
import { CheckCircle, Sparkles } from 'lucide-react';
import { useLanguage } from '@/context/LanguageContext';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.2,
    },
  },
};

const stepVariants = {
  hidden: { opacity: 0, x: -50 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.6, ease: 'easeOut' as const },
  },
};

export function HowToUseSection() {
  const { t } = useLanguage();

  const steps = [
    {
      number: '1',
      title: t('howToUse.step1') || 'Apply',
      description: t('howToUse.step1_desc') || 'Dispensa una pequeña cantidad en tu mano',
      icon: '✋',
    },
    {
      number: '2',
      title: t('howToUse.step2') || 'Warm',
      description: t('howToUse.step2_desc') || 'Calienta entre tus manos presionando ligeramente',
      icon: '🔥',
    },
    {
      number: '3',
      title: t('howToUse.step3') || 'Massage',
      description: t('howToUse.step3_desc') || 'Masajea suavemente en tu piel con movimientos circulares',
      icon: '👋',
    },
    {
      number: '4',
      title: t('howToUse.step4') || 'Absorb',
      description: t('howToUse.step4_desc') || 'Deja que se absorba completamente',
      icon: '✨',
    },
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-amber-50 via-white to-yellow-50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 mb-4 px-4 py-2 bg-amber-100 rounded-full border border-amber-300">
            <Sparkles className="w-4 h-4 text-amber-600" />
            <span className="text-sm font-semibold text-amber-900">{t('howToUse.badge') || 'Fácil de usar'}</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-playfair font-bold text-amber-950 mb-4">
            {t('howToUse.title') || '¿Cómo usar?'}
          </h2>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto leading-relaxed">
            {t('howToUse.description') || 'Cuatro simples pasos para obtener los máximos beneficios'}
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {steps.map((step, idx) => (
            <motion.div
              key={idx}
              variants={stepVariants}
              className="relative group"
            >
              {/* Connecting line for desktop */}
              {idx < steps.length - 1 && (
                <div className="hidden lg:block absolute top-12 left-1/2 w-full h-0.5 bg-gradient-to-r from-amber-400 to-transparent transform -translate-y-1/2"></div>
              )}

              {/* Card */}
              <motion.div
                whileHover={{ scale: 1.05, y: -8 }}
                className="relative bg-white rounded-lg p-6 shadow-md hover:shadow-xl transition-all duration-300 border border-amber-100"
              >
                {/* Step number with animation */}
                <motion.div
                  className="absolute -top-6 left-1/2 transform -translate-x-1/2"
                  initial={{ scale: 0, rotate: -180 }}
                  whileInView={{ scale: 1, rotate: 0 }}
                  transition={{ delay: idx * 0.1 + 0.2, duration: 0.6, type: 'spring' }}
                >
                  <div className="w-12 h-12 bg-gradient-to-br from-amber-400 to-yellow-500 rounded-full flex items-center justify-center shadow-lg">
                    <span className="text-white font-bold text-lg">{step.number}</span>
                  </div>
                </motion.div>

                {/* Icon */}
                <div className="text-4xl mb-4 text-center group-hover:scale-110 transition-transform">
                  {step.icon}
                </div>

                {/* Content */}
                <h3 className="text-lg font-bold text-amber-950 mb-2 text-center">{step.title}</h3>
                <p className="text-gray-600 text-sm text-center leading-relaxed">{step.description}</p>

                {/* Checkmark indicator */}
                <motion.div
                  className="mt-4 flex justify-center"
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  transition={{ delay: idx * 0.1 + 0.4 }}
                >
                  <CheckCircle className="w-5 h-5 text-green-500" />
                </motion.div>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
