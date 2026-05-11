"use client";

import { useEffect, useState } from "react";

type ColorKey =
  | "cream"
  | "cream-dark"
  | "navy"
  | "navy-light"
  | "sage"
  | "gold"
  | "royal-blue";

type ColorMap = Record<ColorKey, string>;

const DEFAULT_COLORS: ColorMap = {
  "cream": "#FDFBF7",
  "cream-dark": "#F5F2EB",
  "navy": "#3F8B8D",
  "navy-light": "#334155",
  "sage": "#4F6F52",
  "gold": "#C5A059",
  "royal-blue": "#4169E1",
};

type Preset = {
  id: string;
  name: string;
  description: string;
  colors: ColorMap;
};

const PRESETS: Preset[] = [
  {
    id: "original",
    name: "Originale",
    description: "Palette actuelle",
    colors: DEFAULT_COLORS,
  },
  {
    id: "encre-sepia",
    name: "Encre sépia",
    description: "Vieille photographie",
    colors: {
      "cream": "#F2E8D0",
      "cream-dark": "#E0CEA8",
      "navy": "#2D1F14",
      "navy-light": "#5C4533",
      "sage": "#8A8261",
      "gold": "#B8884A",
      "royal-blue": "#6B4633",
    },
  },
  {
    id: "reliure-cuir",
    name: "Reliure cuir",
    description: "Bibliothèque & livres reliés",
    colors: {
      "cream": "#EFE5D2",
      "cream-dark": "#D8C4A2",
      "navy": "#2A1810",
      "navy-light": "#4A3220",
      "sage": "#4D5F40",
      "gold": "#B89244",
      "royal-blue": "#6B2C2A",
    },
  },
  {
    id: "velin-or",
    name: "Vélin & or",
    description: "Page de manuscrit dorée",
    colors: {
      "cream": "#F4E9CD",
      "cream-dark": "#E5D5A8",
      "navy": "#1F1610",
      "navy-light": "#3D2D1F",
      "sage": "#8A7244",
      "gold": "#B89542",
      "royal-blue": "#B89542",
    },
  },
  {
    id: "manuscrit-illumine",
    name: "Manuscrit illuminé",
    description: "Vélin, or & bleu lapis",
    colors: {
      "cream": "#F4E8C8",
      "cream-dark": "#E5D199",
      "navy": "#1A1208",
      "navy-light": "#3D2D1F",
      "sage": "#5A6B3F",
      "gold": "#C5A050",
      "royal-blue": "#2D3F75",
    },
  },
  {
    id: "versailles",
    name: "Versailles",
    description: "Ivoire, or vieilli & sauge",
    colors: {
      "cream": "#FAF5EA",
      "cream-dark": "#EFE7D2",
      "navy": "#2C2A26",
      "navy-light": "#4D4A42",
      "sage": "#8A9B7E",
      "gold": "#B8923C",
      "royal-blue": "#B8923C",
    },
  },
  {
    id: "carnet-voyage",
    name: "Carnet de voyage",
    description: "Mer, kraft & boussole",
    colors: {
      "cream": "#EBDDC5",
      "cream-dark": "#D6C29C",
      "navy": "#1F2A40",
      "navy-light": "#3D4F6B",
      "sage": "#5C7373",
      "gold": "#B89042",
      "royal-blue": "#2A4F6B",
    },
  },
  {
    id: "madeleine-proust",
    name: "Madeleine",
    description: "Châtaigne, thé & caramel",
    colors: {
      "cream": "#F4E8CD",
      "cream-dark": "#E5D2A8",
      "navy": "#3D2818",
      "navy-light": "#5C4030",
      "sage": "#8A9776",
      "gold": "#B89042",
      "royal-blue": "#6B4A30",
    },
  },
  {
    id: "provence",
    name: "Provence",
    description: "Ocre, olive & lavande",
    colors: {
      "cream": "#F2E5C8",
      "cream-dark": "#E0CDA0",
      "navy": "#2D2418",
      "navy-light": "#5C4D38",
      "sage": "#7A8A5C",
      "gold": "#B89042",
      "royal-blue": "#7A6BA0",
    },
  },
  {
    id: "soie-nacre",
    name: "Soie & nacre",
    description: "Perle, champagne & lavande",
    colors: {
      "cream": "#F8F2E8",
      "cream-dark": "#ECE0CE",
      "navy": "#3D3D3D",
      "navy-light": "#5C5C5C",
      "sage": "#B0BAB0",
      "gold": "#C5B07A",
      "royal-blue": "#8C8C9A",
    },
  },
  {
    id: "editorial-classique",
    name: "Éditorial classique",
    description: "Ivoire, anthracite & or vieilli",
    colors: {
      "cream": "#F9F8F6",
      "cream-dark": "#EDE9E0",
      "navy": "#2C303A",
      "navy-light": "#4A4F5A",
      "sage": "#8A9384",
      "gold": "#C5A880",
      "royal-blue": "#1A2B4C",
    },
  },
  {
    id: "chaleur-nostalgie",
    name: "Chaleur & nostalgie",
    description: "Espresso, terracotta & sauge",
    colors: {
      "cream": "#FDFBF7",
      "cream-dark": "#F0E8D8",
      "navy": "#3B2F2F",
      "navy-light": "#5C4949",
      "sage": "#8A9A86",
      "gold": "#B89568",
      "royal-blue": "#CC7A6B",
    },
  },
  {
    id: "elegance-contemporaine",
    name: "Élégance contemporaine",
    description: "Encre, ardoise & nude",
    colors: {
      "cream": "#FFFFFF",
      "cream-dark": "#E8D7D0",
      "navy": "#121212",
      "navy-light": "#3A3A3A",
      "sage": "#B5B0AB",
      "gold": "#C5A880",
      "royal-blue": "#5B7C99",
    },
  },
  {
    id: "minimalisme-brut",
    name: "Minimalisme brut",
    description: "Perle, taupe & lin",
    colors: {
      "cream": "#F5F5F5",
      "cream-dark": "#E6DCD3",
      "navy": "#000000",
      "navy-light": "#594F4F",
      "sage": "#999388",
      "gold": "#A8997E",
      "royal-blue": "#594F4F",
    },
  },
];

