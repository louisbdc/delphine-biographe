import Navigation from "@/components/Navigation";
import Contact from "@/components/Contact";

export default function Combien() {
  return (
    <>
      <Navigation />
      
      {/* Hero Section */}
      <section className="py-20 bg-cream-dark">
        <div className="container mx-auto px-6 max-w-4xl text-center">
          <h1 className="text-5xl md:text-6xl font-serif font-bold text-navy mb-6">
            Combien ça coûte ?
          </h1>
          <div className="w-24 h-1 bg-gold mx-auto mb-8"></div>
          <p className="text-2xl text-navy-light max-w-3xl mx-auto leading-relaxed">
            Le livre de votre vie aura un prix inestimable pour votre famille mais il a un coût bien réel !
          </p>
        </div>
      </section>

      {/* Introduction */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6 max-w-4xl">
          <div className="text-center mb-12">
            <p className="text-xl md:text-2xl text-navy-light leading-relaxed">
              Offrir le récit de votre vie à vos proches, c'est leur transmettre un trésor. 
              Pour vous accompagner dans ce projet unique, je mets à votre service mon savoir-faire 
              et mon attention, afin de créer un livre qui vous ressemble, vivant et fidèle à vos souvenirs.
            </p>
          </div>
        </div>
      </section>

      {/* Section principale : Un accompagnement sur mesure */}
      <section className="py-20 bg-cream-dark">
        <div className="container mx-auto px-6 max-w-5xl">
          <h2 className="text-4xl font-serif font-bold text-navy mb-12 text-center">
            Un accompagnement sur mesure
          </h2>
          <p className="text-xl text-navy-light text-center mb-12 leading-relaxed max-w-3xl mx-auto">
            Chaque entretien que nous aurons ensemble sera suivi d'un travail d'écriture, 
            de mise en forme et d'agencement, pour que votre histoire prenne vie avec fluidité et authenticité.
          </p>

          <div className="grid md:grid-cols-3 gap-8 lg:gap-10">
            {/* Votre investissement */}
            <div className="bg-white p-8 rounded-2xl border-l-4 border-gold shadow-lg">
              <div className="flex items-center gap-3 mb-6">
                <span className="material-symbols-outlined text-4xl text-gold">
                  euro
                </span>
                <h3 className="text-2xl font-serif font-bold text-navy">
                  Votre investissement
                </h3>
              </div>
              <p className="text-lg md:text-xl text-navy-light mb-4 leading-relaxed">
                Chaque séance (un entretien + travail d'écriture) revient à <strong className="text-navy">440 €</strong>, 
                ce qui correspond à environ <strong className="text-navy">7 heures de travail</strong> (fourchette haute) 
                après notre échange.
              </p>
            </div>

            {/* Un rythme adapté */}
            <div className="bg-white p-8 rounded-2xl border-l-4 border-sage shadow-lg">
              <div className="flex items-center gap-3 mb-6">
                <span className="material-symbols-outlined text-4xl text-sage">
                  schedule
                </span>
                <h3 className="text-2xl font-serif font-bold text-navy">
                  Un rythme adapté
                </h3>
              </div>
              <p className="text-lg md:text-xl text-navy-light leading-relaxed">
                Vous pouvez choisir de raconter une période précise de votre vie ou une biographie complète, 
                qui nécessite généralement entre <strong className="text-navy">dix et vingt entretiens</strong>.
              </p>
            </div>

            {/* Un paiement échelonné */}
            <div className="bg-white p-8 rounded-2xl border-l-4 border-old-rose shadow-lg">
              <div className="flex items-center gap-3 mb-6">
                <span className="material-symbols-outlined text-4xl text-old-rose">
                  payment
                </span>
                <h3 className="text-2xl font-serif font-bold text-navy">
                  Un paiement échelonné
                </h3>
              </div>
              <p className="text-lg md:text-xl text-navy-light leading-relaxed">
                La première séance est réglée à l'avance, puis le montant est ajusté en fonction du temps réellement passé, 
                d'un entretien à l'autre. Il est possible que les séances suivantes soient moins chères. 
                Vos paiements seront étalés sur plusieurs mois, selon le rythme des entretiens.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Section flexibilité */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6 max-w-4xl">
          <div className="bg-cream p-8 md:p-12 rounded-3xl border-l-4 border-navy shadow-lg">
            <div className="flex items-start gap-4 mb-6">
              <span className="material-symbols-outlined text-5xl text-navy">
                flexibility
              </span>
              <h2 className="text-3xl md:text-4xl font-serif font-bold text-navy">
                Une collaboration flexible
              </h2>
            </div>
            <p className="text-xl md:text-2xl text-navy-light leading-relaxed">
              Votre projet est unique, et le temps nécessaire pour le réaliser peut varier. 
              Vous restez libre d'interrompre notre collaboration à tout moment, 
              en réglant simplement le travail effectué jusqu'alors.
            </p>
          </div>
        </div>
      </section>

      {/* Coûts supplémentaires */}
      <section className="py-20 bg-cream-dark">
        <div className="container mx-auto px-6 max-w-5xl">
          <h2 className="text-4xl font-serif font-bold text-navy mb-12 text-center">
            Coûts supplémentaires
          </h2>

          <div className="grid md:grid-cols-2 gap-8 lg:gap-10">
            {/* Les livres */}
            <div className="bg-white p-8 rounded-2xl border-l-4 border-sage shadow-lg">
              <div className="flex items-center gap-3 mb-6">
                <span className="material-symbols-outlined text-4xl text-sage">
                  menu_book
                </span>
                <h3 className="text-2xl font-serif font-bold text-navy">
                  Les livres
                </h3>
              </div>
              <p className="text-lg md:text-xl text-navy-light mb-4 leading-relaxed">
                Il vous faudra régler en plus le coût d'impression de votre livre directement à l'imprimeur. 
                Là encore le prix sera en fonction du nombre de pages, du nombre de photos...
              </p>
              <div className="bg-cream p-6 rounded-xl mt-4">
                <p className="text-lg text-navy-light leading-relaxed">
                  <strong className="text-navy">À titre indicatif :</strong>
                </p>
                <ul className="mt-4 space-y-3 text-lg text-navy-light">
                  <li className="flex items-start gap-2">
                    <span className="material-symbols-outlined text-sage text-xl">check_circle</span>
                    <span>Un livre de <strong>460 pages</strong> avec une trentaine de photos revient à <strong>22 euros l'exemplaire</strong>.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="material-symbols-outlined text-sage text-xl">check_circle</span>
                    <span>Un livre de <strong>90 pages</strong> avec une vingtaine de photos revient à <strong>17 euros l'exemplaire</strong>.</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Les frais de transport */}
            <div className="bg-white p-8 rounded-2xl border-l-4 border-gold shadow-lg">
              <div className="flex items-center gap-3 mb-6">
                <span className="material-symbols-outlined text-4xl text-gold">
                  train
                </span>
                <h3 className="text-2xl font-serif font-bold text-navy">
                  Les frais de transport
                </h3>
              </div>
              <p className="text-lg md:text-xl text-navy-light leading-relaxed">
                Je suis en région parisienne près de <strong className="text-navy">Versailles</strong>. 
                Je peux travailler pour vous même si vous habitez à l'autre bout de la France. 
                Je vous demanderais alors le paiement de mes frais de transport (train ou voiture) 
                et d'hébergement le cas échéant.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-navy text-white">
        <div className="container mx-auto px-6 max-w-4xl text-center">
          <h2 className="text-4xl font-serif font-bold mb-6">
            Prêt à investir dans votre histoire ?
          </h2>
          <p className="text-xl mb-8 text-cream leading-relaxed">
            Contactez-moi pour discuter de votre projet et obtenir un devis personnalisé 
            adapté à vos besoins.
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

