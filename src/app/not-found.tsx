import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="flex min-h-[calc(100vh-160px)] flex-col items-center justify-center px-4 text-center">
      <h1 className="font-serif text-6xl font-extrabold uppercase tracking-widest text-[#D4AF37] md:text-8xl">
        404
      </h1>
      <h2 className="mt-4 font-serif text-3xl font-bold uppercase tracking-widest text-[#D4AF37] md:text-4xl">
        Gladiador perdido
      </h2>
      <p className="mt-6 max-w-md mx-auto text-lg text-gray-400">
        Te has desviado del camino hacia la arena. Esta zona del coliseo no existe o fue destruida en batalla.
      </p>
      <Link 
        href="/"
        className="mt-8 inline-flex items-center justify-center bg-[#D4AF37] px-8 py-3 font-bold uppercase tracking-widest text-[#0A0A0A] transition-all hover:scale-105 hover:bg-[#b5952f]"
      >
        Volver al inicio
      </Link>
    </div>
  );
}
