import Navigation from "@/components/Navigation";

export default function MentionsLegales() {
  return (
    <>
      <Navigation />
      <main className="min-h-screen bg-cream py-12 px-4">
        <div className="container mx-auto max-w-4xl">
          <h1 className="text-4xl md:text-5xl font-serif font-bold text-navy mb-8 text-center">
            Mentions Légales
          </h1>

          <div className="bg-white rounded-2xl shadow-lg p-8 md:p-12 space-y-8 text-base-lg">
            {/* Éditeur du site */}
            <section>
              <h2 className="text-2xl font-serif font-bold text-navy mb-4">
                1. Éditeur du site
              </h2>
              <div className="space-y-2 text-navy-light">
                <p>
                  <strong>Nom :</strong> Delphine de Lapeyrière
                </p>
                <p>
                  <strong>Activité :</strong> Biographe familiale
                </p>
                <p>
                  <strong>Localisation :</strong> Versailles et Paris, France
                </p>
                <p>
                  <strong>Email :</strong>{" "}
                  <a
                    href="mailto:contact@biographedelphine.com"
                    className="text-sage hover:text-gold transition-colors underline-offset-4 hover:underline"
                  >
                    contact@biographedelphine.com
                  </a>
                </p>
                <p>
                  <strong>Téléphone :</strong> 06 19 42 66 86
                </p>
              </div>
            </section>

            {/* Hébergement */}
            <section>
              <h2 className="text-2xl font-serif font-bold text-navy mb-4">
                2. Hébergement
              </h2>
              <p className="text-navy-light">
                Ce site est hébergé par un prestataire externe. Pour toute
                question concernant l&apos;hébergement, veuillez nous contacter.
              </p>
            </section>

            {/* Propriété intellectuelle */}
            <section>
              <h2 className="text-2xl font-serif font-bold text-navy mb-4">
                3. Propriété intellectuelle
              </h2>
              <p className="text-navy-light mb-4">
                L&apos;ensemble de ce site relève de la législation française et
                internationale sur le droit d&apos;auteur et la propriété
                intellectuelle. Tous les droits de reproduction sont réservés,
                y compris pour les documents téléchargeables et les
                représentations iconographiques et photographiques.
              </p>
              <p className="text-navy-light">
                La reproduction de tout ou partie de ce site sur un support
                électronique ou autre est formellement interdite sauf
                autorisation expresse de l&apos;éditeur.
              </p>
            </section>

            {/* Protection des données personnelles */}
            <section>
              <h2 className="text-2xl font-serif font-bold text-navy mb-4">
                4. Protection des données personnelles
              </h2>
              <p className="text-navy-light mb-4">
                Conformément à la loi &quot;Informatique et Libertés&quot; du 6 janvier
                1978 modifiée et au Règlement Général sur la Protection des
                Données (RGPD), vous disposez d&apos;un droit d&apos;accès, de
                rectification, de suppression et d&apos;opposition aux données
                personnelles vous concernant.
              </p>
              <p className="text-navy-light mb-4">
                Les données personnelles collectées sur ce site sont utilisées
                uniquement pour répondre à vos demandes de contact et ne sont
                en aucun cas transmises à des tiers.
              </p>
              <p className="text-navy-light">
                Pour exercer ces droits, vous pouvez nous contacter à l&apos;adresse
                suivante :{" "}
                <a
                  href="mailto:contact@biographedelphine.com"
                  className="text-sage hover:text-gold transition-colors underline-offset-4 hover:underline"
                >
                  contact@biographedelphine.com
                </a>
              </p>
            </section>

            {/* Cookies */}
            <section>
              <h2 className="text-2xl font-serif font-bold text-navy mb-4">
                5. Cookies
              </h2>
              <p className="text-navy-light">
                Ce site peut utiliser des cookies pour améliorer l&apos;expérience
                utilisateur. En naviguant sur ce site, vous acceptez l&apos;utilisation
                de cookies conformément à notre politique de confidentialité.
              </p>
            </section>

            {/* Responsabilité */}
            <section>
              <h2 className="text-2xl font-serif font-bold text-navy mb-4">
                6. Responsabilité
              </h2>
              <p className="text-navy-light mb-4">
                L&apos;éditeur du site s&apos;efforce d&apos;assurer l&apos;exactitude et la mise à
                jour des informations diffusées sur ce site, dont elle se
                réserve le droit de corriger, à tout moment et sans préavis, le
                contenu.
              </p>
              <p className="text-navy-light">
                Toutefois, l&apos;éditeur ne peut garantir l&apos;exactitude, la
                précision ou l&apos;exhaustivité des informations mises à disposition
                sur ce site. En conséquence, l&apos;éditeur décline toute
                responsabilité pour tout dommage résultant d&apos;une imprécision ou
                d&apos;une omission, ou d&apos;un dommage résultant d&apos;une intrusion ou
                d&apos;une manipulation frauduleuse par un tiers du site.
              </p>
            </section>

            {/* Droit applicable */}
            <section>
              <h2 className="text-2xl font-serif font-bold text-navy mb-4">
                7. Droit applicable
              </h2>
              <p className="text-navy-light">
                Les présentes mentions légales sont régies par le droit français.
                En cas de litige et à défaut d&apos;accord amiable, le litige sera
                porté devant les tribunaux français conformément aux règles de
                compétence en vigueur.
              </p>
            </section>

            {/* Contact */}
            <section className="pt-6 border-t border-gray-200">
              <p className="text-navy-light">
                Pour toute question concernant ces mentions légales, vous pouvez
                nous contacter à l'adresse :{" "}
                <a
                  href="mailto:contact@biographedelphine.com"
                  className="text-sage hover:text-gold transition-colors underline-offset-4 hover:underline"
                >
                  contact@biographedelphine.com
                </a>
              </p>
            </section>
          </div>
        </div>
      </main>
    </>
  );
}

