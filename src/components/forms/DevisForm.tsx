"use client";

// ─────────────────────────────────────────────
// ID Home — Formulaire de devis multi-étapes
// ─────────────────────────────────────────────

import { useState } from "react";
import {
  Droplets,
  Zap,
  KeyRound,
  Paintbrush,
  ThermometerSnowflake,
  Home,
  ArrowLeft,
  ArrowRight,
  Send,
  CheckCircle,
} from "lucide-react";
import clsx from "clsx";
import Button from "@/components/ui/Button";

const serviceOptions = [
  { id: "plomberie", label: "Plomberie", icon: Droplets },
  { id: "electricite", label: "Électricité", icon: Zap },
  { id: "serrurerie", label: "Serrurerie", icon: KeyRound },
  { id: "renovation", label: "Rénovation", icon: Home },
  { id: "peinture", label: "Peinture", icon: Paintbrush },
  { id: "isolation", label: "Isolation", icon: ThermometerSnowflake },
];

const steps = [
  "Choix du service",
  "Description des travaux",
  "Vos coordonnées",
  "Confirmation",
];

export default function DevisForm() {
  const [step, setStep] = useState(0);
  const [selectedService, setSelectedService] = useState("");
  const [description, setDescription] = useState("");
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const canNext = () => {
    if (step === 0) return selectedService !== "";
    if (step === 1) return description.trim().length > 10;
    if (step === 2) return name.trim() !== "" && phone.trim() !== "";
    return true;
  };

  if (submitted) {
    return (
      <div className="glass-card p-8 md:p-12 text-center">
        <CheckCircle className="w-16 h-16 text-id-orange mx-auto mb-4" />
        <h3 className="font-heading font-bold text-2xl text-id-charcoal mb-2">
          Demande envoyée !
        </h3>
        <p className="font-body text-gray-500 max-w-md mx-auto">
          Merci pour votre demande de devis. Nous reviendrons vers vous dans les
          24 heures avec une proposition détaillée.
        </p>
      </div>
    );
  }

  return (
    <div className="glass-card p-6 md:p-8">
      {/* Barre de progression */}
      <div className="mb-8">
        <div className="flex items-center justify-between mb-3">
          {steps.map((label, i) => (
            <div
              key={label}
              className={clsx(
                "flex items-center gap-2 text-xs font-medium",
                i <= step ? "text-id-orange" : "text-gray-300"
              )}
            >
              <span
                className={clsx(
                  "w-7 h-7 rounded-full flex items-center justify-center text-xs font-bold",
                  i < step
                    ? "bg-id-orange text-white"
                    : i === step
                    ? "bg-id-orange/10 text-id-orange border-2 border-id-orange"
                    : "bg-gray-100 text-gray-400"
                )}
              >
                {i < step ? "✓" : i + 1}
              </span>
              <span className="hidden sm:inline">{label}</span>
            </div>
          ))}
        </div>
        <div className="w-full bg-gray-100 rounded-full h-1.5">
          <div
            className="bg-id-orange h-1.5 rounded-full transition-all duration-500"
            style={{ width: `${((step + 1) / steps.length) * 100}%` }}
          />
        </div>
      </div>

      {/* Étape 1 : Sélection du service */}
      {step === 0 && (
        <div>
          <h3 className="font-heading font-bold text-xl text-id-charcoal mb-6">
            Quel service vous intéresse ?
          </h3>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
            {serviceOptions.map((svc) => {
              const Icon = svc.icon;
              return (
                <button
                  key={svc.id}
                  onClick={() => setSelectedService(svc.id)}
                  className={clsx(
                    "flex flex-col items-center gap-3 p-5 rounded-xl border-2 transition-all",
                    selectedService === svc.id
                      ? "border-id-orange bg-id-orange/5"
                      : "border-gray-100 hover:border-id-orange/30"
                  )}
                >
                  <Icon
                    className={clsx(
                      "w-8 h-8",
                      selectedService === svc.id ? "text-id-orange" : "text-gray-400"
                    )}
                  />
                  <span
                    className={clsx(
                      "font-heading font-semibold text-sm",
                      selectedService === svc.id ? "text-id-orange" : "text-id-charcoal"
                    )}
                  >
                    {svc.label}
                  </span>
                </button>
              );
            })}
          </div>
        </div>
      )}

      {/* Étape 2 : Description */}
      {step === 1 && (
        <div>
          <h3 className="font-heading font-bold text-xl text-id-charcoal mb-2">
            Décrivez vos travaux
          </h3>
          <p className="font-body text-sm text-gray-500 mb-6">
            Plus votre description est détaillée, plus notre devis sera précis.
          </p>
          <textarea
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            rows={6}
            className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-white text-id-charcoal font-body text-sm focus:border-id-orange focus:ring-2 focus:ring-id-orange/20 outline-none transition-all resize-y"
            placeholder="Exemple : J'ai une fuite sous l'évier de ma cuisine. L'eau coule depuis ce matin..."
          />
        </div>
      )}

      {/* Étape 3 : Coordonnées */}
      {step === 2 && (
        <div>
          <h3 className="font-heading font-bold text-xl text-id-charcoal mb-6">
            Vos coordonnées
          </h3>
          <div className="space-y-4">
            <div>
              <label
                htmlFor="devis-name"
                className="block font-heading font-medium text-sm text-id-charcoal mb-1.5"
              >
                Nom complet *
              </label>
              <input
                type="text"
                id="devis-name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
                className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-white text-id-charcoal font-body text-sm focus:border-id-orange focus:ring-2 focus:ring-id-orange/20 outline-none transition-all"
                placeholder="Votre nom"
              />
            </div>
            <div>
              <label
                htmlFor="devis-phone"
                className="block font-heading font-medium text-sm text-id-charcoal mb-1.5"
              >
                Téléphone *
              </label>
              <input
                type="tel"
                id="devis-phone"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                required
                className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-white text-id-charcoal font-body text-sm focus:border-id-orange focus:ring-2 focus:ring-id-orange/20 outline-none transition-all"
                placeholder="06 00 00 00 00"
              />
            </div>
            <div>
              <label
                htmlFor="devis-email"
                className="block font-heading font-medium text-sm text-id-charcoal mb-1.5"
              >
                Email
              </label>
              <input
                type="email"
                id="devis-email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-white text-id-charcoal font-body text-sm focus:border-id-orange focus:ring-2 focus:ring-id-orange/20 outline-none transition-all"
                placeholder="votre@email.fr"
              />
            </div>
          </div>
        </div>
      )}

      {/* Étape 4 : Récapitulatif */}
      {step === 3 && (
        <div>
          <h3 className="font-heading font-bold text-xl text-id-charcoal mb-6">
            Récapitulatif de votre demande
          </h3>
          <div className="space-y-4 bg-id-cream/50 rounded-xl p-5">
            <div>
              <span className="font-heading font-semibold text-sm text-id-gray">
                Service :
              </span>
              <span className="ml-2 font-body text-sm text-id-charcoal capitalize">
                {serviceOptions.find((s) => s.id === selectedService)?.label}
              </span>
            </div>
            <div>
              <span className="font-heading font-semibold text-sm text-id-gray">
                Description :
              </span>
              <p className="mt-1 font-body text-sm text-id-charcoal">
                {description}
              </p>
            </div>
            <div>
              <span className="font-heading font-semibold text-sm text-id-gray">
                Nom :
              </span>
              <span className="ml-2 font-body text-sm text-id-charcoal">{name}</span>
            </div>
            <div>
              <span className="font-heading font-semibold text-sm text-id-gray">
                Téléphone :
              </span>
              <span className="ml-2 font-body text-sm text-id-charcoal">{phone}</span>
            </div>
            {email && (
              <div>
                <span className="font-heading font-semibold text-sm text-id-gray">
                  Email :
                </span>
                <span className="ml-2 font-body text-sm text-id-charcoal">{email}</span>
              </div>
            )}
          </div>
        </div>
      )}

      {/* Boutons de navigation */}
      <div className="flex items-center justify-between mt-8">
        {step > 0 ? (
          <Button
            variant="ghost"
            size="md"
            onClick={() => setStep(step - 1)}
            icon={<ArrowLeft className="w-4 h-4" />}
          >
            Retour
          </Button>
        ) : (
          <div />
        )}

        {step < 3 ? (
          <Button
            variant="primary"
            size="md"
            onClick={() => setStep(step + 1)}
            disabled={!canNext()}
            icon={<ArrowRight className="w-4 h-4" />}
            iconPosition="right"
          >
            Suivant
          </Button>
        ) : (
          <Button
            variant="primary"
            size="lg"
            onClick={() => setSubmitted(true)}
            icon={<Send className="w-5 h-5" />}
          >
            Envoyer ma demande
          </Button>
        )}
      </div>
    </div>
  );
}
