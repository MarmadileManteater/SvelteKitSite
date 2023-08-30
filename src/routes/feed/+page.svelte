
<script lang="ts">
  import PaginatedGrid from "../../components/social-posts/paginated-grid.svelte"
  export let data
  const PAGE_COUNT = 10;

  let { socialPosts } = data.props
  let pages = Math.ceil(socialPosts.length / PAGE_COUNT)
</script>

<div >
  <PaginatedGrid page={0} PAGE_COUNT={10} {socialPosts} />
</div>
