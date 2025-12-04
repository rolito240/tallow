'use client';

import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Mail, Leaf, Heart } from 'lucide-react';
import { useState } from 'react';

export function Footer() {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would typically send the email to your backend
    console.log('Subscribed:', email);
    setSubscribed(true);
    setEmail('');
    setTimeout(() => setSubscribed(false), 3000);
  };

  return (
    <footer className="bg-gradient-to-b from-white to-amber-950 text-white">
      {/* Newsletter Section */}
      <div className="bg-gradient-to-r from-amber-600 to-yellow-600 py-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-8">
            <div>
              <h3 className="text-2xl font-bold mb-2">Obtén 10% de Descuento</h3>
              <p>Suscríbete a nuestro newsletter para ofertas exclusivas</p>
            </div>
            <form onSubmit={handleSubscribe} className="flex gap-2 w-full md:w-auto">
              <Input
                type="email"
                placeholder="tu@email.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="bg-white text-gray-900 placeholder-gray-500 border-0 flex-1 md:flex-initial"
              />
              <Button type="submit" variant="secondary" className="font-bold">
                <Mail className="w-4 h-4 mr-2" />
                Suscribir
              </Button>
            </form>
          </div>
          {subscribed && (
            <p className="text-center mt-4 text-sm font-semibold animate-pulse">
              ¡Gracias! Revisa tu email para tu código de descuento.
            </p>
          )}
        </div>
      </div>

      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          {/* Brand */}
          <div className="space-y-4">
            <Link href="/" className="flex items-center space-x-2">
              <div className="w-10 h-10 rounded-full bg-yellow-400 flex items-center justify-center">
                <span className="font-bold text-amber-900 text-lg">✓</span>
              </div>
              <span className="font-playfair font-bold text-xl">OZ Tallow</span>
            </Link>
            <p className="text-amber-100 text-sm leading-relaxed">
              Cuidado de la piel natural, biocompatible y halal certificado. Hecho en Australia con
              orgullo.
            </p>
            <div className="flex gap-3 pt-4">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-amber-900 hover:bg-yellow-500 transition flex items-center justify-center text-white"
              >
                📷
              </a>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-amber-900 hover:bg-yellow-500 transition flex items-center justify-center text-white"
              >
                👍
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-amber-900 hover:bg-yellow-500 transition flex items-center justify-center text-white"
              >
                𝕏
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-bold text-lg mb-4">Navegación</h4>
            <ul className="space-y-2 text-amber-100 text-sm">
              <li>
                <Link href="/" className="hover:text-white transition">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/products" className="hover:text-white transition">
                  Productos
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-white transition">
                  Acerca de
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-white transition">
                  Contacto
                </Link>
              </li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h4 className="font-bold text-lg mb-4">Soporte</h4>
            <ul className="space-y-2 text-amber-100 text-sm">
              <li>
                <Link href="#" className="hover:text-white transition">
                  FAQ
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-white transition">
                  Envíos & Devoluciones
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-white transition">
                  Política de Privacidad
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-white transition">
                  Términos de Servicio
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-bold text-lg mb-4">Contacto</h4>
            <ul className="space-y-3 text-amber-100 text-sm">
              <li className="flex items-center gap-2">
                <Mail className="w-4 h-4" />
                <a href="mailto:info@oztallow.com" className="hover:text-white transition">
                  info@oztallow.com
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Leaf className="w-4 h-4" />
                Made in Australia
              </li>
              <li className="flex items-center gap-2">
                <Heart className="w-4 h-4" />
                Halal Certified
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-amber-900 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-amber-100 text-sm">
            <p>&copy; 2024 OZ Tallow Skincare. Todos los derechos reservados.</p>
            <div className="flex gap-6">
              <span className="flex items-center gap-1">🌾 Grass-Fed</span>
              <span className="flex items-center gap-1">✓ Halal</span>
              <span className="flex items-center gap-1">🍃 Chemical-Free</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
