
import { getAllBlogPostsSorted, getBlogRSSFeed } from '@marmadilemanteater/gh-static-site-lib/src/dataservice/blog-posts'
import { domain } from '../../../../package.json'

export const prerender = true

export async function GET() {
  return new Response(
    getBlogRSSFeed(getAllBlogPostsSorted(), `${domain}/blog/`),
    {
      headers: {
        'Content-Type': 'application/xml',
      },
    }
  );
}
