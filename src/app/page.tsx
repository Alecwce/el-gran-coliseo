import { Countdown } from "@/components/Countdown";
import { schedule } from "@/data/schedule";
import Link from "next/link";

export default function Home() {
  const todaysMatches = schedule.filter((match) => match.date === "2026-04-27");

  return (
    <div className="flex flex-col gap-16 pb-16">
      {/* Hero Section */}
      <section className="relative flex min-h-[70vh] flex-col items-center justify-center overflow-hidden border-b border-[#B8860B] dark:border-[#D4AF37]/20 bg-gray-50 dark:bg-[#0A0A0A] px-4 py-24 text-center">
        {/* Background gradient — solo dark */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-[#191B1F] via-[#0A0A0A] to-[#0A0A0A] opacity-0 dark:opacity-80" />

        <div className="relative z-10 flex flex-col items-center gap-8">
          <div className="flex items-center gap-2 rounded-none bg-[#53FC18] px-3 py-1 font-bold text-[#0A0A0A]">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-black opacity-75"></span>
              <span className="relative inline-flex h-2 w-2 rounded-full bg-black"></span>
            </span>
            <span className="text-xs uppercase tracking-widest">92.4K EN KICK • EN VIVO</span>
          </div>

          <h1 className="max-w-4xl font-serif text-5xl font-extrabold tracking-tight text-[#B8860B] dark:text-[#D4AF37] sm:text-7xl">
            EL GRAN COLISEO DE BENJAZ
          </h1>

          <div className="flex flex-col items-center gap-4 w-full">
            <p className="text-sm tracking-widest text-gray-600 dark:text-gray-400 uppercase">La batalla comienza en</p>
            <Countdown target="2026-04-27T14:00:00-05:00">
              <div className="w-full aspect-video mt-8 max-w-4xl mx-auto">
                <iframe
                  src="https://player.kick.com/benjaz"
                  height="100%"
                  width="100%"
                  frameBorder="0"
                  scrolling="no"
                  allowFullScreen={true}
                  sandbox="allow-scripts allow-same-origin"
                  className="w-full h-full border border-[#B8860B] dark:border-[#D4AF37]/50 shadow-[0_0_30px_rgba(83,252,24,0.15)]"
                ></iframe>
              </div>
            </Countdown>
          </div>

          <a
            href="https://kick.com/benjaz"
            target="_blank"
            rel="noopener"
            className="mt-8 flex items-center justify-center rounded-none bg-[#53FC18] px-8 py-4 font-sans text-lg font-bold uppercase tracking-wider text-[#0A0A0A] transition-transform hover:scale-105"
          >
            VER EN VIVO
          </a>
        </div>
      </section>

      {/* Formato Section */}
      <section className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        <h2 className="mb-8 text-center font-serif text-3xl font-bold uppercase tracking-widest text-[#B8860B] dark:text-[#D4AF37]">
          Formato del Torneo
        </h2>
        <div className="grid gap-6 md:grid-cols-3">
          {[
            { title: "Fase de Grupos", desc: "Todos contra todos. Partidos rápidos para definir posiciones.", bo: "BO1" },
            { title: "Playoffs", desc: "Llaves de eliminación doble (Upper y Lower bracket).", bo: "BO3" },
            { title: "Gran Final", desc: "El enfrentamiento definitivo por la gloria del Coliseo.", bo: "BO5" },
          ].map((item, idx) => (
            <div
              key={idx}
              className="group border border-[#B8860B] dark:border-[#D4AF37] bg-white dark:bg-[#191B1F] p-6 transition-all hover:shadow-[0_0_15px_rgba(212,175,55,0.3)]"
            >
              <div className="mb-4 inline-block bg-gray-50 dark:bg-[#0A0A0A] px-3 py-1 text-sm font-bold text-[#B8860B] dark:text-[#D4AF37] border border-[#B8860B] dark:border-[#D4AF37]/50">
                {item.bo}
              </div>
              <h3 className="mb-2 font-serif text-xl font-bold text-gray-900 dark:text-white">{item.title}</h3>
              <p className="text-sm text-gray-600 dark:text-gray-400">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Horario Hoy Section */}
      <section className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-8 flex items-end justify-between">
          <h2 className="font-serif text-3xl font-bold uppercase tracking-widest text-[#B8860B] dark:text-[#D4AF37]">
            Horario de Hoy
          </h2>
          <Link href="/horario" className="text-sm font-bold text-[#0066FF] hover:underline uppercase tracking-widest">
            Ver todo
          </Link>
        </div>

        <div className="overflow-x-auto border border-[#B8860B] dark:border-[#D4AF37]">
          <table className="w-full text-left text-sm">
            <thead className="bg-[#0066FF] text-white">
              <tr>
                <th className="px-4 py-3 font-bold uppercase tracking-wider border-b border-r border-[#B8860B] dark:border-[#D4AF37]/50">Hora</th>
                <th className="px-4 py-3 font-bold uppercase tracking-wider border-b border-r border-[#B8860B] dark:border-[#D4AF37]/50">Equipo 1</th>
                <th className="px-4 py-3 font-bold uppercase tracking-wider border-b border-r border-[#B8860B] dark:border-[#D4AF37]/50">Equipo 2</th>
                <th className="px-4 py-3 font-bold uppercase tracking-wider border-b border-[#B8860B] dark:border-[#D4AF37]/50">Fase</th>
              </tr>
            </thead>
            <tbody className="bg-white dark:bg-[#191B1F]">
              {todaysMatches.map((match, idx) => (
                <tr key={idx} className="border-b border-gray-200 dark:border-gray-800/50 last:border-0 hover:bg-gray-50 dark:hover:bg-[#201f1f]">
                  <td className="px-4 py-4 font-bold text-[#B8860B] dark:text-[#D4AF37] border-r border-gray-200 dark:border-gray-800/30">{match.time}</td>
                  <td className="px-4 py-4 font-semibold text-gray-900 dark:text-white border-r border-gray-200 dark:border-gray-800/30">{match.team1}</td>
                  <td className="px-4 py-4 font-semibold text-gray-900 dark:text-white border-r border-gray-200 dark:border-gray-800/30">{match.team2}</td>
                  <td className="px-4 py-4 text-gray-600 dark:text-gray-300">{match.stage} (BO{match.bo})</td>
                </tr>
              ))}
              {todaysMatches.length === 0 && (
                <tr>
                  <td colSpan={4} className="px-4 py-8 text-center text-gray-500">
                    No hay partidos programados para hoy.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </section>
    </div>
  );
}
