import type { Lang } from '../config';
import type { ServiceSlug } from '../services-nav';

/* ─────────── Services index (/services listing) ─────────── */

type IndexCard = { slug: ServiceSlug; title: string; body: string };

export const servicesIndex: Record<Lang, {
  seo: { title: string; description: string };
  hero: { kick: string; h1a: string; h1accent: string; sub: string };
  more: string;
  cards: IndexCard[];
  cta: { h2: string; sub: string; button: string };
}> = {
  en: {
    seo: {
      title: 'B2B Marketing Services | The B2B Tinkerers',
      description: 'Six ways we help B2B tech, industrial, and financial services companies get more from marketing. Strategy, positioning, GTM, AI, and fractional leadership for B2B companies.',
    },
    hero: {
      kick: 'What we do',
      h1a: 'Six ways we turn marketing into a ',
      h1accent: 'growth engine.',
      sub: 'We help B2B tech, industrial, and financial services companies get more from marketing without spending more. Each engagement starts with understanding your business. The strategy follows.',
    },
    more: 'Learn more →',
    cards: [
      { slug: 'marketing-audit', title: 'Marketing Audit', body: 'Honest assessment of where you are: positioning, team, budget, and alignment with business goals.' },
      { slug: 'ai-strategy', title: 'AI & Hybrid Marketing Strategy', body: 'The future marketing team is not fully human nor fully automated. We help you define the hybrid model.' },
      { slug: 'brand-strategy', title: 'Brand Strategy & Positioning', body: "Define what you stand for, who you're for, and why someone should choose you. The foundation." },
      { slug: 'go-to-market', title: 'Go-To-Market Strategy', body: 'A clear GTM motion that connects your positioning to pipeline. Channels, messages, timing.' },
      { slug: 'marketing-plan', title: 'Marketing Plan & Business Alignment', body: 'A marketing plan that reflects real business objectives and that your team will actually follow.' },
      { slug: 'fractional-cmo', title: 'Fractional CMO', body: 'Senior marketing leadership without the full-time cost. We lead your team and maintain direction.' },
    ],
    cta: {
      h2: "Not sure which service fits? Let's figure it out together.",
      sub: 'Every engagement starts with a conversation. No pitch. No commitment. Just an honest look at where you are and where you could be.',
      button: "Let's talk →",
    },
  },
  es: {
    seo: {
      title: 'Servicios de marketing B2B | The B2B Tinkerers',
      description: 'Seis formas de ayudar a empresas B2B de tecnología, industria y servicios financieros a sacar más partido al marketing. Estrategia, posicionamiento, GTM, IA y liderazgo fraccional.',
    },
    hero: {
      kick: 'Qué hacemos',
      h1a: 'Seis formas de convertir el marketing en un ',
      h1accent: 'motor de crecimiento.',
      sub: 'Ayudamos a empresas B2B de tecnología, industria y servicios financieros a sacar más partido al marketing sin gastar más. Cada proyecto empieza entendiendo tu negocio. La estrategia viene después.',
    },
    more: 'Saber más →',
    cards: [
      { slug: 'marketing-audit', title: 'Auditoría de marketing', body: 'Una evaluación honesta de dónde estás: posicionamiento, equipo, presupuesto y alineación con los objetivos de negocio.' },
      { slug: 'ai-strategy', title: 'Estrategia de marketing con IA e híbrida', body: 'El equipo de marketing del futuro no es ni totalmente humano ni totalmente automatizado. Te ayudamos a definir el modelo híbrido.' },
      { slug: 'brand-strategy', title: 'Estrategia de marca y posicionamiento', body: 'Define qué defiendes, para quién eres y por qué alguien debería elegirte. El cimiento.' },
      { slug: 'go-to-market', title: 'Estrategia Go-To-Market', body: 'Un motion de GTM claro que conecta tu posicionamiento con el pipeline. Canales, mensajes, timing.' },
      { slug: 'marketing-plan', title: 'Plan de marketing y alineación con negocio', body: 'Un plan de marketing que refleja objetivos de negocio reales y que tu equipo va a seguir de verdad.' },
      { slug: 'fractional-cmo', title: 'CMO fraccional', body: 'Liderazgo de marketing senior sin el coste de un full-time. Dirigimos tu equipo y mantenemos el rumbo.' },
    ],
    cta: {
      h2: '¿No sabes qué servicio encaja? Lo averiguamos juntos.',
      sub: 'Cada proyecto empieza con una conversación. Sin pitch. Sin compromiso. Solo una mirada honesta a dónde estás y dónde podrías estar.',
      button: 'Hablemos →',
    },
  },
};

/* ─────────── Shared section labels for detail pages ─────────── */

export const servicesCommon: Record<Lang, {
  challenge: string;
  whatWeDeliver: string;
  howWeWork: string;
  theNumbers: string;
  caseInPoint: string;
  relatedInsights: string;
  allArticles: string;
  readMore: string;
}> = {
  en: {
    challenge: 'The challenge',
    whatWeDeliver: 'What we deliver',
    howWeWork: 'How we work',
    theNumbers: 'The numbers',
    caseInPoint: 'Case in point',
    relatedInsights: 'Related insights',
    allArticles: 'All articles →',
    readMore: 'Read more →',
  },
  es: {
    challenge: 'El reto',
    whatWeDeliver: 'Qué entregamos',
    howWeWork: 'Cómo trabajamos',
    theNumbers: 'Los números',
    caseInPoint: 'Un caso real',
    relatedInsights: 'Insights relacionados',
    allArticles: 'Todos los artículos →',
    readMore: 'Leer más →',
  },
};

/* ─────────── Per-service detail content ─────────── */

type DeliverCard = { label: string; desc: string };
type ProcessStep = { num: string; title: string; body: string; tag: string };
type Stat = { num: string; label: string; source: string };

export type ServiceDetail = {
  seo: { title: string; description: string };
  heroNum: string;
  heroImgAlt: string;
  titleLines: string[];
  subtitle: string;
  problem: { titleLines: string[]; paragraphs: string[] };
  deliver: { h2: string; intro: string; cards: DeliverCard[] };
  process: { h2: string; steps: ProcessStep[] };
  stats: { h2: string; items: Stat[] };
  caseStudy: { h2: string; paragraphs: string[]; imgAlt: string };
  relatedH2: string;
  cta: { h2: string; sub: string };
};

