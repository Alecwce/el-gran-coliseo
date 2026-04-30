import { schedule } from "@/data/schedule";
import { teams } from "@/data/teams";
import Image from "next/image";

export function Bracket() {
  const upperSF = schedule.filter(m => m.stage === "Upper Bracket SF");
  
  // Reemplazando TBD por los clasificados
  const realUpperSF = [
    { ...upperSF[0], team1: "The Bot$", team2: "WK Bear and Bones" },
    { ...upperSF[1], team1: "Team Peyitaz", team2: "Los Bemboyz" }
  ];
  
  const upperFinal = schedule.filter(m => m.stage === "Upper Bracket Final");
  const lowerSF = schedule.filter(m => m.stage === "Lower Bracket SF");
  const lowerFinal = schedule.filter(m => m.stage === "Lower Bracket Final");
  const grandFinal = schedule.filter(m => m.stage === "Grand Final");

  const TeamRow = ({ name }: { name: string }) => {
    const teamData = teams.find(t => t.name === name);
    return (
      <div className="flex items-center gap-2">
        {teamData ? (
          <Image src={`/logos/${teamData.logo}`} alt={name} width={24} height={24} className="object-contain" />
        ) : (
          <div className="w-6 h-6 bg-[#0A0A0A] border border-[#D4AF37]/30 rounded-full" />
        )}
        <span className="font-semibold text-white text-sm">{name}</span>
      </div>
    );
  };

  const MatchCard = ({ match }: { match: any }) => (
    <div className="border border-[#D4AF37]/50 bg-[#191B1F] p-4 min-w-[240px] transition-colors hover:border-[#D4AF37] shadow-[0_0_15px_rgba(212,175,55,0.1)]">
      <div className="text-xs text-[#53FC18] font-bold uppercase tracking-widest mb-3 border-b border-[#D4AF37]/20 pb-2">{match.stage} - BO{match.bo}</div>
      <div className="flex justify-between items-center mb-3">
        <TeamRow name={match.team1 || match.teamA || "TBD"} />
      </div>
      <div className="flex justify-between items-center">
        <TeamRow name={match.team2 || match.teamB || "TBD"} />
      </div>
    </div>
  );

  return (
    <div className="w-full overflow-x-auto py-8 hide-scrollbar">
      <div className="min-w-[900px] flex gap-16 mt-8">
        {/* Upper Bracket */}
        <div className="flex flex-col gap-12 justify-around">
          {realUpperSF.map((m, i) => <MatchCard key={`usf-${i}`} match={m} />)}
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
