'use client';

import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import Link from 'next/link';
import Image from 'next/image';

export function HeroSection() {
  return (
    <section className="relative min-h-screen bg-gradient-to-br from-amber-50 via-white to-yellow-50 overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-yellow-100 rounded-full opacity-20 blur-3xl"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-amber-100 rounded-full opacity-20 blur-3xl"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-6 z-10">
            <div className="inline-flex">
              <Badge
                variant="secondary"
                className="bg-yellow-100 text-amber-900 border-amber-300 px-4 py-1.5 text-sm font-semibold"
              >
                ★ BEST SELLER
              </Badge>
            </div>

            <h1 className="text-5xl md:text-6xl font-playfair font-bold text-amber-950 leading-tight">
              Nutrición Biocompatible
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-600 to-amber-600">
                {' '}
                El Renacimiento del Cuidado
              </span>
            </h1>

            <p className="text-lg md:text-xl text-gray-700 leading-relaxed">
              La hidratación que tu piel reconoce. Formulado con sebo 100% natural, idéntico a los
              lípidos de tu propia piel para calmar la sequedad, el eccema y la psoriasis.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Button
                asChild
                size="lg"
                className="bg-gradient-to-r from-amber-600 to-yellow-600 hover:from-amber-700 hover:to-yellow-700 text-white font-bold text-lg px-8 py-6 rounded-lg shadow-lg"
              >
                <Link href="/products">Comprar el Tallow Original</Link>
              </Button>
              <Button
                asChild
                variant="outline"
                size="lg"
                className="border-amber-600 text-amber-600 hover:bg-amber-50 font-bold text-lg px-8 py-6 rounded-lg"
              >
                <Link href="#benefits">Descubrir Beneficios</Link>
              </Button>
            </div>

            {/* Trust indicators */}
            <div className="flex flex-col gap-3 pt-8">
              <div className="flex items-center gap-2">
                <span className="text-2xl">✓</span>
                <span className="text-gray-700">
                  <strong>Certificado Halal</strong> - Máximo estándar de calidad
                </span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-2xl">✓</span>
                <span className="text-gray-700">
                  <strong>100% Alimentado con Pasto</strong> - Australiano Premium
                </span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-2xl">✓</span>
                <span className="text-gray-700">
                  <strong>Libre de Químicos</strong> - Naturalmente puro
                </span>
              </div>
            </div>
          </div>

          {/* Right Image */}
          <div className="relative h-96 md:h-full md:min-h-screen flex items-center justify-center">
            <div className="relative w-full max-w-md">
              {/* Glass bottle effect */}
              <div className="absolute inset-0 bg-gradient-to-b from-white via-yellow-50 to-amber-100 rounded-2xl blur-2xl opacity-30"></div>

              <div className="relative bg-gradient-to-b from-amber-50 to-yellow-50 rounded-2xl p-8 border-2 border-amber-200 shadow-2xl transform hover:scale-105 transition duration-300">
                <div className="space-y-8">
                  {/* Bottle shape */}
                  <div className="flex justify-center">
                    <div className="w-32 h-40 bg-gradient-to-r from-amber-100 to-yellow-100 rounded-b-3xl rounded-t-2xl border-2 border-amber-300 shadow-md relative overflow-hidden">
                      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent opacity-40"></div>
                      <div className="absolute bottom-0 left-0 right-0 h-2/3 bg-gradient-to-t from-yellow-200 to-transparent opacity-50"></div>
                    </div>
                  </div>

                  {/* Texture description */}
                  <div className="space-y-4 text-center">
                    <h3 className="text-2xl font-playfair font-bold text-amber-950">
                      Crema Batida Premium
                    </h3>
                    <p className="text-gray-700 text-sm">
                      Textura rica y cremosa. Absorción perfecta. Sin residuos.
                    </p>
                  </div>

                  {/* Features */}
                  <div className="space-y-3">
                    <div className="flex items-center gap-2 text-sm text-gray-700">
                      <span className="text-lg">🌾</span> 100% Grass-Fed Tallow
                    </div>
                    <div className="flex items-center gap-2 text-sm text-gray-700">
                      <span className="text-lg">🍃</span> Halal Certified Purity
                    </div>
                    <div className="flex items-center gap-2 text-sm text-gray-700">
                      <span className="text-lg">✓</span> Bio-Compatible Nutrition
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
