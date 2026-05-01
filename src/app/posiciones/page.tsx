import Image from "next/image";
import { standings } from "@/data/standings";
import { teams } from "@/data/teams";

function TeamCard({
  row,
  position,
}: {
  row: { team: string; wins: number; losses: number };
  position: number;
}) {
  const totalGames = row.wins + row.losses;
  const winRate = totalGames > 0 ? (row.wins / totalGames) * 100 : 0;
  const teamData = teams.find((t) => t.name === row.team);
  const logo = teamData?.logo || "placeholder-team.png";
  const isLeader = row.losses === 0 && row.wins >= 5;

  return (
    <div
      className={`relative flex items-center gap-4 p-4 md:p-5 border transition-all duration-300 ${
        isLeader
          ? "border-[#53FC18]/60 dark:border-[#53FC18]/60 shadow-[0_0_20px_rgba(83,252,24,0.15)] dark:shadow-[0_0_25px_rgba(83,252,24,0.2)]"
          : "border-[#B8860B] dark:border-[#D4AF37]"
      } bg-white dark:bg-[#0B0B0B]`}
    >
      {/* Posición */}
      <div
        className={`flex h-10 w-10 shrink-0 items-center justify-center font-serif text-xl font-black ${
          isLeader
            ? "text-[#53FC18]"
            : "text-[#B8860B] dark:text-[#D4AF37]"
        }`}
      >
        {position}.
      </div>

      {/* Logo */}
      <div className="relative h-12 w-12 shrink-0 bg-gray-100 dark:bg-[#111] border border-[#B8860B]/50 dark:border-[#D4AF37]/30 rounded p-1">
        <Image
          src={`/logos/${logo}`}
          alt={row.team}
          fill
          className="object-contain p-1 drop-shadow-sm"
        />
      </div>

      {/* Nombre + Barra */}
      <div className="flex flex-1 flex-col gap-1.5 min-w-0">
        <div className="flex items-center gap-2">
          {isLeader && <span className="text-lg">👑</span>}
          <span
            className={`font-bold uppercase tracking-wide text-sm truncate ${
              isLeader
                ? "text-[#53FC18]"
                : "text-gray-900 dark:text-white"
            }`}
          >
            {row.team}
          </span>
        </div>

        {/* Barra de progreso */}
        <div className="flex items-center gap-2">
          <div className="h-1.5 flex-1 bg-gray-200 dark:bg-gray-800 rounded-full overflow-hidden">
            <div
              className={`h-full rounded-full transition-all duration-1000 ${
                isLeader ? "bg-[#53FC18]" : "bg-[#D4AF37]"
              }`}
              style={{ width: `${winRate}%` }}
            />
          </div>
          <span className="text-[10px] font-bold text-gray-500 dark:text-gray-400 w-8 text-right">
            {Math.round(winRate)}%
          </span>
        </div>
      </div>

      {/* Record */}
      <div className="shrink-0 text-right">
        <span className="font-mono text-lg font-black text-[#B8860B] dark:text-[#D4AF37]">
          {row.wins}-{row.losses}
        </span>
      </div>
    </div>
  );
}

function GroupSection({
  title,
  data,
}: {
  title: string;
  data: typeof standings.A;
}) {
  return (
    <div>
      <h2 className="mb-4 font-serif text-2xl font-bold uppercase text-[#B8860B] dark:text-[#D4AF37] border-b border-[#B8860B]/30 dark:border-[#D4AF37]/30 pb-2">
        {title}
      </h2>
      <div className="flex flex-col gap-3">
        {data.map((row, idx) => (
          <TeamCard key={row.team} row={row} position={idx + 1} />
        ))}
      </div>
    </div>
  );
}

export default function PosicionesPage() {
  return (
    <div className="min-h-screen bg-white dark:bg-[#0B0B0B] relative py-12 transition-colors duration-300">
      {/* Rayas diagonales doradas — solo dark mode */}
      <div
        className="absolute inset-0 z-0 opacity-10 pointer-events-none hidden dark:block"
        style={{
          backgroundImage:
            "repeating-linear-gradient(45deg, #000 0, #000 20px, #D4AF37 20px, #D4AF37 40px)",
        }}
      />

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-12 text-center flex flex-col items-center">
          <span className="text-gray-600 dark:text-gray-300 tracking-[0.2em] text-sm uppercase mb-2">
            CLASIFICACIÓN FINAL
          </span>
          <h1 className="font-serif text-5xl md:text-7xl font-extrabold uppercase tracking-widest text-gray-900 dark:text-white mb-6 drop-shadow-[0_0_15px_rgba(255,255,255,0.1)]">
            POSICIONES
          </h1>
          <div className="bg-[#E5D5B5] px-8 py-2 rounded shadow-xl border border-[#B8860B] dark:border-[#D4AF37]/50 rotate-[-1deg]">
            <h2 className="text-black font-serif font-black text-xl uppercase">
              Fase de Grupos — Resultados Finales
            </h2>
          </div>
        </div>

        {/* Grupos */}
        <div className="grid gap-10 xl:grid-cols-2">
          <GroupSection title="Grupo A" data={standings.A} />
          <GroupSection title="Grupo B" data={standings.B} />
        </div>

        {/* Footer Info */}
        <div className="mt-16 border-t border-[#B8860B]/30 dark:border-[#D4AF37]/30 pt-8 text-center">
          <p className="text-gray-500 dark:text-gray-400 text-sm">
            Top 2 de cada grupo avanzan a Upper Bracket • 3° de cada grupo a Lower Bracket
          </p>
        </div>
      </div>
    </div>
  );
}
