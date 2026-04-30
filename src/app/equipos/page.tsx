"use client";

import Image from "next/image";
import { useState } from "react";
import { teams } from "@/data/teams";
import { rosters } from "@/data/rosters";

import Link from "next/link";

function TeamCard({ team }: { team: typeof teams[0] }) {
  const teamRoster = rosters[team.id as keyof typeof rosters];
  const [flipped, setFlipped] = useState(false);

  return (
    <div 
      className="group h-[320px] [perspective:1000px] cursor-pointer"
      onClick={() => setFlipped(!flipped)}
      onMouseEnter={() => setFlipped(true)}
      onMouseLeave={() => setFlipped(false)}
    >
      <div 
        className={`relative h-full w-full transition-transform duration-700 [transform-style:preserve-3d] ${flipped ? '[transform:rotateY(180deg)]' : ''}`}
      >
        {/* FRENTE */}
        <div className="absolute inset-0 [backface-visibility:hidden] bg-gray-100 dark:bg-[#111] rounded-xl border border-[#B8860B] dark:border-[#D4AF37]/30 flex flex-col items-center justify-center p-6 shadow-lg">
          <Image src={`/logos/${team.logo}`} width={140} height={140} alt={team.name} className="drop-shadow-md" />
          <h3 className="mt-6 text-xl font-bold text-[#B8860B] dark:text-[#D4AF37] uppercase text-center">{team.name}</h3>
          <p className="mt-2 text-sm text-gray-600 dark:text-gray-400 font-bold uppercase tracking-widest">Grupo {team.group}</p>
        </div>
        
        {/* ATRÁS */}
        <div className="absolute inset-0 [backface-visibility:hidden] [transform:rotateY(180deg)] bg-white dark:bg-[#0A0A0A] rounded-xl border-2 border-[#B8860B] dark:border-[#D4AF37] p-6 flex flex-col shadow-[0_0_15px_rgba(212,175,55,0.4)]">
          <h3 className="text-lg font-bold text-[#B8860B] dark:text-[#D4AF37] mb-4 uppercase text-center border-b border-[#B8860B] dark:border-[#D4AF37]/30 pb-2">{team.name}</h3>
          <ul className="space-y-2 text-sm flex-1 overflow-y-auto">
            {teamRoster?.players.map((p, i) => (
              <li key={i} className="flex justify-between items-center border-b border-gray-300 dark:border-gray-800 pb-1 hover:bg-[#D4AF37]/10 transition-colors">
                <span className="text-gray-500 font-bold text-xs">{i + 1}.</span>
                <Link href={`/jugador/${encodeURIComponent(p)}`} className="text-[#0066FF] hover:text-[#53FC18] font-medium tracking-wide transition-colors">
                  {p}
                </Link>
              </li>
            ))}
          </ul>
          <div className="mt-4 pt-3 border-t border-[#B8860B] dark:border-[#D4AF37]/30 text-center text-xs font-bold uppercase tracking-widest text-[#B8860B] dark:text-[#D4AF37]/70">
            El Gran Coliseo
          </div>
        </div>
      </div>
    </div>
  );
}

export default function EquiposPage() {
  return (
    <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
      <div className="mb-12 text-center">
        <h1 className="font-serif text-4xl font-extrabold uppercase tracking-widest text-[#B8860B] dark:text-[#D4AF37] md:text-5xl">
          Los Gladiadores
        </h1>
        <p className="mt-4 text-gray-600 dark:text-gray-400">Los 12 equipos que lucharán por la gloria en el coliseo.</p>
      </div>

      <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {teams.map((team) => (
          <TeamCard key={team.id} team={team} />
        ))}
      </div>
    </div>
  );
}
