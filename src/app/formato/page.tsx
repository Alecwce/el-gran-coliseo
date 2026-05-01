import { Bracket } from "@/components/Bracket";

export default function FormatoPage() {
  const formatos = [
    {
      title: "Fase de Grupos",
      date: "27 - 30 de Abril",
      bo: "BO1",
      icon: "⚔️",
      desc: "Formato Round Robin (Todos contra todos). Partidos rápidos y decisivos al mejor de 1 para definir las posiciones iniciales de cara a las eliminatorias.",
    },
    {
      title: "Playoffs",
      date: "1 de Mayo",
      bo: "BO3",
      icon: "🏟️",
      desc: "Llaves de doble eliminación (Upper y Lower Bracket). Partidos al mejor de 3 donde un solo error te envía a la zona de peligro; la consistencia es clave para avanzar.",
    },
    {
      title: "Gran Final",
      date: "3 de Mayo",
      bo: "BO5",
      icon: "🏆",
      desc: "El enfrentamiento definitivo al mejor de cinco. El último equipo en pie se coronará campeón y se llevará la gran bolsa de premios de $20,000 USD.",
    },
  ];

  return (
    <div className="min-h-screen bg-white dark:bg-[#0B0B0B] relative py-16 transition-colors duration-300">
      {/* Rayas diagonales doradas — solo dark mode */}
      <div
        className="absolute inset-0 z-0 opacity-10 pointer-events-none hidden dark:block"
        style={{
          backgroundImage: 'repeating-linear-gradient(45deg, #000 0, #000 20px, #D4AF37 20px, #D4AF37 40px)'
        }}
      />

      <div className="relative z-10 mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-12 text-center flex flex-col items-center">
          <span className="text-gray-600 dark:text-gray-300 tracking-[0.2em] text-sm uppercase mb-2">REGLAS Y ESTRUCTURA</span>
          <h1 className="font-serif text-5xl md:text-7xl font-extrabold uppercase tracking-widest text-gray-900 dark:text-white mb-6 drop-shadow-[0_0_15px_rgba(255,255,255,0.1)]">
            FORMATO
          </h1>
          <div className="bg-[#E5D5B5] px-8 py-2 rounded shadow-xl border border-[#B8860B] dark:border-[#D4AF37]/50 rotate-[-1deg]">
            <h2 className="text-black font-serif font-black text-xl uppercase">El Gran Coliseo de Benjaz</h2>
          </div>
        </div>

        {/* Tarjetas horizontales */}
        <div className="flex flex-col gap-6 mb-20">
          {formatos.map((item, idx) => (
            <div
              key={idx}
              className="group flex flex-col md:flex-row items-stretch border border-[#B8860B] dark:border-[#D4AF37] bg-white/80 dark:bg-black/60 backdrop-blur-sm shadow-lg transition-all hover:shadow-[0_0_25px_rgba(212,175,55,0.2)] hover:border-[#D4AF37]"
            >
              {/* Icono + BO badge — lado izquierdo */}
              <div className="flex flex-col items-center justify-center bg-[#E5D5B5]/30 dark:bg-[#D4AF37]/5 border-b md:border-b-0 md:border-r border-[#B8860B]/30 dark:border-[#D4AF37]/20 px-8 py-6 md:py-0 md:min-w-[140px]">
                <span className="text-5xl mb-3">{item.icon}</span>
                <div className="bg-[#E5D5B5] px-4 py-1.5 font-bold text-black border border-[#B8860B] dark:border-[#D4AF37]/50 shadow-inner text-sm tracking-wider">
                  {item.bo}
                </div>
              </div>

              {/* Contenido — lado derecho */}
              <div className="flex-1 p-6 md:p-8 flex flex-col justify-center">
                <div className="flex flex-wrap items-center gap-3 mb-3">
                  <h2 className="font-serif text-2xl md:text-3xl font-bold text-[#B8860B] dark:text-[#D4AF37] uppercase">{item.title}</h2>
                  <span className="text-[#0066FF] font-bold uppercase tracking-widest text-xs bg-[#0066FF]/10 dark:bg-[#53FC18]/10 dark:text-[#53FC18] px-2 py-0.5">{item.date}</span>
                </div>
                <p className="text-gray-600 dark:text-gray-300 text-base leading-relaxed">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Bracket */}
        <div className="mt-8">
          <div className="mb-8 text-center flex flex-col items-center">
            <span className="text-gray-600 dark:text-gray-300 tracking-[0.2em] text-xs uppercase mb-2">DOBLE ELIMINACIÓN</span>
            <h2 className="font-serif text-3xl md:text-4xl font-bold uppercase tracking-widest text-[#B8860B] dark:text-[#D4AF37]">
              Cuadro Eliminatorio
            </h2>
          </div>
          <Bracket />
        </div>
      </div>
    </div>
  );
}
