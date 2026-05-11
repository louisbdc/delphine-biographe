"use client";

import { useState } from "react";
import BiographyBookModal from "./BiographyBookModal";

type Excerpt = {
  id: string;
  icon: string;
  title: string;
  teaser: string;
  paragraphs: string[];
};

const EXCERPTS: Excerpt[] = [
  {
    id: "enfance",
    icon: "child_care",
    title: "Une enfance",
    teaser:
      "[...] Mais revenons à mon enfance. J'étais un petit blondinet plutôt sage et je vaquais tranquillement à mes occupations. J'étais assez libre, mais c'était une liberté toute relative. Mon horizon se bornait aux murs de XXX, nous vivions un peu en vase clos. J'avais adopté une petite brouette en bois qui ne me quittait pas de la journée. On me surnommait « Riribeurette »…",
    paragraphs: [
      "[...] Mais revenons à mon enfance. J'étais un petit blondinet plutôt sage et je vaquais tranquillement à mes occupations. J'étais assez libre, mais c'était une liberté toute relative. Mon horizon se bornait aux murs de XXX, nous vivions un peu en vase clos, entre nous et je dirais même peut-être, chacun pour soi. J'avais adopté une petite brouette en bois qui ne me quittait pas de la journée. On me surnommait « Riribeurette ». Je passais, paraît-il, mes journées à faire des kilomètres pour remplir ma brouette de trésors glanés dans le parc de XXX. J'avais de très longs cheveux blonds que les femmes de chambre m'entortillaient sur le dessus de la tête, ce qui formait une espèce de coiffure que l'on appelait rouroule.",
      "C'était en effet les femmes de chambre qui s'occupaient de nous la plupart du temps. Le matin, elles nous apportaient notre petit-déjeuner au lit. Je commandais toujours la même chose, de très fines tartines grillées et beurrées et un bon chocolat chaud. Pendant que nous prenions notre premier repas de la journée chacun dans nos chambres, elles allumaient les poêles et mettaient à chauffer dessus des brocs d'eau pour notre toilette. Il n'y avait pas l'eau courante. Nous utilisions ce que l'on appelait un tub qu'elles remplissaient d'eau chaude et dans lequel nous prenions un bain de temps en temps.",
      "Nous ne voyions nos parents qu'au moment des repas que nous prenions avec eux dans la salle à manger. Bien sûr, petits, nous n'avions droit à la parole que si l'on nous posait des questions. Nous étions servis et ne faisions rien que nous mettre les pieds sous la table. Ces moments étaient assez ennuyeux et je préférais mille fois lorsque mes parents recevaient. Là, nous n'étions pas admis à leur table et nous restions dans la cuisine avec les femmes de chambre. Nous pouvions manger ce que nous voulions, parler, agir à notre guise et cette liberté nous plaisait. (…)",
    ],
  },
  {
    id: "pelerinage",
    icon: "hiking",
    title: "Sur le chemin...",
    teaser:
      "[...] En septembre 2003, nous faisons le dernier tronçon français, jusqu'à Saint-Jean-Pied-de-Port. Nous marchons tous les deux mais ma femme trouve que je suis souvent bien loin devant elle et nous éprouvons quelques petites tensions. Nous vivons des moments très forts, nous découvrons et traversons des paysages splendides. Le chemin c'est aussi des rencontres improbables et marquantes…",
    paragraphs: [
      "[...] Un an plus tard, en septembre 2003 nous faisons le dernier tronçon français, jusqu'à Saint-Jean-Pied-de-Port. Nous marchons tous les deux mais ma femme trouve que je suis souvent bien loin devant elle et nous éprouvons quelques petites tensions. Nous vivons des moments très forts, nous découvrons et traversons des paysages splendides. (…)",
      "Le chemin c'est aussi des rencontres improbables et marquantes. Beaucoup de personnes sur le chemin ont des histoires souvent douloureuses, parfois joyeuses mais elles ont toutes quelque chose à partager. Je me souviens de cet homme marchant avec son fils de dix-huit ans, complètement autiste. Il n'exprimait rien, ni souffrance, ni fatigue mais souriait aux anges continuellement. Il était diabétique en plus. La façon dont son père s'occupait de lui m'a marqué profondément. Nous avons croisé un homme à la main atrophiée, il vivait ce handicap courageusement, je l'ai admiré ce Patrick.",
      "Une rencontre nous touche particulièrement ; un jour nous croisons une petite dame toute menue qui nous demande d'un ton fatigué si elle est bien sur le chemin vers Saint-Jacques. Nous lui répondons qu'elle est sur le chemin mais pas dans la bonne direction. Elle nous raconte alors qu'elle a fait une bonne halte dans une chapelle un peu éloignée du chemin et qu'en repartant elle ne savait plus quelle direction prendre, elle avait pris la mauvaise ! Nous lui proposons de marcher avec nous. Elle est dans ses petits souliers parce qu'elle a très peur de se faire engueuler par son mari qui doit s'inquiéter quelques kilomètres plus loin. Nous arrivons en vue d'un homme visiblement mécontent et ma femme prend les devants tout de suite : « C'est vous ? Le mari de cette adorable dame qui marche avec nous ?… » Ça désamorce tout de suite l'éventuelle mauvaise humeur du mari en question et nous commençons à discuter tout en reprenant la route. (…)",
      "J'ai toujours dans la tête l'idée d'aller jusqu'à Saint-Jacques mais ma femme fait du rétropédalage ou fait semblant de ne pas comprendre mes appels du pied. Finalement, sept ans après, l'heure de la retraite sonne. Nos oiseaux se sont envolés et le nid est vide. Rien ne nous retient chez nous, nous pouvons partir et nous décidons d'aller d'une traite jusqu'à Compostelle. [...]",
    ],
  },
  {
    id: "nouvelle-vie",
    icon: "groups",
    title: "Une nouvelle vie",
    teaser:
      "[...] Le 1er juillet 2003, j'ai fugué et je me suis retrouvé à la rue. Je n'étais pas un mauvais gars mais on m'avait déjà eu une fois et je ne voulais pas que cela recommence. Je n'ai pas beaucoup réfléchi, une demi-seconde peut-être, mais cette décision a changé ma vie pour toujours…",
    paragraphs: [
      "[...] Le 1er juillet 2003, j'ai fugué et je me suis retrouvé à la rue. Je n'étais pas un mauvais gars mais on m'avait déjà eu une fois et je ne voulais pas que cela recommence. Je n'ai pas beaucoup réfléchi, une demi-seconde peut-être, mais cette décision a changé ma vie pour toujours.",
      "Je m'appelle Inza, je suis né en Côte d'Ivoire, à M'Brago dans la banlieue d'Abidjan, le 18 décembre 1988. Je n'ai pas vraiment connu ma mère mais j'ai eu la chance d'être élevé par une de ses cousines, Aïcha, c'est elle ma mère, c'est elle qui a tout fait pour moi. Là-bas, on l'appelle « la baobab ». J'avais une sœur et plein de cousins et de cousines, la famille c'est sacré et c'est élargi aussi. « Il faut tout un village pour élever un enfant » dit ce proverbe africain, cela se vérifie tous les jours en Afrique !",
      "Cela dit, c'est vraiment ma mère adoptive qui m'a permis de devenir ce que je suis. Sans elle et tous ses sacrifices pour moi, je ne sais pas où j'en serais. Certains disaient qu'elle était dure avec moi. Elle ne me laissait pas faire tout et n'importe quoi, elle m'a vraiment éduqué et elle a pris soin de moi et je sais qu'elle agissait ainsi parce qu'elle m'aimait, elle avait confiance en moi. [...]",
    ],
  },
];

