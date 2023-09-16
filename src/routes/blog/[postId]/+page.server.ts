
import tagData from '../../../../data/tags.json'
import * as devDataservice from '@marmadilemanteater/gh-static-site-lib/src/dataservice/blog-posts'
import * as prodDataservice from '../../../dataservice/blog-posts'
import type { IBlogPost } from "@marmadilemanteater/gh-static-site-lib/src/models/blog"
import { error } from '@sveltejs/kit'

export const entries = (() => {
  return devDataservice.getAllBlogPostIds().map(postId => { return { postId: postId.toString() } })
});

export async function load(params : { params: { postId: string } }) {
  const postId = params.params.postId as string
  let getBlogPostById : (postId: string) => Promise<IBlogPost> = async (postId : string) => {
    return devDataservice.getBlogPostById(postId)
  }
  if (process.env.ENVIRONMENT_NAME === 'PROD') {
    // Access sqlite3 db in production because it will be better than making exec calls every request
    getBlogPostById = prodDataservice.getBlogPostById
  }
  try {
    const blogPost = await getBlogPostById(postId)
    return {
      props: {
        tagData,
        blogPost
      }
    }
  } catch {
    throw error(404, 'Not found')
  }
}
