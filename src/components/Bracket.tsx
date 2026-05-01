import { teams } from "@/data/teams";
import Image from "next/image";

type BracketMatch = {
  stage: string;
  bo: number;
  team1: string;
  team2: string;
};

const upperSF: BracketMatch[] = [
  { stage: "Upper Bracket SF", bo: 3, team1: "The Bot$", team2: "WK Bear and Bones" },
  { stage: "Upper Bracket SF", bo: 3, team1: "Team Peyitaz", team2: "Los Bemboyz" },
];

const lowerSF: BracketMatch[] = [
  { stage: "Lower Bracket SF", bo: 3, team1: "The Monsters", team2: "The Blacklist" },
];

const upperFinal: BracketMatch[] = [
  { stage: "Upper Bracket Final", bo: 3, team1: "TBD", team2: "TBD" },
];

const lowerFinal: BracketMatch[] = [
  { stage: "Lower Bracket Final", bo: 3, team1: "TBD", team2: "TBD" },
];

const grandFinal: BracketMatch[] = [
  { stage: "Grand Final", bo: 5, team1: "TBD", team2: "TBD" },
];

function TeamRow({ name }: { name: string }) {
  const teamData = teams.find(t => t.name === name);
  return (
    <div className="flex items-center gap-2">
      {teamData ? (
        <Image src={`/logos/${teamData.logo}`} alt={name} width={24} height={24} className="object-contain" />
      ) : (
        <div className="w-6 h-6 bg-gray-100 dark:bg-[#0A0A0A] border border-[#B8860B]/50 dark:border-[#D4AF37]/30 rounded-full" />
      )}
      <span className="font-semibold text-gray-900 dark:text-white text-sm">{name}</span>
    </div>
  );
}

function MatchCard({ match }: { match: BracketMatch }) {
  return (
    <div className="border border-[#B8860B] dark:border-[#D4AF37]/50 bg-white dark:bg-[#191B1F] p-4 min-w-[240px] transition-colors hover:border-[#B8860B] dark:hover:border-[#D4AF37] shadow-[0_0_15px_rgba(212,175,55,0.1)]">
      <div className="text-xs text-[#0066FF] dark:text-[#53FC18] font-bold uppercase tracking-widest mb-3 border-b border-gray-200 dark:border-[#D4AF37]/20 pb-2">
        {match.stage} - BO{match.bo}
      </div>
      <div className="flex justify-between items-center mb-3">
        <TeamRow name={match.team1} />
      </div>
      <div className="flex justify-between items-center">
        <TeamRow name={match.team2} />
      </div>
    </div>
  );
}

export function Bracket() {
  return (
    <div className="w-full overflow-x-auto py-8 hide-scrollbar">
      <div className="min-w-[900px] flex gap-16 mt-8">
        {/* Upper Bracket */}
        <div className="flex flex-col gap-12 justify-around">
          {upperSF.map((m, i) => <MatchCard key={`usf-${i}`} match={m} />)}
        </div>
        <div className="flex flex-col gap-12 justify-around">
          {upperFinal.map((m, i) => <MatchCard key={`uf-${i}`} match={m} />)}
        </div>
        <div className="flex flex-col gap-12 justify-around">
          {grandFinal.map((m, i) => <MatchCard key={`gf-${i}`} match={m} />)}
        </div>
      </div>

      <div className="min-w-[900px] flex gap-16 mt-16">
        {/* Lower Bracket */}
        <div className="flex flex-col gap-12 justify-around">
          {lowerSF.map((m, i) => <MatchCard key={`lsf-${i}`} match={m} />)}
        </div>
        <div className="flex flex-col gap-12 justify-around">
          {lowerFinal.map((m, i) => <MatchCard key={`lf-${i}`} match={m} />)}
        </div>
      </div>
    </div>
  );
}
