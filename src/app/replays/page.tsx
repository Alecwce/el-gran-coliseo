import { replays } from "@/data/replays";

export default function ReplaysPage() {
  return (
    <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
      <div className="mb-12 text-center">
        <h1 className="font-serif text-4xl font-extrabold uppercase tracking-widest text-[#D4AF37] md:text-5xl">
          VODs y Repeticiones
        </h1>
        <p className="mt-4 text-gray-400 text-lg">Revive los mejores momentos del Coliseo.</p>
      </div>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-2">
        {replays.map((replay) => (
          <div
            key={replay.id}
            className="flex flex-col border border-[#D4AF37] bg-white dark:bg-[#191B1F] p-6 transition-all hover:shadow-[0_0_15px_rgba(212,175,55,0.3)]"
          >
            <div className="mb-4 flex items-start justify-between">
              <div>
                <h2 className="mb-1 font-serif text-2xl font-bold text-black dark:text-white uppercase">{replay.title}</h2>
                <span className="text-sm tracking-widest text-[#0066FF] dark:text-[#53FC18] font-bold">{replay.date}</span>
              </div>
              <div className="rounded bg-[#0A0A0A] border border-[#D4AF37] px-2 py-1 text-xs font-bold text-[#D4AF37]">
                KICK
              </div>
            </div>
            
            <p className="mb-6 flex-1 text-sm text-gray-600 dark:text-gray-400">
              <span className="font-bold text-black dark:text-gray-300">Equipos:</span> {replay.teams}
            </p>
            
            <a
              href={replay.url}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-auto block w-full bg-[#53FC18] py-3 text-center font-bold uppercase tracking-wider text-[#0A0A0A] transition-transform hover:scale-[1.02]"
            >
              Ver VOD en Kick
            </a>
          </div>
        ))}
      </div>
    </div>
  );
}
