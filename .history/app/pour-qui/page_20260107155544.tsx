import Navigation from "@/components/Navigation";
import Contact from "@/components/Contact";
import Image from "next/image";

export default function PourQui() {
  return (
    <>
      <Navigation />
      
      {/* Hero Section */}
      <section className="py-20 bg-cream-dark">
        <div className="container mx-auto px-6 max-w-4xl text-center">
          <h1 className="text-5xl md:text-6xl font-serif font-bold text-navy mb-6">
            Pour qui ?
          </h1>
          <div className="w-24 h-1 bg-gold mx-auto mb-8"></div>
          <p className="text-2xl text-navy-light max-w-3xl mx-auto">
            La biographie familiale s'adresse à tous ceux qui souhaitent préserver et transmettre leurs souvenirs, 
            qu'il s'agisse d'un cadeau à offrir, d'un cadeau à se faire, ou d'une manière de ne pas oublier.
          </p>
        </div>
      </section>

      {/* Section 1: Un cadeau à offrir */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6 max-w-5xl">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="order-2 md:order-1">
              <div className="bg-cream-dark p-8 rounded-2xl border-l-4 border-navy">
                <div className="flex items-center gap-4 mb-6">
                  <div className="bg-navy/10 w-16 h-16 rounded-full flex items-center justify-center">
                    <span className="material-symbols-outlined text-4xl text-navy">
                      card_giftcard
                    </span>
                  </div>
                  <h2 className="text-3xl font-serif font-bold text-navy">
                    Un cadeau à offrir
                  </h2>
                </div>
                <div className="space-y-4 text-xl text-navy-light">
                  <p>
                    Vous avez une grand-mère qui aime raconter ses souvenirs, ou un grand-père plutôt silencieux 
                    mais vous savez que sa vie a été riche. Vous aimez écouter les souvenirs des plus anciens, 
                    vous leur posez souvent des questions sur leur vie.
                  </p>
                  <p className="bg-white p-6 rounded-xl border-l-4 border-gold">
                    <span className="material-symbols-outlined text-gold float-left mr-3 text-3xl">
                      favorite
                    </span>
                    Offrez-leur de raconter leurs souvenirs et d'en faire un livre. C'est un magnifique cadeau 
                    pour eux et pour vous !
                  </p>
                </div>
              </div>
            </div>
            <div className="order-1 md:order-2">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                <div className="absolute -top-4 -left-4 w-full h-full border-2 border-gold rounded-2xl z-0"></div>
                <Image
                  src="/present_to_offer.jpg"
                  alt="Un cadeau à offrir - Grands-parents et famille"
                  width={600}
                  height={600}
                  className="relative z-10 rounded-2xl w-full h-auto object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 2: Un cadeau à se faire */}
      <section className="py-20 bg-cream-dark">
        <div className="container mx-auto px-6 max-w-5xl">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                <div className="absolute -top-4 -left-4 w-full h-full border-2 border-sage rounded-2xl z-0"></div>
                <Image
                  src="/Gift_to_make_yourself.jpg"
                  alt="Un cadeau à se faire - Écrire sa propre histoire"
                  width={600}
                  height={600}
                  className="relative z-10 rounded-2xl w-full h-auto object-cover"
                />
              </div>
            </div>
            <div>
              <div className="bg-white p-8 rounded-2xl border-l-4 border-sage">
                <div className="flex items-center gap-4 mb-6">
                  <div className="bg-sage/10 w-16 h-16 rounded-full flex items-center justify-center">
                    <span className="material-symbols-outlined text-4xl text-sage">
                      person
                    </span>
                  </div>
                  <h2 className="text-3xl font-serif font-bold text-navy">
                    Un cadeau à se faire
                  </h2>
                </div>
                <div className="space-y-4 text-xl text-navy-light">
                  <p>
                    Vous avez le sentiment que votre vie mérite de ne pas être oubliée. Vous avez vécu une épreuve 
                    et vous avez besoin de mettre des mots dessus pour cicatriser, une période de votre vie vous a 
                    particulièrement marqué et vous aimeriez en laisser une trace écrite...
                  </p>
                  <p className="bg-cream-dark p-6 rounded-xl border-l-4 border-sage">
                    <span className="material-symbols-outlined text-sage float-left mr-3 text-3xl">
                      healing
                    </span>
                    Écrire votre histoire, c'est aussi un chemin vers la guérison et la transmission de votre 
                    expérience unique.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 3: Pour ne pas oublier */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6 max-w-5xl">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="order-2 md:order-1">
              <div className="bg-cream-dark p-8 rounded-2xl border-l-4 border-old-rose">
                <div className="flex items-center gap-4 mb-6">
                  <div className="bg-old-rose/10 w-16 h-16 rounded-full flex items-center justify-center">
                    <span className="material-symbols-outlined text-4xl text-old-rose">
                      photo_library
                    </span>
                  </div>
                  <h2 className="text-3xl font-serif font-bold text-navy">
                    Pour ne pas oublier
                  </h2>
                </div>
                <div className="space-y-4 text-xl text-navy-light">
                  <p>
                    Vous avez retrouvé des lettres émouvantes, touchantes, importantes, photographie d'une époque 
                    révolue. Que diriez-vous d'en faire un livre en y ajoutant votre touche, des renseignements, 
                    des photos, des commentaires ?
                  </p>
                  <p className="bg-white p-6 rounded-xl border-l-4 border-old-rose">
                    <span className="material-symbols-outlined text-old-rose float-left mr-3 text-3xl">
                      history
                    </span>
                    Transformez vos archives en un récit vivant qui préservera ces précieux souvenirs pour les 
                    générations futures.
                  </p>
                </div>
              </div>
            </div>
            <div className="order-1 md:order-2">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                <div className="absolute -top-4 -left-4 w-full h-full border-2 border-old-rose rounded-2xl z-0"></div>
                <Image
                  src="/to_not_forget.jpg"
                  alt="Pour ne pas oublier - Lettres et souvenirs"
                  width={600}
                  height={600}
                  className="relative z-10 rounded-2xl w-full h-auto object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-navy text-white">
        <div className="container mx-auto px-6 max-w-4xl text-center">
          <h2 className="text-4xl font-serif font-bold mb-6">
            Prêt à commencer votre histoire ?
          </h2>
          <p className="text-xl mb-8 text-cream">
            Que vous souhaitiez offrir ce cadeau précieux ou l'offrir à vous-même, 
            je suis là pour vous accompagner dans cette belle aventure.
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

