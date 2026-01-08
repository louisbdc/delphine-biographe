import type { Metadata } from "next";
import { Lato, Playfair_Display } from "next/font/google";
import "./globals.css";
import AccessibilityControls from "@/components/AccessibilityControls";
import Footer from "@/components/Footer";

const lato = Lato({
  weight: ["400", "700"],
  subsets: ["latin"],
  display: "optional",
  variable: "--font-lato",
});

const playfairDisplay = Playfair_Display({
  weight: ["400", "700"],
  style: ["normal", "italic"],
  subsets: ["latin"],
  display: "optional",
  variable: "--font-playfair",
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
        {/* Preload critical logo */}
        <link rel="preload" href="/logo.png" as="image" />
        {/* Material Symbols for Icons */}
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@24,400,0,0&display=optional"
        />
      </head>
      <body
        className={`${lato.variable} ${playfairDisplay.variable} font-sans antialiased text-navy overflow-x-hidden flex flex-col min-h-screen`}
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

