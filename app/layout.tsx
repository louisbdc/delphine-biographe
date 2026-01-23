import type { Metadata } from "next";
import { Playfair_Display, Lato, Dancing_Script } from "next/font/google";
import "./globals.css";
import AccessibilityControls from "@/components/AccessibilityControls";
import Footer from "@/components/Footer";

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
});

const lato = Lato({
  weight: ["400", "700"],
  subsets: ["latin"],
  variable: "--font-lato",
  display: "swap",
});

const dancingScript = Dancing_Script({
  subsets: ["latin"],
  variable: "--font-dancing",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://delphinedelapeyriere.fr"),
  title: "Delphine de Lapeyrière | Biographe Familiale",
  description: "Biographe familiale, j'écris le livre de votre vie. Récits de vie, mémoires et transmission à Versailles et Paris.",
  keywords: ["biographe familiale", "écrivain public", "récit de vie", "mémoires", "transmission", "Versailles", "Paris", "livre de vie"],
  authors: [{ name: "Delphine de Lapeyrière" }],
  creator: "Delphine de Lapeyrière",
  openGraph: {
    title: "Delphine de Lapeyrière | Biographe Familiale",
    description: "Confiez-moi vos souvenirs, j'écrirai le livre de votre vie. Biographe familiale intervenant à Versailles et Paris.",
    url: "https://delphinedelapeyriere.fr",
    siteName: "Delphine de Lapeyrière",
    locale: "fr_FR",
    type: "website",
    images: ["/delphine_first_page.jpg"],
  },
  icons: {
    icon: "/logo.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr" className="scroll-smooth">
      <head>
        {/* Material Symbols for Icons */}
        {/* eslint-disable-next-line @next/next/no-page-custom-font */}
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@24,400,0,0&display=block"
        />
      </head>
      <body
        className={`${playfair.variable} ${lato.variable} ${dancingScript.variable} font-sans antialiased text-navy overflow-x-hidden flex flex-col min-h-screen`}
      >
        {/* Accessibility & Top Bar */}
        <div className="bg-navy text-cream py-2 px-4 flex justify-between items-center text-sm md:text-base">
          <span className="hidden md:inline">📍 Navigue entre Versailles et Paris</span>
          <AccessibilityControls />
        </div>
        <main className="flex-1">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}

