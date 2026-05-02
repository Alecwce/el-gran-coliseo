"use client";

import { useState } from "react";
import Image from "next/image";
import { teams } from "@/data/teams";

type Match = {
  time: string;
  format: string;
  team1: { name: string; odd?: string; shortName: string };
  team2: { name: string; odd?: string; shortName: string };
  winner?: string;
};

type ScheduleDay = {
  date: string;
  label: string;
  matches: Match[];
};

const fullSchedule: ScheduleDay[] = [
  {
    date: "27",
    label: "27 DE ABRIL",
    matches: [
      { time: "14:00", format: "AL MEJOR DE 1", team1: { name: "The Bot$", shortName: "THE BOT$" }, team2: { name: "Los Bemboyz", shortName: "LOS BEMBOYZ" }, winner: "The Bot$" },
      { time: "15:00", format: "AL MEJOR DE 1", team1: { name: "WK Bear and Bones", shortName: "WK BEAR AND B." }, team2: { name: "Team Peyitaz", shortName: "T. PEYITAS" }, winner: "Team Peyitaz" },
      { time: "16:00", format: "AL MEJOR DE 1", team1: { name: "Rage Overdose", shortName: "R. OVERDOSE" }, team2: { name: "The Monsters", shortName: "T. MONSTERS" }, winner: "The Monsters" },
      { time: "17:00", format: "AL MEJOR DE 1", team1: { name: "Mango Boys", shortName: "MANGO B." }, team2: { name: "Capibarbas", shortName: "CAPIBARBAS" }, winner: "Mango Boys" },
      { time: "18:00", format: "AL MEJOR DE 1", team1: { name: "The Bot$", shortName: "THE BOT$" }, team2: { name: "Gotto House", shortName: "GOTTO H." }, winner: "The Bot$" },
      { time: "19:00", format: "AL MEJOR DE 1", team1: { name: "WK Bear and Bones", shortName: "WK BEAR AND B." }, team2: { name: "The Blacklist", shortName: "T. BLACKLIST" }, winner: "WK Bear and Bones" },
      { time: "20:00", format: "AL MEJOR DE 1", team1: { name: "Los Bemboyz", shortName: "LOS BEMBOYZ" }, team2: { name: "Rage Overdose", shortName: "R. OVERDOSE" }, winner: "Los Bemboyz" },
      { time: "21:00", format: "AL MEJOR DE 1", team1: { name: "Team Peyitaz", shortName: "T. PEYITAS" }, team2: { name: "The Blacklist", shortName: "T. BLACKLIST" }, winner: "Team Peyitaz" },
    ]
  },
  {
    date: "28",
    label: "28 DE ABRIL",
    matches: [
      { time: "14:00", format: "AL MEJOR DE 1", team1: { name: "The Bot$", shortName: "THE BOT$" }, team2: { name: "The Monsters", shortName: "T. MONSTERS" }, winner: "The Bot$" },
      { time: "15:00", format: "AL MEJOR DE 1", team1: { name: "WK Bear and Bones", shortName: "WK BEAR AND B." }, team2: { name: "Mango Boys", shortName: "MANGO B." }, winner: "WK Bear and Bones" },
      { time: "16:00", format: "AL MEJOR DE 1", team1: { name: "Rage Overdose", shortName: "R. OVERDOSE" }, team2: { name: "Gotto House", shortName: "GOTTO H." }, winner: "Gotto House" },
      { time: "17:00", format: "AL MEJOR DE 1", team1: { name: "Capibarbas", shortName: "CAPIBARBAS" }, team2: { name: "TaiLung Mafia", shortName: "TAILUNG M." }, winner: "Capibarbas" },
      { time: "18:00", format: "AL MEJOR DE 1", team1: { name: "Los Bemboyz", shortName: "LOS BEMBOYZ" }, team2: { name: "Gotto House", shortName: "GOTTO H." }, winner: "Los Bemboyz" },
      { time: "19:00", format: "AL MEJOR DE 1", team1: { name: "Team Peyitaz", shortName: "T. PEYITAS" }, team2: { name: "TaiLung Mafia", shortName: "TAILUNG M." }, winner: "Team Peyitaz" },
      { time: "20:00", format: "AL MEJOR DE 1", team1: { name: "The Monsters", shortName: "T. MONSTERS" }, team2: { name: "Chala Team", shortName: "CHALA T." }, winner: "The Monsters" },
      { time: "21:00", format: "AL MEJOR DE 1", team1: { name: "Mango Boys", shortName: "MANGO B." }, team2: { name: "The Blacklist", shortName: "T. BLACKLIST" }, winner: "The Blacklist" },
    ]
  },
  {
    date: "29",
    label: "29 DE ABRIL",
    matches: [
      { time: "14:00", format: "AL MEJOR DE 1", team1: { name: "The Bot$", shortName: "THE BOT$" }, team2: { name: "Chala Team", shortName: "CHALA T." }, winner: "The Bot$" },
      { time: "15:00", format: "AL MEJOR DE 1", team1: { name: "WK Bear and Bones", shortName: "WK BEAR AND B." }, team2: { name: "Capibarbas", shortName: "CAPIBARBAS" }, winner: "WK Bear and Bones" },
      { time: "16:00", format: "AL MEJOR DE 1", team1: { name: "Los Bemboyz", shortName: "LOS BEMBOYZ" }, team2: { name: "The Monsters", shortName: "T. MONSTERS" }, winner: "The Monsters" },
      { time: "17:00", format: "AL MEJOR DE 1", team1: { name: "Team Peyitaz", shortName: "T. PEYITAS" }, team2: { name: "Mango Boys", shortName: "MANGO B." }, winner: "Team Peyitaz" },
      { time: "18:00", format: "AL MEJOR DE 1", team1: { name: "Rage Overdose", shortName: "R. OVERDOSE" }, team2: { name: "Chala Team", shortName: "CHALA T." }, winner: "Rage Overdose" },
      { time: "19:00", format: "AL MEJOR DE 1", team1: { name: "TaiLung Mafia", shortName: "TAILUNG M." }, team2: { name: "The Blacklist", shortName: "T. BLACKLIST" }, winner: "TaiLung Mafia" },
      { time: "20:00", format: "AL MEJOR DE 1", team1: { name: "Gotto House", shortName: "GOTTO H." }, team2: { name: "The Monsters", shortName: "T. MONSTERS" }, winner: "Gotto House" },
    ]
  },
  {
    date: "30",
    label: "30 DE ABRIL",
    matches: [
      { time: "14:00", format: "AL MEJOR DE 1", team1: { name: "The Bot$", shortName: "THE BOT$" }, team2: { name: "Rage Overdose", shortName: "R. OVERDOSE" }, winner: "The Bot$" },
      { time: "15:00", format: "AL MEJOR DE 1", team1: { name: "WK Bear and Bones", shortName: "WK BEAR AND B." }, team2: { name: "TaiLung Mafia", shortName: "TAILUNG M." }, winner: "WK Bear and Bones" },
      { time: "16:00", format: "AL MEJOR DE 1", team1: { name: "Los Bemboyz", shortName: "LOS BEMBOYZ" }, team2: { name: "Chala Team", shortName: "CHALA T." }, winner: "Los Bemboyz" },
      { time: "17:00", format: "AL MEJOR DE 1", team1: { name: "Team Peyitaz", shortName: "T. PEYITAS" }, team2: { name: "Capibarbas", shortName: "CAPIBARBAS" }, winner: "Team Peyitaz" },
      { time: "18:00", format: "AL MEJOR DE 1", team1: { name: "Chala Team", shortName: "CHALA T." }, team2: { name: "Gotto House", shortName: "GOTTO H." }, winner: "Gotto House" },
      { time: "19:00", format: "AL MEJOR DE 1", team1: { name: "Mango Boys", shortName: "MANGO B." }, team2: { name: "TaiLung Mafia", shortName: "TAILUNG M." }, winner: "Mango Boys" },
      { time: "20:00", format: "AL MEJOR DE 1", team1: { name: "Capibarbas", shortName: "CAPIBARBAS" }, team2: { name: "The Blacklist", shortName: "T. BLACKLIST" }, winner: "The Blacklist" },
    ]
  },
  {
    date: "1",
    label: "1 DE MAYO (PLAYOFFS)",
    matches: [
      { time: "10:00", format: "AL MEJOR DE 3", team1: { name: "The Bot$", shortName: "THE BOT$" }, team2: { name: "WK Bear and Bones", shortName: "WK BEAR AND B." }, winner: "The Bot$" },
      { time: "13:00", format: "AL MEJOR DE 3", team1: { name: "Team Peyitaz", shortName: "T. PEYITAS" }, team2: { name: "Gotto House", shortName: "GOTTO H." }, winner: "Gotto House" },
      { time: "16:00", format: "AL MEJOR DE 3", team1: { name: "WK Bear and Bones", shortName: "WK BEAR AND B." }, team2: { name: "The Monsters", shortName: "T. MONSTERS" }, winner: "WK Bear and Bones" },
      { time: "19:00", format: "AL MEJOR DE 3", team1: { name: "The Blacklist", shortName: "T. BLACKLIST" }, team2: { name: "Team Peyitaz", shortName: "T. PEYITAS" }, winner: "The Blacklist" },
    ]
  },
  {
    date: "2",
    label: "2 DE MAYO (PLAYOFFS)",
    matches: [
      { time: "14:00", format: "AL MEJOR DE 3", team1: { name: "The Bot$", shortName: "THE BOT$" }, team2: { name: "Gotto House", shortName: "GOTTO H." } },
      { time: "18:00", format: "AL MEJOR DE 3", team1: { name: "WK Bear and Bones", shortName: "WK BEAR AND B." }, team2: { name: "The Blacklist", shortName: "T. BLACKLIST" } },
    ]
  },
  {
    date: "3",
    label: "3 DE MAYO (FINAL)",
    matches: [
      { time: "12:00", format: "AL MEJOR DE 3", team1: { name: "TBD", shortName: "LOWER FINAL" }, team2: { name: "TBD", shortName: "LOWER FINAL" } },
      { time: "16:00", format: "AL MEJOR DE 5", team1: { name: "TBD", shortName: "GRAN FINAL" }, team2: { name: "TBD", shortName: "GRAN FINAL" } },
    ]
  }
];

