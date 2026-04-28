import Image from "next/image";
import { teams } from "@/data/teams";

export default function EquiposPage() {
  return (
    <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
      <div className="mb-12 text-center">
        <h1 className="font-serif text-4xl font-extrabold uppercase tracking-widest text-[#D4AF37] md:text-5xl">
          Los Gladiadores
        </h1>
        <p className="mt-4 text-gray-400">Los 12 equipos que lucharán por la gloria en el coliseo.</p>
      </div>

      <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {teams.map((team) => (
          <div
            key={team.id}
            className="group flex flex-col border border-[#D4AF37]/50 bg-[#191B1F] transition-all duration-300 hover:scale-105 hover:border-[#D4AF37] hover:shadow-[0_0_25px_rgba(212,175,55,0.6)]"
          >
            {/* Logo real usando el ID */}
            <div className="flex aspect-square items-center justify-center bg-[#0A0A0A] p-6">
              <Image
                src={`/logos/${team.id}.webp`}
                alt={`Logo de ${team.name}`}
                width={300}
                height={300}
                priority
                className="h-full w-full object-contain drop-shadow-md"
              />
            </div>
            
            {/* Info */}
            <div className="flex flex-col border-t border-[#D4AF37]/50 p-4 text-center transition-colors duration-300 group-hover:border-[#D4AF37]">
              <span className="mb-1 text-xs font-bold uppercase tracking-widest text-[#0066FF]">
                Grupo {team.group}
              </span>
              <h2 className="font-sans text-lg font-bold text-white uppercase">{team.name}</h2>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
