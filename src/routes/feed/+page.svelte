
<script lang='ts'>
  import PaginatedGrid from '../../components/social-posts/paginated-grid.svelte'

  export let data

  let { socialPosts } = data.props
</script>

<div >
  <PaginatedGrid
    page={0}
    PAGE_COUNT={10}
    {socialPosts}
  />
</div>

<svelte:head>
  <title>Social Feed</title>
  <meta name='author' content='Emma (MarmadileManteater)' />
  <meta name='description' content="Hello! I'm MarmadileManteater. My real name is Emma, and you can look it up. This is actually my social feed!" />
</svelte:head>
