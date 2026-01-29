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
            "@type": "ProfessionalService",
            "name": "Delphine de Lapeyrière",
            "image": "https://delphinedelapeyriere.fr/delphine_first_page.jpg",
            "description": "Biographe familiale à Versailles et Paris. Écriture de récits de vie, mémoires et transmission.",
            "url": "https://delphinedelapeyriere.fr",
            "telephone": "06 19 42 66 86",
            "email": "delphine.biographe@gmail.com",
            "priceRange": "Sur devis",
            "address": {
              "@type": "PostalAddress",
              "addressLocality": "Versailles",
              "addressRegion": "Île-de-France",
              "addressCountry": "FR"
            },
            "areaServed": [
              {
                "@type": "City",
                "name": "Versailles"
              },
              {
                "@type": "City",
                "name": "Paris"
              }
            ],
            "review": testimonials.map((t) => ({
              "@type": "Review",
              "reviewBody": t.text,
              "author": {
                "@type": "Person",
                "name": t.author
              }
            }))
          })
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

