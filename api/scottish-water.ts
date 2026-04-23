export const config = {
  runtime: 'edge',
};

const SCOTTISH_WATER_API_URL =
  'https://api.scottishwater.co.uk/overflow-event-monitoring/v1/near-real-time';

export default async function handler(): Promise<Response> {
  try {
    const response = await fetch(SCOTTISH_WATER_API_URL);
    const text = await response.text();
    const contentType = response.headers.get('Content-Type') ?? 'application/json';
    return new Response(text, {
      status: response.status,
      headers: {
        'Content-Type': contentType,
        'Cache-Control': response.ok ? 'public, max-age=60, s-maxage=60' : 'no-store',
      },
    });
  } catch (err) {
    console.error('[ScottishWater] Proxy fetch failed:', err);
    return new Response(JSON.stringify({ error: 'Failed to fetch data from Scottish Water API' }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' },
    });
  }
}