export default function BiographyExcerpts() {
  const [activeId, setActiveId] = useState<string | null>(null);
  const activeExcerpt = EXCERPTS.find((e) => e.id === activeId) ?? null;

  return (
    <>
      <section className="py-20 bg-cream-dark/40">
        <div className="container mx-auto px-6 max-w-6xl">
          <div className="text-center mb-14">
            <div className="inline-block p-4 rounded-full bg-gold/10 text-gold mb-6">
              <span className="material-symbols-outlined text-3xl">
                menu_book
              </span>
            </div>
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-navy mb-6">
              Quelques extraits de biographies
            </h2>
            <div className="w-16 h-0.5 bg-gold/50 mx-auto mb-6"></div>
            <p className="text-lg text-navy-light italic max-w-2xl mx-auto">
              Cliquez sur un extrait pour l&apos;ouvrir comme un livre.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 items-stretch">
            {EXCERPTS.map((excerpt) => (
              <button
                key={excerpt.id}
                type="button"
                onClick={() => setActiveId(excerpt.id)}
                aria-label={`Ouvrir l'extrait : ${excerpt.title}`}
                className="bg-white p-8 rounded-2xl border border-gold/20 shadow-sm hover:shadow-xl hover:border-gold/50 hover:-translate-y-1 transition-all duration-300 flex flex-col text-left group cursor-pointer"
              >
                <div className="text-gold mb-4">
                  <span className="material-symbols-outlined text-4xl">
                    {excerpt.icon}
                  </span>
                </div>
                <h3 className="text-2xl font-serif font-bold text-navy mb-3">
                  {excerpt.title}
                </h3>
                <div className="w-12 h-0.5 bg-gold/50 mb-5"></div>
                <p lang="fr" className="text-navy-light italic leading-relaxed flex-1 mb-6 text-justify hyphens-auto">
                  {excerpt.teaser}
                </p>
                <span className="self-start text-gold font-semibold flex items-center gap-2 group-hover:gap-3 transition-all">
                  <span className="material-symbols-outlined text-base">
                    auto_stories
                  </span>
                  Ouvrir l&apos;extrait
                </span>
              </button>
            ))}
          </div>
        </div>
      </section>

      {activeExcerpt && (
        <BiographyBookModal
          excerpt={activeExcerpt}
          onClose={() => setActiveId(null)}
        />
      )}
    </>
  );
}
