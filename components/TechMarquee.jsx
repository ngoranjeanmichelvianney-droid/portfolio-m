import { siReact, siNextdotjs, siJavascript, siTailwindcss, siSupabase, siFirebase, siGit, siGithub } from "simple-icons";

const TECHS = [siReact, siNextdotjs, siJavascript, siTailwindcss, siSupabase, siFirebase, siGit, siGithub];

function Row({ items, reverse }) {
  const group = (key, hidden) => (
    <ul key={key} className="flex shrink-0 items-center" aria-hidden={hidden || undefined}>
      {items.map((t) => (
        <li key={t.slug} title={t.title} className="group mx-6 flex w-28 shrink-0 flex-col items-center gap-3 sm:mx-9 sm:w-32">
          <svg viewBox="0 0 24 24" role="img" aria-label={hidden ? undefined : t.title} style={{ fill: `#${t.hex}` }} className="h-10 w-10 transition duration-300 group-hover:scale-110 sm:h-12 sm:w-12">
            <path d={t.path} />
          </svg>
          <span className="text-xs text-ink/55 transition group-hover:text-ink">{t.title}</span>
        </li>
      ))}
    </ul>
  );
  return (
    <div className="marquee overflow-hidden">
      <div className={`marquee-track ${reverse ? "reverse" : ""}`}>{group("a", false)}{group("b", true)}</div>
    </div>
  );
}

export default function TechMarquee() {
  return (
    <section aria-label="Technologies maîtrisées" className="border-y border-ink/10 py-12">
      <div className="space-y-8 [mask-image:linear-gradient(90deg,transparent,#000_12%,#000_88%,transparent)]">
        <Row items={TECHS} />
        <Row items={[...TECHS].reverse()} reverse />
      </div>
    </section>
  );
}
