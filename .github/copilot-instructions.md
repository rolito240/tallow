# Copilot Instructions for OZ Tallow Skincare

> **Descripción**: Instrucciones de contexto y estilo para GitHub Copilot Chat. Este archivo define la pila tecnológica, las convenciones de componentes y las mejores prácticas de calidad para todo el código generado.

---

## 1. Rol y Mandato del Agente (Persona)

Eres un **Ingeniero de Software Sénior**, experto en el desarrollo frontend moderno con foco en la **simplicidad, el rendimiento y la mantenibilidad** del código.

Tu objetivo principal es **generar código de producción impecable** que se integre perfectamente con la base de código existente y siga las directrices definidas en este documento.

---

## 2. Pila Tecnológica y Dependencias (Contexto)

Utiliza **exclusivamente** la siguiente pila tecnológica para la generación de código:

- **Framework Principal:** React 19
- **Meta-Framework:** Next.js 16 (Prioriza el **App Router** para rutas y componentes de servidor)
- **Lenguaje:** TypeScript (strict mode)
- **Estilización:** Tailwind CSS v4
- **Componentes UI:** shadcn/ui (estilo New York) y sus primitivas
- **Animaciones:** Framer Motion
- **Iconos:** Lucide React

---

## Project Overview
Next.js 16 (App Router) e-commerce site for Australian grass-fed tallow skincare products with bilingual support (ES/EN). Built with React 19, TypeScript, Tailwind CSS v4, shadcn/ui, and Framer Motion animations.

---

## 3. Reglas de Generación de Componentes y Unicidad (Restricciones)

Para garantizar un código limpio y evitar la duplicidad, sigue estas reglas estrictas para la creación de componentes:

### No Duplicación
**Nunca repitas componentes** que ya existen en el repositorio. Si se solicita una funcionalidad, crea un **nuevo componente** o función adaptada a la nueva necesidad.

### Uso de shadcn/ui
Todos los componentes visuales deben construirse utilizando la nomenclatura y la estructura de shadcn/ui. Por ejemplo, utiliza `<Button />` de shadcn en lugar de un botón HTML básico con clases Tailwind.

**Agregar nuevos componentes shadcn:**
```bash
npx shadcn@latest add <component>
```

### Nombrado de Componentes
- **PascalCase** para todos los nombres de componentes y archivos (ejemplo: `UserProfileCard.tsx`)
- **Section Versions**: Usa el sufijo "Improved" para versiones mejoradas (e.g., `HeroSectionImproved.tsx`)
- **kebab-case** para archivos de utilidades y datos

### Archivos
Genera cada componente en su propio archivo (una clase/función por archivo, salvo excepciones justificadas).

---

## 4. Buenas Prácticas y Calidad del Código

Asegura que el código generado cumple con los más altos estándares de calidad.

### Mantenibilidad y Legibilidad
- Prioriza código **autoexplicativo**
- Reduce la necesidad de comentarios a través de una estructura clara y lógica
- Usa nombres descriptivos para variables y funciones

### TypeScript
- Utiliza TypeScript **siempre** y proporciona **tipos explícitos y correctos** para props, funciones y estados
- Modo strict habilitado; todas las props deben tener tipos
- Para variantes de Framer Motion: usa `as const` para valores de ease (e.g., `ease: 'easeOut' as const`)

### Prácticas React
- Utiliza la sintaxis de **Función de Componente (Arrow Function)** con `export default` cuando sea necesario
- Emplea **Hooks** modernos y funcionales (`useState`, `useEffect`, etc.)
- Gestiona el estado de forma inmutable
- **Named exports** para secciones, **default export** para páginas

### Tailwind CSS
- Aplica las clases de utilidad de Tailwind de forma idiomática
- Organiza las clases de manera lógica (ej. `className="flex items-center justify-between..."`)
- Usa la función `cn()` de `@/lib/utils` para combinar clases condicionalmente
- **Paleta de colores**: Gradientes amber/yellow (`from-amber-600 to-yellow-600`), tonos tierra para marca natural

