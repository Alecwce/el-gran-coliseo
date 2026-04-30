import { replays } from "@/data/replays";

export default function ReplaysPage() {
  return (
    <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
      <div className="mb-12 text-center">
        <h1 className="font-serif text-4xl font-extrabold uppercase tracking-widest text-[#D4AF37] md:text-5xl">
          Replays
        </h1>
        <p className="mt-4 text-gray-400 text-lg">Revive los mejores momentos del Coliseo.</p>
      </div>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {replays.map((replay) => (
          <div
            key={replay.id}
            className="flex flex-col border border-[#D4AF37] bg-white dark:bg-[#191B1F] p-6 text-center"
          >
            <div className="mb-6 flex aspect-video w-full flex-col items-center justify-center border border-[#D4AF37]/30 bg-[#0A0A0A]">
               <iframe
                 width="100%"
                 height="100%"
                 src={`https://www.youtube.com/embed/${replay.videoId}`}
                 title={replay.title}
                 frameBorder="0"
                 allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                 allowFullScreen
               ></iframe>
            </div>
            
            <h2 className="mb-2 font-serif text-xl font-bold text-black dark:text-white uppercase">{replay.title}</h2>
            <p className="mb-6 text-sm text-[#0066FF] dark:text-[#53FC18] font-bold tracking-widest">{replay.date}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
