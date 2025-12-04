'use client';

import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { Badge } from '@/components/ui/badge';
import { faqs } from '@/lib/data/products';

export function FAQSection() {
  return (
    <section className="py-20 bg-gradient-to-br from-amber-50 to-yellow-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <Badge className="mb-4 bg-yellow-100 text-amber-900 border-amber-300">
            Preguntas Frecuentes
          </Badge>
          <h2 className="text-4xl md:text-5xl font-playfair font-bold text-amber-950 mb-4">
            ¿Por qué Sebo?
          </h2>
          <p className="text-lg text-gray-700">
            Respuestas a tus preguntas sobre nuestro producto revolucionario
          </p>
        </div>

        {/* FAQ Accordion */}
        <div className="bg-white rounded-xl shadow-lg overflow-hidden border-2 border-amber-100">
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq) => (
              <AccordionItem key={faq.id} value={faq.id} className="border-b border-amber-100 last:border-b-0">
                <AccordionTrigger className="px-6 py-4 hover:bg-amber-50 transition group">
                  <span className="text-left font-bold text-amber-950 text-lg group-hover:text-amber-600 transition">
                    {faq.question}
                  </span>
                </AccordionTrigger>
                <AccordionContent className="px-6 py-4 bg-gradient-to-r from-amber-50 to-yellow-50 text-gray-700 leading-relaxed">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
}
