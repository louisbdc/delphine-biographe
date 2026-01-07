export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-navy text-cream mt-auto">
      <div className="container mx-auto px-4 md:px-8 py-8 md:py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
          {/* Logo & Description */}
          <div className="flex flex-col items-center md:items-start">
            <div className="flex items-center gap-3 mb-4">
              <img
                src="/logo.png"
                alt="Delphine de Lapeyrière - Biographe"
                className="h-12 md:h-16 w-auto"
              />
              <span className="text-xl md:text-2xl font-serif font-bold text-cream">
                Delphine, biographe
              </span>
            </div>
            <p className="text-cream/80 text-center md:text-left text-base-lg">
              Biographe familiale, j&apos;écris le livre de votre vie
            </p>
          </div>

          {/* Navigation Links */}
          <div className="flex flex-col items-center md:items-start">
            <h3 className="text-lg font-serif font-bold mb-4 text-gold">
              Navigation
            </h3>
            <ul className="flex flex-col gap-3 text-base-lg">
              <li>
                <a
                  href="/qui-suis-je"
                  className="hover:text-gold transition-colors underline-offset-4 hover:underline"
                >
                  Qui suis-je ?
                </a>
              </li>
              <li>
                <a
                  href="/pour-quoi-faire"
                  className="hover:text-gold transition-colors underline-offset-4 hover:underline"
                >
                  Pour quoi ?
                </a>
              </li>
              <li>
                <a
                  href="/pour-qui"
                  className="hover:text-gold transition-colors underline-offset-4 hover:underline"
                >
                  Pour qui ?
                </a>
              </li>
              <li>
                <a
                  href="/comment"
                  className="hover:text-gold transition-colors underline-offset-4 hover:underline"
                >
                  Comment ?
                </a>
              </li>
              <li>
                <a
                  href="/combien"
                  className="hover:text-gold transition-colors underline-offset-4 hover:underline"
                >
                  Combien ?
                </a>
              </li>
              <li>
                <a
                  href="/contact"
                  className="hover:text-gold transition-colors underline-offset-4 hover:underline"
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="flex flex-col items-center md:items-start">
            <h3 className="text-lg font-serif font-bold mb-4 text-gold">
              Contact
            </h3>
            <div className="flex flex-col gap-3 text-base-lg text-cream/80">
              <p className="flex items-center gap-2">
                <span className="material-symbols-outlined text-gold">location_on</span>
                <span>Versailles et Paris</span>
              </p>
              <p>
                <a
                  href="/contact"
                  className="hover:text-gold transition-colors underline-offset-4 hover:underline"
                >
                  Me contacter
                </a>
              </p>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-cream/20 mt-8 pt-6 text-center text-cream/60 text-sm md:text-base">
          <p className="flex flex-wrap justify-center items-center gap-2">
            <span>© {currentYear} Delphine de Lapeyrière - Tous droits réservés</span>
            <span>•</span>
            <a
              href="/mentions-legales"
              className="hover:text-gold transition-colors underline-offset-4 hover:underline"
            >
              Mentions légales
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}