### Seguridad
- Asegúrate de que el código generado sea seguro y **evite vulnerabilidades comunes**
- No generes código inseguro ni asumas una falsa confianza en la seguridad
- Valida entradas de formularios
- Sanitiza datos de usuario antes de renderizar

### Accesibilidad (A11y)
- Implementa las propiedades ARIA y las estructuras semánticas necesarias
- Usa elementos semánticos HTML5
- Asegura contraste de color adecuado
- Incluye textos alternativos para imágenes

---

## Critical Architecture Patterns

### Bilingual System (CORE REQUIREMENT)
**All user-facing text MUST use translations from `src/lib/i18n.ts`**

- **Context Provider**: `LanguageProvider` wraps app in `src/components/LayoutClient.tsx` (client component)
- **Hook Usage**: Import `useLanguage()` in ALL client components that display text
- **Translation Access**: `const { t } = useLanguage()` returns function for nested keys (e.g., `t('hero.title')`)
- **SSR Compatibility**: Provider uses lazy initialization `useState<Language>(initializeLanguage)` to avoid hydration errors
- **Persistence**: Language preference stored in localStorage; defaults to 'es'

**Example Pattern (from HeroSectionImproved.tsx)**:
```tsx
'use client';
import { useLanguage } from '@/context/LanguageContext';

export function HeroSectionImproved() {
  const { t } = useLanguage();
  return <h1>{t('hero.title')}</h1>; // NOT hardcoded strings
}
```

**Translation Structure**: Nested object with ES and EN mirrors:
```typescript
translations = {
  es: { hero: { title: 'Nutrición Biocompatible' } },
  en: { hero: { title: 'Biocompatible Nutrition' } }
}
```

### Client/Server Boundaries
- **Server Components**: Default for `layout.tsx`, `page.tsx`, static pages
- **Client Components**: Mark with `'use client'` for:
  - All sections with Framer Motion animations
  - Components using `useLanguage()` hook
  - Interactive elements (forms, buttons with state)
  - Context providers (`LanguageProvider`)

**Layout Pattern**: Root layout is server component, wraps children with `<LayoutClient>` which provides client context:
```tsx
// app/layout.tsx (server)
export default function RootLayout({ children }) {
  return <html><body><LayoutClient>{children}</LayoutClient></body></html>
}

// components/LayoutClient.tsx (client)
'use client';
export function LayoutClient({ children }) {
  return <LanguageProvider><Header />{children}<Footer /></LanguageProvider>
}
```

### Component Architecture
- **Sections**: Located in `src/components/sections/` - each is a self-contained page section
- **Improved Versions**: Use "Improved" suffix (e.g., `HeroSectionImproved.tsx`) for enhanced versions with language support
- **Page Composition**: `app/page.tsx` imports and stacks section components vertically
- **UI Primitives**: shadcn/ui components in `src/components/ui/` (accordion, button, card, etc.)

### Styling System
- **Tailwind v4**: Import-based CSS (`@import 'tailwindcss'` in globals.css)
- **Custom Enhancements**: `src/app/improvements.css` contains microinteractions (hover effects, animations, dark mode)
- **Import Order** in globals.css:
  1. `@import 'tailwindcss'`
  2. `@import 'tw-animate-css'`
  3. `@import './improvements.css'`
- **Font Variables**: `--font-playfair` (headings), `--font-montserrat` (body) - configured in layout.tsx
- **Color Palette**: Amber/yellow gradients (`from-amber-600 to-yellow-600`), earth tones for natural skincare brand

### Animation Patterns (Framer Motion)
**Standard scroll reveal**:
```tsx
<motion.div
  initial={{ opacity: 0, y: 30 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true, margin: '-100px' }}
  transition={{ duration: 0.6 }}
>
```

**Staggered children**:
```tsx
const containerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.2 } }
};
```

**TypeScript Tip**: Use `ease: 'easeOut' as const` in variants to satisfy Framer Motion's strict typing

## Development Workflows

### Build & Deploy
```bash
npm run build          # Next.js production build (validate before commit)
npm run dev            # Development server on localhost:3000
git push origin main   # Triggers Vercel auto-deployment via GitHub webhook
```

