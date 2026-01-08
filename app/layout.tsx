import type { Metadata } from "next";
import "./globals.css";
import AccessibilityControls from "@/components/AccessibilityControls";
import Footer from "@/components/Footer";

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
        {/* Google Fonts: Playfair Display (Serif) & Lato (Sans) */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Lato:wght@400;700&family=Playfair+Display:ital,wght@0,400;0,700;1,400&display=swap"
          rel="stylesheet"
        />
        {/* Material Symbols for Icons */}
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@24,400,0,0"
        />
      </head>
      <body
        className="font-sans antialiased text-navy overflow-x-hidden flex flex-col min-h-screen"
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

