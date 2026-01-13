import Image from "next/image";

export default function Hero() {
  return (
    <header className="relative min-h-[85vh] flex items-center justify-center overflow-hidden">
      {/* Background Overlay for Contrast */}
      <div className="absolute inset-0 bg-gradient-to-r from-cream via-cream/90 to-transparent z-10 w-full md:w-2/3"></div>

      {/* Hero Image */}
      <div className="absolute inset-0 w-full h-full z-0">
        <Image
          src="/main.jpeg"
          alt="Mains écrivant dans un journal"
          fill
          className="object-cover object-[80%_center] md:object-[70%_center]"
          priority
        />
      </div>

      <div className="container mx-auto px-6 relative z-20 flex flex-col md:flex-row items-center">
        <div className="md:w-3/5 text-left py-12 fade-in">
          <span className="inline-block py-1 px-3 border border-navy rounded-full text-sm font-bold tracking-widest text-navy mb-4 bg-white/50 backdrop-blur">
            BIOGRAPHE FAMILIALE
          </span>
          <h1 className="text-5xl md:text-7xl font-serif font-bold text-navy mb-6 leading-tight">
            Delphine de Lapeyrière,<br />
            <span className="italic" style={{ color: '#4169E1' }}>biographe.</span>
          </h1>
          <p className="text-2xl md:text-3xl font-serif text-navy-light mb-8 italic border-l-4 border-gold pl-6">
            &quot;Biographe ? Un métier étonnant, n&apos;est-ce pas ?&quot;
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <a
              href="#pour-quoi"
              className="bg-navy text-white text-xl px-8 py-4 rounded-xl shadow-xl hover:bg-navy-light transition-all text-center flex items-center justify-center gap-2"
            >
              <span className="material-symbols-outlined">auto_stories</span>
              Découvrir ma démarche
            </a>
            <a
              href="#contact"
              className="bg-white border-2 border-navy text-navy text-xl px-8 py-4 rounded-xl shadow-md hover:bg-gray-50 transition-all text-center"
            >
              Me contacter
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}

