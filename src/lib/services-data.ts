// ─────────────────────────────────────────────
// ID Home — Données des services
// ─────────────────────────────────────────────

import {
  Droplets,
  Zap,
  KeyRound,
  Paintbrush,
  ThermometerSnowflake,
  Home,
  type LucideIcon,
} from "lucide-react";

export interface ServiceData {
  slug: string;
  name: string;
  shortDescription: string;
  fullDescription: string;
  icon: LucideIcon;
  urgent: boolean;
  features: string[];
  advantages: string[];
  priceRange: string;
  estimatedTime: string;
  testimonial: {
    name: string;
    text: string;
    rating: number;
  };
  zones: string[];
  seo: {
    title: string;
    description: string;
    keywords: string[];
  };
  faq: { question: string; answer: string }[];
}

const defaultZones = [
  "Levallois-Perret",
  "Neuilly-sur-Seine",
  "Paris",
  "Courbevoie",
  "Boulogne-Billancourt",
  "Clichy",
  "Asnières-sur-Seine",
  "Puteaux",
  "Suresnes",
  "La Défense",
];

export const services: ServiceData[] = [
  {
    slug: "plomberie",
    name: "Plomberie",
    shortDescription: "Fuites, débouchage, installation sanitaire",
    fullDescription:
      "Service de plomberie complet pour particuliers et professionnels en Île-de-France. Nos plombiers qualifiés interviennent pour la réparation de fuites d'eau, le débouchage de canalisations, l'installation et le remplacement de robinetterie, de chauffe-eau et d'équipements sanitaires. Grâce à notre équipement professionnel embarqué (caméra thermique, détecteur acoustique, furet électrique), nous localisons et résolvons rapidement tout type de problème. Disponible 7J/7 y compris week-ends et jours fériés, notre service d'urgence garantit une intervention dans l'heure suivant votre appel. Devis gratuit et prix transparents communiqués avant chaque intervention.",
    icon: Droplets,
    urgent: true,
    features: [
      "Réparation de fuites d'eau",
      "Débouchage de canalisations",
      "Installation et remplacement de robinetterie",
      "Pose et entretien de chauffe-eau",
      "Installation sanitaire complète",
      "Détection de fuites",
      "Remplacement de joints et siphons",
      "Mise en conformité des installations",
    ],
    advantages: [
      "Intervention en moins d'1h",
      "Disponible 7J/7, jours fériés inclus",
      "Devis gratuit avant intervention",
      "Garantie sur toutes les réparations",
      "Matériel professionnel embarqué",
    ],
    priceRange: "À partir de 80€",
    estimatedTime: "30 min à 2h",
    testimonial: {
      name: "Pierre R.",
      text: "Fuite d'eau un dimanche matin, ID Home est intervenu en 45 minutes. Réparation rapide et propre. Tarif annoncé respecté.",
      rating: 5,
    },
    zones: defaultZones,
    seo: {
      title: "Plombier d'urgence Levallois-Perret & Île-de-France 7J/7 | ID Home",
      description:
        "Plombier d'urgence à Levallois-Perret et en Île-de-France, disponible 7J/7. Réparation de fuites, débouchage, installation sanitaire. Intervention rapide, devis gratuit. Appelez le 06 58 97 14 39.",
      keywords: [
        "plombier urgence",
        "plombier Levallois-Perret",
        "plombier urgence Île-de-France",
        "plombier 92",
        "plombier Hauts-de-Seine",
        "fuite d'eau urgence",
        "débouchage canalisation",
        "plomberie dépannage",
        "plombier Paris",
        "dépannage plomberie 7J/7",
      ],
    },
    faq: [
      {
        question: "Intervenez-vous en urgence pour une fuite d'eau ?",
        answer:
          "Oui, nous intervenons 7J/7 pour toutes les urgences de plomberie, y compris les fuites d'eau. Appelez-nous et nous serons sur place dans les plus brefs délais.",
      },
      {
        question: "Combien coûte un débouchage de canalisation ?",
        answer:
          "Le prix dépend de la nature et de la localisation du bouchon. Nous établissons un devis gratuit avant toute intervention. Nos tarifs sont transparents et sans surprise.",
      },
      {
        question: "Pouvez-vous remplacer un chauffe-eau ?",
        answer:
          "Absolument. Nous assurons la pose, le remplacement et l'entretien de tous types de chauffe-eau (électrique, gaz, thermodynamique).",
      },
      {
        question: "Comment détecter une fuite d'eau cachée ?",
        answer:
          "Nous utilisons des équipements professionnels de détection (caméra thermique, détecteur acoustique) pour localiser les fuites cachées sans avoir à casser vos murs ou sols. Une détection précoce permet d'éviter des dégâts importants.",
      },
      {
        question: "À quelle fréquence faut-il entretenir un chauffe-eau ?",
        answer:
          "Nous recommandons un entretien annuel de votre chauffe-eau pour garantir son bon fonctionnement et prolonger sa durée de vie. Cela inclut le détartrage, la vérification de l'anode et le contrôle du groupe de sécurité.",
      },
      {
        question: "Pouvez-vous remplacer des WC ?",
        answer:
          "Oui, nous assurons le remplacement complet de vos WC, qu'il s'agisse d'un modèle classique, suspendu ou avec broyeur. Nous nous occupons de la dépose de l'ancien équipement, du raccordement et de la mise en service du nouveau.",
      },
    ],
  },
  {
    slug: "electricite",
    name: "Électricité",
    shortDescription: "Pannes, mise aux normes, installation",
    fullDescription:
      "Électriciens certifiés pour tous vos travaux électriques en Île-de-France, du dépannage d'urgence à la rénovation complète de votre installation. Nous assurons le diagnostic et la réparation de pannes, la mise aux normes NF C 15-100, le remplacement de tableaux électriques, l'installation de prises, interrupteurs et luminaires, ainsi que la mise en sécurité des installations vétustes. Nos techniciens disposent d'appareils de mesure professionnels pour localiser précisément tout défaut d'isolement ou court-circuit. Intervention d'urgence disponible 7J/7 avec délivrance d'un certificat de conformité après travaux. Devis gratuit sur place.",
    icon: Zap,
    urgent: true,
    features: [
      "Dépannage de pannes électriques",
      "Mise aux normes NF C 15-100",
      "Installation de prises et interrupteurs",
      "Remplacement de tableau électrique",
      "Pose de luminaires et éclairage",
      "Installation de prises USB et connectées",
      "Diagnostic électrique complet",
      "Mise en sécurité des installations",
    ],
    advantages: [
      "Diagnostic rapide et précis",
      "Intervention d'urgence 7J/7",
      "Mise aux normes garantie",
      "Certificat de conformité délivré",
      "Artisans certifiés",
    ],
    priceRange: "À partir de 90€",
    estimatedTime: "30 min à 3h",
    testimonial: {
      name: "Julie M.",
      text: "Court-circuit dans tout l'appartement en pleine nuit. L'électricien est arrivé rapidement et a tout réparé. Très compétent et rassurant.",
      rating: 5,
    },
    zones: defaultZones,
    seo: {
      title: "Électricien d'urgence Levallois-Perret & Île-de-France 7J/7 | ID Home",
      description:
        "Électricien d'urgence à Levallois-Perret et en Île-de-France, disponible 7J/7. Dépannage pannes, mise aux normes, installation électrique. Intervention rapide, devis gratuit. Appelez le 06 58 97 14 39.",
      keywords: [
        "électricien urgence",
        "électricien Levallois-Perret",
        "électricien urgence Île-de-France",
        "électricien 92",
        "électricien Hauts-de-Seine",
        "panne électrique urgence",
        "mise aux normes électrique",
        "dépannage électrique",
        "électricien Paris",
        "dépannage électricité 7J/7",
      ],
    },
    faq: [
      {
        question: "Que faire en cas de coupure de courant ?",
        answer:
          "Vérifiez d'abord votre disjoncteur. Si le problème persiste, appelez-nous immédiatement. Nous intervenons 7J/7 pour diagnostiquer et résoudre les pannes électriques.",
      },
      {
        question: "Faites-vous la mise aux normes électriques ?",
        answer:
          "Oui, nous réalisons la mise aux normes NF C 15-100 de votre installation électrique, indispensable pour la sécurité et la conformité de votre logement.",
      },
      {
        question: "Pouvez-vous installer un tableau électrique neuf ?",
        answer:
          "Oui, nous assurons le remplacement et l'installation de tableaux électriques aux normes, avec différentiel et disjoncteurs adaptés à vos besoins.",
      },
      {
        question: "À quelle fréquence faut-il faire vérifier son installation électrique ?",
        answer:
          "Nous recommandons un diagnostic électrique tous les 10 ans, ou lors de tout changement de locataire. Pour les installations de plus de 15 ans, une vérification est vivement conseillée pour prévenir les risques d'incendie ou d'électrocution.",
      },
      {
        question: "Pouvez-vous installer un éclairage LED dans tout mon logement ?",
        answer:
          "Oui, nous réalisons l'installation complète d'éclairage LED : spots encastrés, bandeaux LED, luminaires et variateurs. Le passage au LED permet de réduire votre consommation électrique jusqu'à 80% par rapport aux ampoules classiques.",
      },
      {
        question: "Mon logement est ancien, quels risques électriques dois-je connaître ?",
        answer:
          "Les logements anciens présentent souvent des installations vétustes : fils dénudés, absence de mise à la terre, prises non protégées. Nous réalisons un diagnostic complet et une mise en sécurité conforme aux normes actuelles pour éliminer tout risque.",
      },
    ],
  },
  {
    slug: "serrurerie",
    name: "Serrurerie",
    shortDescription: "Ouverture de porte, changement de serrure",
    fullDescription:
      "Serruriers professionnels disponibles 24h/24 et 7J/7 pour toutes vos urgences et projets de sécurité en Île-de-France. Nous intervenons pour l'ouverture de portes claquées ou verrouillées sans dégât dans 95 % des cas, le remplacement de serrures et cylindres, l'installation de serrures multipoints certifiées A2P, le blindage de portes et la mise en sécurité après cambriolage. Nos serruriers maîtrisent les techniques non destructives (crochetage, by-pass) et travaillent avec des serrures de marques reconnues. Devis transparent communiqué avant toute intervention, aucun frais caché.",
    icon: KeyRound,
    urgent: true,
    features: [
      "Ouverture de porte claquée",
      "Ouverture de porte verrouillée",
      "Changement de serrure et cylindre",
      "Installation de serrure multipoints",
      "Blindage de porte",
      "Reproduction de clés",
      "Installation de digicode et interphone",
      "Mise en sécurité après cambriolage",
    ],
    advantages: [
      "Ouverture sans dégât dans 95% des cas",
      "Disponible 24h/24, 7J/7",
      "Devis transparent avant intervention",
      "Serrures certifiées A2P",
      "Conseils sécurité personnalisés",
    ],
    priceRange: "À partir de 90€",
    estimatedTime: "20 min à 1h30",
    testimonial: {
      name: "Marc B.",
      text: "Porte claquée à 22h un samedi. Le serrurier est arrivé en 30 minutes et a ouvert sans abîmer la porte. Prix correct pour un dépannage en soirée.",
      rating: 5,
    },
    zones: defaultZones,
    seo: {
      title: "Serrurier d'urgence Levallois-Perret & Île-de-France 7J/7 | ID Home",
      description:
        "Serrurier d'urgence à Levallois-Perret et en Île-de-France, disponible 7J/7. Ouverture de porte, changement de serrure, blindage. Intervention rapide, devis gratuit. Appelez le 06 58 97 14 39.",
      keywords: [
        "serrurier urgence",
        "serrurier Levallois-Perret",
        "serrurier urgence Île-de-France",
        "serrurier 92",
        "serrurier Hauts-de-Seine",
        "ouverture porte urgence",
        "changement serrure",
        "porte claquée",
        "serrurier Paris",
        "dépannage serrurerie 7J/7",
      ],
    },
    faq: [
      {
        question: "Je suis enfermé dehors, pouvez-vous m'ouvrir la porte ?",
        answer:
          "Oui, nous intervenons 7J/7 pour les ouvertures de portes claquées ou verrouillées. Appelez-nous et nous serons sur place rapidement pour vous ouvrir sans endommager votre porte.",
      },
      {
        question: "Combien coûte un changement de serrure ?",
        answer:
          "Le tarif dépend du type de serrure (simple, multipoints, cylindre de sécurité). Nous vous communiquons un devis précis et transparent avant toute intervention.",
      },
      {
        question: "Intervenez-vous le week-end et les jours fériés ?",
        answer:
          "Oui, notre service de serrurerie d'urgence est disponible 7 jours sur 7, y compris les week-ends et jours fériés.",
      },
      {
        question: "Que faire en cas de cambriolage ?",
        answer:
          "En cas de cambriolage, appelez d'abord la police pour déposer plainte, puis contactez-nous immédiatement. Nous intervenons en urgence pour sécuriser votre porte : remplacement de la serrure, renforcement du bâti et, si nécessaire, blindage de porte.",
      },
      {
        question: "Pouvez-vous ouvrir une porte sans l'endommager ?",
        answer:
          "Dans 95% des cas, nous parvenons à ouvrir votre porte sans aucun dégât grâce à des techniques non destructives (crochetage, by-pass). Si la serrure doit être forcée, nous vous en informons avant et vous proposons un devis pour le remplacement.",
      },
      {
        question: "Installez-vous des serrures connectées ou des digicodes ?",
        answer:
          "Oui, nous installons des serrures connectées, des digicodes et des systèmes d'interphone. Ces solutions modernes offrent un contrôle d'accès pratique et sécurisé, avec la possibilité de gérer les accès à distance depuis votre smartphone.",
      },
    ],
  },
  {
    slug: "renovation",
    name: "Rénovation Complète",
    shortDescription: "Cuisine, salle de bain, aménagement intérieur",
    fullDescription:
      "Rénovation complète de votre habitat en Île-de-France : cuisine, salle de bain, aménagement intérieur et petits travaux. De la conception à la livraison, un interlocuteur unique coordonne l'ensemble des corps de métier pour transformer votre espace. Nous prenons en charge toutes les étapes : démolition, gros œuvre, plomberie, électricité, isolation, cloisonnement, revêtements de sols et murs, menuiserie intérieure et finitions. Chaque projet bénéficie d'un planning précis, de matériaux de qualité sélectionnés et de finitions soignées. Garantie décennale sur les travaux de gros œuvre et garantie de parfait achèvement d'un an.",
    icon: Home,
    urgent: false,
    features: [
      "Rénovation de cuisine sur mesure",
      "Rénovation de salle de bain",
      "Aménagement intérieur complet",
      "Cloisons et faux plafonds",
      "Revêtements de sols (carrelage, parquet)",
      "Menuiserie intérieure",
      "Petits travaux et finitions",
      "Suivi de projet personnalisé",
    ],
    advantages: [
      "Un interlocuteur unique pour tout le projet",
      "Matériaux de qualité sélectionnés",
      "Planning respecté à la lettre",
      "Garantie décennale sur les travaux",
      "Finitions soignées et impeccables",
    ],
    priceRange: "Sur devis personnalisé",
    estimatedTime: "1 à 8 semaines selon le projet",
    testimonial: {
      name: "Claire et Julien P.",
      text: "Rénovation complète de notre appartement de 65m². Travail remarquable, finitions impeccables. L'équipe est à l'écoute et respecte les délais.",
      rating: 5,
    },
    zones: defaultZones,
    seo: {
      title: "Rénovation complète maison & appartement Levallois-Perret | ID Home",
      description:
        "Rénovation complète de cuisine, salle de bain et intérieur à Levallois-Perret et Île-de-France. Finitions soignées, suivi de projet rigoureux. Devis gratuit. Appelez le 06 58 97 14 39.",
      keywords: [
        "rénovation maison",
        "rénovation appartement",
        "rénovation Levallois-Perret",
        "rénovation Île-de-France",
        "rénovation cuisine",
        "rénovation salle de bain",
        "aménagement intérieur",
        "travaux rénovation 92",
      ],
    },
    faq: [
      {
        question: "Combien de temps dure une rénovation de salle de bain ?",
        answer:
          "En moyenne, une rénovation complète de salle de bain prend entre 1 et 3 semaines selon l'ampleur des travaux. Nous établissons un planning précis avant le début du chantier.",
      },
      {
        question: "Proposez-vous un accompagnement pour la conception ?",
        answer:
          "Oui, nous vous accompagnons de la conception à la réalisation. Nous pouvons vous aider à choisir les matériaux, les couleurs et l'agencement de votre espace.",
      },
      {
        question: "Faites-vous les petits travaux ?",
        answer:
          "Absolument ! Que ce soit la pose d'une étagère, le montage d'un meuble ou une petite réparation, nous nous occupons de tous vos petits travaux du quotidien.",
      },
      {
        question: "Peut-on habiter dans l'appartement pendant les travaux de rénovation ?",
        answer:
          "Dans la plupart des cas, oui. Nous organisons le chantier pièce par pièce pour minimiser les nuisances. Pour les rénovations très lourdes (toute la plomberie ou l'électricité à refaire), nous vous conseillons de prévoir un hébergement temporaire le temps des travaux les plus impactants.",
      },
      {
        question: "Réalisez-vous des plans ou des visualisations 3D avant les travaux ?",
        answer:
          "Oui, pour les projets de rénovation importants, nous pouvons réaliser des plans d'aménagement et des visualisations 3D. Cela vous permet de vous projeter dans votre futur espace et de valider les choix avant le début du chantier.",
      },
      {
        question: "Quelle garantie proposez-vous après les travaux de rénovation ?",
        answer:
          "Nous offrons une garantie décennale sur les travaux de gros œuvre et une garantie de parfait achèvement d'un an. En cas de malfaçon constatée après la réception des travaux, nous intervenons à nos frais pour effectuer les corrections nécessaires.",
      },
    ],
  },
  {
    slug: "peinture",
    name: "Peinture",
    shortDescription: "Intérieure et extérieure, finitions soignées",
    fullDescription:
      "Travaux de peinture intérieure et extérieure réalisés par des peintres professionnels en Île-de-France. Nous assurons la préparation minutieuse des surfaces (lessivage, ponçage, rebouchage, enduit), l'application de sous-couche et de deux couches de finition pour un résultat impeccable. Notre équipe vous conseille sur le choix des couleurs et des finitions (mat, satiné, brillant) adaptées à chaque pièce. Nous utilisons des peintures de marques professionnelles reconnues (Tollens, Sikkens, Zolpan) offrant une excellente couvrance et durabilité. Protection complète de votre mobilier et nettoyage du chantier inclus.",
    icon: Paintbrush,
    urgent: false,
    features: [
      "Peinture intérieure (murs et plafonds)",
      "Peinture extérieure (façade)",
      "Préparation des surfaces",
      "Enduit et rebouchage",
      "Peinture décorative et effets",
      "Laquage de boiseries",
      "Pose de papier peint",
      "Conseil en colorimétrie",
    ],
    advantages: [
      "Conseil colorimétrie offert",
      "Préparation minutieuse des surfaces",
      "Peintures professionnelles haut de gamme",
      "Finitions impeccables",
      "Protection du mobilier incluse",
    ],
    priceRange: "À partir de 25€/m²",
    estimatedTime: "2 à 5 jours pour un appartement",
    testimonial: {
      name: "Nathalie G.",
      text: "Peinture complète de notre salon et couloir. Travail soigné, les murs sont parfaits. L'équipe a protégé tous nos meubles et nettoyé en partant.",
      rating: 5,
    },
    zones: defaultZones,
    seo: {
      title: "Peintre professionnel Levallois-Perret & Île-de-France | ID Home",
      description:
        "Travaux de peinture intérieure et extérieure à Levallois-Perret et Île-de-France. Finitions soignées, préparation des surfaces, conseil couleurs. Devis gratuit. Appelez le 06 58 97 14 39.",
      keywords: [
        "peintre Levallois-Perret",
        "peinture intérieure",
        "peinture extérieure",
        "peintre Île-de-France",
        "travaux peinture 92",
        "peintre professionnel",
        "décoration intérieure",
      ],
    },
    faq: [
      {
        question: "Fournissez-vous la peinture ou dois-je l'acheter ?",
        answer:
          "Nous pouvons fournir la peinture ou travailler avec celle que vous avez choisie. Nous utilisons des peintures professionnelles de qualité pour un résultat durable.",
      },
      {
        question: "Combien de couches appliquez-vous ?",
        answer:
          "Nous appliquons généralement une sous-couche et deux couches de finition pour un résultat optimal. Le nombre peut varier selon la couleur et le support.",
      },
      {
        question: "Préparez-vous les murs avant de peindre ?",
        answer:
          "Oui, la préparation est essentielle. Nous réalisons le lessivage, le ponçage, le rebouchage des fissures et l'application d'un enduit si nécessaire avant toute mise en peinture.",
      },
      {
        question: "Combien de jours faut-il pour peindre un appartement 3 pièces ?",
        answer:
          "Pour un appartement 3 pièces standard, comptez entre 3 et 5 jours ouvrés. Ce délai inclut la préparation complète des surfaces (lessivage, ponçage, rebouchage), l'application de la sous-couche et des deux couches de finition, ainsi que le nettoyage final.",
      },
      {
        question: "Réalisez-vous des peintures décoratives ou des effets spéciaux ?",
        answer:
          "Oui, nous proposons différentes techniques décoratives : effet béton ciré, patine, stuc, badigeon à la chaux, peinture à la brosse ou à l'éponge. Nous vous conseillons sur les tendances et les finitions adaptées à votre intérieur.",
      },
      {
        question: "Quelles marques de peinture utilisez-vous ?",
        answer:
          "Nous travaillons avec des marques professionnelles reconnues telles que Tollens, Sikkens et Zolpan. Ces peintures offrent une excellente couvrance, une durabilité supérieure et sont disponibles dans un large choix de couleurs et de finitions (mat, satin, brillant).",
      },
    ],
  },
  {
    slug: "isolation",
    name: "Isolation",
    shortDescription: "Thermique et phonique, économies d'énergie",
    fullDescription:
      "Travaux d'isolation thermique et phonique en Île-de-France pour améliorer durablement le confort de votre habitat et réduire votre facture énergétique de 25 à 60 %. Nous intervenons sur tous les postes de déperdition : isolation des combles (perdus ou aménagés), des murs par l'intérieur ou l'extérieur, des sols et planchers bas, et remplacement de fenêtres. Nous proposons des matériaux certifiés, incluant des solutions écologiques biosourcées (laine de bois, ouate de cellulose). Étude thermique préalable gratuite et accompagnement complet dans les démarches de subventions (MaPrimeRénov', CEE, éco-PTZ).",
    icon: ThermometerSnowflake,
    urgent: false,
    features: [
      "Isolation thermique des murs",
      "Isolation des combles",
      "Isolation phonique",
      "Isolation des sols",
      "Pose de fenêtres double vitrage",
      "Calfeutrage et étanchéité",
      "Diagnostic thermique",
      "Conseil en économies d'énergie",
    ],
    advantages: [
      "Étude thermique préalable gratuite",
      "Matériaux certifiés et écologiques",
      "Jusqu'à 60% d'économies sur le chauffage",
      "Aide aux démarches de subventions",
      "Confort été comme hiver",
    ],
    priceRange: "À partir de 30€/m²",
    estimatedTime: "3 à 10 jours selon la surface",
    testimonial: {
      name: "François D.",
      text: "Isolation des combles et changement des fenêtres. Notre facture de chauffage a baissé de 40%. Excellent investissement, travail propre et rapide.",
      rating: 5,
    },
    zones: defaultZones,
    seo: {
      title: "Isolation thermique & phonique Levallois-Perret | ID Home",
      description:
        "Travaux d'isolation thermique et phonique à Levallois-Perret et Île-de-France. Murs, combles, sols, fenêtres. Économies d'énergie garanties. Devis gratuit. Appelez le 06 58 97 14 39.",
      keywords: [
        "isolation thermique",
        "isolation phonique",
        "isolation Levallois-Perret",
        "isolation Île-de-France",
        "isolation combles",
        "isolation murs",
        "économies énergie",
        "isolation maison 92",
      ],
    },
    faq: [
      {
        question: "Quelle économie puis-je réaliser grâce à l'isolation ?",
        answer:
          "Une bonne isolation peut réduire votre facture de chauffage de 25 à 60% selon le type de travaux réalisés. Nous vous conseillons les solutions les plus adaptées à votre logement.",
      },
      {
        question: "Quels matériaux d'isolation utilisez-vous ?",
        answer:
          "Nous travaillons avec différents matériaux selon vos besoins et votre budget : laine de verre, laine de roche, polystyrène, ouate de cellulose, etc.",
      },
      {
        question: "L'isolation phonique est-elle efficace ?",
        answer:
          "Oui, l'isolation phonique réduit significativement les nuisances sonores. Nous adaptons la solution (doublage, cloison acoustique, faux plafond) à la source du bruit.",
      },
      {
        question: "Quelles aides et subventions sont disponibles pour les travaux d'isolation ?",
        answer:
          "Plusieurs dispositifs existent : MaPrimeRénov', les Certificats d'Économies d'Énergie (CEE), l'éco-prêt à taux zéro et la TVA réduite à 5,5%. Nous vous accompagnons dans les démarches administratives pour maximiser vos aides et réduire le reste à charge.",
      },
      {
        question: "Qu'est-ce qui est le plus efficace à isoler : les murs, le toit ou les fenêtres ?",
        answer:
          "La toiture représente jusqu'à 30% des déperditions thermiques, les murs environ 25% et les fenêtres 15%. Nous recommandons de commencer par l'isolation des combles pour un impact maximal, puis de traiter les murs et enfin les fenêtres. Un diagnostic thermique gratuit permet de prioriser les travaux selon votre logement.",
      },
      {
        question: "L'isolation thermique aide-t-elle aussi en été ?",
        answer:
          "Absolument. Une bonne isolation thermique fonctionne dans les deux sens : elle garde la chaleur en hiver et la fraîcheur en été. En isolant vos combles et vos murs, vous pouvez réduire la température intérieure de plusieurs degrés pendant les canicules, sans climatisation.",
      },
    ],
  },
];

export function getServiceBySlug(slug: string): ServiceData | undefined {
  return services.find((s) => s.slug === slug);
}

export function getUrgentServices(): ServiceData[] {
  return services.filter((s) => s.urgent);
}

export function getNonUrgentServices(): ServiceData[] {
  return services.filter((s) => !s.urgent);
}
