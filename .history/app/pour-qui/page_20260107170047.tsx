import Navigation from "@/components/Navigation";
import Image from "next/image";

export default function PourQui() {
  return (
    <>
      <Navigation />
      
      {/* Hero Section : Portrait Élégant */}
      <section className="relative py-24 bg-[#FDFBF7] overflow-hidden">
         {/* Décoration d'arrière-plan */}
         <div className="absolute top-0 right-0 w-full h-full opacity-10 pointer-events-none">
            <div className="absolute right-[-10%] top-[-10%] w-[50vw] h-[50vw] bg-gold/20 rounded-full blur-[100px]"></div>
         </div>

        <div className="container mx-auto px-6 max-w-6xl relative z-10">
          <div className="grid md:grid-cols-12 gap-12 items-center">
            {/* Colonne Texte (7 cols) */}
            <div className="md:col-span-7 order-2 md:order-1">
               <span className="text-gold font-bold tracking-widest uppercase text-sm mb-6 block fade-in">
                Transmission & Mémoire
              </span>
              <h1 className="text-5xl md:text-7xl font-serif text-navy mb-8 leading-tight fade-in">
                Pour qui ?
              </h1>
              <div className="w-24 h-1 bg-gold mb-8"></div>
              <p className="text-lg text-navy-light leading-relaxed max-w-2xl">
                La biographie familiale s'adresse à tous ceux qui souhaitent préserver et transmettre leurs souvenirs, 
                qu'il s'agisse d'un cadeau à offrir, d'un cadeau à se faire, ou d'une manière de ne pas oublier.
              </p>
            </div>

            {/* Colonne Image (5 cols) - Style Album photo unifié */}
            <div className="md:col-span-5 order-1 md:order-2 relative">
              <div className="absolute inset-0 bg-gold/10 transform translate-x-4 translate-y-4 rounded-xl z-0"></div>
              <div className="relative z-10 h-[500px] w-full rounded-xl overflow-hidden shadow-xl">
                <Image
                  src="/present_to_offer.jpg"
                  alt="Pour qui"
                  fill
                  className="object-cover"
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 1 : Un cadeau à offrir (Layout Image à Droite) */}
      <section className="py-24 bg-white border-b border-gray-100">
        <div className="container mx-auto px-6 max-w-6xl">
          <div className="grid md:grid-cols-12 gap-12 items-center">
            
            {/* Colonne Texte (7 cols) */}
            <div className="md:col-span-7 md:pr-12 order-2 md:order-1">
              <div className="flex items-center gap-4 mb-8">
                <span className="w-12 h-px bg-gold"></span>
                <span className="text-gold font-bold uppercase tracking-widest text-sm">Les aînés</span>
              </div>
              
              <div className="mb-8">
                <h2 className="text-4xl font-serif text-navy mb-4">
                  Un cadeau à offrir
                </h2>
                {/* Séparateur signature */}
                <div className="w-16 h-0.5 bg-gold/50"></div>
              </div>
              
              <div className="text-lg text-navy-light space-y-6 leading-relaxed">
                <p>
                  <span className="text-5xl float-left mr-3 mt-[-8px] font-serif text-navy/20">V</span>
                  ous avez une grand-mère qui aime raconter ses souvenirs, ou un grand-père plutôt silencieux 
                  mais vous savez que sa vie a été riche. Vous aimez écouter les souvenirs des plus anciens, 
                  vous leur posez souvent des questions sur leur vie.
                </p>
                
                {/* Encart "Highlight" style citation */}
                <div className="relative bg-[#FDFBF7] p-8 rounded-xl border-l-4 border-gold mt-8">
                  <span className="absolute -top-4 -right-4 w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-md text-gold">
                    <span className="material-symbols-outlined text-2xl">card_giftcard</span>
                  </span>
                  <p className="text-navy font-serif text-xl italic">
                    "Offrez-leur de raconter leurs souvenirs et d'en faire un livre. C'est un magnifique cadeau 
                    pour eux et pour vous !"
                  </p>
                </div>
              </div>
            </div>

            {/* Colonne Image (5 cols) */}
            <div className="md:col-span-5 relative order-1 md:order-2">
              <div className="absolute inset-0 bg-gold/10 transform translate-x-4 translate-y-4 rounded-2xl z-0"></div>
              <div className="relative z-10 h-[500px] w-full rounded-2xl overflow-hidden shadow-2xl">
                <Image
                  src="/present_to_offer.jpg"
                  alt="Un cadeau à offrir"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 2 : Un cadeau à se faire (Layout Image à Gauche) */}
      <section className="py-24 bg-[#FDFBF7]">
        <div className="container mx-auto px-6 max-w-6xl">
          <div className="grid md:grid-cols-12 gap-12 items-center">
            
            {/* Colonne Image (5 cols) */}
            <div className="md:col-span-5 relative">
              <div className="absolute inset-0 bg-sage/10 transform -translate-x-4 translate-y-4 rounded-2xl z-0"></div>
              <div className="relative z-10 h-[500px] w-full rounded-2xl overflow-hidden shadow-2xl">
                <Image
                  src="/Gift_to_make_yourself.jpg"
                  alt="Un cadeau à se faire"
                  fill
                  className="object-cover"
                />
              </div>
            </div>

            {/* Colonne Texte (7 cols) */}
            <div className="md:col-span-7 md:pl-12">
              <div className="flex items-center gap-4 mb-8">
                <span className="w-12 h-px bg-sage"></span>
                <span className="text-sage font-bold uppercase tracking-widest text-sm">Pour soi-même</span>
              </div>
              
              <div className="mb-8">
                <h2 className="text-4xl font-serif text-navy mb-4">
                  Un cadeau à se faire
                </h2>
                {/* Séparateur signature */}
                <div className="w-16 h-0.5 bg-sage/50"></div>
              </div>
              
              <div className="text-lg text-navy-light space-y-6 leading-relaxed">
                <p>
                  Vous avez le sentiment que votre vie mérite de ne pas être oubliée. Vous avez vécu une épreuve 
                  et vous avez besoin de mettre des mots dessus pour cicatriser, une période de votre vie vous a 
                  particulièrement marqué et vous aimeriez en laisser une trace écrite...
                </p>
                
                {/* Encart "Highlight" */}
                <div className="bg-white p-8 rounded-xl shadow-sm border-l-4 border-sage mt-8 flex gap-4">
                  <div className="flex-shrink-0 mt-1">
                    <span className="material-symbols-outlined text-3xl text-sage">healing</span>
                  </div>
                  <p className="text-navy font-medium">
                    Écrire votre histoire, c'est aussi un chemin vers la guérison et la transmission de votre 
                    expérience unique.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 3 : Pour ne pas oublier (Layout Centré / Éditorial) */}
      <section className="py-24 bg-white relative">
        <div className="container mx-auto px-6 max-w-4xl">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-old-rose/10 text-old-rose mb-6">
              <span className="material-symbols-outlined text-lg">history</span>
              <span className="font-bold text-sm uppercase tracking-wider">Archives & Mémoire</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-serif text-navy mb-4">
              Pour ne pas oublier
            </h2>
            {/* Séparateur signature */}
            <div className="w-16 h-0.5 bg-old-rose/50 mx-auto mb-8"></div>
          </div>

          <div className="bg-cream-dark rounded-3xl p-8 md:p-12 shadow-xl border border-gray-100 relative">
             {/* Image décorative fondue ou petite illustration */}
             <div className="grid md:grid-cols-2 gap-10 items-center">
                <div className="space-y-6 text-lg text-navy-light leading-relaxed">
                  <p>
                    Vous avez retrouvé des lettres émouvantes, touchantes, importantes, photographie d'une époque 
                    révolue. Que diriez-vous d'en faire un livre en y ajoutant votre touche, des renseignements, 
                    des photos, des commentaires ?
                  </p>
                  <p className="font-serif text-xl text-navy italic border-l-4 border-old-rose pl-6">
                    "Transformez vos archives en un récit vivant qui préservera ces précieux souvenirs pour les 
                    générations futures."
                  </p>
                </div>
                
                <div className="relative h-64 md:h-full min-h-[250px] w-full rounded-2xl overflow-hidden border-4 border-white shadow-lg rotate-2 hover:rotate-0 transition-transform duration-500">
                  <Image
                    src="/to_not_forget.jpg"
                    alt="Lettres et souvenirs"
                    fill
                    className="object-cover"
                  />
                </div>
             </div>
          </div>
        </div>
      </section>

      {/* CTA Final */}
      <section className="py-24 bg-navy text-white text-center">
        <div className="container mx-auto px-6 max-w-3xl">
          <h2 className="text-4xl font-serif font-bold mb-8">
            Prêt à commencer votre histoire ?
          </h2>
          <p className="text-xl text-blue-100 mb-10 font-light">
            Que vous souhaitiez offrir ce cadeau précieux ou l'offrir à vous-même, 
            je suis là pour vous accompagner dans cette belle aventure.
          </p>
          <a
            href="/contact"
            className="inline-block bg-gold text-navy text-xl font-bold py-4 px-10 rounded-full hover:bg-white transition-all duration-300 shadow-lg hover:shadow-gold/20"
          >
            Me contacter
          </a>
        </div>
      </section>
    </>
  );
}