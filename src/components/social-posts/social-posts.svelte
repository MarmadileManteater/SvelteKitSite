<script lang="ts">
  import type { ISocialPost } from "@marmadilemanteater/gh-static-site-lib/src/models/social-posts"
  import SocialPost from "../social-post/social-post.svelte"

  export let socialPosts: ISocialPost[] = [];
</script>
<div class="flex flex-wrap justify-center">
  {#each socialPosts as post, i}
    <div class="social-post flex w-[100%]">
      <SocialPost {post} />
    </div>
  {/each}
</div>

<style scoped>
  .social-post {
    flex-basis: calc(33% - 15px);
  }

  @media(max-width:1024px) {
    .social-post {
      flex-basis: 100%;
    }
  }
</style>
