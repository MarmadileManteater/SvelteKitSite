
import tagData from '../../../data/tags.json'
import { getAllBlogPostsSorted } from '@marmadilemanteater/gh-static-site-lib/src/dataservice/blog-posts'
const PAGE_SIZE = 5

export async function load() {
  const blogPosts = getAllBlogPostsSorted()
  return {
    props: {
      tagData,
      blogPosts,
      pageCount: blogPosts.length / PAGE_SIZE
    }
  }
}
