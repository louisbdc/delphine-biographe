"use client";

import { useState, useEffect } from "react";

export default function AccessibilityControls() {
  // On démarre à 100% (1) par défaut
  const [currentZoom, setCurrentZoom] = useState(1);
  const [mounted, setMounted] = useState(false);

  // Au chargement de la page (côté client uniquement)
  useEffect(() => {
    setMounted(true);
    // 1. On essaie de récupérer une préférence existante
    const savedZoom = localStorage.getItem("user-font-zoom");
    if (savedZoom) {
      const zoomValue = parseFloat(savedZoom);
      setCurrentZoom(zoomValue);
      applyZoom(zoomValue);
    } else {
      // Si aucune préférence, on applique la valeur par défaut
      applyZoom(1);
    }
  }, []);

  // Fonction pour appliquer le zoom sur la balise HTML racine
  const applyZoom = (zoom: number) => {
    if (typeof document !== "undefined") {
      // On touche à l'élément racine <html> pour que les 'rem' de Tailwind s'adaptent
      document.documentElement.style.fontSize = `${100 * zoom}%`;
    }
  };

  const handleZoomChange = (newZoom: number) => {
    setCurrentZoom(newZoom);
    applyZoom(newZoom);
    // On sauvegarde le choix pour la prochaine visite
    localStorage.setItem("user-font-zoom", newZoom.toString());
  };

  const increaseText = () => {
    if (currentZoom < 1.3) { // Max 130%
      // On utilise toFixed pour éviter les problèmes de virgule flottante (0.1 + 0.2 != 0.3)
      const newVal = parseFloat((currentZoom + 0.1).toFixed(1));
      handleZoomChange(newVal);
    }
  };

  const decreaseText = () => {
    if (currentZoom > 0.9) { // Min 90%
      const newVal = parseFloat((currentZoom - 0.1).toFixed(1));
      handleZoomChange(newVal);
    }
  };

  const resetText = () => {
    handleZoomChange(1); // Retour à 100%
  };

  // Pour éviter les erreurs d'hydratation (différence serveur/client),
  // on n'affiche rien tant que le composant n'est pas monté.
  if (!mounted) return null;

  return (
    <div className="flex items-center gap-4" id="accessibility-controls">
      <span className="uppercase tracking-widest text-xs hidden sm:inline">Accessibilité :</span>
      <button
        onClick={decreaseText}
        className="hover:text-gold font-bold p-1 transition-colors"
        aria-label="Diminuer la taille du texte"
        title="Réduire le texte"
      >
        A-
      </button>
      <button
        onClick={resetText}
        className="hover:text-gold font-bold p-1 transition-colors"
        aria-label="Taille du texte par défaut"
        title="Taille par défaut"
      >
        A
      </button>
      <button
        onClick={increaseText}
        className="hover:text-gold font-bold p-1 transition-colors"
        aria-label="Augmenter la taille du texte"
        title="Agrandir le texte"
      >
        A+
      </button>
    </div>
  );
}
