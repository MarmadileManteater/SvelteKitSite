<script lang="ts">
  import type { ISocialPost } from "@marmadilemanteater/gh-static-site-lib/src/models/social-posts"
  import SocialPost from "../social-post/social-post.svelte"

  export let socialPosts: ISocialPost[] = [];
</script>
<div class="lg:columns-3 flex-wrap justify-center ">
  <slot />
  {#each socialPosts as post, i}
    <div class="social-post flex lg:basis-[300px] basis-full lg:w-[300px] lg:mb-5">
      <SocialPost {post} />
    </div>
  {/each}
</div>
