import { getSocialPosts } from '@marmadilemanteater/gh-static-site-lib/src/dataservice/social-posts'

import { error } from '@sveltejs/kit'

export async function load({params} : any) {
  const pageNum = parseInt(params.pageNum)
  if (isNaN(pageNum))
    throw error(404, 'Not found')
  return {
    props: {
      socialPosts: ((await getSocialPosts(0))),
      pageNum: pageNum
    }
  }
}
