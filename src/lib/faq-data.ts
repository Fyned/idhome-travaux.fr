// ─────────────────────────────────────────────
// ID Home — Données FAQ
// ─────────────────────────────────────────────

export interface FAQItem {
  question: string;
  answer: string;
  category: string;
}

export const faqData: FAQItem[] = [
  // ── Général ──
  {
    question: "Quels types de services proposez-vous ?",
    answer:
      "Nous proposons des services de dépannage d'urgence (plomberie, électricité, serrurerie) disponibles 7J/7, ainsi que des services de rénovation complète incluant la peinture, l'isolation, la rénovation de cuisines et salles de bain, et les aménagements intérieurs.",
    category: "Général",
  },
  {
    question: "Dans quelles zones intervenez-vous ?",
    answer:
      "Nous intervenons principalement en Île-de-France et dans les régions environnantes. Pour les projets de rénovation, nous pouvons étudier les demandes dans un périmètre plus large. Contactez-nous pour vérifier la disponibilité dans votre secteur.",
    category: "Général",
  },
  {
    question: "Êtes-vous assurés pour les travaux ?",
    answer:
      "Oui, nous disposons d'une assurance responsabilité civile professionnelle et d'une garantie décennale pour tous nos travaux de rénovation. Nous pouvons vous fournir nos attestations sur demande.",
    category: "Général",
  },
  {
    question: "Comment prendre rendez-vous ?",
    answer:
      "Vous pouvez prendre rendez-vous de plusieurs façons : par téléphone au 06 58 97 14 39, via notre formulaire de contact en ligne, ou par email à contact@idhome-travaux.fr. Nous vous recontactons rapidement pour fixer une date et un créneau qui vous conviennent.",
    category: "Général",
  },

  // ── Urgence ──
  {
    question: "Intervenez-vous le week-end et les jours fériés ?",
    answer:
      "Oui, notre service de dépannage d'urgence est disponible 7 jours sur 7, y compris les week-ends et jours fériés. Pour les urgences de plomberie, électricité et serrurerie, appelez-nous à tout moment.",
    category: "Urgence",
  },
  {
    question: "Quel est le délai d'intervention pour une urgence ?",
    answer:
      "Pour les urgences, nous nous efforçons d'intervenir dans les plus brefs délais, généralement dans l'heure suivant votre appel, selon la disponibilité et votre localisation.",
    category: "Urgence",
  },
  {
    question: "Y a-t-il un surcoût pour les interventions d'urgence ?",
    answer:
      "Les tarifs peuvent varier selon les horaires (nuit, week-end, jours fériés). Nous vous communiquons toujours le tarif avant d'intervenir, sans surprise ni frais caché.",
    category: "Urgence",
  },
  {
    question: "Que dois-je préparer avant l'arrivée du technicien ?",
    answer:
      "Pour faciliter l'intervention, assurez-vous de dégager l'accès à la zone concernée. Si possible, repérez l'emplacement du compteur d'eau ou du tableau électrique, et décrivez le problème avec le plus de détails possible lors de votre appel. Cela permet au technicien d'arriver préparé avec le matériel adéquat.",
    category: "Urgence",
  },

  // ── Devis & Tarifs ──
  {
    question: "Le devis est-il vraiment gratuit ?",
    answer:
      "Oui, le devis est entièrement gratuit et sans engagement. Nous nous déplaçons chez vous pour évaluer les travaux et vous remettre un devis détaillé avec des prix transparents.",
    category: "Devis & Tarifs",
  },
  {
    question: "Comment obtenir un devis ?",
    answer:
      "Vous pouvez demander un devis de plusieurs façons : en nous appelant au 06 58 97 14 39, en remplissant le formulaire en ligne sur notre site, ou en nous envoyant un email à contact@idhome-travaux.fr.",
    category: "Devis & Tarifs",
  },
  {
    question: "Quels sont vos modes de paiement ?",
    answer:
      "Nous acceptons les paiements par carte bancaire, virement bancaire, chèque et espèces. Pour les projets de rénovation importants, nous pouvons mettre en place un échelonnement de paiement.",
    category: "Devis & Tarifs",
  },
  {
    question: "Les prix affichés incluent-ils la TVA ?",
    answer:
      "Oui, tous nos devis sont présentés en TTC (toutes taxes comprises). Le taux de TVA appliqué dépend de la nature des travaux : 10 % pour les travaux de rénovation et d'amélioration dans les logements de plus de 2 ans, et 20 % pour les prestations standard. Le détail est toujours indiqué clairement sur votre devis.",
    category: "Devis & Tarifs",
  },

  // ── Rénovation ──
  {
    question: "Combien de temps dure un projet de rénovation ?",
    answer:
      "La durée dépend de l'ampleur des travaux. Une rénovation de salle de bain prend en moyenne 1 à 3 semaines, une cuisine 2 à 4 semaines, et une rénovation complète d'appartement peut prendre de 1 à 3 mois. Nous établissons un planning précis avant le début du chantier.",
    category: "Rénovation",
  },
  {
    question: "Fournissez-vous les matériaux ?",
    answer:
      "Oui, nous pouvons fournir tous les matériaux nécessaires grâce à nos partenaires fournisseurs. Vous pouvez également choisir vos propres matériaux si vous le souhaitez. Nous vous conseillons dans tous les cas sur les meilleurs choix qualité/prix.",
    category: "Rénovation",
  },
  {
    question: "Proposez-vous un suivi de chantier ?",
    answer:
      "Absolument. Un chef de projet dédié vous accompagne du début à la fin de vos travaux. Vous êtes informé régulièrement de l'avancement et pouvez nous contacter à tout moment pour toute question.",
    category: "Rénovation",
  },
  {
    question: "Peut-on habiter dans le logement pendant les travaux ?",
    answer:
      "Pour les petits travaux et les interventions ponctuelles, vous pouvez tout à fait rester chez vous. En revanche, pour les rénovations de grande envergure (rénovation complète, gros œuvre), il peut être préférable de prévoir un hébergement temporaire. Dans tous les cas, nous mettons en place des protections (bâches, cloisons provisoires) pour limiter la poussière et les nuisances.",
    category: "Rénovation",
  },

  // ── Garanties ──
  {
    question: "Quelles garanties offrez-vous ?",
    answer:
      "Nous offrons une garantie sur tous nos travaux : garantie de parfait achèvement (1 an), garantie biennale (2 ans) pour les équipements, et garantie décennale (10 ans) pour les travaux de gros œuvre. Votre satisfaction est notre priorité.",
    category: "Garanties",
  },
  {
    question: "Que faire si je constate un problème après l'intervention ?",
    answer:
      "Contactez-nous immédiatement. Nous revenons gratuitement pour corriger tout problème lié à notre intervention dans le cadre de nos garanties. La satisfaction client est au cœur de notre engagement.",
    category: "Garanties",
  },
  {
    question: "Vos artisans sont-ils qualifiés ?",
    answer:
      "Oui, tous nos artisans sont qualifiés et expérimentés dans leur domaine. Ils sont régulièrement formés aux dernières normes et techniques pour vous garantir un travail de qualité.",
    category: "Garanties",
  },
  {
    question: "Proposez-vous un service après-vente ?",
    answer:
      "Oui, nous disposons d'un service après-vente dédié. Si vous rencontrez le moindre souci après nos travaux, notre équipe SAV réactive se charge de le résoudre dans les meilleurs délais. Votre tranquillité d'esprit est notre engagement.",
    category: "Garanties",
  },

  // ── Paiement & Financement ──
  {
    question: "Proposez-vous un paiement en plusieurs fois ?",
    answer:
      "Oui, pour les projets de rénovation importants, nous proposons un paiement échelonné en 2 à 3 fois sans frais supplémentaires. Les modalités sont définies ensemble avant le début des travaux et inscrites dans le devis.",
    category: "Paiement & Financement",
  },
  {
    question: "Quelles aides financières existent pour la rénovation ?",
    answer:
      "Plusieurs dispositifs peuvent réduire le coût de vos travaux : MaPrimeRénov' pour la rénovation énergétique, les Certificats d'Économies d'Énergie (CEE), la TVA réduite à 5,5 % pour les travaux de performance énergétique, et l'éco-prêt à taux zéro (éco-PTZ). Nous vous accompagnons dans l'identification des aides auxquelles vous êtes éligible.",
    category: "Paiement & Financement",
  },
  {
    question: "Acceptez-vous les chèques et les virements ?",
    answer:
      "Oui, nous acceptons tous les modes de paiement : carte bancaire, chèque, virement bancaire et espèces. Vous choisissez la solution qui vous convient le mieux.",
    category: "Paiement & Financement",
  },

  // ── Délais & Planning ──
  {
    question: "Quel est le délai pour obtenir un rendez-vous ?",
    answer:
      "Pour un rendez-vous standard (devis, visite technique), comptez un délai de 24 à 48 heures. Pour les urgences de plomberie, électricité ou serrurerie, nous intervenons le jour même dans la mesure du possible.",
    category: "Délais & Planning",
  },
  {
    question: "Quelle est la meilleure période pour rénover ?",
    answer:
      "Le printemps et l'automne sont les périodes idéales pour les travaux de rénovation intérieure, avec des températures clémentes et une bonne ventilation. L'été est recommandé pour les travaux extérieurs (façade, toiture). Nous vous conseillons de planifier votre projet à l'avance pour bénéficier des meilleurs créneaux.",
    category: "Délais & Planning",
  },
  {
    question: "Respectez-vous les délais annoncés ?",
    answer:
      "Oui, le respect des délais est un engagement contractuel chez ID Home. Nous établissons un planning détaillé avant le démarrage du chantier et vous tenons informé régulièrement de l'avancement. En cas d'imprévu, nous vous prévenons immédiatement et proposons des solutions adaptées.",
    category: "Délais & Planning",
  },

  // ── Matériaux & Qualité ──
  {
    question: "Quelles marques de matériaux utilisez-vous ?",
    answer:
      "Nous travaillons avec des marques reconnues pour leur qualité et leur durabilité : Grohe et Hansgrohe en plomberie, Legrand et Schneider en électricité, Tollens et Dulux Valentine en peinture. Grâce à nos partenariats, nous vous proposons des matériaux premium à des tarifs compétitifs.",
    category: "Matériaux & Qualité",
  },
  {
    question: "Utilisez-vous des matériaux écologiques ?",
    answer:
      "Oui, nous proposons des alternatives écologiques dès que possible : peintures à faible teneur en COV, matériaux d'isolation biosourcés (laine de bois, ouate de cellulose), matériaux recyclés et produits respectueux de l'environnement. Nous vous conseillons sur les meilleures options écoresponsables adaptées à votre projet.",
    category: "Matériaux & Qualité",
  },
  {
    question: "Puis-je choisir moi-même les matériaux ?",
    answer:
      "Absolument. Vous êtes libre de sélectionner vos propres matériaux auprès du fournisseur de votre choix. Si vous préférez être accompagné, nous vous guidons vers nos partenaires pour bénéficier de tarifs professionnels et d'une qualité garantie. Dans tous les cas, nous vérifions la compatibilité des matériaux choisis avec votre projet avant le début des travaux.",
    category: "Matériaux & Qualité",
  },
  {
    question: "Comment garantissez-vous la qualité des travaux ?",
    answer:
      "La qualité est assurée à chaque étape : nous utilisons exclusivement des matériaux de marques reconnues, nos artisans sont qualifiés et formés régulièrement, et un contrôle qualité est effectué à la fin de chaque phase du chantier. De plus, nos garanties (parfait achèvement, biennale et décennale) vous protègent durablement après la réception des travaux.",
    category: "Matériaux & Qualité",
  },
  {
    question: "Les matériaux que vous posez sont-ils couverts par une garantie fabricant ?",
    answer:
      "Oui, tous les matériaux et équipements que nous installons bénéficient de la garantie du fabricant, généralement de 2 à 10 ans selon les produits. Nous conservons les références et vous transmettons les certificats de garantie correspondants. En cas de défaut matériel, nous gérons les démarches de remplacement auprès du fabricant à votre place.",
    category: "Matériaux & Qualité",
  },
];

export const faqCategories = [...new Set(faqData.map((f) => f.category))];
