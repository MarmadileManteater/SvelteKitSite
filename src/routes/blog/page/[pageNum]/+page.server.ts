
import tagData from '../../../../../data/tags.json'
import * as devDataservice from '@marmadilemanteater/gh-static-site-lib/src/dataservice/blog-posts'
import * as prodDataservice from '../../../../dataservice/blog-posts'
import type { IBlogPost } from "@marmadilemanteater/gh-static-site-lib/src/models/blog"
import { error } from '@sveltejs/kit'
const PAGE_SIZE = 5

export async function load({params} : any) {
  const pageNum = parseInt(params.pageNum)
  if (isNaN(pageNum))
    throw error(404, 'Not found')
  let getAllBlogPostsSorted : () => Promise<IBlogPost[]> = async () => {
    return devDataservice.getAllBlogPostsSorted()
  }
  if (process.env.ENVIRONMENT_NAME === 'PROD') {
    // Access sqlite3 db in production because it will be better than making exec calls every request
    getAllBlogPostsSorted = prodDataservice.getAllBlogPostsSorted
  }
  const allPosts = await getAllBlogPostsSorted()
  const pageCount = allPosts.length / PAGE_SIZE
  const posts = allPosts.splice(PAGE_SIZE * pageNum, PAGE_SIZE)
  console.log(pageCount)
  console.log(allPosts.length)
  console.log(pageNum < Math.floor(pageCount))
  if (pageNum > Math.floor(pageCount))
    throw error(404, 'Not found')
  return {
    props: {
      tagData,
      blogPosts: posts,
      pageCount: pageCount,
      pageNum: pageNum
    }
  }
}
