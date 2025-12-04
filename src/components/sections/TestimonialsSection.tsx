'use client';

import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { testimonials } from '@/lib/data/products';
import { Star } from 'lucide-react';
import { motion } from 'framer-motion';
import { useLanguage } from '@/context/LanguageContext';

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

const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5 },
  },
};

export function TestimonialsSection() {
  const { t } = useLanguage();

  return (
    <section className="py-20 bg-linear-to-br from-white via-amber-50 to-white">
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
            {t('testimonials.title')}
          </h2>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto">
            {t('testimonials.subtitle')}
          </p>
        </motion.div>

        {/* Testimonials Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16"
        >
          {testimonials.map((testimonial) => (
            <motion.div
              key={testimonial.id}
              variants={cardVariants}
              className="h-full"
            >
              <Card className="p-6 border-2 border-amber-100 hover:border-amber-300 transition hover:shadow-lg bg-zinc-900 h-full flex flex-col">
                {/* Rating */}
                <div className="flex items-center gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star
                      key={i}
                      className="w-5 h-5 fill-yellow-400 text-yellow-400"
                    />
                  ))}
                </div>

                {/* Testimonial Text */}
                <p className="text-gray-300 mb-6 italic leading-relaxed grow">
                  "{testimonial.text}"
                </p>

                {/* Author & Skin Type */}
                <div className="border-t border-gray-700 pt-4 mt-auto">
                  <p className="font-bold text-amber-400 mb-2">{testimonial.name}</p>
                  <Badge className="bg-amber-500/20 text-amber-300 border-amber-500/30 hover:bg-amber-500/30">
                    {testimonial.skinType}
                  </Badge>
                </div>
              </Card>
            </motion.div>
          ))}
        </motion.div>

        {/* Social Proof Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          <motion.div
            whileHover={{ scale: 1.05, y: -5 }}
            className="bg-linear-to-br from-amber-500 to-yellow-500 rounded-xl p-8 text-white text-center shadow-lg"
          >
            <p className="text-5xl font-playfair font-bold mb-2">
              {t('testimonials.customers')}
            </p>
            <p className="font-medium text-amber-100">
              {t('testimonials.customers_label')}
            </p>
          </motion.div>

          <motion.div
            whileHover={{ scale: 1.05, y: -5 }}
            className="bg-linear-to-br from-amber-500 to-yellow-500 rounded-xl p-8 text-white text-center shadow-lg"
          >
            <p className="text-5xl font-playfair font-bold mb-2">
              {t('testimonials.rating')}
            </p>
            <p className="font-medium text-amber-100">
              {t('testimonials.rating_label')}
            </p>
          </motion.div>

          <motion.div
            whileHover={{ scale: 1.05, y: -5 }}
            className="bg-linear-to-br from-amber-500 to-yellow-500 rounded-xl p-8 text-white text-center shadow-lg"
          >
            <p className="text-5xl font-playfair font-bold mb-2">
              {t('testimonials.format')}
            </p>
            <p className="font-medium text-amber-100">
              {t('testimonials.format_label')}
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
