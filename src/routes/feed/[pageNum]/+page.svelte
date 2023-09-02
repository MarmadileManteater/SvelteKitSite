
<script lang="ts">
  import PaginatedGrid from "../../../components/social-posts/paginated-grid.svelte"
  import type { PageData } from "./$types"
  export let data : PageData
  const PAGE_COUNT = 10;
  let { socialPosts, pageNum } = data.props
  $: data,  (()=>{
    socialPosts = data.props.socialPosts
    pageNum = data.props.pageNum
  })()
  
  let pages = Math.ceil(socialPosts.length / PAGE_COUNT)
</script>

<div >
  <PaginatedGrid page={pageNum} PAGE_COUNT={10} {socialPosts} />
</div>

<svelte:head>
  <title>Social Feed</title>
  <meta name='author' content='Emma (MarmadileManteater)' />
  <meta name='description' content="Hello! I'm MarmadileManteater. My real name is Emma, and you can look it up. This is actually my social feed!" />
</svelte:head>
