import Navigation from "@/components/Navigation";
import Image from "next/image";

export default function PourQuoi() {
  return (
    <>
      <Navigation />
      
      {/* Hero Section : Sobre et élégant */}
      <section className="relative py-24 bg-[#FDFBF7]">
        <div className="container mx-auto px-6 max-w-4xl relative z-10">
          <div className="text-center">
            <span className="text-gold font-bold tracking-widest uppercase text-sm mb-6 block fade-in">
              Le sens de la démarche
            </span>
            <h1 className="text-5xl md:text-7xl font-serif text-navy mb-10 leading-tight fade-in">
              Pourquoi écrire son histoire ?
            </h1>
            <div className="w-24 h-1 bg-gold mx-auto mb-10"></div>
            
            {/* Mise en valeur de la citation : Cadre simple et lisible */}
            <div className="bg-white p-8 md:p-12 rounded-xl border border-gold/30 shadow-sm relative">
                <span className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-[#FDFBF7] px-4 text-gold text-4xl font-serif">
                    “
                </span>
                <p className="text-2xl md:text-3xl font-serif text-navy mb-6 font-medium italic leading-relaxed">
                  Lorsque le passé n'éclaire plus l'avenir, l'esprit marche dans les ténèbres
                </p>
                <p className="text-sm uppercase tracking-widest text-navy-light font-bold">
                  — Alexis de Tocqueville
                </p>
            </div>
          </div>
        </div>
      </section>

      {/* Section Mots-Clés : Organisée et lisible */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6 max-w-5xl text-center">
          <div className="text-center mb-10">
             <h2 className="text-3xl font-serif text-navy mb-4">
              Des mots qui résonnent
            </h2>
          </div>

          {/* Présentation sous forme de "Cartes" propres et lisibles */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {[
              "Souvenirs", "Transmission", "Passé", "Racines", "Mémoire", 
              "Traumatisme", "Biographie", "Histoire", "Plume", "Oreille", 
              "Présent", "Style", "Récit", "Écoute", "Écrivain", 
              "Vie", "Partage", "Héritage"
            ].map((word, index) => (
              <span key={index} className="px-6 py-3 bg-[#FDFBF7] border border-gray-200 rounded-lg text-navy font-serif text-xl text-center hover:border-gold hover:text-gold transition-colors duration-300 cursor-default">
                {word}
              </span>
            ))}
          </div>
          
          <p className="text-2xl font-serif text-navy italic">
            Ces mots vous évoquent-ils quelque chose ? <br/>
            <span className="text-old-rose not-italic font-bold text-lg mt-2 block">Vous êtes au bon endroit.</span>
          </p>
        </div>
      </section>

      {/* Section "Conviction" : Classique et rassurante */}
      <section className="py-24 bg-[#FDFBF7] border-t border-b border-gray-100">
        <div className="container mx-auto px-6 max-w-6xl">
          <div className="grid md:grid-cols-12 gap-12 items-center">
            
            {/* Image : Cadre simple, pas d'effets tordus */}
            <div className="md:col-span-5 relative">
              <div className="relative h-[500px] w-full rounded-lg overflow-hidden shadow-lg border-4 border-white">
                 <Image 
                    src="/sea.jpg" 
                    alt="Phare éclairant la mer"
                    fill
                    className="object-cover"
                 />
              </div>
            </div>

            {/* Texte Principal : Lisibilité maximale */}
            <div className="md:col-span-7 md:pl-8 space-y-8">
              <div>
                  <h2 className="text-3xl font-serif text-navy mb-6">Une boussole pour l'avenir</h2>
                  <div className="w-16 h-0.5 bg-sage/50 mb-6"></div>
              </div>

              <div className="text-lg md:text-xl text-navy-light leading-relaxed space-y-6">
                <p>
                  <span className="text-4xl text-sage font-serif float-left mr-2 mt-[-10px]">C</span>
                  haque vie mérite d’être racontée et j’ai la conviction que pour bien avancer dans la vie, il faut savoir d’où l’on vient.
                </p>
                <p>
                  Qui mieux que vous peut raconter votre vie, vos joies, vos souffrances, vos doutes, vos réussites ?
                </p>
              </div>

              {/* Encadré mise en valeur */}
              <div className="bg-white p-6 rounded-lg border-l-4 border-gold shadow-sm">
                <p className="text-xl font-serif italic text-navy">
                  "L’éclairage du passé peut donner de la lumière au présent et devenir une boussole pour le futur."
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section "Passion & Émotion" : Centrée et sobre */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6 max-w-4xl text-center">
            <div className="inline-block p-4 rounded-full bg-old-rose/5 text-old-rose mb-6">
                <span className="material-symbols-outlined text-4xl">history_edu</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-serif text-navy mb-8">Passion & Émotion</h2>
            
            <p className="text-xl md:text-2xl text-navy-light leading-relaxed font-light">
              J'aime l'idée de faire renaître des souvenirs, de mettre en mots une vie, <strong className="font-serif text-navy">votre vie</strong>. 
              De voir s'animer votre regard à l'évocation de certaines anecdotes, de sentir votre 
              émotion palpable et d'en écrire avec vous la partition.
            </p>
        </div>
      </section>

      {/* Section Finale : Le Cadeau (Style "Carte" cohérent avec les autres pages) */}
      <section className="py-24 bg-[#FDFBF7]">
        <div className="container mx-auto px-6 max-w-5xl">
          <div className="bg-navy rounded-2xl p-10 md:p-16 text-cream shadow-xl relative overflow-hidden">
            {/* Arrière-plan subtil */}
            <div className="absolute top-0 right-0 w-full h-full opacity-5 bg-[url('/background.png')] bg-cover"></div>
            
            <div className="relative z-10 grid md:grid-cols-2 gap-12 items-center">
              <div>
                <div className="flex items-center gap-3 mb-4">
                    <span className="w-12 h-px bg-gold"></span>
                    <span className="text-gold uppercase tracking-widest text-sm font-bold">Transmission</span>
                </div>
                <h3 className="text-3xl md:text-4xl font-serif font-bold text-white mb-6">
                  Un trésor inestimable
                </h3>
                <p className="text-lg leading-relaxed text-blue-100 opacity-90">
                  À l’heure où l’écrit tend à disparaître, où recevoir une lettre devient une rareté, où l’on se contente de taper un SMS rapide ou même d’enregistrer un vocal pour dire des choses aussi bien banales qu’essentielles...
                </p>
              </div>
              
              <div className="bg-white/10 p-8 rounded-xl border border-white/20 backdrop-blur-sm">
                <p className="text-xl font-serif italic leading-relaxed text-cream mb-8">
                  "Coucher sur le papier quelques bribes de sa vie, un événement important ou sa vie entière est un magnifique cadeau à faire aux générations futures."
                </p>
                <div className="text-center md:text-left">
                  <a
                    href="/contact"
                    className="inline-block bg-gold text-navy font-bold py-4 px-8 rounded-lg hover:bg-white transition-colors duration-300 shadow-lg"
                  >
                    Offrir ce cadeau
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}