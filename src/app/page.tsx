import Image from "next/image";
import {
  Droplets,
  Zap,
  KeyRound,
  Paintbrush,
  ThermometerSnowflake,
  Home,
  Phone,
  Mail,
  Clock,
  CheckCircle,
} from "lucide-react";

const services = [
  {
    icon: Droplets,
    name: "Plomberie",
    description: "Fuites, débouchage, installation sanitaire",
    urgent: true,
  },
  {
    icon: Zap,
    name: "Électricité",
    description: "Pannes, mise aux normes, installation",
    urgent: true,
  },
  {
    icon: KeyRound,
    name: "Serrurerie",
    description: "Ouverture de porte, changement de serrure",
    urgent: true,
  },
  {
    icon: Paintbrush,
    name: "Peinture",
    description: "Intérieure et extérieure, finitions soignées",
    urgent: false,
  },
  {
    icon: ThermometerSnowflake,
    name: "Isolation",
    description: "Thermique et phonique, économies d'énergie",
    urgent: false,
  },
  {
    icon: Home,
    name: "Rénovation Complète",
    description: "Cuisine, salle de bain, aménagement intérieur",
    urgent: false,
  },
];

const trustBadges = [
  { text: "Devis gratuit" },
  { text: "Prix transparents" },
  { text: "Intervention rapide" },
];

export default function MaintenancePage() {
  return (
    <div className="gradient-mesh min-h-screen flex flex-col">
      {/* Header */}
      <header className="w-full py-8 md:py-10 px-4 flex justify-center animate-fade-in">
        <Image
          src="/idhome-header-logo-white-orange.svg"
          alt="ID Home — Rénovation & Dépannage"
          width={500}
          height={140}
          priority
          className="h-20 sm:h-24 md:h-28 lg:h-32 w-auto"
        />
      </header>

      {/* Main Content */}
      <main className="flex-1 flex flex-col items-center justify-center px-4 py-8 md:py-12">
        {/* Hero Section */}
        <section className="text-center mb-12 md:mb-16">
          {/* Construction badge */}
          <div
            className="animate-fade-in-up inline-flex items-center gap-2 px-4 py-2 rounded-full border border-id-orange/20 bg-id-orange/5 mb-8"
            style={{ animationDelay: "100ms" }}
          >
            <span className="w-2 h-2 rounded-full bg-id-orange animate-pulse" />
            <span className="text-sm text-id-orange font-body tracking-wide uppercase">
              Site en cours de construction
            </span>
          </div>

          {/* Main heading */}
          <h1
            className="animate-fade-in-up font-heading font-extrabold text-4xl sm:text-5xl md:text-6xl lg:text-7xl leading-tight mb-4"
            style={{ animationDelay: "200ms" }}
          >
            Intervention Rapide
            <br />
            <span className="text-id-orange">7J/7</span>
          </h1>

          {/* Subtitle */}
          <p
            className="animate-fade-in-up font-body text-lg md:text-xl text-gray-400 max-w-xl mx-auto"
            style={{ animationDelay: "300ms" }}
          >
            Rénovation &amp; Dépannage d&apos;urgence pour votre habitation
          </p>
        </section>

        {/* Services Grid */}
        <section className="w-full max-w-4xl mx-auto mb-12 md:mb-16">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {services.map((service, index) => {
              const Icon = service.icon;
              return (
                <div
                  key={service.name}
                  className="glass-card rounded-2xl p-6 text-center animate-fade-in-up"
                  style={{ animationDelay: `${400 + index * 100}ms` }}
                >
                  <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-id-orange/10 mb-4">
                    <Icon className="w-6 h-6 text-id-orange" />
                  </div>
                  <h3 className="font-heading font-semibold text-lg mb-1">
                    {service.name}
                  </h3>
                  {service.urgent && (
                    <span className="inline-block text-xs text-id-orange font-medium bg-id-orange/10 px-2 py-0.5 rounded-full mb-2">
                      Urgence 7J/7
                    </span>
                  )}
                  <p className="font-body text-sm text-gray-400">
                    {service.description}
                  </p>
                </div>
              );
            })}
          </div>
        </section>

        {/* CTA Section */}
        <section
          className="text-center mb-12 md:mb-16 animate-fade-in-up"
          style={{ animationDelay: "1000ms" }}
        >
          {/* Phone CTA */}
          <a
            href="tel:+33658971439"
            className="inline-flex items-center gap-3 px-8 py-4 bg-id-orange hover:bg-id-orange-dark text-white font-heading font-bold text-xl md:text-2xl rounded-full transition-colors duration-300 animate-pulse-glow"
            style={{ animationDelay: "1000ms" }}
          >
            <Phone className="w-6 h-6" />
            06 58 97 14 39
          </a>

          {/* Contact info */}
          <div className="mt-6 flex flex-col sm:flex-row items-center justify-center gap-4 text-gray-400">
            <a
              href="mailto:contact@idhome-travaux.fr"
              className="inline-flex items-center gap-2 hover:text-id-orange transition-colors"
            >
              <Mail className="w-4 h-4" />
              contact@idhome-travaux.fr
            </a>
            <span className="hidden sm:inline text-gray-600">|</span>
            <span className="inline-flex items-center gap-2">
              <Clock className="w-4 h-4" />
              Du lundi au samedi, 9h – 18h
            </span>
          </div>
        </section>

        {/* Trust Badges */}
        <section
          className="flex flex-wrap justify-center gap-6 mb-8 animate-fade-in-up"
          style={{ animationDelay: "1100ms" }}
        >
          {trustBadges.map((badge) => (
            <div
              key={badge.text}
              className="flex items-center gap-2 text-gray-300"
            >
              <CheckCircle className="w-5 h-5 text-id-orange" />
              <span className="font-body text-sm font-medium">
                {badge.text}
              </span>
            </div>
          ))}
        </section>
      </main>

      {/* Footer */}
      <footer
        className="w-full py-8 px-4 border-t border-white/5 animate-fade-in"
        style={{ animationDelay: "1200ms" }}
      >
        <div className="flex flex-col items-center gap-4">
          <Image
            src="/idhome-logo-white-orange.svg"
            alt="ID Home"
            width={200}
            height={70}
            className="h-12 sm:h-14 md:h-16 w-auto opacity-60"
          />
          <p className="font-body text-xs text-gray-500">
            &copy; {new Date().getFullYear()} ID Home — Tous droits réservés
          </p>
          <a
            href="https://dmckreatif.com"
            target="_blank"
            rel="noopener noreferrer"
            className="font-body text-[10px] text-gray-600 hover:text-gray-400 transition-colors"
          >
            Créé par DMC Kreatif
          </a>
        </div>
      </footer>
    </div>
  );
}
