export default function ReplaysPage() {
  const placeholders = Array.from({ length: 6 });

  return (
    <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
      <div className="mb-12 text-center">
        <h1 className="font-serif text-4xl font-extrabold uppercase tracking-widest text-[#D4AF37] md:text-5xl">
          Replays
        </h1>
        <p className="mt-4 text-gray-400 text-lg">Revive los mejores momentos del Coliseo.</p>
      </div>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {placeholders.map((_, idx) => (
          <div
            key={idx}
            className="flex flex-col border border-[#D4AF37] bg-[#191B1F] p-6 text-center"
          >
            {/* Video Thumbnail Placeholder */}
            <div className="mb-6 flex aspect-video w-full flex-col items-center justify-center border border-dashed border-[#D4AF37]/30 bg-[#0A0A0A]">
               <span className="text-sm font-bold uppercase tracking-widest text-[#D4AF37]/50">
                 VOD no disponible
               </span>
            </div>
            
            <h2 className="mb-6 font-serif text-2xl font-bold text-white uppercase">Próximamente</h2>
            
            <button
              disabled
              className="mt-auto flex w-full cursor-not-allowed items-center justify-center border-2 border-gray-600 bg-transparent px-6 py-3 font-sans font-bold uppercase tracking-wider text-gray-500 opacity-50"
            >
              Ver VOD
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
