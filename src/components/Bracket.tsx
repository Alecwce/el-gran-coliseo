import { schedule } from "@/data/schedule";

export function Bracket() {
  const upperSF = schedule.filter(m => m.stage === "Upper Bracket SF");
  const upperFinal = schedule.filter(m => m.stage === "Upper Bracket Final");
  const lowerSF = schedule.filter(m => m.stage === "Lower Bracket SF");
  const lowerFinal = schedule.filter(m => m.stage === "Lower Bracket Final");
  const grandFinal = schedule.filter(m => m.stage === "Grand Final");

  const MatchCard = ({ match }: { match: any }) => (
    <div className="border border-[#D4AF37]/50 bg-[#191B1F] p-4 min-w-[220px] transition-colors hover:border-[#D4AF37]">
      <div className="text-xs text-[#0066FF] font-bold uppercase tracking-widest mb-3">{match.stage} - BO{match.bo}</div>
      <div className="flex justify-between items-center mb-2">
        <span className="font-semibold text-white">{match.team1 || match.teamA || "TBD"}</span>
      </div>
      <div className="flex justify-between items-center">
        <span className="font-semibold text-white">{match.team2 || match.teamB || "TBD"}</span>
      </div>
    </div>
  );

  return (
    <div className="w-full overflow-x-auto py-8 hide-scrollbar">
      <div className="min-w-[800px] flex gap-12 mt-8">
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
      
      <div className="min-w-[800px] flex gap-12 mt-16">
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
