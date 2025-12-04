# OZ Tallow Skincare Website

🌿 **Sitio web oficial de OZ Tallow Skincare** - Cuidado de la piel natural con sebo 100% alimentado con pasto.

## 🎯 Características

- ✨ Diseño moderno y elegante con paleta de colores tierra
- 🎨 Tipografía profesional (Playfair Display + Montserrat)
- 📱 Totalmente responsive y mobile-first
- ⚡ Optimizado para rendimiento con Next.js 14+
- 🎭 Componentes reutilizables con shadcn/ui
- 🎨 Estilizado con Tailwind CSS
- 🔍 SEO optimizado con metadata, sitemap y robots.txt
- ♿ Accesible y semántico

## 🛠️ Stack Tecnológico

- **Framework**: Next.js 16 (App Router)
- **UI Library**: React 19
- **Styling**: Tailwind CSS v4
- **Components**: shadcn/ui
- **Icons**: Lucide React
- **Language**: TypeScript
- **Package Manager**: npm

## 📦 Instalación

\\\ash
# Clonar el repositorio
git clone https://github.com/rolito240/tallow.git

# Instalar dependencias
npm install

# Ejecutar en desarrollo
npm run dev

# Compilar para producción
npm run build

# Ejecutar en producción
npm start
\\\

## 🎨 Paleta de Colores

- **Crema/Marfil**: #FDFBF7 (Fondo principal)
- **Terracota Suave**: #E07A5F (CTAs)
- **Salvia**: #81B29A (Acentos)
- **Marrón Café**: #3D405B (Tipografía)
- **Dorado/Amarillo**: Gradientes para destacar

## 📁 Estructura del Proyecto

\\\
src/
├── app/
│   ├── layout.tsx          # Layout principal con metadata SEO
│   ├── page.tsx            # Página de inicio
│   ├── globals.css         # Estilos globales
│   ├── robots.ts           # Configuración robots.txt
│   └── sitemap.ts          # Sitemap XML
├── components/
│   ├── ui/                 # Componentes shadcn/ui
│   ├── sections/           # Secciones de la landing page
│   │   ├── HeroSection.tsx
│   │   ├── BenefitsSection.tsx
│   │   ├── FeaturedProductsSection.tsx
│   │   ├── TestimonialsSection.tsx
│   │   └── FAQSection.tsx
│   ├── Header.tsx          # Navegación principal
│   └── Footer.tsx          # Pie de página
└── lib/
    ├── data/
    │   └── products.ts     # Datos de productos, testimonios y FAQs
    └── utils.ts            # Utilidades
\\\

## 🚀 Deployment en Vercel

\\\ash
# Instalar Vercel CLI
npm install -g vercel

# Deploy
vercel
\\\

O conectar el repositorio en [vercel.com](https://vercel.com) para deployment automático.

## 📝 Variables de Entorno

Crear archivo \.env.local\ con:

\\\nv
NEXT_PUBLIC_SITE_URL=https://oztallow.com
\\\

## 🎯 Optimización SEO

- ✅ Metadata completa en cada página
- ✅ Open Graph tags
- ✅ Sitemap.xml generado automáticamente
- ✅ Robots.txt configurado
- ✅ Semantic HTML
- ✅ Alt text en imágenes
- ✅ Performance optimizado

## 📄 Licencia

© 2024 OZ Tallow Skincare. Todos los derechos reservados.

## 👨‍💻 Desarrollado por

Proyecto desarrollado con las mejores prácticas de desarrollo web moderno.

---

**Made with ❤️ in Australia**
