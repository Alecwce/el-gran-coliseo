import { Countdown } from "@/components/Countdown";
import { schedule } from "@/data/schedule";
import { teams } from "@/data/teams";
import Image from "next/image";
import Link from "next/link";

function MiniMatchCard({ match }: { match: typeof schedule[0] }) {
  const t1 = teams.find(t => t.name === match.team1);
  const t2 = teams.find(t => t.name === match.team2);
  const isFinished = !!match.winner;
  const team1Won = match.winner === match.team1;
  const team2Won = match.winner === match.team2;

  return (
    <div className={`flex items-center justify-between border p-3 md:p-4 shadow-lg transition-all ${
      isFinished
        ? "border-gray-300 dark:border-gray-700 bg-white dark:bg-[#0B0B0B]/80"
        : "border-[#B8860B] dark:border-[#D4AF37] bg-white dark:bg-[#0B0B0B]/80"
    }`}>
      {/* Equipo 1 */}
      <div className="flex items-center gap-3 w-2/5 justify-end">
        <span className={`text-xs md:text-sm font-bold uppercase tracking-wider text-right truncate ${
          team1Won ? "text-[#53FC18]" : isFinished ? "text-gray-400" : "text-gray-900 dark:text-white"
        }`}>{match.team1}</span>
        <div className={`relative h-10 w-10 md:h-14 md:w-14 shrink-0 bg-white dark:bg-[#111] border rounded ${
          team1Won ? "border-[#53FC18] shadow-[0_0_8px_rgba(83,252,24,0.3)]" : "border-[#B8860B]/50 dark:border-[#D4AF37]/30"
        }`}>
          {t1 && <Image src={`/logos/${t1.logo}`} alt={t1.name} fill className="object-contain p-1" sizes="56px" />}
        </div>
      </div>

      {/* Centro */}
      <div className="flex flex-col items-center px-3 md:px-6 shrink-0">
        <span className="font-serif text-xl md:text-3xl font-black text-[#B8860B] dark:text-[#D4AF37]">{match.time}</span>
        <span className="text-[8px] md:text-[10px] font-bold text-gray-500 dark:text-gray-400 uppercase tracking-widest mt-0.5">
          {isFinished ? "FINALIZADO" : `BO${match.bo}`}
        </span>
      </div>

      {/* Equipo 2 */}
      <div className="flex items-center gap-3 w-2/5">
        <div className={`relative h-10 w-10 md:h-14 md:w-14 shrink-0 bg-white dark:bg-[#111] border rounded ${
          team2Won ? "border-[#53FC18] shadow-[0_0_8px_rgba(83,252,24,0.3)]" : "border-[#B8860B]/50 dark:border-[#D4AF37]/30"
        }`}>
          {t2 && <Image src={`/logos/${t2.logo}`} alt={t2.name} fill className="object-contain p-1" sizes="56px" />}
        </div>
        <span className={`text-xs md:text-sm font-bold uppercase tracking-wider truncate ${
          team2Won ? "text-[#53FC18]" : isFinished ? "text-gray-400" : "text-gray-900 dark:text-white"
        }`}>{match.team2}</span>
      </div>
    </div>
  );
}

