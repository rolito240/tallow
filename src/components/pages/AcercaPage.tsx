'use client';

import { HeaderImproved } from '@/components/HeaderImproved';
import { FooterImproved } from '@/components/FooterImproved';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Leaf, Heart, Award, Zap } from 'lucide-react';
import { motion } from 'framer-motion';
import { useLanguage } from '@/context/LanguageContext';

export default function AcercaPage() {
  const { t, language } = useLanguage();

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
      transition: { duration: 0.6 },
    },
  };

  const values = [
    {
      icon: Leaf,
      title: language === 'es' ? 'Natural' : 'Natural',
      description:
        language === 'es'
          ? 'Ingredientes 100% naturales y orgánicos sin aditivos químicos'
          : '100% natural and organic ingredients with no chemical additives',
    },
    {
      icon: Heart,
      title: language === 'es' ? 'Calidad' : 'Quality',
      description:
        language === 'es'
          ? 'Productos cuidadosamente elaborados con los más altos estándares'
          : 'Products carefully crafted with the highest standards',
    },
    {
      icon: Award,
      title: language === 'es' ? 'Certificado' : 'Certified',
      description:
        language === 'es'
          ? 'Halal certificado y aprobado dermatológicamente'
          : 'Halal certified and dermatologically approved',
    },
    {
      icon: Zap,
      title: language === 'es' ? 'Eficaz' : 'Effective',
      description:
        language === 'es'
          ? 'Resultados visibles en pocas semanas de uso consistente'
          : 'Visible results in just a few weeks of consistent use',
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
          <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-5xl md:text-6xl font-playfair font-bold text-amber-900 mb-6">
                {language === 'es' ? 'Sobre Nosotros' : 'About Us'}
              </h1>
              <p className="text-xl text-gray-700 mb-4">
                {language === 'es'
                  ? 'OZ Tallow es una marca comprometida con traer la belleza ancestral del tallow bovino puro a tu rutina diaria de cuidado de la piel.'
                  : 'OZ Tallow is a brand committed to bringing the ancestral beauty of pure beef tallow to your daily skincare routine.'}
              </p>
              <p className="text-lg text-gray-600">
                {language === 'es'
                  ? 'Creemos en la simplicidad, la pureza y la eficacia de los ingredientes naturales que tu piel reconoce instintivamente.'
                  : 'We believe in the simplicity, purity, and effectiveness of natural ingredients that your skin instinctively recognizes.'}
              </p>
            </div>
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="relative h-96"
            >
              <div className="relative h-full w-full bg-linear-to-br from-amber-200 to-yellow-200 rounded-lg shadow-2xl flex items-center justify-center">
                <Leaf className="w-32 h-32 text-amber-700 opacity-30" />
              </div>
            </motion.div>
          </div>
        </motion.section>

        {/* Values Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <motion.div className="text-center mb-16">
              <h2 className="text-4xl font-playfair font-bold text-amber-900 mb-4">
                {language === 'es' ? 'Nuestros Valores' : 'Our Values'}
              </h2>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                {language === 'es'
                  ? 'Cada producto representa nuestro compromiso con tu bienestar'
                  : 'Each product represents our commitment to your wellbeing'}
              </p>
            </motion.div>

            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-100px' }}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
            >
              {values.map((value, idx) => {
                const Icon = value.icon;
                return (
                  <motion.div key={idx} variants={itemVariants} whileHover={{ y: -10 }}>
                    <Card className="h-full bg-linear-to-br from-amber-50 to-yellow-50 border-amber-200 p-6 hover:shadow-xl transition-all">
                      <motion.div
                        initial={{ rotate: -180 }}
                        whileInView={{ rotate: 0 }}
                        transition={{ duration: 0.6, delay: idx * 0.1 }}
                        className="mb-4"
                      >
                        <Icon className="w-12 h-12 text-amber-600" />
                      </motion.div>
                      <h3 className="text-xl font-playfair font-bold text-amber-900 mb-3">
                        {value.title}
                      </h3>
                      <p className="text-gray-700">{value.description}</p>
                    </Card>
                  </motion.div>
                );
              })}
            </motion.div>
          </div>
        </section>

        {/* Story Section */}
        <motion.section
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="py-20 px-4 sm:px-6 lg:px-8 bg-linear-to-b from-amber-50 to-white"
        >
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-playfair font-bold text-amber-900 mb-8 text-center">
              {language === 'es' ? 'Nuestra Historia' : 'Our Story'}
            </h2>
            <div className="space-y-6 text-lg text-gray-700 leading-relaxed">
              <motion.p
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
              >
                {language === 'es'
                  ? 'Lo que comenzó como una búsqueda personal de remedios naturales para la piel se convirtió en una misión: compartir los beneficios del tallow bovino puro con el mundo.'
                  : 'What started as a personal quest for natural skincare remedies became a mission: to share the benefits of pure beef tallow with the world.'}
              </motion.p>
              <motion.p
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
              >
                {language === 'es'
                  ? 'Después de años de investigación y pruebas, perfeccionamos nuestras fórmulas para ofrecerte lo mejor en cuidado de la piel. Cada lote es producido con el máximo cuidado y atención al detalle.'
                  : 'After years of research and testing, we perfected our formulas to give you the best in skincare. Each batch is produced with the utmost care and attention to detail.'}
              </motion.p>
              <motion.p
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                {language === 'es'
                  ? 'Hoy, miles de personas en todo el mundo confían en OZ Tallow para transformar su piel y recuperar la confianza en su apariencia.'
                  : 'Today, thousands of people worldwide trust OZ Tallow to transform their skin and regain confidence in their appearance.'}
              </motion.p>
            </div>
          </div>
        </motion.section>

        {/* CTA Section */}
        <motion.section
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="py-20 px-4 sm:px-6 lg:px-8 bg-linear-to-r from-amber-600 to-yellow-600"
        >
          <div className="max-w-4xl mx-auto text-center text-white">
            <h2 className="text-4xl font-playfair font-bold mb-4">
              {language === 'es' ? '¡Únete a Nuestra Comunidad!' : 'Join Our Community!'}
            </h2>
            <p className="text-xl mb-8 opacity-90">
              {language === 'es'
                ? 'Descubre cómo el tallow puro puede transformar tu piel'
                : 'Discover how pure tallow can transform your skin'}
            </p>
            <Button className="bg-white text-amber-600 hover:bg-gray-100 font-semibold text-lg px-8 py-3">
              {t('hero.cta')}
            </Button>
          </div>
        </motion.section>
      </main>
      <FooterImproved />
    </>
  );
}
