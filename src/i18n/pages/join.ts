import type { Lang } from '../config';

type Card = { num: string; title: string; body: string };

export const join: Record<Lang, {
  seo: { title: string; description: string };
  hero: { kick: string; h1a: string; h1accent: string; sub: string };
  manifesto: { eyebrow: string; h2: string; paragraphs: string[] };
  values: { eyebrow: string; cards: Card[] };
  cta: { h2: string; sub: string; button: string };
}> = {
  en: {
    seo: {
      title: 'Join the Team',
      description: "We're a deliberately small group of senior B2B marketing strategists who challenge the status quo. If that resonates, let's talk.",
    },
    hero: {
      kick: 'Join the team',
      h1a: "We're small on purpose. Every person here is someone we'd want ",
      h1accent: 'in the room when it matters.',
      sub: 'A curated network of senior B2B strategists across Europe and North America. Remote, flexible, and united mostly by a low tolerance for work that changes nothing.',
    },
    manifesto: {
      eyebrow: 'Who we are',
      h2: 'Senior people who never learned to leave the strategy alone.',
      paragraphs: [
        "The B2B Tinkerers is not an agency that scales by adding junior staff. We're a small collective of senior marketing strategists who spent years inside B2B companies before ending up here. Between us we've built teams, launched products, repositioned brands, and been on the receiving end of a few budget cuts that taught us more than the wins did.",
        "We work remotely, across time zones, on projects that matter. There's no hierarchy, no account managers and no layer sitting between the thinking and the doing, which is mostly a relief and occasionally means you're the one on the call at seven in the morning.",
        "What holds us together isn't a contract or a business card. It's a shared conviction that most B2B marketing underperforms for reasons that have nothing to do with budget or tools, and everything to do with a strategy nobody ever really agreed on.",
        "If you've spent your career quietly frustrated by marketing that never connects to a business outcome, you already know what we mean.",
      ],
    },
    values: {
      eyebrow: 'What we look for',
      cards: [
        { num: '01', title: "You've done this before", body: "Senior experience, not enthusiasm alone. You've led marketing functions and built strategies from scratch, so you know what good looks like from having delivered it rather than read about it." },
        { num: '02', title: 'You challenge, not comply', body: "People who nod along are no use to us. We want the ones who push back, ask the awkward question, and will say 'that won't work' to a client who is paying us." },
        { num: '03', title: 'You ship, not just strategise', body: "Ideas without execution are just opinions. You'd rather ship something imperfect this month than present something flawless next quarter." },
        { num: '04', title: 'You think in business outcomes', body: "You can hold your own in a conversation about pipeline coverage and CAC payback, and you've had to defend a number to someone who didn't want to hear it." },
      ],
    },
    cta: {
      h2: 'No open positions. No application form.',
      sub: "If what you've read here resonates, reach out. Some of the best people we work with got in touch when we had nothing to offer them.",
      button: "Let's talk →",
    },
  },
  es: {
    seo: {
      title: 'Únete al equipo',
      description: 'Somos un grupo deliberadamente pequeño de estrategas senior de marketing B2B que reta el statu quo. Si te resuena, hablemos.',
    },
    hero: {
      kick: 'Únete al equipo',
      h1a: 'Somos pequeños a propósito. Cada persona aquí es alguien a quien querríamos ',
      h1accent: 'en la sala cuando importa.',
      sub: 'Una red seleccionada de estrategas senior B2B por Europa y Norteamérica. En remoto, flexible, y unida sobre todo por la poca paciencia con el trabajo que no cambia nada.',
    },
    manifesto: {
      eyebrow: 'Quiénes somos',
      h2: 'Gente senior que nunca aprendió a dejar la estrategia en paz.',
      paragraphs: [
        'The B2B Tinkerers no es una agencia que escala metiendo perfiles junior. Somos un colectivo pequeño de estrategas senior de marketing que pasó años dentro de empresas B2B antes de acabar aquí. Entre todos hemos montado equipos, lanzado productos, reposicionado marcas y comido unos cuantos recortes de presupuesto que enseñaron más que los aciertos.',
        'Trabajamos en remoto, entre husos horarios, en proyectos que importan. No hay jerarquía, ni account managers, ni una capa entre el pensar y el hacer, lo cual es sobre todo un alivio y de vez en cuando significa que te toca la llamada de las siete de la mañana.',
        'Lo que nos une no es un contrato ni una tarjeta de visita. Es la convicción compartida de que la mayoría del marketing B2B rinde por debajo de su potencial por razones que no tienen nada que ver con el presupuesto ni con las herramientas, y todo que ver con una estrategia que nadie llegó a acordar de verdad.',
        'Si te has pasado la carrera con la frustración callada de ver un marketing que no conecta con ningún resultado de negocio, ya sabes de qué hablamos.',
      ],
    },
    values: {
      eyebrow: 'Qué buscamos',
      cards: [
        { num: '01', title: 'Ya has hecho esto antes', body: 'Experiencia senior, no solo entusiasmo. Has dirigido funciones de marketing y construido estrategias desde cero, así que sabes cómo es lo bueno por haberlo entregado, no por haberlo leído.' },
        { num: '02', title: 'Retas, no acatas', body: 'La gente que asiente no nos sirve. Queremos a quien planta cara, hace la pregunta incómoda y es capaz de decirle "eso no va a funcionar" a un cliente que nos está pagando.' },
        { num: '03', title: 'Ejecutas, no solo estrategizas', body: 'Las ideas sin ejecución son solo opiniones. Prefieres sacar algo imperfecto este mes a presentar algo impecable el trimestre que viene.' },
        { num: '04', title: 'Piensas en resultados de negocio', body: 'Te defiendes en una conversación sobre cobertura de pipeline y payback del CAC, y has tenido que defender un número delante de alguien que no quería oírlo.' },
      ],
    },
    cta: {
      h2: 'Sin vacantes abiertas. Sin formulario de solicitud.',
      sub: 'Si lo que has leído aquí te resuena, escríbenos. Algunas de las mejores personas con las que trabajamos escribieron cuando no teníamos nada que ofrecerles.',
      button: 'Hablemos →',
    },
  },
};
