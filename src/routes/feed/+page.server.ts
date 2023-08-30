import { getSocialPosts } from '@marmadilemanteater/gh-static-site-lib/src/dataservice/social-posts'

export async function load() {
  return {
    props: {
      socialPosts: ((await getSocialPosts(0)))
    }
  }
}
