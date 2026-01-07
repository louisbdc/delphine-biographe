import Image from "next/image";

export default function Introduction() {
  return (
    <section id="pour-quoi" className="py-20 bg-white">
      <div className="container mx-auto px-6 max-w-5xl">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Visual for Intro */}
          <div className="order-2 md:order-1 relative">
            <div className="absolute -top-4 -left-4 w-full h-full border-2 border-gold rounded-2xl z-0"></div>
            <Image
              src="/fauteuil.png"
              alt="Bibliothèque chaleureuse"
              width={800}
              height={600}
              className="relative z-10 rounded-2xl shadow-2xl w-full"
            />
          </div>

          {/* Text Content */}
          <div className="order-1 md:order-2">
            <h2 className="text-4xl font-serif font-bold text-navy mb-8">
              Écrire le livre de votre vie
            </h2>

            <div className="space-y-6 text-xl text-navy-light">
              <p>
                Je propose de vous prêter mon oreille pour écouter vos souvenirs
                remonter doucement à la surface. Et avant que le vent ne les emporte{" "}
                <strong>je les mettrai en mots</strong> pour écrire le livre de votre
                vie.
              </p>
              <p>
                Lorsque les histoires ne sont pas écrites, elles finissent
                malheureusement par disparaître. Je m&apos;adapterai à votre style afin que
                les lecteurs entendent <strong>votre voix</strong> sous ma plume
                caméléon.
              </p>
              <p className="bg-cream-dark p-6 rounded-xl border-l-4 border-sage">
                <span className="material-symbols-outlined text-sage float-left mr-3 text-3xl">
                  diversity_3
                </span>
                Vous êtes parents, peut-être même déjà grands-parents, ce sera un beau
                témoignage que vous offrirez à votre famille.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

