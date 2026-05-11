import type { Metadata } from "next";
import { Playfair_Display, Lato, Dancing_Script } from "next/font/google";
import { MapPin } from "lucide-react";
import "./globals.css";
import AccessibilityControls from "@/components/AccessibilityControls";
import ColorTweak from "@/components/ColorTweak";
import Footer from "@/components/Footer";
import { Analytics } from "@vercel/analytics/react";

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
  title: {
    default: "Delphine de Lapeyrière | Biographe Familiale",
    template: "%s | Delphine de Lapeyrière",
  },
  description: "Biographe familiale, j'écris le livre de votre vie. Récits de vie, mémoires et transmission près de Versailles, à Paris et partout en France.",
  authors: [{ name: "Delphine de Lapeyrière" }],
  creator: "Delphine de Lapeyrière",
  publisher: "Delphine de Lapeyrière",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Delphine de Lapeyrière | Biographe Familiale",
    description: "Confiez-moi vos souvenirs, j'écrirai le livre de votre vie. Biographe familiale intervenant près de Versailles, à Paris et partout en France.",
    url: "/",
    siteName: "Delphine de Lapeyrière, biographe familiale",
    locale: "fr_FR",
    type: "website",
    images: [
      {
        url: "/delphine_first_page.jpg",
        width: 1280,
        height: 879,
        alt: "Delphine de Lapeyrière, biographe familiale",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Delphine de Lapeyrière | Biographe Familiale",
    description: "Biographe familiale. Je transforme vos souvenirs en un livre transmis aux générations futures.",
    images: ["/delphine_first_page.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
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
          <span className="hidden lg:inline-flex items-center gap-2">
            <MapPin className="w-4 h-4 text-red-500 fill-red-500" />
            Basée en région parisienne, je me déplace dans toute la France
          </span>
          <AccessibilityControls />
        </div>
        <main className="flex-1">
          {children}
        </main>
        <Footer />
        <ColorTweak />
        <Analytics />
      </body>
    </html>
  );
}

