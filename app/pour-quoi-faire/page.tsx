import Navigation from "@/components/Navigation";
import Image from "next/image";

export default function PourQuoi() {
  return (
    <>
      <Navigation />
      
      {/* Hero Section : Sobre et élégant */}
      <section className="relative py-24 bg-[#FDFBF7] overflow-hidden">
         {/* Décoration d'arrière-plan très subtile */}
         <div className="absolute top-0 right-0 w-full h-full opacity-10 pointer-events-none">
            <div className="absolute right-[-10%] top-[-10%] w-[50vw] h-[50vw] bg-gold/20 rounded-full blur-[100px]"></div>
         </div>

        <div className="container mx-auto px-6 max-w-4xl relative z-10">
          <div className="text-center">
            <span className="text-gold font-bold tracking-widest uppercase text-sm mb-6 block fade-in">
              Le sens de la démarche
            </span>
            <h1 className="text-5xl md:text-7xl font-serif text-navy mb-10 leading-tight fade-in">
              Pourquoi écrire son histoire ?
            </h1>
            <div className="w-24 h-1 bg-gold mx-auto mb-10"></div>
            
            {/* Citation encadrée proprement */}
            <div className="bg-white p-8 md:p-12 rounded-xl border border-gold/30 shadow-sm relative mx-auto max-w-3xl">
                <span className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-[#FDFBF7] px-4 text-gold text-4xl font-serif">
                    “
                </span>
                <p className="text-2xl md:text-3xl font-serif text-navy mb-6 font-medium italic leading-relaxed">
                  Lorsque le passé n&apos;éclaire plus l&apos;avenir, l&apos;esprit marche dans les ténèbres
                </p>
                <p className="text-sm uppercase tracking-widest text-navy-light font-bold">
                  — Alexis de Tocqueville
                </p>
            </div>
          </div>
        </div>
      </section>

      {/* Section Mots-Clés : Cartes lisibles */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6 max-w-5xl text-center">
          <div className="text-center mb-10">
             <h2 className="text-3xl font-serif text-navy mb-4">
              Des mots qui résonnent
            </h2>
            <div className="w-16 h-0.5 bg-gold/30 mx-auto"></div>
          </div>

          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {[
              "Souvenirs", "Transmission", "Passé", "Racines", "Mémoire", 
              "Traumatisme", "Biographie", "Histoire", "Plume", "Oreille", 
              "Présent", "Style", "Récit", "Écoute", "Écrivain", 
              "Vie", "Partage", "Héritage"
            ].map((word, index) => (
              <span key={index} className="px-5 py-3 bg-[#FDFBF7] border border-gray-100 rounded-lg text-navy-light font-serif text-lg text-center hover:border-gold hover:text-gold transition-colors duration-300 cursor-default shadow-sm">
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

      {/* Section "Conviction" : L'image "de travers" style album photo */}
      <section className="py-24 bg-[#FDFBF7] border-t border-b border-gray-100 overflow-hidden">
        <div className="container mx-auto px-6 max-w-6xl">
          <div className="grid md:grid-cols-12 gap-16 items-center">
            
            {/* Image avec effet "Polaroid / Tirage papier" penché */}
            <div className="md:col-span-5 relative">
              {/* Ombre portée décorative au sol pour l'ancrage */}
              <div className="absolute inset-0 bg-navy/10 transform translate-x-4 translate-y-8 rounded-sm blur-md rotate-[-2deg] scale-95"></div>
              
              {/* Le cadre photo blanc penché */}
              <div className="relative z-10 bg-white p-4 pb-12 shadow-2xl transform -rotate-2 rounded-sm transition-transform duration-700 hover:rotate-0 hover:scale-[1.02] cursor-pointer border border-gray-200">
                 <div className="relative h-[450px] w-full overflow-hidden bg-gray-100 shadow-inner">
                    <Image 
                        src="/sea.jpg" 
                        alt="Phare éclairant la mer"
                        fill
                        className="object-cover"
                    />
                 </div>
                 {/* Légende manuscrite simulée (optionnel, ajoute du charme) */}
                 <div className="absolute bottom-4 left-0 w-full text-center">
                    <span className="font-serif italic text-gray-400 text-sm">Éclairer le passé...</span>
                 </div>
              </div>
            </div>

            {/* Texte Principal : Très lisible */}
            <div className="md:col-span-7 md:pl-8 space-y-8">
              <div>
                  <h2 className="text-3xl md:text-4xl font-serif text-navy mb-6">Une boussole pour l&apos;avenir</h2>
                  <div className="w-16 h-0.5 bg-sage/50 mb-6"></div>
              </div>

              <div className="text-lg md:text-xl text-navy-light leading-relaxed space-y-6 text-justify md:text-left">
                <p>
                  <span className="text-5xl text-sage font-serif float-left mr-3 mt-[-12px] opacity-20">C</span>
                  <span className="text-navy">haque vie mérite d&apos;être racontée et j&apos;ai la conviction que pour bien avancer dans la vie, il faut savoir d&apos;où l&apos;on vient.</span>
                </p>
                <p>
                  Qui mieux que vous peut raconter votre vie, vos joies, vos souffrances, vos doutes, vos réussites ?
                </p>
              </div>

              {/* Encadré citation simple */}
              <div className="bg-white p-6 rounded-lg border-l-4 border-gold shadow-sm mt-8">
                <p className="text-xl font-serif italic text-navy">
                  &quot;L&apos;éclairage du passé peut donner de la lumière au présent et devenir une boussole pour le futur.&quot;
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section "Passion & Émotion" */}
      <section className="py-24 bg-white relative">
        <div className="container mx-auto px-6 max-w-4xl text-center">
            <div className="inline-block p-5 rounded-full bg-old-rose/5 text-old-rose mb-8">
                <span className="material-symbols-outlined text-4xl">history_edu</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-serif text-navy mb-8">Passion & Émotion</h2>
            
            <div className="w-16 h-0.5 bg-old-rose/30 mx-auto mb-10"></div>

            <p className="text-xl md:text-2xl text-navy leading-relaxed font-light">
              J&apos;aime l&apos;idée de faire renaître des souvenirs, de mettre en mots une vie, <strong className="font-serif text-old-rose font-normal">votre vie</strong>. 
              De voir s&apos;animer votre regard à l&apos;évocation de certaines anecdotes, de sentir votre 
              émotion palpable et d&apos;en écrire avec vous la partition.
            </p>
        </div>
      </section>

      {/* Section Finale : Le Cadeau */}
      <section className="py-24 bg-[#FDFBF7]">
        <div className="container mx-auto px-6 max-w-5xl">
          <div className="bg-navy rounded-3xl p-10 md:p-16 text-cream shadow-2xl relative overflow-hidden">
            {/* Arrière-plan subtil */}
            <div className="absolute top-0 right-0 w-full h-full opacity-5 bg-[url('/background.png')] bg-cover"></div>
            
            <div className="relative z-10 grid md:grid-cols-2 gap-12 items-center">
              <div>
                <span className="text-gold uppercase tracking-widest text-sm font-bold mb-4 block">Héritage</span>
                <h3 className="text-3xl md:text-4xl font-serif font-bold text-white mb-6">
                  Un trésor inestimable
                </h3>
                <p className="text-lg leading-relaxed text-blue-100 opacity-90">
                  À l’heure où l’écrit tend à disparaître, où recevoir une lettre devient une rareté, où l’on se contente de taper un SMS rapide ou même d’enregistrer un vocal pour dire des choses aussi bien banales qu’essentielles...
                </p>
              </div>
              
              <div className="bg-white/10 p-8 rounded-xl border border-white/20 backdrop-blur-sm">
                <p className="text-xl font-serif italic leading-relaxed text-cream mb-8">
                  &quot;Coucher sur le papier quelques bribes de sa vie, un événement important ou sa vie entière est un magnifique cadeau à faire aux générations futures.&quot;
                </p>
                <div className="text-center md:text-left">
                  <a
                    href="/contact"
                    className="inline-block bg-gold text-navy font-bold py-4 px-8 rounded-full hover:bg-white transition-colors duration-300 shadow-lg"
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