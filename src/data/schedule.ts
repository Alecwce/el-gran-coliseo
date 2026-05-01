import { Match } from '@/types';

export const schedule: Match[] = [
  // ── Día 1: 27 de Abril ──
  { date: "2026-04-27", time: "14:00", team1: "The Bot$", team2: "Los Bemboyz", stage: "Groups", bo: 1, winner: "The Bot$" },
  { date: "2026-04-27", time: "15:00", team1: "WK Bear and Bones", team2: "Team Peyitaz", stage: "Groups", bo: 1, winner: "Team Peyitaz" },
  { date: "2026-04-27", time: "16:00", team1: "Rage Overdose", team2: "The Monsters", stage: "Groups", bo: 1, winner: "The Monsters" },
  { date: "2026-04-27", time: "17:00", team1: "Mango Boys", team2: "Capibarbas", stage: "Groups", bo: 1, winner: "Mango Boys" },
  { date: "2026-04-27", time: "18:00", team1: "The Bot$", team2: "Gotto House", stage: "Groups", bo: 1, winner: "The Bot$" },
  { date: "2026-04-27", time: "19:00", team1: "WK Bear and Bones", team2: "The Blacklist", stage: "Groups", bo: 1, winner: "WK Bear and Bones" },
  { date: "2026-04-27", time: "20:00", team1: "Los Bemboyz", team2: "Rage Overdose", stage: "Groups", bo: 1, winner: "Los Bemboyz" },
  { date: "2026-04-27", time: "21:00", team1: "Team Peyitaz", team2: "The Blacklist", stage: "Groups", bo: 1, winner: "Team Peyitaz" },

  // ── Día 2: 28 de Abril ──
  { date: "2026-04-28", time: "14:00", team1: "The Bot$", team2: "The Monsters", stage: "Groups", bo: 1, winner: "The Bot$" },
  { date: "2026-04-28", time: "15:00", team1: "WK Bear and Bones", team2: "Mango Boys", stage: "Groups", bo: 1, winner: "WK Bear and Bones" },
  { date: "2026-04-28", time: "16:00", team1: "Rage Overdose", team2: "Gotto House", stage: "Groups", bo: 1, winner: "Gotto House" },
  { date: "2026-04-28", time: "17:00", team1: "Capibarbas", team2: "TaiLung Mafia", stage: "Groups", bo: 1, winner: "Capibarbas" },
  { date: "2026-04-28", time: "18:00", team1: "Los Bemboyz", team2: "Gotto House", stage: "Groups", bo: 1, winner: "Los Bemboyz" },
  { date: "2026-04-28", time: "19:00", team1: "Team Peyitaz", team2: "TaiLung Mafia", stage: "Groups", bo: 1, winner: "Team Peyitaz" },
  { date: "2026-04-28", time: "20:00", team1: "The Monsters", team2: "Chala Team", stage: "Groups", bo: 1, winner: "The Monsters" },
  { date: "2026-04-28", time: "21:00", team1: "Mango Boys", team2: "The Blacklist", stage: "Groups", bo: 1, winner: "The Blacklist" },

  // ── Día 3: 29 de Abril ──
  { date: "2026-04-29", time: "14:00", team1: "The Bot$", team2: "Chala Team", stage: "Groups", bo: 1, winner: "The Bot$" },
  { date: "2026-04-29", time: "15:00", team1: "WK Bear and Bones", team2: "Capibarbas", stage: "Groups", bo: 1, winner: "WK Bear and Bones" },
  { date: "2026-04-29", time: "16:00", team1: "Los Bemboyz", team2: "The Monsters", stage: "Groups", bo: 1, winner: "The Monsters" },
  { date: "2026-04-29", time: "17:00", team1: "Team Peyitaz", team2: "Mango Boys", stage: "Groups", bo: 1, winner: "Team Peyitaz" },
  { date: "2026-04-29", time: "18:00", team1: "Rage Overdose", team2: "Chala Team", stage: "Groups", bo: 1, winner: "Rage Overdose" },
  { date: "2026-04-29", time: "19:00", team1: "TaiLung Mafia", team2: "The Blacklist", stage: "Groups", bo: 1, winner: "The Blacklist" },
  { date: "2026-04-29", time: "20:00", team1: "Gotto House", team2: "The Monsters", stage: "Groups", bo: 1, winner: "Gotto House" },

  // ── Día 4: 30 de Abril ──
  { date: "2026-04-30", time: "14:00", team1: "The Bot$", team2: "Rage Overdose", stage: "Groups", bo: 1, winner: "The Bot$" },
  { date: "2026-04-30", time: "15:00", team1: "WK Bear and Bones", team2: "TaiLung Mafia", stage: "Groups", bo: 1, winner: "TaiLung Mafia" },
  { date: "2026-04-30", time: "16:00", team1: "Los Bemboyz", team2: "Chala Team", stage: "Groups", bo: 1, winner: "Los Bemboyz" },
  { date: "2026-04-30", time: "17:00", team1: "Team Peyitaz", team2: "Capibarbas", stage: "Groups", bo: 1, winner: "Team Peyitaz" },
  { date: "2026-04-30", time: "18:00", team1: "Chala Team", team2: "Gotto House", stage: "Groups", bo: 1, winner: "Gotto House" },
  { date: "2026-04-30", time: "19:00", team1: "Mango Boys", team2: "TaiLung Mafia", stage: "Groups", bo: 1, winner: "Mango Boys" },
  { date: "2026-04-30", time: "20:00", team1: "Capibarbas", team2: "The Blacklist", stage: "Groups", bo: 1, winner: "The Blacklist" },

  // ── Playoffs: 1 de Mayo ──
  { date: "2026-05-01", time: "10:00", team1: "The Bot$", team2: "WK Bear and Bones", stage: "Upper Bracket SF", bo: 3 },
  { date: "2026-05-01", time: "13:00", team1: "Team Peyitaz", team2: "Gotto House", stage: "Upper Bracket SF", bo: 3 },
  { date: "2026-05-01", time: "16:00", team1: "TBD", team2: "The Monsters", stage: "Lower Bracket QF", bo: 3 },
  { date: "2026-05-01", time: "18:00", team1: "TBD", team2: "The Blacklist", stage: "Lower Bracket QF", bo: 3 },
  { date: "2026-05-01", time: "20:00", team1: "TBD", team2: "TBD", stage: "Upper Bracket Final", bo: 3 },

  // ── Final Day: 3 de Mayo ──
  { date: "2026-05-03", time: "12:00", team1: "TBD", team2: "TBD", stage: "Lower Bracket Final", bo: 3 },
  { date: "2026-05-03", time: "16:00", team1: "TBD", team2: "TBD", stage: "Grand Final", bo: 5 },
];
