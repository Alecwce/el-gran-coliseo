import Link from "next/link";

export function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-[#D4AF37]/20 bg-[#0A0A0A]/90 backdrop-blur">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <div className="flex items-center">
          <Link href="/" className="font-serif text-2xl font-bold tracking-wider text-[#D4AF37]">
            EL GRAN COLISEO
          </Link>
        </div>
        <nav className="hidden md:flex space-x-8">
          <Link href="/formato" className="text-sm font-bold uppercase tracking-widest text-white hover:text-[#D4AF37] transition-colors">Formato</Link>
          <Link href="/equipos" className="text-sm font-bold uppercase tracking-widest text-white hover:text-[#D4AF37] transition-colors">Equipos</Link>
          <Link href="/horario" className="text-sm font-bold uppercase tracking-widest text-white hover:text-[#D4AF37] transition-colors">Horario</Link>
          <Link href="/replays" className="text-sm font-bold uppercase tracking-widest text-white hover:text-[#D4AF37] transition-colors">Replays</Link>
        </nav>
        <div className="flex items-center md:hidden">
          {/* Mobile menu button could go here */}
          <span className="text-xs text-[#D4AF37] uppercase tracking-widest font-bold">Menú</span>
        </div>
      </div>
    </header>
  );
}
