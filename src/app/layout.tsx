import type { Metadata } from "next";
import { Montserrat, DM_Sans } from "next/font/google";
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import MobileBottomBar from "@/components/layout/MobileBottomBar";
import FloatingWhatsApp from "@/components/ui/FloatingWhatsApp";
import JsonLd from "@/components/seo/JsonLd";
import { createLocalBusinessSchema } from "@/components/seo/schemas";
import { COMPANY, LOGOS, CREATOR, SITE_URL } from "@/lib/constants";

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "900"],
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
  metadataBase: new URL(SITE_URL),
  title: {
    default: "ID Home — Rénovation & Dépannage d'urgence 7J/7 Levallois-Perret & Île-de-France",
    template: "%s | ID Home",
  },
  description: COMPANY.description,
  keywords: [
    "rénovation",
    "dépannage",
    "dépannage urgence",
    "plomberie",
    "plombier urgence",
    "électricité",
    "électricien urgence",
    "serrurerie",
    "serrurier urgence",
    "peinture",
    "isolation",
    "urgence 7j/7",
    "devis gratuit",
    "travaux maison",
    "rénovation intérieure",
    "Levallois-Perret",
    "Île-de-France",
    "Hauts-de-Seine",
    "dépannage 92",
    "plombier Levallois-Perret",
    "électricien Levallois-Perret",
    "serrurier Levallois-Perret",
  ],
  icons: {
    icon: LOGOS.favicon,
    shortcut: LOGOS.favicon,
    apple: LOGOS.favicon,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    title: "ID Home — Rénovation & Dépannage d'urgence 7J/7",
    description: COMPANY.description,
    url: SITE_URL,
    siteName: "ID Home",
    locale: "fr_FR",
    type: "website",
    images: [
      {
        url: "/images/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "ID Home — Rénovation & Dépannage d'urgence 7J/7",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "ID Home — Rénovation & Dépannage d'urgence 7J/7",
    description: COMPANY.description,
    images: ["/images/og-image.jpg"],
  },
  alternates: {
    canonical: SITE_URL,
    languages: {
      "fr-FR": SITE_URL,
    },
  },
  authors: [{ name: CREATOR.name, url: CREATOR.url }],
  creator: CREATOR.name,
  publisher: COMPANY.name,
  other: {
    "geo.region": "FR",
    "geo.placename": "France",
    "designer": CREATOR.name,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr" className={`${montserrat.variable} ${dmSans.variable}`}>
      <head>
        <link rel="author" href="/humans.txt" />
        <meta name="author" content={CREATOR.name} />
      </head>
      <body>
        {/* Schema JSON-LD LocalBusiness global */}
        <JsonLd data={createLocalBusinessSchema()} />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebSite",
              name: COMPANY.name,
              url: SITE_URL,
              creator: {
                "@type": "Organization",
                name: CREATOR.name,
                url: CREATOR.url,
              },
            }),
          }}
        />

        <Header />
        <main className="pt-[80px] lg:pt-[104px]">{children}</main>
        <Footer />

        {/* Éléments flottants */}
        <FloatingWhatsApp />
        <MobileBottomBar />

        {/* Spacer pour la barre mobile en bas */}
        <div className="h-14 lg:hidden" aria-hidden="true" />
      </body>
    </html>
  );
}
