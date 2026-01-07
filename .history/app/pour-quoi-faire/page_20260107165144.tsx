import Navigation from "@/components/Navigation";
import Image from "next/image";

export default function PourQuoi() {
  return (
    <>
      <Navigation />
      
      {/* Hero Section : Titre et Citation */}
      <section className="relative py-24 bg-[#FDFBF7] text-navy overflow-hidden">
        {/* Décoration subtile unifiée */}
        <div className="absolute top-[-10%] left-[-10%] w-96 h-96 bg-old-rose/5 rounded-full blur-3xl"></div>
        
        <div className="container mx-auto px-6 max-w-4xl relative z-10 text-center">
          <span className="text-old-rose font-bold tracking-widest uppercase text-sm mb-4 block">
            Le sens de la démarche
          </span>
          <h1 className="text-5xl md:text-7xl font-serif font-bold mb-8 leading-tight">
            Pourquoi écrire <br/>
            <span className="italic font-light text-navy-light">son histoire ?</span>
          </h1>
          {/* Séparateur signature */}
          <div className="w-24 h-1 bg-old-rose mx-auto mb-10"></div>
          
          {/* La citation reste, mais adaptée au fond clair */}
          <div className="relative inline-block p-8 border-y border-navy/10">
            <p className="text-xl md:text-2xl font-serif italic leading-relaxed text-navy-light">
              « Lorsque le passé n'éclaire plus l'avenir, l'esprit marche dans les ténèbres »
            </p>
            <p className="mt-4 text-sm uppercase tracking-widest text-old-rose font-bold">
              Alexis de Tocqueville
            </p>
          </div>
        </div>
      </section>

      {/* Section Mots-Clés : Design "Nuage de mots" */}
      <section className="py-20 bg-[#FDFBF7]">
        <div className="container mx-auto px-6 max-w-5xl text-center">
          <div className="flex flex-wrap justify-center gap-3 mb-10">
            {[
              "Souvenirs", "Transmission", "Passé", "Racines", "Mémoire", 
              "Traumatisme", "Biographie", "Histoire", "Plume", "Oreille", 
              "Présent", "Style", "Récit", "Écoute", "Écrivain", 
              "Vie", "Partage", "Héritage"
            ].map((word, index) => (
              <span key={index} className="px-4 py-2 bg-white border border-navy/10 rounded-full text-navy-light font-serif italic text-lg shadow-sm">
                {word}
              </span>
            ))}
          </div>
          
          <div className="w-24 h-1 bg-gold mx-auto mb-8"></div>
          
          <h2 className="text-3xl md:text-4xl font-serif text-navy">
            Ces mots vous évoquent-ils quelque chose ? <br/>
            <span className="text-old-rose font-bold">Vous êtes au bon endroit !</span>
          </h2>
        </div>
      </section>

      {/* Section "Conviction" : Image à Gauche, Texte à Droite */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6 max-w-6xl">
          <div className="grid md:grid-cols-12 gap-12 items-center">
            
            {/* Image d'ambiance - Style Album photo unifié */}
            <div className="md:col-span-5 relative">
              <div className="absolute inset-0 bg-sage/10 transform translate-x-4 translate-y-4 rounded-xl z-0"></div>
              <div className="relative z-10 h-[500px] w-full rounded-xl overflow-hidden shadow-xl">
                 <Image 
                    src="/sea.jpg" 
                    alt="Eclairage du passé"
                    fill
                    className="object-cover"
                 />
              </div>
            </div>

            {/* Texte Principal */}
            <div className="md:col-span-7 md:pl-8 space-y-6 text-lg text-navy-light leading-relaxed">
              <p>
                <span className="text-5xl float-left mr-3 mt-[-8px] font-serif text-sage">C</span>
                haque vie mérite d’être racontée et j’ai la conviction que pour bien avancer dans la vie, il faut savoir d’où l’on vient.
              </p>
              <p>
                Qui mieux que vous peut raconter votre vie, vos joies, vos souffrances, vos doutes, vos réussites ?
              </p>
              <div className="bg-[#FDFBF7] p-6 border-l-4 border-gold italic text-navy my-6">
                L’éclairage du passé peut donner de la lumière au présent et devenir une boussole pour le futur.
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section "Passion & Émotion" : Centré */}
      <section className="py-24 bg-[#FDFBF7] relative overflow-hidden">
        <div className="absolute top-0 right-0 w-64 h-64 bg-old-rose/5 rounded-full blur-3xl"></div>
        <div className="container mx-auto px-6 max-w-4xl relative z-10">
          <div className="text-center mb-12">
            <span className="material-symbols-outlined text-5xl text-old-rose mb-6">history_edu</span>
            <p className="text-xl md:text-2xl text-navy leading-relaxed font-light">
              J’aime l’idée de faire renaître des souvenirs, de mettre en mots une vie, votre vie. 
              De voir s’animer votre regard à l’évocation de certaines anecdotes, de sentir votre 
              émotion palpable et d’en écrire avec vous la partition.
            </p>
          </div>
        </div>
      </section>

      {/* Section "Cadeau aux générations" : Carte finale */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6 max-w-5xl">
          <div className="bg-navy rounded-3xl p-10 md:p-16 text-cream shadow-2xl relative overflow-hidden">
            {/* Image de fond abstraite ou texture */}
            <div className="absolute inset-0 opacity-10 bg-[url('/background.png')] bg-cover mix-blend-overlay"></div>
            
            <div className="relative z-10 grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h3 className="text-3xl font-serif font-bold text-gold mb-6">
                  Un trésor inestimable
                </h3>
                <p className="text-lg leading-relaxed text-blue-50">
                  À l’heure où l’écrit tend à disparaître, où recevoir une lettre devient une rareté, où l’on se contente de taper un SMS rapide ou même d’enregistrer un vocal pour dire des choses aussi bien banales qu’essentielles...
                </p>
              </div>
              <div>
                <p className="text-xl font-serif italic leading-relaxed border-l-2 border-gold pl-6">
                  "Coucher sur le papier quelques bribes de sa vie, un événement important ou sa vie entière est un magnifique cadeau à faire aux générations futures qui éprouveront, un jour, le besoin de se replonger dans leurs racines."
                </p>
                <div className="mt-8">
                  <a
                    href="/contact"
                    className="inline-block bg-gold text-navy font-bold py-3 px-8 rounded-full hover:bg-white transition-colors duration-300"
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