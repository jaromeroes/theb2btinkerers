import type { Lang } from '../config';
import type { ServiceSlug } from '../services-nav';

type WorkCard = { slug: ServiceSlug; title: string; body: string };
type ProofItem = { num: string; text: string; src: string };
type HowItem = { k: string; h: string; p: string };

export const home: Record<Lang, {
  seo: { description: string };
  hero: { kick: string; h1a: string; h1accent: string; body: string; ctaPrimary: string; ctaSecondary: string };
  belief: { eyebrow: string; hA: string; hAccent: string; p: string };
  work: { eyebrow: string; h2: string; more: string; foot: string; cards: WorkCard[] };
  proof: { eyebrow: string; h2: string; lead: string; items: ProofItem[] };
  howwork: { eyebrow: string; h2: string; lead: string; items: HowItem[] };
  insights: { eyebrow: string; h2: string; all: string; empty: string };
}> = {
  en: {
    seo: {
      description:
        'We help B2B tech, industrial, and financial services companies get more from marketing, without spending more. Not an agency. An insider.',
    },
    hero: {
      kick: 'The anti-agency.',
      h1a: "Your marketing budget isn't the problem.",
      h1accent: 'How you use it is.',
      body: 'We help B2B tech, industrial, and financial services companies get more from marketing, without spending more. Not an agency. An insider.',
      ctaPrimary: 'Book a discovery call →',
      ctaSecondary: 'See how we think →',
    },
    belief: {
      eyebrow: 'What we believe',
      hA: "We don't arrive with answers. We arrive with the ",
      hAccent: 'right questions.',
      p: 'Most agencies sell you activity: decks, retainers, a busy calendar. We sell you clarity about where your budget should actually go, and the plan to get it there. Less theatre, more thinking.',
    },
    work: {
      eyebrow: 'What we do',
      h2: 'Six ways we turn marketing into a growth engine.',
      more: 'Learn more →',
      foot: 'See all services in detail →',
      cards: [
        { slug: 'marketing-audit', title: 'Marketing Audit', body: 'An honest read on where you are: positioning, team, budget, and how well it all ladders up to the business.' },
        { slug: 'ai-strategy', title: 'AI & Hybrid Marketing Strategy', body: 'The future marketing team is neither fully human nor fully automated. We design the hybrid model, and the agentic AI systems that run your execution.' },
        { slug: 'brand-strategy', title: 'Brand Strategy & Positioning', body: "What you stand for, who you're for, and why someone should choose you. Get it right and every sales conversation starts further along." },
        { slug: 'go-to-market', title: 'Go-To-Market Strategy', body: 'The plan that survives contact with the pipeline. Channels, motion and metrics your team can run without us in the room.' },
        { slug: 'marketing-plan', title: 'Marketing Plan & Business Alignment', body: 'A marketing plan tied to real business objectives. One your team will actually follow, instead of a document that dies in a drawer.' },
        { slug: 'fractional-cmo', title: 'Fractional CMO', body: 'Senior marketing leadership without the full-time cost. We lead your team and hold the direction, quarter after quarter.' },
      ],
    },
    proof: {
      eyebrow: 'The numbers',
      h2: 'This is what misaligned marketing costs.',
      lead: 'Not our numbers. Industry data from Forrester, G2, Marketo and ZoomInfo.',
      items: [
        { num: '<u>65</u>%', text: 'of B2B professionals say marketing and sales are not aligned.', src: 'Forrester, 2024' },
        { num: '$1T', text: 'lost annually to sales and marketing misalignment across B2B.', src: 'G2 / Industry, 2024' },
        { num: '<u>+27</u>%', text: 'faster profit growth in companies with tightly aligned teams.', src: 'Marketo / ZoomInfo, 2024' },
        { num: '8%', text: 'of B2B companies have genuinely strong alignment.', src: 'ZoomInfo / Marketo, 2024' },
      ],
    },
    howwork: {
      eyebrow: 'The way we work',
      h2: "Honest even when it's uncomfortable.",
      lead: "If your problem isn't marketing, we'll tell you, and if a cheaper path exists we'll point at it. We've lost work that way and would do it again.",
      items: [
        { k: '01', h: 'We start with the business, not the channel', p: "Pipeline math before campaign ideas. If a line of spend can't be traced to revenue, it doesn't get funded." },
        { k: '02', h: 'We hand you capability, not dependency', p: "The goal is a team that outgrows us, and the engagement that ends because it worked is the one we're proudest of." },
        { k: '03', h: 'We say no to the wrong-fit work', p: "Focus is the product. When we're not the right people for a brief, we'll usually know a name to give you." },
      ],
    },
    insights: {
      eyebrow: 'Insights',
      h2: 'Thinking, in the open.',
      all: 'All insights →',
      empty: 'Articles coming soon.',
    },
  },
  es: {
    seo: {
      description:
        'Ayudamos a empresas B2B de tecnología, industria y servicios financieros a sacar más partido al marketing, sin gastar más. No somos una agencia. Somos alguien de dentro.',
    },
    hero: {
      kick: 'La anti-agencia.',
      h1a: 'Tu presupuesto de marketing no es el problema.',
      h1accent: 'Cómo lo usas, sí.',
      body: 'Ayudamos a empresas B2B de tecnología, industria y servicios financieros a sacar más partido al marketing, sin gastar más. No somos una agencia. Somos alguien de dentro.',
      ctaPrimary: 'Reserva una llamada →',
      ctaSecondary: 'Mira cómo pensamos →',
    },
    belief: {
      eyebrow: 'En qué creemos',
      hA: 'No llegamos con respuestas. Llegamos con las ',
      hAccent: 'preguntas correctas.',
      p: 'La mayoría de agencias te venden actividad: presentaciones, iguala mensual, una agenda a rebosar. Nosotros te vendemos claridad sobre dónde debería ir de verdad tu presupuesto, y el plan para llevarlo ahí. Menos teatro, más pensar.',
    },
    work: {
      eyebrow: 'Qué hacemos',
      h2: 'Seis formas de convertir el marketing en un motor de crecimiento.',
      more: 'Saber más →',
      foot: 'Ver todos los servicios en detalle →',
      cards: [
        { slug: 'marketing-audit', title: 'Auditoría de marketing', body: 'Una lectura honesta de dónde estás: posicionamiento, equipo, presupuesto y hasta qué punto todo eso conecta con el negocio.' },
        { slug: 'ai-strategy', title: 'Estrategia de marketing con IA e híbrida', body: 'El equipo de marketing del futuro no es ni totalmente humano ni totalmente automatizado. Diseñamos el modelo híbrido, y los sistemas de IA agéntica que hacen funcionar tu ejecución.' },
        { slug: 'brand-strategy', title: 'Estrategia de marca y posicionamiento', body: 'Qué defiendes, para quién eres y por qué alguien debería elegirte. Si aciertas, cada conversación de ventas arranca más adelantada.' },
        { slug: 'go-to-market', title: 'Estrategia Go-To-Market', body: 'El plan que sobrevive al contacto con el pipeline. Canales, motion y métricas que tu equipo puede ejecutar sin nosotros en la sala.' },
        { slug: 'marketing-plan', title: 'Plan de marketing y alineación con negocio', body: 'Un plan de marketing atado a objetivos de negocio reales. Uno que tu equipo va a seguir de verdad, no un documento que muere en un cajón.' },
        { slug: 'fractional-cmo', title: 'CMO fraccional', body: 'Liderazgo de marketing senior sin el coste de un full-time. Dirigimos tu equipo y sostenemos el rumbo, trimestre tras trimestre.' },
      ],
    },
    proof: {
      eyebrow: 'Los números',
      h2: 'Esto es lo que cuesta un marketing desalineado.',
      lead: 'No son nuestros números. Datos de industria de Forrester, G2, Marketo y ZoomInfo.',
      items: [
        { num: '<u>65</u>%', text: 'de los profesionales B2B dice que marketing y ventas no están alineados.', src: 'Forrester, 2024' },
        { num: '1 billón', text: 'de dólares perdidos al año por la desalineación entre ventas y marketing en B2B.', src: 'G2 / Industria, 2024' },
        { num: '<u>+27</u>%', text: 'más rápido crece el beneficio en empresas con equipos bien alineados.', src: 'Marketo / ZoomInfo, 2024' },
        { num: '8%', text: 'de las empresas B2B tiene una alineación realmente sólida.', src: 'ZoomInfo / Marketo, 2024' },
      ],
    },
    howwork: {
      eyebrow: 'Cómo trabajamos',
      h2: 'Honestos aunque incomode.',
      lead: 'Si tu problema no es el marketing, te lo diremos, y si existe un camino más barato te lo señalaremos. Hemos perdido trabajo así y lo volveríamos a hacer.',
      items: [
        { k: '01', h: 'Empezamos por el negocio, no por el canal', p: 'Primero las cuentas del pipeline, después las ideas de campaña. Si una partida de gasto no se puede trazar hasta ingresos, no se financia.' },
        { k: '02', h: 'Te entregamos capacidad, no dependencia', p: 'El objetivo es un equipo que nos supere, y el proyecto que se acaba porque ha funcionado es del que más orgullosos estamos.' },
        { k: '03', h: 'Decimos que no al trabajo que no encaja', p: 'El foco es el producto. Cuando no somos las personas adecuadas para un encargo, normalmente sabemos qué nombre darte.' },
      ],
    },
    insights: {
      eyebrow: 'Insights',
      h2: 'Pensar, en abierto.',
      all: 'Todos los insights →',
      empty: 'Artículos muy pronto.',
    },
  },
};
