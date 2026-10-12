import Reveal from "./Reveal";

export default function About() {
  return (
    <section id="apropos" className="mx-auto max-w-6xl px-5 py-24">
      <Reveal><h2 className="max-w-3xl text-4xl font-bold tracking-tight sm:text-6xl">Du code aux <span className="hl">solutions concrètes</span>.</h2></Reveal>
      <Reveal delay={0.1}><p className="mt-8 max-w-xl text-lg text-ink/70">Je développe des interfaces web modernes et je cherche continuellement à améliorer la qualité, les performances et l'expérience utilisateur de mes réalisations.</p></Reveal>
    </section>
  );
}
