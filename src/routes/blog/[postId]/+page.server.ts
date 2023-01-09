
import tagData from '../../../../data/tags.json'
import { getAllBlogPostIds, getBlogPostById } from '@marmadilemanteater/gh-static-site-lib/src/dataservice/blog-posts'

export async function load(params : any) {
  const postId = params.params.postId as string
  let blogPost = null
  if (getAllBlogPostIds().indexOf(postId) !== -1) {
    blogPost = getBlogPostById(postId)
  }
  return {
    props: {
      tagData,
      blogPost
    }
  }
}
