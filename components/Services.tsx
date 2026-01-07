export default function Services() {
  return (
    <section className="py-20 bg-cream-dark">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-serif font-bold text-navy mb-4">
            Comment puis-je vous aider ?
          </h2>
          <div className="w-24 h-1 bg-gold mx-auto"></div>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {/* Card 1: Pour qui ? */}
          <a
            href="/pour-qui"
            className="group bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all hover:-translate-y-2 border-t-4 border-navy"
          >
            <div className="bg-navy/10 w-16 h-16 rounded-full flex items-center justify-center mb-6 group-hover:bg-navy group-hover:text-white transition-colors">
              <span className="material-symbols-outlined text-4xl text-navy group-hover:text-white">
                face_4
              </span>
            </div>
            <h3 className="text-2xl font-serif font-bold mb-4 text-navy">Pour qui ?</h3>
            <p className="text-lg text-gray-600 mb-4">
              Que vous soyez grand-parent souhaitant transmettre ou une famille voulant
              honorer un proche.
            </p>
            <span className="text-old-rose font-bold flex items-center gap-2">
              En savoir plus{" "}
              <span className="material-symbols-outlined text-sm">arrow_forward</span>
            </span>
          </a>

          {/* Card 2: Comment ? */}
          <a
            href="/comment"
            className="group bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all hover:-translate-y-2 border-t-4 border-sage"
          >
            <div className="bg-sage/10 w-16 h-16 rounded-full flex items-center justify-center mb-6 group-hover:bg-sage group-hover:text-white transition-colors">
              <span className="material-symbols-outlined text-4xl text-sage group-hover:text-white">
                edit_note
              </span>
            </div>
            <h3 className="text-2xl font-serif font-bold mb-4 text-navy">Comment ?</h3>
            <p className="text-lg text-gray-600 mb-4">
              Une méthodologie douce, basée sur l&apos;écoute et des entretiens réguliers à
              votre rythme.
            </p>
            <span className="text-sage font-bold flex items-center gap-2">
              Voir la méthode{" "}
              <span className="material-symbols-outlined text-sm">arrow_forward</span>
            </span>
          </a>

          {/* Card 3: Combien ? */}
          <a
            href="/combien"
            className="group bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all hover:-translate-y-2 border-t-4 border-gold"
          >
            <div className="bg-gold/10 w-16 h-16 rounded-full flex items-center justify-center mb-6 group-hover:bg-gold group-hover:text-white transition-colors">
              <span className="material-symbols-outlined text-4xl text-gold group-hover:text-white">
                euro
              </span>
            </div>
            <h3 className="text-2xl font-serif font-bold mb-4 text-navy">Combien ?</h3>
            <p className="text-lg text-gray-600 mb-4">
              Des tarifs clairs et adaptés à la longueur et à la complexité de votre
              projet de vie.
            </p>
            <span className="text-gold font-bold flex items-center gap-2">
              Consulter les tarifs{" "}
              <span className="material-symbols-outlined text-sm">arrow_forward</span>
            </span>
          </a>
        </div>
      </div>
    </section>
  );
}

