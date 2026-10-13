"use client";
import Reveal from "./Reveal";
import { HOMTESTI } from "@/lib/config";

const FEATURES = [
  "Catalogue et recherche de résidences meublées",
  "Réservation en trois étapes",
  "Paiement en ligne",
  "Connexion par numéro de téléphone",
  "Espace propriétaire et administration",
];

export default function Projects() {
  const host = HOMTESTI.url.replace(/^https?:\/\//, "");

  return (
    <section id="projet" className="mx-auto max-w-6xl px-5 py-24">
      <Reveal>
        <h2 className="text-4xl font-bold tracking-tight sm:text-6xl">Mon <span className="hl">projet</span> à la une</h2>
      </Reveal>

      <Reveal delay={0.1} className="mt-12">
        <article className="group overflow-hidden rounded-[2rem] border border-white/10 bg-night p-3 text-white shadow-2xl transition duration-500 hover:-translate-y-1 hover:border-lime/30 motion-reduce:transition-none motion-reduce:hover:translate-y-0 sm:rounded-[2.5rem] sm:p-6">
          <div className="overflow-hidden rounded-2xl border border-white/10 bg-[#1c1b19] sm:rounded-3xl">
            <div className="flex items-center gap-2 px-4 py-3">
              <span className="h-3 w-3 shrink-0 rounded-full bg-[#ff5f57]" />
              <span className="h-3 w-3 shrink-0 rounded-full bg-[#febc2e]" />
              <span className="h-3 w-3 shrink-0 rounded-full bg-white/25" />
              <span className="ml-3 min-w-0 truncate rounded-full bg-white/10 px-4 py-1 text-sm text-white/70">{host}</span>
            </div>
            <div className="overflow-hidden">
              <img
                src={HOMTESTI.image}
                alt={`Capture d'écran de ${host}`}
                loading="lazy"
                className="h-auto w-full transition duration-700 ease-out group-hover:scale-[1.03] motion-reduce:transition-none motion-reduce:group-hover:scale-100"
              />
            </div>
          </div>

          <div className="grid gap-10 px-2 pb-3 pt-8 md:grid-cols-[1.3fr_1fr] sm:px-4 sm:pt-10">
            <div>
              <p className="text-sm text-lime">Plateforme de réservation · {HOMTESTI.status}</p>
              <h3 className="mt-2 break-words text-4xl font-bold tracking-tight sm:text-5xl">HomTesti.com</h3>
              <p className="mt-4 max-w-xl text-white/70">
                Plateforme de location de logements meublés vérifiés en Côte d'Ivoire. Les propriétaires publient leurs résidences, les voyageurs les trouvent et les réservent en ligne.
              </p>
              <ul className="mt-6 grid gap-2 text-white/80 sm:grid-cols-2">
                {FEATURES.map((f) => (
                  <li key={f} className="flex gap-2 text-sm">
                    <span aria-hidden className="text-lime">✓</span>{f}
                  </li>
                ))}
              </ul>
            </div>

            <div className="flex flex-col items-start justify-between gap-8">
              <ul aria-label="Technologies utilisées" className="flex flex-wrap gap-2">
                {HOMTESTI.stack.map((s) => (
                  <li key={s} className="rounded-full border border-white/20 px-3 py-1 text-sm text-white/80">{s}</li>
                ))}
              </ul>
              <a
                href={HOMTESTI.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group/cta flex items-center gap-4 rounded-full bg-lime py-2 pl-6 pr-2 font-medium text-night transition hover:-translate-y-0.5 hover:brightness-110 focus-visible:-translate-y-0.5 focus-visible:brightness-110 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-lime focus-visible:ring-offset-2 focus-visible:ring-offset-night motion-reduce:transition-none"
              >
                Découvrir le projet
                <span aria-hidden className="flex h-11 w-11 items-center justify-center rounded-full bg-night text-lime transition duration-300 group-hover/cta:rotate-45 group-focus-visible/cta:rotate-45 motion-reduce:transition-none">↗</span>
              </a>
            </div>
          </div>
        </article>
      </Reveal>
    </section>
  );
}