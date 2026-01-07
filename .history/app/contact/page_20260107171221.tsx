import Navigation from "@/components/Navigation";
import Contact from "@/components/Contact";
import Image from "next/image";

export default function ContactPage() {
  return (
    <>
      <Navigation />
      
      {/* Hero Section : Identique aux autres pages pour la cohérence */}
      <section className="relative py-24 bg-[#FDFBF7] overflow-hidden">
         {/* Décoration d'arrière-plan */}
         <div className="absolute top-0 right-0 w-full h-full opacity-10 pointer-events-none">
            <div className="absolute right-[-10%] top-[-10%] w-[50vw] h-[50vw] bg-gold/20 rounded-full blur-[100px]"></div>
         </div>

        <div className="container mx-auto px-6 max-w-4xl relative z-10">
          <div className="text-center">
            <span className="text-gold font-bold tracking-widest uppercase text-sm mb-6 block fade-in">
              Commençons votre histoire
            </span>
            <h1 className="text-5xl md:text-7xl font-serif text-navy mb-8 leading-tight fade-in">
              Contactez-moi
            </h1>
            <div className="w-24 h-1 bg-gold mx-auto mb-8"></div>
          </div>
        </div>
      </section>

      {/* Section de transition : Style "Album Photo" */}
      <section className="py-16 bg-white border-b border-gray-100">
        <div className="container mx-auto px-6 max-w-5xl">
          <div className="grid md:grid-cols-2 gap-12 items-center">
             
             {/* L'image "Album" (Style validé sur la page Pour-Quoi) */}
             <div className="relative order-2 md:order-1 px-4 md:px-0">
                {/* Ombre portée au sol pour l'ancrage */}
                <div className="absolute inset-0 bg-navy/10 transform translate-x-4 translate-y-6 rounded-sm blur-md rotate-[-3deg] scale-95"></div>
                
                {/* Le cadre photo blanc penché */}
                <div className="relative z-10 bg-white p-3 pb-12 shadow-xl transform -rotate-2 border border-gray-100 transition-transform duration-500 hover:rotate-0 hover:scale-[1.01]">
                   <div className="relative h-[350px] w-full overflow-hidden bg-gray-50 shadow-inner">
                     <Image 
                         src="/first_contact.png" 
                         alt="Rencontre autour d'un café"
                         fill
                         className="object-cover sepia-[0.1]"
                     />
                   </div>
                   {/* Légende manuscrite */}
                   <div className="absolute bottom-4 left-0 w-full text-center">
                      <span className="font-serif italic text-gray-400 text-lg">Le temps d'un café...</span>
                   </div>
                </div>
             </div>

             {/* Texte : Simple, Serif et Élégant */}
             <div className="order-1 md:order-2">
                <h2 className="text-3xl font-serif text-navy mb-6">
                  Une première rencontre
                </h2>
                <div className="w-16 h-0.5 bg-gold/30 mb-8"></div>
                
                <p className="text-xl text-navy-light leading-relaxed font-light mb-6">
                  Je navigue entre <strong className="text-navy font-serif">Versailles</strong> et <strong className="text-navy font-serif">Paris</strong> mais je peux me déplacer plus loin sur demande.
                </p>
                
                <div className="bg-[#FDFBF7] p-6 rounded-lg border-l-4 border-sage shadow-sm">
                   <p className="text-navy italic font-serif text-lg">
                     "N'hésitez pas à me contacter pour une première discussion sans engagement. C'est le début d'une belle aventure."
                   </p>
                </div>
             </div>

          </div>
        </div>
      </section>
      
      {/* Le formulaire existant */}
      <Contact />
    </>
  );
}