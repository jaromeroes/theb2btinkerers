import type { Lang } from './config';

/**
 * Chrome strings shared across every page: nav, footer, contact section,
 * contact form and SEO defaults. Page-body copy lives in ./pages/*.
 */
export const ui = {
  en: {
    site: {
      name: 'The B2B Tinkerers',
      defaultDescription:
        'B2B Marketing Strategy Consultancy. We help B2B tech, industrial, and financial services companies get more from marketing, without spending more.',
      logoAlt: 'The B2B Tinkerers',
      skipToContent: 'Skip to content',
    },
    nav: {
      services: 'Services',
      viewAllServices: 'View all services →',
      insights: 'Insights',
      about: 'About',
      join: 'Join',
      joinMobile: 'Join the team',
      cta: "Let's talk →",
      langSwitchLabel: 'Language',
    },
    contact: {
      eyebrow: "Let's talk",
      heading: '30 minutes. No pitch. Just an honest conversation.',
      body: "Tell us where you're stuck. We'll tell you, straight, whether we can help and how. Reply within 24 hours.",
      orEmail: 'Or email us directly',
    },
    form: {
      nameLabel: 'Your name',
      namePlaceholder: 'Jane Smith',
      companyLabel: 'Company',
      companyPlaceholder: 'Acme B2B',
      emailLabel: 'Work email',
      emailPlaceholder: 'jane@company.com',
      messageLabel: 'What are you trying to solve?',
      messagePlaceholder:
        "Tell us about your current situation and what you're looking for...",
      submit: 'Send message →',
      sending: 'Sending...',
      sent: 'Sent ✓',
      disclaimer: "We'll respond within 24 hours. No spam, no pitch decks.",
      success: "Message sent. We'll be in touch shortly.",
      error: 'Something went wrong. Please try emailing us directly.',
    },
    footer: {
      tagline: 'Senior B2B marketing strategy,<br/>without the agency overhead.',
      servicesLabel: 'Services',
      companyLabel: 'Company',
      getInTouchLabel: 'Get in touch',
      about: 'About',
      insights: 'Insights',
      join: 'Join the team',
      contact: 'Contact',
      copyright: '© 2026 The B2B Tinkerers. All rights reserved.',
    },
  },
  es: {
    site: {
      name: 'The B2B Tinkerers',
      defaultDescription:
        'Consultoría de estrategia de marketing B2B. Ayudamos a empresas B2B de tecnología, industria y servicios financieros a sacar más partido al marketing, sin gastar más.',
      logoAlt: 'The B2B Tinkerers',
      skipToContent: 'Saltar al contenido',
    },
    nav: {
      services: 'Servicios',
      viewAllServices: 'Ver todos los servicios →',
      insights: 'Insights',
      about: 'Quiénes somos',
      join: 'Únete',
      joinMobile: 'Únete al equipo',
      cta: 'Hablemos →',
      langSwitchLabel: 'Idioma',
    },
    contact: {
      eyebrow: 'Hablemos',
      heading: '30 minutos. Sin pitch. Una conversación honesta.',
      body: 'Cuéntanos dónde estás atascado. Te diremos, sin rodeos, si podemos ayudar y cómo. Respondemos en 24 horas.',
      orEmail: 'O escríbenos directamente',
    },
    form: {
      nameLabel: 'Tu nombre',
      namePlaceholder: 'Ana García',
      companyLabel: 'Empresa',
      companyPlaceholder: 'Acme B2B',
      emailLabel: 'Email de trabajo',
      emailPlaceholder: 'ana@empresa.com',
      messageLabel: '¿Qué estás intentando resolver?',
      messagePlaceholder:
        'Cuéntanos tu situación actual y qué estás buscando...',
      submit: 'Enviar mensaje →',
      sending: 'Enviando...',
      sent: 'Enviado ✓',
      disclaimer: 'Respondemos en 24 horas. Sin spam, sin dosieres de venta.',
      success: 'Mensaje enviado. Te contactamos enseguida.',
      error: 'Algo ha fallado. Prueba a escribirnos directamente por email.',
    },
    footer: {
      tagline:
        'Estrategia de marketing B2B senior,<br/>sin el sobrecoste de agencia.',
      servicesLabel: 'Servicios',
      companyLabel: 'Empresa',
      getInTouchLabel: 'Contacto',
      about: 'Quiénes somos',
      insights: 'Insights',
      join: 'Únete al equipo',
      contact: 'Contacto',
      copyright: '© 2026 The B2B Tinkerers. Todos los derechos reservados.',
    },
  },
} as const;

export function useTranslations(lang: Lang) {
  return ui[lang];
}
