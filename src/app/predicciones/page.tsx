"use client";

import { useState, useEffect } from "react";
import { teams } from "@/data/teams";

export default function PrediccionesPage() {
  const [selectedTeam, setSelectedTeam] = useState("");
  const [voted, setVoted] = useState(false);
  const [votesCount, setVotesCount] = useState(0);

  useEffect(() => {
    const saved = localStorage.getItem("predictedTeam");
    if (saved) {
      setSelectedTeam(saved);
      setVoted(true);
    }
    const baseVotes = 1337;
    setVotesCount(saved ? baseVotes + 1 : baseVotes);
  }, []);

  const handleVote = () => {
    if (!selectedTeam) return;
    localStorage.setItem("predictedTeam", selectedTeam);
    setVoted(true);
    setVotesCount(prev => prev + 1);
  };

  return (
    <div className="mx-auto max-w-4xl px-4 py-16 sm:px-6 lg:px-8">
      <div className="mb-12 text-center">
        <h1 className="font-serif text-4xl font-extrabold uppercase tracking-widest text-[#D4AF37] md:text-5xl">
          Predicciones
        </h1>
        <p className="mt-4 text-gray-400 text-lg">¿Quién se coronará campeón del Gran Coliseo?</p>
      </div>

      <div className="border border-[#D4AF37] bg-white dark:bg-[#191B1F] p-8 text-center max-w-2xl mx-auto shadow-[0_0_20px_rgba(212,175,55,0.1)]">
        {voted ? (
          <div className="py-8">
            <h2 className="text-2xl font-bold text-black dark:text-white mb-4 uppercase">¡Tu voto ha sido registrado!</h2>
            <p className="text-[#0066FF] dark:text-[#53FC18] font-bold text-xl mb-8 tracking-widest">Apostaste por: {selectedTeam}</p>
            <div className="inline-block bg-gray-100 dark:bg-[#0A0A0A] border border-[#D4AF37]/50 px-6 py-4">
              <span className="block text-sm text-gray-500 uppercase tracking-wider mb-2">Gladiadores que han votado</span>
              <span className="text-4xl font-serif text-[#D4AF37] font-bold">{votesCount.toLocaleString()}</span>
            </div>
          </div>
        ) : (
          <div className="flex flex-col gap-6">
            <label htmlFor="team-select" className="text-left font-bold text-black dark:text-white uppercase tracking-widest text-sm">
              Selecciona tu equipo ganador:
            </label>
            <select
              id="team-select"
              value={selectedTeam}
              onChange={(e) => setSelectedTeam(e.target.value)}
              className="w-full bg-gray-50 dark:bg-[#0A0A0A] border-2 border-[#D4AF37]/50 p-4 text-black dark:text-white focus:border-[#D4AF37] focus:outline-none transition-colors"
            >
              <option value="" disabled>-- Elige un equipo --</option>
              {teams.map(t => (
                <option key={t.id} value={t.name}>{t.name}</option>
              ))}
            </select>
            <button
              onClick={handleVote}
              disabled={!selectedTeam}
              className="mt-4 w-full bg-[#D4AF37] text-black font-bold uppercase tracking-widest py-4 hover:bg-[#b5952f] disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
            >
              Confirmar Predicción
            </button>
            <div className="mt-4 text-sm text-gray-500 uppercase tracking-widest">
              Votos actuales: {votesCount.toLocaleString()}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
