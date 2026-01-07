import Navigation from "@/components/Navigation";
import Contact from "@/components/Contact";
import Image from "next/image"; // Assure-toi d'importer Image si tu utilises Next.js
import { MapPin, Mail, Instagram, ArrowRight } from "lucide-react"; // Installation recommandée : npm install lucide-react

export default function ContactPage() {
  return (
    <>
      <Navigation />

      <main className="min-h-screen bg-[#FDFBF7] text-navy selection:bg-gold/30">
        
        {/* --- HEADER SECTION --- */}
        <section className="relative pt-32 pb-16 overflow-hidden">
           {/* Background Décoratif Subtil */}
           <div className="absolute top-0 right-0 w-full h-full overflow-hidden pointer-events-none">
              <div className="absolute top-[-20%] right-[-10%] w-[600px] h-[600px] bg-gold/10 rounded-full blur-[120px]"></div>
              <div className="absolute bottom-0 left-[-10%] w-[400px] h-[400px] bg-navy/5 rounded-full blur-[100px]"></div>
           </div>

          <div className="container mx-auto px-6 relative z-10 text-center">
            <span className="inline-block py-1 px-3 border border-gold/30 rounded-full text-gold text-xs font-bold tracking-[0.2em] uppercase mb-6 bg-white/50 backdrop-blur-sm">
              Parlons de votre projet
            </span>
            <h1 className="text-5xl md:text-7xl font-serif text-navy mb-6">
              Contactez-moi
            </h1>
            <p className="text-lg text-navy-light/80 leading-relaxed max-w-2xl mx-auto font-light">
              Que ce soit pour une séance à <strong className="text-navy font-medium">Versailles</strong>, 
              une escapade à <strong className="text-navy font-medium">Paris</strong> ou un projet ailleurs, 
              je serais ravi d'écrire cette nouvelle page avec vous.
            </p>
          </div>
        </section>

        {/* --- MAIN CONTENT: SPLIT LAYOUT --- */}
        <section className="pb-24 px-6">
          <div className="container mx-auto max-w-6xl">
            <div className="bg-white rounded-[2rem] shadow-xl shadow-navy/5 overflow-hidden border border-gold/10">
              <div className="grid grid-cols-1 lg:grid-cols-12 min-h-[600px]">
                
                {/* COLONNE GAUCHE : Infos & Image */}
                <div className="lg:col-span-5 bg-navy text-white p-10 md:p-12 relative flex flex-col justify-between overflow-hidden">
                  {/* Déco de fond colonne gauche */}
                  <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none bg-[url('/noise.png')]"></div> {/* Optionnel: texture bruit */}
                  <div className="absolute -bottom-24 -right-24 w-64 h-64 bg-gold/20 rounded-full blur-[80px]"></div>

                  <div className="relative z-10">
                    <h3 className="font-serif text-3xl mb-8 text-gold">Informations</h3>
                    
                    <div className="space-y-6">
                      <div className="flex items-start gap-4 group">
                        <div className="p-3 bg-white/5 rounded-full border border-white/10 group-hover:border-gold/50 transition-colors">
                          <MapPin className="w-5 h-5 text-gold" />
                        </div>
                        <div>
                          <p className="font-bold text-sm uppercase tracking-wider text-gold/80 mb-1">Localisation</p>
                          <p className="text-white/90 font-light">Versailles & Paris, France</p>
                          <p className="text-white/50 text-sm mt-1 italic">Disponible pour voyager</p>
                        </div>
                      </div>

                      <div className="flex items-start gap-4 group">
                        <div className="p-3 bg-white/5 rounded-full border border-white/10 group-hover:border-gold/50 transition-colors">
                          <Mail className="w-5 h-5 text-gold" />
                        </div>
                        <div>
                          <p className="font-bold text-sm uppercase tracking-wider text-gold/80 mb-1">Email</p>
                          <a href="mailto:contact@exemple.com" className="text-white/90 font-light hover:text-gold transition-colors">
                            hello@votresite.com
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Section Basse: Social ou Citation */}
                  <div className="relative z-10 mt-12 pt-12 border-t border-white/10">
                    <p className="font-serif italic text-xl text-white/80 mb-6">
                      "La photographie est une histoire que je n'arrive pas à mettre en mots."
                    </p>
                    <div className="flex gap-4">
                      <a href="#" className="p-2 bg-white/5 rounded-full hover:bg-gold hover:text-navy transition-all duration-300">
                        <Instagram className="w-5 h-5" />
                      </a>
                      {/* Autres icônes si besoin */}
                    </div>
                  </div>
                </div>

                {/* COLONNE DROITE : Le Formulaire */}
                <div className="lg:col-span-7 p-8 md:p-12 bg-white flex flex-col justify-center">
                   {/* Ici on intègre ton composant existant, mais on s'assure qu'il prenne toute la largeur */}
                   <div className="w-full">
                      <Contact />
                   </div>
                </div>

              </div>
            </div>
          </div>
        </section>

        {/* --- SECTION RASSURANTE (PROCESS) --- */}
        <section className="pb-24 pt-8">
          <div className="container mx-auto px-6 max-w-4xl text-center">
            <h3 className="text-sm font-bold uppercase tracking-widest text-navy/40 mb-10">La suite des événements</h3>
            <div className="grid md:grid-cols-3 gap-8">
              {[
                { step: "01", title: "Le Message", text: "Vous remplissez le formulaire ci-dessus avec vos détails." },
                { step: "02", title: "La Réponse", text: "Je reviens vers vous sous 48h pour fixer un rendez-vous." },
                { step: "03", title: "La Rencontre", text: "Nous discutons de vos envies autour d'un café ou en visio." }
              ].map((item, idx) => (
                <div key={idx} className="relative p-6 rounded-xl hover:bg-white hover:shadow-lg transition-all duration-300 border border-transparent hover:border-gold/10">
                  <span className="text-4xl font-serif text-gold/20 absolute top-4 right-4">{item.step}</span>
                  <h4 className="text-navy font-serif text-xl mb-3 relative z-10">{item.title}</h4>
                  <p className="text-navy-light text-sm leading-relaxed relative z-10">{item.text}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

      </main>
    </>
  );
}