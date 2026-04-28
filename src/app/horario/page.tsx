import { schedule } from "@/data/schedule";

export default function HorarioPage() {
  // Agrupar los partidos por fecha
  const groupedSchedule = schedule.reduce((acc, match) => {
    if (!acc[match.date]) {
      acc[match.date] = [];
    }
    acc[match.date].push(match);
    return acc;
  }, {} as Record<string, typeof schedule>);

  const dates = Object.keys(groupedSchedule).sort();

  return (
    <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
      <div className="mb-12 text-center">
        <h1 className="font-serif text-4xl font-extrabold uppercase tracking-widest text-[#D4AF37] md:text-5xl">
          Horario Oficial
        </h1>
        <p className="mt-4 text-gray-400">Todos los encuentros del torneo. Las horas están en zona horaria de Lima (PET).</p>
      </div>

      <div className="flex flex-col gap-12">
        {dates.map((date) => (
          <div key={date} className="flex flex-col gap-4">
            <div className="flex items-center gap-4">
              <h2 className="bg-[#D4AF37] px-4 py-2 font-serif text-xl font-bold uppercase text-[#0A0A0A]">
                {date}
              </h2>
              <div className="h-px flex-1 bg-[#D4AF37]/30" />
            </div>

            <div className="overflow-x-auto border border-[#D4AF37]">
              <table className="w-full text-left text-sm">
                <thead className="bg-[#0066FF] text-white">
                  <tr>
                    <th className="px-4 py-3 font-bold uppercase tracking-wider border-b border-r border-[#D4AF37]/50 w-24">Hora</th>
                    <th className="px-4 py-3 font-bold uppercase tracking-wider border-b border-r border-[#D4AF37]/50 w-1/3">Equipo 1</th>
                    <th className="px-4 py-3 font-bold uppercase tracking-wider border-b border-r border-[#D4AF37]/50 w-1/3">Equipo 2</th>
                    <th className="px-4 py-3 font-bold uppercase tracking-wider border-b border-[#D4AF37]/50">Fase</th>
                  </tr>
                </thead>
                <tbody className="bg-[#191B1F]">
                  {groupedSchedule[date].map((match, idx) => (
                    <tr key={idx} className="border-b border-[#D4AF37]/30 last:border-0 hover:bg-[#201f1f]">
                      <td className="px-4 py-4 font-bold text-[#D4AF37] border-r border-[#D4AF37]/30">{match.time}</td>
                      <td className="px-4 py-4 font-semibold text-white border-r border-[#D4AF37]/30">{match.team1}</td>
                      <td className="px-4 py-4 font-semibold text-white border-r border-[#D4AF37]/30">{match.team2}</td>
                      <td className="px-4 py-4 text-gray-300">{match.stage} <span className="text-xs text-[#D4AF37]">BO{match.bo}</span></td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
