import Navigation from "@/components/Navigation";
import ContactCard from "@/components/ContactCard";

export default function ContactPage() {
  return (
    <>
      <Navigation />

      <main className="min-h-screen bg-[#FDFBF7] flex items-center justify-center py-24 px-4 sm:px-6">

        {/* CONTENEUR PRINCIPAL : Plus large (max-w-6xl) pour donner de l'espace */}
        <ContactCard className="w-full max-w-6xl min-h-[700px]" />
      </main>
    </>
  );
}