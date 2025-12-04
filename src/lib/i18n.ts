export type Language = 'es' | 'en';

export const translations = {
  es: {
    nav: {
      home: 'Inicio',
      products: 'Productos',
      about: 'Acerca de',
      contact: 'Contacto',
    },
    header: {
      announcement: 'El secreto mejor guardado de la historia para una piel radiante.',
      freeShipping: 'Envío gratis en pedidos +AUS$50',
    },
    hero: {
      title: 'Tallow Puro para tu Piel',
      subtitle: 'Descubre la belleza ancestral del tallow bovino. Restaura, regenera y rejuvenece tu piel naturalmente.',
      cta: 'Comprar Ahora',
    },
    benefits: {
      title: 'Por qué elegir Tallow',
      description: 'Ingredientes naturales, probados científicamente y recomendados por dermatólogos.',
    },
    products: {
      title: 'Nuestros Productos',
      description: 'Cada producto está formulado con ingredientes naturales y puros.',
      featured: 'Destacados',
    },
    contact: {
      title: 'Ponte en Contacto',
      description: 'Estamos aquí para ayudarte con cualquier pregunta sobre nuestros productos.',
      name: 'Nombre',
      email: 'Correo Electrónico',
      message: 'Mensaje',
      send: 'Enviar',
      success: 'Mensaje enviado correctamente',
    },
    footer: {
      company: 'Empresa',
      legal: 'Legal',
      social: 'Síguenos',
      privacy: 'Privacidad',
      terms: 'Términos',
      rights: 'Todos los derechos reservados',
    },
    faq: {
      title: 'Preguntas Frecuentes',
    },
  },
  en: {
    nav: {
      home: 'Home',
      products: 'Products',
      about: 'About',
      contact: 'Contact',
    },
    header: {
      announcement: 'The best kept secret in history for radiant skin.',
      freeShipping: 'Free shipping on orders +AUS$50',
    },
    hero: {
      title: 'Pure Tallow for Your Skin',
      subtitle: 'Discover the ancestral beauty of beef tallow. Restore, regenerate and rejuvenate your skin naturally.',
      cta: 'Shop Now',
    },
    benefits: {
      title: 'Why Choose Tallow',
      description: 'Natural ingredients, scientifically proven and recommended by dermatologists.',
    },
    products: {
      title: 'Our Products',
      description: 'Each product is formulated with natural and pure ingredients.',
      featured: 'Featured',
    },
    contact: {
      title: 'Get in Touch',
      description: 'We are here to help you with any questions about our products.',
      name: 'Name',
      email: 'Email',
      message: 'Message',
      send: 'Send',
      success: 'Message sent successfully',
    },
    footer: {
      company: 'Company',
      legal: 'Legal',
      social: 'Follow Us',
      privacy: 'Privacy',
      terms: 'Terms',
      rights: 'All rights reserved',
    },
    faq: {
      title: 'Frequently Asked Questions',
    },
  },
};

export const getTranslation = (language: Language, path: string): string => {
  const keys = path.split('.');
  let value: Record<string, unknown> | string = translations[language];

  for (const key of keys) {
    if (typeof value === 'object' && value !== null) {
      value = value[key] as Record<string, unknown> | string;
    }
  }

  return typeof value === 'string' ? value : path;
};
