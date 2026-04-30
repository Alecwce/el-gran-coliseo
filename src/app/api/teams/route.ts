import { NextResponse } from 'next/server';
import { teams as staticTeams } from '@/data/teams';

export async function GET() {
  try {
    const res = await fetch('https://api.opendota.com/api/teams', {
      next: { revalidate: 3600 }
    });
    
    if (!res.ok) {
      return NextResponse.json(staticTeams);
    }

    const data = await res.json();
    return NextResponse.json(data.slice(0, 12)); // Return top 12 to match tournament
  } catch (error) {
    return NextResponse.json(staticTeams);
  }
}
