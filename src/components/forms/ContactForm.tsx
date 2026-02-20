"use client";

// ─────────────────────────────────────────────
// ID Home — Formulaire de contact (Client Component)
// ─────────────────────────────────────────────

import { useState } from "react";
import { Send, CheckCircle } from "lucide-react";
import Button from "@/components/ui/Button";

export default function ContactForm() {
  const [submitted, setSubmitted] = useState(false);

  if (submitted) {
    return (
      <div className="glass-card p-8 md:p-12 text-center">
        <CheckCircle className="w-16 h-16 text-id-orange mx-auto mb-4" />
        <h3 className="font-heading font-bold text-2xl text-id-charcoal mb-2">
          Message envoyé !
        </h3>
        <p className="font-body text-gray-500">
          Merci pour votre message. Nous vous répondrons dans les plus brefs
          délais.
        </p>
      </div>
    );
  }

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        setSubmitted(true);
      }}
      className="glass-card p-6 md:p-8 space-y-5"
    >
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        {/* Nom */}
        <div>
          <label
            htmlFor="name"
            className="block font-heading font-medium text-sm text-id-charcoal mb-1.5"
          >
            Nom complet *
          </label>
          <input
            type="text"
            id="name"
            name="name"
            required
            className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-white text-id-charcoal font-body text-sm focus:border-id-orange focus:ring-2 focus:ring-id-orange/20 outline-none transition-all"
            placeholder="Votre nom"
          />
        </div>

        {/* Téléphone */}
        <div>
          <label
            htmlFor="phone"
            className="block font-heading font-medium text-sm text-id-charcoal mb-1.5"
          >
            Téléphone *
          </label>
          <input
            type="tel"
            id="phone"
            name="phone"
            required
            className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-white text-id-charcoal font-body text-sm focus:border-id-orange focus:ring-2 focus:ring-id-orange/20 outline-none transition-all"
            placeholder="06 00 00 00 00"
          />
        </div>
      </div>

      {/* Email */}
      <div>
        <label
          htmlFor="email"
          className="block font-heading font-medium text-sm text-id-charcoal mb-1.5"
        >
          Email
        </label>
        <input
          type="email"
          id="email"
          name="email"
          className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-white text-id-charcoal font-body text-sm focus:border-id-orange focus:ring-2 focus:ring-id-orange/20 outline-none transition-all"
          placeholder="votre@email.fr"
        />
      </div>

      {/* Sujet */}
      <div>
        <label
          htmlFor="subject"
          className="block font-heading font-medium text-sm text-id-charcoal mb-1.5"
        >
          Sujet *
        </label>
        <select
          id="subject"
          name="subject"
          required
          className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-white text-id-charcoal font-body text-sm focus:border-id-orange focus:ring-2 focus:ring-id-orange/20 outline-none transition-all"
        >
          <option value="">Sélectionnez un sujet</option>
          <option value="urgence">Dépannage d&apos;urgence</option>
          <option value="devis">Demande de devis</option>
          <option value="renovation">Projet de rénovation</option>
          <option value="info">Demande d&apos;information</option>
          <option value="autre">Autre</option>
        </select>
      </div>

      {/* Message */}
      <div>
        <label
          htmlFor="message"
          className="block font-heading font-medium text-sm text-id-charcoal mb-1.5"
        >
          Message *
        </label>
        <textarea
          id="message"
          name="message"
          required
          rows={5}
          className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-white text-id-charcoal font-body text-sm focus:border-id-orange focus:ring-2 focus:ring-id-orange/20 outline-none transition-all resize-y"
          placeholder="Décrivez votre besoin..."
        />
      </div>

      <Button
        type="submit"
        variant="primary"
        size="lg"
        icon={<Send className="w-5 h-5" />}
        className="w-full sm:w-auto"
      >
        Envoyer le message
      </Button>
    </form>
  );
}
