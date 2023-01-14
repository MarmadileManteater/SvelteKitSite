<script lang="ts">
  import UnifiedContentList from "../../components/unified-content-list/unified-content-list.svelte"
  import Emoji from "../../components/emoji/emoji.svelte"
  import type { PageData } from "./$types"
  export let data : PageData
  import type { IBlogPost } from "@marmadilemanteater/gh-static-site-lib/src/models/blog"
  let tagData = data.props.tagData
  let pageCount = data.props.pageCount
  $: posts = data.props.blogPosts as IBlogPost[]
</script>
<div class='project-list' style='overflow:hidden;'>
  <div class='md:rounded-t-xl'>
    <div class='rounded-t-xl lg:border border-solid border-black bg-white dark:bg-zinc-900 border-t'>
      <a download='my-blog.xml' href='/blog/rss.xml' class='hover:underline p-2 block'><Emoji emoji='📰' /> rss</a>
      <UnifiedContentList {...{ tagData, content: posts, startIndex: 0  }} />
      {#if pageCount > 1}
        <a href='/blog/page/1' class='p-5 inline-block hover:underline'>Next Page &raquo;</a>
      {/if}
    </div>
  </div>
</div>
<svelte:head>
  <title>Blog</title>
</svelte:head>
