
import tagData from '../../../../../data/tags.json'
import * as devDataservice from '@marmadilemanteater/gh-static-site-lib/src/dataservice/blog-posts'
import * as prodDataservice from '../../../../dataservice/blog-posts'
import type { IBlogPost } from "@marmadilemanteater/gh-static-site-lib/src/models/blog"
const PAGE_SIZE = 5

export async function load({params} : any) {
  const pageNum = parseInt(params.pageNum)
  let getAllBlogPostsSorted : () => Promise<IBlogPost[]> = async () => {
    return devDataservice.getAllBlogPostsSorted()
  }
  if (process.env.ENVIRONMENT_NAME === 'PROD') {
    // Access sqlite3 db in production because it will be better than making exec calls every request
    getAllBlogPostsSorted = prodDataservice.getAllBlogPostsSorted
  }
  const allPosts = await getAllBlogPostsSorted()
  const posts = allPosts.splice(PAGE_SIZE * pageNum, PAGE_SIZE)

  return {
    props: {
      tagData,
      blogPosts: posts,
      pageCount: allPosts.length / PAGE_SIZE,
      pageNum: pageNum
    }
  }
}
