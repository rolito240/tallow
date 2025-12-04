'use client';

import { Card } from '@/components/ui/card';
import { Leaf, Beaker, Heart } from 'lucide-react';

export function BenefitsSection() {
  return (
    <section id="benefits" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-playfair font-bold text-amber-950 mb-4">
            La Ciencia de la Naturaleza
          </h2>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto">
            Descubre por qué el sebo biocompatible es la solución que tu piel ha estado esperando
          </p>
        </div>

        {/* Benefits Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Benefit 1 */}
          <Card className="p-8 border-2 border-amber-100 hover:border-amber-300 transition group">
            <div className="w-16 h-16 bg-gradient-to-br from-yellow-100 to-amber-100 rounded-full flex items-center justify-center mb-6 group-hover:scale-110 transition">
              <Beaker className="w-8 h-8 text-amber-600" />
            </div>
            <h3 className="text-2xl font-playfair font-bold text-amber-950 mb-4">
              Biocompatibilidad Total
            </h3>
            <p className="text-gray-700 leading-relaxed">
              La estructura molecular del sebo es casi idéntica a los aceites naturales de la piel
              humana, permitiendo una absorción profunda sin obstruir poros.
            </p>
          </Card>

          {/* Benefit 2 */}
          <Card className="p-8 border-2 border-amber-100 hover:border-amber-300 transition group">
            <div className="w-16 h-16 bg-gradient-to-br from-yellow-100 to-amber-100 rounded-full flex items-center justify-center mb-6 group-hover:scale-110 transition">
              <Leaf className="w-8 h-8 text-amber-600" />
            </div>
            <h3 className="text-2xl font-playfair font-bold text-amber-950 mb-4">
              Vitaminas Naturales
            </h3>
            <p className="text-gray-700 leading-relaxed">
              Un cóctel natural de vitaminas A, D, E y K con antioxidantes esenciales que la mayoría
              de las lociones sintéticas intentan imitar.
            </p>
          </Card>

          {/* Benefit 3 */}
          <Card className="p-8 border-2 border-amber-100 hover:border-amber-300 transition group">
            <div className="w-16 h-16 bg-gradient-to-br from-yellow-100 to-amber-100 rounded-full flex items-center justify-center mb-6 group-hover:scale-110 transition">
              <Heart className="w-8 h-8 text-amber-600" />
            </div>
            <h3 className="text-2xl font-playfair font-bold text-amber-950 mb-4">
              Alivio para Piel Sensible
            </h3>
            <p className="text-gray-700 leading-relaxed">
              Específicamente formulado para calmar brotes de eccema, rosácea y psoriasis sin ardor
              ni irritación.
            </p>
          </Card>
        </div>

        {/* Additional Benefits */}
        <div className="mt-16 bg-gradient-to-r from-amber-50 to-yellow-50 rounded-xl p-12">
          <h3 className="text-3xl font-playfair font-bold text-amber-950 mb-8">
            ¿Por qué Tallow Australiano?
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="space-y-4">
              <div className="flex items-start gap-4">
                <span className="text-3xl">🐄</span>
                <div>
                  <h4 className="font-bold text-lg text-amber-950">Alimentado con Pasto</h4>
                  <p className="text-gray-700">
                    Vacas que pastan libremente en tierras australianas, resultando en tallow de
                    mayor calidad nutricional.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <span className="text-3xl">✓</span>
                <div>
                  <h4 className="font-bold text-lg text-amber-950">Certificado Halal</h4>
                  <p className="text-gray-700">
                    Máximo estándar de calidad y respeto ético en cada etapa del procesamiento.
                  </p>
                </div>
              </div>
            </div>
            <div className="space-y-4">
              <div className="flex items-start gap-4">
                <span className="text-3xl">🌿</span>
                <div>
                  <h4 className="font-bold text-lg text-amber-950">Procesamiento Puro</h4>
                  <p className="text-gray-700">
                    Filtración de agua especializada. Libre de cloro, químicos de procesamiento o
                    aditivos.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <span className="text-3xl">❤️</span>
                <div>
                  <h4 className="font-bold text-lg text-amber-950">Hecho en Australia</h4>
                  <p className="text-gray-700">
                    Orgullo australiano. Calidad premium de principio a fin con control total.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
