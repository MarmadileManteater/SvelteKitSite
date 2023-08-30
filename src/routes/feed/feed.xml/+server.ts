
import fs from 'fs/promises'

export const prerender = true;

export async function GET() {
  return new Response(
    await fs.readFile("./social/feed.xml"),
    {
      headers: {
        'Content-Type': 'application/xml',
      },
    }
  );
}