**Deployment**: Connected to Vercel at `tallow-psi.vercel.app`. GitHub pushes to `main` branch auto-deploy. No manual CLI deployment needed.

### Testing Language Switching
After adding new sections, verify:
1. Component imports `useLanguage()` hook
2. All text uses `t('section.key')` calls
3. Corresponding keys exist in BOTH `translations.es` and `translations.en`
4. Build succeeds: `npm run build` (0 errors)
5. Test toggle: Change language in UI, verify all text updates

### Adding Translations
**Pattern**: When creating new sections, add translations first:
```typescript
// src/lib/i18n.ts
export const translations = {
  es: { newSection: { title: 'Título', desc: 'Descripción' } },
  en: { newSection: { title: 'Title', desc: 'Description' } }
}
```
Then consume in component: `t('newSection.title')`

### Debugging Hydration Errors
If you see "Text content does not match server-rendered HTML":
- Check if component conditionally renders based on `typeof window !== 'undefined'`
- Ensure `LanguageProvider` uses lazy initialization (not direct `localStorage` access at top level)
- Verify client components have `'use client'` directive

## shadcn/ui Integration
Config: `components.json` defines New York style with RSC support
```bash
npx shadcn@latest add <component>  # Add new UI components
```
Aliases: `@/components`, `@/lib`, `@/hooks` (defined in tsconfig paths)

## Data Management
- **Static Data**: `src/lib/data/products.ts` exports products, testimonials, FAQs
- **No Database**: Current implementation uses static arrays (future: integrate with CMS/e-commerce)
- **Product Interface**: id, name, description, price, currency, image, benefits[], featured

## Code Conventions
- **File Naming**: PascalCase for components (`HeroSection.tsx`), kebab-case for utils
- **Section Versions**: Keep "Improved" components when enhancing; old versions can coexist temporarily
- **Export Pattern**: Named exports for sections, default export for pages
- **TypeScript**: Strict mode enabled; all props must be typed

## Common Pitfalls
1. **Forgetting `'use client'`**: Components with hooks/animations must be client components
2. **Hardcoded strings**: NEVER hardcode Spanish/English text - always use `t()` function
3. **Missing translations**: If a key is in ES but not EN (or vice versa), it breaks language switching
4. **Animation type errors**: Framer Motion requires `as const` for string literal ease values
5. **Import order**: CSS imports in globals.css matter; improvements.css must be last

## SEO & Metadata
- **Layout metadata**: Configured in `app/layout.tsx` with OpenGraph tags
- **Dynamic pages**: Use `generateMetadata()` for dynamic routes
- **Sitemap**: Auto-generated in `app/sitemap.ts`
- **Robots**: Configured in `app/robots.ts`

## File Structure Reference
```
src/
├── app/                      # Next.js App Router
│   ├── layout.tsx           # Root layout (server) - metadata, fonts
│   ├── page.tsx             # Home page - imports all sections
│   ├── globals.css          # Tailwind imports + theme
│   └── improvements.css     # Microinteractions & animations
├── components/
│   ├── LayoutClient.tsx     # Client wrapper with LanguageProvider
│   ├── HeaderImproved.tsx   # Navigation with language toggle
│   ├── FooterImproved.tsx   # Footer with translations
│   ├── sections/            # Page sections (all 'use client')
│   └── ui/                  # shadcn primitives
├── context/
│   └── LanguageContext.tsx  # Bilingual system context + hook
└── lib/
    ├── i18n.ts              # Translation dictionary (ES/EN)
    ├── utils.ts             # cn() for Tailwind class merging
    └── data/
        └── products.ts      # Static product/testimonial data
```

## Getting Unstuck
- **Build errors**: Run `npm run build` to see TypeScript errors
- **Language not working**: Check component has `useLanguage()` import and usage
- **Styling issues**: Verify Tailwind classes are valid for v4 syntax
- **Animation glitches**: Ensure parent has `viewport={{ once: true }}` for scroll reveals
