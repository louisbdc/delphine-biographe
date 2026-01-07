import Navigation from "@/components/Navigation";
import Timeline from "@/components/Timeline";

const timelineSteps = [
  {
    title: "Premier contact",
    tag: "Faire connaissance",
    headline: "Nous nous rencontrons pour faire connaissance",
    body: "Après un premier contact téléphonique, si vous habitez Paris ou sa proche banlieue, je vous propose une rencontre informelle autour d'un café. Nous faisons connaissance, je réponds à vos éventuelles questions et si vous souhaitez vous lancer dans cette aventure, nous prenons rendez-vous pour le premier entretien. Si vous habitez en dehors de Paris et de sa proche banlieue, la première rencontre pour faire connaissance se passera en visio. Nous aviserons ensemble pour la suite.",
    image: "/first_contact.png",
  },
  {
    title: "Les entretiens",
    tag: "Écouter votre histoire",
    headline: "Je vous écoute avec attention pendant une heure",
    body: "Un entretien dure une heure. Il se passe généralement chez vous, dans un café si vous préférez ou même en visio. Je privilégie la première option. J'arrive avec mes oreilles ouvertes et attentives, un cahier, un stylo et un dictaphone. Je prends tout en note, l'enregistrement me sert de support éventuel pour vérifier un nom, une date. Au cours de ces entretiens vous allez me parler de vous, de vos souvenirs d'enfance, de votre vie de famille, professionnelle, de vos réflexions sur la vie. Je ne vous poserai pas ou peu de questions, c'est vous qui mènerez les entretiens sauf si je sens qu'il faut creuser un peu plus. Vous pourrez agrémenter vos propos de photos que vous aurez choisies en avance et qui vous aideront peut-être à retrouver des souvenirs bien enfouis. Une biographie complète demande de dix à vingt entretiens.",
    reverse: true,
    image: "/entretien.jpg",
  },
  {
    title: "Mon travail d'écriture",
    tag: "Créer votre récit",
    headline: "Je transforme vos mots en récit littéraire",
    body: "Après chaque entretien, j'ai, en moyenne, sept heures de travail d'écriture. Je retranscris de façon plus littéraire, je construis un récit vivant tout en gardant votre style, votre ton. C'est votre histoire, elle doit être à votre image, je ne raconterai que ce que vous avez bien voulu me confier. Je vous soumets mes écrits après chaque entretien afin que vous validiez, que vous corrigiez, que vous supprimiez ou rajoutiez des éléments. Nous sommes alors prêts pour l'entretien suivant.",
    image: "/writing_job.jpg",
  },
];

export default function Comment() {
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
              Méthodologie
            </span>
            <h1 className="text-5xl md:text-7xl font-serif text-navy mb-8 leading-tight fade-in">
              Comment cela se passe-t-il ?
            </h1>
            <div className="w-24 h-1 bg-gold mx-auto mb-8"></div>
            <p className="text-lg text-navy-light leading-relaxed max-w-3xl mx-auto">
              Une méthodologie douce, basée sur l&apos;écoute et des entretiens réguliers à votre rythme.
            </p>
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6 max-w-5xl">
          <Timeline items={timelineSteps} />
        </div>
      </section>

      {/* Section 4: Questions fréquentes */}
      <section className="py-20 bg-cream-dark">
        <div className="container mx-auto px-6 max-w-7xl">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-serif font-bold text-navy mb-4">
              Questions fréquentes
            </h2>
            {/* Séparateur signature */}
            <div className="w-16 h-0.5 bg-gold/50 mx-auto"></div>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10">
            {/* Combien d'entretiens ? */}
            <div className="bg-white p-6 rounded-2xl border-l-4 border-gold shadow-lg">
              <div className="flex items-center gap-3 mb-4">
                <span className="material-symbols-outlined text-3xl text-gold">
                  question_mark
                </span>
                <h3 className="text-2xl font-serif font-bold text-navy">
                  Combien d&apos;entretiens ?
                </h3>
              </div>
              <p className="text-lg text-navy-light mb-4">
                Tout dépend de vous et de ce que vous souhaitez raconter :
              </p>
              <ul className="space-y-3 text-lg text-navy-light">
                <li className="flex items-start gap-2">
                  <span className="material-symbols-outlined text-gold text-xl">check_circle</span>
                  <span>Pour une <strong>biographie complète</strong>, il faut compter en moyenne <strong>dix à vingt entretiens</strong> d&apos;une heure.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="material-symbols-outlined text-gold text-xl">check_circle</span>
                  <span>Pour une <strong>tranche de vie</strong>, <strong>deux à six entretiens</strong> d&apos;une heure devraient suffire.</span>
                </li>
              </ul>
            </div>

            {/* À quel rythme ? */}
            <div className="bg-white p-6 rounded-2xl border-l-4 border-sage shadow-lg">
              <div className="flex items-center gap-3 mb-4">
                <span className="material-symbols-outlined text-3xl text-sage">
                  schedule
                </span>
                <h3 className="text-2xl font-serif font-bold text-navy">
                  À quel rythme ?
                </h3>
              </div>
              <p className="text-lg text-navy-light">
                Je suggère un entretien tous les <strong>quinze jours maximum</strong> pour éviter de perdre le fil 
                de vos souvenirs. Un entretien <strong>hebdomadaire est l&apos;idéal</strong>.
              </p>
            </div>

            {/* Et à la fin ? */}
            <div className="bg-white p-6 rounded-2xl border-l-4 border-old-rose shadow-lg">
              <div className="flex items-center gap-3 mb-4">
                <span className="material-symbols-outlined text-3xl text-old-rose">
                  print
                </span>
                <h3 className="text-2xl font-serif font-bold text-navy">
                  Et à la fin ?
                </h3>
              </div>
              <p className="text-lg text-navy-light">
                Une fois que vous avez validé votre récit, choisi les photos, trouvé un titre... j&apos;envoie le fichier 
                à un imprimeur qui imprime tout d&apos;abord un <strong>bon à tirer</strong>. Vous n&apos;avez plus qu&apos;à passer 
                commande du nombre d&apos;exemplaires que vous souhaitez.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-navy text-white">
        <div className="container mx-auto px-6 max-w-4xl text-center">
          <h2 className="text-4xl font-serif font-bold mb-6">
            Prêt à commencer cette belle aventure ?
          </h2>
          <p className="text-xl mb-8 text-cream">
            Contactez-moi pour une première discussion sans engagement et découvrons ensemble 
            comment écrire votre histoire.
          </p>
          <a
            href="/contact"
            className="inline-block bg-gold text-navy text-xl font-bold py-4 px-8 rounded-lg hover:bg-gold/90 transition-colors shadow-lg"
          >
            Me contacter
          </a>
        </div>
      </section>
    </>
  );
}

