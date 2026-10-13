import { siReact, siNextdotjs, siJavascript, siTailwindcss, siSupabase, siFirebase, siGit, siGithub } from "simple-icons";

const TECHS = [siReact, siNextdotjs, siJavascript, siTailwindcss, siSupabase, siFirebase, siGit, siGithub];

function Row({ items, reverse }) {
  const group = (key, hidden) => (
    <ul key={key} className="flex shrink-0 items-center" aria-hidden={hidden || undefined}>
      {items.map((t, i) => (
        <li
          key={t.slug}
          title={t.title}
          style={{ "--i": i }}
          className="pill group mr-4 grid h-16 w-16 shrink-0 place-items-center rounded-full border-2 border-white/15 bg-[#0e0e0d] transition duration-300 hover:scale-110 hover:border-lime sm:h-20 sm:w-20"
        >
          <svg viewBox="0 0 24 24" role="img" aria-label={hidden ? undefined : t.title} className="h-1/2 w-1/2 fill-white/70 transition duration-300 group-hover:fill-lime">
            <path d={t.path} />
          </svg>
        </li>
      ))}
    </ul>
  );
  return (
    <div className="marquee overflow-hidden py-2">
      <div className={`marquee-track ${reverse ? "reverse" : ""}`}>{group("a", false)}{group("b", true)}</div>
    </div>
  );
}

export default function TechMarquee() {
  return (
    <section aria-label="Technologies maîtrisées" className="border-y border-white/10 py-12">
      <div className="space-y-4 [mask-image:linear-gradient(90deg,transparent,#000_12%,#000_88%,transparent)]">
        <Row items={TECHS} />
        <Row items={[...TECHS].reverse()} reverse />
      </div>
    </section>
  );
}