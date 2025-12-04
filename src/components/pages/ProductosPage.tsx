'use client';

import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { ShoppingCart, Star } from 'lucide-react';
import { motion } from 'framer-motion';
import { useLanguage } from '@/context/LanguageContext';
import Image from 'next/image';
import { products } from '@/lib/data/products';

export default function ProductosPage() {
  const { t } = useLanguage();

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

  return (
    <main className="min-h-screen bg-linear-to-b from-white to-amber-50">
      {/* Hero Section */}
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="py-20 px-4 sm:px-6 lg:px-8 bg-linear-to-r from-amber-100 to-yellow-100"
      >
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-playfair font-bold text-amber-900 mb-4">
            {t('products.title')}
            </h1>
            <p className="text-xl text-gray-700 max-w-2xl mx-auto">
              {t('products.description')}
            </p>
          </div>
        </motion.section>

        {/* Products Grid */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-100px' }}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
            >
              {products.map((product, idx) => (
                <motion.div
                  key={product.id}
                  variants={itemVariants}
                  whileHover={{ y: -10 }}
                  className="h-full"
                >
                  <Card className="h-full bg-white hover:shadow-2xl transition-all duration-300 border-amber-100 overflow-hidden flex flex-col">
                    {/* Product Image */}
                    <div className="relative h-48 bg-linear-to-br from-amber-100 to-yellow-100 flex items-center justify-center overflow-hidden">
                      {product.image && (
                        <Image
                          src={product.image}
                          alt={product.name}
                          width={200}
                          height={200}
                          className="object-cover w-full h-full"
                        />
                      )}
                      {product.featured && (
                        <Badge className="absolute top-3 right-3 bg-amber-600 hover:bg-amber-700">
                          {t('products.featured')}
                        </Badge>
                      )}
                    </div>

                    {/* Product Content */}
                    <div className="p-6 flex flex-col grow">
                      <h3 className="font-playfair text-2xl font-bold text-amber-900 mb-2">
                        {product.name}
                      </h3>

                      {/* Rating */}
                      <motion.div
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ delay: idx * 0.1 + 0.5 }}
                        className="flex items-center gap-1 mb-3"
                      >
                        {[...Array(5)].map((_, i) => (
                          <motion.div
                            key={i}
                            initial={{ rotate: -180 }}
                            whileInView={{ rotate: 0 }}
                            transition={{ delay: i * 0.1 }}
                          >
                            <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                          </motion.div>
                        ))}
                        <span className="text-sm text-gray-600 ml-2">(5.0)</span>
                      </motion.div>

                      <p className="text-gray-600 text-sm mb-4 grow">
                        {product.description}
                      </p>

                      {/* Benefits */}
                      <ul className="space-y-2 mb-4 text-sm">
                        {product.benefits?.slice(0, 2).map((benefit, i) => (
                          <li key={i} className="flex items-start gap-2 text-gray-700">
                            <span className="text-amber-600 font-bold">✓</span>
                            <span>{benefit}</span>
                          </li>
                        ))}
                      </ul>

                      {/* Price and CTA */}
                      <div className="mt-auto space-y-3 pt-4 border-t border-gray-200">
                        <div className="flex items-center justify-between">
                          <span className="text-3xl font-bold text-amber-600">
                            AUS${product.price}
                          </span>
                          <span className="text-sm text-gray-500">{product.currency}</span>
                        </div>
                        <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                          <Button className="w-full bg-linear-to-r from-amber-600 to-yellow-600 hover:from-amber-700 hover:to-yellow-700 text-white font-semibold flex items-center justify-center gap-2">
                            <ShoppingCart className="w-4 h-4" />
                            {t('hero.cta')}
                          </Button>
                        </motion.div>
                      </div>
                    </div>
                  </Card>
                </motion.div>
              ))}
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
              {t('products.title')}
            </h2>
            <p className="text-xl mb-8 opacity-90">
              {t('products.description')}
            </p>
            <Button className="bg-white text-amber-600 hover:bg-gray-100 font-semibold text-lg px-8 py-3">
              {t('hero.cta')}
            </Button>
          </div>
        </motion.section>
      </main>
  );
}