export const serviceDetail: Record<Lang, Record<ServiceSlug, ServiceDetail>> = {
  en: {
    'marketing-audit': {
      seo: { title: 'B2B Marketing Audit | The B2B Tinkerers', description: 'An honest assessment of where your marketing stands. We audit positioning, team, budget, and alignment with business goals for B2B companies.' },
      heroNum: 'Service 01',
      heroImgAlt: 'Scattered analytics reports and dashboards on a desk with a magnifying glass',
      titleLines: ['Marketing Audit'],
      subtitle: "You suspect your marketing isn't working as hard as it should. But you're not sure where the gaps are, what's actually driving results, and what's just noise. We find out.",
      problem: {
        titleLines: ["You're spending.", 'But are you investing?'],
        paragraphs: [
          "Marketing budgets keep growing, headcount goes up, and new tools keep arriving in the stack, but pipeline doesn't follow. Then the board asks why and nobody in the room has a clear answer. It isn't that the team lacks effort. The effort is usually the one thing not in doubt. What's missing is any agreement on which part of it is actually load-bearing.",
          "Teams stay busy executing campaigns, producing content and running events, and the activity metrics look healthy enough. Then leadership asks what's actually producing revenue and the room goes quiet. There's a gap between what marketing does and what the business needs, and it widens a little more every quarter nobody measures it.",
          "Without a clear picture of what's working, every decision is a guess, and guesses compound. You keep funding the channel that had a good month two years ago. You cut the one nobody happened to defend in the meeting. Eventually leadership stops trusting marketing altogether, and that's the expensive part, because winning that trust back takes far longer than losing it did.",
        ],
      },
      deliver: {
        h2: "A clear picture of what's working, what's wasted, and what to fix first.",
        intro: "Our audit is practical, not theoretical. You won't get a 90-page report full of best practices. You'll get an honest assessment of your current marketing, grounded in your data, your market, and your business goals.",
        cards: [
          { label: 'Positioning & messaging review', desc: 'How your brand shows up versus how it should. We assess whether your positioning is clear, differentiated, and consistent across every touchpoint your buyers encounter.' },
          { label: 'Channel & budget audit', desc: 'Where money goes, what it produces, and what to cut or double down on. We map spend to outcomes so you can see which channels earn their keep and which are just burning budget.' },
          { label: 'Sales-marketing alignment assessment', desc: 'How well the two functions connect. Where handoffs break. We look at lead definitions, SLAs, feedback loops, and shared metrics to find the friction points that cost you pipeline.' },
          { label: 'Prioritised recommendations with business impact', desc: 'Not 50 ideas. The five that will actually change something. Each one comes with expected impact, effort required, and a clear rationale tied to your business objectives.' },
        ],
      },
      process: {
        h2: 'From kickoff to recommendations in 3-4 weeks.',
        steps: [
          { num: '01', title: 'Discovery', body: 'Stakeholder interviews, data collection, access to tools and dashboards. We learn how your marketing works before we judge it.', tag: 'Week 1' },
          { num: '02', title: 'Analysis', body: 'Deep-dive into channels, content, pipeline data, competitor positioning. We follow the numbers and talk to the people who know the reality on the ground.', tag: 'Week 2' },
          { num: '03', title: 'Diagnosis', body: 'Pattern identification, gap analysis, opportunity mapping. This is where we connect what we found to what it means for your business.', tag: 'Week 3' },
          { num: '04', title: 'Recommendations', body: 'Presentation to leadership with a prioritised action plan, specific enough that someone can own each item by the end of the meeting.', tag: 'Week 4' },
        ],
      },
      stats: {
        h2: 'The cost of flying blind.',
        items: [
          { num: '65%', label: 'of B2B marketing budgets are considered ineffective by the companies spending them', source: 'Forrester 2024' },
          { num: '$1T', label: 'lost annually due to sales and marketing misalignment across B2B', source: 'G2 / Industry 2024' },
          { num: '27%', label: 'faster profit growth in companies with tightly aligned marketing and sales', source: 'ZoomInfo / Marketo 2024' },
        ],
      },
      caseStudy: {
        h2: 'A manufacturing company cut marketing waste by 40% and redirected budget to channels that actually produced pipeline.',
        paragraphs: [
          'The company was spreading its marketing budget across eight channels with no clear attribution model. Every channel had a champion internally, and nobody could prove which ones were working. The result was a lot of activity, modest pipeline, and growing frustration from leadership about marketing ROI.',
          'Our audit revealed that three of those eight channels drove roughly 80% of qualified leads. Two channels produced almost nothing measurable. The remaining three had potential but were underfunded and poorly executed. The problem wasn\'t the total budget. It was how it was distributed.',
          'The company redirected spend, simplified the tech stack, and focused execution on the channels with proven results. Within a quarter, pipeline quality improved noticeably while total marketing spend actually decreased. The marketing team went from defending their budget to demonstrating clear contribution to revenue.',
        ],
        imgAlt: 'Printed data visualisations and charts with pencil annotations',
      },
      relatedH2: "What we're writing about marketing and strategy.",
      cta: { h2: "Not sure what's working and what's not? That's exactly where we start.", sub: '30 minutes. No pitch. Just an honest look at where your marketing stands.' },
    },
    'ai-strategy': {
      seo: { title: 'AI & Hybrid Marketing Strategy for B2B | The B2B Tinkerers', description: "AI won't replace your marketing team. But teams that use AI well will outcompete those that don't. We help B2B companies build the hybrid model that actually works." },
      heroNum: 'Service 05',
      heroImgAlt: 'Circuit board pattern merging with organic leaf veins',
      titleLines: ['AI & Hybrid', 'Marketing Strategy'],
      subtitle: "AI won't replace your marketing team. But teams that use AI well will outcompete those that don't. We help B2B companies understand where AI genuinely adds value in their marketing operation and build the workflows to make it stick.",
      problem: {
        titleLines: ['What is AI actually supposed', 'to do for your marketing team?'],
        paragraphs: [
          'There is enormous pressure to "do something with AI" right now. Leadership reads the headlines, sees competitors announcing AI initiatives, and wants to know the plan by Friday. The honest position most B2B marketing teams are in is that they have no idea what AI should actually do for them, and no comfortable way to say that out loud. The urgency is genuine; the direction isn\'t there yet.',
          'So teams experiment. Someone starts drafting blog posts in ChatGPT, someone else tries a tool for ad copy, a third person has a go at automated reporting. None of it connects to a strategy or survives past the person who set it up, so when leadership asks about ROI there is nothing to point at. The tools really are powerful. Isolated experiments just never compound into anything.',
          'Worse, some teams rush to automate processes that were broken to begin with. AI doesn\'t fix a bad content strategy, it just produces bad content faster. The useful question was never "where can we use AI?" but "where does human judgment actually earn its keep, and where is it only habit?" Teams that answer that honestly end up with an advantage that is hard to copy, because it lives in how they work rather than in which tool they bought.',
        ],
      },
      deliver: {
        h2: 'A practical AI strategy, not a science experiment.',
        intro: "We build AI strategies that create value, not hype. Every recommendation is grounded in what your team can actually absorb, the workflows you really run, and what would genuinely change how the operation works day to day.",
        cards: [
          { label: 'AI readiness assessment', desc: "Where your team, data, and processes are today. What's ready for AI and what isn't. A clear-eyed evaluation before anyone starts buying tools or building workflows." },
          { label: 'Content and campaign automation strategy', desc: 'Which workflows benefit from automation. Which need human judgment. Where the handoffs live. A practical map of what to automate, what to augment, and what to leave alone.' },
          { label: 'Tool selection and stack integration', desc: 'The right tools for your actual needs. Not the trendiest, not the cheapest. The ones that fit your workflows, integrate with your existing stack, and your team will actually use.' },
          { label: 'Team capability building', desc: 'Training your team to work with AI, not be replaced by it. Practical skills, not theory. The goal is confidence and competence, not dependence on external consultants.' },
        ],
      },
      process: {
        h2: 'From assessment to operational AI in 6-8 weeks.',
        steps: [
          { num: '01', title: 'Assessment', body: 'Current workflows, team capabilities, data landscape, tool audit. We understand where you are before recommending where to go.', tag: 'Week 1-2' },
          { num: '02', title: 'Strategy', body: 'Use case prioritisation, build vs buy decisions, integration architecture. The hard choices about where AI fits and where it doesn\'t.', tag: 'Week 3-4' },
          { num: '03', title: 'Pilot', body: 'Implement 2-3 high-impact workflows. Measure results. Iterate. Real proof of value before committing to a full rollout.', tag: 'Week 5-6' },
          { num: '04', title: 'Scale', body: 'Team training, documentation, rollout plan for remaining use cases. Everything your team needs to run this without us.', tag: 'Week 7-8' },
        ],
      },
      stats: {
        h2: 'The AI gap is already here.',
        items: [
          { num: '64%', label: 'of B2B marketers say AI will significantly impact their strategy but only 19% have a formal plan', source: 'Salesforce State of Marketing 2024' },
          { num: '40%', label: 'productivity increase in marketing teams that have successfully integrated AI into core workflows', source: 'McKinsey 2024' },
          { num: '5x', label: 'faster content production with AI-augmented workflows while maintaining quality standards', source: 'HubSpot 2024' },
        ],
      },
      caseStudy: {
        h2: 'A B2B SaaS company reduced content production time by 60% and increased output quality by integrating AI into their editorial workflow.',
        paragraphs: [
          'The marketing team was producing 4 pieces of content per month and struggling to keep up. Demand from sales for case studies, thought leadership, and product content was growing, but headcount was not. The team was stuck in a cycle of producing just enough to stay visible, without the bandwidth to focus on quality or strategy.',
          'We mapped their editorial workflow end to end, identified where AI could handle research, outlines, and first drafts, and built a human-AI pipeline with clear quality gates. Each piece still went through human editorial review, but the time spent on the low-value production work dropped dramatically.',
          'Within 8 weeks, output increased from 4 to 12 pieces per month. More importantly, the team spent more time on strategy, positioning, and distribution. Content quality improved because writers were editing and refining rather than staring at blank pages. The bottleneck shifted from "can we produce enough" to "what should we produce next."',
        ],
        imgAlt: 'Human fingerprint pattern merging with digital circuit traces',
      },
      relatedH2: "What we're writing about AI and marketing.",
      cta: { h2: 'Ready to make AI work for your marketing team?', sub: '30 minutes. No pitch. Just an honest conversation about where AI can actually help your operation.' },
    },
    'brand-strategy': {
      seo: { title: 'B2B Brand Strategy & Positioning', description: 'Most B2B brands are built by accident. We build them on purpose. Positioning, messaging, and brand strategy for B2B companies.' },
      heroNum: 'Service 02',
      heroImgAlt: 'Brand strategy documents and colour swatches on a conference table',
      titleLines: ['Brand Strategy', '& Positioning'],
      subtitle: "Most B2B companies compete on product features and price. The ones that win compete on clarity. They know exactly who they are, who they serve, and why it matters. That clarity doesn't happen by accident. It's built.",
      problem: {
        titleLines: ['Everything you say about yourself,', 'your competitor could say too.'],
        paragraphs: [
          "Most B2B brands are accidental. Built from a founder's pitch that stuck, a tagline nobody hated enough to change, and a website that says roughly the same thing as every competitor's. That holds up for longer than you would expect, and then it stops holding up all at once.",
          'The cost is invisible at first. You lose a deal and blame pricing. A prospect picks a competitor whose product isn\'t as good but whose story is sharper. Your sales team describes what you do five different ways. Marketing produces content that reads as generic because nobody ever agreed on what makes you different. None of this shows up as a line item. It drains the pipeline quietly enough that you attribute it to something else.',
          'Your product might genuinely be better. It won\'t matter much while your positioning is fuzzy, because the market reliably picks the company that communicates more clearly. Buyers have no patience for working out your value on your behalf, and no particular reason to.',
        ],
      },
      deliver: {
        h2: 'A positioning and messaging system your whole company can use.',
        intro: 'Not a brand book that sits on a shelf. A practical framework that gives your sales team, your marketers, and your leadership a shared language for what you do, who you do it for, and why it matters.',
        cards: [
          { label: 'Market & competitor positioning map', desc: 'Where you sit relative to alternatives. How buyers perceive you versus competitors. And the gaps in the market you can realistically own. Not theory. A clear picture based on real market signals.' },
          { label: 'ICP definition and buyer journey', desc: "Who you're really selling to, what they care about at each stage, and what makes them choose. Not a persona exercise. A practical map of how your best customers actually buy." },
          { label: 'Core messaging architecture', desc: 'Value proposition, key messages by audience, proof points. A framework that works across your website, sales decks, campaigns, and conversations. One source of truth for how you talk about what you do.' },
          { label: 'Brand voice and tone guidelines', desc: 'How you sound, how you write, what language you use and what you avoid. Practical enough for your team to apply without a brand police. Because guidelines only work if people actually use them.' },
        ],
      },
      process: {
        h2: 'From diagnosis to delivery in 6-8 weeks.',
        steps: [
          { num: '01', title: 'Discovery', body: 'Stakeholder interviews, competitor deep-dive, current positioning audit. We talk to your team, your customers, and your market before forming any opinions.', tag: 'Week 1-2' },
          { num: '02', title: 'Strategy', body: 'Positioning framework, value proposition, ICP definition. This is where the hard choices happen. We facilitate the decisions, you own them.', tag: 'Week 3-4' },
          { num: '03', title: 'Build', body: 'Messaging architecture, brand voice guidelines, visual direction brief. The strategy becomes tools your team can actually deploy.', tag: 'Week 5-6' },
          { num: '04', title: 'Activate', body: 'Team workshop, rollout plan, internal adoption. A brand strategy that lives in a slide deck is worthless. We make sure it reaches the people who need it.', tag: 'Week 7-8' },
        ],
      },
      stats: {
        h2: 'Why positioning is not optional.',
        items: [
          { num: '77%', label: 'of B2B buyers say brand is a critical factor in their purchase decision', source: 'Gartner 2024' },
          { num: '2.5x', label: 'higher win rates for companies with clear, differentiated positioning', source: 'Forrester 2024' },
          { num: '60%', label: 'of B2B companies cannot clearly articulate what makes them different', source: 'LinkedIn B2B Institute 2024' },
        ],
      },
      caseStudy: {
        h2: 'A SaaS company repositioned from "feature-rich" to "category leader" and doubled inbound pipeline in 6 months.',
        paragraphs: [
          'The company had a strong product and a loyal customer base. But every pitch started with a feature comparison. Prospects were evaluating them as one of four similar vendors, and price was becoming the deciding factor.',
          'We ran a positioning sprint. The insight was that their customers did not buy them for features. They bought them because the platform eliminated a specific operational bottleneck that cost mid-market companies between 15 and 40 hours per month. That was the position: not "we do more" but "we remove this problem entirely."',
          'The repositioning cascaded through everything: website, sales deck, outbound sequences, event messaging. Within six months, inbound pipeline had doubled. Average deal size increased by 30% because they were no longer competing on price. The sales team reported that conversations changed. Prospects started saying "we heard you\'re the ones who solve [specific problem]" instead of "can you walk me through your features?"',
        ],
        imgAlt: 'Strategic mapping diagram on a whiteboard with connected nodes',
      },
      relatedH2: "What we're writing about brand and strategy.",
      cta: { h2: 'Ready to own your position in the market?', sub: '30 minutes. No pitch. Just an honest conversation about where your brand stands and where it could go.' },
    },
    'go-to-market': {
      seo: { title: 'B2B Go-To-Market Strategy | The B2B Tinkerers', description: 'A clear GTM motion that connects positioning to pipeline. Market entry, channel strategy, and demand generation for B2B companies.' },
      heroNum: 'Service 03',
      heroImgAlt: 'Wall map with pins and coloured threads connecting different points',
      titleLines: ['Go-To-Market', 'Strategy'],
      subtitle: "A GTM strategy is more than a launch plan. It's the answer to: who are we selling to, what do we say, where do we show up, and how do sales and marketing move together. We build it from scratch or fix what's broken.",
      problem: {
        titleLines: ['The product works.', 'Getting it in front of the right people is still guesswork.'],
        paragraphs: [
          'You have a good product, maybe even a great one. What you don\'t have is a systematic way to get it in front of the right buyers at the right time. Leads trickle in from channels nobody chose deliberately. Some deals close and nobody can explain why those and not the others, which makes growth feel like weather rather than something you built.',
          'Meanwhile sales is doing one thing and marketing is doing another. Both teams are busy, and neither is moving in the same direction as the other. Sales blames marketing for lead quality, marketing blames sales for follow-up, and the pipeline stays unpredictable while the board keeps asking the same question: when does this become a machine?',
          'Entering a new market without a playbook is where this gets expensive. Companies assume that what worked in one geography or segment will transfer to the next, and it rarely does. The gap between product-market fit and repeatable revenue is where most B2B companies stall, and the product is almost never the reason. The go-to-market motion simply never got built properly.',
        ],
      },
      deliver: {
        h2: 'The playbook that connects your product to your pipeline.',
        intro: 'Not a strategy deck that gathers dust. A working GTM motion with clear ownership, measurable targets, and a shared plan that sales and marketing can actually execute together.',
        cards: [
          { label: 'Market entry or expansion planning', desc: 'Which segments, which geographies, in what order, with what resources. A prioritised roadmap based on market size, competitive intensity, and your actual capacity to win.' },
          { label: 'Channel mix and prioritisation', desc: 'Where to show up, what to invest in, what to skip. A channel strategy based on where your buyers actually spend their attention, not where everyone else is spending their budget.' },
          { label: 'Demand generation architecture', desc: 'The engine that turns awareness into qualified pipeline. Not a list of tactics, but a connected system with clear stages, conversion targets, and content mapped to every step of the buyer journey.' },
          { label: 'Sales and marketing playbook', desc: 'How both teams move together. Messaging by segment, lead handoff criteria, shared pipeline targets, and a common language that eliminates the usual finger-pointing.' },
        ],
      },
      process: {
        h2: 'From strategy to motion in 8-10 weeks.',
        steps: [
          { num: '01', title: 'Market assessment', body: 'Market sizing, segment analysis, competitive landscape, buyer research. We map the terrain before we plan the route.', tag: 'Week 1-2' },
          { num: '02', title: 'Strategy design', body: 'Positioning per segment, channel strategy, messaging by audience, pricing validation. The hard decisions that shape everything downstream.', tag: 'Week 3-5' },
          { num: '03', title: 'Playbook build', body: 'Campaign frameworks, content plan, sales enablement materials, KPI dashboard. Strategy becomes a set of tools your teams can deploy immediately.', tag: 'Week 6-8' },
          { num: '04', title: 'Launch support', body: 'First campaign execution, team alignment, weekly standup cadence. We stay in the room until the motion is running and the team owns it.', tag: 'Week 9-10' },
        ],
      },
      stats: {
        h2: 'Why GTM strategy separates growers from starters.',
        items: [
          { num: '72%', label: 'of companies that miss revenue targets cite poor go-to-market execution as the primary cause', source: 'SBI Growth Advisory 2024' },
          { num: '3.5x', label: 'higher revenue growth for B2B companies with a documented and aligned GTM strategy', source: 'McKinsey 2024' },
          { num: '45%', label: 'of B2B product launches fail to meet revenue expectations within the first year', source: 'Gartner 2024' },
        ],
      },
      caseStudy: {
        h2: 'An industrial tech company entered a new European market and built a qualified pipeline of $2.2M (€2M) in 5 months.',
        paragraphs: [
          'The company had strong product-market fit in their home market. Customers loved the product, retention was high, and the sales team knew how to close. But when they decided to expand into a new European geography, they quickly discovered that none of their existing playbooks translated. The buyer profile was different, the competitive landscape was unfamiliar, and the channels that worked at home generated nothing.',
          'We built a market-specific GTM motion from the ground up. That started with deep buyer research in the target market, followed by localised messaging that spoke to the problems and priorities of that specific audience. We designed a channel strategy focused on the two or three places where their ideal buyers actually spent time, and we created a sales enablement kit that gave the local team everything they needed to have sharp, relevant conversations from day one.',
          'Within five months they had a qualified pipeline worth over $2.2M (€2M) and their first three closed deals in the new market. More importantly, the motion was repeatable. The same framework has since been adapted for a second market expansion with similar early results.',
        ],
        imgAlt: 'Vintage globe with small flag pins marking locations',
      },
      relatedH2: "What we're writing about GTM and growth strategy.",
      cta: { h2: 'Ready to turn your product into a growth engine?', sub: '30 minutes. No pitch. Just an honest conversation about your market and your motion.' },
    },
    'marketing-plan': {
      seo: { title: 'B2B Marketing Plan & Business Alignment | The B2B Tinkerers', description: 'A marketing plan that reflects real business objectives and that your team will actually follow. Quarterly roadmaps, KPIs, and budget allocation for B2B companies.' },
      heroNum: 'Service 04',
      heroImgAlt: 'Quarterly timeline cards arranged in rows with priority blocks',
      titleLines: ['Marketing Plan &', 'Business Alignment'],
      subtitle: 'Most marketing plans are written for board decks, not for execution. We build plans that start from the business and work backwards to a quarterly roadmap your team can own and your leadership can trust.',
      problem: {
        titleLines: ['The plan looked right in January.', 'By March nobody was opening the file.'],
        paragraphs: [
          "Most marketing plans look great in January and are irrelevant by March. They're built for the board presentation, not for the people who have to execute them. The result is a document that gets filed away while the team goes back to doing what they were already doing.",
          'The deeper problem is the disconnect between what leadership expects and what marketing delivers. Leadership wants pipeline, revenue and market share. Marketing reports impressions, clicks and content output. Neither side is being unreasonable, they are just working from different playbooks, and nobody was ever given the job of reconciling the two.',
          'So teams run on tactics without a strategic thread. Campaigns launch because "we always do this." Budget gets allocated based on last year\'s plan plus 10%. Marketing metrics don\'t connect to business outcomes. And when the CEO asks "what did marketing produce this quarter?" the answer is either silence or a spreadsheet that raises more questions than it answers.',
        ],
      },
      deliver: {
        h2: 'A plan your team will actually follow.',
        intro: 'Not a 60-page strategy document that nobody reads. A practical plan that connects marketing activity to business outcomes, gives every team member clarity on priorities, and holds up when reality changes.',
        cards: [
          { label: 'Annual and quarterly marketing roadmaps', desc: 'What happens when, who owns it, how it connects to the business calendar. A living plan with quarterly milestones, clear owners, and built-in review points so you can adjust without starting over.' },
          { label: 'OKR and KPI framework aligned to business goals', desc: 'Marketing metrics that leadership actually cares about. Revenue, pipeline, market share. Not vanity numbers, but the indicators that tell you whether marketing is moving the business forward.' },
          { label: 'Budget allocation and ROI model', desc: "Where every dollar and euro goes and what it's expected to produce. A transparent budget model that connects spend to outcomes so you can defend every line item and reallocate with confidence." },
          { label: 'Cross-functional alignment workshops', desc: 'Getting sales, product, and marketing in the same room with the same goals. Because a marketing plan that only marketing believes in is just a wish list.' },
        ],
      },
      process: {
        h2: 'From business objectives to marketing roadmap in 4-6 weeks.',
        steps: [
          { num: '01', title: 'Business immersion', body: 'Revenue targets, growth priorities, team capacity, leadership expectations. We learn how the business actually works before we touch anything related to marketing.', tag: 'Week 1' },
          { num: '02', title: 'Strategic framework', body: 'OKRs, channel strategy, budget model, measurement framework. The strategic backbone that connects every marketing activity to a business objective.', tag: 'Week 2-3' },
          { num: '03', title: 'Roadmap build', body: 'Quarterly plans with owners, timelines, dependencies, and success criteria. Not a wish list. A plan your team can start executing on day one.', tag: 'Week 4-5' },
          { num: '04', title: 'Alignment', body: "Leadership presentation, team workshop, adoption plan. We don't hand over a document. We make sure the plan has buy-in from the people who need to execute it and the people who need to fund it.", tag: 'Week 6' },
        ],
      },
      stats: {
        h2: 'Why most marketing plans fail.',
        items: [
          { num: '61%', label: 'of marketers say their strategy is not effectively connected to business objectives', source: 'CoSchedule 2024' },
          { num: '4x', label: 'more likely to report success when marketing goals are aligned with company revenue targets', source: 'HubSpot 2024' },
          { num: '37%', label: "of marketing budgets are wasted on activities that don't connect to pipeline", source: 'Gartner CMO Survey 2024' },
        ],
      },
      caseStudy: {
        h2: 'A B2B tech company went from "marketing does stuff" to "marketing drives 35% of pipeline" in two quarters.',
        paragraphs: [
          'The marketing team was active but scattered. They were producing content, running events, and managing paid campaigns. But nobody could draw a straight line from any of those activities to the sales pipeline. Leadership tolerated marketing because they knew they needed it, but they couldn\'t point to what it actually produced.',
          'We built a quarterly roadmap aligned to revenue targets, installed a shared KPI dashboard that both marketing and sales could see, and ran monthly alignment sessions between the two teams. The marketing plan stopped being a wish list and became an operating document with owners, deadlines, and metrics that connected to pipeline.',
          'Within two quarters, marketing-sourced pipeline went from unmeasured to 35% of total. Not because marketing did more. Because marketing did the right things, in the right order, with clear accountability. The CEO stopped asking "what does marketing do?" and started asking "how do we give marketing more budget?"',
        ],
        imgAlt: 'Kanban board with green and cream coloured cards',
      },
      relatedH2: "What we're writing about planning and alignment.",
      cta: { h2: 'Ready to build a marketing plan that actually connects to the business?', sub: '30 minutes. No pitch. Just a conversation about what your marketing should deliver and how to get there.' },
    },
    'fractional-cmo': {
      seo: { title: 'Fractional CMO for B2B Companies | The B2B Tinkerers', description: 'Senior marketing leadership without the full-time cost. We embed into your leadership team, set strategy, coach your people, and keep marketing connected to the business.' },
      heroNum: 'Service 06',
      heroImgAlt: 'Executive meeting room table with open notebook and coffee cup',
      titleLines: ['Fractional CMO'],
      subtitle: 'Senior marketing leadership without the full-time cost. We embed into your leadership team: setting strategy, coaching your people, and making sure marketing stays connected to what the business actually needs. Not a consultant who sends a report and disappears.',
      problem: {
        titleLines: ['You need someone senior to own this.', 'Not necessarily five days a week.'],
        paragraphs: [
          "There's a stage most growing B2B companies reach where marketing needs more than a capable executor. It needs someone who can connect activity to business goals, make trade-offs and hold a direction when the quarter gets noisy. The budget or the stage rarely justifies a full-time CMO at that point, and for plenty of companies it never will.",
          'The gap between a marketing manager executing tactics and a senior leader setting direction is wider than most companies realise. It is not seniority for its own sake. It is the difference between running the plan well and being accountable for whether it was the right plan in the first place. Without that layer, marketing becomes a collection of activities rather than a function with a point of view.',
          'When nobody owns the marketing strategy, it drifts. Campaigns launch without a clear line back to business priorities, messaging fragments across channels, and the team turns reactive, chasing whatever felt urgent on Monday instead of building something that compounds. The work still gets done. It just never adds up to anything.',
        ],
      },
      deliver: {
        h2: 'CMO-level thinking, without the CMO-level overhead.',
        intro: 'We embed into your team, not hover above it. That means being in the room when decisions get made, knowing the people by name, and understanding the business well enough to make calls that stick.',
        cards: [
          { label: 'Weekly leadership involvement', desc: 'Regular presence in leadership meetings. Not a monthly check-in. Actual involvement in decisions that affect marketing. The kind of presence that means marketing has a voice when priorities are set, budgets are discussed, and strategy shifts.' },
          { label: 'Strategy ownership and team direction', desc: 'Setting the marketing strategy, aligning it with business goals, and making sure the team executes with clarity and confidence. Not just advice. Ownership of the direction and accountability for the outcomes.' },
          { label: 'Board and investor-level narrative', desc: 'The marketing story for stakeholders who think in terms of revenue, market share, and competitive position. Clear reporting that connects marketing activity to business outcomes in language the board actually cares about.' },
          { label: 'Hiring and team structure guidance', desc: 'When to hire, who to hire, how to structure the team as it grows. Building the marketing function, not just running it. Making sure every new role adds capability rather than just capacity.' },
        ],
      },
      process: {
        h2: 'Embedded leadership from day one.',
        steps: [
          { num: '01', title: 'Immersion', body: 'Deep-dive into business, team, and current marketing state. Attend key meetings. Listen before acting. Understand the dynamics, the constraints, and where the real opportunities are.', tag: 'Week 1-2' },
          { num: '02', title: 'Direction', body: 'Set the strategic framework. Define priorities, KPIs, and the 90-day roadmap. Align with leadership on what marketing needs to deliver and how success will be measured.', tag: 'Week 3-4' },
          { num: '03', title: 'Execution', body: 'Weekly involvement. Coach the team, review work, make decisions, remove blockers. Present to the board when needed. Keep everything moving in the same direction.', tag: 'Ongoing' },
          { num: '04', title: 'Build', body: 'Develop team capabilities. Hire when needed. Build processes that will outlast our engagement. The goal is a marketing function that can eventually stand on its own.', tag: 'Ongoing' },
        ],
      },
      stats: {
        h2: 'Why fractional leadership works.',
        items: [
          { num: '78%', label: 'of companies say they need senior marketing leadership but cannot justify a full-time CMO hire', source: 'Pavilion 2024' },
          { num: '3x', label: 'faster time to strategic clarity compared to hiring a full-time CMO (no recruitment, no onboarding delay)', source: 'Chief Outsiders 2024' },
          { num: '52%', label: 'of companies using fractional executives report improved strategic alignment within 90 days', source: 'Deloitte 2024' },
        ],
      },
      caseStudy: {
        h2: 'A B2B industrial company went from "we don\'t really do marketing" to a structured, pipeline-generating function in under 6 months.',
        paragraphs: [
          'The company was growing on reputation and referrals. They had one person handling marketing, mostly focused on trade events and product brochures. Leadership knew they needed more from marketing but had no clear idea what "more" looked like or how to get there. There was no strategy, no pipeline tracking, and no connection between marketing activity and sales outcomes.',
          'We embedded as fractional CMO. The first step was building a marketing strategy directly connected to sales targets and business priorities. We defined the ICP, mapped the buyer journey, and built a messaging framework the sales team could actually use. Then we hired two additional team members with the right skills to execute against the plan. We set up a demand generation engine that combined content, outreach, and events into a system rather than a set of disconnected activities.',
          'Six months later, marketing was contributing 25% of new pipeline. The team had its own seat at the leadership table. Sales and marketing were aligned on targets and reporting. Most importantly, the function was built to sustain itself. When our engagement scaled back, the team had the strategy, the processes, and the confidence to keep building.',
        ],
        imgAlt: 'Compass lying on architectural blueprints',
      },
      relatedH2: "What we're writing about marketing leadership.",
      cta: { h2: 'Need senior marketing leadership without the full-time commitment?', sub: '30 minutes. No pitch. Just an honest conversation about where your marketing needs direction.' },
    },
  },
  es: {
    'marketing-audit': {
      seo: { title: 'Auditoría de marketing B2B | The B2B Tinkerers', description: 'Una evaluación honesta de dónde está tu marketing. Auditamos posicionamiento, equipo, presupuesto y alineación con los objetivos de negocio para empresas B2B.' },
      heroNum: 'Servicio 01',
      heroImgAlt: 'Informes de analítica y cuadros de mando dispersos sobre una mesa con una lupa',
      titleLines: ['Auditoría de marketing'],
      subtitle: 'Sospechas que tu marketing no está rindiendo todo lo que debería. Pero no tienes claro dónde están las brechas, qué está generando resultados de verdad y qué es solo ruido. Nosotros lo averiguamos.',
      problem: {
        titleLines: ['Estás gastando.', '¿Pero estás invirtiendo?'],
        paragraphs: [
          'Los presupuestos de marketing no paran de crecer, el equipo aumenta y al stack se le suman herramientas nuevas, pero el pipeline no sigue el ritmo. Entonces el consejo pregunta por qué y nadie en la sala tiene una respuesta clara. No es que falte esfuerzo. El esfuerzo suele ser lo único que nadie discute. Lo que falta es un acuerdo sobre qué parte de ese esfuerzo sostiene algo de verdad.',
          'Los equipos están ocupados ejecutando campañas, produciendo contenido y organizando eventos, y las métricas de actividad pintan razonablemente bien. Entonces la dirección pregunta qué está generando ingresos de verdad y la sala se queda en silencio. Hay una brecha entre lo que hace marketing y lo que necesita el negocio, y se ensancha un poco más cada trimestre que nadie la mide.',
          'Sin una imagen clara de qué funciona, cada decisión es una apuesta, y las apuestas se acumulan. Sigues financiando el canal que tuvo un buen mes hace dos años. Recortas el que nadie defendió en la reunión. Al final la dirección deja de fiarse de marketing, y esa es la parte cara, porque recuperar esa confianza lleva mucho más que perderla.',
        ],
      },
      deliver: {
        h2: 'Una imagen clara de qué funciona, qué se desperdicia y qué arreglar primero.',
        intro: 'Nuestra auditoría es práctica, no teórica. No recibirás un informe de 90 páginas lleno de best practices. Recibirás una evaluación honesta de tu marketing actual, anclada en tus datos, tu mercado y tus objetivos de negocio.',
        cards: [
          { label: 'Revisión de posicionamiento y mensajes', desc: 'Cómo aparece tu marca frente a cómo debería. Evaluamos si tu posicionamiento es claro, diferenciado y consistente en cada punto de contacto que encuentran tus compradores.' },
          { label: 'Auditoría de canales y presupuesto', desc: 'Adónde va el dinero, qué produce y qué recortar o reforzar. Mapeamos la inversión a resultados para que veas qué canales se ganan el sueldo y cuáles solo queman presupuesto.' },
          { label: 'Evaluación de alineación ventas-marketing', desc: 'Cómo de bien conectan las dos funciones. Dónde se rompen los traspasos. Miramos definiciones de lead, SLA, bucles de feedback y métricas compartidas para encontrar la fricción que te cuesta pipeline.' },
          { label: 'Recomendaciones priorizadas con impacto en negocio', desc: 'No 50 ideas. Las 5 que mueven la aguja. Cada recomendación llega con impacto esperado, esfuerzo necesario y una razón clara atada a tus objetivos de negocio.' },
        ],
      },
      process: {
        h2: 'Del kickoff a las recomendaciones en 3-4 semanas.',
        steps: [
          { num: '01', title: 'Descubrimiento', body: 'Entrevistas con stakeholders, recogida de datos, acceso a herramientas y cuadros de mando. Aprendemos cómo funciona tu marketing antes de juzgarlo.', tag: 'Semana 1' },
          { num: '02', title: 'Análisis', body: 'Inmersión en canales, contenido, datos de pipeline, posicionamiento de la competencia. Seguimos los números y hablamos con quien conoce la realidad sobre el terreno.', tag: 'Semana 2' },
          { num: '03', title: 'Diagnóstico', body: 'Identificación de patrones, análisis de brechas, mapeo de oportunidades. Aquí conectamos lo que encontramos con lo que significa para tu negocio.', tag: 'Semana 3' },
          { num: '04', title: 'Recomendaciones', body: 'Presentación a dirección con un plan de acción priorizado, lo bastante específico como para que cada punto tenga dueño antes de acabar la reunión.', tag: 'Semana 4' },
        ],
      },
      stats: {
        h2: 'El coste de ir a ciegas.',
        items: [
          { num: '65%', label: 'de los presupuestos de marketing B2B se consideran ineficaces por las propias empresas que los gastan', source: 'Forrester 2024' },
          { num: '1 billón', label: 'de dólares perdidos al año por la desalineación entre ventas y marketing en B2B', source: 'G2 / Industria 2024' },
          { num: '27%', label: 'más rápido crece el beneficio en empresas con ventas y marketing bien alineados', source: 'ZoomInfo / Marketo 2024' },
        ],
      },
      caseStudy: {
        h2: 'Una empresa industrial recortó un 40% del desperdicio en marketing y redirigió el presupuesto a canales que sí producían pipeline.',
        paragraphs: [
          'La empresa repartía su presupuesto de marketing entre ocho canales sin un modelo de atribución claro. Cada canal tenía su defensor interno y nadie podía demostrar cuáles funcionaban. El resultado era mucha actividad, un pipeline modesto y una frustración creciente de la dirección con el ROI de marketing.',
          'Nuestra auditoría reveló que tres de esos ocho canales generaban en torno al 80% de los leads cualificados. Dos canales no producían casi nada medible. Los tres restantes tenían potencial, pero estaban infrafinanciados y mal ejecutados. El problema no era el presupuesto total. Era cómo estaba repartido.',
          'La empresa redirigió la inversión, simplificó el stack tecnológico y concentró la ejecución en los canales con resultados probados. En un trimestre, la calidad del pipeline mejoró de forma notable mientras el gasto total de marketing incluso bajó. El equipo de marketing pasó de defender su presupuesto a demostrar una contribución clara a los ingresos.',
        ],
        imgAlt: 'Visualizaciones de datos y gráficos impresos con anotaciones a lápiz',
      },
      relatedH2: 'Lo que escribimos sobre marketing y estrategia.',
      cta: { h2: '¿No sabes qué funciona y qué no? Justo ahí es donde empezamos.', sub: '30 minutos. Sin pitch. Solo una mirada honesta a dónde está tu marketing.' },
    },
    'ai-strategy': {
      seo: { title: 'Estrategia de marketing con IA e híbrida para B2B | The B2B Tinkerers', description: 'La IA no reemplazará a tu equipo de marketing. Pero los equipos que la usan bien superarán a los que no. Ayudamos a empresas B2B a construir el modelo híbrido que de verdad funciona.' },
      heroNum: 'Servicio 05',
      heroImgAlt: 'Patrón de placa de circuito fundiéndose con las nervaduras de una hoja',
      titleLines: ['Estrategia de marketing', 'con IA e híbrida'],
      subtitle: 'La IA no reemplazará a tu equipo de marketing. Pero los equipos que la usan bien superarán a los que no. Ayudamos a empresas B2B a entender dónde la IA aporta valor real en su operación de marketing y a construir los workflows para que cuaje.',
      problem: {
        titleLines: ['¿Qué se supone que tiene que hacer', 'la IA por tu equipo de marketing?'],
        paragraphs: [
          'Ahora mismo hay una presión enorme por "hacer algo con IA". La dirección lee los titulares, ve a los competidores anunciando iniciativas de IA y quiere el plan para el viernes. La posición honesta de la mayoría de equipos de marketing B2B es que no tienen ni idea de qué debería hacer la IA por ellos, ni una forma cómoda de decirlo en voz alta. La urgencia es real; la dirección todavía no está.',
          'Así que los equipos experimentan. Alguien empieza a redactar posts en ChatGPT, otra persona prueba una herramienta para copys de anuncios, una tercera se pone con el reporting automatizado. Nada de eso conecta con una estrategia ni sobrevive a la persona que lo montó, así que cuando la dirección pregunta por el ROI no hay nada que señalar. Las herramientas son potentes de verdad. Los experimentos aislados simplemente no componen en nada.',
          'Peor aún, algunos equipos corren a automatizar procesos que ya estaban rotos de partida. La IA no arregla una mala estrategia de contenido, solo produce mal contenido más rápido. La pregunta útil nunca fue "¿dónde podemos usar IA?", sino "¿dónde aporta de verdad el criterio humano y dónde es solo costumbre?". Los equipos que responden eso con honestidad acaban con una ventaja difícil de copiar, porque vive en cómo trabajan y no en qué herramienta compraron.',
        ],
      },
      deliver: {
        h2: 'Una estrategia de IA práctica, no un experimento de laboratorio.',
        intro: 'Construimos estrategias de IA que crean valor, no hype. Cada recomendación se ancla en lo que tu equipo puede asumir de verdad, en los workflows que realmente ejecutáis y en lo que cambiaría el día a día de la operación.',
        cards: [
          { label: 'Evaluación de madurez para IA', desc: 'Dónde están hoy tu equipo, tus datos y tus procesos. Qué está listo para la IA y qué no. Una evaluación con los pies en el suelo antes de que nadie empiece a comprar herramientas o montar workflows.' },
          { label: 'Estrategia de automatización de contenido y campañas', desc: 'Qué workflows se benefician de la automatización. Cuáles necesitan criterio humano. Dónde están los traspasos. Un mapa práctico de qué automatizar, qué aumentar y qué dejar en paz.' },
          { label: 'Selección de herramientas e integración del stack', desc: 'Las herramientas adecuadas para tus necesidades reales. Ni las más de moda, ni las más baratas. Las que encajan con tus workflows, se integran con tu stack actual y tu equipo va a usar de verdad.' },
          { label: 'Desarrollo de capacidades del equipo', desc: 'Formar a tu equipo para trabajar con la IA, no para ser reemplazado por ella. Habilidades prácticas, no teoría. El objetivo es confianza y competencia, no dependencia de consultores externos.' },
        ],
      },
      process: {
        h2: 'De la evaluación a la IA operativa en 6-8 semanas.',
        steps: [
          { num: '01', title: 'Evaluación', body: 'Workflows actuales, capacidades del equipo, panorama de datos, auditoría de herramientas. Entendemos dónde estás antes de recomendar adónde ir.', tag: 'Semana 1-2' },
          { num: '02', title: 'Estrategia', body: 'Priorización de casos de uso, decisiones de construir o comprar, arquitectura de integración. Las decisiones difíciles sobre dónde encaja la IA y dónde no.', tag: 'Semana 3-4' },
          { num: '03', title: 'Piloto', body: 'Implementamos 2-3 workflows de alto impacto. Medimos resultados. Iteramos. Prueba real de valor antes de comprometerse a un despliegue completo.', tag: 'Semana 5-6' },
          { num: '04', title: 'Escalado', body: 'Formación del equipo, documentación, plan de despliegue para el resto de casos de uso. Todo lo que tu equipo necesita para llevar esto sin nosotros.', tag: 'Semana 7-8' },
        ],
      },
      stats: {
        h2: 'La brecha de la IA ya está aquí.',
        items: [
          { num: '64%', label: 'de los marketers B2B dice que la IA impactará mucho su estrategia, pero solo el 19% tiene un plan formal', source: 'Salesforce State of Marketing 2024' },
          { num: '40%', label: 'de aumento de productividad en equipos de marketing que han integrado la IA con éxito en sus workflows clave', source: 'McKinsey 2024' },
          { num: '5x', label: 'más rápida la producción de contenido con workflows aumentados por IA, manteniendo los estándares de calidad', source: 'HubSpot 2024' },
        ],
      },
      caseStudy: {
        h2: 'Una empresa de SaaS B2B redujo un 60% el tiempo de producción de contenido y mejoró su calidad integrando IA en su workflow editorial.',
        paragraphs: [
          'El equipo de marketing producía 4 piezas de contenido al mes y no daba abasto. La demanda de ventas de casos de éxito, thought leadership y contenido de producto crecía, pero el equipo no. Estaban atrapados en un ciclo de producir lo justo para seguir visibles, sin margen para centrarse en calidad o estrategia.',
          'Mapeamos su workflow editorial de punta a punta, identificamos dónde la IA podía encargarse de la investigación, los esquemas y los primeros borradores, y montamos un pipeline humano-IA con controles de calidad claros. Cada pieza seguía pasando por revisión editorial humana, pero el tiempo dedicado al trabajo de producción de bajo valor cayó drásticamente.',
          'En 8 semanas, la producción pasó de 4 a 12 piezas al mes. Más importante aún, el equipo dedicó más tiempo a estrategia, posicionamiento y distribución. La calidad del contenido mejoró porque los redactores editaban y afinaban en lugar de mirar una página en blanco. El cuello de botella se movió de "¿podemos producir suficiente?" a "¿qué deberíamos producir a continuación?".',
        ],
        imgAlt: 'Patrón de huella dactilar humana fundiéndose con trazas de circuito digital',
      },
      relatedH2: 'Lo que escribimos sobre IA y marketing.',
      cta: { h2: '¿Listo para poner la IA a trabajar para tu equipo de marketing?', sub: '30 minutos. Sin pitch. Solo una conversación honesta sobre dónde la IA puede ayudar de verdad a tu operación.' },
    },
    'brand-strategy': {
      seo: { title: 'Estrategia de marca y posicionamiento B2B', description: 'La mayoría de marcas B2B se construyen por accidente. Nosotros las construimos a propósito. Posicionamiento, mensajes y estrategia de marca para empresas B2B.' },
      heroNum: 'Servicio 02',
      heroImgAlt: 'Documentos de estrategia de marca y muestras de color sobre una mesa de reuniones',
      titleLines: ['Estrategia de marca', 'y posicionamiento'],
      subtitle: 'La mayoría de empresas B2B compite por características de producto y precio. Las que ganan compiten por claridad. Saben exactamente quiénes son, a quién sirven y por qué importa. Esa claridad no ocurre por accidente. Se construye.',
      problem: {
        titleLines: ['Todo lo que dices de ti', 'lo podría decir tu competencia.'],
        paragraphs: [
          'La mayoría de marcas B2B son accidentales. Construidas a partir del pitch del fundador que pegó, un tagline que nadie odió lo suficiente como para cambiarlo y una web que dice más o menos lo mismo que la de cualquier competidor. Aguanta más tiempo del que esperarías, y luego deja de aguantar de golpe.',
          'El coste es invisible al principio. Pierdes una operación y culpas al precio. Un prospecto elige a un competidor cuyo producto no es tan bueno, pero cuya historia es más nítida. Tu equipo de ventas describe lo que hacéis de cinco formas distintas. Marketing produce contenido que suena genérico porque nadie llegó a acordar qué os hace diferentes. Nada de esto aparece como una partida en ninguna cuenta. Drena el pipeline lo bastante en silencio como para que se lo achaques a otra cosa.',
          'Puede que tu producto sea genuinamente mejor. No va a importar demasiado mientras tu posicionamiento sea difuso, porque el mercado elige de forma bastante fiable a la empresa que comunica con más claridad. Los compradores no tienen paciencia para descifrar tu valor por ti, ni razón alguna para tenerla.',
        ],
      },
      deliver: {
        h2: 'Un sistema de posicionamiento y mensajes que toda tu empresa puede usar.',
        intro: 'No un manual de marca que se queda en un estante. Un framework práctico que da a tu equipo de ventas, a tus marketers y a tu dirección un lenguaje común sobre qué hacéis, para quién lo hacéis y por qué importa.',
        cards: [
          { label: 'Mapa de posicionamiento de mercado y competencia', desc: 'Dónde te sitúas respecto a las alternativas. Cómo te perciben los compradores frente a la competencia. Y los huecos del mercado que puedes ocupar de forma realista. No teoría. Una imagen clara basada en señales reales del mercado.' },
          { label: 'Definición de ICP y buyer journey', desc: 'A quién le vendes de verdad, qué le importa en cada etapa y qué le hace elegir. No un ejercicio de personas. Un mapa práctico de cómo compran de verdad tus mejores clientes.' },
          { label: 'Arquitectura de mensajes central', desc: 'Propuesta de valor, mensajes clave por audiencia, proof points. Un framework que funciona en tu web, tus decks de ventas, tus campañas y tus conversaciones. Una única fuente de verdad sobre cómo hablas de lo que haces.' },
          { label: 'Guía de voz y tono de marca', desc: 'Cómo suenas, cómo escribes, qué lenguaje usas y qué evitas. Lo bastante práctica para que tu equipo la aplique sin una policía de marca. Porque una guía solo funciona si la gente la usa de verdad.' },
        ],
      },
      process: {
        h2: 'Del diagnóstico a la entrega en 6-8 semanas.',
        steps: [
          { num: '01', title: 'Descubrimiento', body: 'Entrevistas con stakeholders, inmersión en la competencia, auditoría del posicionamiento actual. Hablamos con tu equipo, tus clientes y tu mercado antes de formarnos ninguna opinión.', tag: 'Semana 1-2' },
          { num: '02', title: 'Estrategia', body: 'Framework de posicionamiento, propuesta de valor, definición de ICP. Aquí ocurren las decisiones difíciles. Nosotros facilitamos, tú las haces tuyas.', tag: 'Semana 3-4' },
          { num: '03', title: 'Construcción', body: 'Arquitectura de mensajes, guía de voz de marca, brief de dirección visual. La estrategia se convierte en herramientas que tu equipo puede desplegar de verdad.', tag: 'Semana 5-6' },
          { num: '04', title: 'Activación', body: 'Workshop con el equipo, plan de despliegue, adopción interna. Una estrategia de marca que vive en un deck no vale nada. Nos aseguramos de que llegue a quien la necesita.', tag: 'Semana 7-8' },
        ],
      },
      stats: {
        h2: 'Por qué el posicionamiento no es opcional.',
        items: [
          { num: '77%', label: 'de los compradores B2B dice que la marca es un factor crítico en su decisión de compra', source: 'Gartner 2024' },
          { num: '2,5x', label: 'más win rate en empresas con un posicionamiento claro y diferenciado', source: 'Forrester 2024' },
          { num: '60%', label: 'de las empresas B2B no sabe articular con claridad qué las hace diferentes', source: 'LinkedIn B2B Institute 2024' },
        ],
      },
      caseStudy: {
        h2: 'Una empresa de SaaS se reposicionó de "llena de funciones" a "líder de categoría" y duplicó el pipeline inbound en 6 meses.',
        paragraphs: [
          'La empresa tenía un buen producto y una base de clientes fiel. Pero cada pitch empezaba con una comparativa de funciones. Los prospectos la evaluaban como uno más de cuatro proveedores parecidos, y el precio se estaba convirtiendo en el factor decisivo.',
          'Hicimos un sprint de posicionamiento. El insight fue que sus clientes no la compraban por las funciones. La compraban porque la plataforma eliminaba un cuello de botella operativo concreto que costaba a empresas del mid-market entre 15 y 40 horas al mes. Ese era el posicionamiento: no "hacemos más", sino "eliminamos este problema por completo".',
          'El reposicionamiento se filtró a todo: web, deck de ventas, secuencias de outbound, mensajes de eventos. En seis meses, el pipeline inbound se había duplicado. El ticket medio subió un 30% porque ya no competían por precio. El equipo de ventas contó que las conversaciones cambiaron. Los prospectos empezaron a decir "hemos oído que sois los que resolvéis [problema concreto]" en lugar de "¿me enseñas vuestras funciones?".',
        ],
        imgAlt: 'Diagrama de mapeo estratégico en una pizarra con nodos conectados',
      },
      relatedH2: 'Lo que escribimos sobre marca y estrategia.',
      cta: { h2: '¿Listo para adueñarte de tu posición en el mercado?', sub: '30 minutos. Sin pitch. Solo una conversación honesta sobre dónde está tu marca y dónde podría llegar.' },
    },
    'go-to-market': {
      seo: { title: 'Estrategia Go-To-Market B2B | The B2B Tinkerers', description: 'Un motion de GTM claro que conecta el posicionamiento con el pipeline. Entrada a mercado, estrategia de canales y generación de demanda para empresas B2B.' },
      heroNum: 'Servicio 03',
      heroImgAlt: 'Mapa de pared con chinchetas e hilos de colores conectando distintos puntos',
      titleLines: ['Estrategia', 'Go-To-Market'],
      subtitle: 'Una estrategia de GTM es más que un plan de lanzamiento. Es la respuesta a: a quién le vendemos, qué decimos, dónde aparecemos y cómo se mueven juntos ventas y marketing. La construimos desde cero o arreglamos lo que está roto.',
      problem: {
        titleLines: ['El producto funciona.', 'Ponerlo delante de la gente adecuada sigue siendo a ojo.'],
        paragraphs: [
          'Tienes un buen producto, puede que incluso uno estupendo. Lo que no tienes es una forma sistemática de ponerlo delante de los compradores adecuados en el momento adecuado. Los leads gotean desde canales que nadie eligió a propósito. Algunas operaciones se cierran y nadie sabe explicar por qué esas y no las otras, lo que hace que el crecimiento se parezca más al tiempo meteorológico que a algo construido.',
          'Mientras tanto ventas hace una cosa y marketing hace otra. Ambos equipos están ocupados, y ninguno se mueve en la misma dirección que el otro. Ventas culpa a marketing por la calidad de los leads, marketing culpa a ventas por el seguimiento, y el pipeline sigue impredecible mientras el consejo repite la misma pregunta: ¿cuándo se convierte esto en una máquina?',
          'Entrar en un mercado nuevo sin un playbook es donde esto se vuelve caro. Las empresas asumen que lo que funcionó en una geografía o segmento se traslada al siguiente, y rara vez es así. La brecha entre el product-market fit y los ingresos repetibles es donde se atasca la mayoría de empresas B2B, y el producto casi nunca es el motivo. El motion de go-to-market sencillamente nunca se llegó a construir bien.',
        ],
      },
      deliver: {
        h2: 'El playbook que conecta tu producto con tu pipeline.',
        intro: 'No un deck de estrategia que coge polvo. Un motion de GTM que funciona, con responsabilidades claras, objetivos medibles y un plan compartido que ventas y marketing pueden ejecutar de verdad, juntos.',
        cards: [
          { label: 'Plan de entrada o expansión de mercado', desc: 'Qué segmentos, qué geografías, en qué orden, con qué recursos. Un roadmap priorizado según tamaño de mercado, intensidad competitiva y tu capacidad real de ganar.' },
          { label: 'Mix y priorización de canales', desc: 'Dónde aparecer, en qué invertir, qué saltarte. Una estrategia de canales basada en dónde tus compradores gastan de verdad su atención, no en dónde todos los demás gastan su presupuesto.' },
          { label: 'Arquitectura de generación de demanda', desc: 'El motor que convierte el conocimiento en pipeline cualificado. No una lista de tácticas, sino un sistema conectado con etapas claras, objetivos de conversión y contenido mapeado a cada paso del buyer journey.' },
          { label: 'Playbook de ventas y marketing', desc: 'Cómo se mueven juntos los dos equipos. Mensajes por segmento, criterios de traspaso de leads, objetivos de pipeline compartidos y un lenguaje común que elimina el habitual señalar con el dedo.' },
        ],
      },
      process: {
        h2: 'De la estrategia al motion en 8-10 semanas.',
        steps: [
          { num: '01', title: 'Evaluación de mercado', body: 'Dimensionamiento de mercado, análisis de segmentos, panorama competitivo, investigación de compradores. Mapeamos el terreno antes de planear la ruta.', tag: 'Semana 1-2' },
          { num: '02', title: 'Diseño de estrategia', body: 'Posicionamiento por segmento, estrategia de canales, mensajes por audiencia, validación de precios. Las decisiones difíciles que dan forma a todo lo que viene después.', tag: 'Semana 3-5' },
          { num: '03', title: 'Construcción del playbook', body: 'Frameworks de campaña, plan de contenido, materiales de sales enablement, cuadro de mando de KPI. La estrategia se convierte en herramientas que tus equipos pueden desplegar de inmediato.', tag: 'Semana 6-8' },
          { num: '04', title: 'Apoyo al lanzamiento', body: 'Ejecución de la primera campaña, alineación del equipo, cadencia de standup semanal. Nos quedamos en la sala hasta que el motion está en marcha y el equipo lo hace suyo.', tag: 'Semana 9-10' },
        ],
      },
      stats: {
        h2: 'Por qué el GTM separa a quien crece de quien solo arranca.',
        items: [
          { num: '72%', label: 'de las empresas que no llegan a sus objetivos de ingresos señala la mala ejecución del go-to-market como causa principal', source: 'SBI Growth Advisory 2024' },
          { num: '3,5x', label: 'más crecimiento de ingresos en empresas B2B con una estrategia de GTM documentada y alineada', source: 'McKinsey 2024' },
          { num: '45%', label: 'de los lanzamientos de producto B2B no cumple las expectativas de ingresos en el primer año', source: 'Gartner 2024' },
        ],
      },
      caseStudy: {
        h2: 'Una empresa de tecnología industrial entró en un nuevo mercado europeo y construyó un pipeline cualificado de 2 M€ (2,2 M$) en 5 meses.',
        paragraphs: [
          'La empresa tenía un fuerte product-market fit en su mercado de origen. A los clientes les encantaba el producto, la retención era alta y el equipo de ventas sabía cerrar. Pero cuando decidieron expandirse a una nueva geografía europea, descubrieron rápido que ninguno de sus playbooks existentes se traducía. El perfil de comprador era distinto, el panorama competitivo era desconocido y los canales que funcionaban en casa no generaban nada.',
          'Construimos un motion de GTM específico para ese mercado desde cero. Empezamos con una investigación profunda del comprador en el mercado objetivo, seguida de mensajes localizados que hablaban de los problemas y prioridades de esa audiencia concreta. Diseñamos una estrategia de canales centrada en los dos o tres sitios donde sus compradores ideales pasaban de verdad su tiempo, y creamos un kit de sales enablement que daba al equipo local todo lo necesario para tener conversaciones nítidas y relevantes desde el primer día.',
          'En cinco meses tenían un pipeline cualificado de más de 2 M€ (2,2 M$) y sus primeras tres operaciones cerradas en el nuevo mercado. Más importante aún, el motion era repetible. El mismo framework se ha adaptado desde entonces para una segunda expansión de mercado con resultados iniciales parecidos.',
        ],
        imgAlt: 'Globo terráqueo vintage con banderitas marcando ubicaciones',
      },
      relatedH2: 'Lo que escribimos sobre GTM y estrategia de crecimiento.',
      cta: { h2: '¿Listo para convertir tu producto en un motor de crecimiento?', sub: '30 minutos. Sin pitch. Solo una conversación honesta sobre tu mercado y tu motion.' },
    },
    'marketing-plan': {
      seo: { title: 'Plan de marketing y alineación con negocio B2B | The B2B Tinkerers', description: 'Un plan de marketing que refleja objetivos de negocio reales y que tu equipo va a seguir de verdad. Roadmaps trimestrales, KPI y asignación de presupuesto para empresas B2B.' },
      heroNum: 'Servicio 04',
      heroImgAlt: 'Tarjetas de línea temporal trimestral ordenadas en filas con bloques de prioridad',
      titleLines: ['Plan de marketing', 'y alineación con negocio'],
      subtitle: 'La mayoría de planes de marketing se escriben para decks de consejo, no para ejecutar. Nosotros construimos planes que parten del negocio y trabajan hacia atrás hasta un roadmap trimestral que tu equipo puede hacer suyo y tu dirección puede confiar.',
      problem: {
        titleLines: ['El plan tenía buena pinta en enero.', 'En marzo ya nadie abría el archivo.'],
        paragraphs: [
          'La mayoría de planes de marketing lucen genial en enero y son irrelevantes en marzo. Están hechos para la presentación al consejo, no para quien tiene que ejecutarlos. El resultado es un documento que se archiva mientras el equipo vuelve a hacer lo que ya venía haciendo.',
          'El problema de fondo es la desconexión entre lo que espera la dirección y lo que entrega marketing. La dirección quiere pipeline, ingresos y cuota de mercado. Marketing reporta impresiones, clics y volumen de contenido. Ninguno de los dos lados es irrazonable, simplemente trabajan desde playbooks distintos, y a nadie le encargaron nunca reconciliarlos.',
          'Así que los equipos funcionan a base de tácticas sin un hilo estratégico. Se lanzan campañas porque "siempre lo hacemos". El presupuesto se asigna según el plan del año pasado más un 10%. Las métricas de marketing no conectan con resultados de negocio. Y cuando el CEO pregunta "¿qué produjo marketing este trimestre?", la respuesta es o silencio o una hoja de cálculo que plantea más preguntas de las que responde.',
        ],
      },
      deliver: {
        h2: 'Un plan que tu equipo va a seguir de verdad.',
        intro: 'No un documento de estrategia de 60 páginas que nadie lee. Un plan práctico que conecta la actividad de marketing con resultados de negocio, da a cada miembro del equipo claridad sobre las prioridades y aguanta cuando la realidad cambia.',
        cards: [
          { label: 'Roadmaps de marketing anuales y trimestrales', desc: 'Qué pasa y cuándo, quién lo lidera, cómo conecta con el calendario del negocio. Un plan vivo con hitos trimestrales, responsables claros y puntos de revisión integrados para ajustar sin empezar de cero.' },
          { label: 'Framework de OKR y KPI alineado con los objetivos de negocio', desc: 'Métricas de marketing que a la dirección le importan de verdad. Ingresos, pipeline, cuota de mercado. No números de vanidad, sino los indicadores que te dicen si marketing está haciendo avanzar el negocio.' },
          { label: 'Asignación de presupuesto y modelo de ROI', desc: 'Adónde va cada euro y cada dólar y qué se espera que produzca. Un modelo de presupuesto transparente que conecta gasto con resultados para que puedas defender cada línea y reasignar con confianza.' },
          { label: 'Workshops de alineación interfuncional', desc: 'Poner a ventas, producto y marketing en la misma sala con los mismos objetivos. Porque un plan de marketing que solo se cree marketing es una lista de deseos.' },
        ],
      },
      process: {
        h2: 'De los objetivos de negocio al roadmap de marketing en 4-6 semanas.',
        steps: [
          { num: '01', title: 'Inmersión en el negocio', body: 'Objetivos de ingresos, prioridades de crecimiento, capacidad del equipo, expectativas de la dirección. Aprendemos cómo funciona de verdad el negocio antes de tocar nada de marketing.', tag: 'Semana 1' },
          { num: '02', title: 'Framework estratégico', body: 'OKR, estrategia de canales, modelo de presupuesto, framework de medición. La columna vertebral estratégica que conecta cada actividad de marketing con un objetivo de negocio.', tag: 'Semana 2-3' },
          { num: '03', title: 'Construcción del roadmap', body: 'Planes trimestrales con responsables, plazos, dependencias y criterios de éxito. No una lista de deseos. Un plan que tu equipo puede empezar a ejecutar el primer día.', tag: 'Semana 4-5' },
          { num: '04', title: 'Alineación', body: 'Presentación a dirección, workshop con el equipo, plan de adopción. No entregamos un documento. Nos aseguramos de que el plan tiene el respaldo de quien tiene que ejecutarlo y de quien tiene que financiarlo.', tag: 'Semana 6' },
        ],
      },
      stats: {
        h2: 'Por qué fracasan la mayoría de planes de marketing.',
        items: [
          { num: '61%', label: 'de los marketers dice que su estrategia no está bien conectada con los objetivos de negocio', source: 'CoSchedule 2024' },
          { num: '4x', label: 'más probable reportar éxito cuando los objetivos de marketing están alineados con los objetivos de ingresos de la empresa', source: 'HubSpot 2024' },
          { num: '37%', label: 'de los presupuestos de marketing se desperdicia en actividades que no conectan con el pipeline', source: 'Gartner CMO Survey 2024' },
        ],
      },
      caseStudy: {
        h2: 'Una empresa de tecnología B2B pasó de "marketing hace cosas" a "marketing genera el 35% del pipeline" en dos trimestres.',
        paragraphs: [
          'El equipo de marketing era activo pero disperso. Producían contenido, organizaban eventos y gestionaban campañas de pago. Pero nadie podía trazar una línea recta desde ninguna de esas actividades hasta el pipeline de ventas. La dirección toleraba marketing porque sabía que lo necesitaba, pero no podía señalar qué producía en realidad.',
          'Construimos un roadmap trimestral alineado con los objetivos de ingresos, instalamos un cuadro de mando de KPI compartido que veían tanto marketing como ventas y montamos sesiones mensuales de alineación entre los dos equipos. El plan de marketing dejó de ser una lista de deseos y se convirtió en un documento operativo con responsables, plazos y métricas que conectaban con el pipeline.',
          'En dos trimestres, el pipeline generado por marketing pasó de no medirse al 35% del total. No porque marketing hiciera más. Porque marketing hizo lo correcto, en el orden correcto, con responsabilidad clara. El CEO dejó de preguntar "¿qué hace marketing?" y empezó a preguntar "¿cómo le damos más presupuesto a marketing?".',
        ],
        imgAlt: 'Tablero kanban con tarjetas en verde y crema',
      },
      relatedH2: 'Lo que escribimos sobre planificación y alineación.',
      cta: { h2: '¿Listo para construir un plan de marketing que de verdad conecte con el negocio?', sub: '30 minutos. Sin pitch. Solo una conversación sobre qué debería entregar tu marketing y cómo llegar ahí.' },
    },
    'fractional-cmo': {
      seo: { title: 'CMO fraccional para empresas B2B | The B2B Tinkerers', description: 'Liderazgo de marketing senior sin el coste de un full-time. Nos integramos en tu equipo directivo, marcamos la estrategia, formamos a tu gente y mantenemos el marketing conectado con el negocio.' },
      heroNum: 'Servicio 06',
      heroImgAlt: 'Mesa de sala de reuniones ejecutiva con un cuaderno abierto y una taza de café',
      titleLines: ['CMO fraccional'],
      subtitle: 'Liderazgo de marketing senior sin el coste de un full-time. Nos integramos en tu equipo directivo: marcando la estrategia, formando a tu gente y asegurándonos de que el marketing sigue conectado con lo que el negocio necesita de verdad. No un consultor que envía un informe y desaparece.',
      problem: {
        titleLines: ['Necesitas a alguien senior que se haga cargo.', 'No necesariamente cinco días a la semana.'],
        paragraphs: [
          'Hay una etapa que alcanzan la mayoría de empresas B2B en crecimiento en la que marketing necesita más que un ejecutor competente. Necesita a alguien que sepa conectar la actividad con los objetivos de negocio, hacer trade-offs y sostener una dirección cuando el trimestre se pone ruidoso. El presupuesto o la etapa rara vez justifican un CMO full-time en ese punto, y para muchas empresas no lo justificarán nunca.',
          'La brecha entre un marketing manager que ejecuta tácticas y un líder senior que marca la dirección es más ancha de lo que la mayoría de empresas cree. No es senioridad por la senioridad. Es la diferencia entre ejecutar bien el plan y ser responsable de si era el plan correcto. Sin esa capa, marketing se convierte en una colección de actividades en lugar de una función con un punto de vista.',
          'Cuando nadie es dueño de la estrategia de marketing, esta se dispersa. Se lanzan campañas sin una línea clara de vuelta a las prioridades del negocio, los mensajes se fragmentan entre canales y el equipo se vuelve reactivo, persiguiendo lo que parecía urgente el lunes en lugar de construir algo que componga. El trabajo se sigue haciendo. Simplemente nunca suma a nada.',
        ],
      },
      deliver: {
        h2: 'Pensamiento a nivel de CMO, sin el sobrecoste de un CMO.',
        intro: 'Nos integramos en tu equipo, no revoloteamos por encima. Eso significa estar en la sala cuando se toman las decisiones, conocer a la gente por su nombre y entender el negocio lo bastante bien como para tomar decisiones que aguanten.',
        cards: [
          { label: 'Implicación semanal a nivel directivo', desc: 'Presencia regular en las reuniones de dirección. No un check-in mensual. Implicación real en las decisiones que afectan a marketing. El tipo de presencia que hace que marketing tenga voz cuando se fijan prioridades, se discuten presupuestos y la estrategia cambia.' },
          { label: 'Propiedad de la estrategia y dirección del equipo', desc: 'Marcar la estrategia de marketing, alinearla con los objetivos de negocio y asegurar que el equipo ejecuta con claridad y confianza. No solo consejo. Propiedad de la dirección y responsabilidad por los resultados.' },
          { label: 'Narrativa a nivel de consejo e inversores', desc: 'La historia de marketing para stakeholders que piensan en términos de ingresos, cuota de mercado y posición competitiva. Un reporting claro que conecta la actividad de marketing con resultados de negocio en el lenguaje que al consejo de verdad le importa.' },
          { label: 'Guía de contratación y estructura de equipo', desc: 'Cuándo contratar, a quién contratar, cómo estructurar el equipo a medida que crece. Construir la función de marketing, no solo hacerla funcionar. Asegurar que cada nuevo rol añade capacidad estratégica, no solo capacidad de ejecución.' },
        ],
      },
      process: {
        h2: 'Liderazgo integrado desde el primer día.',
        steps: [
          { num: '01', title: 'Inmersión', body: 'Inmersión profunda en el negocio, el equipo y el estado actual del marketing. Asistir a las reuniones clave. Escuchar antes de actuar. Entender las dinámicas, las restricciones y dónde están las oportunidades reales.', tag: 'Semana 1-2' },
          { num: '02', title: 'Dirección', body: 'Fijar el framework estratégico. Definir prioridades, KPI y el roadmap a 90 días. Alinear con la dirección qué debe entregar marketing y cómo se medirá el éxito.', tag: 'Semana 3-4' },
          { num: '03', title: 'Ejecución', body: 'Implicación semanal. Formar al equipo, revisar el trabajo, tomar decisiones, quitar bloqueos. Presentar al consejo cuando haga falta. Mantener todo moviéndose en la misma dirección.', tag: 'Continuo' },
          { num: '04', title: 'Construcción', body: 'Desarrollar las capacidades del equipo. Contratar cuando haga falta. Construir procesos que sobrevivan a nuestro proyecto. El objetivo es una función de marketing que pueda sostenerse por sí sola.', tag: 'Continuo' },
        ],
      },
      stats: {
        h2: 'Por qué funciona el liderazgo fraccional.',
        items: [
          { num: '78%', label: 'de las empresas dice que necesita liderazgo de marketing senior pero no puede justificar contratar un CMO full-time', source: 'Pavilion 2024' },
          { num: '3x', label: 'más rápido llegar a la claridad estratégica frente a contratar un CMO full-time (sin reclutamiento, sin retraso de onboarding)', source: 'Chief Outsiders 2024' },
          { num: '52%', label: 'de las empresas que usan ejecutivos fraccionales reporta mejor alineación estratégica en 90 días', source: 'Deloitte 2024' },
        ],
      },
      caseStudy: {
        h2: 'Una empresa industrial B2B pasó de "no hacemos marketing en realidad" a una función estructurada que genera pipeline en menos de 6 meses.',
        paragraphs: [
          'La empresa crecía a base de reputación y referencias. Tenían a una persona llevando el marketing, centrada sobre todo en ferias del sector y catálogos de producto. La dirección sabía que necesitaba más de marketing, pero no tenía una idea clara de qué era ese "más" ni de cómo conseguirlo. No había estrategia, ni seguimiento del pipeline, ni conexión entre la actividad de marketing y los resultados de ventas.',
          'Nos integramos como CMO fraccional. El primer paso fue construir una estrategia de marketing directamente conectada con los objetivos de ventas y las prioridades de negocio. Definimos el ICP, mapeamos el buyer journey y construimos un framework de mensajes que el equipo de ventas pudiera usar de verdad. Después contratamos a dos personas más con las habilidades adecuadas para ejecutar el plan. Montamos un motor de generación de demanda que combinaba contenido, outreach y eventos en un sistema, en lugar de un conjunto de actividades desconectadas.',
          'Seis meses después, marketing aportaba el 25% del nuevo pipeline. El equipo tenía su propio asiento en la mesa de dirección. Ventas y marketing estaban alineados en objetivos y reporting. Lo más importante: la función estaba construida para sostenerse. Cuando nuestro proyecto se redujo, el equipo tenía la estrategia, los procesos y la confianza para seguir construyendo.',
        ],
        imgAlt: 'Brújula sobre planos de arquitectura',
      },
      relatedH2: 'Lo que escribimos sobre liderazgo de marketing.',
      cta: { h2: '¿Necesitas liderazgo de marketing senior sin el compromiso de un full-time?', sub: '30 minutos. Sin pitch. Solo una conversación honesta sobre dónde tu marketing necesita dirección.' },
    },
  },
};
