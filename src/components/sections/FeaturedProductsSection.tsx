'use client';

import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { products } from '@/lib/data/products';
import Link from 'next/link';
import { ShoppingCart, Star } from 'lucide-react';

export function FeaturedProductsSection() {
  const featuredProducts = products.filter((p) => p.featured);

  return (
    <section className="py-20 bg-gradient-to-br from-white via-amber-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <Badge className="mb-4 bg-amber-100 text-amber-900 border-amber-300">
            Colecciones Principales
          </Badge>
          <h2 className="text-4xl md:text-5xl font-playfair font-bold text-amber-950 mb-4">
            Nuestra Colección Esencial
          </h2>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto">
            Soluciones simples y efectivas de cuidado de la piel para cada necesidad
          </p>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          {featuredProducts.map((product) => (
            <Card
              key={product.id}
              className="overflow-hidden border-2 border-amber-100 hover:border-amber-300 transition group h-full flex flex-col"
            >
              {/* Product Image Placeholder */}
              <div className="relative h-64 bg-gradient-to-br from-amber-50 to-yellow-50 border-b-2 border-amber-100 flex items-center justify-center overflow-hidden group-hover:scale-105 transition duration-300">
                <div className="text-6xl">🧴</div>
              </div>

              {/* Product Content */}
              <div className="p-8 flex flex-col flex-grow">
                <div className="flex items-start justify-between mb-4">
                  <h3 className="text-2xl font-playfair font-bold text-amber-950 flex-1">
                    {product.name}
                  </h3>
                  <span className="text-3xl">✓</span>
                </div>

                <p className="text-gray-700 mb-6 flex-grow">{product.description}</p>

                {/* Benefits */}
                <div className="mb-6 space-y-2">
                  {product.benefits.map((benefit, idx) => (
                    <div key={idx} className="flex items-center gap-2 text-sm text-gray-700">
                      <span className="text-amber-600">✓</span>
                      {benefit}
                    </div>
                  ))}
                </div>

                {/* Rating & Price */}
                <div className="border-t-2 border-amber-100 pt-4 flex items-center justify-between">
                  <div className="flex items-center gap-1">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                    ))}
                    <span className="text-sm text-gray-600 ml-2">(4.9/5)</span>
                  </div>
                  <span className="text-3xl font-playfair font-bold text-amber-600">
                    {product.currency}${product.price}
                  </span>
                </div>

                {/* CTA Button */}
                <Button
                  asChild
                  className="w-full mt-6 bg-gradient-to-r from-amber-600 to-yellow-600 hover:from-amber-700 hover:to-yellow-700 text-white font-bold"
                >
                  <Link href={`/products/${product.id}`} className="flex items-center justify-center gap-2">
                    <ShoppingCart className="w-5 h-5" />
                    Ver Detalles
                  </Link>
                </Button>
              </div>
            </Card>
          ))}
        </div>

        {/* CTA Button */}
        <div className="text-center">
          <Button
            asChild
            size="lg"
            className="bg-amber-600 hover:bg-amber-700 text-white font-bold text-lg px-10 py-6"
          >
            <Link href="/products">Ver Todos los Productos</Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
