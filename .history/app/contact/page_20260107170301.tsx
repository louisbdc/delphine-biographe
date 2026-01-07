import Navigation from "@/components/Navigation";
import Contact from "@/components/Contact";

export default function ContactPage() {
  return (
    <>
      <Navigation />
      
      {/* Hero Section : Portrait Élégant */}
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
            <p className="text-lg text-navy-light leading-relaxed max-w-3xl mx-auto">
              Je navigue entre <strong className="text-navy">Versailles</strong> et <strong className="text-navy">Paris</strong> mais je peux me déplacer plus loin sur demande. N'hésitez pas à me contacter pour une première discussion sans engagement.
            </p>
          </div>
        </div>
      </section>
      
      <Contact />
    </>
  );
}

