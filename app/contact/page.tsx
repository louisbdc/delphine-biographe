import Navigation from "@/components/Navigation";
import ContactCard from "@/components/ContactCard";
import { Metadata } from "next";
import BreadcrumbSchema from "@/components/BreadcrumbSchema";

export const metadata: Metadata = {
  title: "Contact",
  description: "Prenez contact pour une première discussion gratuite et sans engagement. Située près de Versailles, je me déplace à Paris et partout en France.",
  alternates: { canonical: "/contact" },
  openGraph: {
    title: "Contactez Delphine, biographe familiale",
    description: "Premier contact gratuit et sans engagement. Située près de Versailles, je me déplace à Paris et partout en France.",
    url: "/contact",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Contactez Delphine, biographe familiale",
    description: "Premier contact gratuit et sans engagement.",
  },
};

const contactSchema = {
  "@context": "https://schema.org",
  "@type": "ContactPage",
  url: "https://delphinedelapeyriere.fr/contact",
  name: "Contact",
  inLanguage: "fr-FR",
  about: { "@id": "https://delphinedelapeyriere.fr/#business" },
  mainEntity: { "@id": "https://delphinedelapeyriere.fr/#person" },
};

export default function ContactPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(contactSchema) }}
      />
      <BreadcrumbSchema
        items={[
          { name: "Accueil", url: "/" },
          { name: "Contact", url: "/contact" },
        ]}
      />
      <Navigation />

      <main className="min-h-screen bg-cream flex items-center justify-center py-24 px-4 sm:px-6">

        {/* CONTENEUR PRINCIPAL : Plus large (max-w-6xl) pour donner de l'espace */}
        <ContactCard className="w-full max-w-6xl min-h-[700px]" />
      </main>
    </>
  );
}