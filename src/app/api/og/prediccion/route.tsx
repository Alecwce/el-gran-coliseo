import { ImageResponse } from 'next/og';
import { NextRequest } from 'next/server';
import { teams } from '@/data/teams';

export const runtime = 'edge';

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    const teamName = searchParams.get('team');
    const teamData = teams.find(t => t.name === teamName);

    if (!teamData) {
      return new Response('Equipo no encontrado', { status: 404 });
    }

    const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000';
    const logoUrl = `${siteUrl}/logos/${teamData.logo}`;

    return new ImageResponse(
      (
        <div
          style={{
            display: 'flex',
            height: '100%',
            width: '100%',
            alignItems: 'center',
            justifyContent: 'center',
            flexDirection: 'column',
            backgroundImage: 'linear-gradient(to bottom, #0A0A0A, #191B1F)',
            color: 'white',
            border: '20px solid #D4AF37',
          }}
        >
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <img src={logoUrl} alt={teamData.name} width="300" height="300" style={{ objectFit: 'contain', marginBottom: '40px' }} />
            <h1 style={{ fontSize: 72, fontWeight: 'bold', fontFamily: 'sans-serif', color: '#D4AF37', textTransform: 'uppercase', textAlign: 'center', margin: 0 }}>
              Yo voy con {teamData.name}
            </h1>
            <p style={{ fontSize: 36, color: '#0066FF', letterSpacing: '8px', textTransform: 'uppercase', marginTop: '20px', fontWeight: 'bold' }}>
              El Gran Coliseo
            </p>
          </div>
        </div>
      ),
      {
        width: 1200,
        height: 630,
      }
    );
  } catch (e: any) {
    console.error(e);
    return new Response('Error generando imagen', { status: 500 });
  }
}
