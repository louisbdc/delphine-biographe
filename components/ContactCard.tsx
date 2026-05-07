"use client";

import { MapPin, Mail, Phone, Send, CheckCircle, AlertCircle } from "lucide-react";
import { FormEvent, useRef, useState } from "react";
import emailjs from '@emailjs/browser';

interface ContactCardProps {
    className?: string;
}

type FormStatus = 'idle' | 'loading' | 'success' | 'error';

export default function ContactCard({ className = "" }: ContactCardProps) {
    const form = useRef<HTMLFormElement>(null);
    const [status, setStatus] = useState<FormStatus>('idle');

    // TODO: Replace with your actual EmailJS credentials
    const SERVICE_ID = "service_i1jg6u1"; //good
    const TEMPLATE_ID = "template_n44gsya"; //good
    const PUBLIC_KEY = "zbh12J84qvbou5Jgj"; //good

    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setStatus('loading');

        if (form.current) {
            emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, form.current, {
                publicKey: PUBLIC_KEY,
            })
                .then(
                    () => {
                        setStatus('success');
                        if (form.current) form.current.reset();
                        // Reset button after 4 seconds
                        setTimeout(() => setStatus('idle'), 4000);
                    },
                    (error) => {
                        console.error('FAILED...', error.text);
                        setStatus('error');
                        setTimeout(() => setStatus('idle'), 3000);
                    },
                );
        }
    };

    return (
        <div className={`bg-white rounded-[2rem] shadow-2xl shadow-navy/10 overflow-hidden flex flex-col lg:flex-row ${className}`}>

            {/* --- COLONNE GAUCHE (NAVY) : 40% de la largeur --- */}
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
                            <a href="mailto:delphine.biographe@gmail.com" className="text-white/90 font-light text-lg hover:text-gold transition-colors">
                                delphine.biographe@gmail.com
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
            </div>

            {/* --- COLONNE DROITE (BLANC) : 60% de la largeur --- */}
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
                        Je navigue entre <strong className="text-navy font-medium">Versailles</strong> et <strong className="text-navy font-medium">Paris </strong>mais je peux me déplacer plus loin sur demande. N&apos;hésitez pas à me contacter pour une première discussion sans engagement.
                    </p>
                </div>

                {/* Formulaire */}
                <form className="space-y-6" ref={form} onSubmit={handleSubmit}>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {/* Champ Nom */}
                        <div className="relative">
                            <label htmlFor="user_name" className="block text-base font-semibold text-navy mb-3">Votre Nom</label>
                            <input
                                type="text"
                                name="user_name"
                                id="user_name"
                                placeholder="Jean Dupont"
                                required
                                className="w-full px-5 py-4 rounded-lg bg-white border-2 border-navy/30 focus:border-gold focus:bg-white focus:outline-none focus:ring-2 focus:ring-gold/20 transition-all duration-300 placeholder:text-navy/40 text-navy text-lg"
                            />
                        </div>

                        {/* Champ Email */}
                        <div className="relative">
                            <label htmlFor="user_email" className="block text-base font-semibold text-navy mb-3">Votre Email</label>
                            <input
                                type="email"
                                name="user_email"
                                id="user_email"
                                placeholder="jean@email.com"
                                required
                                className="w-full px-5 py-4 rounded-lg bg-white border-2 border-navy/30 focus:border-gold focus:bg-white focus:outline-none focus:ring-2 focus:ring-gold/20 transition-all duration-300 placeholder:text-navy/40 text-navy text-lg"
                            />
                        </div>
                    </div>

                    {/* Champ Message (Large) */}
                    <div className="relative">
                        <label htmlFor="message" className="block text-base font-semibold text-navy mb-3">Votre Message</label>
                        <textarea
                            name="message"
                            id="message"
                            rows={5}
                            required
                            placeholder="Racontez-moi votre projet..."
                            className="w-full px-5 py-4 rounded-lg bg-white border-2 border-navy/30 focus:border-gold focus:bg-white focus:outline-none focus:ring-2 focus:ring-gold/20 transition-all duration-300 placeholder:text-navy/40 text-navy text-lg resize-none"
                        ></textarea>
                    </div>

                    {/* Bouton d'action */}
                    <div className="pt-4">
                        <button
                            type="submit"
                            disabled={status !== 'idle' && status !== 'error'}
                            className={`group flex items-center gap-3 px-8 py-4 rounded-full font-medium tracking-wide shadow-lg transition-all duration-500
                                ${status === 'success' ? 'bg-green-600 text-white shadow-green-600/20 w-full md:w-auto justify-center' : ''}
                                ${status === 'error' ? 'bg-red-600 text-white shadow-red-600/20' : ''}
                                ${status === 'loading' ? 'bg-navy/80 text-white cursor-wait' : ''}
                                ${status === 'idle' ? 'bg-navy text-white hover:bg-gold hover:text-navy shadow-navy/20' : ''}
                            `}
                        >
                            {status === 'idle' && (
                                <>
                                    <span>Envoyer ma demande</span>
                                    <Send className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                                </>
                            )}

                            {status === 'loading' && (
                                <>
                                    <span>Envoi en cours...</span>
                                    <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                                </>
                            )}

                            {status === 'success' && (
                                <>
                                    <span>Message envoyé !</span>
                                    <CheckCircle className="w-5 h-5 animate-bounce" />
                                </>
                            )}

                            {status === 'error' && (
                                <>
                                    <span>Erreur, réessayez</span>
                                    <AlertCircle className="w-5 h-5" />
                                </>
                            )}
                        </button>
                    </div>
                </form>

            </div>
        </div>
    );
}
