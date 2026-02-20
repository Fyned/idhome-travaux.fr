// ─────────────────────────────────────────────
// ID Home — Donnees des realisations
// ─────────────────────────────────────────────

export interface Project {
  title: string;
  category: string;
  imageSlug: string;
  description: string;
  surface?: string;
  duration?: string;
  location?: string;
}

export const projects: Project[] = [
  {
    title: "Rénovation de salle de bain",
    category: "Rénovation",
    imageSlug: "salle-de-bain",
    description:
      "Transformation complète d'une salle de bain avec douche à l'italienne, carrelage moderne et meuble vasque sur mesure.",
    surface: "8m²",
    duration: "2 semaines",
    location: "Levallois-Perret",
  },
  {
    title: "Rénovation de cuisine",
    category: "Rénovation",
    imageSlug: "cuisine",
    description:
      "Aménagement d'une cuisine ouverte fonctionnelle avec plan de travail en quartz et électroménager intégré.",
    surface: "12m²",
    duration: "3 semaines",
    location: "Paris 17e",
  },
  {
    title: "Installation électrique complète",
    category: "Électricité",
    imageSlug: "electricite",
    description:
      "Mise aux normes et installation électrique complète d'un appartement de 80m², tableau électrique neuf.",
    surface: "80m²",
    duration: "1 semaine",
    location: "Neuilly-sur-Seine",
  },
  {
    title: "Réparation de fuite urgente",
    category: "Plomberie",
    imageSlug: "plomberie",
    description:
      "Intervention d'urgence pour une fuite sous pression dans un immeuble ancien. Réparation et remplacement de la canalisation.",
    duration: "2 heures",
    location: "Paris 16e",
  },
  {
    title: "Peinture intérieure complète",
    category: "Peinture",
    imageSlug: "peinture",
    description:
      "Remise en peinture complète d'un appartement de 3 pièces avec préparation des murs, enduit et finitions soignées.",
    surface: "65m²",
    duration: "4 jours",
    location: "Boulogne-Billancourt",
  },
  {
    title: "Isolation thermique des combles",
    category: "Isolation",
    imageSlug: "isolation",
    description:
      "Isolation des combles perdus par soufflage de laine de roche pour améliorer le confort thermique et réduire la facture énergétique.",
    surface: "45m²",
    duration: "2 jours",
    location: "Courbevoie",
  },
  {
    title: "Rénovation studio 25m²",
    category: "Rénovation",
    imageSlug: "studio",
    description:
      "Transformation complète d'un studio parisien : optimisation de l'espace, cuisine équipée, salle d'eau moderne et rangements sur mesure.",
    surface: "25m²",
    duration: "4 semaines",
    location: "Paris 8e",
  },
  {
    title: "Dépannage serrure 3 points",
    category: "Serrurerie",
    imageSlug: "serrure",
    description:
      "Ouverture de porte sans effraction et remplacement d'une serrure 3 points par un modèle certifié A2P. Intervention en soirée.",
    duration: "1 heure",
    location: "Levallois-Perret",
  },
  {
    title: "Mise aux normes tableau électrique",
    category: "Électricité",
    imageSlug: "tableau-electrique",
    description:
      "Remplacement d'un tableau électrique vétuste par un tableau aux normes NF C 15-100 avec différentiels 30mA et disjoncteurs adaptés.",
    duration: "1 journée",
    location: "Clichy",
  },
  {
    title: "Isolation phonique chambre",
    category: "Isolation",
    imageSlug: "isolation-phonique",
    description:
      "Doublage acoustique des murs et plafond d'une chambre pour réduire les nuisances sonores. Pose de plaques de plâtre phoniques et laine minérale.",
    surface: "14m²",
    duration: "3 jours",
    location: "Paris 17e",
  },
  {
    title: "Peinture cage d'escalier",
    category: "Peinture",
    imageSlug: "cage-escalier",
    description:
      "Remise en peinture complète d'une cage d'escalier sur 4 niveaux : lessivage, enduit, sous-couche et deux couches de finition.",
    surface: "120m²",
    duration: "1 semaine",
    location: "Asnières-sur-Seine",
  },
  {
    title: "Rénovation cuisine ouverte",
    category: "Rénovation",
    imageSlug: "cuisine-ouverte",
    description:
      "Transformation d'une cuisine fermée en cuisine ouverte avec îlot central, plan de travail en granit et éclairage LED intégré.",
    surface: "15m²",
    duration: "4 semaines",
    location: "Puteaux",
  },
];

export const projectCategories = [
  "Tout",
  ...new Set(projects.map((p) => p.category)),
];