export default function Home() {
  const todaysMatches = schedule.filter((match) => match.date === "2026-04-27");

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative flex min-h-[70vh] flex-col items-center justify-center overflow-hidden bg-white dark:bg-[#0B0B0B] px-4 py-24 text-center transition-colors duration-300">
        {/* Rayas diagonales doradas — solo dark mode */}
        <div
          className="absolute inset-0 z-0 opacity-5 pointer-events-none hidden dark:block"
          style={{
            backgroundImage: 'repeating-linear-gradient(45deg, #000 0, #000 20px, #D4AF37 20px, #D4AF37 40px)'
          }}
        />

        <div className="relative z-10 flex flex-col items-center gap-8">
          <div className="flex items-center gap-2 rounded-none bg-[#53FC18] px-3 py-1 font-bold text-[#0A0A0A]">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-black opacity-75"></span>
              <span className="relative inline-flex h-2 w-2 rounded-full bg-black"></span>
            </span>
            <span className="text-xs uppercase tracking-widest">EN VIVO POR KICK</span>
          </div>

          <h1 className="max-w-4xl font-serif text-5xl font-extrabold tracking-tight text-[#B8860B] dark:text-[#D4AF37] sm:text-7xl drop-shadow-[0_0_15px_rgba(212,175,55,0.15)]">
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

      {/* Formato Section — con rayas */}
      <section className="relative bg-white dark:bg-[#0B0B0B] py-20 transition-colors duration-300">
        <div
          className="absolute inset-0 z-0 opacity-5 pointer-events-none hidden dark:block"
          style={{
            backgroundImage: 'repeating-linear-gradient(45deg, #000 0, #000 20px, #D4AF37 20px, #D4AF37 40px)'
          }}
        />
        <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="mb-8 text-center font-serif text-3xl font-bold uppercase tracking-widest text-[#B8860B] dark:text-[#D4AF37]">
            Formato del Torneo
          </h2>
          <div className="grid gap-6 md:grid-cols-3">
            {[
              { title: "Fase de Grupos", desc: "Todos contra todos. Partidos rápidos para definir posiciones.", bo: "BO1", icon: "⚔️" },
              { title: "Playoffs", desc: "Llaves de eliminación doble (Upper y Lower bracket).", bo: "BO3", icon: "🏟️" },
              { title: "Gran Final", desc: "El enfrentamiento definitivo por la gloria del Coliseo.", bo: "BO5", icon: "🏆" },
            ].map((item, idx) => (
              <div
                key={idx}
                className="group border border-[#B8860B] dark:border-[#D4AF37] bg-white/80 dark:bg-black/60 backdrop-blur-sm p-6 transition-all hover:shadow-[0_0_20px_rgba(212,175,55,0.25)] hover:border-[#D4AF37]"
              >
                <div className="flex items-center gap-3 mb-4">
                  <span className="text-3xl">{item.icon}</span>
                  <div className="bg-[#E5D5B5] px-3 py-1 text-sm font-bold text-black border border-[#B8860B] dark:border-[#D4AF37]/50 shadow-inner">
                    {item.bo}
                  </div>
                </div>
                <h3 className="mb-2 font-serif text-xl font-bold text-[#B8860B] dark:text-[#D4AF37] uppercase">{item.title}</h3>
                <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Partidos del Día — tarjetas estilo horario */}
      <section className="relative bg-white dark:bg-[#0B0B0B] py-20 transition-colors duration-300">
        <div
          className="absolute inset-0 z-0 opacity-5 pointer-events-none hidden dark:block"
          style={{
            backgroundImage: 'repeating-linear-gradient(45deg, #000 0, #000 20px, #D4AF37 20px, #D4AF37 40px)'
          }}
        />
        <div className="relative z-10 mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <div className="mb-8 flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="text-center sm:text-left">
              <span className="text-gray-600 dark:text-gray-300 tracking-[0.2em] text-xs uppercase">DÍA 1 — 27 DE ABRIL</span>
              <h2 className="font-serif text-3xl font-bold uppercase tracking-widest text-[#B8860B] dark:text-[#D4AF37]">
                Partidos
              </h2>
            </div>
            <Link
              href="/horario"
              className="bg-[#E5D5B5] px-5 py-2 text-sm font-bold text-black border border-[#B8860B] dark:border-[#D4AF37]/50 uppercase tracking-widest hover:shadow-lg transition-all"
            >
              Ver todos →
            </Link>
          </div>

          <div className="flex flex-col gap-3">
            {todaysMatches.map((match, idx) => (
              <MiniMatchCard key={idx} match={match} />
            ))}
            {todaysMatches.length === 0 && (
              <div className="border border-[#B8860B] dark:border-[#D4AF37] bg-white dark:bg-[#0B0B0B]/80 p-8 text-center">
                <p className="text-gray-500 dark:text-gray-400 uppercase tracking-widest text-sm">No hay partidos programados para hoy.</p>
              </div>
            )}
          </div>
        </div>
      </section>
    </div>
  );
}
