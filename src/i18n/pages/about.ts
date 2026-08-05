import type { Lang } from '../config';

type ValueCard = { num: string; title: string; body: string };

export const about: Record<Lang, {
  seo: { title: string; description: string };
  hero: { kick: string; h1a: string; h1accent: string };
  manifesto: { eyebrow: string; h2: string; paragraphs: string[] };
  values: { eyebrow: string; cards: ValueCard[] };
  who: { eyebrow: string; h2: string; paragraphs: string[]; fitTitle: string; fit: string[]; notFitTitle: string; notFit: string[] };
  cta: { h2: string; sub: string; button: string };
}> = {
  en: {
    seo: {
      title: 'About',
      description: "We're not an agency. We're not a consultancy. We're the person you wish you'd hired sooner.",
    },
    hero: {
      kick: 'About us',
      h1a: "We're not an agency. We're not a consultancy. We're the person you ",
      h1accent: "wish you'd hired sooner.",
    },
    manifesto: {
      eyebrow: 'Who we are',
      h2: "A small group of B2B marketing experts who have already made most of these mistakes.",
      paragraphs: [
        "The B2B Tinkerers exists because of a pattern we kept running into from the inside: companies spending heavily on marketing that never connects to a business outcome, while the thinking that would make it connect gets an afternoon.",
        "We're a small group of senior strategists with deep roots in B2B tech, industrial, and financial services markets. We've led marketing teams, built GTM motions from scratch, repositioned brands, and sat in the rooms where budgets get cut and strategies get questioned.",
        "We don't subcontract, and we don't scale by adding junior staff. The person who sells you the work is the person who does it.",
      ],
    },
    values: {
      eyebrow: 'How we think',
      cards: [
        { num: '01', title: 'Strategy before tactics', body: 'Most marketing problems are strategy problems wearing a tactics costume. Get the strategy right and half the tactical questions answer themselves.' },
        { num: '02', title: 'Honest over comfortable', body: "We'll tell you what we actually think, not what you want to hear. It can make a first meeting uncomfortable, which we've decided is a fair price." },
        { num: '03', title: 'Business outcomes, not marketing metrics', body: 'Impressions and MQLs are not the goal. We keep score the way your CFO keeps score, which usually means some of the dashboards you have now get switched off.' },
        { num: '04', title: 'Small on purpose', body: "We have no ambition to become a 50-person agency. The model only works if we're doing exceptional work for a handful of companies that take marketing seriously." },
      ],
    },
    who: {
      eyebrow: 'Who we work with',
      h2: 'B2B companies that are serious about growth, and honest about where they actually are.',
      paragraphs: [
        'We work best with B2B tech, industrial, and financial services companies, usually at an inflection point: entering a new market, scaling past founder-led sales, repositioning after a pivot, or building the marketing function for the first time.',
        'What they have in common is a leadership team that already knows marketing matters, and the patience to do the work properly rather than quickly.',
      ],
      fitTitle: "You're a good fit if:",
      fit: [
        "Your marketing spend isn't generating predictable pipeline",
        "Sales and marketing aren't pulling in the same direction",
        "You're entering a new market or repositioning",
        'You need senior marketing leadership without the full-time cost',
        'You want honest feedback, not flattery',
      ],
      notFitTitle: "We're probably not the right fit if:",
      notFit: [
        'You need someone to execute without strategic input',
        "You're looking for the cheapest option. We're not the most expensive, but we're not competing on price either",
        'You want a large team with account managers and weekly status calls',
      ],
    },
    cta: {
      h2: "If this sounds like the kind of thinking your business needs, let's have a conversation.",
      sub: 'No pitch deck. No proposal on the first call. Just an honest conversation about where you are and whether we can help.',
      button: 'Get in touch →',
    },
  },
  es: {
    seo: {
      title: 'Quiénes somos',
      description: 'No somos una agencia. No somos una consultora. Somos la persona a la que ojalá hubieras contratado antes.',
    },
    hero: {
      kick: 'Quiénes somos',
      h1a: 'No somos una agencia. No somos una consultora. Somos la persona a la que ',
      h1accent: 'ojalá hubieras contratado antes.',
    },
    manifesto: {
      eyebrow: 'Quiénes somos',
      h2: 'Un grupo pequeño de expertos en marketing B2B que ya se ha equivocado antes en casi todo esto.',
      paragraphs: [
        'The B2B Tinkerers existe por un patrón que nos encontrábamos una y otra vez desde dentro: empresas gastando mucho en marketing que no conecta con ningún resultado de negocio, mientras el pensamiento que lo haría conectar se despacha en una tarde.',
        'Somos un grupo pequeño de estrategas senior con raíces profundas en los mercados B2B de tecnología, industria y servicios financieros. Hemos dirigido equipos de marketing, montado motions de GTM desde cero, reposicionado marcas y estado en las salas donde se recortan presupuestos y se cuestionan estrategias.',
        'No subcontratamos ni escalamos metiendo perfiles junior. Quien te vende el trabajo es quien lo hace.',
      ],
    },
    values: {
      eyebrow: 'Cómo pensamos',
      cards: [
        { num: '01', title: 'Estrategia antes que táctica', body: 'La mayoría de problemas de marketing son problemas de estrategia disfrazados de táctica. Si aciertas con la estrategia, la mitad de las preguntas tácticas se responden solas.' },
        { num: '02', title: 'Honestos antes que cómodos', body: 'Te diremos lo que pensamos de verdad, no lo que quieres oír. A veces incomoda en la primera reunión, y hemos decidido que es un precio justo.' },
        { num: '03', title: 'Resultados de negocio, no métricas de marketing', body: 'Las impresiones y los MQL no son el objetivo. Llevamos la cuenta como la lleva tu director financiero, lo que normalmente implica apagar alguno de los dashboards que tienes ahora.' },
        { num: '04', title: 'Pequeños a propósito', body: 'No tenemos ninguna ambición de ser una agencia de 50 personas. El modelo solo funciona si hacemos un trabajo excepcional para un puñado de empresas que se toman el marketing en serio.' },
      ],
    },
    who: {
      eyebrow: 'Con quién trabajamos',
      h2: 'Empresas B2B que van en serio con el crecimiento, y son honestas sobre dónde están de verdad.',
      paragraphs: [
        'Trabajamos mejor con empresas B2B de tecnología, industria y servicios financieros, normalmente en un punto de inflexión: entrando en un mercado nuevo, escalando más allá de la venta liderada por el fundador, reposicionándose tras un pivote o montando la función de marketing por primera vez.',
        'Lo que tienen en común es un equipo directivo que ya sabe que el marketing importa, y la paciencia para hacer el trabajo bien en vez de rápido.',
      ],
      fitTitle: 'Encajas bien si:',
      fit: [
        'Tu inversión en marketing no genera pipeline predecible',
        'Ventas y marketing no reman en la misma dirección',
        'Estás entrando en un mercado nuevo o reposicionándote',
        'Necesitas liderazgo de marketing senior sin el coste de un full-time',
        'Quieres feedback honesto, no halagos',
      ],
      notFitTitle: 'Probablemente no encajemos si:',
      notFit: [
        'Necesitas a alguien que ejecute sin aportar estrategia',
        'Buscas la opción más barata. No somos los más caros, pero tampoco competimos por precio',
        'Quieres un equipo grande con account managers y calls de seguimiento semanales',
      ],
    },
    cta: {
      h2: 'Si esto suena al tipo de pensamiento que tu negocio necesita, hablemos.',
      sub: 'Sin dosier de venta. Sin propuesta en la primera llamada. Solo una conversación honesta sobre dónde estás y si podemos ayudar.',
      button: 'Hablemos →',
    },
  },
};
