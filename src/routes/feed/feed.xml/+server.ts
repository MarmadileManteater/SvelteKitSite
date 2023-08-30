
import fs from 'fs/promises'
import pacakageJson from '../../../../package.json'
export const prerender = true;

export async function GET() {
  return new Response(
    (await fs.readFile("./social/feed.xml")).toString().replace(/https:\/\/raw.githubusercontent.com\/MarmadileManteater\/MySocialFeed\/development/g, pacakageJson.domain),
    {
      headers: {
        'Content-Type': 'application/xml',
      },
    }
  );
}
