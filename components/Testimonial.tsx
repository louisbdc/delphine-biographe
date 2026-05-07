"use client";

import { useState, useEffect, useCallback } from "react";
import Image from "next/image";

import { testimonials } from "@/lib/data";

export default function Testimonial() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  // Fonction pour passer à la slide suivante
  const nextSlide = useCallback(() => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  }, []);

  // Fonction pour revenir à la slide précédente
  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
  };

  // Rotation automatique (toutes les 12 secondes pour laisser le temps de lire aux seniors)
  useEffect(() => {
    if (isPaused) return;

    const interval = setInterval(() => {
      nextSlide();
    }, 12000); // 12 secondes

    return () => clearInterval(interval);
  }, [isPaused, nextSlide]);

  return (
    <section
      id="avis"
      className="py-24 bg-navy text-cream relative overflow-hidden"
      aria-label="Témoignages clients"
    >
      {/* Décoration d'arrière-plan (Stylo) */}
      <div
        aria-hidden="true"
        className="absolute top-[-10%] right-[-5%] opacity-5 pointer-events-none rotate-12 transition-transform duration-1000"
      >
        <Image
          src="/stylo_placeholder.png"
          alt=""
          width={400}
          height={400}
          className="w-[300px] h-[300px] md:w-[500px] md:h-[500px] object-contain"
        />
      </div>

      <div className="container mx-auto px-4 md:px-6 relative z-10 max-w-5xl">

        {/* En-tête de section */}
        <div className="text-center mb-12">
          <span className="text-gold font-bold tracking-widest uppercase text-sm mb-4 block">
            Vos retours
          </span>
          <h2 className="text-3xl md:text-4xl font-serif text-white">
            Ce qu&apos;ils disent de notre aventure
          </h2>
          <div className="w-16 h-0.5 bg-gold/50 mx-auto mt-6"></div>
        </div>

        {/* Zone du slider interactif */}
        <div
          className="relative bg-white/5 rounded-3xl p-8 md:p-12 border border-white/10 shadow-2xl backdrop-blur-sm"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          {/* Guillemets décoratifs */}
          <div className="absolute top-6 left-8 text-gold opacity-30 select-none">
            <span className="material-symbols-outlined text-6xl md:text-8xl">format_quote</span>
          </div>

          {/* Contenu changeant */}
          <div className="relative grid grid-cols-1 place-items-center">
            {testimonials.map((item, index) => (
              <div
                key={item.id}
                className={`col-start-1 row-start-1 w-full flex flex-col justify-center items-center text-center transition-opacity duration-1000 ease-in-out px-4 md:px-12 ${index === currentIndex ? "opacity-100 z-10" : "opacity-0 z-0 pointer-events-none"
                  }`}
                aria-hidden={index !== currentIndex}
              >
                <p className="text-xl md:text-2xl font-serif italic leading-relaxed md:leading-relaxed text-cream mb-8">
                  &quot;{item.text}&quot;
                </p>

                <div className="mt-4">
                  <p className="text-gold font-bold text-lg tracking-wide">
                    {item.author}
                  </p>
                  <p className="text-sm text-white/60 uppercase tracking-wider mt-1">
                    {item.role}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Contrôles de navigation (Pour l'accessibilité et la facilité d'usage) */}
          <div className="flex justify-between items-center mt-8 md:mt-0 md:absolute md:top-1/2 md:-translate-y-1/2 md:w-full md:left-0 md:px-4 pointer-events-none">

            {/* Bouton Précédent */}
            <button
              onClick={prevSlide}
              className="pointer-events-auto w-12 h-12 rounded-full bg-navy/80 hover:bg-gold text-white border border-white/20 flex items-center justify-center transition-all duration-300 hover:scale-110 focus:outline-none focus:ring-2 focus:ring-gold"
              aria-label="Témoignage précédent"
              title="Précédent"
            >
              <span className="material-symbols-outlined text-2xl">arrow_back</span>
            </button>

            {/* Bouton Suivant */}
            <button
              onClick={nextSlide}
              className="pointer-events-auto w-12 h-12 rounded-full bg-navy/80 hover:bg-gold text-white border border-white/20 flex items-center justify-center transition-all duration-300 hover:scale-110 focus:outline-none focus:ring-2 focus:ring-gold"
              aria-label="Témoignage suivant"
              title="Suivant"
            >
              <span className="material-symbols-outlined text-2xl">arrow_forward</span>
            </button>
          </div>

          {/* Indicateurs (Points) en bas */}
          <div className="flex justify-center gap-3 mt-8 md:mt-12">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`h-3 rounded-full transition-all duration-500 ${index === currentIndex
                  ? "w-8 bg-gold"
                  : "w-3 bg-white/20 hover:bg-white/40"
                  }`}
                aria-label={`Aller au témoignage ${index + 1}`}
                aria-current={index === currentIndex ? "true" : "false"}
              />
            ))}
          </div>
        </div>

        <div className="text-center mt-6">
          <p className="text-sm text-white/40 italic">
            * Survolez les témoignages pour mettre la lecture en pause.
          </p>
        </div>

      </div>
    </section>
  );
}
