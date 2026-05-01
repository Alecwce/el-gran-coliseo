import { Bracket } from "@/components/Bracket";

export default function FormatoPage() {
  const formatos = [
    {
      title: "Fase de Grupos",
      date: "27 - 30 de Abril",
      bo: "BO1",
      desc: "Formato Round Robin (Todos contra todos). Partidos rápidos y decisivos al mejor de 1 para definir las posiciones iniciales de cara a las eliminatorias.",
    },
    {
      title: "Playoffs",
      date: "1 de Mayo",
      bo: "BO3",
      desc: "Llaves de doble eliminación (Upper y Lower Bracket). Partidos al mejor de 3 donde un solo error te envía a la zona de peligro; la consistencia es clave para avanzar.",
    },
    {
      title: "Gran Final",
      date: "3 de Mayo",
      bo: "BO5",
      desc: "El enfrentamiento definitivo al mejor de cinco. El último equipo en pie se coronará campeón y se llevará la gran bolsa de premios de $20,000 USD.",
    },
  ];

  return (
    <div className="mx-auto max-w-5xl px-4 py-16 sm:px-6 lg:px-8">
      <div className="mb-12 text-center">
        <h1 className="font-serif text-4xl font-extrabold uppercase tracking-widest text-[#B8860B] dark:text-[#D4AF37] md:text-5xl">
          Estructura del Torneo
        </h1>
        <p className="mt-4 text-gray-600 dark:text-gray-400 text-lg">Las reglas y fases que los gladiadores deben superar en la arena.</p>
      </div>

      <div className="flex flex-col gap-8 mb-20">
        {formatos.map((item, idx) => (
          <div
            key={idx}
            className="group relative border border-[#B8860B] dark:border-[#D4AF37] bg-white dark:bg-[#191B1F] p-8 transition-all hover:shadow-[0_0_20px_rgba(212,175,55,0.2)]"
          >
            <div className="mb-4 flex flex-wrap items-center gap-4">
              <div className="bg-white dark:bg-[#0A0A0A] px-4 py-2 font-bold text-[#B8860B] dark:text-[#D4AF37] border border-[#B8860B] dark:border-[#D4AF37]/50 tracking-wider">
                {item.bo}
              </div>
              <span className="text-[#0066FF] font-bold uppercase tracking-widest text-sm">{item.date}</span>
            </div>
            <h2 className="mb-4 font-serif text-3xl font-bold text-gray-900 dark:text-white uppercase">{item.title}</h2>
            <p className="text-gray-600 dark:text-gray-300 text-lg leading-relaxed">{item.desc}</p>
          </div>
        ))}
      </div>

      <div className="mt-16">
        <h2 className="mb-8 text-center font-serif text-3xl font-bold uppercase tracking-widest text-[#B8860B] dark:text-[#D4AF37]">
          Cuadro Eliminatorio (Playoffs)
        </h2>
        <Bracket />
      </div>
    </div>
  );
}
