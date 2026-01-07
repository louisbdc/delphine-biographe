import Navigation from "@/components/Navigation";
import Image from "next/image";

export default function PourQuoi() {
  return (
    <>
      <Navigation />
      
      {/* Hero Section : Plus immersive et poétique */}
      <section className="relative py-32 bg-[#FDFBF7] overflow-hidden">
         {/* Décoration d'arrière-plan plus présente */}
         <div className="absolute top-0 left-0 w-full h-full opacity-5 pointer-events-none">
            <div className="absolute left-[-20%] top-[-20%] w-[80vw] h-[80vw] bg-old-rose/30 rounded-full blur-[120px]"></div>
            <div className="absolute right-[-10%] bottom-[-10%] w-[60vw] h-[60vw] bg-gold/20 rounded-full blur-[100px]"></div>
         </div>

        <div className="container mx-auto px-6 max-w-4xl relative z-10">
          <div className="text-center flex flex-col items-center">
            <span className="text-gold font-serif italic text-xl mb-4 block fade-in">
              Le sens de la démarche
            </span>
            <h1 className="text-6xl md:text-8xl font-serif text-navy mb-12 leading-tight fade-in">
              Pourquoi écrire <br/>
              <span className="text-old-rose italic pr-2">son histoire ?</span>
            </h1>
            
            {/* Mise en valeur de la citation comme une estampe */}
            <div className="relative max-w-2xl mx-auto py-8">
                <span className="absolute top-0 left-0 text-8xl text-gold/20 font-serif leading-none -translate-x-8 -translate-y-4">“</span>
                <p className="text-3xl md:text-4xl font-serif text-navy mb-6 font-medium leading-normal relative z-10">
                  Lorsque le passé n'éclaire plus l'avenir, l'esprit marche dans les ténèbres
                </p>
                <span className="absolute bottom-0 right-0 text-8xl text-gold/20 font-serif leading-none translate-x-4 translate-y-8">”</span>
            </div>
            
            <div className="w-16 h-px bg-navy/20 mt-8 mb-4"></div>
            <p className="text-sm uppercase tracking-[0.2em] text-navy-light font-bold">
              Alexis de Tocqueville
            </p>
          </div>
        </div>
      </section>

      {/* Section Mots-Clés : Nuage poétique (fini les "boutons") */}
      <section className="py-24 bg-white relative">
        <div className="container mx-auto px-6 max-w-5xl text-center">
          
          {/* Transformation en nuage de mots typographique */}
          <div className="flex flex-wrap justify-center items-baseline gap-x-8 gap-y-4 mb-16 max-w-4xl mx-auto leading-loose">
            {[
              "Souvenirs", "Transmission", "Passé", "Racines", "Mémoire", 
              "Traumatisme", "Biographie", "Histoire", "Plume", "Oreille", 
              "Présent", "Style", "Récit", "Écoute", "Écrivain", 
              "Vie", "Partage", "Héritage"
            ].map((word, index) => (
              <span 
                key={index} 
                className={`
                  font-serif italic text-navy-light transition-colors duration-500 hover:text-old-rose
                  ${index % 3 === 0 ? 'text-3xl opacity-80' : index % 2 === 0 ? 'text-2xl opacity-60' : 'text-xl opacity-40'}
                `}
              >
                {word}
              </span>
            ))}
          </div>
          
          <div className="text-center relative">
            <h2 className="text-3xl md:text-4xl font-serif text-navy mb-4">
              Ces mots vous évoquent-ils quelque chose ?
            </h2>
            <p className="text-old-rose font-bold text-xl mt-4 font-serif italic">
               — Vous êtes au bon endroit ! —
            </p>
          </div>
        </div>
      </section>

      {/* Section "Conviction" : Style Album Photo / Scrapbook */}
      <section className="py-24 bg-[#FDFBF7] overflow-hidden">
        <div className="container mx-auto px-6 max-w-6xl">
          <div className="grid md:grid-cols-12 gap-16 items-center">
            
            {/* Image style "Photo posée sur une table" */}
            <div className="md:col-span-5 relative group">
              {/* Effet d'ombre portée réaliste */}
              <div className="absolute inset-0 bg-navy/20 transform translate-x-6 translate-y-6 rounded-sm blur-md transition-transform duration-700 group-hover:translate-x-8 group-hover:translate-y-8"></div>
              <div className="relative z-10 h-[550px] w-full bg-white p-4 shadow-xl transform -rotate-2 transition-transform duration-700 group-hover:rotate-0">
                 <div className="relative h-full w-full overflow-hidden border border-gray-100">
                    <Image 
                        src="/sea.jpg" 
                        alt="Eclairage du passé"
                        fill
                        className="object-cover sepia-[0.15]" // Légère sépia pour la nostalgie
                    />
                 </div>
              </div>
            </div>

            {/* Texte Principal - Plus aéré */}
            <div className="md:col-span-7 md:pl-8 space-y-8 text-lg text-navy leading-relaxed font-light">
              <div className="relative">
                 {/* Lettrine décorative */}
                 <span className="absolute -left-4 -top-8 text-9xl text-sage/10 font-serif z-0">C</span>
                 <p className="relative z-10 text-xl">
                   <span className="font-bold text-sage">C</span>haque vie mérite d’être racontée et j’ai la conviction que pour bien avancer dans la vie, il faut savoir d’où l’on vient.
                 </p>
              </div>
              
              <p className="text-xl">
                Qui mieux que vous peut raconter votre vie, vos joies, vos souffrances, vos doutes, vos réussites ?
              </p>
              
              <div className="relative mt-8 py-2">
                 <div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-gold to-transparent opacity-50"></div>
                 <div className="pl-8 italic text-navy-light text-2xl font-serif">
                    "L’éclairage du passé peut donner de la lumière au présent et devenir une boussole pour le futur."
                 </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section "Passion & Émotion" : Intimiste */}
      <section className="py-32 bg-white relative">
        <div className="container mx-auto px-6 max-w-3xl relative z-10">
          
          <div className="text-center mb-12">
            <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-old-rose/10 text-old-rose mb-6">
                <span className="material-symbols-outlined text-2xl">favorite</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-serif text-navy mb-6">Passion & Émotion</h2>
          </div>

          <div className="prose prose-lg mx-auto text-center text-navy-light">
             <p className="text-2xl font-serif leading-relaxed">
               J'aime l'idée de faire renaître des souvenirs, de mettre en mots une vie, <span className="text-old-rose italic underline decoration-old-rose/30 underline-offset-4">votre vie</span>.
             </p>
             <p className="mt-8 text-xl leading-relaxed font-light">
               De voir s'animer votre regard à l'évocation de certaines anecdotes, de sentir votre 
               émotion palpable et d'en écrire avec vous la partition.
             </p>
          </div>

        </div>
      </section>

      {/* Section "Cadeau aux générations" : Carte Élégante */}
      <section className="py-24 bg-[#FDFBF7]">
        <div className="container mx-auto px-6 max-w-5xl">
          {/* Cadre style "Letterpress" */}
          <div className="bg-navy rounded-[2rem] p-10 md:p-20 text-cream shadow-2xl relative overflow-hidden">
            
            {/* Texture de fond subtile */}
            <div className="absolute inset-0 opacity-10 bg-[url('/background.png')] bg-cover mix-blend-overlay"></div>
            
            {/* Cercles décoratifs */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-gold rounded-full blur-[80px] opacity-20 transform translate-x-1/2 -translate-y-1/2"></div>
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-old-rose rounded-full blur-[80px] opacity-20 transform -translate-x-1/2 translate-y-1/2"></div>

            <div className="relative z-10 grid md:grid-cols-2 gap-16 items-center">
              <div>
                <span className="text-gold uppercase tracking-widest text-xs font-bold mb-4 block">Héritage</span>
                <h3 className="text-4xl md:text-5xl font-serif font-bold text-white mb-8">
                  Un trésor <br/><span className="italic font-normal text-gold">inestimable</span>
                </h3>
                <p className="text-lg leading-relaxed text-blue-100/90 font-light">
                  À l’heure où l’écrit tend à disparaître, où recevoir une lettre devient une rareté, où l’on se contente de taper un SMS rapide ou même d’enregistrer un vocal pour dire des choses aussi bien banales qu’essentielles...
                </p>
              </div>
              
              <div className="bg-white/5 backdrop-blur-sm p-8 rounded-xl border border-white/10">
                <p className="text-xl font-serif italic leading-relaxed text-cream">
                  "Coucher sur le papier quelques bribes de sa vie, un événement important ou sa vie entière est un magnifique cadeau à faire aux générations futures qui éprouveront, un jour, le besoin de se replonger dans leurs racines."
                </p>
                <div className="mt-8 text-right">
                  <a
                    href="/contact"
                    className="inline-block bg-gold text-navy font-bold py-4 px-10 rounded-full hover:bg-white hover:scale-105 transition-all duration-300 shadow-lg"
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