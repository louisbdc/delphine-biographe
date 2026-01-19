"use client";

import ContactCard from "./ContactCard";

export default function Contact() {
  return (
    <section id="contact" className="bg-cream py-16 md:py-24 px-4 sm:px-6">
      <div className="container mx-auto max-w-6xl">
        <ContactCard />
      </div>
    </section>
  );
}

