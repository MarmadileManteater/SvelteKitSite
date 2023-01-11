
import tagData from '../../../data/tags.json'
import * as devDataservice from '@marmadilemanteater/gh-static-site-lib/src/dataservice/blog-posts'
import * as prodDataservice from '../../dataservice/blog-posts'
import { IBlogPost } from '@marmadilemanteater/gh-static-site-lib/src/models/blog'
const PAGE_SIZE = 5

export async function load() {
  let getAllBlogPostsSorted : () => Promise<IBlogPost[]> = async () => {
    return devDataservice.getAllBlogPostsSorted()
  }
  if (process.env.ENVIRONMENT_NAME === 'PROD') {
    // Access sqlite3 db in production because it will be better than making exec calls every request
    getAllBlogPostsSorted = prodDataservice.getAllBlogPostsSorted
  }
  const blogPosts = await getAllBlogPostsSorted()
  return {
    props: {
      tagData,
      blogPosts: blogPosts,
      pageCount: blogPosts.length / PAGE_SIZE
    }
  }
}
