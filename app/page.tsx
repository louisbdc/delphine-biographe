import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import Introduction from "@/components/Introduction";
import Services from "@/components/Services";
import Testimonial from "@/components/Testimonial";
import { testimonials } from "@/lib/data";
import Contact from "@/components/Contact";

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@graph": [
              {
                "@type": "WebSite",
                "@id": "https://delphinedelapeyriere.fr/#website",
                "url": "https://delphinedelapeyriere.fr",
                "name": "Delphine de Lapeyrière, biographe familiale",
                "inLanguage": "fr-FR",
                "publisher": { "@id": "https://delphinedelapeyriere.fr/#person" },
              },
              {
                "@type": "Person",
                "@id": "https://delphinedelapeyriere.fr/#person",
                "name": "Delphine de Lapeyrière",
                "jobTitle": "Biographe familiale",
                "description": "Biographe familiale. Après une vie de femme de marin, j'ai suivi la formation \"Devenir biographe\" d'Anne-Sylvie Pinel pour me consacrer à l'écriture des récits de vie et des mémoires familiales.",
                "image": "https://delphinedelapeyriere.fr/Delphine.jpg",
                "url": "https://delphinedelapeyriere.fr/qui-suis-je",
                "knowsAbout": [
                  "Biographie familiale",
                  "Récit de vie",
                  "Mémoires",
                  "Écriture biographique",
                  "Transmission générationnelle",
                  "Histoire familiale",
                ],
                "knowsLanguage": ["fr"],
                "alumniOf": {
                  "@type": "EducationalOccupationalProgram",
                  "name": "Devenir biographe",
                  "provider": {
                    "@type": "Person",
                    "name": "Anne-Sylvie Pinel",
                  },
                },
                "homeLocation": {
                  "@type": "Place",
                  "address": {
                    "@type": "PostalAddress",
                    "addressLocality": "Versailles",
                    "addressRegion": "Île-de-France",
                    "addressCountry": "FR",
                  },
                },
                "areaServed": [
                  { "@type": "City", "name": "Versailles" },
                  { "@type": "City", "name": "Paris" },
                  { "@type": "Country", "name": "France" },
                ],
              },
              {
                "@type": "ProfessionalService",
                "@id": "https://delphinedelapeyriere.fr/#business",
                "name": "Delphine de Lapeyrière, biographe familiale",
                "alternateName": "Delphine, biographe",
                "image": "https://delphinedelapeyriere.fr/delphine_first_page.jpg",
                "logo": "https://delphinedelapeyriere.fr/logo.png",
                "description": "Biographe familiale basée près de Versailles. J'écris le livre de votre vie : récits de vie, mémoires, transmission. Interventions à Paris et partout en France.",
                "url": "https://delphinedelapeyriere.fr",
                "telephone": "+33619426686",
                "email": "delphine.biographe@gmail.com",
                "priceRange": "€€",
                "founder": { "@id": "https://delphinedelapeyriere.fr/#person" },
                "address": {
                  "@type": "PostalAddress",
                  "addressLocality": "Versailles",
                  "addressRegion": "Île-de-France",
                  "postalCode": "78000",
                  "addressCountry": "FR",
                },
                "geo": {
                  "@type": "GeoCoordinates",
                  "latitude": 48.8049,
                  "longitude": 2.1204,
                },
                "areaServed": [
                  { "@type": "City", "name": "Versailles" },
                  { "@type": "City", "name": "Paris" },
                  { "@type": "Country", "name": "France" },
                ],
                "openingHoursSpecification": [
                  {
                    "@type": "OpeningHoursSpecification",
                    "dayOfWeek": [
                      "Monday",
                      "Tuesday",
                      "Wednesday",
                      "Thursday",
                      "Friday",
                    ],
                    "opens": "09:00",
                    "closes": "18:00",
                  },
                ],
                "knowsLanguage": ["fr"],
                "inLanguage": "fr-FR",
                "serviceType": [
                  "Biographie familiale",
                  "Récit de vie",
                  "Écriture de mémoires",
                ],
                "review": testimonials.map((t) => ({
                  "@type": "Review",
                  "reviewBody": t.text,
                  "author": {
                    "@type": "Person",
                    "name": t.author,
                  },
                  "itemReviewed": {
                    "@id": "https://delphinedelapeyriere.fr/#business",
                  },
                })),
              },
            ],
          }),
        }}
      />
      <Navigation />
      <Hero />
      <Introduction />
      <Services />
      <Testimonial />
      <Contact />
    </>
  );
}

