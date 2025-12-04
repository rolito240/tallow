'use client';

import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { CheckCircle2 } from 'lucide-react';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5 },
  },
};

export function HeroSectionImproved() {
  return (
    <section className="relative min-h-screen bg-gradient-to-br from-amber-50 via-white to-yellow-50 overflow-hidden pt-12">
      {/* Animated background elements */}
      <motion.div
        animate={{
          y: [0, -20, 0],
          opacity: [0.1, 0.15, 0.1],
        }}
        transition={{ duration: 8, repeat: Infinity }}
        className="absolute -top-40 -right-40 w-80 h-80 bg-yellow-200 rounded-full blur-3xl"
      ></motion.div>
      <motion.div
        animate={{
          y: [0, 20, 0],
          opacity: [0.1, 0.15, 0.1],
        }}
        transition={{ duration: 10, repeat: Infinity, delay: 1 }}
        className="absolute -bottom-40 -left-40 w-80 h-80 bg-amber-200 rounded-full blur-3xl"
      ></motion.div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <motion.div
            initial="hidden"
            animate="visible"
            variants={containerVariants}
            className="space-y-6 z-10"
          >
            <motion.div variants={itemVariants}>
              <Badge
                variant="secondary"
                className="bg-yellow-100 text-amber-900 border-amber-300 px-4 py-1.5 text-sm font-semibold"
              >
                ★ BEST SELLER
              </Badge>
            </motion.div>

            <motion.h1
              variants={itemVariants}
              className="text-5xl md:text-6xl font-playfair font-bold text-amber-950 leading-tight"
            >
              Nutrición Biocompatible
              <motion.span
                variants={itemVariants}
                className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-600 to-amber-600 block"
              >
                El Renacimiento del Cuidado
              </motion.span>
            </motion.h1>

            <motion.p
              variants={itemVariants}
              className="text-lg md:text-xl text-gray-700 leading-relaxed"
            >
              La hidratación que tu piel reconoce. Formulado con sebo 100% natural, idéntico a los
              lípidos de tu propia piel para calmar la sequedad, el eccema y la psoriasis.
            </motion.p>

            <motion.div
              variants={itemVariants}
              className="flex flex-col sm:flex-row gap-4 pt-4"
            >
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Button
                  asChild
                  size="lg"
                  className="bg-gradient-to-r from-amber-600 to-yellow-600 hover:from-amber-700 hover:to-yellow-700 text-white font-bold text-lg px-8 py-6 rounded-lg shadow-lg"
                >
                  <Link href="#featured">Comprar el Tallow Original</Link>
                </Button>
              </motion.div>
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Button
                  asChild
                  variant="outline"
                  size="lg"
                  className="border-amber-600 text-amber-600 hover:bg-amber-50 font-bold text-lg px-8 py-6 rounded-lg"
                >
                  <Link href="#benefits">Descubrir Beneficios</Link>
                </Button>
              </motion.div>
            </motion.div>

            {/* Trust indicators with animation */}
            <motion.div
              variants={containerVariants}
              className="flex flex-col gap-4 pt-8"
            >
              {[
                {
                  title: 'Certificado Halal',
                  desc: '- Máximo estándar de calidad',
                },
                {
                  title: '100% Alimentado con Pasto',
                  desc: '- Australiano Premium',
                },
                {
                  title: 'Libre de Químicos',
                  desc: '- Naturalmente puro',
                },
              ].map((item, idx) => (
                <motion.div
                  key={idx}
                  variants={itemVariants}
                  className="flex items-center gap-3 group hover:translate-x-2 transition-transform"
                >
                  <motion.div
                    whileHover={{ rotate: 360, scale: 1.2 }}
                    transition={{ duration: 0.6 }}
                    className="w-8 h-8 bg-gradient-to-br from-yellow-400 to-amber-500 rounded-full flex items-center justify-center flex-shrink-0"
                  >
                    <CheckCircle2 className="w-5 h-5 text-white" />
                  </motion.div>
                  <div className="text-gray-700">
                    <strong className="text-amber-950">{item.title}</strong> {item.desc}
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          {/* Right Image with floating animation */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="relative h-96 md:h-full md:min-h-screen flex items-center justify-center"
          >
            <motion.div
              animate={{
                y: [0, -20, 0],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: 'easeInOut',
              }}
              className="relative w-full max-w-md"
            >
              {/* Glow effect */}
              <motion.div
                animate={{
                  scale: [1, 1.1, 1],
                  opacity: [0.3, 0.5, 0.3],
                }}
                transition={{ duration: 3, repeat: Infinity }}
                className="absolute inset-0 bg-gradient-to-r from-yellow-300 to-amber-300 rounded-2xl blur-2xl"
              ></motion.div>

              <motion.div
                className="relative bg-gradient-to-b from-amber-50 to-yellow-50 rounded-2xl p-8 border-2 border-amber-200 shadow-2xl"
                whileHover={{ scale: 1.05 }}
                transition={{ type: 'spring', stiffness: 300 }}
              >
                <div className="space-y-8">
                  {/* Bottle shape with gradient animation */}
                  <motion.div
                    animate={{
                      scale: [1, 1.02, 1],
                    }}
                    transition={{ duration: 2, repeat: Infinity }}
                    className="flex justify-center"
                  >
                    <div className="w-32 h-40 bg-gradient-to-r from-amber-100 to-yellow-100 rounded-b-3xl rounded-t-2xl border-2 border-amber-300 shadow-md relative overflow-hidden">
                      <motion.div
                        animate={{
                          opacity: [0.3, 0.6, 0.3],
                        }}
                        transition={{ duration: 3, repeat: Infinity }}
                        className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent"
                      ></motion.div>
                      <div className="absolute bottom-0 left-0 right-0 h-2/3 bg-gradient-to-t from-yellow-300 to-transparent opacity-40"></div>
                    </div>
                  </motion.div>

                  {/* Product info */}
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.5 }}
                    className="space-y-4 text-center"
                  >
                    <h3 className="text-2xl font-playfair font-bold text-amber-950">
                      Crema Batida Premium
                    </h3>
                    <p className="text-gray-700 text-sm">
                      Textura rica y cremosa. Absorción perfecta. Sin residuos.
                    </p>
                  </motion.div>

                  {/* Features */}
                  <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    animate="visible"
                    className="space-y-3"
                  >
                    {['🌾 100% Grass-Fed Tallow', '🍃 Halal Certified Purity', '✓ Bio-Compatible Nutrition'].map(
                      (feature, idx) => (
                        <motion.div
                          key={idx}
                          variants={itemVariants}
                          className="flex items-center gap-2 text-sm text-gray-700 hover:text-amber-600 transition"
                        >
                          {feature}
                        </motion.div>
                      )
                    )}
                  </motion.div>
                </div>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
