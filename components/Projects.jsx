"use client";
import Reveal from "./Reveal";
import { HOMTESTI } from "@/lib/config";

export default function Projects() {
  return (
    <section id="projet" className="mx-auto max-w-6xl px-5 py-24">
      <Reveal><h2 className="text-4xl font-bold tracking-tight sm:text-6xl">Mon <span className="hl">projet</span> à la une</h2></Reveal>
      <Reveal delay={0.1} className="mt-12">
        <article className="group overflow-hidden rounded-[2.5rem] bg-ink p-4 text-white shadow-2xl transition duration-500 hover:-translate-y-1 sm:p-8">
          <div className="overflow-hidden rounded-3xl border border-white/10 bg-[#1c1b19]">
            <div className="flex items-center gap-2 px-4 py-3">
              <span className="h-3 w-3 rounded-full bg-[#ff5f57]" /><span className="h-3 w-3 rounded-full bg-[#febc2e]" /><span className="h-3 w-3 rounded-full bg-white/25" />
              <span className="ml-3 rounded-full bg-white/10 px-4 py-1 text-sm text-white/60">homtesti.com</span>
            </div>
            <img src={HOMTESTI.image} alt="Capture d'écran de HomTesti" loading="lazy" className="aspect-[16/9] w-full object-cover" />
          </div>
          <div className="grid gap-8 p-4 pt-8 md:grid-cols-[1.3fr_1fr] sm:p-2 sm:pt-10">
            <div>
              <p className="text-sm text-lime">Réservation · {HOMTESTI.status}</p>
              <h3 className="mt-2 text-4xl font-bold sm:text-5xl">HomTesti</h3>
              <p className="mt-4 max-w-xl text-white/65">Plateforme de réservation de résidences pour plusieurs propriétaires : réservation en trois étapes, paiement en ligne, connexion par numéro de téléphone et espace d'administration.</p>
            </div>
            <div className="flex flex-col items-start justify-between gap-6">
              <ul className="flex flex-wrap gap-2">
                {HOMTESTI.stack.map((s) => <li key={s} className="rounded-full border border-white/20 px-3 py-1 text-sm text-white/75">{s}</li>)}
              </ul>
              <a href={HOMTESTI.url} target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 rounded-full bg-white/10 py-2 pl-6 pr-2 font-medium transition hover:bg-white/15">
                Découvrir le projet
                <span aria-hidden className="flex h-11 w-11 items-center justify-center rounded-full bg-lime text-ink transition group-hover:rotate-45">↗</span>
              </a>
            </div>
          </div>
        </article>
      </Reveal>
    </section>
  );
}
