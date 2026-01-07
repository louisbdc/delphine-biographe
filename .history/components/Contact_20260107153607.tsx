"use client";

export default function Contact() {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    alert("Merci pour votre message. Ceci est une démonstration.");
  };

  return (
    <footer id="contact" className="bg-white pt-16 pb-8 border-t border-gray-200">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-12 mb-12">
          {/* Info */}
          <div>
            <h2 className="text-3xl font-serif font-bold text-navy mb-6">
              Commençons votre histoire
            </h2>
            <p className="text-xl text-gray-600 mb-8">
              Je navigue entre <strong>Versailles</strong> et <strong>Paris</strong>{" "}
              mais je peux me déplacer plus loin sur demande. N'hésitez pas à me
              contacter pour une première discussion sans engagement.
            </p>

            <ul className="space-y-4 text-xl">
              <li className="flex items-center gap-4">
                <span className="material-symbols-outlined text-sage text-3xl">mail</span>
                <a
                  href="mailto:contact@biographedelphine.fr"
                  className="hover:text-sage hover:underline decoration-2 underline-offset-4"
                >
                  contact@biographedelphinedelapeyriere.fr
                </a>
              </li>
              <li className="flex items-center gap-4">
                <span className="material-symbols-outlined text-sage text-3xl">call</span>
                <span className="font-bold">06 XX XX XX XX</span>
              </li>
              <li className="flex items-center gap-4">
                <span className="material-symbols-outlined text-sage text-3xl">
                  location_on
                </span>
                <span>Versailles, Paris & Île-de-France</span>
              </li>
            </ul>
          </div>

          {/* Simple Visual or Form Placeholder */}
          <div className="bg-cream p-8 rounded-2xl border border-gray-200">
            <h3 className="text-2xl font-serif font-bold text-navy mb-4">
              Envoyez-moi un message
            </h3>
            <form className="space-y-4" onSubmit={handleSubmit}>
              <div>
                <label className="block text-lg font-bold text-navy mb-2">
                  Votre Nom
                </label>
                <input
                  type="text"
                  className="w-full p-4 rounded-lg border border-gray-300 focus:border-sage focus:ring-2 focus:ring-sage outline-none bg-white text-lg"
                  placeholder="Jean Dupont"
                />
              </div>
              <div>
                <label className="block text-lg font-bold text-navy mb-2">
                  Votre Email
                </label>
                <input
                  type="email"
                  className="w-full p-4 rounded-lg border border-gray-300 focus:border-sage focus:ring-2 focus:ring-sage outline-none bg-white text-lg"
                  placeholder="jean@email.com"
                />
              </div>
              <button
                type="submit"
                className="w-full bg-navy text-white text-xl font-bold py-4 rounded-lg hover:bg-navy-light transition-colors shadow-lg"
              >
                Envoyer
              </button>
            </form>
          </div>
        </div>

        <div className="text-center border-t border-gray-200 pt-8 text-gray-500 text-sm">
          <p>© 2024 Delphine de Lapeyrière. Tous droits réservés.</p>
          <p className="mt-2">Site repensé pour l'accessibilité numérique.</p>
        </div>
      </div>
    </footer>
  );
}

