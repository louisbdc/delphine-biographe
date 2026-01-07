import Navigation from "@/components/Navigation";
import { MapPin, Mail, Instagram, Send, Phone } from "lucide-react";

export default function ContactPage() {
  return (
    <>
      <Navigation />

      <main className="min-h-screen bg-[#FDFBF7] flex items-center justify-center py-24 px-4 sm:px-6">
        
        {/* CONTENEUR PRINCIPAL : Plus large (max-w-6xl) pour donner de l'espace */}
        <div className="w-full max-w-6xl bg-white rounded-[2rem] shadow-2xl shadow-navy/10 overflow-hidden flex flex-col lg:flex-row min-h-[700px]">
          
          {/* --- COLONNE GAUCHE (NAVY) : 35-40% de la largeur --- 
              Sert d'ambiance et d'infos rapides.
          */}
          <div className="lg:w-[40%] bg-navy text-white p-10 md:p-14 relative flex flex-col justify-between">
            
            {/* Décoration de fond subtile */}
            <div className="absolute top-[-20%] right-[-20%] w-[300px] h-[300px] bg-gold/10 rounded-full blur-[80px] pointer-events-none"></div>

            <div className="relative z-10">
              <h3 className="font-serif text-3xl md:text-4xl text-gold mb-10">Informations</h3>
              
              <div className="space-y-8">
                <div className="group">
                  <p className="flex items-center gap-3 text-gold text-xs font-bold tracking-widest uppercase mb-2">
                    <MapPin className="w-4 h-4" /> Localisation
                  </p>
                  <p className="text-white/90 font-light text-lg">Versailles & Paris, France</p>
                  <p className="text-white/50 text-sm italic mt-1">Disponible pour voyager</p>
                </div>

                <div className="group">
                  <p className="flex items-center gap-3 text-gold text-xs font-bold tracking-widest uppercase mb-2">
                    <Mail className="w-4 h-4" /> Email
                  </p>
                  <a href="mailto:contact@biographedelphine.com" className="text-white/90 font-light text-lg hover:text-gold transition-colors">
                    contact@biographedelphine.com
                  </a>
                </div>

                <div className="group">
                  <p className="flex items-center gap-3 text-gold text-xs font-bold tracking-widest uppercase mb-2">
                    <Phone className="w-4 h-4" /> Téléphone
                  </p>
                  <p className="text-white/90 font-light text-lg">06 19 42 66 86</p>
                </div>
              </div>
            </div>

            {/* Citation et Social en bas */}
            <div className="relative z-10 mt-16 pt-8 border-t border-white/10">
              <p className="font-serif italic text-lg text-white/80 mb-6 leading-relaxed">
                "La photographie est une "
              </p>
              <a href="#" className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/5 hover:bg-gold hover:text-navy transition-all duration-300">
                <Instagram className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* --- COLONNE DROITE (BLANC) : 60-65% de la largeur --- 
              Contient l'intro ET le formulaire, l'un sous l'autre pour maximiser la largeur.
          */}
          <div className="lg:w-[60%] p-10 md:p-14 bg-white relative">
            
            {/* En-tête de la section Contact */}
            <div className="mb-10">
              <span className="text-gold font-bold tracking-widest uppercase text-xs mb-3 block">
                Commençons votre histoire
              </span>
              <h2 className="text-4xl md:text-5xl font-serif text-navy mb-6">
                Envoyez-moi un message
              </h2>
              <p className="text-navy-light text-lg leading-relaxed max-w-2xl">
                Je navigue entre <strong className="text-navy font-medium">Versailles</strong> et <strong className="text-navy font-medium">Paris</strong> mais je peux me déplacer plus loin sur demande. N'hésitez pas à me contacter pour une première discussion sans engagement.
              </p>
            </div>

            {/* LE FORMULAIRE : Prend toute la largeur disponible maintenant */}
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Champ Nom */}
                <div className="relative">
                  <label htmlFor="name" className="block text-base font-semibold text-navy mb-3">Votre Nom</label>
                  <input 
                    type="text" 
                    id="name"
                    placeholder="Jean Dupont"
                    className="w-full px-5 py-4 rounded-lg bg-white border-2 border-navy/30 focus:border-gold focus:bg-white focus:outline-none focus:ring-2 focus:ring-gold/20 transition-all duration-300 placeholder:text-navy/40 text-navy text-lg"
                  />
                </div>

                {/* Champ Email */}
                <div className="relative">
                  <label htmlFor="email" className="block text-base font-semibold text-navy mb-3">Votre Email</label>
                  <input 
                    type="email" 
                    id="email"
                    placeholder="jean@email.com"
                    className="w-full px-5 py-4 rounded-lg bg-white border-2 border-navy/30 focus:border-gold focus:bg-white focus:outline-none focus:ring-2 focus:ring-gold/20 transition-all duration-300 placeholder:text-navy/40 text-navy text-lg"
                  />
                </div>
              </div>

              {/* Champ Message (Large) */}
              <div className="relative">
                <label htmlFor="message" className="block text-base font-semibold text-navy mb-3">Votre Message</label>
                <textarea 
                  id="message"
                  rows={5}
                  placeholder="Racontez-moi votre projet..."
                  className="w-full px-5 py-4 rounded-lg bg-white border-2 border-navy/30 focus:border-gold focus:bg-white focus:outline-none focus:ring-2 focus:ring-gold/20 transition-all duration-300 placeholder:text-navy/40 text-navy text-lg resize-none"
                ></textarea>
              </div>

              {/* Bouton d'action - Aligné ou pleine largeur */}
              <div className="pt-4">
                <button type="submit" className="group flex items-center gap-3 bg-navy text-white px-8 py-4 rounded-full hover:bg-gold hover:text-navy transition-all duration-300 font-medium tracking-wide shadow-lg shadow-navy/20">
                  <span>Envoyer ma demande</span>
                  <Send className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            </form>

          </div>
        </div>
      </main>
    </>
  );
}