import type { Metadata } from "next";
import { Montserrat, DM_Sans } from "next/font/google";
import "./globals.css";

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
  variable: "--font-heading",
  display: "swap",
});

const dmSans = DM_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-body",
  display: "swap",
});

export const metadata: Metadata = {
  title: "ID Home — Rénovation & Dépannage | Site en construction",
  description:
    "ID Home, votre expert en rénovation et dépannage d'urgence. " +
    "Plomberie, électricité, serrurerie — intervention rapide 7J/7. " +
    "Devis gratuit, prix transparents. Appelez le 06 58 97 14 39.",
  keywords: [
    "rénovation",
    "dépannage",
    "plomberie",
    "électricité",
    "serrurerie",
    "urgence",
    "7j/7",
    "devis gratuit",
  ],
  icons: {
    icon: "/idhome-favicon-logo.svg",
    shortcut: "/idhome-favicon-logo.svg",
    apple: "/idhome-favicon-logo.svg",
  },
  robots: {
    index: false,
    follow: false,
  },
  openGraph: {
    title: "ID Home — Rénovation & Dépannage",
    description:
      "Intervention rapide 7J/7. Plomberie, électricité, serrurerie. Devis gratuit.",
    locale: "fr_FR",
    type: "website",
    siteName: "ID Home",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr" className={`${montserrat.variable} ${dmSans.variable}`}>
      <body>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebPage",
              "name": "ID Home — Rénovation & Dépannage",
              "url": "https://idhome-travaux.fr",
              "creator": {
                "@type": "Organization",
                "name": "DMC Kreatif",
                "url": "https://dmckreatif.com",
              },
            }),
          }}
        />
        {children}
      </body>
    </html>
  );
}
