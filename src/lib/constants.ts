// ─────────────────────────────────────────────
// ID Home — Constantes du site
// ─────────────────────────────────────────────

export const SITE_URL = "https://idhome-travaux.fr";
export const SITE_NAME = "ID Home";
export const SITE_TAGLINE = "Rénovation & Dépannage";

export const COMPANY = {
  name: "ID Home",
  legalName: "ID Home",
  tagline: "Rénovation & Dépannage",
  description:
    "Votre expert en rénovation et dépannage d'urgence. Plomberie, électricité, serrurerie — intervention rapide 7J/7.",
  phone: "06 58 97 14 39",
  phoneHref: "tel:+33658971439",
  email: "contact@idhome-travaux.fr",
  emailHref: "mailto:contact@idhome-travaux.fr",
  whatsapp: "https://wa.me/33658971439",
  website: "https://idhome-travaux.fr",
  hours: "Du lundi au samedi, 9h – 18h",
  hoursUrgency: "7J/7 pour les urgences",
  address: {
    street: "1 Boulevard Bineau",
    postalCode: "92300",
    city: "Levallois-Perret",
    region: "Île-de-France",
    country: "France",
    full: "1 Boulevard Bineau, 92300 Levallois-Perret",
  },
} as const;

export const CREATOR = {
  name: "DMC Kreatif",
  url: "https://dmckreatif.com",
} as const;

export const LOGOS = {
  favicon: "/idhome-favicon-logo.svg",
  headerLight: "/idhome-header-logo-black-orange.svg", // Pour fond clair
  headerDark: "/idhome-header-logo-white-orange.svg",  // Pour fond sombre
  headerWhite: "/idhome-header-logo-white.svg",        // Header logo tout blanc
  headerBlack: "/idhome-header-logo-black.svg",        // Header logo tout noir
  smallLight: "/idhome-logo-black-orange.svg",          // Petit logo fond clair
  smallDark: "/idhome-logo-white-orange.svg",           // Petit logo fond sombre
  white: "/idhome-logo-white.svg",
  black: "/idhome-logo-black.svg",
} as const;

export const SOCIAL_LINKS = [
  { label: "Facebook", href: "https://facebook.com/idhome.renovation", icon: "facebook" },
  { label: "Instagram", href: "https://instagram.com/idhome.renovation", icon: "instagram" },
  { label: "WhatsApp", href: COMPANY.whatsapp, icon: "whatsapp" },
] as const;

interface NavLink {
  label: string;
  href: string;
  children?: { label: string; href: string }[];
}

export const NAV_LINKS: NavLink[] = [
  { label: "Accueil", href: "/" },
  {
    label: "Services",
    href: "/services",
    children: [
      { label: "Plomberie", href: "/services/plomberie" },
      { label: "Électricité", href: "/services/electricite" },
      { label: "Serrurerie", href: "/services/serrurerie" },
      { label: "Rénovation", href: "/services/renovation" },
      { label: "Peinture", href: "/services/peinture" },
      { label: "Isolation", href: "/services/isolation" },
    ],
  },
  { label: "Réalisations", href: "/realisations" },
  { label: "À propos", href: "/a-propos" },
  { label: "Blog", href: "/blog" },
  { label: "Contact", href: "/contact" },
];

export const TRUST_BADGES = [
  { text: "Devis gratuit", icon: "clipboard-check" },
  { text: "Prix transparents", icon: "shield-check" },
  { text: "Intervention 7J/7", icon: "clock" },
  { text: "Artisans qualifiés", icon: "badge-check" },
] as const;

export const STATS = [
  { value: "10+", label: "Années d'expérience", suffix: "ans" },
  { value: "5000+", label: "Interventions réalisées" },
  { value: "98%", label: "Clients satisfaits" },
] as const;

export const TESTIMONIALS = [
  {
    name: "Marie L.",
    location: "Paris",
    rating: 5,
    text: "Intervention rapide et professionnelle pour une fuite d'eau urgente. L'équipe est arrivée en moins d'une heure. Je recommande vivement !",
    service: "Plomberie",
  },
  {
    name: "Thomas D.",
    location: "Île-de-France",
    rating: 5,
    text: "Excellent travail de rénovation de notre salle de bain. Le résultat dépasse nos attentes. Prix honnête et respect des délais.",
    service: "Rénovation",
  },
  {
    name: "Sophie M.",
    location: "Paris",
    rating: 5,
    text: "Problème de serrure résolu rapidement un dimanche soir. Très professionnel, tarif transparent annoncé dès le départ. Merci !",
    service: "Serrurerie",
  },
  {
    name: "Laurent K.",
    location: "Levallois-Perret",
    rating: 5,
    text: "Panne électrique totale un soir d'hiver. L'électricien d'ID Home est intervenu rapidement et a tout remis en ordre. Très professionnel et prix correct.",
    service: "Électricité",
  },
  {
    name: "Isabelle F.",
    location: "Neuilly-sur-Seine",
    rating: 5,
    text: "Peinture complète de notre appartement en une semaine. Travail soigné, couleurs parfaites et l'équipe a laissé l'appartement impeccable. Bravo !",
    service: "Peinture",
  },
  {
    name: "Christophe et Anne V.",
    location: "Courbevoie",
    rating: 5,
    text: "Isolation des combles et remplacement des fenêtres. Notre facture de chauffage a baissé de 35%. Un investissement rentable grâce à ID Home.",
    service: "Isolation",
  },
] as const;