function MatchCard({ match }: { match: Match }) {
  const t1 = teams.find(t => t.name === match.team1.name);
  const t2 = teams.find(t => t.name === match.team2.name);
  const isFinished = !!match.winner;
  const team1Won = match.winner === match.team1.name;
  const team2Won = match.winner === match.team2.name;

  return (
    <div className={`flex w-full max-w-[800px] items-center justify-between border bg-gray-50 dark:bg-black/60 p-1 md:p-3 shadow-lg my-2 mx-auto ${
      isFinished ? "border-gray-300 dark:border-gray-700" : "border-[#B8860B] dark:border-[#D4AF37]"
    }`}>
      {/* Equipo 1 */}
      <div className="flex w-1/3 flex-col-reverse md:flex-row items-center justify-end gap-2 md:gap-4">
        <div className="flex flex-col items-center md:items-end">
          <span className={`text-[10px] md:text-sm font-bold uppercase tracking-wider mb-1 md:mb-2 text-center md:text-right ${
            team1Won ? "text-[#53FC18]" : isFinished ? "text-gray-400 dark:text-gray-500" : "text-gray-900 dark:text-white"
          }`}>{match.team1.shortName}</span>
          <div className="bg-[#E5D5B5] px-4 md:px-6 py-1 rounded shadow-inner border border-[#B8860B] dark:border-[#D4AF37]/50">
            <span className="font-serif text-lg md:text-2xl font-black text-black">{match.team1.odd || (isFinished ? (team1Won ? "W" : "L") : "-")}</span>
          </div>
        </div>
        <div className={`relative h-16 w-16 md:h-24 md:w-24 shrink-0 bg-white dark:bg-[#0B0B0B] border ${
          team1Won ? "border-[#53FC18] shadow-[0_0_10px_rgba(83,252,24,0.3)]" : "border-[#B8860B]/50 dark:border-[#D4AF37]/30"
        }`}>
          {t1 && <Image src={`/logos/${t1.logo}`} alt={t1.name} fill className="object-contain p-1" sizes="96px" />}
        </div>
      </div>

      {/* Centro: Hora y Formato */}
      <div className="flex flex-col items-center justify-center border-x border-[#B8860B]/50 dark:border-[#D4AF37]/50 px-2 md:px-6 w-1/4 h-full">
        <span className="font-serif text-2xl md:text-5xl font-black text-gray-900 dark:text-white">{match.time}</span>
        <span className="text-[8px] md:text-xs font-bold text-gray-500 dark:text-gray-400 uppercase tracking-widest mt-1 text-center whitespace-nowrap">
          {isFinished ? "FINALIZADO" : match.format}
        </span>
      </div>

      {/* Equipo 2 */}
      <div className="flex w-1/3 flex-col md:flex-row items-center justify-start gap-2 md:gap-4">
        <div className={`relative h-16 w-16 md:h-24 md:w-24 shrink-0 bg-white dark:bg-[#0B0B0B] border ${
          team2Won ? "border-[#53FC18] shadow-[0_0_10px_rgba(83,252,24,0.3)]" : "border-[#B8860B]/50 dark:border-[#D4AF37]/30"
        }`}>
          {t2 && <Image src={`/logos/${t2.logo}`} alt={t2.name} fill className="object-contain p-1" sizes="96px" />}
        </div>
        <div className="flex flex-col items-center md:items-start">
          <span className={`text-[10px] md:text-sm font-bold uppercase tracking-wider mb-1 md:mb-2 text-center md:text-left ${
            team2Won ? "text-[#53FC18]" : isFinished ? "text-gray-400 dark:text-gray-500" : "text-gray-900 dark:text-white"
          }`}>{match.team2.shortName}</span>
          <div className="bg-[#E5D5B5] px-4 md:px-6 py-1 rounded shadow-inner border border-[#B8860B] dark:border-[#D4AF37]/50">
            <span className="font-serif text-lg md:text-2xl font-black text-black">{match.team2.odd || (isFinished ? (team2Won ? "W" : "L") : "-")}</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function HorarioPage() {
  const [activeDay, setActiveDay] = useState("2");

  const currentSchedule = fullSchedule.find(d => d.date === activeDay);

  return (
    <div className="min-h-screen bg-white dark:bg-[#0B0B0B] relative py-12 transition-colors duration-300">
      {/* Background Stripes — solo dark mode */}
      <div
        className="absolute inset-0 z-0 opacity-10 pointer-events-none hidden dark:block"
        style={{
          backgroundImage: 'repeating-linear-gradient(45deg, #000 0, #000 20px, #D4AF37 20px, #D4AF37 40px)'
        }}
      />

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

        {/* Header Title */}
        <div className="mb-12 text-center flex flex-col items-center">
          <span className="text-gray-600 dark:text-gray-300 tracking-[0.2em] text-sm uppercase mb-2">FASE DE GRUPOS & PLAYOFFS</span>
          <h1 className="font-serif text-6xl md:text-8xl font-extrabold uppercase tracking-widest text-gray-900 dark:text-white mb-6 drop-shadow-[0_0_15px_rgba(255,255,255,0.1)]">
            HORARIO
          </h1>
          <div className="bg-[#E5D5B5] px-8 py-2 rounded shadow-xl border border-[#B8860B] dark:border-[#D4AF37]/50 rotate-[-1deg]">
            <h2 className="text-black font-serif font-black text-2xl uppercase">{currentSchedule?.label}</h2>
          </div>
        </div>

        {/* Tabs */}
        <div className="flex flex-wrap justify-center gap-2 mb-10">
          {fullSchedule.map(day => (
            <button
              key={day.date}
              onClick={() => setActiveDay(day.date)}
              className={`px-4 py-3 min-h-[48px] font-bold uppercase tracking-widest transition-all text-sm border ${
                activeDay === day.date
                  ? "bg-[#D4AF37] text-black border-[#B8860B] dark:border-[#D4AF37]"
                  : "bg-gray-100 dark:bg-black/50 text-gray-500 dark:text-gray-400 border-gray-300 dark:border-gray-800 hover:border-[#B8860B] dark:hover:border-[#D4AF37]/50 hover:text-gray-900 dark:hover:text-white"
              }`}
            >
              {day.date} ABR/MAY
            </button>
          ))}
        </div>

        {/* Matches */}
        <div className="flex flex-col gap-2 md:gap-4 mb-20">
          {currentSchedule?.matches.map((match, idx) => (
            <MatchCard key={idx} match={match} />
          ))}
        </div>

        {/* Footer Banner */}
        <div className="mt-16 border-t border-[#B8860B]/30 dark:border-[#D4AF37]/30 pt-8 flex flex-col md:flex-row items-center justify-center gap-6 md:gap-12">
          <div className="text-[#B8860B] dark:text-[#D4AF37] font-serif text-2xl font-bold uppercase tracking-widest flex items-center gap-4">
            <div className="h-12 w-12 border border-[#B8860B] dark:border-[#D4AF37] rounded flex items-center justify-center">🦅</div>
            <div className="flex flex-col leading-none">
              <span className="text-sm">EL GRAN</span>
              <span className="text-xl">COLISEO</span>
              <span className="text-[10px] text-gray-600 dark:text-gray-400">DE BENJAZ</span>
            </div>
          </div>

          <div className="h-12 w-px bg-[#D4AF37]/30 hidden md:block" />

          <div className="text-[#0066FF] font-black text-4xl italic">1XBET</div>
        </div>
        <div className="text-center mt-6 text-gray-500 text-xs tracking-widest uppercase font-bold">
          +18 Juega con responsabilidad
        </div>

      </div>
    </div>
  );
}
