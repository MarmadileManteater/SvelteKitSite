<script lang="ts">
  import UnifiedContentList from "../../../../components/unified-content-list/unified-content-list.svelte"
  import type { PageData } from "./$types"
  import type { IBlogPost } from "@marmadilemanteater/gh-static-site-lib/src/models/blog"
  export let data : PageData
  let tagData, pageCount, pageNum
  // Without this, client side routing on this url param just doesn't work right
  // See https://github.com/sveltejs/kit/issues/1449#issuecomment-842433085
  $: data,  (()=>{
    // and here you do the update (its like watch in vuejs)
    tagData = data.props.tagData
    pageCount = data.props.pageCount + 1
    pageNum = data.props.pageNum
    if (typeof document !== 'undefined') {
      document.title = `Blog`
    }
  })()
  $: previousPage = pageNum > 1?`/blog/page/${pageNum - 1}/`:'/blog/'
  $: posts = data.props.blogPosts as IBlogPost[]
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
          <a href={page > 0?`/blog/page/${page}/`:'/blog/'} class='p-5 hover:underline' >{page + 1}</a>
        {/if}
      {/each}
      {#if pageCount > pageNum + 1}
        <a href={`/blog/page/${pageNum + 1}/`} class='p-5 inline-block hover:underline'>Next Page &raquo;</a>
      {/if}
    </div>
  </div>
</div>
<svelte:head>
  <title>Blog</title>
</svelte:head>
