import Navigation from "@/components/Navigation";
import Contact from "@/components/Contact";
import Image from "next/image";

export default function ContactPage() {
  return (
    <>
      <Navigation />
      
      {/* Hero Section : Sobre et chaleureux */}
      <section className="relative py-24 bg-[#FDFBF7] overflow-hidden">
         {/* Décoration d'arrière-plan */}
         <div className="absolute top-0 right-0 w-full h-full opacity-10 pointer-events-none">
            <div className="absolute right-[-10%] top-[-10%] w-[50vw] h-[50vw] bg-gold/20 rounded-full blur-[100px]"></div>
         </div>

        <div className="container mx-auto px-6 max-w-4xl relative z-10">
          <div className="text-center">
            <span className="text-gold font-bold tracking-widest uppercase text-sm mb-6 block fade-in">
              Une rencontre, une écoute
            </span>
            <h1 className="text-5xl md:text-7xl font-serif text-navy mb-10 leading-tight fade-in">
              Entrons en contact
            </h1>
            <div className="w-24 h-1 bg-gold mx-auto mb-10"></div>
            <p className="text-xl text-navy-light leading-relaxed max-w-2xl mx-auto font-light">
              Que vous ayez un projet précis ou simplement une envie floue de raconter votre histoire, 
              je suis là pour répondre à vos questions, sans aucun engagement.
            </p>
          </div>
        </div>
      </section>

      {/* Section Principale : Carte de visite & Ambiance */}
      <section className="py-20 bg-white border-b border-gray-100">
        <div className="container mx-auto px-6 max-w-6xl">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            
            {/* Colonne Gauche : L'image "Album" inclinée */}
            <div className="relative order-2 md:order-1 px-4 md:px-0">
               {/* Ombre portée au sol */}
               <div className="absolute inset-0 bg-navy/10 transform translate-x-4 translate-y-6 rounded-sm blur-md rotate-[-3deg] scale-95"></div>
               
               {/* Cadre photo blanc */}
               <div className="relative z-10 bg-white p-3 pb-10 shadow-xl transform -rotate-2 transition-transform duration-500 hover:rotate-0 border border-gray-100">
                  <div className="relative h-[400px] w-full overflow-hidden bg-gray-50">
                    <Image 
                        src="/first_contact.png" 
                        alt="Un moment d'échange convivial"
                        fill
                        className="object-cover"
                    />
                  </div>
                  {/* Légende manuscrite */}
                  <div className="absolute bottom-3 left-0 w-full text-center">
                    <span className="font-serif italic text-gray-400 text-lg">Autour d'un café...</span>
                  </div>
               </div>
            </div>

            {/* Colonne Droite : Les coordonnées claires */}
            <div className="order-1 md:order-2 space-y-8">
               <div>
                  <h2 className="text-3xl font-serif text-navy mb-4">Où me trouver ?</h2>
                  <div className="w-16 h-0.5 bg-gold/50 mb-6"></div>
                  <p className="text-lg text-navy-light leading-relaxed">
                    Je navigue principalement entre <strong className="text-navy">Versailles</strong> et <strong className="text-navy">Paris</strong>.
                  </p>
                  <p className="text-navy-light mt-2">
                    Je peux me déplacer en Île-de-France ou réaliser nos entretiens en visio si vous habitez plus loin.
                  </p>
               </div>

               {/* Bloc Coordonnées style "Carte de visite" */}
               <div className="bg-[#FDFBF7] p-8 rounded-xl border border-gold/20 shadow-sm relative overflow-hidden group hover:shadow-md transition-shadow">
                  {/* Déco d'angle */}
                  <div className="absolute top-0 right-0 w-20 h-20 bg-gold/10 rounded-bl-full -mr-10 -mt-10 transition-transform group-hover:scale-110"></div>
                  
                  <ul className="space-y-6 relative z-10">
                    <li className="flex items-start gap-4">
                        <div className="bg-white p-3 rounded-full shadow-sm text-gold">
                             <span className="material-symbols-outlined text-2xl">call</span>
                        </div>
                        <div>
                            <p className="text-sm uppercase tracking-wider text-gray-500 font-bold mb-1">Par téléphone</p>
                            <a href="tel:+33619426686" className="text-2xl md:text-3xl font-serif text-navy hover:text-gold transition-colors font-bold">
                                06 19 42 66 86
                            </a>
                            <p className="text-sm text-gray-400 italic mt-1">Laissez-moi un message si je suis en entretien.</p>
                        </div>
                    </li>

                    <li className="flex items-start gap-4">
                        <div className="bg-white p-3 rounded-full shadow-sm text-gold">
                             <span className="material-symbols-outlined text-2xl">mail</span>
                        </div>
                        <div>
                            <p className="text-sm uppercase tracking-wider text-gray-500 font-bold mb-1">Par email</p>
                            <a href="mailto:contact@biographedelphine.fr" className="text-xl md:text-2xl font-serif text-navy hover:text-gold transition-colors break-all">
                                contact@biographedelphine.fr
                            </a>
                        </div>
                    </li>
                  </ul>
               </div>

               <div className="flex items-center gap-3 text-sage bg-sage/5 p-4 rounded-lg border border-sage/10">
                  <span className="material-symbols-outlined text-2xl">sentiment_satisfied</span>
                  <p className="font-medium">Le premier échange est gratuit et sans engagement.</p>
               </div>
            </div>

          </div>
        </div>
      </section>
      
      {/* On garde le composant Contact existant pour le formulaire, 
          mais on ajoute une transition visuelle */}
      <div className="relative">
         <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white p-3 rounded-full shadow-lg border border-gray-100 z-10">
            <span className="material-symbols-outlined text-navy text-2xl">keyboard_arrow_down</span>
         </div>
         <Contact />
      </div>
    </>
  );
}