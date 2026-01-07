export default function Navigation() {
  return (
    <nav className="sticky top-0 z-50 bg-cream/95 backdrop-blur-sm shadow-md border-b border-gold/20">
      <div className="container mx-auto px-4 md:px-8 py-4 flex flex-col md:flex-row justify-between items-center">
        {/* Logo */}
        <a
          href="/"
          className="mb-4 md:mb-0 hover:opacity-80 transition-opacity flex items-center gap-3"
        >
          <img
            src="/logo.png"
            alt="Delphine de Lapeyrière - Biographe"
            className="h-12 md:h-16 w-auto"
          />
          <span className="text-2xl md:text-3xl font-serif font-bold text-navy">
            Delphine, biographe
          </span>
        </a>

        {/* Menu items */}
        <ul className="flex flex-wrap justify-center gap-4 md:gap-8 text-lg font-semibold text-navy-light">
          <li>
            <a
              href="/qui-suis-je"
              className="hover:text-old-rose transition-colors decoration-gold underline-offset-4 hover:underline"
            >
              Qui suis-je ?
            </a>
          </li>
          <li>
            <a
              href="/pour-quoi-faire"
              className="hover:text-old-rose transition-colors decoration-gold underline-offset-4 hover:underline"
            >
              Pour quoi ?
            </a>
          </li>
          <li>
            <a
              href="/pour-qui"
              className="hover:text-old-rose transition-colors decoration-gold underline-offset-4 hover:underline"
            >
              Pour qui ?
            </a>
          </li>
          <li>
            <a
              href="/comment"
              className="hover:text-old-rose transition-colors decoration-gold underline-offset-4 hover:underline"
            >
              Comment ?
            </a>
          </li>
          <li>
            <a
              href="/combien"
              className="hover:text-old-rose transition-colors decoration-gold underline-offset-4 hover:underline"
            >
              Combien ?
            </a>
          </li>
          <li>
            <a
              href="/contact"
              className="px-5 py-2 bg-navy text-white rounded-full hover:bg-navy-light transition-colors shadow-lg transform hover:-translate-y-0.5"
            >
              Contact
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}

