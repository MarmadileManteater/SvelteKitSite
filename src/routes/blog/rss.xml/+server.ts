
import { getAllBlogPostsSorted, getBlogRSSFeed } from '@marmadilemanteater/gh-static-site-lib/src/dataservice/blog-posts'

export const prerender = true;

export async function GET() {
  return new Response(
    getBlogRSSFeed(getAllBlogPostsSorted()),
    {
      headers: {
        'Content-Type': 'application/xml',
      },
    }
  );
}
