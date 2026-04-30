"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { useTheme } from "next-themes";
import { schedule } from "@/data/schedule";

function MatchTicker() {
  const [tickerText, setTickerText] = useState("CARGANDO CALENDARIO...");

  useEffect(() => {
    const updateTicker = () => {
      const now = new Date();
      // Simple logic to find the next or current match (mocked for demo purposes)
      const upcoming = schedule.find(m => {
        const matchDate = new Date(`${m.date}T${m.time}:00-05:00`);
        return matchDate > now;
      });

      if (upcoming) {
        setTickerText(`PRÓXIMO: ${upcoming.team1} vs ${upcoming.team2} - BO${upcoming.bo} - ${upcoming.time} EST`);
      } else {
        setTickerText("LIVE: The Bot$ vs Team Peyitaz 0-0");
      }
    };
    
    updateTicker();
    const interval = setInterval(updateTicker, 60000); // 60s
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="w-full bg-[#D4AF37] text-black font-bold text-xs uppercase tracking-widest py-1.5 px-4 text-center overflow-hidden whitespace-nowrap">
      <span className="inline-block animate-pulse">{tickerText}</span>
    </div>
  );
}

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-[#B8860B] dark:border-[#D4AF37]/20 bg-white/80 dark:bg-black/80 backdrop-blur">
      <MatchTicker />
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <div className="flex items-center">
          <Link href="/" className="font-serif text-2xl font-bold tracking-wider text-[#B8860B] dark:text-[#D4AF37]" onClick={() => setIsMenuOpen(false)}>
            EL GRAN COLISEO
          </Link>
        </div>
        
        {/* Desktop Nav */}
        <nav className="hidden md:flex space-x-8 items-center">
          <Link href="/formato" className="text-sm font-bold uppercase tracking-widest text-gray-900 dark:text-white hover:text-[#B8860B] dark:text-[#D4AF37] transition-colors">Formato</Link>
          <Link href="/equipos" className="text-sm font-bold uppercase tracking-widest text-gray-900 dark:text-white hover:text-[#B8860B] dark:text-[#D4AF37] transition-colors">Equipos</Link>
          <Link href="/posiciones" className="text-sm font-bold uppercase tracking-widest text-gray-900 dark:text-white hover:text-[#B8860B] dark:text-[#D4AF37] transition-colors">Posiciones</Link>
          <Link href="/horario" className="text-sm font-bold uppercase tracking-widest text-gray-900 dark:text-white hover:text-[#B8860B] dark:text-[#D4AF37] transition-colors">Horario</Link>
          <Link href="/replays" className="text-sm font-bold uppercase tracking-widest text-gray-900 dark:text-white hover:text-[#B8860B] dark:text-[#D4AF37] transition-colors">Replays</Link>
          <Link href="/predicciones" className="text-sm font-bold uppercase tracking-widest text-gray-900 dark:text-white hover:text-[#B8860B] dark:text-[#D4AF37] transition-colors">Predicciones</Link>
          <a href="https://kick.com/benjaz" target="_blank" rel="noopener" className="text-sm font-bold uppercase tracking-widest text-[#0066FF] dark:text-[#53FC18] hover:text-[#B8860B] dark:text-[#D4AF37] transition-colors">Ver en Kick</a>
          
          {mounted && (
            <button
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
              className="ml-4 p-2 text-[#B8860B] dark:text-[#D4AF37] hover:bg-[#D4AF37]/10 rounded-full transition-colors"
              aria-label="Toggle theme"
            >
              {theme === "dark" ? "🌞" : "🌙"}
            </button>
          )}
        </nav>
        
        {/* Mobile Menu Button & Theme */}
        <div className="flex items-center md:hidden gap-4">
          {mounted && (
            <button
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
              className="p-2 text-[#B8860B] dark:text-[#D4AF37] hover:bg-[#D4AF37]/10 rounded-full transition-colors"
              aria-label="Toggle theme"
            >
              {theme === "dark" ? "🌞" : "🌙"}
            </button>
          )}
          <button 
            type="button" 
            aria-label="Abrir menú" 
            onClick={toggleMenu} 
            className="text-[#B8860B] dark:text-[#D4AF37] focus:outline-none"
          >
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {isMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      <div 
        className={`fixed inset-y-0 right-0 z-40 w-64 transform bg-white dark:bg-[#0A0A0A] border-l border-[#B8860B] dark:border-[#D4AF37] transition-transform duration-300 ease-in-out md:hidden ${
          isMenuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <nav className="flex flex-col pt-20 px-6 space-y-6">
          <Link href="/formato" onClick={toggleMenu} className="text-lg font-bold uppercase tracking-widest text-gray-900 dark:text-white hover:text-[#B8860B] dark:text-[#D4AF37] transition-colors">Formato</Link>
          <Link href="/equipos" onClick={toggleMenu} className="text-lg font-bold uppercase tracking-widest text-gray-900 dark:text-white hover:text-[#B8860B] dark:text-[#D4AF37] transition-colors">Equipos</Link>
          <Link href="/posiciones" onClick={toggleMenu} className="text-lg font-bold uppercase tracking-widest text-gray-900 dark:text-white hover:text-[#B8860B] dark:text-[#D4AF37] transition-colors">Posiciones</Link>
          <Link href="/horario" onClick={toggleMenu} className="text-lg font-bold uppercase tracking-widest text-gray-900 dark:text-white hover:text-[#B8860B] dark:text-[#D4AF37] transition-colors">Horario</Link>
          <Link href="/replays" onClick={toggleMenu} className="text-lg font-bold uppercase tracking-widest text-gray-900 dark:text-white hover:text-[#B8860B] dark:text-[#D4AF37] transition-colors">Replays</Link>
          <Link href="/predicciones" onClick={toggleMenu} className="text-lg font-bold uppercase tracking-widest text-gray-900 dark:text-white hover:text-[#B8860B] dark:text-[#D4AF37] transition-colors">Predicciones</Link>
          <a href="https://kick.com/benjaz" target="_blank" rel="noopener" onClick={toggleMenu} className="text-lg font-bold uppercase tracking-widest text-[#0066FF] dark:text-[#53FC18] hover:text-[#B8860B] dark:text-[#D4AF37] transition-colors">Ver en Kick</a>
        </nav>
      </div>
      
      {/* Overlay to close menu when clicking outside */}
      {isMenuOpen && (
        <div 
          className="fixed inset-0 z-30 bg-black/50 md:hidden" 
          onClick={toggleMenu}
          aria-hidden="true"
        />
      )}
    </header>
  );
}
