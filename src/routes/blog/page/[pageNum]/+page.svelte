<script lang="ts">
  import UnifiedContentList from "../../../../components/unified-content-list/unified-content-list.svelte"
  import Emoji from "../../../../components/emoji/emoji.svelte"
  import type { PageData } from "./$types"
  export let data : PageData
  import type { IBlogPost } from "@marmadilemanteater/gh-static-site-lib/src/models/blog";
  let tagData = data.props.tagData
  let pageCount = data.props.pageCount + 1
  let pageNum = data.props.pageNum
  $: posts = data.props.blogPosts as IBlogPost[]
  let previousPage = pageNum > 1?`/blog/${pageNum - 1}/`:'/blog/'
  console.log(pageCount)
  console.log(pageNum)
</script>
<div class='project-list' style='overflow:hidden;'>
  <div class='md:rounded-t-xl'>
    <div class='rounded-t-xl lg:border border-solid border-black bg-white dark:bg-zinc-900 border-t' style='overflow:hidden;'>
      <UnifiedContentList {...{ tagData, content: posts, startIndex: 1 }} />
      <a href={previousPage} class='p-5 inline-block hover:underline'>Previous Page &raquo;</a>
      {#each Array.from({ length: Math.ceil(pageCount) }, (_, i) => i).splice(pageNum - 2 > 0?pageNum - 2:0, 3) as page}
        {#if page === pageNum}
          <strong class='text-xl p-5'>{page + 1}</strong>
        {/if}
        {#if page !== pageNum}
          <a href={page > 0?`../${page}/`:'../../'} class='p-5 hover:underline' >{page + 1}</a>
        {/if}
      {/each}
      {#if pageCount > pageNum + 1}
        <a href={`../${pageNum + 1}/`} class='p-5 inline-block hover:underline'>Next Page &raquo;</a>
      {/if}
    </div>
  </div>
</div>
<svelte:head>
  <title>Blog</title>
</svelte:head>
