import Navigation from "@/components/Navigation";
import { Metadata } from "next";
import BreadcrumbSchema from "@/components/BreadcrumbSchema";

export const metadata: Metadata = {
  title: "Tarifs d'un récit de vie",
  description: "Une tarification transparente à la séance (55€/h). Maîtrisez votre budget avec un paiement échelonné. Estimation pour un récit complet ou ciblé.",
  alternates: { canonical: "/combien" },
  openGraph: {
    title: "Tarifs : combien coûte un récit de vie ?",
    description: "Tarification transparente à 55€/heure. Récit ciblé (~4 400 €) ou biographie complète (~6 600 € à 8 800 €). Paiement échelonné.",
    url: "/combien",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Tarifs : combien coûte un récit de vie ?",
    description: "Tarification transparente à 55€/heure. Paiement échelonné, sans engagement.",
  },
};

const serviceSchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "ProfessionalService",
      "@id": "https://delphinedelapeyriere.fr/#business",
      name: "Delphine de Lapeyrière, biographe familiale",
      url: "https://delphinedelapeyriere.fr",
    },
    {
      "@type": "Service",
      serviceType: "Biographie familiale",
      category: "Écriture biographique",
      inLanguage: "fr-FR",
      provider: { "@id": "https://delphinedelapeyriere.fr/#business" },
      areaServed: [
        { "@type": "City", name: "Versailles" },
        { "@type": "City", name: "Paris" },
        { "@type": "Country", name: "France" },
      ],
      description:
        "Écriture de votre biographie familiale par séances. Premier contact gratuit, tarif horaire de 55€, paiement échelonné. Récit ciblé ou biographie complète.",
      offers: [
        {
          "@type": "Offer",
          name: "Tarif horaire",
          priceCurrency: "EUR",
          price: "55",
          url: "https://delphinedelapeyriere.fr/combien",
          availability: "https://schema.org/InStock",
        },
        {
          "@type": "Offer",
          name: "Récit ciblé (Option Légère)",
          description:
            "Pour raconter une période précise (enfance, guerre, rencontre) ou un événement marquant.",
          priceCurrency: "EUR",
          price: "4400",
          priceSpecification: {
            "@type": "PriceSpecification",
            price: "4400",
            priceCurrency: "EUR",
            valueAddedTaxIncluded: true,
          },
          url: "https://delphinedelapeyriere.fr/combien",
        },
        {
          "@type": "Offer",
          name: "Biographie complète",
          description:
            "Le livre de toute une vie. De votre naissance à aujourd'hui, une œuvre exhaustive.",
          priceCurrency: "EUR",
          priceSpecification: {
            "@type": "PriceSpecification",
            minPrice: "6600",
            maxPrice: "8800",
            priceCurrency: "EUR",
          },
          url: "https://delphinedelapeyriere.fr/combien",
        },
      ],
    },
  ],
};

