<script lang="ts">
  import type { ISocialPost } from "@marmadilemanteater/gh-static-site-lib/src/models/social-posts"
  import SocialPost from "../social-post/social-post.svelte"

  export let socialPosts: ISocialPost[] = [];
</script>
<div class="flex flex-wrap justify-center lg:gap-[25px]">
  {#each socialPosts as post, i}
    <div class="social-post flex lg:basis-[300px] basis-full">
      <SocialPost {post} />
    </div>
  {/each}
</div>
