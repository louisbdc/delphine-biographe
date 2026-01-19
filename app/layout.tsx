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
  title: "Delphine de Lapeyrière | Biographe Familiale",
  description: "Biographe familiale, j'écris le livre de votre vie",
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
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@24,400,0,0&display=optional"
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

