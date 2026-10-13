"use client";
import { useState } from "react";
import Reveal from "./Reveal";
import { WHATSAPP_NUMBER } from "@/lib/config";

const TYPES = ["Site vitrine", "Application web", "E-commerce", "SaaS", "Autre"];
const PILLS = [
  { key: "delai", label: "Délai souhaité", options: ["Urgent", "Un mois", "Deux à trois mois", "Flexible"] },
  { key: "budget", label: "Budget", options: ["À discuter", "Budget défini"] },
];

export default function Contact() {
  const [sel, setSel] = useState({});
  const done = sel.type && sel.delai && sel.budget;
  const text = `Bonjour Michel, je souhaite discuter d'un projet.\n- Type de projet : ${sel.type || "-"}\n- Délai : ${sel.delai || "-"}\n- Budget : ${sel.budget || "-"}`;
  const href = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(text)}`;
  const ready = done && WHATSAPP_NUMBER;
  const pick = (k, v) => setSel((s) => ({ ...s, [k]: v }));

  return (
    <section id="contact" className="mt-12 rounded-t-[3rem] bg-lime px-5 pb-28 pt-20 text-night md:pb-24">
      <div className="mx-auto max-w-6xl">
        <Reveal><h2 className="text-4xl font-bold tracking-tight sm:text-6xl">Et le <span className="font-serif italic font-normal underline decoration-night decoration-2 underline-offset-8">vôtre</span> ?</h2></Reveal>
        <Reveal delay={0.1} className="mt-10 space-y-10">
          <fieldset>
            <legend className="mb-4 font-medium">Type de projet</legend>
            <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-5">
              {TYPES.map((o) => {
                const on = sel.type === o;
                return (
                  <button key={o} type="button" aria-pressed={on} onClick={() => pick("type", o)}
                    className={`min-h-24 rounded-3xl border p-5 text-left text-xl font-semibold transition duration-200 active:scale-95 ${on ? "border-night bg-night text-lime" : "border-night/25 bg-night/5 hover:border-night"}`}>
                    {o}
                  </button>
                );
              })}
            </div>
          </fieldset>
          {PILLS.map((g) => (
            <fieldset key={g.key}>
              <legend className="mb-4 font-medium">{g.label}</legend>
              <div className="flex flex-wrap gap-3">
                {g.options.map((o) => {
                  const on = sel[g.key] === o;
                  return (
                    <button key={o} type="button" aria-pressed={on} onClick={() => pick(g.key, o)}
                      className={`rounded-full border px-5 py-2.5 transition duration-200 active:scale-95 ${on ? "border-night bg-night text-lime" : "border-night/25 hover:border-night"}`}>
                      {o}
                    </button>
                  );
                })}
              </div>
            </fieldset>
          ))}
          <div>
            <a href={ready ? href : undefined} target="_blank" rel="noopener noreferrer" aria-disabled={!ready}
              className={`inline-flex items-center gap-4 rounded-full py-2 pl-7 pr-2 font-medium transition ${ready ? "bg-night text-white hover:-translate-y-0.5" : "pointer-events-none bg-night/15 text-night/45"}`}>
              Continuer sur WhatsApp
              <span aria-hidden className={`flex h-11 w-11 items-center justify-center rounded-full ${ready ? "bg-lime text-night" : "bg-night/10"}`}>↗</span>
            </a>
            {!done && <p className="mt-3 text-sm text-night/60">Choisis une option dans chaque groupe pour continuer.</p>}
          </div>
        </Reveal>
      </div>
    </section>
  );
}