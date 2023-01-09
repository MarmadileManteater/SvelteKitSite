
import tagData from '../../../../../data/tags.json'
import { getAllBlogPostsSorted } from '@marmadilemanteater/gh-static-site-lib/src/dataservice/blog-posts'
const PAGE_SIZE = 5

export async function load({params} : any) {
  const pageNum = parseInt(params.pageNum)
  const allPosts = getAllBlogPostsSorted()
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
