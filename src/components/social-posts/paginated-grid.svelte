
<script lang="ts">
  import SocialPostsGrid from "../../components/social-posts/social-posts-grid.svelte"
  import Emoji from "../../components/emoji/emoji.svelte"
  // @ts-ignore
  import profilepic from "../../images/02152bebd8e818f982e39fb74e92ff4b.png?format=webp&w=100&h=100"
  // @ts-ignore
  import stars from "../../images/preview3_22.png?format=webp&h=100&w=300"
  
  export const PAGE_COUNT = 10
  export let page = 0
  export let socialPosts = []
  let pages = Math.ceil(socialPosts.length / PAGE_COUNT)
  let pageArray = Array.from(Array(pages).keys())
</script>

<SocialPostsGrid socialPosts={socialPosts.slice(page * PAGE_COUNT, (page * PAGE_COUNT) + PAGE_COUNT)}>
  <div class="w-[100%] lg:block flex justify-center">
    <div class="post max-w-[300px] bg-white dark:bg-zinc-900 rounded-t-xl overflow-hidden lg:w-auto w-[100%] mb-5">
      <div class="absolute z-1 bg-black h-[100px] rounded-t-xl overflow-hidden">
        <img src={stars} alt="banner" />
      </div>
      <img src={profilepic} alt="me" class="z-2 relative rounded-full pt-4 pl-4" />
      <div class="p-4 pb-0 mb-[-10px] lg:block hidden">
        <strong>Emma {"<MarmadileManteater>"}</strong>
      </div>
      <div class="p-4">
        <p><Emoji emoji="🔥" /> <em>( she / her / hers )</em> &nbsp; <Emoji emoji="🏳️‍⚧️" /></p>
        <p>Jill of all trades <Emoji emoji="🧙‍♀️"/> &</p>
        <p>a master of JavaScript <Emoji emoji="🙃"/></p>
      </div>
    </div>
  </div>
</SocialPostsGrid>
<div class="text-center lg:text-left">
  <div class="overflow-hidden p-4 mt-4 bg-white dark:bg-zinc-800 rounded inline-block">
    {#each pageArray as _, i}
      <a class="hover:bg-zinc-200 dark:hover:bg-zinc-900 p-4 pt-5 pb-5 {i == page ? "font-bold underline dark:bg-zinc-900 bg-zinc-200": ""}" href="/feed/{i}">{i + 1}</a>
    {/each}
  </div>
</div>
