import Image from "next/image";
import { standings } from "@/data/standings";
import { teams } from "@/data/teams";

function StandingsTable({ title, data }: { title: string, data: typeof standings.A }) {
  return (
    <div className="border border-[#B8860B] dark:border-[#D4AF37]/50 bg-white dark:bg-[#191B1F] p-6 shadow-xl transition-colors duration-300">
      <h2 className="mb-6 font-serif text-2xl font-bold uppercase text-[#B8860B] dark:text-[#D4AF37] border-b border-[#B8860B] dark:border-[#D4AF37]/30 pb-2">{title}</h2>
      <div className="overflow-x-auto">
        <table className="w-full text-left text-sm whitespace-nowrap">
          <thead className="text-gray-600 dark:text-gray-400 border-b border-gray-300 dark:border-gray-800">
            <tr>
              <th className="py-3 px-4 font-bold uppercase tracking-wider w-16">Pos</th>
              <th className="py-3 px-4 font-bold uppercase tracking-wider">Equipo</th>
              <th className="py-3 px-4 font-bold uppercase tracking-wider text-center w-24">W-L</th>
              <th className="py-3 px-4 font-bold uppercase tracking-wider w-48 hidden sm:table-cell">Win Rate</th>
            </tr>
          </thead>
          <tbody>
            {data.map((row, idx) => {
              const totalGames = row.wins + row.losses;
              const winRate = totalGames > 0 ? (row.wins / totalGames) * 100 : 0;
              const teamData = teams.find(t => t.name === row.team);
              const logo = teamData?.logo || "placeholder-team.png";
              const isUnbeaten = row.wins === 4 && row.losses === 0;

              return (
                <tr key={row.team} className={`border-b border-gray-300 dark:border-gray-800/50 hover:bg-gray-50 dark:hover:bg-[#201f1f] transition-colors ${isUnbeaten ? 'bg-[#53FC18]/5 dark:bg-[#53FC18]/5' : ''}`}>
                  <td className="py-4 px-4 font-bold text-black dark:text-gray-300">
                    <span className={`flex items-center justify-center h-8 w-8 rounded-full border ${isUnbeaten ? 'border-[#0066FF] text-[#0066FF] dark:border-[#53FC18] dark:text-[#53FC18]' : 'border-gray-300 dark:border-gray-700'}`}>
                      {idx + 1}
                    </span>
                  </td>
                  <td className="py-4 px-4">
                    <div className="flex items-center gap-3">
                      <div className="relative h-10 w-10 flex-shrink-0 bg-gray-100 dark:bg-[#0A0A0A] border border-[#B8860B] dark:border-[#D4AF37]/30 rounded p-1">
                        <Image src={`/logos/${logo}`} alt={row.team} fill className="object-contain p-1 drop-shadow-sm" />
                      </div>
                      <span className={`font-bold uppercase tracking-wide ${isUnbeaten ? 'text-[#0066FF] dark:text-[#53FC18]' : 'text-gray-900 dark:text-white'}`}>
                        {row.team}
                      </span>
                    </div>
                  </td>
                  <td className="py-4 px-4 text-center font-mono font-bold text-lg">
                    <span className="text-[#0066FF] dark:text-[#53FC18]">{row.wins}</span>
                    <span className="text-gray-600 dark:text-gray-500 mx-1">-</span>
                    <span className="text-red-500">{row.losses}</span>
                  </td>
                  <td className="py-4 px-4 hidden sm:table-cell">
                    <div className="flex items-center gap-3">
                      <div className="h-2 w-full bg-gray-200 dark:bg-gray-800 rounded-full overflow-hidden">
                        <div 
                          className={`h-full rounded-full transition-all duration-1000 ${isUnbeaten ? 'bg-[#0066FF] dark:bg-[#53FC18]' : 'bg-[#D4AF37]'}`} 
                          style={{ width: `${winRate}%` }} 
                        />
                      </div>
                      <span className="text-xs font-bold text-gray-600 dark:text-gray-400 w-10 text-right">{Math.round(winRate)}%</span>
                    </div>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default function PosicionesPage() {
  return (
    <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
      <div className="mb-12 text-center">
        <h1 className="font-serif text-4xl font-extrabold uppercase tracking-widest text-[#B8860B] dark:text-[#D4AF37] md:text-5xl">
          Tabla de Posiciones
        </h1>
        <p className="mt-4 text-gray-600 dark:text-gray-400 text-lg">Clasificación en tiempo real de los Gladiadores rumbo a los Playoffs.</p>
      </div>

      <div className="grid gap-8 xl:grid-cols-2">
        <StandingsTable title="Grupo A" data={standings.A} />
        <StandingsTable title="Grupo B" data={standings.B} />
      </div>
    </div>
  );
}
