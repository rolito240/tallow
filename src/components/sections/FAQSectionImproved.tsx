'use client';

import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { Badge } from '@/components/ui/badge';
import { faqs } from '@/lib/data/products';
import { motion } from 'framer-motion';
import { HelpCircle } from 'lucide-react';

export function FAQSectionImproved() {
  return (
    <section className="py-20 bg-linear-to-br from-amber-50 to-yellow-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <Badge className="mb-4 bg-yellow-100 text-amber-900 border-amber-300">
            Preguntas Frecuentes
          </Badge>
          <h2 className="text-4xl md:text-5xl font-playfair font-bold text-amber-950 mb-4">
            ¿Por qué Sebo?
          </h2>
          <p className="text-lg text-gray-700">
            Respuestas a tus preguntas sobre nuestro producto revolucionario
          </p>
        </motion.div>

        {/* FAQ Accordion */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
          className="bg-white rounded-xl shadow-lg overflow-hidden border-2 border-amber-100"
        >
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, idx) => (
              <motion.div
                key={faq.id}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.05 }}
              >
                <AccordionItem
                  value={faq.id}
                  className="border-b border-amber-100 last:border-b-0"
                >
                  <motion.div whileHover={{ x: 5 }} transition={{ duration: 0.2 }}>
                    <AccordionTrigger className="px-6 py-4 hover:bg-amber-50 transition group text-left">
                      <div className="flex items-center gap-3 w-full">
                        <motion.div
                          whileHover={{ rotate: 360 }}
                          transition={{ duration: 0.6 }}
                          className="text-amber-600 shrink-0"
                        >
                          <HelpCircle className="w-5 h-5" />
                        </motion.div>
                        <span className="font-bold text-amber-950 text-lg group-hover:text-amber-600 transition text-left">
                          {faq.question}
                        </span>
                      </div>
                    </AccordionTrigger>
                  </motion.div>
                  <AccordionContent className="px-6 py-4 bg-linear-to-r from-amber-50 to-yellow-50 text-gray-700 leading-relaxed">
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      {faq.answer}
                    </motion.div>
                  </AccordionContent>
                </AccordionItem>
              </motion.div>
            ))}
          </Accordion>
        </motion.div>

        {/* Additional Info */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-12 bg-white rounded-lg p-8 border-2 border-amber-200 text-center"
        >
          <h3 className="text-xl font-playfair font-bold text-amber-950 mb-4">
            ¿Aún tienes preguntas?
          </h3>
          <p className="text-gray-700 mb-6">
            Nuestro equipo de expertos está aquí para ayudarte. Contáctanos sin hesitar.
          </p>
          <motion.a
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            href="mailto:info@oztallow.com"
            className="inline-block px-8 py-3 bg-linear-to-r from-amber-600 to-yellow-600 hover:from-amber-700 hover:to-yellow-700 text-white font-bold rounded-lg transition shadow-lg"
          >
            Contáctanos Ahora
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}
