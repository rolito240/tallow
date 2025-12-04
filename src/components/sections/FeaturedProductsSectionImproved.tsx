'use client';

import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { products } from '@/lib/data/products';
import Link from 'next/link';
import { ShoppingCart, Star } from 'lucide-react';
import { motion } from 'framer-motion';
import { useLanguage } from '@/context/LanguageContext';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.1,
    },
  },
};

const productVariants = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.5 },
  },
};

export function FeaturedProductsSectionImproved() {
  const { t } = useLanguage();
  const featuredProducts = products.filter((p) => p.featured);

  return (
    <section id="featured" className="py-20 bg-linear-to-br from-white via-amber-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <Badge className="mb-4 bg-amber-100 text-amber-900 border-amber-300 hover:scale-105 transition-transform">
            {t('collections.title')}
          </Badge>
          <h2 className="text-4xl md:text-5xl font-playfair font-bold text-amber-950 mb-4">
            {t('collections.subtitle')}
          </h2>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto">
            Soluciones simples y efectivas de cuidado de la piel para cada necesidad
          </p>
        </motion.div>

        {/* Products Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12"
        >
          {featuredProducts.map((product) => (
            <motion.div key={product.id} variants={productVariants} className="group">
              <Card className="overflow-hidden border-2 border-amber-100 hover:border-amber-300 transition h-full flex flex-col bg-white hover:shadow-2xl">
                {/* Product Image Placeholder */}
                <motion.div
                  className="relative h-64 bg-linear-to-br from-amber-50 to-yellow-50 border-b-2 border-amber-100 flex items-center justify-center overflow-hidden"
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.3 }}
                >
                  <motion.div
                    animate={{ scale: [1, 1.1, 1] }}
                    transition={{ duration: 3, repeat: Infinity }}
                    className="text-8xl"
                  >
                    🧴
                  </motion.div>
                </motion.div>

                {/* Product Content */}
                <div className="p-8 flex flex-col flex-grow">
                  <div className="flex items-start justify-between mb-4">
                    <h3 className="text-2xl font-playfair font-bold text-amber-950 flex-1">
                      {product.name}
                    </h3>
                    <motion.span
                      animate={{ rotate: [0, 10, -10, 0] }}
                      transition={{ duration: 2, repeat: Infinity }}
                      className="text-3xl"
                    >
                      ✓
                    </motion.span>
                  </div>

                  <p className="text-gray-700 mb-6 flex-grow">{product.description}</p>

                  {/* Benefits */}
                  <motion.div
                    className="mb-6 space-y-2"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    variants={{
                      hidden: { opacity: 0 },
                      visible: {
                        opacity: 1,
                        transition: { staggerChildren: 0.05 },
                      },
                    }}
                  >
                    {product.benefits.map((benefit, idx) => (
                      <motion.div
                        key={idx}
                        variants={{
                          hidden: { opacity: 0, x: -10 },
                          visible: { opacity: 1, x: 0 },
                        }}
                        className="flex items-center gap-2 text-sm text-gray-700 group/benefit hover:text-amber-600 transition"
                      >
                        <motion.span
                          whileHover={{ scale: 1.2 }}
                          className="text-amber-600 font-bold"
                        >
                          ✓
                        </motion.span>
                        {benefit}
                      </motion.div>
                    ))}
                  </motion.div>

                  {/* Rating & Price */}
                  <div className="border-t-2 border-amber-100 pt-4 flex items-center justify-between mb-6">
                    <div className="flex items-center gap-1">
                      {[...Array(5)].map((_, i) => (
                        <motion.div
                          key={i}
                          initial={{ opacity: 0, scale: 0 }}
                          whileInView={{ opacity: 1, scale: 1 }}
                          viewport={{ once: true }}
                          transition={{ delay: i * 0.05 }}
                        >
                          <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                        </motion.div>
                      ))}
                      <span className="text-sm text-gray-600 ml-2">(4.9/5)</span>
                    </div>
                    <span className="text-3xl font-playfair font-bold text-amber-600">
                      {product.currency}${product.price}
                    </span>
                  </div>

                  {/* CTA Button */}
                  <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                    <Button
                      asChild
                      className="w-full bg-linear-to-r from-amber-600 to-yellow-600 hover:from-amber-700 hover:to-yellow-700 text-white font-bold shadow-lg"
                    >
                      <Link
                        href={`#${product.id}`}
                        className="flex items-center justify-center gap-2"
                      >
                        <ShoppingCart className="w-5 h-5" />
                        Ver Detalles
                      </Link>
                    </Button>
                  </motion.div>
                </div>
              </Card>
            </motion.div>
          ))}
        </motion.div>

        {/* CTA Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Button
              asChild
              size="lg"
              className="bg-amber-600 hover:bg-amber-700 text-white font-bold text-lg px-10 py-6 shadow-xl"
            >
              <Link href="#featured">Ver Todos los Productos</Link>
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
