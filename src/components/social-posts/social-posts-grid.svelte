<script lang='ts'>
  import type { ISocialPost } from '@marmadilemanteater/gh-static-site-lib/src/models/social-posts'
  import SocialPost from '../social-post/social-post.svelte'

  export let socialPosts: ISocialPost[] = [];
</script>
<div
  class='lg:columns-3 lg:gap-x-[50px] flex-wrap justify-center'
>
  <slot />
  {#each socialPosts as post, i}
    <div
      class='flex lg:basis-[320px] basis-full lg:w-[320px] lg:mb-7'
    >
      <SocialPost {post} />
    </div>
  {/each}
</div>
