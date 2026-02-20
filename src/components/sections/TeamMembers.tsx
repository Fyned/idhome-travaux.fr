// ─────────────────────────────────────────────
// ID Home — Section équipe
// ─────────────────────────────────────────────

import { User } from "lucide-react";

const team = [
  {
    name: "Mehmet K.",
    role: "Fondateur & Gérant",
    bio: "Plus de 15 ans d'expérience dans le bâtiment. Passionné par la satisfaction client et la qualité du travail bien fait.",
  },
  {
    name: "David L.",
    role: "Chef d'équipe — Plomberie & Électricité",
    bio: "Artisan qualifié spécialisé dans le dépannage d'urgence. Intervient rapidement avec précision et efficacité.",
  },
  {
    name: "Karim B.",
    role: "Chef d'équipe — Rénovation",
    bio: "Expert en rénovation intérieure. Gère les chantiers de A à Z avec un souci du détail et des finitions impeccables.",
  },
  {
    name: "Sarah M.",
    role: "Responsable clientèle",
    bio: "Votre interlocutrice privilégiée. Organise les interventions, suit vos projets et veille à votre entière satisfaction.",
  },
];

export default function TeamMembers() {
  return (
    <section className="section-padding-sm">
      <div className="container-wide">
        <div className="text-center mb-10">
          <h2 className="font-heading font-bold text-2xl md:text-3xl text-id-charcoal mb-4">
            Notre <span className="text-id-orange">équipe</span>
          </h2>
          <p className="font-body text-gray-500 max-w-2xl mx-auto">
            Une équipe soudée et expérimentée, dédiée à votre satisfaction.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {team.map((member) => (
            <div key={member.name} className="glass-card p-6 text-center">
              <div className="w-20 h-20 rounded-full bg-id-orange/10 flex items-center justify-center mx-auto mb-4">
                <User className="w-10 h-10 text-id-orange" />
              </div>
              <h3 className="font-heading font-bold text-id-charcoal mb-1">
                {member.name}
              </h3>
              <p className="font-body text-xs text-id-orange font-semibold mb-3">
                {member.role}
              </p>
              <p className="font-body text-sm text-gray-500 leading-relaxed">
                {member.bio}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