const LABELS: Record<ColorKey, string> = {
  "cream": "Crème (fond)",
  "cream-dark": "Crème foncé",
  "navy": "Marine (texte)",
  "navy-light": "Marine clair",
  "sage": "Sauge",
  "gold": "Or (accent)",
  "royal-blue": "Bleu royal",
};

const STORAGE_KEY = "delphine.colorTweak.v1";

function hexToRgbTriplet(hex: string): string {
  const cleaned = hex.replace("#", "");
  const r = parseInt(cleaned.substring(0, 2), 16);
  const g = parseInt(cleaned.substring(2, 4), 16);
  const b = parseInt(cleaned.substring(4, 6), 16);
  return `${r} ${g} ${b}`;
}

function applyColors(colors: ColorMap) {
  const root = document.documentElement;
  (Object.keys(colors) as ColorKey[]).forEach((key) => {
    root.style.setProperty(`--color-${key}`, hexToRgbTriplet(colors[key]));
  });
}

export default function ColorTweak() {
  const [open, setOpen] = useState(false);
  const [colors, setColors] = useState<ColorMap>(DEFAULT_COLORS);

  useEffect(() => {
    try {
      const stored = localStorage.getItem(STORAGE_KEY);
      if (stored) {
        const parsed = JSON.parse(stored) as Partial<ColorMap>;
        const merged: ColorMap = { ...DEFAULT_COLORS, ...parsed };
        setColors(merged);
        applyColors(merged);
      }
    } catch (error) {
      console.error("ColorTweak: failed to load stored colors", error);
    }
  }, []);

  const handleChange = (key: ColorKey, value: string) => {
    const next: ColorMap = { ...colors, [key]: value };
    setColors(next);
    applyColors(next);
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(next));
    } catch (error) {
      console.error("ColorTweak: failed to persist colors", error);
    }
  };

  const handleReset = () => {
    setColors(DEFAULT_COLORS);
    applyColors(DEFAULT_COLORS);
    try {
      localStorage.removeItem(STORAGE_KEY);
    } catch (error) {
      console.error("ColorTweak: failed to clear stored colors", error);
    }
  };

  const handlePreset = (preset: Preset) => {
    setColors(preset.colors);
    applyColors(preset.colors);
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(preset.colors));
    } catch (error) {
      console.error("ColorTweak: failed to persist preset", error);
    }
  };

  return (
    <div className="fixed bottom-4 right-4 z-[100] print:hidden">
      {open && (
        <div
          role="dialog"
          aria-label="Personnaliser les couleurs du site"
          className="mb-3 w-80 max-h-[70vh] overflow-y-auto rounded-2xl bg-white shadow-2xl border border-black/10 p-4"
        >
          <div className="flex items-center justify-between mb-3">
            <h2 className="text-base font-bold text-navy" style={{ fontSize: "1rem", lineHeight: 1.4 }}>
              Couleurs du site
            </h2>
            <button
              type="button"
              onClick={handleReset}
              className="text-xs text-navy/70 hover:text-navy underline"
            >
              Réinitialiser
            </button>
          </div>

          <div className="mb-4">
            <p
              className="text-xs uppercase tracking-wider text-navy/60 mb-2"
              style={{ fontSize: "0.7rem", lineHeight: 1.4 }}
            >
              Presets
            </p>
            <div className="grid grid-cols-2 gap-2">
              {PRESETS.map((preset) => {
                const swatches: ColorKey[] = ["navy", "gold", "sage", "royal-blue"];
                return (
                  <button
                    key={preset.id}
                    type="button"
                    onClick={() => handlePreset(preset)}
                    title={preset.description}
                    className="text-left rounded-lg border border-black/10 hover:border-navy/40 transition-colors px-2 py-2 bg-white"
                  >
                    <div className="flex gap-1 mb-1.5">
                      {swatches.map((key) => (
                        <span
                          key={key}
                          className="h-3 w-3 rounded-full border border-black/10"
                          style={{ backgroundColor: preset.colors[key] }}
                        />
                      ))}
                    </div>
                    <div
                      className="text-xs font-semibold text-navy leading-tight"
                      style={{ fontSize: "0.75rem", lineHeight: 1.2 }}
                    >
                      {preset.name}
                    </div>
                    <div
                      className="text-[10px] text-navy/60 leading-tight"
                      style={{ fontSize: "0.65rem", lineHeight: 1.2 }}
                    >
                      {preset.description}
                    </div>
                  </button>
                );
              })}
            </div>
          </div>

          <p
            className="text-xs uppercase tracking-wider text-navy/60 mb-2"
            style={{ fontSize: "0.7rem", lineHeight: 1.4 }}
          >
            Ajustement fin
          </p>
          <ul className="space-y-2">
            {(Object.keys(DEFAULT_COLORS) as ColorKey[]).map((key) => (
              <li key={key} className="flex items-center justify-between gap-3">
                <label
                  htmlFor={`color-${key}`}
                  className="text-sm text-navy flex-1"
                  style={{ fontSize: "0.875rem", lineHeight: 1.4 }}
                >
                  {LABELS[key]}
                </label>
                <span
                  className="text-xs font-mono text-navy/60 tabular-nums"
                  style={{ fontSize: "0.75rem" }}
                >
                  {colors[key].toUpperCase()}
                </span>
                <input
                  id={`color-${key}`}
                  type="color"
                  value={colors[key]}
                  onChange={(e) => handleChange(key, e.target.value)}
                  className="h-8 w-10 cursor-pointer rounded border border-black/10 bg-transparent p-0"
                  aria-label={`Changer la couleur ${LABELS[key]}`}
                />
              </li>
            ))}
          </ul>
        </div>
      )}
      <button
        type="button"
        onClick={() => setOpen((prev) => !prev)}
        aria-expanded={open}
        aria-label={open ? "Fermer les réglages de couleurs" : "Ouvrir les réglages de couleurs"}
        className="h-12 w-12 rounded-full bg-navy text-cream shadow-lg hover:bg-navy-light transition-colors flex items-center justify-center"
      >
        <span className="material-symbols-outlined" style={{ fontSize: "24px" }}>
          {open ? "close" : "palette"}
        </span>
      </button>
    </div>
  );
}
