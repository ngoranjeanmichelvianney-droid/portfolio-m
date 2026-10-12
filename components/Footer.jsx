import { SOCIALS, WHATSAPP_NUMBER } from "@/lib/config";
import { ICONS, LABELS } from "./SocialIcons";

export default function Footer() {
  const links = { ...(WHATSAPP_NUMBER ? { whatsapp: `https://wa.me/${WHATSAPP_NUMBER}` } : {}), ...SOCIALS };
  const list = Object.keys(LABELS).filter((k) => links[k]);
  const btn = "group flex h-16 w-16 items-center justify-center rounded-full border border-white/20 transition duration-300 hover:-translate-y-1 hover:border-lime";
  return (
    <footer className="bg-ink px-5 pb-32 pt-20 text-white md:pb-12">
      <div className="mx-auto max-w-6xl">
        <ul aria-label="Réseaux sociaux" className="flex flex-wrap gap-4">
          {list.map((k) => (
            <li key={k}><a href={links[k]} target="_blank" rel="noopener noreferrer" aria-label={LABELS[k]} className={btn}>
              <svg viewBox="0 0 24 24" aria-hidden className="h-6 w-6 fill-white transition group-hover:fill-lime"><path d={ICONS[k].path} /></svg>
            </a></li>
          ))}
          <li><a href="#top" aria-label="Retour en haut" className={`${btn} text-2xl hover:text-lime`}>↑</a></li>
        </ul>
       <img src="/L1.png" alt="Michel Dev" className="mt-16 h-20 w-auto rounded-2xl" />
        <p className="mt-6 border-t border-white/15 pt-6 text-sm text-white/50">© 2026 Michel Dev — Tous droits réservés</p>
      </div>
    </footer>
  );
}
