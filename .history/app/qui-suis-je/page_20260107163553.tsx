import Navigation from "@/components/Navigation";
import Contact from "@/components/Contact";
import Image from "next/image";

export default function QuiSuisJe() {
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
                Votre Biographe
              </span>
              <h1 className="text-5xl md:text-7xl font-serif text-navy mb-8 leading-tight fade-in">
                Qui suis-je ?
              </h1>
              <div className="w-24 h-1 bg-gold mb-8"></div>
              <p className="text-2xl md:text-3xl font-serif text-navy mb-6 font-light">
                Je m'appelle <span className="font-bold text-old-rose italic">Delphine de Lapeyrière</span>.
              </p>
              <p className="text-lg text-navy-light leading-relaxed max-w-2xl">
                 Une passionnée des mots et des histoires de vie, prête à écouter la vôtre avec bienveillance et sensibilité.
              </p>
            </div>

            {/* Colonne Image (5 cols) - Cadre Photo */}
            <div className="md:col-span-5 order-1 md:order-2 relative">
                <div className="absolute inset-0 border-2 border-gold transform translate-x-4 translate-y-4 rounded-tl-[4rem] rounded-br-[4rem] z-0"></div>
                <div className="relative z-10 rounded-tl-[4rem] rounded-br-[4rem] overflow-hidden shadow-2xl aspect-[3/4] bg-white">
                  <Image
                    src="/Delphine.jpg"
                    alt="Delphine de Lapeyrière - Biographe familiale"
                    fill
                    className="object-cover object-left"
                    style={{ objectPosition: 'right 20%' }}
                    priority
                  />
                </div>
            </div>
          </div>
        </div>
      </section>

      {/* Chapitre 1 : Dévoreuse de livres (Fond Blanc) */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6 max-w-5xl">
          <div className="flex flex-col md:flex-row gap-16 items-start">
             
             {/* Colonne Visuelle "Chapitre" */}
             <div className="md:w-1/3 flex flex-col items-center text-center md:sticky md:top-32">
                <div className="w-20 h-20 bg-sage/10 rounded-full flex items-center justify-center mb-6 text-sage">
                    <span className="material-symbols-outlined text-4xl">menu_book</span>
                </div>
                <h2 className="text-3xl font-serif font-bold text-navy mb-4">Dévoreuse de livres</h2>
                <div className="w-px h-24 bg-sage/30 my-4 hidden md:block"></div>
             </div>

             {/* Colonne Récit */}
             <div className="md:w-2/3 space-y-8 text-lg text-navy-light leading-relaxed">
                <p>
                  <span className="text-5xl float-left mr-3 mt-[-8px] font-serif text-sage/30">D</span>
                  ès que j'ai su lire, j'ai dévoré tout ce qui me tombait sous la main, à une vitesse folle paraît-il. Mes parents avaient du mal à suivre et moi je suivais le bibliobus dans tous ses déplacements dans mon quartier.
                </p>
                
                <div className="pl-6 border-l-4 border-sage/30 italic text-navy/80 my-8">
                  <p className="mb-4">
                    En même temps que la lecture, j'ai commencé à écrire, mon journal secret. Je me revois dans notre maison familiale, j'avais aménagé un petit coin tranquille dans lequel j'avais installé mon bureau. Tous les soirs, consciencieusement j'y consignais ma journée, mes joies, mes états d'âmes et aussi le menu de la cantine !
                  </p>
                </div>

                <div className="bg-[#FDFBF7] p-8 rounded-xl border border-sage/10 relative">
                   <span className="material-symbols-outlined text-sage absolute top-6 right-6 text-2xl opacity-20">edit_note</span>
                   <p>
                     Plus tard, j'ai écrit des lettres, des poèmes exprimant mon mal-être, racontant mes chagrins d'amour ou mes révoltes, des nouvelles, un roman même ! Au fil de la vie, mes écrits se sont plus tournés vers les autres. En plus des lettres, à mon mari, mes enfants et ceux que j'aime, je me suis mise à écrire des biographies.
                   </p>
                </div>
             </div>
          </div>
        </div>
      </section>

      {/* Chapitre 2 : Femme de marin (Fond Navy Inversé pour le contraste ou Crème foncé) */}
      <section className="py-24 bg-navy text-cream relative overflow-hidden">
         <div className="absolute inset-0 opacity-5 bg-[url('/background.png')] bg-cover bg-center mix-blend-overlay"></div>
         
        <div className="container mx-auto px-6 max-w-5xl relative z-10">
          <div className="flex flex-col md:flex-row-reverse gap-16 items-start">
             
             {/* Colonne Visuelle "Chapitre" */}
             <div className="md:w-1/3 flex flex-col items-center text-center md:sticky md:top-32">
                <div className="w-20 h-20 bg-white/10 rounded-full flex items-center justify-center mb-6 text-gold border border-white/20">
                    <span className="material-symbols-outlined text-4xl">public</span>
                </div>
                <h2 className="text-3xl font-serif font-bold text-white mb-4">Femme de marin</h2>
                <div className="w-px h-24 bg-gold/30 my-4 hidden md:block"></div>
             </div>

             {/* Colonne Récit */}
             <div className="md:w-2/3 space-y-8 text-lg text-blue-50/90 leading-relaxed font-light">
                <p>
                  Après des études d'histoire et de communication, j'ai eu une vie de femme de marin remplie de déménagements, d'enfants, de voyages, de destinations exotiques, de rencontres, d'adieux et de retrouvailles.
                </p>
                
                <p className="text-xl text-white font-serif italic">
                   "J'ai le grand bonheur d'avoir un mari merveilleux, six enfants et une belle-fille en or et depuis quelques temps, un trésor de petite-fille."
                </p>

                <p>
                    Ma vie ne ressemble pas à un grand lac aux eaux calmes. Je n'ai pas suivi mon mari sur toutes les mers du globe mais j'ai vécu quelques tempêtes, de belles accalmies et de magnifiques escales. Nous avons eu la chance d'habiter à <strong className="text-gold font-normal">Tahiti</strong>, en <strong className="text-gold font-normal">Belgique</strong>, en <strong className="text-gold font-normal">Russie</strong> et en <strong className="text-gold font-normal">Afrique du Sud</strong>. J'ai été aussi tour à tour toulonnaise, parisienne, crozonnaise et havraise.
                </p>

                <div className="bg-white/5 p-8 rounded-xl border-l-2 border-gold">
                   <p>
                     Une vie trépidante au cours de laquelle il faut sans cesse se réadapter et qui laisse peu de place à la routine, encore moins à l'écriture d'un grand roman ! Cependant l'écriture ne m'a finalement jamais complètement abandonnée, j'ai toujours éprouvé le besoin de coucher des mots sur le papier et sans écrire de grands romans, ma plume m'a souvent démangée.
                   </p>
                </div>
             </div>
          </div>
        </div>
      </section>

      {/* Chapitre 3 : Plume d'un recueil unique (Fond Crème) */}
      <section className="py-24 bg-[#FDFBF7]">
        <div className="container mx-auto px-6 max-w-5xl">
          <div className="flex flex-col md:flex-row gap-16 items-start">
             
             {/* Colonne Visuelle "Chapitre" */}
             <div className="md:w-1/3 flex flex-col items-center text-center md:sticky md:top-32">
                <div className="w-20 h-20 bg-old-rose/10 rounded-full flex items-center justify-center mb-6 text-old-rose">
                    <span className="material-symbols-outlined text-4xl">history_edu</span>
                </div>
                <h2 className="text-3xl font-serif font-bold text-navy mb-4 leading-tight">
                  Plume d'un recueil unique<br/> 
                  <span className="text-lg font-sans font-normal text-navy-light block mt-2">pour des personnes uniques</span>
                </h2>
             </div>

             {/* Colonne Récit */}
             <div className="md:w-2/3 space-y-8 text-lg text-navy-light leading-relaxed">
                <p>
                  Quand j'y repense, cette aventure a même démarré lorsque j'avais une dizaine d'années, à la mort de mon arrière-grand-mère. Mon arrière-grand-père nous avait demandé d'écrire les souvenirs que nous avions d'elle. J'avais aimé cet exercice et il m'avait marquée.
                </p>
                <p>
                   Quelques années après, à la mort de mes grands-parents cette fois-ci, j'ai voulu leur dédier un recueil, pour garder une trace de leur vie si riche, pour transmettre à mes enfants ce passé qui nous avait construits et qui nous permettait de regarder l'avenir en étant fiers de nos racines.
                </p>
                
                <div className="flex gap-4 bg-white p-6 rounded-xl shadow-sm border-l-4 border-old-rose">
                    <span className="material-symbols-outlined text-old-rose text-3xl flex-shrink-0">sentiment_dissatisfied</span>
                    <p className="italic text-navy">
                      Mon seul regret est de ne pas les avoir questionnés plus sur certains événements, certaines décisions qu'ils avaient pu prendre. Ils n'étaient plus là pour me répondre…
                    </p>
                </div>

                {/* Bloc Formation / Crédibilité */}
                <div className="mt-12 pt-12 border-t border-gray-200">
                    <div className="flex flex-col md:flex-row gap-6 items-center bg-sage/5 p-8 rounded-2xl border border-sage/10">
                        <div className="bg-white p-4 rounded-full shadow-sm text-sage">
                             <span className="material-symbols-outlined text-4xl">school</span>
                        </div>
                        <div>
                            <h3 className="font-serif font-bold text-navy text-xl mb-2">Une formation reconnue</h3>
                            <p className="text-base">
                                Avant de me lancer et de proposer mes services à un cercle plus élargi que la famille, j'ai suivi la formation « devenir biographe » d'<strong>Anne-Sylvie Pinel</strong>. Biographe renommée depuis de nombreuses années, sa formation est de grande qualité. J'y ai appris une méthodologie, les différentes manières de conduire un entretien, toutes les facettes de ce métier si passionnant !
                            </p>
                        </div>
                    </div>
                </div>
             </div>
          </div>
        </div>
      </section>

      {/* CTA Final */}
      <section className="py-24 bg-white text-center relative">
        <div className="container mx-auto px-6 max-w-3xl relative z-10">
          <div className="inline-block p-4 rounded-full bg-gold/10 text-gold mb-6">
             <span className="material-symbols-outlined text-4xl">edit_square</span>
          </div>
          <h2 className="text-4xl font-serif font-bold text-navy mb-6">
            Prêt à écrire votre histoire ensemble ?
          </h2>
          <p className="text-xl text-navy-light mb-10 leading-relaxed">
            Avec mon expérience de vie et ma formation, je suis là pour vous accompagner dans cette belle aventure qu'est l'écriture de votre biographie.
          </p>
          <a
            href="#contact"
            className="inline-block bg-gold text-navy text-xl font-bold py-4 px-10 rounded-full hover:bg-navy hover:text-white transition-all duration-300 shadow-xl hover:shadow-gold/20"
          >
            Me contacter
          </a>
        </div>
      </section>

      <Contact />
    </>
  );
}