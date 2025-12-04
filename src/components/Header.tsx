'use client';

import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { useState } from 'react';
import { Menu, X } from 'lucide-react';

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <>
      {/* Announcement Bar */}
      <div className="w-full bg-gradient-to-r from-yellow-50 to-amber-50 border-b border-yellow-200 py-3 px-4 text-center sticky top-0 z-40">
        <p className="text-sm md:text-base font-medium text-amber-900">
          🌿 El secreto mejor guardado de la historia para una piel radiante.{' '}
          <span className="font-bold">Envío gratis en pedidos +AUS$50</span>
        </p>
      </div>

      {/* Main Header */}
      <header className="w-full bg-white border-b border-gray-100 sticky top-12 z-40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            {/* Logo */}
            <Link href="/" className="flex items-center space-x-2">
              <div className="w-10 h-10 rounded-full bg-gradient-to-br from-yellow-500 to-amber-600 flex items-center justify-center">
                <span className="text-white font-bold text-lg">✓</span>
              </div>
              <span className="font-playfair font-bold text-2xl text-amber-900 hidden sm:inline">
                OZ Tallow
              </span>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex space-x-8">
              <Link
                href="/"
                className="text-gray-700 hover:text-amber-600 transition font-medium"
              >
                Home
              </Link>
              <Link
                href="/products"
                className="text-gray-700 hover:text-amber-600 transition font-medium"
              >
                Productos
              </Link>
              <Link
                href="/about"
                className="text-gray-700 hover:text-amber-600 transition font-medium"
              >
                Acerca de
              </Link>
              <Link
                href="/contact"
                className="text-gray-700 hover:text-amber-600 transition font-medium"
              >
                Contacto
              </Link>
            </nav>

            {/* Desktop CTA */}
            <div className="hidden md:flex space-x-4">
              <Button
                asChild
                variant="outline"
                className="border-amber-600 text-amber-600 hover:bg-amber-50"
              >
                <Link href="/products">Ver Productos</Link>
              </Button>
              <Button asChild className="bg-amber-600 hover:bg-amber-700">
                <Link href="/cart">Carrito</Link>
              </Button>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2"
            >
              {mobileMenuOpen ? (
                <X className="w-6 h-6 text-gray-700" />
              ) : (
                <Menu className="w-6 h-6 text-gray-700" />
              )}
            </button>
          </div>

          {/* Mobile Navigation */}
          {mobileMenuOpen && (
            <nav className="md:hidden pb-4 space-y-2">
              <Link
                href="/"
                className="block px-4 py-2 text-gray-700 hover:bg-amber-50 rounded"
              >
                Home
              </Link>
              <Link
                href="/products"
                className="block px-4 py-2 text-gray-700 hover:bg-amber-50 rounded"
              >
                Productos
              </Link>
              <Link
                href="/about"
                className="block px-4 py-2 text-gray-700 hover:bg-amber-50 rounded"
              >
                Acerca de
              </Link>
              <Link
                href="/contact"
                className="block px-4 py-2 text-gray-700 hover:bg-amber-50 rounded"
              >
                Contacto
              </Link>
              <Button asChild className="w-full mt-4 bg-amber-600 hover:bg-amber-700">
                <Link href="/products">Ver Productos</Link>
              </Button>
            </nav>
          )}
        </div>
      </header>
    </>
  );
}