export default function Combien() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
      <BreadcrumbSchema
        items={[
          { name: "Accueil", url: "/" },
          { name: "Combien ?", url: "/combien" },
        ]}
      />
      <Navigation />

      {/* Hero Section : Portrait Élégant */}
      <section className="relative py-24 bg-cream overflow-hidden">
        {/* Décoration d'arrière-plan */}
        <div className="absolute top-0 right-0 w-full h-full opacity-10 pointer-events-none">
          <div className="absolute right-[-10%] top-[-10%] w-[50vw] h-[50vw] bg-gold/20 rounded-full blur-[100px]"></div>
        </div>

        <div className="container mx-auto px-6 max-w-4xl relative z-10">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-serif text-navy mb-8 leading-tight fade-in">
              Offrir le récit de votre vie à vos proches, c&apos;est leur transmettre un trésor.
            </h1>
            <div className="w-24 h-1 bg-gold mx-auto mb-8"></div>
          </div>
        </div>
      </section>

      {/* Le concept du tarif unique : Focus sur la clarté */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6 max-w-6xl">
          <div className="grid lg:grid-cols-2 gap-16 items-center">

            {/* Colonne Explicative */}
            <div>
              <div className="mb-6">
                <h2 className="text-4xl font-serif text-navy mb-4">
                  Un fonctionnement simple,<br />
                  <span className="text-gold italic">sans surprise.</span>
                </h2>
                {/* Séparateur signature */}
                <div className="w-16 h-0.5 bg-gold/50"></div>
              </div>
              <p className="text-lg text-navy-light mb-6 leading-relaxed">
                Parce que chaque histoire est unique, il est difficile de fixer un prix global à l&apos;avance.{" "}
                <strong>J&apos;ai donc opté pour une tarification à la séance.</strong> Cela vous offre une liberté totale :
                vous maîtrisez votre budget et la longueur de votre récit.
              </p>

              <ul className="space-y-6 mt-8">
                <li className="flex items-start">
                  <span className="flex-shrink-0 w-10 h-10 rounded-full bg-cream-dark flex items-center justify-center text-gold mr-4">
                    <span className="material-symbols-outlined">schedule</span>
                  </span>
                  <div>
                    <h3 className="text-xl font-serif font-bold text-navy">Travail facturé au temps réel</h3>
                    <p className="text-navy-light">Après 1h d&apos;entretien, il faut compter 7h de travail d&apos;écriture et de structuration.</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="flex-shrink-0 w-10 h-10 rounded-full bg-cream-dark flex items-center justify-center text-gold mr-4">
                    <span className="material-symbols-outlined">handshake</span>
                  </span>
                  <div>
                    <h3 className="text-xl font-serif font-bold text-navy">Paiement échelonné</h3>
                    <p className="text-navy-light">Vous ne réglez qu&apos;au fur et à mesure, à chaque séance. Vous pouvez arrêter quand vous le souhaitez.</p>
                  </div>
                </li>
              </ul>
            </div>

            {/* La Carte Tarifaire (Design Ticket/Carte) */}
            <div className="relative">
              <div className="absolute inset-0 bg-gold blur-2xl opacity-20 rounded-full"></div>
              <div className="relative bg-navy text-white p-10 rounded-3xl shadow-2xl text-center border border-white/10">
                <h3 className="text-2xl font-serif mb-2 text-cream">Le tarif horaire</h3>
                <div className="flex justify-center items-baseline gap-2 my-6">
                  <span className="text-6xl font-bold font-serif">55€ / heure</span>
                </div>

                <div className="w-full h-px bg-white/20 my-6"></div>

                <p className="text-lg mb-6 font-light">Pour mémoire</p>
                <ul className="text-left space-y-3 mb-8 px-4">
                  <li className="flex items-center gap-3">
                    <span className="material-symbols-outlined text-gold">timer</span>
                    <span>Un entretien = 8h (1h d&apos;entretien + 7h de travail)</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <span className="material-symbols-outlined text-gold">payments</span>
                    <span>Paiement échelonné au fil des entretiens</span>
                  </li>
                </ul>
                <p className="text-sm text-white/50 italic">
                  *La première séance est réglée à l&apos;avance.
                </p>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Section Scénarios : Aider à se projeter (Nouveau) */}
      <section className="py-20 bg-cream">
        <div className="container mx-auto px-6 max-w-5xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-serif text-navy mb-4">Quel budget prévoir au total ?</h2>
            {/* Séparateur signature */}
            <div className="w-16 h-0.5 bg-gold/50 mx-auto mb-6"></div>
            <p className="text-navy-light text-lg">Voici deux exemples fréquents pour vous aider à estimer votre projet.</p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 items-stretch">
            {/* Scénario 1 */}
            <a
              href="/contact"
              className="group relative bg-white p-8 rounded-2xl shadow-sm hover:shadow-2xl hover:-translate-y-2 hover:scale-[1.02] transition-all duration-300 flex flex-col h-full focus:outline-none focus-visible:ring-2 focus-visible:ring-gold focus-visible:ring-offset-2"
            >
              <div className="text-gold mb-4 font-bold tracking-wide uppercase text-sm">Option Légère</div>
              <h3 className="text-2xl font-serif text-navy mb-4">Le récit ciblé</h3>
              <p className="text-navy-light mb-6 min-h-[3rem]">
                Idéal pour raconter une période précise (enfance, guerre, rencontre) ou un événement marquant.
              </p>
              <div className="flex items-baseline gap-2 mb-2">
                <span className="text-3xl font-bold text-navy">~ 4 400 €</span>
              </div>
              <p className="text-sm text-gray-400 mb-2">Estimé sur 10 séances</p>

              <div className="mt-auto pt-5 mt-3 border-t border-gold/20 opacity-0 group-hover:opacity-100 group-focus-within:opacity-100 transition-opacity duration-300">
                <span className="inline-flex items-center justify-center gap-2 w-full px-6 py-3 rounded-full bg-navy text-white font-semibold group-hover:bg-gold group-hover:text-navy transition-colors">
                  Me contacter
                  <span className="material-symbols-outlined text-base">arrow_forward</span>
                </span>
              </div>
            </a>

            {/* Scénario 2 */}
            <a
              href="/contact"
              className="group relative bg-white p-8 rounded-2xl shadow-sm hover:shadow-2xl hover:-translate-y-2 hover:scale-[1.02] transition-all duration-300 flex flex-col h-full focus:outline-none focus-visible:ring-2 focus-visible:ring-gold focus-visible:ring-offset-2"
            >
              <div className="text-gold mb-4 font-bold tracking-wide uppercase text-sm">Le Choix Classique</div>
              <h3 className="text-2xl font-serif text-navy mb-4">La biographie complète</h3>
              <p className="text-navy-light mb-6 min-h-[3rem]">
                Le livre de toute une vie. De votre naissance à aujourd&apos;hui, une œuvre exhaustive et détaillée.
              </p>
              <div className="flex items-baseline gap-2 mb-2">
                <span className="text-3xl font-bold text-navy">~ 6 600 € à 8 800 €</span>
              </div>
              <p className="text-sm text-gray-400 mb-2">Estimé entre 15 et 20 séances</p>

              <div className="mt-auto pt-5 mt-3 border-t border-gold/20 opacity-0 group-hover:opacity-100 group-focus-within:opacity-100 transition-opacity duration-300">
                <span className="inline-flex items-center justify-center gap-2 w-full px-6 py-3 rounded-full bg-navy text-white font-semibold group-hover:bg-gold group-hover:text-navy transition-colors">
                  Me contacter
                  <span className="material-symbols-outlined text-base">arrow_forward</span>
                </span>
              </div>
            </a>
          </div>
        </div>
      </section>

      {/* Les Frais Annexes : Présentation sous forme de grille propre */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6 max-w-5xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-serif text-navy mb-4">Les coûts annexes à prévoir</h2>
            {/* Séparateur signature */}
            <div className="w-16 h-0.5 bg-gold/50 mx-auto"></div>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            {/* Impression */}
            <div className="flex gap-6">
              <div className="flex-shrink-0">
                <div className="w-12 h-12 bg-navy/5 rounded-xl flex items-center justify-center text-navy">
                  <span className="material-symbols-outlined text-2xl">menu_book</span>
                </div>
              </div>
              <div>
                <h3 className="text-xl font-serif text-navy mb-3 font-bold">L&apos;impression des livres</h3>
                <p className="text-navy-light leading-relaxed mb-4">
                  Ce coût est réglé directement à l&apos;imprimeur à la fin du projet. Le prix dépend du nombre de pages, de photos et de la qualité du papier.
                </p>
                <div className="bg-cream p-4 rounded-lg border border-gray-100">
                  <p className="text-sm font-bold text-navy mb-2">Exemples de tarifs unitaires :</p>
                  <ul className="text-sm text-navy-light space-y-2">
                    <li className="flex justify-between">
                      <span>Livre court (90 pages)</span>
                      <span className="font-semibold text-navy">~ 17 € / livre</span>
                    </li>
                    <li className="flex justify-between border-t border-gray-200 pt-2">
                      <span>Grand livre (460 pages)</span>
                      <span className="font-semibold text-navy">~ 22 € / livre</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Transport */}
            <div className="flex gap-6">
              <div className="flex-shrink-0">
                <div className="w-12 h-12 bg-navy/5 rounded-xl flex items-center justify-center text-navy">
                  <span className="material-symbols-outlined text-2xl">train</span>
                </div>
              </div>
              <div>
                <h3 className="text-xl font-serif text-navy mb-3 font-bold">Déplacements</h3>
                <p className="text-navy-light leading-relaxed mb-4">
                  Basée près de <strong>Versailles</strong>, je me déplace dans toute la France.
                </p>
                <p className="text-navy-light leading-relaxed">
                  Si vous résidez en dehors de la région parisienne, les frais de transport (train/voiture) et éventuellement d&apos;hébergement seront à votre charge. Nous pouvons aussi alterner avec des séances en visio pour réduire ces coûts.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Final : Sobre et Direct */}
      <section className="py-24 bg-navy relative overflow-hidden">
        {/* Élément décoratif d'arrière-plan */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-gold rounded-full mix-blend-overlay filter blur-3xl opacity-20 transform translate-x-1/2 -translate-y-1/2"></div>

        <div className="container mx-auto px-6 max-w-3xl text-center relative z-10">
          <h2 className="text-4xl font-serif text-white mb-6">
            Votre histoire mérite d&apos;être racontée
          </h2>
          <p className="text-xl text-cream/90 mb-10 font-light">
            Discutons simplement de votre projet. Le premier contact est gratuit et sans engagement.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/contact"
              className="bg-gold text-navy px-8 py-4 rounded-full font-bold hover:bg-white transition-all duration-300 shadow-lg hover:shadow-gold/20"
            >
              Me contacter
            </a>
            <a
              href="tel:+33619426686"
              className="px-8 py-4 rounded-full border border-white/30 text-white font-medium hover:bg-white/10 transition-all duration-300"
            >
              06 19 42 66 86
            </a>
          </div>
        </div>
      </section>
    </>
  );
}