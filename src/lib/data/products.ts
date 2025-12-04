export interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  currency: string;
  image: string;
  benefits: string[];
  featured?: boolean;
}

export const products: Product[] = [
  {
    id: "essential",
    name: "Essential Whipped Tallow Cream",
    description: "Our original formula - pure, uncompromised hydration for all skin types",
    price: 45,
    currency: "AUD",
    image: "/products/essential.jpg",
    benefits: [
      "100% Grass-Fed Tallow",
      "Hypoallergenic",
      "Free of Synthetic Fragrances",
      "Safe for Babies & Pregnant Women",
    ],
    featured: true,
  },
  {
    id: "premium",
    name: "Premium Whipped Tallow Cream",
    description: "Formula enriched with Australian essential oils for a luxurious skincare experience",
    price: 49,
    currency: "AUD",
    image: "/products/premium.jpg",
    benefits: [
      "100% Grass-Fed Tallow",
      "Australian Essential Oils",
      "Hypoallergenic",
      "Multi-use Formula",
    ],
    featured: true,
  },
  {
    id: "renewal",
    name: "Renewal Care Whipped Cream",
    description: "Specialized care formula for skin renewal and regeneration",
    price: 48,
    currency: "AUD",
    image: "/products/renewal.jpg",
    benefits: [
      "Deep Regeneration",
      "Anti-Aging Properties",
      "Rich Antioxidants",
      "Intensive Hydration",
    ],
    featured: false,
  },
  {
    id: "sensitive",
    name: "Sensitive Skin Formula",
    description: "Specifically formulated for eczema, rosacea, and psoriasis relief",
    price: 47,
    currency: "AUD",
    image: "/products/sensitive.jpg",
    benefits: [
      "Soothing Formula",
      "For Sensitive Skin",
      "Eczema Relief",
      "Anti-Inflammatory",
    ],
    featured: false,
  },
];

export const testimonials = [
  {
    id: 1,
    name: "María G.",
    rating: 5,
    text: "Llevo años luchando con parches de eccema en los brazos. Nada funcionaba hasta que probé esto. En 3 días la rojez desapareció.",
    skinType: "Sensitive Skin",
  },
  {
    id: 2,
    name: "Carlos R.",
    rating: 5,
    text: "Tenía miedo de que oliera a carne o fuera grasoso, pero se absorbe increíblemente y mi piel brilla.",
    skinType: "Combination",
  },
  {
    id: 3,
    name: "Ana M.",
    rating: 5,
    text: "Finalmente encontré algo que no irritar mi piel durante el invierno. Increíble resulta.",
    skinType: "Dry Skin",
  },
  {
    id: 4,
    name: "Roberto T.",
    rating: 5,
    text: "La mejor inversión en cuidado de la piel. Noté mejoras reales en menos de una semana.",
    skinType: "Normal",
  },
];

export const faqs = [
  {
    id: "faq-1",
    question: "¿No es grasa animal?",
    answer:
      "Sí, y por eso funciona. Las plantas no tienen la misma biología que tu piel. El sebo ancestral se ha utilizado durante siglos antes de la era de los químicos sintéticos. Es biomolecularmente idéntico a los lípidos naturales de tu piel.",
  },
  {
    id: "faq-2",
    question: "¿Cómo se siente en la piel?",
    answer:
      "Rico pero no pegajoso. Se funde al contacto con el calor corporal, proporcionando hidratación profunda sin sensación grasosa. Se absorbe completamente en minutos.",
  },
  {
    id: "faq-3",
    question: "¿Es seguro para pieles sensibles?",
    answer:
      "Absolutamente. Nuestro Tallow es hipoalergénico, libre de fragancias sintéticas y perfectamente seguro para bebés, mujeres embarazadas y personas con eczema o psoriasis.",
  },
  {
    id: "faq-4",
    question: "¿Cuánto tiempo tarda en ver resultados?",
    answer:
      "Muchos clientes reportan mejoras visibles en 3-7 días. Para resultados óptimos, use consistentemente durante 2-4 semanas. Los resultados varían según el tipo y condición de la piel.",
  },
  {
    id: "faq-5",
    question: "¿Puedo usar en rostro, cuerpo y manos?",
    answer:
      "Sí, nuestras fórmulas son multiusos. Perfectas para rostro, cuerpo, labios y manos. Una fórmula versátil para todas tus necesidades de cuidado de la piel.",
  },
  {
    id: "faq-6",
    question: "¿Qué hace que sea diferente del tallow comercial?",
    answer:
      "Usamos sebo de vacas alimentadas con pasto certificadas Halal, procesado con filtración de agua especializada. Sin cloro, químicos de procesamiento o aditivos. Pure tallow nutrition.",
  },
];
