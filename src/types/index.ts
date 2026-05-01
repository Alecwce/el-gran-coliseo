export interface Team { id: string; name: string; logo: string; group?: string; }
export interface Match {
  date: string;
  time: string;
  team1: string;
  team2: string;
  stage: string;
  bo: number;
  /** Nombre del equipo ganador, o undefined si aún no se jugó */
  winner?: string;
}
