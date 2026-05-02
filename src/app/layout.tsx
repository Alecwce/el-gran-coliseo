import type { Metadata } from "next";
import { Inter, Newsreader } from "next/font/google";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import "./tailwind.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const newsreader = Newsreader({
  variable: "--font-newsreader",
  subsets: ["latin"],
  style: ["normal", "italic"],
});

import { ThemeProvider } from "@/components/ThemeProvider";

export const metadata: Metadata = {
  title: 'El Gran Coliseo de Benjaz | Torneo Dota 2 $20,000 USD',
  alternates: {
    canonical: process.env.NEXT_PUBLIC_SITE_URL || 'https://coliseo-benjaz.vercel.app',
  },
  description: 'Sigue en vivo del 27 de abril al 3 de mayo de 2026 el torneo de Benjaz en Kick. 12 equipos compiten por $20,000 USD en formato Bo1 grupos y Bo3/Bo5 playoffs. ¡Entra ya!',
  keywords: ['Dota 2', 'Benjaz', 'Coliseo', 'torneo', 'Kick'],
  openGraph: {
    title: 'El Gran Coliseo de Benjaz',
    description: 'Sigue en vivo del 27 de abril al 3 de mayo de 2026 el torneo de Benjaz en Kick. 12 equipos, $20,000 USD, playoffs Bo3/Bo5.',
    url: 'https://coliseo-benjaz.vercel.app',
    siteName: 'El Gran Coliseo',
    locale: 'es_PE',
    type: 'website',
    images: [{
      url: '/opengraph-image.png',
      width: 1200,
      height: 630,
      alt: 'El Gran Coliseo de Benjaz — Torneo Dota 2 $20,000 USD',
    }],
  },
  twitter: { card: 'summary_large_image', creator: '@benjaz' },
  other: {
    'fb:app_id': ''
  },
  manifest: '/manifest.json',
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || 'https://el-gran-coliseo.netlify.app'),
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" suppressHydrationWarning className={`dark ${inter.variable} ${newsreader.variable}`}>
      <body className="bg-white dark:bg-[#0A0A0A] text-gray-900 dark:text-white font-sans antialiased min-h-screen flex flex-col">
        <ThemeProvider>
          <Header />
          <main className="flex-1">
            {children}
          </main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
