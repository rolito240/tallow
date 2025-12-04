'use client';

import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { testimonials } from '@/lib/data/products';
import { Star } from 'lucide-react';

export function TestimonialsSection() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-playfair font-bold text-amber-950 mb-4">
            Más de 10,000 Pieles Transformadas
          </h2>
          <p className="text-lg text-gray-700">
            Lee lo que dicen nuestros clientes satisfechos
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {testimonials.map((testimonial) => (
            <Card
              key={testimonial.id}
              className="p-6 border-2 border-amber-100 hover:border-amber-300 transition hover:shadow-lg"
            >
              {/* Rating */}
              <div className="flex items-center gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                ))}
              </div>

              {/* Testimonial Text */}
              <p className="text-gray-700 mb-6 italic leading-relaxed">"{testimonial.text}"</p>

              {/* Author */}
              <div className="border-t-2 border-amber-100 pt-4">
                <p className="font-bold text-amber-950 mb-1">{testimonial.name}</p>
                <Badge variant="secondary" className="bg-amber-100 text-amber-900 border-amber-200">
                  {testimonial.skinType}
                </Badge>
              </div>
            </Card>
          ))}
        </div>

        {/* Social Proof Stats */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          <div className="bg-gradient-to-br from-amber-50 to-yellow-50 rounded-xl p-8">
            <p className="text-4xl font-playfair font-bold text-amber-600 mb-2">10,000+</p>
            <p className="text-gray-700 font-medium">Clientes Satisfechos</p>
          </div>
          <div className="bg-gradient-to-br from-amber-50 to-yellow-50 rounded-xl p-8">
            <p className="text-4xl font-playfair font-bold text-amber-600 mb-2">4.9/5</p>
            <p className="text-gray-700 font-medium">Calificación Promedio</p>
          </div>
          <div className="bg-gradient-to-br from-amber-50 to-yellow-50 rounded-xl p-8">
            <p className="text-4xl font-playfair font-bold text-amber-600 mb-2">120ml</p>
            <p className="text-gray-700 font-medium">Formato Estándar</p>
          </div>
        </div>
      </div>
    </section>
  );
}
