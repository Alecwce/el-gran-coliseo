import { teams } from "@/data/teams";
import Image from "next/image";

type BracketMatch = {
  stage: string;
  stageLabel: string;
  bo: number;
  team1: string;
  team2: string;
};

const upperSF: BracketMatch[] = [
  { stage: "Upper Bracket SF", stageLabel: "UPPER SF 1", bo: 3, team1: "The Bot$", team2: "WK Bear and Bones" },
  { stage: "Upper Bracket SF", stageLabel: "UPPER SF 2", bo: 3, team1: "Team Peyitaz", team2: "Gotto House" },
];

const lowerQF: BracketMatch[] = [
  { stage: "Lower Bracket QF", stageLabel: "LOWER QF 1", bo: 3, team1: "TBD", team2: "The Monsters" },
  { stage: "Lower Bracket QF", stageLabel: "LOWER QF 2", bo: 3, team1: "TBD", team2: "The Blacklist" },
];

const upperFinal: BracketMatch[] = [
  { stage: "Upper Bracket Final", stageLabel: "UPPER FINAL", bo: 3, team1: "TBD", team2: "TBD" },
];

const lowerFinal: BracketMatch[] = [
  { stage: "Lower Bracket Final", stageLabel: "LOWER FINAL", bo: 3, team1: "TBD", team2: "TBD" },
];

const grandFinal: BracketMatch[] = [
  { stage: "Grand Final", stageLabel: "GRAN FINAL", bo: 5, team1: "TBD", team2: "TBD" },
];

function TeamRow({ name }: { name: string }) {
  const teamData = teams.find(t => t.name === name);
  const isTBD = name === "TBD";

  return (
    <div className="flex items-center gap-2.5 py-1.5">
      {teamData ? (
        <div className="relative w-7 h-7 shrink-0 bg-white dark:bg-[#111] border border-[#B8860B]/40 dark:border-[#D4AF37]/30 rounded">
          <Image src={`/logos/${teamData.logo}`} alt={name} width={28} height={28} className="object-contain p-0.5" />
        </div>
      ) : (
        <div className="w-7 h-7 shrink-0 bg-gray-100 dark:bg-[#111] border border-gray-300 dark:border-gray-700 rounded flex items-center justify-center">
          <span className="text-gray-400 text-[10px]">?</span>
        </div>
      )}
      <span className={`font-bold text-sm uppercase tracking-wide ${
        isTBD
          ? "text-gray-400 dark:text-gray-500 italic"
          : "text-[#B8860B] dark:text-[#D4AF37]"
      }`}>
        {isTBD ? "Por definir" : name}
      </span>
    </div>
  );
}

function MatchCard({ match }: { match: BracketMatch }) {
  return (
    <div className="border border-[#B8860B] dark:border-[#D4AF37]/50 bg-white dark:bg-[#0B0B0B]/80 min-w-[240px] shadow-lg dark:shadow-[0_0_15px_rgba(212,175,55,0.08)] transition-all hover:border-[#D4AF37] hover:shadow-[0_0_20px_rgba(212,175,55,0.2)]">
      {/* Stage header */}
      <div className="flex items-center justify-between px-4 py-2 bg-[#E5D5B5]/30 dark:bg-[#D4AF37]/5 border-b border-[#B8860B]/30 dark:border-[#D4AF37]/20">
        <span className="text-[10px] text-[#0066FF] dark:text-[#53FC18] font-bold uppercase tracking-widest">{match.stageLabel}</span>
        <span className="text-[10px] text-gray-500 dark:text-gray-400 font-bold">BO{match.bo}</span>
      </div>
      {/* Teams */}
      <div className="px-4 py-2">
        <TeamRow name={match.team1} />
        <div className="border-t border-gray-200 dark:border-gray-800 my-1" />
        <TeamRow name={match.team2} />
      </div>
    </div>
  );
}

export function Bracket() {
  return (
    <div className="relative w-full py-8">
      {/* Rayas diagonales doradas — solo dark mode */}
      <div
        className="absolute inset-0 z-0 opacity-5 pointer-events-none hidden dark:block rounded-lg"
        style={{
          backgroundImage: 'repeating-linear-gradient(45deg, #000 0, #000 20px, #D4AF37 20px, #D4AF37 40px)'
        }}
      />

      <div className="relative z-10 overflow-x-auto hide-scrollbar">
        {/* Sección labels */}
        <div className="min-w-[1100px] flex gap-12 mb-4 px-2">
          <div className="min-w-[240px] text-center">
            <span className="text-xs font-bold text-gray-500 dark:text-gray-400 uppercase tracking-widest">Semifinales</span>
          </div>
          <div className="min-w-[240px] text-center">
            <span className="text-xs font-bold text-gray-500 dark:text-gray-400 uppercase tracking-widest">Final Upper</span>
          </div>
          <div className="min-w-[240px] text-center">
            <span className="text-xs font-bold text-[#B8860B] dark:text-[#D4AF37] uppercase tracking-widest">Gran Final</span>
          </div>
        </div>

        {/* Upper Bracket */}
        <div className="min-w-[1100px] flex gap-12">
          <div className="flex flex-col gap-8 justify-around">
            {upperSF.map((m, i) => <MatchCard key={`usf-${i}`} match={m} />)}
          </div>
          <div className="flex flex-col gap-8 justify-around">
            {upperFinal.map((m, i) => <MatchCard key={`uf-${i}`} match={m} />)}
          </div>
          <div className="flex flex-col gap-8 justify-around">
            {grandFinal.map((m, i) => <MatchCard key={`gf-${i}`} match={m} />)}
          </div>
        </div>

        {/* Lower Bracket */}
        <div className="min-w-[1100px] flex gap-12 mt-12">
          <div className="flex flex-col gap-8 justify-around">
            {lowerQF.map((m, i) => <MatchCard key={`lqf-${i}`} match={m} />)}
          </div>
          <div className="flex flex-col gap-8 justify-around">
            {lowerFinal.map((m, i) => <MatchCard key={`lf-${i}`} match={m} />)}
          </div>
        </div>
      </div>
    </div>
  );
}
