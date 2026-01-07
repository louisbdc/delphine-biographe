import Navigation from "@/components/Navigation";

export default function Combien() {
  return (
    <>
      <Navigation />
      
      {/* Hero Section : Élégant et Minimaliste */}
      <section className="relative py-24 bg-[#FDFBF7] overflow-hidden">
        {/* Le même blob que sur les autres pages pour la continuité */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-gold/5 rounded-full blur-3xl translate-x-1/2 -translate-y-1/2"></div>
        <div className="container mx-auto px-6 max-w-4xl text-center relative z-10">
          <span className="text-gold font-bold tracking-widest uppercase text-sm mb-4 block">
            Transparence & Valeur
          </span>
          <h1 className="text-5xl md:text-7xl font-serif text-navy mb-8 leading-tight">
            La valeur d'une vie
          </h1>
          {/* Ajout du séparateur signature */}
          <div className="w-24 h-1 bg-gold mx-auto mb-8"></div>
          <p className="text-xl md:text-2xl text-navy-light max-w-2xl mx-auto leading-relaxed font-light">
            Un livre inestimable pour votre famille, réalisé avec l'exigence d'un véritable artisanat littéraire.
          </p>
        </div>
      </section>

      {/* Le concept du tarif unique : Focus sur la clarté */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6 max-w-6xl">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            
            {/* Colonne Explicative */}
            <div>
              <h2 className="text-4xl font-serif text-navy mb-6">
                Un fonctionnement simple,<br />
                <span className="text-gold italic">sans surprise.</span>
              </h2>
              <p className="text-lg text-navy-light mb-6 leading-relaxed">
                Parce que chaque histoire est unique, il est difficile de fixer un prix global à l'avance. 
                J'ai donc opté pour une tarification <strong>à la séance</strong>. Cela vous offre une liberté totale : 
                vous maîtrisez votre budget et la longueur de votre récit.
              </p>
              
              <ul className="space-y-6 mt-8">
                <li className="flex items-start">
                  <span className="flex-shrink-0 w-10 h-10 rounded-full bg-cream-dark flex items-center justify-center text-gold mr-4">
                    <span className="material-symbols-outlined">schedule</span>
                  </span>
                  <div>
                    <h3 className="text-xl font-serif text-navy">Temps réel vs Temps facturé</h3>
                    <p className="text-navy-light">Une heure d'entretien équivaut à environ 6 à 7 heures de travail d'écriture et de structuration.</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="flex-shrink-0 w-10 h-10 rounded-full bg-cream-dark flex items-center justify-center text-gold mr-4">
                    <span className="material-symbols-outlined">handshake</span>
                  </span>
                  <div>
                    <h3 className="text-xl font-serif text-navy">Paiement échelonné</h3>
                    <p className="text-navy-light">Vous ne réglez qu'au fur et à mesure, à chaque séance. Vous pouvez arrêter quand vous le souhaitez.</p>
                  </div>
                </li>
              </ul>
            </div>

            {/* La Carte Tarifaire (Design Ticket/Carte) */}
            <div className="relative">
              <div className="absolute inset-0 bg-gold blur-2xl opacity-20 rounded-full"></div>
              <div className="relative bg-navy text-white p-10 rounded-3xl shadow-2xl text-center border border-white/10">
                <h3 className="text-2xl font-serif mb-2 text-cream">Le tarif à la séance</h3>
                <div className="flex justify-center items-baseline gap-2 my-6">
                  <span className="text-6xl font-bold font-serif">440€</span>
                  <span className="text-xl text-white/60">/ unité</span>
                </div>
                
                <div className="w-full h-px bg-white/20 my-6"></div>
                
                <p className="text-lg mb-6 font-light">Ce tarif comprend :</p>
                <ul className="text-left space-y-3 mb-8 px-4">
                  <li className="flex items-center gap-3">
                    <span className="material-symbols-outlined text-gold">mic</span>
                    <span>1h d'entretien (écoute active)</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <span className="material-symbols-outlined text-gold">edit_note</span>
                    <span>6h à 7h d'écriture et corrections</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <span className="material-symbols-outlined text-gold">print</span>
                    <span>Mise en page progressive</span>
                  </li>
                </ul>
                <p className="text-sm text-white/50 italic">
                  *La première séance est réglée à l'avance.
                </p>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Section Scénarios : Aider à se projeter (Nouveau) */}
      <section className="py-20 bg-[#FDFBF7]">
        <div className="container mx-auto px-6 max-w-5xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-serif text-navy mb-4">Quel budget prévoir au total ?</h2>
            {/* Séparateur signature */}
            <div className="w-16 h-0.5 bg-gold/50 mx-auto mb-6"></div>
            <p className="text-navy-light text-lg">Voici deux exemples fréquents pour vous aider à estimer votre projet.</p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Scénario 1 */}
            <div className="bg-white p-8 rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
              <div className="text-sage mb-4 font-bold tracking-wide uppercase text-sm">Option Légère</div>
              <h3 className="text-2xl font-serif text-navy mb-4">Le Récit Ciblé</h3>
              <p className="text-navy-light mb-6 min-h-[3rem]">
                Idéal pour raconter une période précise (enfance, guerre, rencontre) ou un événement marquant.
              </p>
              <div className="flex items-baseline gap-2 mb-2">
                <span className="text-3xl font-bold text-navy">~ 4 400 €</span>
              </div>
              <p className="text-sm text-gray-400">Estimé sur 10 séances</p>
            </div>

            {/* Scénario 2 */}
            <div className="bg-white p-8 rounded-2xl border-t-4 border-gold shadow-lg transform md:-translate-y-4">
              <div className="text-gold mb-4 font-bold tracking-wide uppercase text-sm">Le Choix Classique</div>
              <h3 className="text-2xl font-serif text-navy mb-4">La Biographie Complète</h3>
              <p className="text-navy-light mb-6 min-h-[3rem]">
                Le livre de toute une vie. De votre naissance à aujourd'hui, une œuvre exhaustive et détaillée.
              </p>
              <div className="flex items-baseline gap-2 mb-2">
                <span className="text-3xl font-bold text-navy">~ 6 600 € à 8 800 €</span>
              </div>
              <p className="text-sm text-gray-400">Estimé entre 15 et 20 séances</p>
            </div>
          </div>
        </div>
      </section>

      {/* Les Frais Annexes : Présentation sous forme de grille propre */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6 max-w-5xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-serif text-navy mb-4">Les coûts annexes à prévoir</h2>
            {/* Séparateur signature */}
            <div className="w-16 h-0.5 bg-gold/50 mx-auto"></div>
          </div>
          
          <div className="grid md:grid-cols-2 gap-12">
            {/* Impression */}
            <div className="flex gap-6">
              <div className="flex-shrink-0">
                 <div className="w-12 h-12 bg-navy/5 rounded-xl flex items-center justify-center text-navy">
                    <span className="material-symbols-outlined text-2xl">menu_book</span>
                 </div>
              </div>
              <div>
                <h3 className="text-xl font-serif text-navy mb-3 font-bold">L'impression des livres</h3>
                <p className="text-navy-light leading-relaxed mb-4">
                  Ce coût est réglé directement à l'imprimeur à la fin du projet. Le prix dépend du nombre de pages, de photos et de la qualité du papier.
                </p>
                <div className="bg-[#FDFBF7] p-4 rounded-lg border border-gray-100">
                  <p className="text-sm font-bold text-navy mb-2">Exemples de tarifs unitaires :</p>
                  <ul className="text-sm text-navy-light space-y-2">
                    <li className="flex justify-between">
                      <span>Livre court (90 pages)</span>
                      <span className="font-semibold text-navy">~ 17 € / livre</span>
                    </li>
                    <li className="flex justify-between border-t border-gray-200 pt-2">
                      <span>Grand livre (460 pages)</span>
                      <span className="font-semibold text-navy">~ 22 € / livre</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Transport */}
            <div className="flex gap-6">
              <div className="flex-shrink-0">
                 <div className="w-12 h-12 bg-navy/5 rounded-xl flex items-center justify-center text-navy">
                    <span className="material-symbols-outlined text-2xl">train</span>
                 </div>
              </div>
              <div>
                <h3 className="text-xl font-serif text-navy mb-3 font-bold">Déplacements</h3>
                <p className="text-navy-light leading-relaxed mb-4">
                  Basée près de <strong>Versailles</strong>, je me déplace dans toute la France.
                </p>
                <p className="text-navy-light leading-relaxed">
                  Si vous résidez loin, les frais de transport (train/voiture) et éventuellement d'hébergement seront à votre charge. Nous pouvons aussi alterner avec des séances en visio pour réduire ces coûts.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Final : Sobre et Direct */}
      <section className="py-24 bg-navy relative overflow-hidden">
        {/* Élément décoratif d'arrière-plan */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-gold rounded-full mix-blend-overlay filter blur-3xl opacity-20 transform translate-x-1/2 -translate-y-1/2"></div>
        
        <div className="container mx-auto px-6 max-w-3xl text-center relative z-10">
          <h2 className="text-4xl font-serif text-white mb-6">
            Votre histoire mérite d'être racontée
          </h2>
          <p className="text-xl text-blue-100 mb-10 font-light">
            Discutons simplement de votre projet. Le premier contact est gratuit et sans engagement.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/contact"
              className="bg-gold text-navy px-8 py-4 rounded-full font-bold hover:bg-white transition-all duration-300 shadow-lg hover:shadow-gold/20"
            >
              Me contacter
            </a>
            <a
              href="tel:+33600000000"
              className="px-8 py-4 rounded-full border border-white/30 text-white font-medium hover:bg-white/10 transition-all duration-300"
            >
              06 00 00 00 00
            </a>
          </div>
        </div>
      </section>
    </>
  );
}