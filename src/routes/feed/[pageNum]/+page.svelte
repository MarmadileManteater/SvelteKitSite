
<script lang='ts'>
  import type { PageData } from './$types'
  import PaginatedGrid from '../../../components/social-posts/paginated-grid.svelte'
  
  export let data : PageData

  let { socialPosts, pageNum } = data.props
  $: data,  (()=>{
    socialPosts = data.props.socialPosts
    pageNum = data.props.pageNum
  })()
</script>

<div >
  <PaginatedGrid
    page={pageNum}
    PAGE_COUNT={10}
    {socialPosts}
  />
</div>

<svelte:head>
  <title>Social Feed</title>
  <meta name='author' content='Emma (MarmadileManteater)' />
  <meta name='description' content="Hello! I'm MarmadileManteater. My real name is Emma, and you can look it up. This is actually my social feed!" />
</svelte:head>
