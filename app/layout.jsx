import "./globals.css";
import { SITE_URL } from "@/lib/config";

export const metadata = {
  metadataBase: new URL(SITE_URL),
  title: "Michel Dev — Développeur web",
  description: "Développeur web : sites et applications modernes qui transforment des besoins concrets en solutions numériques utiles.",
  openGraph: { title: "Michel Dev — Développeur web", description: "Sites web et applications modernes.", type: "website", locale: "fr_FR", images: ["/L1.png"] },
  icons: { icon: "/L1.png", apple: "/L1.png" },
};
export const viewport = { themeColor: "#F1EEE6" };

export default function RootLayout({ children }) {
  return (
    <html lang="fr">
      <body>{children}</body>
    </html>
  );
}