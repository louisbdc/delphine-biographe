import Navigation from "@/components/Navigation";
import Contact from "@/components/Contact";
import Image from "next/image";

export default function PourQuoi() {
  return (
    <>
      <Navigation />
      
      {/* Hero Section : Introspective et Poétique */}
      <section className="relative py-24 bg-navy text-cream overflow-hidden">
        {/* Motif subtil en arrière-plan */}
        <div className="absolute top-0 right-0 w-1/2 h-full opacity-5 pointer-events-none">
          <div className="w-full h-full bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-white via-transparent to-transparent"></div>
        </div>
        
        <div className="container mx-auto px-6 max-w-5xl relative z-10 text-center">
          <span className="text-gold font-bold tracking-widest uppercase text-sm mb-6 block fade-in">
            Donner du sens au temps
          </span>
          <h1 className="text-5xl md:text-7xl font-serif font-bold mb-8 leading-tight fade-in">
            Pourquoi écrire <br/>
            <span className="italic text-blue-100 font-light">le livre de sa vie ?</span>
          </h1>
          <div className="w-px h-16 bg-gold mx-auto mb-8 opacity-50"></div>
          <p className="text-xl md:text-2xl text-blue-50/80 max-w-3xl mx-auto leading-relaxed font-light fade-in">
            Ce n'est pas un acte de vanité, c'est un acte d'amour. 
            C'est décider que vos souvenirs méritent de survivre à l'oubli pour devenir les racines de ceux qui vous suivront.
          </p>
        </div>
      </section>

      {/* Section 1 : La Transmission */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6 max-w-6xl">
          <div className="grid md:grid-cols-12 gap-12 items-center">
            
            {/* Image avec cadre décalé */}
            <div className="md:col-span-5 relative group order-2 md:order-1">
              <div className="absolute top-4 left-4 w-full h-full border-2 border-sage rounded-tl-[3rem] rounded-br-[3rem] z-0 transition-transform duration-500 group-hover:translate-x-2 group-hover:translate-y-2"></div>
              <div className="relative z-10 rounded-tl-[3rem] rounded-br-[3rem] overflow-hidden shadow-2xl aspect-[3/4] bg-gray-100">
                 {/* Utilisation de placeholder-library.svg car sea.jpg n'existe pas dans la codebase fournie */}
                 <Image 
                    src="/placeholder-library.svg" 
                    alt="Souvenirs - Transmission intergénérationnelle"
                    fill
                    className="object-cover"
                 />
              </div>
            </div>

            {/* Contenu Textuel */}
            <div className="md:col-span-7 md:pl-8 order-1 md:order-2">
              <div className="flex items-center gap-4 mb-6">
                <span className="w-12 h-px bg-sage"></span>
                <span className="text-sage font-bold uppercase tracking-widest text-sm">L'héritage</span>
              </div>
              <h2 className="text-4xl md:text-5xl font-serif text-navy mb-8">
                Un pont entre <br/>les générations
              </h2>
              <div className="space-y-6 text-lg text-navy-light leading-relaxed">
                <p>
                  <span className="text-6xl float-left mr-3 mt-[-10px] font-serif text-gold">V</span>
                  ous êtes le gardien d'une époque révolue. Vos enfants et petits-enfants connaissent le monde d'aujourd'hui, mais savent-ils d'où ils viennent ?
                </p>
                <p>
                  Écrire votre biographie, c'est leur offrir des racines. C'est transformer vos expériences, vos joies et vos épreuves en une boussole pour leur propre vie. C'est répondre aux questions qu'ils n'ont pas encore pensé à vous poser, et auxquelles il sera un jour trop tard pour répondre.
                </p>
                <blockquote className="border-l-4 border-gold pl-6 italic text-navy my-8 bg-cream/50 p-4 rounded-r-lg">
                  "On ne lègue pas que des biens matériels. On lègue une histoire, une force, une identité."
                </blockquote>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 2 : Les 3 Piliers */}
      <section className="py-24 bg-[#FDFBF7]">
        <div className="container mx-auto px-6 max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-serif text-navy mb-6">Au-delà du simple récit</h2>
            <p className="text-navy-light text-xl max-w-2xl mx-auto">
              La démarche biographique a des vertus souvent insoupçonnées pour celui qui raconte.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Carte 1 : Mettre de l'ordre */}
            <div className="bg-white p-10 rounded-xl shadow-sm hover:shadow-xl transition-all duration-300 border-t-4 border-old-rose group">
              <div className="mb-6 bg-old-rose/10 w-14 h-14 rounded-full flex items-center justify-center group-hover:bg-old-rose transition-colors">
                <span className="material-symbols-outlined text-3xl text-old-rose group-hover:text-white transition-colors">psychology</span>
              </div>
              <h3 className="text-2xl font-serif text-navy mb-4">Comprendre son parcours</h3>
              <p className="text-navy-light leading-relaxed">
                La vie file souvent à toute allure. Prendre le temps de se retourner, de mettre des mots sur les événements, permet de <strong>donner une cohérence</strong> à son existence. C'est une démarche apaisante, qui permet de voir le fil rouge de sa propre destinée.
              </p>
            </div>

            {/* Carte 2 : Rassembler */}
            <div className="bg-white p-10 rounded-xl shadow-sm hover:shadow-xl transition-all duration-300 border-t-4 border-gold group transform md:-translate-y-4">
              <div className="mb-6 bg-gold/10 w-14 h-14 rounded-full flex items-center justify-center group-hover:bg-gold transition-colors">
                <span className="material-symbols-outlined text-3xl text-gold group-hover:text-white transition-colors">diversity_3</span>
              </div>
              <h3 className="text-2xl font-serif text-navy mb-4">Fédérer la famille</h3>
              <p className="text-navy-light leading-relaxed">
                Le livre devient souvent un objet central dans la famille. Il suscite les discussions, ravive les souvenirs communs et permet aux plus jeunes de découvrir leurs aïeux sous un jour nouveau. C'est un formidable <strong>vecteur de lien social</strong>.
              </p>
            </div>

            {/* Carte 3 : Sauvegarder */}
            <div className="bg-white p-10 rounded-xl shadow-sm hover:shadow-xl transition-all duration-300 border-t-4 border-sage group">
              <div className="mb-6 bg-sage/10 w-14 h-14 rounded-full flex items-center justify-center group-hover:bg-sage transition-colors">
                <span className="material-symbols-outlined text-3xl text-sage group-hover:text-white transition-colors">inventory_2</span>
              </div>
              <h3 className="text-2xl font-serif text-navy mb-4">Sauver ses archives</h3>
              <p className="text-navy-light leading-relaxed">
                Photos jaunies au fond d'un tiroir, lettres d'amour, documents officiels... Intégrés dans votre livre, ces trésors retrouvent leur éclat et leur contexte. Vous transformez un carton poussiéreux en un <strong>musée portatif</strong>.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Section 3 : Le pouvoir de l'écrit */}
      <section className="relative py-24 bg-navy overflow-hidden">
        {/* Abstract Background Decoration */}
        <div className="absolute inset-0 bg-[url('/background.png')] opacity-10 bg-cover bg-fixed"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-navy via-navy/90 to-transparent"></div>

        <div className="container mx-auto px-6 max-w-5xl relative z-10">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div className="text-cream">
              <h2 className="text-4xl font-serif mb-6 leading-tight">
                "Les paroles s'envolent, <br/>
                <span className="text-gold italic">les écrits restent.</span>"
              </h2>
              <div className="space-y-6 text-lg text-blue-100 font-light leading-relaxed">
                <p>
                  À l'ère du numérique où tout est éphémère, le livre papier garde une aura unique. 
                  C'est un objet sensuel : l'odeur du papier, le poids de l'ouvrage, la texture de la couverture.
                </p>
                <p>
                  C'est le seul support qui ne nécessite aucune technologie pour être lu dans 100 ans. 
                  En faisant ce livre, vous inscrivez votre histoire dans la durée, de manière inaltérable.
                </p>
              </div>
            </div>
            
            {/* Image d'un beau livre ouvert ou d'une bibliothèque */}
            <div className="relative h-64 md:h-96 w-full rounded-2xl overflow-hidden shadow-2xl border border-white/10 group">
               <Image 
                 src="/to_not_forget.jpg"
                 alt="Le livre comme objet de mémoire"
                 fill
                 className="object-cover opacity-90 group-hover:scale-105 transition-transform duration-700"
               />
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-cream-dark">
        <div className="container mx-auto px-6 max-w-4xl text-center">
          <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mx-auto mb-6 shadow-md text-gold">
            <span className="material-symbols-outlined text-3xl">edit</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-navy mb-6">
            Quel sera le message de votre livre ?
          </h2>
          <p className="text-xl text-navy-light mb-8 max-w-2xl mx-auto">
            Chaque projet commence par une simple conversation. Racontez-moi ce qui vous tient à cœur.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
             <a
              href="/comment"
              className="bg-white text-navy border-2 border-navy px-8 py-3 rounded-full font-bold hover:bg-navy hover:text-white transition-all duration-300"
            >
              Voir la méthode
            </a>
            <a
              href="#contact"
              className="bg-gold text-navy px-8 py-3 rounded-full font-bold hover:bg-navy hover:text-white transition-all duration-300 shadow-lg"
            >
              En discuter avec moi
            </a>
          </div>
        </div>
      </section>

      <Contact />
    </>
  );
}