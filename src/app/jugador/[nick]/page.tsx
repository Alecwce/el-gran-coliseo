import { rosters } from "@/data/rosters";
import Image from "next/image";
import Link from "next/link";

// Pre-renderizamos todas las rutas de los jugadores estáticamente
export async function generateStaticParams() {
  const params: { nick: string }[] = [];
  
  Object.values(rosters).forEach(team => {
    team.players.forEach(player => {
      params.push({ nick: player });
    });
  });

  return params;
}

export default async function JugadorPage({ params }: { params: Promise<{ nick: string }> }) {
  // Await the params correctly
  const { nick } = await params;
  const decodedNick = decodeURIComponent(nick);

  // Encontrar a qué equipo pertenece el jugador
  let playerTeam = null;
  let teamId = "";
  
  for (const [id, t] of Object.entries(rosters)) {
    if (t.players.includes(decodedNick)) {
      playerTeam = t;
      teamId = id;
      break;
    }
  }

  if (!playerTeam) {
    return (
      <div className="flex h-screen items-center justify-center text-white">
        Jugador no encontrado.
      </div>
    );
  }

  return (
    <div className="mx-auto max-w-4xl px-4 py-16 sm:px-6 lg:px-8">
      <Link href="/equipos" className="text-[#D4AF37] hover:underline mb-8 inline-block font-bold uppercase tracking-widest text-sm">
        &larr; Volver a Equipos
      </Link>
      
      <div className="border border-[#D4AF37]/50 bg-[#191B1F] shadow-[0_0_30px_rgba(212,175,55,0.15)] rounded-xl overflow-hidden">
        {/* Banner superior */}
        <div className="h-32 bg-gradient-to-r from-[#0A0A0A] via-[#D4AF37]/20 to-[#0A0A0A] relative border-b border-[#D4AF37]/30">
          <div className="absolute -bottom-16 left-8">
            <div className="h-32 w-32 rounded-full border-4 border-[#191B1F] bg-[#0A0A0A] overflow-hidden flex items-center justify-center">
              {/* Placeholder foto */}
              <div className="text-6xl text-gray-600">👤</div>
            </div>
          </div>
          <div className="absolute right-8 top-1/2 -translate-y-1/2 opacity-20">
            <Image src={`/logos/${playerTeam.logo}`} alt={playerTeam.team} width={100} height={100} className="object-contain" />
          </div>
        </div>

        <div className="pt-20 px-8 pb-8">
          <div className="flex justify-between items-start mb-8">
            <div>
              <h1 className="text-4xl font-black text-white uppercase tracking-wider">{decodedNick}</h1>
              <p className="text-[#D4AF37] font-bold text-lg mt-1 tracking-widest">{playerTeam.team}</p>
            </div>
            <div className="bg-[#53FC18]/10 text-[#53FC18] border border-[#53FC18]/30 px-4 py-2 rounded font-bold uppercase text-xs tracking-widest">
              Gladiador Activo
            </div>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-8">
            <div className="bg-[#0A0A0A] p-4 border border-gray-800 rounded">
              <div className="text-gray-500 text-xs uppercase tracking-widest mb-1">KDA</div>
              <div className="text-2xl font-bold text-white">4.2<span className="text-sm text-gray-600">/1</span></div>
            </div>
            <div className="bg-[#0A0A0A] p-4 border border-gray-800 rounded">
              <div className="text-gray-500 text-xs uppercase tracking-widest mb-1">GPM</div>
              <div className="text-2xl font-bold text-white">650</div>
            </div>
            <div className="bg-[#0A0A0A] p-4 border border-gray-800 rounded">
              <div className="text-gray-500 text-xs uppercase tracking-widest mb-1">XPM</div>
              <div className="text-2xl font-bold text-white">720</div>
            </div>
            <div className="bg-[#0A0A0A] p-4 border border-gray-800 rounded">
              <div className="text-gray-500 text-xs uppercase tracking-widest mb-1">Héroes fav.</div>
              <div className="text-lg font-bold text-[#0066FF]">Rubick, Puck</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
