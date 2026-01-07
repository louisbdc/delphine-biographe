import Navigation from "@/components/Navigation";
import Contact from "@/components/Contact";
import Image from "next/image";

export default function QuiSuisJe() {
  return (
    <>
      <Navigation />
      
      {/* Hero Section */}
      <section className="py-20 bg-cream-dark">
        <div className="container mx-auto px-6 max-w-5xl">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="order-2 md:order-1 text-center md:text-left">
              <h1 className="text-5xl md:text-6xl font-serif font-bold text-navy mb-6">
                Qui suis-je ?
              </h1>
              <div className="w-24 h-1 bg-gold mx-auto md:mx-0 mb-8"></div>
              <p className="text-3xl font-serif text-navy mb-4">
                Je m'appelle <span className="font-bold text-old-rose">Delphine de Lapeyrière</span>.
              </p>
            </div>
            <div className="order-1 md:order-2">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                <div className="absolute -top-4 -left-4 w-full h-full border-2 border-gold rounded-2xl z-0"></div>
                <Image
                  src="/Delphine.jpg"
                  alt="Delphine de Lapeyrière - Biographe familiale"
                  width={600}
                  height={800}
                  className="relative z-10 rounded-2xl w-full h-auto object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 1: Dévoreuse de livres */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6 max-w-5xl">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="order-2 md:order-1">
              <div className="bg-cream-dark p-8 rounded-2xl border-l-4 border-sage">
                <div className="flex items-center gap-4 mb-6">
                  <div className="bg-sage/10 w-16 h-16 rounded-full flex items-center justify-center">
                    <span className="material-symbols-outlined text-4xl text-sage">
                      menu_book
                    </span>
                  </div>
                  <h2 className="text-3xl font-serif font-bold text-navy">
                    Dévoreuse de livres
                  </h2>
                </div>
                <div className="space-y-4 text-xl text-navy-light">
                  <p>
                    Dès que j'ai su lire, j'ai dévoré tout ce qui me tombait sous la main, à une vitesse folle 
                    paraît-il. Mes parents avaient du mal à suivre et moi je suivais le bibliobus dans tous ses 
                    déplacements dans mon quartier.
                  </p>
                  <p>
                    En même temps que la lecture, j'ai commencé à écrire, mon journal secret. Je me revois dans 
                    notre maison familiale, j'avais aménagé un petit coin tranquille dans lequel j'avais installé 
                    mon bureau. Tous les soirs, consciencieusement j'y consignais ma journée, mes joies, mes états 
                    d'âmes et aussi le menu de la cantine !
                  </p>
                  <p className="bg-white p-6 rounded-xl border-l-4 border-sage">
                    <span className="material-symbols-outlined text-sage float-left mr-3 text-3xl">
                      edit_note
                    </span>
                    Plus tard, j'ai écrit des lettres, des poèmes exprimant mon mal-être, racontant mes chagrins 
                    d'amour ou mes révoltes, des nouvelles, un roman même ! Au fil de la vie, mes écrits se sont 
                    plus tournés vers les autres. En plus des lettres, à mon mari, mes enfants et ceux que j'aime, 
                    je me suis mise à écrire des biographies.
                  </p>
                </div>
              </div>
            </div>
            <div className="order-1 md:order-2">
              <div className="bg-sage/5 p-12 rounded-2xl text-center">
                <span className="material-symbols-outlined text-8xl text-sage opacity-50">
                  auto_stories
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 2: Femme de marin */}
      <section className="py-20 bg-cream-dark">
        <div className="container mx-auto px-6 max-w-5xl">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="bg-navy/5 p-12 rounded-2xl text-center">
                <span className="material-symbols-outlined text-8xl text-navy opacity-50">
                  directions_boat
                </span>
              </div>
            </div>
            <div>
              <div className="bg-white p-8 rounded-2xl border-l-4 border-navy">
                <div className="flex items-center gap-4 mb-6">
                  <div className="bg-navy/10 w-16 h-16 rounded-full flex items-center justify-center">
                    <span className="material-symbols-outlined text-4xl text-navy">
                      public
                    </span>
                  </div>
                  <h2 className="text-3xl font-serif font-bold text-navy">
                    Femme de marin
                  </h2>
                </div>
                <div className="space-y-4 text-xl text-navy-light">
                  <p>
                    Après des études d'histoire et de communication, j'ai eu une vie de femme de marin remplie de 
                    déménagements, d'enfants, de voyages, de destinations exotiques, de rencontres, d'adieux et 
                    de retrouvailles.
                  </p>
                  <p className="bg-cream-dark p-6 rounded-xl border-l-4 border-gold">
                    <span className="material-symbols-outlined text-gold float-left mr-3 text-3xl">
                      favorite
                    </span>
                    J'ai le grand bonheur d'avoir un mari merveilleux, six enfants et une belle-fille en or et 
                    depuis quelques temps, un trésor de petite-fille.
                  </p>
                  <p>
                    Ma vie ne ressemble pas à un grand lac aux eaux calmes. Je n'ai pas suivi mon mari sur toutes 
                    les mers du globe mais j'ai vécu quelques tempêtes, de belles accalmies et de magnifiques 
                    escales. Nous avons eu la chance d'habiter à <strong>Tahiti</strong>, en <strong>Belgique</strong>, 
                    en <strong>Russie</strong> et en <strong>Afrique du Sud</strong>. J'ai été aussi tour à tour 
                    toulonnaise, parisienne, crozonnaise et havraise.
                  </p>
                  <p>
                    Une vie trépidante au cours de laquelle il faut sans cesse se réadapter et qui laisse peu de 
                    place à la routine, encore moins à l'écriture d'un grand roman ! Cependant l'écriture ne m'a 
                    finalement jamais complètement abandonnée, j'ai toujours éprouvé le besoin de coucher des mots 
                    sur le papier et sans écrire de grands romans, ma plume m'a souvent démangée.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 3: Plume d'un recueil unique */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6 max-w-5xl">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="order-2 md:order-1">
              <div className="bg-cream-dark p-8 rounded-2xl border-l-4 border-old-rose">
                <div className="flex items-center gap-4 mb-6">
                  <div className="bg-old-rose/10 w-16 h-16 rounded-full flex items-center justify-center">
                    <span className="material-symbols-outlined text-4xl text-old-rose">
                      history_edu
                    </span>
                  </div>
                  <h2 className="text-3xl font-serif font-bold text-navy">
                    Plume d'un recueil unique pour des personnes uniques
                  </h2>
                </div>
                <div className="space-y-4 text-xl text-navy-light">
                  <p>
                    Quand j'y repense, cette aventure a même démarré lorsque j'avais une dizaine d'années, à la 
                    mort de mon arrière-grand-mère. Mon arrière-grand-père nous avait demandé d'écrire les souvenirs 
                    que nous avions d'elle. J'avais aimé cet exercice et il m'avait marquée.
                  </p>
                  <p>
                    Quelques années après, à la mort de mes grands-parents cette fois-ci, j'ai voulu leur dédier 
                    un recueil, pour garder une trace de leur vie si riche, pour transmettre à mes enfants ce passé 
                    qui nous avait construits et qui nous permettait de regarder l'avenir en étant fiers de nos 
                    racines.
                  </p>
                  <p className="bg-white p-6 rounded-xl border-l-4 border-old-rose">
                    <span className="material-symbols-outlined text-old-rose float-left mr-3 text-3xl">
                      sentiment_dissatisfied
                    </span>
                    Mon seul regret est de ne pas les avoir questionnés plus sur certains événements, certaines 
                    décisions qu'ils avaient pu prendre. Ils n'étaient plus là pour me répondre…
                  </p>
                  <p className="bg-sage/10 p-6 rounded-xl border-l-4 border-sage">
                    <span className="material-symbols-outlined text-sage float-left mr-3 text-3xl">
                      school
                    </span>
                    Avant de me lancer et de proposer mes services à un cercle plus élargi que la famille, j'ai suivi 
                    la formation « devenir biographe » d'<strong>Anne-Sylvie Pinel</strong>. Biographe renommée 
                    depuis de nombreuses années, sa formation est de grande qualité. J'y ai appris une méthodologie, 
                    les différentes manières de conduire un entretien, toutes les facettes de ce métier si 
                    passionnant !
                  </p>
                </div>
              </div>
            </div>
            <div className="order-1 md:order-2">
              <div className="bg-old-rose/5 p-12 rounded-2xl text-center">
                <span className="material-symbols-outlined text-8xl text-old-rose opacity-50">
                  diversity_3
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-navy text-white">
        <div className="container mx-auto px-6 max-w-4xl text-center">
          <h2 className="text-4xl font-serif font-bold mb-6">
            Prêt à écrire votre histoire ensemble ?
          </h2>
          <p className="text-xl mb-8 text-cream">
            Avec mon expérience de vie et ma formation, je suis là pour vous accompagner 
            dans cette belle aventure qu'est l'écriture de votre biographie.
          </p>
          <a
            href="#contact"
            className="inline-block bg-gold text-navy text-xl font-bold py-4 px-8 rounded-lg hover:bg-gold/90 transition-colors shadow-lg"
          >
            Me contacter
          </a>
        </div>
      </section>

      <Contact />
    </>
  );
}

